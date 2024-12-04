import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-invoice-add-item',
  templateUrl: './invoice-add-item.page.html',
  styleUrls: ['./invoice-add-item.page.scss'],
})
export class InvoiceAddItemPage implements OnInit {
  @ViewChild('txtSearch', {static: false}) searchInput;

  data: any;
  currentSelected: any;
  previousSelected: any;
  searchValue: any;
  locationId: any;
  locationNumber: any;
  customerNumber: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              private commonSQL: CommonSQL,
              private globalEventsService: GlobalEventsService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() { 
    console.log('ionViewDidLoad CustomerInvoiceAddItemPage');
    var me = this;

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });

    me.locationId = Configuration.navParams['intLocation'];
    me.locationNumber = Configuration.navParams['strLocationNumber'];
    me.customerNumber = Configuration.navParams['strCustomerNumber'];
    console.log(me.locationNumber);
    
    me.loadItemQuery();
  }

  async loadItemQuery() {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    console.log(me.searchValue);
    // var _query = 'select distinct strItemNo,strDescription,dblSalePrice,intItemId,strLocationNumber, false as ysnSelected from tblInventoryItem where strLocationNumber = \'' + me.locationNumber + '\' order by strItemNo';
    // if(me.searchValue) {
    //   _query = 'select distinct strItemNo,strDescription,dblSalePrice,intItemId,strLocationNumber, false as ysnSelected from tblInventoryItem where strLocationNumber = \'' + me.locationNumber + '\' and (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\') order by strItemNo';
    // }

    // Special Pricing
    var _queryPricing = 'select distinct strItemNo,strDescription,dblFinalPrice,intItemId,strLocationNumber, false as ysnSelected, ' +
                          'CASE WHEN dblFinalPrice IS NULL ' +
                            'THEN dblSalePrice ' +
                          'ELSE dblFinalPrice ' +
                          'END dblSalePrice ' +
                          'from ' +
                          '( ' +
                            'select ' + 
                            '*, ' +
                            '(select dblPrice from tblCustomerSpecialPricing ' +
                             '   where tblCustomerSpecialPricing.strItemNo = tblInventoryItem.strItemNo ' +
                             '      and tblCustomerSpecialPricing.strCustomerNumber = \'' + me.customerNumber + '\' LIMIT 1 ) as dblFinalPrice ' +
                            'from tblInventoryItem ' +
                            'where tblInventoryItem.strLocationNumber = \'' + me.locationNumber + '\' ' +
                          ') tblPricing';

    if(me.searchValue) {
      _queryPricing = _queryPricing + ' where (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\') order by strItemNo';
    }
    
    me.commonSQL.getDataQuery(_queryPricing).then(res => {
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

  addItem(){
    var me = this;
    console.log(me.currentSelected);

    me.navCtrl.pop().then(() => {
      Configuration.globalFlag = false;
      me.globalEventsService.publishEventsItem(me.currentSelected);
    }); 
  }

}
