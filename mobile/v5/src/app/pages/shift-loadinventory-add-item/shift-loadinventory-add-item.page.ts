import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController, IonSearchbar } from '@ionic/angular';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { Configuration } from '../../framework/_common/configuration/configuration';
import { GlobalEventsService } from '../../providers/global-events.service';

@Component({
  selector: 'app-shift-loadinventory-add-item',
  templateUrl: './shift-loadinventory-add-item.page.html',
  styleUrls: ['./shift-loadinventory-add-item.page.scss'],
})
export class ShiftLoadinventoryAddItemPage implements OnInit {
  @ViewChild('txtSearch', {static: false}) searchInput;

  data: any;
  currentSelected: any;
  previousSelected: any;
  searchValue: any;
  locationId: any;
  focusEvent: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              private globalEventsService: GlobalEventsService,
              private commonSQL: CommonSQL) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var me = this;
    console.log('ShiftLoadinventoryAddItemPage');

    me.setup();
  }

  async setup() {
    var me = this;

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    })

    me.locationId = Configuration.navParams.intLocation;        
    console.log('Locations: ' + me.locationId);
    
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();
    
    me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId = \'' + me.locationId + '\' order by strItemNo LIMIT 30').then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);

      me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId <> \'' + me.locationId + '\' order by strLocationName, strItemNo LIMIT 30').then(res => {
        var _other = JSON.parse(JSON.stringify(res));
        console.log(_other);

        _other.forEach(element => {
          me.data.push(element);
        });
        
      });
      
      loader.dismiss();
    });
  }

  async loadItemQuery() {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Filtering data...", backdropDismiss: true});
    loader.present();

    console.log(me.searchValue);

    var refresh = function() {
      var _txtSearch = me.searchInput.el;
      _txtSearch.getElementsByTagName('input')[0].focus();
      clearInterval(me.focusEvent);
    }    

    me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId = \'' + me.locationId + '\' and (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\' or strLocationName like \'%' + me.searchValue + '%\') order by strItemNo LIMIT 30').then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);

      me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId <> \'' + me.locationId + '\' and (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\' or strLocationName like \'%' + me.searchValue + '%\') order by strLocationName, strItemNo LIMIT 30').then(res => {
        var _other = JSON.parse(JSON.stringify(res));
        console.log(_other);

        _other.forEach(element => {
          me.data.push(element);
        });
        
        me.focusEvent = setInterval(function(){ refresh() }, 1000);
      });
      
      loader.dismiss();
    });
    
    // me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName, false as ysnSelected  from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\' or strLocationName like \'%' + me.searchValue + '%\') order by strItemNo LIMIT 30').then(res => {
    //   me.data = JSON.parse(JSON.stringify(res));
    //   console.log(me.data);
    //   loader.dismiss();

    //   me.focusEvent = setInterval(function(){ refresh() }, 1000);
    // });
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
        me.globalEventsService.publishEventsLoadInventory(me.currentSelected);
    });
  }

}
