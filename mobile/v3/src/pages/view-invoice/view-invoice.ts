import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { CustomerBRL } from '../../core/brl/implementation/customer';
import { ConsumptionSiteBRL } from '../../core/brl/implementation/consumptionsite';
import { Http } from '@angular/http';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { DeviceToken } from '../../core/framework/push/models/device-token';
import { GetRequest } from '../../core/framework/api/api';

@IonicPage()
@Component({
  selector: 'page-view-invoice',
  templateUrl: 'view-invoice.html',
})
export class ViewInvoicePage extends BaseService<DeviceToken> {
  data = [];
  customer = [];
  sites = [];
  currentFilter = '';
  currentCustomer = '';
  currentCustomerId = 0;
  currentSite = 0;
  searchValue: any;

  dynamicScrollHeight = "500px";
  dynamicScrollWidth = "1750px";

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public loadingCtrl: LoadingController
    , public alertCtrl: AlertController
    , public customerBRL: CustomerBRL
    , public siteBRL: ConsumptionSiteBRL
    , public http: Http) {
      super(http);
  }

  ionViewDidLoad() {
    var me = this;
    me.getInvoiceList();

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
  }

  getInvoiceList() {
    var me = this,
        _query = '';

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
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
    
    me.customerBRL.getByQuery(_query + me.currentFilter).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      me.dynamicScrollHeight = ((40 * me.data.length) + 700).toString() + 'px';

      var options = {  
        year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
      };  

      for(var x = 0; x <= me.data.length -1; x++) {
        me.data[x].dtmInvoiceDate = new Date(me.data[x].dtmInvoiceDate).toLocaleTimeString("en-US", options);

        if(me.data[x].ysnVoided != "true") {
          me.data[x].ysnVoided = "false";
        }
      }

      loader.dismiss();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  voidInvoice(item) {
    var me = this;
    console.log(item);

    if(item.ysnVoided == "false") return;

    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to void invoice ' + item.strInvoiceNo + '?',
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

  voidComment(item) {
    var me = this;

    console.log(item);
    var _data = item.intOrderId;

    let alert = this.alertCtrl.create({
      title: 'Void Invoice',
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
              me.customerBRL.updateByQuery("UPDATE invoice SET ysnVoided = 'true', ysnSendToOffice = 'true', strVoidComments = '" + data.comment + "' WHERE intInvoiceId = " + item.intInvoiceId).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                me.getInvoiceList();                              
              });              

              me.customerBRL.getByQuery('SELECT * from invoiceitems WHERE intInvoiceId = ' + item.intInvoiceId).then(res => {
                var _record = JSON.parse(JSON.stringify(res));
                for(var z = 0; z <= _record.length - 1; z++) {
                  var _id = _record[z].intContractDetailId;;
                  var _quantity = _record[z].quantity;
                  me.customerBRL.updateByQuery("UPDATE contractdetail SET dblAvailableQty = (dblAvailableQty + " + _quantity + ") WHERE intContractDetailId = " + _id).then(res => console.log(res));
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
