import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';

import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Service } from '../../framework/_common/base/service';
import { Token } from '../../framework/_common/base/token';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Tankwagon } from '../../framework/models/tankwagon';

import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-invoice-completed',
  templateUrl: './invoice-completed.page.html',
  styleUrls: ['./invoice-completed.page.scss'],
})
export class InvoiceCompletedPage extends Service<Token> {
  @ViewChild('txtSearch', {static: false}) searchInput;

  data = [];
  customer = [];
  sites = [];
  currentFilter = '';
  currentCustomer = '';
  currentCustomerId = 0;
  currentSite = 0;
  searchValue: any;

  dynamicScrollHeight = "500px";
  dynamicScrollWidth = "1950px";

  constructor(public navCtrl: NavController
    , public loadingCtrl: LoadingController
    , public alertCtrl: AlertController
    , public commonSQL: CommonSQL
    , public http: HttpClient
    , public https: HTTP) {
      super(http, https);
  }

  ionViewDidEnter() {
    var me = this;
    me.getInvoiceList();

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
  }

  async getInvoiceList() {
    var me = this,
        _query = '';

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    if (me.searchValue !== "" && me.searchValue !== undefined) {
      _query = 'SELECT * FROM invoice where strInvoiceNo like \'%' + me.searchValue + '%\'' +
                                        ' or strCustomerNo like \'%' + me.searchValue + '%\'' +
                                        ' or strCustomerName like \'%' + me.searchValue + '%\'' +
                                        ' or strLocationName like \'%' + me.searchValue + '%\'' +
                                        ' or strComments like \'%' + me.searchValue + '%\'' +
                                        ' or strVoidComments like \'%' + me.searchValue + '%\'';                                        
    }
    else {
      _query = 'SELECT * FROM invoice';  
    }

    console.log(_query);
    
    me.commonSQL.getDataQuery(_query + me.currentFilter).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      me.dynamicScrollHeight = ((40 * me.data.length) + 700).toString() + 'px';

      var options = {  
        year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };  

      for(var x = 0; x <= me.data.length -1; x++) {
        me.data[x].dtmInvoiceDate = new Date(me.data[x].dtmInvoiceDate).toLocaleTimeString("en-US", options);

        if(me.data[x].ysnVoided != "true") {
          me.data[x].ysnVoided = "false";
        }
      }

      loader.dismiss();

      var _txtSearch = me.searchInput.el;
      _txtSearch.getElementsByTagName('input')[0].focus();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  async voidInvoice(item) {
    var me = this;
    console.log(item);

    if(item.ysnVoided == "false" || item.ysnVoided == false) return;

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to void invoice ' + item.strInvoiceNo + '?',
      backdropDismiss: false,
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            me.voidComment(item);
          }
        },
        {
          text: 'No',
          handler: () => {
            item.ysnVoided = 'false';
            console.log('void process canceled');
          }
        }
      ]
    });
    confirm.present();    
  }

  async voidComment(item) {
    var me = this;

    console.log(item);
    var _data = item.intOrderId;

    let alert = await me.alertCtrl.create({
      message: 'Void Invoice',
      backdropDismiss: false,
      inputs: [
        {
          name: 'comment',
          placeholder: 'Add Comment...'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            item.ysnVoided = 'false';
            console.log('void process canceled');
          }
        },
        {
          text: 'Void Invoice',
          handler: data => {            
            me.getbasic('/mobilebilling/api/invoice/getvoidinvoice?id='+_data).subscribe(res => { 
              console.log(res);
              me.commonSQL.updateDataQuery("UPDATE invoice SET ysnVoided = 'true', ysnSendToOffice = 'true', strVoidComments = '" + data.comment + "' WHERE intInvoiceId = '" + item.intInvoiceId + "'").then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                me.getInvoiceList();                              
              });              

              me.commonSQL.getDataQuery('SELECT * from invoiceitems WHERE intOrderId = \'' + item.intOrderId + '\'').then(res => {
                var _record = JSON.parse(JSON.stringify(res));
                for(var z = 0; z <= _record.length - 1; z++) {
                  var _id = _record[z].intContractDetailId;;
                  var _quantity = _record[z].dblQuantity;
                  var _itemid = _record[z].intItemId;
                  var _itemno = _record[z].strItemNo;
                  var _itemdesc = _record[z].strItemDescription;                  

                  // +++++ TANK WAGON INSERT +++++
                  var _tankwagon = [];
                  var _line = new Tankwagon;
                  _line = new Tankwagon;
                  _line.intItemId = _itemid;
                  _line.strItemNo = _itemid;
                  _line.strDescription = _itemdesc;
                  _line.dblQuantity = _quantity;
                  _line.strTransactionReference = 'Increases Inventory of Product';
                  _line.strTransactionType = 'Void Invoice';
                  _tankwagon.push(_line);      
                  me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res=>{console.log('TANKWAGON UPDATED');});
                  // +++++ TANK WAGON INSERT +++++

                  // me.commonSQL.updateByQuery('UPDATE loadinventory SET dblQuantityReturned = (dblQuantityReturned + ' + _quantity + ') WHERE intItemId = \'' + _itemid + '\'').then(res => { console.log(res); });
                  // me.commonSQL.updateDataQuery("UPDATE contractdetail SET dblAvailableQty = (dblAvailableQty + " + _quantity + ") WHERE intContractDetailId = " + _id).then(res => console.log(res));
                }
              });                          
              
            });
          }
        }
      ]
    });
    alert.present();
  }

}
