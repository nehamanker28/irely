import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController, Platform  } from '@ionic/angular';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Service } from '../../framework/_common/base/service';
import { Token } from '../../framework/_common/base/token';
import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';

import { Configuration } from '../../framework/_common/configuration/configuration';
import { ReportService } from '../../providers/report.service';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-payment-list',
  templateUrl: './payment-list.page.html',
  styleUrls: ['./payment-list.page.scss'],
})
export class PaymentListPage extends Service<Token> {
  @ViewChild('txtSearch', {static: false}) searchInput;

  data = [];
  customer = [];
  sites = [];
  currentFilter = '';
  currentCustomer = '';
  currentCustomerId = 0;
  currentSite = 0;
  searchValue: any;

  currentSelected: any;
  previousSelected: any;

  dynamicScrollHeight = "500px";
  dynamicScrollWidth = "3000px";

  constructor(public navCtrl: NavController
    , public loadingCtrl: LoadingController
    , public alertCtrl: AlertController
    , public commonSQL: CommonSQL
    , public router: Router
    , private menu: MenuController
    , public https: HTTP
    , public http: HttpClient) {
      super(http, https);
      this.menu.enable(true);
  }

  ionViewDidLoad() {
    var me = this;
    me.getPaymentList();

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
  }

  ionViewDidEnter () {
    var me = this;
    me.getPaymentList();
    this.menu.enable(true);
  }

  async getPaymentList() {
    var me = this,
    _query = '';

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    if (me.searchValue !== "" && me.searchValue !== undefined) {
      _query = 'SELECT * FROM payment where strPaymentNo like \'%' + me.searchValue + '%\'' +
                                        ' or strCustomerNo like \'%' + me.searchValue + '%\'' +
                                        ' or strCustomerName like \'%' + me.searchValue + '%\'' +
                                        ' or strLocationName like \'%' + me.searchValue + '%\'' +
                                        ' or strMethod like \'%' + me.searchValue + '%\'' +
                                        ' or strCheckNumber like \'%' + me.searchValue + '%\'' +
                                        ' or strComments like \'%' + me.searchValue + '%\'' +
                                        ' or strVoidComments like \'%' + me.searchValue + '%\'';
    }
    else {
      _query = 'SELECT * FROM payment';
    }

    console.log(_query);

    me.commonSQL.getDataQuery(_query).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      me.dynamicScrollHeight = ((40 * me.data.length) + 700).toString() + 'px';

      var options = {
        year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
      };

      for(var x = 0; x <= me.data.length -1; x++) {
        me.data[x].dtmDatePaid = new Date(me.data[x].dtmDatePaid).toLocaleTimeString("en-US", options);

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

  openReceivePayment() {
    // this.navCtrl.push("CustomerPaymentPage");
    Configuration.globalFlag = false;
    this.router.navigateByUrl('/payment');
  }

  async voidInvoice(item) {
    var me = this;
    console.log(item);

    if(item.ysnVoided == "false" || item.ysnVoided == false) return;

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to void payment ' + item.strPaymentNo + '?',
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
    var _data = item.strPaymentNo;

    let alert = await me.alertCtrl.create({
      message: 'Void Payment',
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
          text: 'Void Payment',
          handler: data => {
           me.getbasic('/mobilebilling/api/payment/getvoidpayment?id='+_data).subscribe(res => {
              console.log(res);
              me.commonSQL.updateDataQuery("UPDATE payment SET ysnVoided = 'true', ysnSendToOffice = 'true', strVoidComments = '" + data.comment + "', dtmDateVoided = '" + new Date() + "' WHERE intPaymentId = " + item.intPaymentId).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                me.getPaymentList();
              });
            });
          }
        }
      ]
    });
    alert.present();
  }

}
