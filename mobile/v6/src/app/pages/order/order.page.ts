import { Component, OnInit, ViewChild ,NgZone } from '@angular/core';
import { NavController, AlertController, LoadingController, Platform, MenuController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';
import { GetRequest } from '../../framework/_common/base/api';

import { Configuration } from '../../framework/_common/configuration/configuration';
import { OrderBRL } from '../../framework/brl/implementation/order';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';
import { newArray } from '@angular/compiler/src/util';
import { Service } from '../../framework/_common/base/service';
import { Token } from '../../framework/_common/base/token';
import { HTTP } from '@ionic-native/http/ngx';
import { DatePipe } from '@angular/common';
import { NetworkService } from '../../providers/network.service';
import { interval, Observable } from 'rxjs';
import {MBILOrder } from '../../framework/models/tblMBILOrder';
import { Subscription } from 'rxjs';
import { __values } from 'tslib';

@Component({
  selector: 'page-order',
  templateUrl: 'order.page.html',
  styleUrls: ['./order.page.scss'],
  providers: [DatePipe]
})
export class OrderPage {
  @ViewChild('txtSearch', {static: false}) searchInput;

  data = [];
  detail = [];
  currentSort = '';
  currentFilter = '';
  currentCustomer = '';
  currentOrder = [];
  invoice = [];
  allOrders = [];
  globalInfo: any;
  searchValue: any;
  createInvoiceButton: boolean = true;
  showSearchbar: boolean = false;
  counter: number = 0;
  order_status = 'pending';

  orders : Observable<any>;
  orderDataChangedSubscription: Subscription

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public globalBRL: GlobalInfoBRL,
              public globalValue : GlobalInfo,
              private router: Router,
              private menu: MenuController,
              private i21syncDeviceService: i21SyncDeviceService,
              private commonSQL: CommonSQL,
          
              private ngZone: NgZone,
              private orderBRL: OrderBRL)
               {}               
  

  ionViewDidEnter () {
    var me = this;
    me.currentFilter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
    me.currentSort = ' order by tblMBILOrder.strRouteId, cast(tblMBILOrder.intSequence as int) asc,tblMBILOrder.dtmRequestedDate'; // order by tblMBILOrder.strRouteId, tblMBILOrder.intSequence, tblMBILOrder.dtmRequestedDate
    console.log('ionViewDidLoad OrderMainPage');

    me.userGlobalInfo();

    me.menu.enable(true);
    me.order_status = 'pending';
  }

  ngOnInit() {
    var me = this;
    this.orderDataChangedSubscription = this.i21syncDeviceService.OrderSubject$.subscribe((res)=>{
     console.log("ORDER DATA CHANGED LOG",res)
     me.data = res;
    })
  }
  userGlobalInfo() {
    var me = this;
    me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(async res => {
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
        let loader = await me.loadingCtrl.create({message: "Loading...", backdropDismiss: true});
       // me.getOrderList();
       // me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,loader)
        (await me.i21syncDeviceService.getOrderList(me.globalInfo.intDriverNumber,this.currentFilter,this.currentSort)).subscribe((res) =>{
          debugger;
          console.log("Response ======",res);
            me.data = res;
            if(me.data.length == 0){
              //me.getOrderList();
              me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,loader)
            }
        })
      }
    });
  
    console.log(me.globalInfo); 
    
  }


  sortOrder(query: string) {
    var me = this,
        _sort = '';

    switch(query) {
      case 'Stop Number':
        _sort = 'intStopNumber';
        break;
      case 'Customer Name':
        _sort = 'strCustomerNumber';
        break;
      case 'Site Description':
        _sort = 'strDescription';
        break;
      case 'Site Address':
        _sort = 'strSiteAddress';
        break;
      case 'Site City':
        _sort = 'strCity';
        break;
      case 'Item Number':
        _sort = 'strItemNo';
        break;;
      case 'Quantity':
        _sort = 'dblQuantity';
        break;
      default:
        _sort = 'intSiteID';
    }

    me.currentSort = ' order by ' + _sort;
   // me.getOrderList();
   let loader =  me.loadingCtrl.create({message: "Fetching tables...", backdropDismiss: true});
   me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,loader)
    
  }

  async sortFilter(query: string) {
    var me = this,
        _filter = '';

    switch(query) {
      case 'Delivered':
        _filter = ' tblMBILOrder.strOrderStatus = \'Delivered\' ';
        break;
      case 'Open':
        _filter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
        break;
      default:
        _filter = '';
    }

    me.currentFilter = _filter;
    (await me.i21syncDeviceService.getOrderList(me.globalInfo.intDriverNumber, this.currentFilter, this.currentSort)).subscribe((res) =>{
      me.data = res;
    })
    // me.getPreviosOrderList();
    // me.getOrderList();
  }

  // async getPreviosOrderList() {
  //   var me = this,
  //       _query = '';

  //       ;

  //   // me.createInvoiceButton = true;
  //   // me.detail = [];
  //   // me.data = [];
  //   me.allOrders = [];
  //   me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
  //     console.log("AFTER SEND SHIFT DATA ===",res)
  //   })
  //   // let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
  //   // loader.present();

  //   _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
  //                    CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
  //                    tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice,
  //                    tblMBILOrderItem.intContractDetailId, tblContractExport.strContractNumber,
  //                    IFNULL(tblContractExport.dblAvailableQty,0) as dblAvailableQty,
  //                    (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
  //             FROM tblMBILOrder
  //             LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
  //             LEFT JOIN tblTMSite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteID
  //             LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
  //             LEFT JOIN tblContractExport ON tblContractExport.intContractDetailId = tblMBILOrderItem.intContractDetailId
  //             Where tblMBILOrder.intDriverId = '${ me.globalInfo.intDriverNumber }'`;
  //   // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';

  //   console.log(_query);

  //     console.log(_query + ' and ' + me.currentFilter + ' ' + me.currentSort);
  //     me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
  //     .then(res => {
  //       me.detail = [];
  //      // me.data = [];
  //       me.allOrders = [];

  //       me.allOrders = res;
  //       console.log('all orders are here. . .')
  //       console.log(me.allOrders);
        
  //     },
  //     err => {
  //       console.log(err);
  //      // loader.dismiss();
  //     });
    

  // }
  async getOrderList() {
    var me = this,
        _query = '';

        ;

    me.createInvoiceButton = true;
    me.detail = [];
   // me.data = [];
    me.allOrders = [];
  

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
                     CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
                     TMSite.*, tblARCustomer.*, 
                     (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId) as dblQuantity,
                     (SELECT IFNULL(dblPrice,0) as dblPrice FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId LIMIT 1) as dblPrice,
                     (SELECT intContractDetailId FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId AND intContractDetailId IS NOT NULL LIMIT 1) as intContractDetailId,
                     (SELECT strContractNumber FROM tblContractExport WHERE intContractDetailId = (SELECT intContractDetailId FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId AND intContractDetailId IS NOT NULL LIMIT 1) LIMIT 1) as strContractNumber,
                     IFNULL((SELECT dblAvailableQty FROM tblContractExport WHERE intContractDetailId = (SELECT intContractDetailId FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId AND intContractDetailId IS NOT NULL LIMIT 1) LIMIT 1),0) as dblAvailableQty,
                     (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
              FROM tblMBILOrder
              LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
              LEFT JOIN (SELECT * FROM tblTMSite WHERE tblTMSite.intSiteID = (SELECT intSiteId FROM tblMBILOrderItem WHERE intOrderId = (SELECT intOrderId FROM tblMBILOrder WHERE intDriverId = '${ me.globalInfo.intDriverNumber }') LIMIT 1)) as TMSite
              LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
              Where tblMBILOrder.intDriverId = '${ me.globalInfo.intDriverNumber }'`;
    // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';

    console.log(_query);

    if (me.searchValue && me.showSearchbar == true) {
      _query = _query + ' and tblARCustomer.strCustomerName like \'%' + me.searchValue + '%\'';
      me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
      .then(res => {
        me.detail = [];
        me.data = [];
        me.allOrders = [];

        me.allOrders = res;
        console.log('all orders are here. . .')
        console.log(me.allOrders);

        var _strOrder = '';
        var _hasNoRoute = false;
        for(var x = 0; x <= res.length - 1; x++) {
          if(_strOrder != res[x].strOrderNumber) {
            if(res[x].dblQuantity > res[x].dblTankQuantity) {
              res[x].strOrderStatus = 'fuelnotenough';
            }
            if(res[x].strRouteId == null && _hasNoRoute == false) {
              _hasNoRoute = true;
              res[x].intSequence = 1;
            }
            me.data.push(res[x]);
          }
          _strOrder = res[x].strOrderNumber;
        }

        loader.dismiss();

        var _txtSearch = me.searchInput.el;
        _txtSearch.getElementsByTagName('input')[0].focus();
      },
      err => {
        console.log(err);
        loader.dismiss();
      });
    }
    else {
      console.log(_query + ' and ' + me.currentFilter + ' ' + me.currentSort);
      me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
      .then(res => {
        me.detail = [];
       
        me.allOrders = [];

        me.allOrders = res;
        console.log('all orders are here. . .')
        console.log(me.allOrders);
        var _strOrder = '';
        var _strRoute = '';
        var _hasNoRoute = false;
         me.data = [];
        for(var x = 0; x <= res.length - 1; x++) {
          if(_strOrder != res[x].strOrderNumber) {
            if(res[x].dblQuantity > res[x].dblTankQuantity) {
              res[x].strOrderStatus = 'fuelnotenough';
            }
            if(res[x].strRouteId == null) {
              res[x].strRouteId2 = 'NOROUTE';
              if(_hasNoRoute == false) {
                res[x].intSequence = 1;
                _hasNoRoute = true;
              }
            }
            else if(_strRoute != res[x].strRouteId) {
              res[x].strRouteId2 = 'XXX';
            }

            console.log(res[x]);
            me.data.push(res[x]);
           
          }
          _strOrder = res[x].strOrderNumber;
          _strRoute = res[x].strRouteId;
        }

        loader.dismiss();
      },
      err => {
        console.log(err);
        loader.dismiss();
      });
    }

  }

  reorderItems(indexes) {
    let element = this.data[indexes.from];
    this.data.splice(indexes.from, 1);
    this.data.splice(indexes.to, 0, element);
  }

  async showInvoice() {
    var me = this;
    console.log(me.detail);

    if(me.detail.length != 0) {

      var meteredMsg = await this.alertCtrl.create({
        header: 'Create Invoice',
        message: 'Is this invoice a metered delivery?',
        cssClass: 'order-msgbox',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              me.buildInvoice(true);
            }
          },
          {
            text: 'No',
            handler: () => {
              me.buildInvoice(false);
            }
          }
        ]
      });

      var shiftMsg = await me.alertCtrl.create({
        message: 'Shift has not yet started!',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });

      let confirm = await me.alertCtrl.create({
        header: 'Create Invoice',
        message: 'Are you sure you want to continue?',
        cssClass: 'order-msgbox',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              if(me.globalInfo && (me.globalInfo['ysnShiftOnGoing'] == 'true' || me.globalInfo['ysnShiftOnGoing'] == true)) {
                meteredMsg.present();
              }
              else {
                shiftMsg.present();
              }
            }
          },
          {
            text: 'No',
            handler: () => {

            }
          }
        ]
      });
      confirm.present();
    }
  }

  async showOrderDetails(item) {
    var me = this;
    console.log('order details ===> ',item);
    Configuration.navParams = {orderDetail: item};
    me.router.navigateByUrl('/order-detail');
  }

  buildInvoice(isMeter) {
    var me = this;
    me.orderBRL.buildInvoice(me.detail, false).then(res => {
      console.log(res);
      Configuration.navParams = {invoice: res, isMeter: isMeter};
      me.router.navigateByUrl('/invoice');
    });
  }

  async receiveOrder() {
    // console.log(record);

    var me = this;
    me.counter = 0;
   // me.previousOrders = [];

    let loader = await me.loadingCtrl.create({message: "Fetching tables...", backdropDismiss: true});

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loader.present();
            me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,loader)
 
          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }



}
