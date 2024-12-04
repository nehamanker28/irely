import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController, LoadingController, AlertController } from '@ionic/angular';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { async } from 'rxjs/internal/scheduler/async';

import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';
 
@Component({
  selector: 'app-customer',
  templateUrl: './customer.page.html',
  styleUrls: ['./customer.page.scss'],
})
export class CustomerPage implements OnInit {
  @ViewChild('txtSearch', {static: false}) searchInput;

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
    public commonSQL: CommonSQL,
    private menu: MenuController) {
      this.menu.enable(true);
  }

  ngOnInit() {
    this.menu.enable(true);
  }

  ionViewDidEnter() {
    var me = this;
    me.userGlobalInfo();
    me.getCustomerList();

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
    this.menu.enable(true);
  }

  sortFilter(query: string) {
    var me = this;

    if (query && query !== '') {
      me.currentFilter = ' where strName like \'%' + query +'%\' ';  
    }
    else {
      me.currentFilter = '';
    }

    me.getCustomerList();
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

  async getCustomerList() {
    var me = this,
        _query = '';

    me.createInvoiceButton = true;
    me.createPaymentButton = true;
    me.data = [];

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    if (me.searchValue !== "" && me.searchValue !== undefined) {
      _query = 'SELECT * FROM tblARCustomer where strName like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strCustomerNumber like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strCustomerName like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strBillToAddress like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' order by strCustomerName LIMIT 50 ';
    }
    else {
      _query = 'SELECT * FROM tblARCustomer order by strCustomerName LIMIT 50';  
    }

    console.log(_query);
    
    me.commonSQL.getDataQuery(_query + me.currentFilter).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      loader.dismiss(); 
      var _txtSearch = me.searchInput.el;
      _txtSearch.getElementsByTagName('input')[0].focus();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  async showInvoice() {
    var me = this;
    console.log(me.currentCustomer + ' ' + me.currentCustomerId + ' ' + me.globalInfo['intLocation']);

    var _createInvoice = await me.alertCtrl.create({
      header: 'Create Invoice',
      message: 'Is this invoice a metered delivery?',
      cssClass: 'order-msgbox',
      buttons: [
        {
          text: 'Yes',
          handler: () => { 
            console.log(me.customer);
            Configuration.navParams = {customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: true};
            me.router.navigateByUrl('/invoice');
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log(me.customer);
            Configuration.navParams = {customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: false};
            me.router.navigateByUrl('/invoice');
          }
        }
      ]
    });

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
              _createInvoice.present();
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

  reorderItems(indexes) {
    let element = this.data[indexes.from];
    this.data.splice(indexes.from, 1);
    this.data.splice(indexes.to, 0, element);
  }

  reorderSites(indexes) {
    let element = this.sites[indexes.from];
    this.sites.splice(indexes.from, 1);
    this.sites.splice(indexes.to, 0, element);
  }

  showCustomerDetails(item) {
    var me = this;
    Configuration.navParams = {customerDetail: item, globalInfo: me.globalInfo, sites: me.sites};
    me.router.navigateByUrl('/customer-detail-info');
  }

  async getConsumptionSites() {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    console.log(me.currentCustomerId);

    var _query = 'SELECT * FROM tblTMSite left join tblTMSiteDevice on tblTMSiteDevice.intSiteId = tblTMSite.intSiteId where tblTMSite.intEntityId = \'' + me.currentCustomerId + '\'';
    console.log(_query);
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

  selectConsumptionSite(site) {
    console.log(site);
    if (site['intSiteId'] !== null && site['intSiteId'] !== "") {
      this.currentSite = site['intSiteId'];
    }    
  }

  showOOG(site) {
    console.log(site);
    console.log(this.customer);
    // this.navCtrl.push("DeliveryOutofgasPage", { currentCustomerData: this.customer, currentSiteData: site });
  }

  showPayment() {
    var me = this;
    Configuration.navParams = {customerData: me.customer, isFromCustomer: true};
    me.router.navigateByUrl('/payment');
  }

  formatDate(value)
  {
    return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear() + ' ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
  }

  getDateFormat(value) {
    var options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };  
    return value.toLocaleTimeString("en-US", options);
  }

}
