import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events, Platform  } from 'ionic-angular';
import { Http } from '@angular/http';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { DeviceToken } from '../../core/framework/push/models/device-token';

import { Configuration } from '../../core/framework/common/configuration';
import { ReportService } from '../../providers/irely/report-service';

import { PaymentBRL } from '../../core/brl/implementation/payment';
import { Payment } from '../../core/models/payment';
import { GlobalInfo } from '../../core/models/globalinfo';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { Location } from '../../core/models/location';
import { LocationBRL } from '../../core/brl/implementation/location';
import { ShiftBRL } from '../../core/brl/implementation/shift';
import { Shift } from '../../core/models/shift';

@IonicPage()
@Component({
  selector: 'page-customer-payment',
  templateUrl: 'customer-payment.html',
})
export class CustomerPaymentPage extends BaseService<DeviceToken> {
  data = [];
  detail = [];
  currentSort = '';
  currentFilter = ''; 
  currentCustomer = ''; 
  currentPayment: any;
  customers = "";
  _isCheck = true;
  PaymentId = null;
  globalInfo: any;
  location: object = [];

  pdfObj = null;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private locationBRL: LocationBRL,
              private paymentBRL: PaymentBRL,
              private shiftBRL: ShiftBRL,
              private events: Events,
              private globalBRL: GlobalInfoBRL,
              private plt: Platform, 
              public http: Http,
              private reportService: ReportService
            ) {
              super(http);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPaymentPage');
    var me = this;

    me.PaymentId = me.navParams.get('PaymentId');
    if (me.PaymentId != null) {  
      me.loadPayment();
    }

    me.currentCustomer = me.navParams.get('customerData');
    if (me.currentCustomer !== null && me.currentCustomer !== undefined) {
      me.data["intEntityCustomerId"] = me.currentCustomer["intEntityCustomerId"];
      me.data["strCustomerNo"] = me.currentCustomer["strCustomerNumber"];
      me.data["strCustomerName"] = me.currentCustomer["strCustomerName"];
    }    

    me.userGlobalInfo();
    me.locationSetup();
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
    });
  }

  locationSetup() {
    var me = this;
    me.locationBRL.getByQuery('select * from location order by strLocationName').then(res => {
      console.log(res);
      this.location = res;

      if(me.data['intLocation'] == null) {
        me.data['intLocation'] = Configuration.DefaultLocation;
      }
    });
  }

  loadPayment() {
    var me = this;
    me.paymentBRL.getByQuery('select * from payment where intPaymentId = ' + me.PaymentId).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
    });
  }

  methodChange(value, item) {
    var me = this;
    console.log(value);
    console.log(item);

    if(value == 'Cash') {
      me._isCheck = false;
    }
    else {
      me._isCheck = true;
    }    
    me.data['strMethod'] = value;
  }

  searchCustomer() {
    var me = this;

    this.events.subscribe('selectCustomer', (paramsVar) => {
      let loader = me.loadingCtrl.create({content: 'Loading Customer...', enableBackdropDismiss: true});
      loader.present();

      me.data["intEntityCustomerId"] = paramsVar.intEntityCustomerId;
      me.data["strCustomerNo"] = paramsVar.strCustomerNumber;
      me.data["strCustomerName"] = paramsVar.strCustomerName;
      me.data["strBillToAddress"] = paramsVar.strBillToAddress;      
      me.data["strBillToCity"] = paramsVar.strBillToCity;
      me.data["strBillToState"] = paramsVar.strBillToState;
      me.data["strBillToZipCode"] = paramsVar.strBillToZipCode;

      this.events.unsubscribe('selectCustomer');
      loader.dismiss();
    });

    this.navCtrl.push("SearchCustomerPage");
  }

  completePayment() {
    var me = this;    

    if(me.data["strPaymentNo"] == null || me.data["strPaymentNo"] == '') {
      let confirm = this.alertCtrl.create({
        message: 'Paymen Number is required.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      confirm.present();
      return;
    }

    var loader = this.loadingCtrl.create({content: "Saving Payment...", enableBackdropDismiss: true});
    loader.present();

    var _date = new Date();
    var location = JSON.stringify(me.location);
    var strLocationName = JSON.parse(location).filter(function (item) {
      if(item.intCompanyLocationId == me.data["intLocation"]){
        me.data["strLocationName"] = item.strLocationName;
        return item.strLocationName;
      }
      console.log(item);
    });
    
    var _payment = new Payment();
    _payment.intPaymentId = null;
    _payment.strPaymentNo = me.data["strPaymentNo"];
    _payment.intEntityCustomerId = me.data["intEntityCustomerId"];;
    _payment.strCustomerNo = me.data["strCustomerNo"];
    _payment.strCustomerName = me.data["strCustomerName"];
    _payment.intLocationId = me.data["intLocation"];
    _payment.strLocationName = me.data["strLocationName"];
    _payment.intEntityDriverId = me.globalInfo.intDriverId || me.globalInfo.intDriverNumber;
    _payment.strDriverNo = null;
    _payment.strDriverName = me.globalInfo.strFullName;
    _payment.intShiftId = me.globalInfo.intShiftId;
    _payment.intShiftNumber = me.globalInfo.intShiftCounter;
    _payment.dtmDatePaid = _date.toJSON();
    _payment.strMethod = me.data["strMethod"] || 'Check';
    _payment.strCheckNumber = me.data["strCheckNumber"];
    _payment.dblPayment = me.data["dblPayment"];
    _payment.strComments = me.data["strComments"];
    _payment.ysnPosted = false;
    _payment.ysnCompleted = true;
    _payment.ysnVoided = false;
    _payment.ysnSendToOffice = false;

    me.currentPayment = _payment;
    console.log(me.currentPayment);

    me.paymentBRL.add(_payment).then(res => {
      console.log(res);
      loader.dismiss();
      me.createPdf();
      me.sendDataToOffice();
      me.navCtrl.pop();
    });
  }

  logo() {
    return 'data:image/jpeg;base64,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';
  }

  createPdf() {
    var me = this;
    var irelyImage = me.logo();

    var _date = new Date();
    var _paymentDate = ("0"+(_date.getMonth()+1)).slice(-2) + "/" + ("0" + _date.getDate()).slice(-2) + "/" + _date.getFullYear();

    console.log(me.globalInfo);

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
            columns: [
                {
                    text: [
                        {
                            text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                        }
                    ],
                    margin: [0, 0, 35, 0],
                    alignment: 'right'
                }
            ]
        };
      },
      content: [
        {
          table: {
            widths: [ 105, '*', '*' ],
            body: [
              [
                { image: irelyImage, width: 100 },
                [
                  {
                    table: {
                      body: [
                        [{ text: 'iRely Propane Services', bold: true }, '', ''],
                        ['4242 Flagstaff', '', ''],
                        ['Fort Wayne, IN 46815', '', ''],
                        ['', '', ''],
                        ['', '', '']
                      ]
                    },
                    layout: 'noBorders'
                  }
                ],
                [
                  {
                    table: {
                      widths: [ '*' ],
                      body: [
                        [{ text: 'Payment Receipt', alignment: 'right', style: 'header',  margin: [0, 0, 0, 0], }],
                        [{ text: (new Date()).toDateString(), alignment: 'right', italics: true}],
                      ]
                    },
                    layout: 'noBorders'
                  }
                ],
              ]
            ]
          },
          layout: 'noBorders'
        },
        {text: '\n'},
        {
          style: 'tableExample',
          table: {
            widths: [90, '*', 80, '*'],
            body: [ 
              [{text: 'Location:', style: 'shadedbox'}, {text: me.currentPayment.strLocationName || '', alignment: 'left'}, {text: 'Driver:', style: 'shadedbox'}, {text: me.currentPayment.strDriverName || '', alignment: 'left'}],
              [{text: 'Currency:', style: 'shadedbox'}, {text: 'USD', alignment: 'left'}, {text: 'Date:', style: 'shadedbox'}, {text: _paymentDate || '', alignment: 'left'}, ],
              [{text: 'Customer No.:', style: 'shadedbox'}, {text: me.currentPayment.strCustomerNo || '', alignment: 'left'}, {text: 'Shift No:', style: 'shadedbox'}, {text: me.currentPayment.intShiftNumber || '', alignment: 'left'}, ],
              [{text: 'Customer Name:', style: 'shadedbox'}, {text: me.currentPayment.strCustomerName || '', alignment: 'left'}, {text: '', style: 'shadedbox'}, {text: '', alignment: 'left'}, ],
              [{text: 'Address:', style: 'shadedbox'}, {text: (me.data["strBillToAddress"] || '') + '\n' + (me.data["strBillToCity"] || '') + ', ' + (me.data["strBillToState"] || '') + ', ' + (me.data["strBillToZipCode"] || '') + ',\n' + 'United States', alignment: 'left'}, {text: 'Notes:', style: 'shadedbox'}, {text: me.currentPayment.strComments || '', alignment: 'left'}]
            ]
          }
        },
        {text: '\n'},
		    {text: '\n'},
        {
          style: 'shadedbox',
          bold: true,
          table: {
            widths: [150, 70, 120, 140],
            body: [
              [{text: 'Payment Number', alignment: 'left', style: 'tableHeader', border: [true, true, false, true]}, {text: 'Method', alignment: 'left', style: 'tableHeader', border: [false, true, false, true]}, {text: 'Check Number', alignment: 'right', style: 'tableHeader', border: [false, true, false, true]},{text: 'Amount', alignment: 'right', style: 'tableHeader', border: [false, true, true, true]}],
            ]
          },
        },
        // ++++++++++++++++++++++++++++++++++++++
        // BEGIN - DETAILS SHOULD BE DYNAMIC #1
        // ++++++++++++++++++++++++++++++++++++++
        {
          style: 'tableExample',
          table: {
            widths: [150, 70, 120, 140],
            body: [
                [{text: me.currentPayment.strPaymentNo || '', alignment: 'left', border: [false, false, false, false]}, {text: me.currentPayment.strMethod || '', alignment: 'left', border: [false, false, false, false]}, {text: me.currentPayment.strCheckNumber || '', alignment: 'right', border: [false, false, false, false]},{text: (parseFloat(me.currentPayment.dblPayment)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right', border: [false, false, false, false]}],
            ]
          },
        },
        // ++++++++++++++++++++++++++++++++++++++
        // END - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++++++
        {text: '\n'},
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
          margin: [0, 10, 0, 10],
          fontfamily: 'Wingdings'
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%'
        },
        body: {
          fontSize: 12,
        },
        shadedbox: {
          alignment: 'left', 
          fillColor: '#cccccc',
          bold: true
        }
      },
      defaultStyle: {
          fontSize: 11.5,
      }      
    };

    //RCV-M-20171106132145

    var _now = new Date(),
        _filename = "RCV-M-" +_now.getFullYear() + ("0"+(_now.getMonth()+1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours()+1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
    me.reportService.create(docDefinition, _filename, true);

  }

  sendDataToOffice() {
    var me = this;
    var _shift = [],
        _payments = [],
        _data = [];
    
    me.shiftBRL.get(new Shift).then(res => {
      _shift = res;
      _data = _shift[0];

      me.paymentBRL.getByQuery("select * from payment where ysnSendToOffice = 'false'").then(res => {
        _payments = res;

        _data['tblMBILPayments'] = [];

        for(var x = 0; x<=_payments.length-1; x++) {
          var _temp_payment = [];
          _temp_payment = _payments[x];                  
          console.log(_temp_payment);
          _data['tblMBILPayments'].push(_temp_payment);
        }

        console.log('payment');
        console.log(_data);

        me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => { 
          console.log('syncentireshift');
          console.log(res);
          
          me.paymentBRL.updateByQuery("UPDATE payment SET ysnSendToOffice = 'true' WHERE strPaymentNo = '" + me.data["strPaymentNo"] + "'").then(res => console.log(res));

        });

      });
    });

  }

}
