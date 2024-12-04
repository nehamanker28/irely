import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, NavController, LoadingController } from '@ionic/angular';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.page.html',
  styleUrls: ['./customer-list.page.scss'],
})
export class CustomerListPage implements OnInit {
  @ViewChild('txtSearch', {static: false}) searchInput;

  searchValue: any;
  data = [];

  currentSelected: any;
  previousSelected: any;

  dynamicScrollHeight = "500px";
  dynamicScrollWidth = "2000px";

  constructor(public navCtrl: NavController,
    public commonSQL: CommonSQL,
    public loadingCtrl: LoadingController,
    public globalEventsService: GlobalEventsService) {

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var me = this;
    me.getCustomerList();

    var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
    _rows.forEach(element => {
      element.setAttribute("style", "height: 50px !important;");
    });
  }

  async getCustomerList() {
    var me = this,
        _query = '';  

    let loader = await me.loadingCtrl.create({message: "Loading Customers...", backdropDismiss: true});
    loader.present();

    if (me.searchValue !== "" && me.searchValue !== undefined) {
      _query = 'SELECT * FROM tblARCustomer WHERE strCustomerNumber like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strCustomerName like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strBillToAddress like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strBillToCity like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strBillToState like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' or strBillToZipCode like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                                        ' LIMIT 30 ';
    }
    else {
      _query = 'SELECT * FROM tblARCustomer order by strCustomerName LIMIT 50';  
    }
    
    me.commonSQL.getDataQuery(_query).then(res => {
      me.data = JSON.parse(JSON.stringify(res));
      me.dynamicScrollHeight = ((30 * me.data.length) + 500).toString() + 'px';
      loader.dismiss();
      var _txtSearch = me.searchInput.el;
      _txtSearch.getElementsByTagName('input')[0].focus();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  selectCustomer(){
    var me = this;

    console.log(me.currentSelected);

    me.navCtrl.pop().then(() => {
      Configuration.globalFlag = false;
      me.globalEventsService.publishEventsPayment(me.currentSelected);
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
