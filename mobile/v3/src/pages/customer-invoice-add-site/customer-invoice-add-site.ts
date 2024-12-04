import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { ConsumptionSiteBRL } from '../../core/brl/implementation/consumptionsite';

@IonicPage()
@Component({
  selector: 'page-customer-invoice-add-site',
  templateUrl: 'customer-invoice-add-site.html',
})
export class CustomerInvoiceAddSitePage {
  data: any;
  currentSelected: any;
  previousSelected: any;
  searchValue: any;
  currentCustomer: any;

  constructor(public navCtrl: NavController, 
              // public sqliteBrl: SQLITEBRL,
              public loadingCtrl: LoadingController,
              private events: Events,
              private consumptionsiteBRL: ConsumptionSiteBRL,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerInvoiceAddItemPage');

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
    
    var me = this;
    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    me.currentCustomer = me.navParams.get('customerid');        
    console.log(me.currentCustomer);
    
    me.consumptionsiteBRL.getByQuery('select consumptionsite.intSiteNumber, consumptionsite.strDescription, device.strSerialNumber, device.dblTankCapacity, consumptionsite.intSiteId from consumptionsite left join device on device.intSiteId = consumptionsite.intSiteId where consumptionsite.strEntityNo = \'' + me.currentCustomer + '\' order by consumptionsite.intSiteNumber').then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
      
      loader.dismiss();
    });

  }

  loadItemQuery() {
    var me = this;
    let loader = me.loadingCtrl.create({content: "Filtering data...", enableBackdropDismiss: true});
    loader.present();

    console.log(me.searchValue);
    
    me.consumptionsiteBRL.getByQuery('select consumptionsite.intSiteNumber, consumptionsite.strDescription, device.strSerialNumber, device.dblTankCapacity, consumptionsite.intSiteId from consumptionsite left join device on device.intSiteId = consumptionsite.intSiteId where consumptionsite.strEntityNo = \'' + me.currentCustomer + '\' and (consumptionsite.intSiteNumber like \'%' + me.searchValue + '%\' or consumptionsite.strDescription like \'%' + me.searchValue + '%\' or device.strSerialNumber like \'%' + me.searchValue + '%\' or device.dblTankCapacity like \'%' + me.searchValue + '%\') order by intSiteNumber').then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
      
      loader.dismiss();
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

    this.navCtrl.pop().then(() => {
        this.events.publish('addInvoiceSite', me.currentSelected);
    });
  }

}
