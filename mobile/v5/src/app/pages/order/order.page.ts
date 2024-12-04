import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController, Platform, MenuController } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { Configuration } from '../../framework/_common/configuration/configuration';
import { OrderBRL } from '../../framework/brl/implementation/order';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';

@Component({
  selector: 'page-order',
  templateUrl: 'order.page.html',
  styleUrls: ['./order.page.scss'],
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

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public globalBRL: GlobalInfoBRL,
              private router: Router,
              private menu: MenuController,
              private i21syncDeviceService: i21SyncDeviceService,
              private commonSQL: CommonSQL,
              private orderBRL: OrderBRL) {

  }

  ionViewDidEnter () {
    var me = this;
    me.currentFilter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
    me.currentSort = ' order by tblMBILOrder.strRouteId, cast(tblMBILOrder.intSequence as int) asc,tblMBILOrder.dtmRequestedDate'; // order by tblMBILOrder.strRouteId, tblMBILOrder.intSequence, tblMBILOrder.dtmRequestedDate
    console.log('ionViewDidLoad OrderMainPage');

    me.userGlobalInfo();

    me.menu.enable(true);
    me.order_status = 'pending';
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
        me.getOrderList();
      }
    });
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
    me.getOrderList();
  }

  sortFilter(query: string) {
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
    me.getOrderList();
  }

  async getOrderList() {
    var me = this,
        _query = '';

        ;

    me.createInvoiceButton = true;
    me.detail = [];
    me.data = [];
    me.allOrders = [];

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
                     CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
                     tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice,
                     tblMBILOrderItem.intContractDetailId, tblContractExport.strContractNumber,
                     IFNULL(tblContractExport.dblAvailableQty,0) as dblAvailableQty,
                     (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
              FROM tblMBILOrder
              LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
              LEFT JOIN tblTMSite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteID
              LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
              LEFT JOIN tblContractExport ON tblContractExport.intContractDetailId = tblMBILOrderItem.intContractDetailId
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
        me.data = [];
        me.allOrders = [];

        me.allOrders = res;
        console.log('all orders are here. . .')
        console.log(me.allOrders);

        var _strOrder = '';
        var _strRoute = '';
        var _hasNoRoute = false;
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

    let loader = await me.loadingCtrl.create({message: "Fetching tables...", backdropDismiss: true});

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loader.present();
            me.commonSQL.getDataQuery('SELECT strOrderNumber FROM tblMBILOrder').then((res) => {
              console.log(res);
              var _orderIds = "'";
              res.forEach(order => {
                _orderIds = _orderIds + order['strOrderNumber'] + "', '"
              });
              me.i21syncDeviceService.getGenerateExport(me.globalInfo.intDriverNumber || 0,'complete_order', _orderIds + "0'").then((data)=>{
                console.log(data);
                console.log('NEW ORDERS ==> ', data);

                me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
                  var _date = new Date();
                  console.log(res);
                  me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
                    me.getOrderList();
                    loader.dismiss();
                  });
                });
              });
            });
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
