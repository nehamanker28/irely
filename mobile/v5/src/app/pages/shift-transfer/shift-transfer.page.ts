import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from "rxjs";
import { GetRequest } from '../../framework/_common/base/api';

import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';
import { SyncDeviceDataBRL } from '../../framework/brl/implementation/syncdevicedata';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { Shift } from '../../framework/models/shift';
import { OutOfGas } from '../../framework/models/outofgas';

import { Invoice } from '../../framework/models/invoice';
import { Service } from '../../framework/_common/base/service';
import { Token } from '../../framework/_common/base/token';

import { HTTP } from '@ionic-native/http/ngx';

@Component({
  selector: 'app-shift-transfer',
  templateUrl: './shift-transfer.page.html',
  styleUrls: ['./shift-transfer.page.scss'],
})
export class ShiftTransferPage extends Service<Token> {
  data = [];
  globalInfo: any;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController, 
              private i21syncDeviceService: i21SyncDeviceService,
              private syncDeviceDataBRL: SyncDeviceDataBRL,
              private commonSQL: CommonSQL,
              public https: HTTP,
              public http: HttpClient) {
                super(http, https);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ShiftTransferPage');

    this.tableStatus();
    this.userGlobalInfo();
  }

  userGlobalInfo() {
    var me = this;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {      
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
      }
    });
  }

  async tableStatus() {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
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

  async sendData(item) {    
    var me = this;
    console.log(item);

    let loader = await me.loadingCtrl.create({message: "Fetching data...", backdropDismiss: true});
    loader.present();

    switch(item.strTableName) {
      case 'shift':
        me.commonSQL.getData('shift').then(res => {
          console.log(res);
          me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => { 
            console.log('syncmobileinvoices');
            console.log(data);
            loader.dismiss();
          });
        });
        break;
      case 'invoices':
        me.commonSQL.getData('invoice').then(res => {
          console.log(res);
          me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => { 
            console.log('syncmobileinvoices');
            console.log(data);
            loader.dismiss();
          });
        });
        break;
      case 'outofgas':
        me.commonSQL.getData('outofgas').then(res => {
          console.log(res);
          me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => { 
            console.log('syncmobileinvoices');
            console.log(data);
            loader.dismiss();
          });
        });
        break;
      case 'payments':
        me.commonSQL.getData('payment').then(res => {
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
