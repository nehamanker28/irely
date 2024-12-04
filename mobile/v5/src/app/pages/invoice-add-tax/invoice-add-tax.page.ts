import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-invoice-add-tax',
  templateUrl: './invoice-add-tax.page.html',
  styleUrls: ['./invoice-add-tax.page.scss'],
})
export class InvoiceAddTaxPage implements OnInit {
  @ViewChild('txtSearch', {static: false}) searchInput;

  data: any;
  currentSelected: any;
  previousSelected: any;
  searchValue: any = "";
  customerId: any;
  siteId: any;
  itemId: any;

  constructor(public navCtrl: NavController, 
              public loadingCtrl: LoadingController,
              private commonSQL: CommonSQL,
              private globalEventsService: GlobalEventsService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad CustomerInvoiceAddTaxPage');

    var me = this;
    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });

    me.customerId = Configuration.navParams['intEntityId'];
    me.siteId = Configuration.navParams['intSiteId'];
    me.itemId = Configuration.navParams['intItemId'];

    console.log(me.customerId + ' ' + me.siteId + ' ' + me.itemId)

    me.loadTaxQuery();
  }

  async loadTaxQuery() {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});   
    loader.present();

    console.log(me.searchValue);
    //var _query = 'select distinct strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intFulltaxId, false as ysnSelected from tblFullTax order by strTaxCode';

    var _query = 'SELECT distinct strTaxGroup, strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intFulltaxId, false as ysnSelected FROM tblFullTax ' +
                  'WHERE intTaxClassId IN (SELECT intTaxClassId FROM tblCategoryTax ' +
                  'WHERE intCategoryId IN (SELECT intCategoryId FROM tblInventoryItem where intItemId = \'' + me.itemId + '\'))  order by strTaxGroup, strTaxCode';

    if(me.searchValue != "") {      
      _query = 'SELECT distinct strTaxGroup, strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intFulltaxId, false as ysnSelected FROM tblFullTax ' +
        'WHERE intTaxClassId IN (SELECT intTaxClassId FROM tblCategoryTax ' +
        'WHERE intCategoryId IN (SELECT intCategoryId FROM tblInventoryItem where intItemId = \'' + me.itemId + '\')) ';
        'AND (strTaxCode like \'%' + me.searchValue + '%\' or strCalculationMethod like \'%' + me.searchValue + '%\' or dblRate like \'%' + me.searchValue + '%\') order by strTaxGroup, strTaxCode';
    }

    me.commonSQL.getDataQuery(_query).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      console.log(me.data);
      
      loader.dismiss();

      var _txtSearch = me.searchInput.el;
      _txtSearch.getElementsByTagName('input')[0].focus();
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

    me.navCtrl.pop().then(() => {
      Configuration.globalFlag = false;
      me.globalEventsService.publishEventsTax(me.currentSelected);
    });
  }

}
