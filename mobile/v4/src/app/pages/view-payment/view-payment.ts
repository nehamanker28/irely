import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { PaymentBRL } from '../../core/brl/implementation/payment';
import { Http } from '@angular/http';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { DeviceToken } from '../../core/framework/push/models/device-token';
import { GetRequest } from '../../core/framework/api/api';

@IonicPage()
@Component({
  selector: 'page-view-payment',
  templateUrl: 'view-payment.html',
})
export class ViewPaymentPage extends BaseService<DeviceToken> {
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
    , public navParams: NavParams
    , public loadingCtrl: LoadingController
    , public alertCtrl: AlertController
    , public paymentBRL: PaymentBRL
    , public http: Http) {
      super(http);
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
  }

  getPaymentList() {
    var me = this,
    _query = '';

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
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

    me.paymentBRL.getByQuery(_query).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      me.dynamicScrollHeight = ((40 * me.data.length) + 700).toString() + 'px';

      var options = {  
        year: "numeric", month: "short",  
        day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
      };  

      for(var x = 0; x <= me.data.length -1; x++) {
        me.data[x].dtmDatePaid = new Date(me.data[x].dtmDatePaid).toLocaleTimeString("en-US", options);

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

  openReceivePayment() {
    this.navCtrl.push("CustomerPaymentPage");
  }

  voidInvoice(item) {
    var me = this;
    console.log(item);

    if(item.ysnVoided == "false") return;

    let confirm = this.alertCtrl.create({
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

  voidComment(item) {
    var me = this;

    console.log(item);
    var _data = item.strPaymentNo;

    let alert = this.alertCtrl.create({
      title: 'Void Payment',
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
            // me.getbasic('/mobilebilling/api/payment/getvoidpayment?id='+_data).subscribe(res => { 
            //   console.log(res);
              me.paymentBRL.updateByQuery("UPDATE payment SET ysnVoided = 'true', ysnSendToOffice = 'true', strVoidComments = '" + data.comment + "', dtmDateVoided = '" + new Date() + "' WHERE intPaymentId = " + item.intPaymentId).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                me.getPaymentList();                            
              });
            // });
          }
        }
      ]
    });
    alert.present();
  }

}