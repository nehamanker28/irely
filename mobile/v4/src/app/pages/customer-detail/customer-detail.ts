import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { OrderBRL } from '../../core/brl/implementation/order';

@IonicPage()
@Component({
  selector: 'page-customer-detail',
  templateUrl: 'customer-detail.html',
})
export class CustomerDetailPage {
  data = [];
  customer = [];
  sites = [];
  sitesAndHistory = [];
  currentSort = '';
  currentFilter = ''; 
  currentCustomer = ''; 
  currentOrder = [];
  invoice = [];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private orderBRL: OrderBRL) {

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerDetailPage');

    this.currentCustomer = this.navParams.get('customerid');
    this.getOrderList();
  }

  getOrderList() {
    var me = this,
        _query = '';

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    console.log(me.currentCustomer);

    _query = 'SELECT * FROM customer where strCustomerNumber = \'' + me.currentCustomer + '\'';
    console.log(_query);
    me.orderBRL.getByQuery(_query).then(res => {
      if(res.length > 0) {
        me.customer = JSON.parse(JSON.stringify(res[0]));
        console.log('customer');
        console.log(me.customer);      
      }
      loader.dismiss();
    },
    err => {
      console.log(err); 
      loader.dismiss();
    });

    me.sites = [];

    _query = 'SELECT consumptionsite.*, device.*, deliveryhistory.dtmInvoiceDate, deliveryhistory.dblQuantityDelivered FROM consumptionsite left join device on device.intSiteId = consumptionsite.intSiteId left join deliveryhistory on deliveryhistory.intSiteID = consumptionsite.intSiteNumber where consumptionsite.strEntityNo = \'' + me.currentCustomer + '\'';
    console.log(_query);
    me.orderBRL.getByQuery(_query).then(res => {      
      me.sites = JSON.parse(JSON.stringify(res));
      console.log('sites');
      console.log(me.sites);

      var _previousEntityId = 0;
      var _x = -1;
      for(var x = 0; x <= me.sites.length - 1; x++) {
        if(me.sites[x].intEntityId == _previousEntityId) {
          me.sitesAndHistory[_x]['tblSiteHistory'].push(me.sites[x]);
        }
        else {
          _x = _x + 1;
          me.sitesAndHistory[_x] = me.sites[x];
          me.sitesAndHistory[_x]['tblSiteHistory'] = [];
          me.sitesAndHistory[_x]['tblSiteHistory'].push(me.sites[x]);
        }
        _previousEntityId = me.sites[x].intEntityId;
      }
      
      console.log(me.sitesAndHistory);
      //dtmInvoiceDate
      //dblQuantityDelivered

      // loader.dismiss();
    })
    .catch(e => {
      console.log(e);
      // loader.dismiss();
    });

  }

}
