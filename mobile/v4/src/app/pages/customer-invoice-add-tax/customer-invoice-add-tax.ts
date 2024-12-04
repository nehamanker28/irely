import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { ItemBRL } from '../../core/brl/implementation/item';

@IonicPage()
@Component({
  selector: 'page-customer-invoice-add-tax',
  templateUrl: 'customer-invoice-add-tax.html',
})
export class CustomerInvoiceAddTaxPage {
  data: any;
  currentSelected: any;
  previousSelected: any;
  searchValue: any = "";
  customerId: any;
  siteId: any;
  itemId: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              public events: Events,
              private itemBRL: ItemBRL,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerInvoiceAddTaxPage');

    var me = this;
    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });

    me.customerId = me.navParams.get('intEntityId');
    me.siteId = me.navParams.get('intSiteId');
    me.itemId = me.navParams.get('intItemId');

    console.log(me.customerId + ' ' + me.siteId + ' ' + me.itemId)

    me.loadTaxQuery();
    
    // var me = this;
    // let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    // loader.present();
    
    // me.itemBRL.getByQuery('select distinct strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intTaxCodeMobileId from taxcode order by strTaxCode').then(res => {
    //   me.data = JSON.parse(JSON.stringify(res));
    //   console.log(me.data);      
    //   loader.dismiss();
    // });

  }

  loadTaxQuery() {
    var me = this;
    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    console.log(me.searchValue);
    var _query = 'select distinct strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intTaxCodeMobileId from taxcode order by strTaxCode';

    if(me.searchValue != "") {
      _query = 'select distinct strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intTaxCodeMobileId from taxcode where strTaxCode like \'%' + me.searchValue + '%\' or strCalculationMethod like \'%' + me.searchValue + '%\' or dblRate like \'%' + me.searchValue + '%\' order by strTaxCode';
    }    

    me.itemBRL.getByQuery(_query).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
      
      loader.dismiss();
    });
  }

  selectTax(item: any) {
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

  addTaxCode(){
    var me = this;
    console.log(me.currentSelected);

    this.navCtrl.pop().then(() => {
        this.events.publish('addInvoiceTaxCode', me.currentSelected);
    });
  }

}
