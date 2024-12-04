import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController  } from '@ionic/angular';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.page.html',
  styleUrls: ['./customer-detail.page.scss'],
})
export class CustomerDetailPage implements OnInit {
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
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private commonSQL: CommonSQL) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
    console.log('ionViewDidLoad CustomerDetailPage');

    this.currentCustomer = Configuration.navParams['customerid'];
    this.getOrderList();
  }

  async getOrderList() {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();
    
    var _query = 'SELECT * FROM tblARCustomer where strCustomerNumber = \'' + me.currentCustomer + '\'';
    console.log(_query);
    me.commonSQL.getDataQuery(_query).then(res => {
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

    _query = 'SELECT tblTMSite.*, tblTMSiteDevice.*, tblTMDeliveryHistory.dtmInvoiceDate, tblTMDeliveryHistory.dblQuantityDelivered FROM tblTMSite left join tblTMSiteDevice on tblTMSiteDevice.intSiteId = tblTMSite.intSiteId left join tblTMDeliveryHistory on tblTMDeliveryHistory.intSiteID = tblTMSite.intSiteNumber where tblTMSite.strEntityNo = \'' + me.currentCustomer + '\'';
    console.log(_query);
    me.commonSQL.getDataQuery(_query).then(res => {      
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
    })
    .catch(e => {
      console.log(e);
    });
  }

}
