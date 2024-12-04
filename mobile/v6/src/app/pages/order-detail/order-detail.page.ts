import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, Platform, MenuController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { Configuration } from '../../framework/_common/configuration/configuration';
import { OrderBRL } from '../../framework/brl/implementation/order';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage implements OnInit {

  detail = [];
  globalInfo:[];
  delivered = 'open';

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public globalBRL: GlobalInfoBRL,
    private router: Router,
    private menu: MenuController,
    private orderBRL: OrderBRL,
    private commonSQL:CommonSQL) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var me = this;
    me.detail = Configuration.navParams['orderDetail'];
    console.log(me.detail);

    me.delivered = me.detail['strOrderStatus'] || 'open';

    me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
        console.log('global info ==> ', me.globalInfo)
        console.log(me.globalInfo)
      }
    });
  }

  async buildInvoice() {
    var me = this;
    var _createInvoiceInvalid = await me.alertCtrl.create({
      message: 'Shift has not yet started!',
      buttons: [
        {
          text: 'Ok',
          handler: () => {

          }
        }
      ]
    });
    if(me.detail['dblCreditLimit'] <= 0){
      let confirm = await me.alertCtrl.create({
        header: 'Warning',
        message: 'Please collect cash before dispensing.',
        buttons: [
          {
            text: 'OK',
            handler: () => {
              if (me.globalInfo['ysnShiftOnGoing'] == true || me.globalInfo['ysnShiftOnGoing'] == 'true') {
                Configuration.stopReload = false;
                Configuration.InvoiceRecord = [];
                me.orderBRL.buildInvoice(me.detail, false).then(res => {
                  console.log(res);
                  Configuration.navParams = { invoice: res, isMeter: true }; // MBIL-546
                  me.router.navigateByUrl('/invoice');
                });
              }
              else {
                _createInvoiceInvalid.present();
              }
            }
          }
        ]
      });
      confirm.present();
    }else{
      if (me.globalInfo['ysnShiftOnGoing'] == true || me.globalInfo['ysnShiftOnGoing'] == 'true') {
        Configuration.stopReload = false;
        Configuration.InvoiceRecord = [];
        me.orderBRL.buildInvoice(me.detail, false).then(res => {
          console.log(res);
          Configuration.navParams = { invoice: res, isMeter: true }; // MBIL-546
          me.router.navigateByUrl('/invoice');
        });
      }
      else {
        _createInvoiceInvalid.present();
      }
    }



  }
}
