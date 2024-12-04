import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController, Platform  } from '@ionic/angular';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Service } from '../../framework/_common/base/service';
import { Token } from '../../framework/_common/base/token';
import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';

import { Configuration } from '../../framework/_common/configuration/configuration';
import { ReportService } from '../../providers/report.service';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Payment } from '../../framework/models/payment';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { Shift } from '../../framework/models/shift';

import { HTTP } from '@ionic-native/http/ngx';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage extends Service<Token> {
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
  location
  currentLocation: any = '';

  pdfObj = null;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private commonSQL: CommonSQL,
              private globalBRL: GlobalInfoBRL,
              private plt: Platform,
              public https: HTTP,
              public http: HttpClient,
              private globalEventsService: GlobalEventsService,
              private reportService: ReportService,
              public router: Router,
              private menu: MenuController,
            ) {
              super(http, https);
              this.menu.enable(true);
              this.setObservables();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CustomerPaymentPage');
    var me = this;


    if(Configuration.navParams) {
      me.PaymentId = Configuration.navParams['PaymentId'];
      if (me.PaymentId != null) {
        me.loadPayment();
      }

      me.currentCustomer = Configuration.navParams['customerData'];
      if (me.currentCustomer !== null && me.currentCustomer !== undefined) {
        me.data["intEntityCustomerId"] = me.currentCustomer["intEntityCustomerId"];
        me.data["strCustomerNo"] = me.currentCustomer["strCustomerNumber"];
        me.data["strCustomerName"] = me.currentCustomer["strCustomerName"];
        me.data["strBillToAddress"] = me.currentCustomer["strBillToAddress"];
        me.data["strBillToCity"] = me.currentCustomer["strBillToCity"];
        me.data["strBillToState"] = me.currentCustomer["strBillToState"];
        me.data["strBillToZipCode"] = me.currentCustomer["strBillToZipCode"];

      }


    }

    me.locationSetup();
    // me.userGlobalInfo();
  }

  setObservables() {
    var me = this;

    console.log('setObservables');

    // ADD PAYMENT
    me.globalEventsService.getObservablePayment().subscribe((data) => {
      console.log(data);

      if(data && Configuration.globalFlag == false) {
        me.data["intEntityCustomerId"] = data.intEntityCustomerId;
        me.data["strCustomerNo"] = data.strCustomerNumber;
        me.data["strCustomerName"] = data.strCustomerName;
        me.data["strBillToAddress"] = data.strBillToAddress;
        me.data["strBillToCity"] = data.strBillToCity;
        me.data["strBillToState"] = data.strBillToState;
        me.data["strBillToZipCode"] = data.strBillToZipCode;

        Configuration.globalFlag = true;
      }


    });
  }

  userGlobalInfo() {
    var me = this;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
        me.currentLocation = (me.globalInfo['intLocation'] || '').toString();
        var _date = new Date();
        var datestring = _date.getFullYear().toString().substring(2,4) + "" + ("0"+(_date.getMonth()+1)).slice(-2) + "" +
        ("0" + _date.getDate()).slice(-2) + "" + ("0" + _date.getHours()).slice(-2) + "" + ("0" + _date.getMinutes()).slice(-2);  + "" + _date.getSeconds();
          me.data["strPaymentNo"] = 'PAY-' + (me.globalInfo.intDriverNumber || me.globalInfo.intDriverId) + '-' + datestring;
      }
    });
  }

  locationSetup() {
    var me = this;
    me.commonSQL.getDataQuery('select * from tblSMLocation order by strLocationName').then(res => {
      console.log(res);
      this.location = res;

      me.userGlobalInfo();

    });
  }

  loadPayment() {
    var me = this;
    me.commonSQL.getDataQuery('select * from payment where intPaymentId = \'' + me.PaymentId + '\'').then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
    });
  }

  voidPayment() {
    var me = this;
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

    Configuration.globalFlag = false;
    me.router.navigateByUrl('/customer-list');
  }

  async completePayment() {
    var me = this;

    if(me.data["strPaymentNo"] == null || me.data["strPaymentNo"] == '') {
      let confirm = await me.alertCtrl.create({
        message: 'Payment Number is required.',
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
    if(me.data["dblPayment"] == null || me.data["dblPayment"] == undefined) {
      let confirm = await me.alertCtrl.create({
        message: 'Payment Amount is required.',
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

    if(me.data["strCustomerNo"] == null || me.data["strCustomerNo"] == '') {
      let confirm = await me.alertCtrl.create({
        message: 'Customer is required.',
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



    var loader = await me.loadingCtrl.create({message: "Saving Payment...", backdropDismiss: true});
    loader.present();

    var _date = new Date();
    var location = JSON.stringify(me.location);
    var strLocationName = JSON.parse(location).filter(function (item) {
      if(item.intCompanyLocationId == me.currentLocation){
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
    _payment.intLocationId = parseInt(me.currentLocation.toString() || '0');
    _payment.strLocationName = me.data["strLocationName"];
    _payment.intEntityDriverId = me.globalInfo.intDriverId || me.globalInfo.intDriverNumber;
    _payment.strDriverNo = null;
    _payment.strDriverName = me.globalInfo.strFullName;
    _payment.intShiftId = me.globalInfo.intShiftId;
    _payment.intShiftNumber = me.globalInfo.intShiftCounter;
    _payment.dtmDatePaid = _date.toJSON();
    _payment.strMethod = me.data["strMethod"] || 'Cash';
    _payment.strCheckNumber = me.data["strCheckNumber"];
    _payment.dblPayment = me.data["dblPayment"];
    _payment.strComments = me.data["strComments"];
    _payment.ysnPosted = false;
    _payment.ysnCompleted = true;
    _payment.ysnVoided = false;
    _payment.ysnSendToOffice = false;

    me.currentPayment = _payment;

    console.log(me.currentPayment);

    me.commonSQL.addData(_payment['tablename'],_payment).then(res => {
      console.log(res);
      me.globalEventsService.getObservablePaymentClear();
      loader.dismiss();
      me.createPdf();
      me.sendDataToOffice();
      me.navCtrl.pop();
    });
  }

  logo() {
    return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
  }

  createPdf() {
    var me = this;
    var irelyImage = me.logo();
    var _companyname = localStorage.getItem('company_name') || '';
    var _address = localStorage.getItem('company_address') || '';
    var _county = localStorage.getItem('company_county') || '';
    var _city = localStorage.getItem('company_city') || '';
    var _state = localStorage.getItem('company_state') || '';
    var _zip = localStorage.getItem('company_zip') || '';

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
                        [{ text: _companyname, bold: true }, '', ''],
                        [_address + ' ' +  _county, '', ''],
                        [_city + ', ' + _state + ' ' + _zip, '', ''],
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
              [{text: 'Address:', style: 'shadedbox'}, {text: (me.data["strBillToAddress"] || '') + (me.data["strBillToCity"] || '') + ', ' + (me.data["strBillToState"] || '') + ', ' + (me.data["strBillToZipCode"] || '') + ',\n' + 'United States', alignment: 'left'}, {text: 'Notes:', style: 'shadedbox'}, {text: me.currentPayment.strComments || '', alignment: 'left'}]
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

    me.doInsertPDFInfo(_filename + ".pdf");//Kenneth 06.23.2021
    me.reportService.create(docDefinition, _filename.replace(/[/\\?%*:|"<>]/g, ''), false, true);

  }

  sendDataToOffice() {
    var me = this;
    var _shift = [],
        _payments = [],
        _data = [];

    me.commonSQL.getDataQuery('select * from shift').then(res => {
      _shift = res;
      _data = _shift[_shift.length-1];

      me.commonSQL.getDataQuery("select * from payment where ysnSendToOffice = 'false'").then(res => {
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

          me.commonSQL.updateDataQuery("UPDATE payment SET ysnSendToOffice = 'true' WHERE strPaymentNo = '" + me.data["strPaymentNo"] + "'").then(res => console.log(res));

        });

      });
    });

  }

  back() {
    this.navCtrl.pop().then(() => {
      this.globalEventsService.getObservablePaymentClear();
    });
  }

  doInsertPDFInfo(_filename:string){
    console.log('start doInsertPDFInfo');
    let me = this,
        pdfinfo = new tblMBILPDF();
      console.log(me.globalInfo);

        me.commonSQL.getData("shift").then(res=>{
          console.log('data get from shift');
          let shiftdata = res[res.length-1];
          pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
          pdfinfo.intShiftId = me.globalInfo.intShiftCounter;
          pdfinfo.intDriverId = me.globalInfo.intDriverNumber;
          pdfinfo.strFileName = _filename;
          pdfinfo.strFileType = "PAYMENT";
          me.commonSQL.addData('tblMBILPDF',pdfinfo).then(res=>{
            console.log('successfully inserted to tblMBILPDF');
            me.commonSQL.getData('tblMBILPDF').then(result=> console.log(result));
          });
        })

  }
}
