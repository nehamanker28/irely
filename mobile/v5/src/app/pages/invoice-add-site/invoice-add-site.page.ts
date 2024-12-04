import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-invoice-add-site',
  templateUrl: './invoice-add-site.page.html',
  styleUrls: ['./invoice-add-site.page.scss'],
})
export class InvoiceAddSitePage implements OnInit {
  @ViewChild('txtSearch', {static: false}) searchInput;

  data: any;
  currentSelected: any;
  previousSelected: any;
  searchValue: any;
  currentCustomer: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              private commonSQL: CommonSQL,
              private globalEventsService: GlobalEventsService) {
  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    console.log('ionViewDidLoad CustomerInvoiceAddItemPage');

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
    
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    me.currentCustomer = Configuration.navParams['customerid'];        
    console.log(me.currentCustomer);
    
    //'select DISTINCT tblTMSite.intSiteNumber, tblTMSite.strDescription, tblTMSiteDevice.strSerialNumber, tblTMSiteDevice.dblTankCapacity, tblTMSite.intSiteId, tblTMSite.strSiteAddress, tblTMSite.strItemNo, tblTMSite.strEntityNo from tblTMSite left join tblTMSiteDevice on tblTMSiteDevice.intSiteId = tblTMSite.intSiteId where tblTMSite.strEntityNo = \'' + me.currentCustomer + '\' order by tblTMSite.intSiteNumber'
    me.commonSQL.getDataQuery("select *, ysnTaxable as ysnSiteTaxable, (select GROUP_CONCAT(strSerialNumber,'/') as strSerialNumber from tblTMSiteDevice where tblTMSiteDevice.intSiteId = tblTMSite.intSiteId and (tblTMSiteDevice.strSerialNumber IS NOT NULL AND tblTMSiteDevice.strSerialNumber <> '')) as strSerialNumber from tblTMSite where tblTMSite.intCustomerID = '" + me.currentCustomer + "' order by tblTMSite.intSiteNumber").then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
      
      loader.dismiss();
    });

  }

  async loadItemQuery(event) {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Filtering data...", backdropDismiss: true});
    loader.present();

    console.log(me.searchValue);
    console.log(event.detail.value);
    
    me.commonSQL.getDataQuery("select *, ysnTaxable as ysnSiteTaxable, (select GROUP_CONCAT(strSerialNumber,'/') as strSerialNumber from tblTMSiteDevice where tblTMSiteDevice.intSiteId = tblTMSite.intSiteId and (tblTMSiteDevice.strSerialNumber IS NOT NULL AND tblTMSiteDevice.strSerialNumber <> '')) as strSerialNumber from tblTMSite where tblTMSite.intCustomerID = '" + me.currentCustomer + "' and (tblTMSite.intSiteNumber like '%" + me.searchValue + "%' or tblTMSite.strDescription like '%" + me.searchValue + "%') order by intSiteNumber").then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
      
      loader.dismiss();

      var _txtSearch = me.searchInput.el;
      _txtSearch.getElementsByTagName('input')[0].focus();
    });
  }

  selectItem(item: any) {
    var me = this;
    console.log(item);
    console.log(me.currentSelected);

    if(me.currentSelected == null){
      me.currentSelected = item;
    }
    else{
      me.previousSelected = me.currentSelected;
      me.previousSelected.ysnSelected = false;
      me.currentSelected = item;
    }
  }

  addSite(){
    var me = this;
    console.log(me.currentSelected);

    me.currentSelected['strCustomerNumber'] = me.currentCustomer;

    me.navCtrl.pop().then(() => {
      Configuration.globalFlag = false;
      Configuration.CustomerRecord['ysnSiteTaxable'] = me.currentSelected['ysnSiteTaxable'];
      me.globalEventsService.publishEventsSite(me.currentSelected);
    });
  } 

}
