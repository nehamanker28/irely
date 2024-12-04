import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, LoadingController, AlertController } from '@ionic/angular';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { async } from 'rxjs/internal/scheduler/async';

import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-customer-detail-info',
  templateUrl: './customer-detail-info.page.html',
  styleUrls: ['./customer-detail-info.page.scss'],
})
export class CustomerDetailInfoPage implements OnInit {

  data = [];
  customer = [];
  sites = [];
  currentFilter = '';
  currentCustomer = '';
  currentCustomerId = 0;
  currentSite = 0;
  searchValue: any;
  globalInfo: any;
  createInvoiceButton: boolean = true;
  createPaymentButton: boolean = true;
  showSearchbar: boolean = false;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private router: Router,
    private menu: MenuController,
    public commonSQL: CommonSQL) {
      this.menu.enable(true);
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var me = this;
    console.log('customer details');
    console.log(Configuration.navParams['customerDetail']);
    if(Configuration.navParams['customerDetail']) {
      me.customer = Configuration.navParams['customerDetail'];
      me.sites = Configuration.navParams['sites'];
      me.globalInfo = Configuration.navParams['globalInfo'];

      me.getConsumptionSites();
      if(me.globalInfo == null || me.globalInfo == undefined) {
        me.userGlobalInfo();
      }
    }
  }

  userGlobalInfo() {
    var me = this;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
      }
    }).catch(e => {
      console.log
      if(me.globalInfo == null || me.globalInfo == undefined) {
        me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
          console.log(res);
          if(res[0]) {
            me.globalInfo = res[0];
          }
        });
      }
    });
  }

  async getConsumptionSites() {
    var me = this;

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    var _query = "select *, ysnTaxable as ysnSiteTaxable, (select strDeviceType from tblTMSiteDevice where (tblTMSiteDevice.dblTankCapacity > 0 or tblTMSiteDevice.strDeviceType IS NOT NULL) and tblTMSiteDevice.intSiteID = tblTMSite.intSiteID LIMIT 1) as strDeviceType, (select GROUP_CONCAT(strSerialNumber,'/') as strSerialNumber from tblTMSiteDevice where (tblTMSiteDevice.strSerialNumber <> '' and tblTMSiteDevice.strSerialNumber IS NOT NULL) and tblTMSiteDevice.intSiteID = tblTMSite.intSiteID LIMIT 1) as strSerialNumber from tblTMSite where tblTMSite.intCustomerID = '" + me.customer['intCustomerId'] + "' order by tblTMSite.intSiteNumber";
    console.log('SITE ==> ',_query);
    me.commonSQL.getDataQuery(_query).then(res => {

      me.sites = JSON.parse(JSON.stringify(res));
      console.log('sites');
      console.log(me.sites);
      loader.dismiss();
    })
    .catch(e => {
      console.log(e);
      loader.dismiss();
    });
  }

  async showInvoice() {
    var me = this;


    var _createInvoice = await me.alertCtrl.create({
      header: 'Create Invoice',
      message: 'Is this invoice a metered delivery?',
      cssClass: 'order-msgbox',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            console.log(me.customer);
            Configuration.stopReload = false;
            Configuration.InvoiceRecord = [];
            Configuration.navParams = {customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: true};
            me.router.navigateByUrl('/invoice');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log(me.customer);
            Configuration.stopReload = false;
            Configuration.InvoiceRecord = [];
            Configuration.navParams = {customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: false};
            me.router.navigateByUrl('/invoice');
          }
        }
      ]
    });

    // var _collectCashMessage = await me.alertCtrl.create({
    //   header: 'Warning',
    //   message: 'Please collect cash before dispensing.',
    //   cssClass: 'order-msgbox',
    //   buttons: [
    //     {
    //       text: 'Ok',
    //       handler: () => {
    //         _createInvoice.present();
    //       }
    //     }
    //   ]
    // });

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

    let confirm = await me.alertCtrl.create({
      header: 'Create Invoice',
      message: 'Are you sure you want to continue?',
      cssClass: 'order-msgbox',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            if(me.globalInfo['ysnShiftOnGoing'] == 'true' || me.globalInfo['ysnShiftOnGoing'] == true) {
              if(me.customer['dblCreditLimit'] <=0){
                // _collectCashMessage.present();
                _createInvoice.present();
              }else{
                _createInvoice.present();
              }

            }
            else {
              _createInvoiceInvalid.present();
            }
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

  showPayment() {
    var me = this;
    console.log(me.customer);
    Configuration.stopReload = false;
    Configuration.InvoiceRecord = [];
    Configuration.navParams = {customerData: me.customer, isFromCustomer: true};
    me.router.navigateByUrl('/payment');
  }

}
