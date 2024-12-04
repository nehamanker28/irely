import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Platform  } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { ReportService } from '../../providers/report.service';

import { OutOfGas } from '../../framework/models/outofgas';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@Component({
  selector: 'app-invoice-outofgas',
  templateUrl: './invoice-outofgas.page.html',
  styleUrls: ['./invoice-outofgas.page.scss'],
})
export class InvoiceOutofgasPage implements OnInit {

  currentCustomerId = 0;
  outOfGas = new OutOfGas();
  device = [];
  currentSiteId = 0;
  pdfObj = null;
  currentCustomerData = [];
  currentSiteData = [];

  constructor(public navCtrl: NavController, 
          public navParams: NavParams,
          public loadingCtrl: LoadingController,
          public alertCtrl: AlertController,
          private commonSQL: CommonSQL,
          private plt: Platform, 
          private reportService: ReportService,
          private keyboard: Keyboard) {
  }

  ngOnInit() {
  }

  ionViewDidLoad() {
    var me = this;

    me.currentCustomerData = me.navParams.get('currentCustomerData');
    me.currentSiteData = me.navParams.get('currentSiteData');
    me.currentCustomerId = me.currentCustomerData['intEntityCustomerId'];
    me.currentSiteId = me.currentSiteData['intSiteId'];

    //Manual Binding
    me.outOfGas.intCustomerId = me.currentSiteData['intEntityCustomerId'];
    me.outOfGas.intSiteId = me.currentSiteData['intSiteId'];

    me.outOfGas.strCustomerNo = me.currentCustomerData['strCustomerNumber'];
    me.outOfGas.strCustomerName = me.currentCustomerData['strCustomerName'];
    me.outOfGas.strSiteNo = me.currentSiteData['intSiteNumber'];
    me.outOfGas.strSiteDescription = me.currentCustomerData['strDescription'];
        

    console.log('Delivery - Out Of Gas Page');
    
    me.getOutOfGas();
    me.getDevice()
  }

  hideKeyboard() {
    this.keyboard.hide();
  }

  clearInputValue(elem) {
    elem.getElementRef().nativeElement.children[0].select();
  }

  async getOutOfGas() {
    var me = this;
    
    let loader = await me.loadingCtrl.create({message: "Loading Data...", backdropDismiss: true});
    loader.present();

    console.log('SELECT * FROM outofgas where intSiteId = \'' + me.outOfGas.intSiteId  + '\' AND intCustomerId = \'' + me.outOfGas.intCustomerId + '\'');
    me.commonSQL.getDataQuery('SELECT * FROM outofgas where intSiteId = \'' + me.outOfGas.intSiteId  + '\' AND intCustomerId = \'' + me.outOfGas.intCustomerId + '\'').then(res => {
      me.outOfGas = JSON.parse(JSON.stringify(res));

      console.log(me.outOfGas);
      loader.dismiss();
    })
    .catch(e => {
      console.log(e);
      loader.dismiss();
    });
  }

  async getDevice() {
    var me = this;

    let loader = await me.loadingCtrl.create({message: "Loading Device...", backdropDismiss: true});
    loader.present();

    console.log('SELECT * FROM tblTMSiteDevice where intSiteId = \'' + me.outOfGas.intSiteId + '\'');
    me.commonSQL.getDataQuery('SELECT * FROM tblTMSiteDevice where intSiteId = \'' + me.outOfGas.intSiteId + '\'').then(res => {
      me.device = JSON.parse(JSON.stringify(res));

      console.log(me.device);

      if(me.device.length > 0) {
        me.device = me.device[0];

        me.outOfGas.dblCapacity = me.device['dblTankCapacity'];
        me.outOfGas.strSerialNo = me.device['strSerialNumber'];
        me.outOfGas.strTankDescription = me.device['strTankDescription'];        
      }
      
      loader.dismiss();
    })
    .catch(e => {
      console.log(e);
      loader.dismiss();
    });
  }

  async cancel() {
    let confirm = await this.alertCtrl.create({
      message: 'Are you sure you want to cancel?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          text: 'No',
          handler: () => {
            
          }
        }
      ]
    });
    confirm.present();  
  }

  async save() {
    var me = this;
    let loader = await this.loadingCtrl.create({message: "Saving...", backdropDismiss: true});
    loader.present();
    me.commonSQL.updateData(me.outOfGas['tablename'],me.outOfGas).then(res => {
      this.createPdf(me.outOfGas);
      loader.dismiss();      
    });
  }

  logo() {
    return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
  }

  createPdf(record: any) {
    console.log(record);

    var me = this;
    var irelyImage = me.logo();
    var _companyname = localStorage.getItem('company_name') || '';
    var _address = localStorage.getItem('company_address') || '';
    var _county = localStorage.getItem('company_county') || '';
    var _city = localStorage.getItem('company_city') || '';
    var _state = localStorage.getItem('company_state') || '';
    var _zip = localStorage.getItem('company_zip') || '';

    var _driver = '';
    var _drivername = '';

    var _billingaddress = '';
    var _billingaddress2 = '';

    var docDefinition = {
      content: [
        {
          table: {
            widths: [ 155, '*', '*' ],
    
            body: [
              [
                { image: irelyImage, width: 100 },
                {}
              ]
            ]
          },
          layout: 'noBorders'
        },
        {
          table: {
            headerRows: 1,
            widths: [ '*', '*', '*' ],
    
            body: [
                [{ text: _companyname, bold: true }, '', ''],
                [_address + ' ' +  _county, '', ''],
                [_city + ', ' + _state + ' ' + _zip, '', ''],
                ['', '', ''],
                ['', '', '']
            ]
          },
          layout: 'noBorders'
        },
        { text: 'Out of Gas Report', style: 'header' },  
        {   
          table: {
            headerRows: 1,
            widths: [ 100, '*', 100, '*' ],    
            body: [
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [{ text: 'Customer:', alignment: 'left' },{ text: me.outOfGas.strCustomerNo || '', alignment: 'left' },{ text: 'Driver:', alignment: 'left' },{ text: me.outOfGas.strDriverNumber || '', alignment: 'left' }],
              [ '', me.outOfGas.strCustomerName || '', '', '' ],
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [{ text: 'Billing Address:', alignment: 'left' },{ text: me.outOfGas.strCustomerBillingAddressA || '', alignment: 'left' },{ text: 'Date:', alignment: 'left' },{ text: me.outOfGas.dtmDate || '', alignment: 'left' }],
              [ '', me.outOfGas.strCustomerBillingAddressB || '', '', '' ],
              [ '', '', '', '' ],
            ],
          },
          layout: 'noBorders'
        },
        {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
        {   
          table: {
            headerRows: 1,
            widths: [ 100, '*', 100, '*' ],    
            body: [
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [{ text: 'Site Number:', alignment: 'left' },{ text: me.outOfGas.strSiteNo || '', alignment: 'left' },{ text: 'Serial No:', alignment: 'left' },{ text: me.outOfGas.strSerialNo || '', alignment: 'left' }],
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [{ text: 'Site Address:', alignment: 'left' },{ text: me.outOfGas.strSiteAddressA || '', alignment: 'left' },{ text: 'Capacity:', alignment: 'left' },{ text: me.outOfGas.dblCapacity || '', alignment: 'left' }],
              [ '', me.outOfGas.strSiteAddressB || '', '', '' ],
              [ '', '', '', '' ],
              ['','',{ text: 'Description:', alignment: 'left' },{ text: me.outOfGas.strTankDescription || '', alignment: 'left' }],
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [ '', '', '', '' ],
            ],
          },
          layout: 'noBorders'
        },
        {   
          table: {
            headerRows: 1,
            widths: [ 120, '*', '*', '*' ],    
            body: [
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [ '', '', '', '' ],
              [{ text: 'Leak Test Status:', alignment: 'left' },{ text: me.outOfGas.strLeakTestStatus || '', alignment: 'left' },{},{}],              
              [ '', '', '', '' ],
              [{ text: 'Minutes Held:', alignment: 'left' },{ text: me.outOfGas.dblMinutesHeld || '', alignment: 'left' },{},{}],
              [ '', '', '', '' ],
              [{ text: 'Pressure (psi):', alignment: 'left' },{ text: me.outOfGas.dblPressureReading || '', alignment: 'left' },{},{}],
              [ '', '', '', '' ],
              [{ text: 'Tagged and Locked:', alignment: 'left' },{ text: me.outOfGas.ysnTaggedLocked || '', alignment: 'left' },{},{}],
              [ '', '', '', '' ],
              [{ text: 'Customer Notified:', alignment: 'left' },{ text: me.outOfGas.ysnCustomerNotified || '', alignment: 'left' },{},{}],
              [ '', '', '', '' ],
              [{ text: 'Applience Lit:', alignment: 'left' },{ text: me.outOfGas.ysnAppliancesLit || '', alignment: 'left' },{},{}],
              [ '', '', '', '' ],
              [{ text: 'Notes:', alignment: 'left' },{ text: me.outOfGas.strNoted || '', alignment: 'left' },{},{}],
              [ '', '', '', '' ],
            ],
          },
          layout: 'noBorders'
        },        
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
          fontSize: 12
        }
      },
      defaultStyle: {
          fontSize: 11.5
      }
    }

    var _now = new Date(),
        _filename = "Delivery-Out-Of-Gas_" +_now.getFullYear() + ("0"+(_now.getMonth()+1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours()+1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
    me.reportService.create(docDefinition, _filename.replace(/[/\\?%*:|"<>]/g, ''));

    // this.navCtrl.pop().then(() => {
    //   this.events.publish('closeInvoice');
    // });
  }

}
