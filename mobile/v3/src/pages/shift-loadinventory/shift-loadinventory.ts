import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Events, ItemContent } from 'ionic-angular';

import { GlobalInfo } from '../../core/models/globalinfo';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { LoadInventoryBRL } from '../../core/brl/implementation/loadinventory';
import { LoadInventory } from '../../core/models/loadinventory';

import { Printer, PrintOptions } from '@ionic-native/printer';

@IonicPage()
@Component({
  selector: 'page-shift-loadinventory',
  templateUrl: 'shift-loadinventory.html',
})
export class ShiftLoadinventoryPage {
  data = [];
  globalinfo: GlobalInfo;
  currentSelected: any;
  previousSelected: any;
  strLocation: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private events: Events,
              private loadInventoryBRL: LoadInventoryBRL,
              private printer: Printer,
              private globalInfoBRL: GlobalInfoBRL) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShiftLoadinventoryPage');
    this.getLoadInventoryList();
    this.userGlobalInfo();
  }

  clearInputValue(elem) {
    elem.getElementRef().nativeElement.children[0].select();
  }

  getLoadInventoryList() {
    var me = this,
        _query = '';

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    me.loadInventoryBRL.getByQuery('SELECT * FROM loadinventory').then(res => {
      me.data = JSON.parse(JSON.stringify(res));      
      console.log(me.data);

      loader.dismiss();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  userGlobalInfo() {
    var me = this;
    me.globalinfo = new GlobalInfo();
    me.globalinfo.intLocation = me.navParams.get('intLocation');
    me.globalinfo.strLocation = me.navParams.get('strLocation');
    me.globalinfo.intGlobal = me.navParams.get('intGlobal');
    me.strLocation = me.globalinfo.strLocation;
    console.log(me.navParams);
  }

  removeSelection() {
    // console.log(this.currentSelected);
    this.data = this.data.filter(val=>val.ysnSelected != true);
  }

  openAddItem() {
    this.events.subscribe('addInvoiceItem', (paramsVar) => {
      console.log(paramsVar);

      var item = new LoadInventory;
      item.intItemNumber = paramsVar.intItemId;
      item.strItemNumber = paramsVar.strItemNo;
      item.strItemDescription = paramsVar.strDescription;
      item.dblEnding = 0;
      item.dblQuantityAfter = 0;
      item.dblQuantityBefore = 0
      item.dblQuantityLoaded = 0;
      item.dblQuantityReturned = 0;

      if((paramsVar.ysnAvailableTM == true || paramsVar.ysnAvailableTM == 'true') && paramsVar.strType == "Inventory") {
        item._showEnding = true;
      }

      this.data.push(item);
      this.events.unsubscribe('addInvoiceItem');
    });

    this.navCtrl.push("ShiftLoadinventoryAddItemPage", this.globalinfo);
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
      me.currentSelected.ysnSelected = true;
    }
  }

  calculate(item) {
    var me = this;

    //Quantity Before + Loaded - Returned
    item.dblQuantityAfter = (parseFloat(item.dblQuantityBefore || 0) + parseFloat(item.dblQuantityLoaded || 0)) - parseFloat(item.dblQuantityReturned || 0);
    
    console.log(item);
  }


  getDateFormat(value) {
    var options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
    };  
    return value.toLocaleTimeString("en-US", options);
  }

  done() {
    var me = this;
    var _date = new Date();    
    var _update = new GlobalInfo();
    var _add = new LoadInventory();

    let loader = me.loadingCtrl.create({content: "Saving...", enableBackdropDismiss: true});
    loader.present();

    me.loadInventoryBRL.deleteByQuery(_add.tablename).then(res => {
      me.loadInventoryBRL.addBulk(_add, me.data).then(res => {        
        
        // UPDATE SHIFT
        _update.intGlobal = me.globalinfo.intGlobal;
        _update.dtmLoadInventory = me.getDateFormat(_date);
        me.globalInfoBRL.update(_update).then(res=> {
          loader.dismiss();

          me.navCtrl.pop().then(() => {
            me.events.publish('loadInventoryProcess', _update);
          });

        });

      });
    });    
  }

}
