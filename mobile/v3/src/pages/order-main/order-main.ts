import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController  } from 'ionic-angular';
import { OrderBRL } from '../../core/brl/implementation/order';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { GlobalInfo } from '../../core/models/globalinfo';

@IonicPage()
@Component({
  selector: 'page-order-main',
  templateUrl: 'order-main.html',
})
export class OrderMainPage {
  data = [];
  detail = [];
  currentSort = '';
  currentFilter = ''; 
  currentCustomer = ''; 
  currentOrder = [];
  invoice = [];
  allOrders = [];
  globalInfo: any;
  createInvoiceButton: boolean = true;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public globalBRL: GlobalInfoBRL,
              private orderBRL: OrderBRL) {
    
  }

  ionViewDidLoad() {
    var me = this;
    console.log('ionViewDidLoad OrderMainPage');
    me.getOrderList();
    me.userGlobalInfo();
  }

  ionViewDidEnter () {
    var me = this;
    me.getOrderList();
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
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
        _sort = 'intSiteId';
    }

    me.currentSort = ' order by ' + _sort;
    me.getOrderList();
  }

  sortFilter(query: string) {
    var me = this,
        _filter = '';

    switch(query) {
      case 'Delivered':
        _filter = ' where orders.strOrderStatus = \'Delivered\' ';
        break;
      case 'Open':
        _filter = ' where orders.strOrderStatus != \'Delivered\' ';
        break;
      default:
        _filter = '';
    }

    me.currentFilter = _filter;
    me.getOrderList();
  }

  getOrderList() {
    var me = this,
        _query = '';

        debugger;

    me.createInvoiceButton = true;
    me.detail = [];
    me.data = [];
    me.allOrders = [];

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    _query = 'SELECT \'order-item\' as baseClass, orders.*, consumptionsite.*, customer.*, orderitem.dblQuantity, orderitem.dblPrice, orderitem.intContractDetailId, contractdetail.dblAvailableQty, contractheader.strContractNumber FROM orders LEFT JOIN orderitem ON orders.intOrderId = orderitem.intOrderId LEFT JOIN consumptionsite ON orderitem.intSiteId = consumptionsite.intSiteId LEFT JOIN customer ON consumptionsite.strEntityNo = customer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = orderitem.intContractDetailId LEFT JOIN contractdetail ON contractdetail.intContractHeaderId = contractheader.intContractHeaderId ';
    me.orderBRL.getByQuery(_query + me.currentFilter + ' ' + me.currentSort)
      .then(res => {
        me.detail = [];
        me.data = [];
        me.allOrders = [];
        
        me.allOrders = res;
        console.log(me.allOrders);      

        var _strOrder = '';
        for(var x = 0; x <= res.length - 1; x++) {
          if(_strOrder != res[x].strOrderNumber) {
            me.data.push(res[x]);
          }                      
          _strOrder = res[x].strOrderNumber;
        }
        
        loader.dismiss();
      },
      err => {
        console.log(err); 
        loader.dismiss();
      });
  }

  reorderItems(indexes) {
    let element = this.data[indexes.from];
    this.data.splice(indexes.from, 1);
    this.data.splice(indexes.to, 0, element);
  }

  showInvoice() {
    var me = this;
    console.log(me.detail);

    if(me.detail.length != 0) {
      let confirm = this.alertCtrl.create({
        title: 'Create Invoice',
        message: 'Are you sure you want to continue?',
        cssClass: 'order-msgbox',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              if(me.globalInfo['ysnShiftOnGoing'] == 'true' || me.globalInfo['ysnShiftOnGoing'] == true) {
                confirm = this.alertCtrl.create({
                  title: 'Create Invoice',
                  message: 'Is this invoice a metered delivery?',
                  cssClass: 'order-msgbox',
                  buttons: [
                    {
                      text: 'Yes',
                      handler: () => {
                        me.buildInvoice();
                      }
                    },
                    {
                      text: 'No',
                      handler: () => {
                        me.buildInvoice();
                      }
                    }
                  ]
                });
                confirm.present();
              }
              else {
                confirm = this.alertCtrl.create({
                  message: 'Shift has not yet started!',
                  buttons: [
                    {
                      text: 'Ok',
                      handler: () => {
                      }
                    }
                  ]
                });
                confirm.present();
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

  showOrderDetails(item) {
    var me = this;

    console.log(item);

    me.createInvoiceButton = false;

    var _rows = Array.from(document.getElementsByName('order_items'));
    _rows.forEach(element => {
      element.setAttribute("style", "border-bottom:1px; border-style:solid; border-bottom-color:lightgray;background-color: #fff;");
    });
    document.getElementById('order_div_'+item.intOrderMobileId).setAttribute("style", "border-bottom:1px; border-style:solid; border-bottom-color:lightgray;background-color: #e2f9d9;");    

    if(item['strOrderStatus'] == 'Delivered') {
      me.createInvoiceButton = true;
    }

    me.detail = item;
  }

  buildInvoice() {
    var me = this;
    me.orderBRL.buildInvoice(me.detail, false).then(res => {
      console.log(res);
      me.navCtrl.push("CustomerInvoicePage", { invoice: res });
    });

    // let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    // loader.present();

    // var orders = [],
    //     items = [],
    //     itemtaxcode = [];

    // me.orderBRL.getByQuery('SELECT \'' + me.detail['strCustomerNumber'] + '\' as strCustomerNo, \'false\' as ysnSelected,* from orders left join orderitem on orders.intOrderId = orderitem.intOrderId left join device on device.intSiteId = orderitem.intSiteId where orders.intOrderId = ' + me.detail['intOrderId'] + '').then(res => {    
    //   orders = JSON.parse(JSON.stringify(res));
    //   console.log(orders);

    //   me.orderBRL.getByQuery('SELECT \'false\' as ysnSelected, 0 as price, 0 as quantity, 0 as ending,* from orderitem where intOrderId = ' + me.detail['intOrderId'] + '').then(res => {    
    //     items = JSON.parse(JSON.stringify(res));
    //     console.log(items);

    //     var _itemList = '';
    //     for(var x = 0; x <= items.length-1; x++) {
    //       _itemList = _itemList + items[x].intOrderItemId + ', ';
    //     }

    //     me.orderBRL.getByQuery('SELECT \'false\' as ysnSelected,* from ordertaxcode where intOrderItemId IN (' + _itemList + '0)').then(res => {    
    //       itemtaxcode = JSON.parse(JSON.stringify(res));
    //       console.log(itemtaxcode);

    //       // FINAL RECONSTRUCT
    //       for(var x = 0; x <= orders.length-1; x++) {
    //         for(var y = 0; y <= items.length-1; y++) {
    //           if(orders[x].intOrderId == items[y].intOrderId) {
    //             if(itemtaxcode.length > 0) {
    //               var _taxcodes = [];
    //               for(var z = 0; z <= itemtaxcode.length-1; z++) {
    //                 if(items[y].intOrderItemId == itemtaxcode[z].intOrderItemId) {
    //                   _taxcodes.push(itemtaxcode[z]);
    //                 }                  
    //               }
    //               items[y]['tblOrderTaxCode'] = _taxcodes;
    //               orders[x]['tblOrderItem'] = [];
    //               orders[x]['tblOrderItem'].push(items[y]);
    //             }
    //             else {
    //               orders[x]['tblOrderItem'] = [];
    //               orders[x]['tblOrderItem'].push(items[y]);
    //             }
    //           }
    //         }
    //       }

    //       console.log('final');
    //       me.invoice = orders;
          
    //       console.log(me.invoice);
    //       loader.dismiss();

    //       this.navCtrl.push("CustomerInvoicePage", { invoice: me.invoice });

    //     },err=>{
    //       console.log(err);
    //       loader.dismiss();
    //     });

        
    //     // console.log(me.orders);
    //     // loader.dismiss();
    //   },err=>{
    //     console.log(err);
    //     loader.dismiss();
    //   });

      
      
    //   //loader.dismiss();
    // },err=>{
    //   console.log(err);
    //   loader.dismiss();
    // });
  }
  
}
