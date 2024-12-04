import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { GetRequest } from '../../core/framework/api/api';

import { i21syncDeviceService } from '../../providers/irely/i21syncdevice-service';
import { SyncDeviceData } from '../../core/models/syncdevicedata';
import { SyncDeviceDataBRL } from '../../core/brl/implementation/syncdevicedata';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { CommonSQL } from '../../core/framework/sqlite/implementation/common-sql';

import { InvoiceBRL } from '../../core/brl/implementation/invoice';
import { InvoiceItemsBRL } from '../../core/brl/implementation/invoiceitems';
import { InvoiceTaxCodesBRL } from '../../core/brl/implementation/invoicetaxcodes';
import { ShiftBRL } from '../../core/brl/implementation/shift';
import { OutOfGasBRL } from '../../core/brl/implementation/outofgas';

import { Shift } from '../../core/models/shift';
import { OutOfGas } from '../../core/models/outofgas';

import { Invoice } from '../../core/models/invoice';
import { InvoiceItems } from '../../core/models/invoiceitems';
import { InvoiceTaxCodes } from '../../core/models/invoicetaxcodes';
import { GlobalInfo } from '../../core/models/globalinfo';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { DeviceToken } from '../../core/framework/push/models/device-token';

@IonicPage()
@Component({
  selector: 'page-shift-transfer',
  templateUrl: 'shift-transfer.html',
})
export class ShiftTransferPage extends BaseService<DeviceToken>  {
  data = [];
  globalInfo: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController, 
              private i21syncDeviceService: i21syncDeviceService,
              private syncDeviceDataBRL: SyncDeviceDataBRL,
              private sqliteBRL: CommonSQL,
              private invoiceBRL: InvoiceBRL,
              private InvoiceItemsBRL: InvoiceItemsBRL,
              private InvoiceTaxCodesBRL: InvoiceTaxCodesBRL,
              private ShiftBRL: ShiftBRL,
              private OutOfGasBRL: OutOfGasBRL,
              private globalBRL: GlobalInfoBRL,
              public http: Http) {
                super(http);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShiftTransferPage');

    this.tableStatus();
    this.userGlobalInfo();
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
    });
  }

  tableStatus() {
    var me = this;
    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    me.data.push({strTableName: 'shift', strDisplayName: 'Shift Information', dtmUploaded: null});
    me.data.push({strTableName: 'invoices', strDisplayName: 'Invoices', dtmUploaded: null});
    me.data.push({strTableName: 'outofgas', strDisplayName: 'Out Of Gas Reports', dtmUploaded: null});
    me.data.push({strTableName: 'payments', strDisplayName: 'Payments', dtmUploaded: null});
    me.data.push({strTableName: 'orders', strDisplayName: 'Update Orders', dtmUploaded: null});

    // Send Shift Information
    // Send Invoices
    // Send Out Of Gas Reports
    // Send Payments
    // Update Orders    

    loader.dismiss();
  }

  sendData(item) {    
    var me = this;
    console.log(item);

    let loader = me.loadingCtrl.create({content: "Fetching data...", enableBackdropDismiss: true});
    loader.present();

    switch(item.strTableName) {
      case 'shift':
        me.ShiftBRL.get(new Shift).then(res => {
          console.log(res);
          me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => { 
            console.log('syncmobileinvoices');
            console.log(data);
            loader.dismiss();
          });
        });
        break;
      case 'invoices':
        me.invoiceBRL.get(new Invoice).then(res => {
          console.log(res);
          me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => { 
            console.log('syncmobileinvoices');
            console.log(data);
            loader.dismiss();
          });
        });
        break;
      case 'outofgas':
        me.OutOfGasBRL.get(new OutOfGas).then(res => {
          console.log(res);
          me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => { 
            console.log('syncmobileinvoices');
            console.log(data);
            loader.dismiss();
          });
        });
        break;
      case 'payments':
        me.invoiceBRL.get(new Invoice).then(res => {
          console.log(res);
          me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => { 
            console.log('syncmobileinvoices');
            console.log(data);
            loader.dismiss();
          });
        });
        break;
      case 'orders':
         
        break;
      default:
        console.log(item);
        loader.dismiss();
    }

  }

}