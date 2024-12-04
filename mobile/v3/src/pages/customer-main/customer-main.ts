import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { CustomerBRL } from '../../core/brl/implementation/customer';
import { ConsumptionSiteBRL } from '../../core/brl/implementation/consumptionsite';
import { OrderBRL } from '../../core/brl/implementation/order';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { GlobalInfo } from '../../core/models/globalinfo';

@IonicPage()
@Component({
  selector: 'page-customer-main',
  templateUrl: 'customer-main.html',
})
export class CustomerMainPage {
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

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public loadingCtrl: LoadingController
    , public alertCtrl: AlertController
    , public customerBRL: CustomerBRL
    , public orderBRL: OrderBRL
    , public globalBRL: GlobalInfoBRL
    , public siteBRL: ConsumptionSiteBRL) {

  }

  ionViewDidLoad() {
    var me = this;
    me.getCustomerList();
    me.userGlobalInfo();

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    })
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
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
    });
  }

  getCustomerList() {
    var me = this,
        _query = '';

    me.createInvoiceButton = true;
    me.createPaymentButton = true;
    me.data = [];

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    if (me.searchValue !== "" && me.searchValue !== undefined) {
      _query = 'SELECT * FROM customer where strName like \'%' + me.searchValue + '%\'' +
                                        ' or strCustomerNumber like \'%' + me.searchValue + '%\'' +
                                        ' or strCustomerName like \'%' + me.searchValue + '%\'' +
                                        ' or strBillToAddress like \'%' + me.searchValue + '%\'';
    }
    else {
      _query = 'SELECT * FROM customer';  
    }

    console.log(_query);
    
    me.customerBRL.getByQuery(_query + me.currentFilter).then(res => {
      me.data = JSON.parse(JSON.stringify(res));



      loader.dismiss(); 
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  showInvoice() {
    var me = this;
    console.log(me.currentCustomer + ' ' + me.currentCustomerId + ' ' + me.globalInfo['intLocation']);

    let confirm = this.alertCtrl.create({
      title: 'Create Invoice',
      message: 'Are you sure you want to continue?',
      cssClass: 'order-msgbox',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            if(me.globalInfo['ysnShiftOnGoing'] == 'true' || me.globalInfo['ysnShiftOnGoing'] == true) {            
              confirm = this.alertCtrl.create({
                title: 'Create Invoice',
                message: 'Is this invoice a metered delivery?',
                cssClass: 'order-msgbox',
                buttons: [
                  {
                    text: 'Yes',
                    handler: () => {
                      // me.orderBRL.buildInvoiceNoOrder(me.currentCustomer, me.currentCustomerId, me.globalInfo['intLocation']).then(res => {
                      //   console.log(res);
                      //   me.navCtrl.push("CustomerInvoicePage", { invoice: res });
                      // });  
                      me.navCtrl.push("CustomerInvoicePage", { customer: me.customer, isFromCustomer: true });
                    }
                  },
                  {
                    text: 'No',
                    handler: () => {
                      // me.orderBRL.buildInvoiceNoOrder(me.currentCustomer, me.currentCustomerId, me.globalInfo['intLocation']).then(res => {
                      //   me.navCtrl.push("CustomerInvoicePage", { invoice: res });
                      // });
                      me.navCtrl.push("CustomerInvoicePage", { customer: me.customer, isFromCustomer: true });
                    }
                  }
                ]
              });
              confirm.present();
            }
            else {
              confirm = this.alertCtrl.create({
                message: 'Shift has not yet started!',
                buttons: [
                  {
                    text: 'Ok',
                    handler: () => {
                    }
                  }
                ]
              });
              confirm.present();
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


    // let confirm = this.alertCtrl.create({
    //   title: 'New Invoice',
    //   message: 'Is this invoice a metered delivery?',    
    //   buttons: [
    //     {
    //       text: 'Yes',
    //       handler: () => {
    //         // this.navCtrl.push("CustomerInvoicePage", { invoice: me.currentCustomer });
    //         me.orderBRL.buildInvoiceNoOrder(me.currentCustomer, me.currentCustomerId, me.globalInfo['intLocation']).then(res => {
    //           console.log(res);
    //           me.navCtrl.push("CustomerInvoicePage", { invoice: res });
    //         });
    //       }

    //     },
    //     {
    //       text: 'No',
    //       handler: () => {
    //         me.orderBRL.buildInvoiceNoOrder(me.currentCustomer, me.currentCustomerId, me.globalInfo['intLocation']).then(res => {
    //           me.navCtrl.push("CustomerInvoicePage", { invoice: res });
    //         });
    //       }
    //     }
    //   ]
    // });
    // confirm.present();  
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
    me.customer = item;
    me.currentCustomer = item["strCustomerNumber"];
    me.currentCustomerId = item["intEntityCustomerId"];
    me.getConsumptionSites();

    console.log(item);

    //date format
    me.customer['dtmLastPaymentDate'] = (new Date(me.customer['dtmLastPaymentDate'] || new Date())).toLocaleDateString();

    me.createInvoiceButton = false;
    me.createPaymentButton = false;

    var _rows = Array.from(document.getElementsByName('customer_items'));
    _rows.forEach(element => {
      element.setAttribute("style", "border-bottom:1px; border-style:solid; border-bottom-color:lightgray;background-color: #fff;");
    })

    document.getElementById('customer_div_'+item.intCustomerMobileId).setAttribute("style", "border-bottom:1px; border-style:solid; border-bottom-color:lightgray;background-color: #e2f9d9;");    
  }

  getConsumptionSites() {
    var me = this,
        _query = '';

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    console.log(me.currentCustomerId);

    _query = 'SELECT * FROM consumptionsite left join device on device.intSiteId = consumptionsite.intSiteId where consumptionsite.intEntityId = ' + me.currentCustomerId;
    console.log(_query);
    me.siteBRL.getByQuery(_query).then(res => {
      
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
    this.navCtrl.push("DeliveryOutofgasPage", { currentCustomerData: this.customer, currentSiteData: site });
  }

  showPayment() {
    this.navCtrl.push("CustomerPaymentPage", { customerData: this.customer });
  }

  formatDate(value)
  {
    return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear() + ' ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
  }

  getDateFormat(value) {
    var options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
    };  
    return value.toLocaleTimeString("en-US", options);
  }

}
