import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Events } from 'ionic-angular';
import { ItemBRL } from '../../core/brl/implementation/item';

@IonicPage()
@Component({
  selector: 'page-shift-loadinventory-add-item',
  templateUrl: 'shift-loadinventory-add-item.html',
})
export class ShiftLoadinventoryAddItemPage {
  data: any;
  currentSelected: any;
  previousSelected: any;
  searchValue: any;
  locationId: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              private events: Events,
              private itemBRL: ItemBRL,
              public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerInvoiceAddItemPage');
    var me = this;

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    })

    me.locationId = me.navParams.get('intLocation');        
    console.log(me.locationId);
    
    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();
    
    me.itemBRL.getByQuery('select distinct strItemNo,strDescription,dblSalePrice,intItemId,ysnAvailableTM,strType from item where intItemLocationId = \'' + me.locationId + '\' order by strItemNo').then(res => {
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
    
    me.itemBRL.getByQuery('select distinct strItemNo,strDescription,dblSalePrice,intItemId,ysnAvailableTM,strType  from item where intItemLocationId = \'' + me.locationId + '\' and (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\') order by strItemNo').then(res => {
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

  addItem(){
    var me = this;
    console.log(me.currentSelected);

    this.navCtrl.pop().then(() => {
        this.events.publish('addInvoiceItem', me.currentSelected);
    });
  }

}
