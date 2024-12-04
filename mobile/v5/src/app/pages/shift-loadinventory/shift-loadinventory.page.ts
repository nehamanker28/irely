import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { GlobalInfo } from '../../framework/models/globalinfo';
import { LoadInventory } from '../../framework/models/loadinventory';
import { Tankwagon } from '../../framework/models/tankwagon';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Message } from '../../framework/_common/base/message';

@Component({
  selector: 'app-shift-loadinventory',
  templateUrl: './shift-loadinventory.page.html',
  styleUrls: ['./shift-loadinventory.page.scss'],
})
export class ShiftLoadinventoryPage implements OnInit {

  tankwagon = [];
  data = [];
  globalinfo: GlobalInfo;
  currentSelected: any;
  previousSelected: any;
  strLocation: string;
  ysnAdded: boolean = false;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private router: Router,
              private commonSQL: CommonSQL,
              private messageUtil: Message,
              private modalCtrl: ModalController,
              private globalEventsService: GlobalEventsService) {
  }

  ngOnInit() {
    console.log('setObservables');
    this.setObservables();
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ShiftLoadinventoryPage');
    
    if(this.ysnAdded == false) {
      this.getLoadInventoryList();
      this.userGlobalInfo();
    }
  }

  setObservables() {
    var me = this;
    me.globalEventsService.getObservableLoadInventory().subscribe((data) => {
      console.log('Data Received ', data);

      if(data && me.ysnAdded == false) {
            
        me.commonSQL.getDataQuery('SELECT SUM(dblQuantity) as dblQuantity FROM tankwagon where intItemId = ' + data.intItemId).then(res => {
          var _data = JSON.parse(JSON.stringify(res));      
          console.log(_data);

          var item = new LoadInventory;
          item.intItemNumber = data.intItemId;
          item.strItemNumber = data.strItemNo;
          item.strItemDescription = data.strDescription;
          item.strUnitMeasure = data.strUnitMeasure;
          item.dblEnding = 0;
          item.dblQuantityAfter = 0;
          item.dblQuantityBefore = 0
          item.dblQuantityLoaded = 0;
          item.dblQuantityReturned = 0;    

          if(_data[0].dblQuantity) {
            item.dblQuantityBefore = _data[0].dblQuantity;
            item['isNew'] = false;
          }          

          if((data.ysnAvailableTM == true || data.ysnAvailableTM == 'true') && data.strType == "Inventory") {
            item._showEnding = true;
          }

          me.data.push(item);
          me.ysnAdded = true;        
    
        })
        .catch(e => {
          console.log(e);
        });

      }
    });
  }

  clearInputValue(elem) {
    elem.getElementRef().nativeElement.children[0].select();
  }

  async getLoadInventoryList() {
    var me = this,
        _query = '';

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    me.commonSQL.getDataQuery('SELECT loadinventory.intItemNumber, loadinventory.strItemNumber, loadinventory.strItemDescription, loadinventory.strUnitMeasure, 0 as dblEnding, 0 as dblQuantityLoaded, 0 as dblQuantityReturned, (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where intItemId = loadinventory.intItemNumber) as dblQuantityBefore, false as isNew FROM loadinventory GROUP BY intItemNumber').then(res => {
      me.data = JSON.parse(JSON.stringify(res));      
      console.log('LOAD INVENTORY => ', me.data);

      loader.dismiss();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  userGlobalInfo() {
    var me = this;
    me.globalinfo = new GlobalInfo();
    me.globalinfo.intLocation = Configuration.navParams.intLocation;
    me.globalinfo.strLocation = Configuration.navParams.strLocation;
    me.globalinfo.intGlobal = Configuration.navParams.intGlobal;
    me.strLocation = me.globalinfo.strLocation;
  }

  removeSelection() {
    this.data = this.data.filter(val=>val.ysnSelected != true);
  }

  openAddItem() {
    var me = this;
    me.ysnAdded = false;
    Configuration.navParams = me.globalinfo;
    me.router.navigateByUrl('/shift-loadinventory-add-item');
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
    
    // (Quantity Before Loading + Quantity Loaded - Quantity Returned) / Truck Capacity
    // item.dblEnding = (parseFloat(item.dblQuantityBefore || 0) + parseFloat(item.dblQuantityLoaded || 0)) - parseFloat(item.dblQuantityReturned || 0);

    console.log(item);
  }


  getDateFormat(value) {
    var options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };  
    return value.toLocaleTimeString("en-US", options);
  }

  async done() {
    var me = this;
    var _date = new Date();    
    var _update = new GlobalInfo();
    var _add = new LoadInventory();
    var _addLoadInventory = [];

    let loader = await me.loadingCtrl.create({message: "Saving...", backdropDismiss: true});
    loader.present();
    
    // +++++ TANK WAGON INSERT +++++
    var _tankwagon = [];
    var _line = new Tankwagon;
    me.data.forEach(item => {
      if((item.dblQuantityLoaded > 0 || item['isNew'] != false) && item.dblQuantityLoaded != null && item.dblQuantityLoaded != undefined) {
        _line = new Tankwagon;
        _line.intItemId = item.intItemNumber;
        _line.strItemNo = item.strItemNumber;
        _line.strDescription = item.strItemDescription;
        _line.dblQuantity = item.dblQuantityAfter;
        if(item['isNew'] == false) {
          _line.dblQuantity = item.dblQuantityLoaded; //dblQuantityAfter
        }      
        _line.strTransactionReference = 'Increases Inventory of Product';
        _line.strTransactionType = 'Load Inventory';
        _tankwagon.push(_line);
        _addLoadInventory.push(item);
      }            
    });    
    me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res=>{console.log('TANKWAGON UPDATED');});
    // +++++ TANK WAGON INSERT +++++


    // me.commonSQL.deleteByQuery(_add.tablename).then(res => {    
    me.commonSQL.addBulkData(_add.tablename,_add, _addLoadInventory).then(res => {        
        
      // UPDATE SHIFT
      _update.intGlobal = me.globalinfo.intGlobal;
      _update.dtmLoadInventory = me.getDateFormat(_date);
      me.commonSQL.updateData(_update.tablename,_update).then(res=> {
        loader.dismiss();

        me.messageUtil.showToastMessage("Load Inventory has been successfully saved.", function() {
          me.modalCtrl.dismiss({
            'dismissed': true
          });          
        }, 2000);

        me.navCtrl.pop();

      });

    });
    // });    
  }

}
