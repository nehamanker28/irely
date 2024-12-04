import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { CustomerBRL } from '../../core/brl/implementation/customer';

@IonicPage()
@Component({
  selector: 'page-search-customer',
  templateUrl: 'search-customer.html',
})
export class SearchCustomerPage {

  searchValue: any;
  data = [];

  currentSelected: any;
  previousSelected: any;

  dynamicScrollHeight = "500px";
  dynamicScrollWidth = "2000px";

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public customerBRL: CustomerBRL
    , public loadingCtrl: LoadingController
    , public events: Events) {

  }

  ionViewDidLoad() {
    var me = this;
    me.getCustomerList();

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
  }

  getCustomerList() {
    var me = this,
        _query = '';  

    let loader = me.loadingCtrl.create({content: "Loading Customers...", enableBackdropDismiss: true});
    loader.present();

    if (me.searchValue !== "" && me.searchValue !== undefined) {
      _query = 'SELECT * FROM customer WHERE strCustomerNumber like \'%' + me.searchValue + '%\'' +
                                        ' or strCustomerName like \'%' + me.searchValue + '%\'' +
                                        ' or strBillToAddress like \'%' + me.searchValue + '%\'';
    }
    else {
      _query = 'SELECT * FROM customer';  
    }
    
    me.customerBRL.getByQuery(_query).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      me.dynamicScrollHeight = ((30 * me.data.length) + 500).toString() + 'px';
      loader.dismiss();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  selectCustomer(){
    var me = this;

    this.navCtrl.pop().then(() => {
        this.events.publish('selectCustomer', me.currentSelected);
    });
  }

  selectItem(item: any) {
    var me = this;
    
    if(me.currentSelected == null){
      me.currentSelected = item;
    }
    else{
      me.previousSelected = me.currentSelected;
      me.previousSelected.ysnSelected = false;
      me.currentSelected = item;
    }
  }
}