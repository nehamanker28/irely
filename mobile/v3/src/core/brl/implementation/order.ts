import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IOrderBRL } from '../interface/iorder';
import { LoadingController } from 'ionic-angular';

import { Order } from '../../models/order';
import { OrderItem } from '../../models/orderitem';
import { OrderTaxCode } from '../../models/ordertaxcode';

@Injectable()
export class OrderBRL extends IOrderBRL {

    constructor(public common: CommonSQL, public db: SQLite, public loadingCtrl: LoadingController){
        super(common, db);
    }

    buildInvoice(detail, isCustomer) {
        var me = this;

        return new Promise ((resolve, reject) => {
    
            let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
            loader.present();

            debugger;
        
            var orders = [],
                items = [],
                itemtaxcode = [],
                _query = '';

            if(isCustomer) {
                _query = 'SELECT \'' + detail['strCustomerNumber'] + '\' as strCustomerNo, \'false\' as ysnSelected,* from orders left join orderitem on orders.intOrderId = orderitem.intOrderId left join device on device.intSiteId = orderitem.intSiteId where orders.strCustomerNumber = \'' + detail['strCustomerNumber'] + '\'';
            }
            else {
                _query = 'SELECT \'' + detail['strCustomerNumber'] + '\' as strCustomerNo, \'false\' as ysnSelected,* from orders left join orderitem on orders.intOrderId = orderitem.intOrderId left join device on device.intSiteId = orderitem.intSiteId where orders.intOrderId = ' + detail['intOrderId'] + '';
            }
        
            console.log(_query);
            
            me.getByQuery(_query).then(res => {
                orders = JSON.parse(JSON.stringify(res));
                console.log('orders');
                console.log(orders);
            
                me.getByQuery('SELECT \'false\' as ysnSelected,  orderitem.dblPrice as price, 0 as quantity, 0 as ending, orderitem.*, contractdetail.intContractSeq, contractdetail.dblAvailableQty, contractdetail.dblCashPrice, contractheader.strContractNumber as strContractHeaderNumber from orderitem left join contractheader on contractheader.intEntityId = orderitem.intEntityId left join contractdetail on contractheader.intContractHeaderId = contractdetail.intContractHeaderId and contractdetail.intItemId = orderitem.intItemId where orderitem.intOrderId = ' + detail['intOrderId'] + '').then(res => {    
                    items = JSON.parse(JSON.stringify(res));
                    console.log('items');
                    console.log(items);
            
                    var _itemList = '';
                    for(var x = 0; x <= items.length-1; x++) {
                        _itemList = _itemList + items[x].intOrderItemId + ', ';
                    }
            
                    me.getByQuery('SELECT \'false\' as ysnSelected, 0 as dblTotalTax,* from ordertaxcode where intOrderItemId IN (' + _itemList + '0)').then(res => {    
                    itemtaxcode = JSON.parse(JSON.stringify(res));
                    console.log('taxcodes');
                    console.log(itemtaxcode);
            
                    // FINAL RECONSTRUCT
                    var _previousX = 0;
                    var _previousSiteId = 0;
                    for(var x = 0; x <= orders.length-1; x++) {
                        for(var y = 0; y <= items.length-1; y++) {
                            if(orders[x].intOrderId == items[y].intOrderId) {
                                if(_previousSiteId != orders[x].intSiteId) {
                                    _previousX = x;
                                }
                                if(itemtaxcode.length > 0) {
                                    var _taxcodes = [];
                                    for(var z = 0; z <= itemtaxcode.length-1; z++) {
                                        if(items[y].intOrderItemId == itemtaxcode[z].intOrderItemId) {
                                            _taxcodes.push(itemtaxcode[z]);
                                        }                  
                                    }
                                    items[y]['tblOrderTaxCode'] = _taxcodes;
                                    orders[_previousX]['tblOrderItem'] = [];
                                    orders[_previousX]['tblOrderItem'].push(items[y]);
                                }
                                else {
                                    orders[_previousX]['tblOrderItem'] = [];
                                    orders[_previousX]['tblOrderItem'].push(items[y]);
                                }
                            }
                        }
                        _previousSiteId = orders[x].intSiteId;
                    }
            
                    console.log(orders);
                    loader.dismiss();
            
                    resolve(orders);
            
                    },err=>{
                        console.log(err);
                        loader.dismiss();
                    });                        
                },err=>{
                    console.log(err);
                    loader.dismiss();
                });
                    
            },err=>{
                console.log(err);
                loader.dismiss();
            });
        });
    }

    buildInvoiceNoOrder(customerId, entityId, locationId) {
    var me = this;

        return new Promise ((resolve, reject) => {

            let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
            loader.present();

            var _invoice = [];            
            var _orderId = Math.floor(Math.random() * (999999999 - 1) + 1);
            //var _query = 'SELECT \'' + customerId + '\' as strCustomerNo, \'false\' as ysnSelected,consumptionsite.strDescription as strSiteDescription, * from consumptionsite left join item on consumptionsite.strItemNo = item.strItemNo left join device on device.intSiteId = consumptionsite.intSiteId where consumptionsite.intEntityId = ' + entityId + ' and intItemLocationId = ' + locationId; //var _query = 'SELECT * FROM consumptionsite where intEntityId = ' + entityId;
            var _query = 'SELECT \'' + customerId + '\' as strCustomerNo, \'false\' as ysnSelected, consumptionsite.strDescription as strSiteDescription, intConsumptionSiteMobileId as intOrderItemMobileId, ' + _orderId + ' as intOrderId, * from consumptionsite left join device on device.intSiteId = consumptionsite.intSiteId where consumptionsite.intEntityId = ' + entityId;
            console.log(_query);
            me.getByQuery(_query).then(res => {

                var _sites = JSON.parse(JSON.stringify(res));
                console.log('sites');
                console.log(_sites);

                var _itemList = '\'';
                var _siteList = '';
                for(var x = 0; x <= _sites.length-1; x++) {
                    _itemList = _itemList + _sites[x].strItemNo + '\', \'';
                    _siteList = _siteList + _sites[x].intSiteId + ', ';
                }

                _itemList = _itemList.replace(/null, /g, '');
                _siteList = _siteList.replace(/null, /g, '');

                // var _order = new Order();            
                // _order.strCustomerNumber = customerId; //detail['strCustomerNumber'] as strCustomerNo, \'false\' as ysnSelected
                // _order['strCustomerNo'] = customerId;
                // _order['ysnSelected'] = 'false';
                // _order['strSiteDescription'] = _sites['strSiteDescription'];
                // _order['strSiteAddress'] = _sites['strSiteAddress'];
                // _order['strSerialNumber'] = _sites['strSerialNumber'];
                // _order['dblTankCapacity'] = _sites['dblTankCapacity'];

                // _query = 'SELECT \'false\' as ysnSelected, item.dblSalePrice as price, 0 as quantity, 0 as ending, contractheader.strContractNumber as strContractHeaderNumber, * from contractheader left join item on item.intItemId = contractdetail.intItemId where contractheader.intEntityId = ' + entityId; //left join contractdetail on contractdetail.intContractHeaderId = contractheader.intContractHeaderId 

                _query = 'SELECT \'false\' as ysnSelected, item.dblSalePrice as price, 0 as quantity, 0 as ending, \'\' as strContractHeaderNumber, 1 as intOrderMobileId, ' + _orderId + ' as intOrderId, * from item where strItemNo IN (' + _itemList + '0\')';
                console.log(_query);
                me.getByQuery(_query).then(res => {    
                    var _items = JSON.parse(JSON.stringify(res));
                    console.log('items');
                    console.log(_items);


                    if(_items.length > 0) {

                        _query = 'SELECT \'false\' as ysnSelected, 0 as dblTotalTax,1 as intInvoiceTaxCodeMobileId, ' + _orderId + ' as intOrderId, * from applicabletaxcode where strItemNo IN (' + _itemList + '0\') and intSiteId IN (' + _siteList + '0) and intEntityId = ' + entityId;
                        console.log(_query);
                        me.getByQuery(_query).then(res => {    
                            var _itemtaxcode = JSON.parse(JSON.stringify(res));
                            console.log('taxcodes');
                            console.log(_itemtaxcode);                        
                    
                            // FINAL RECONSTRUCT
                            for(var x = 0; x <= _sites.length-1; x++) {
                                for(var y = 0; y <= _items.length-1; y++) {
                                    if(_sites[x].strItemNo == _items[y].strItemNo) {
                                        if(_itemtaxcode.length > 0) {
                                            var _taxcodes = [];
                                            for(var z = 0; z <= _itemtaxcode.length-1; z++) {
                                                if(_items[y].strItemNo == _itemtaxcode[z].strItemNo && _sites[x].intSiteNumber == _itemtaxcode[z].intSiteNumber) { //&& _items[y].intSiteId == _itemtaxcode[z].intSiteId && _itemtaxcode[z].intEntityId == entityId

                                                    // TAX CODE
                                                    var _orderitemtax = new OrderTaxCode();
                                                    _orderitemtax['dblAdjustedTax'] = 0;
                                                    _orderitemtax['ysnSelected'] = 'false';
                                                    _orderitemtax['dblTotalTax'] = 0;
                                                    _orderitemtax['dblAdjustedTax'] = _items[y]['dblAdjustedTax'];
                                                    _orderitemtax['dblBaseAdjustedTax'] = _items[y]['dblBaseAdjustedTax'];
                                                    _orderitemtax['dblExemptionPercent'] = _items[y]['dblExemptionPercent'];
                                                    _orderitemtax['dblRate'] = _itemtaxcode[z]['dblRate'];
                                                    _orderitemtax['dblTax'] = _items[y]['dblTax'];
                                                    _orderitemtax['dblTotalTax'] = _items[y]['dblTotalTax'];
                                                    _orderitemtax['intItemId'] = _items[y]['intItemId'];
                                                    _orderitemtax['intTaxClassId'] = _items[y]['intTaxClassId'];
                                                    _orderitemtax['intTaxCodeId'] = _itemtaxcode[z]['intTaxCodeId'];
                                                    _orderitemtax['intTaxGroupId'] = _items[y]['intTaxGroupId'];
                                                    _orderitemtax['intSalesTaxAccountId'] = _items[y]['intSalesTaxAccountId'];
                                                    _orderitemtax['strCalculationMethod'] = _itemtaxcode[z]['strCalculationMethod'];
                                                    _orderitemtax['strTaxCode'] = _itemtaxcode[z]['strTaxCode'];
                                                    _orderitemtax['strTaxGroup'] = _items[y]['strTaxGroup'];
                                                    _orderitemtax['ysnTaxExempt'] = _items[y]['ysnTaxExempt'];
                                                    _orderitemtax['ysnTaxOnly'] = _items[y]['ysnTaxOnly'];
                                                    _orderitemtax['strNotes'] = _items[y]['strNotes'];
                                                    _orderitemtax['intOrderId'] = _items[y]['intOrderId'];
                                                    _taxcodes.push(_orderitemtax);

                                                    // _itemtaxcode[z].intInvoiceTaxCodeMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+z);
                                                    // _itemtaxcode[z].intSiteMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+z);                                
                                                    // _itemtaxcode[z].intInvoiceItemId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+z);
                                                    // _taxcodes.push(_itemtaxcode[z]);
                                                }                  
                                            }
                                            
                                            // dblDefaultFull: 80
                                            // dblSalePrice: 0
                                            // ending: 0
                                            // intBundleItemId: ""
                                            // intItemId: 3
                                            // intItemLocationId: 587
                                            // intItemMobileId: 97538459
                                            // intOrderId: 605847409
                                            // intOrderMobileId: 239614467
                                            // price: 0
                                            // quantity: 0
                                            // strBundleItemNo: ""
                                            // strContractHeaderNumber: ""
                                            // strDescription: "Propane"
                                            // strItemNo: "LPG"
                                            // strType: "Inventory"
                                            // tblOrderTaxCode: [{…}]
                                            // ysnAvailableTM: "true"
                                            // ysnSelected: false



                                            // ITEMS
                                            var _orderitem = new OrderItem();
                                            _orderitem['ysnSelected'] = false;
                                            _orderitem['price'] = null;
                                            _orderitem['quantity'] = 0;
                                            _orderitem['ending'] = 0;
                                            _orderitem['strContractHeaderNumber'] = null;                    
                                            _orderitem['dblAvailableQty'] = _items[y]['dblAvailableQty'] || 0;
                                            _orderitem['dblCashPrice'] = _items[y]['dblCashPrice'] || 0;
                                            _orderitem['dblPrice'] = _items[y]['dblSalePrice'] || 0;
                                            _orderitem['dblQuantity'] = _items[y]['dblQuantity'] || 0;
                                            _orderitem['dblTotal'] = _items[y]['dblTotal'] || 0;
                                            _orderitem['intContractHeaderId'] = _items[y]['intContractHeaderId'] || null;
                                            _orderitem['intContractDetailId'] = _items[y]['intContractDetailId'] || null;
                                            _orderitem['intContractSeq'] = _items[y]['intContractSeq'] || null;
                                            _orderitem['intDriverId'] = _items[y]['intDriverId'] || null;
                                            _orderitem['intItemId'] = _items[y]['intItemId'] || null;
                                            _orderitem['intItemUOMId'] = _items[y]['intItemUOMId'] || null;
                                            _orderitem['intRouteId'] = _items[y]['intRouteId'] || null;
                                            _orderitem['intEntityId'] = _items[y]['intEntityId'] || null;
                                            _orderitem['intSiteId'] = _sites[x]['intSiteId'] || null;
                                            _orderitem['intSiteNumber'] = _sites[x]['intSiteNumber'] || null;
                                            _orderitem['intTermId'] = _items[y]['intTermId'] || null;
                                            _orderitem['strItemNo'] = _items[y]['strItemNo'] || '';
                                            _orderitem['strItemDescription'] = _items[y]['strDescription'] || '';
                                            _orderitem['strSiteDescription'] = _sites[x]['strDescription'] || '';
                                            _orderitem['strState'] = _sites[x]['strState'] || '';
                                            _orderitem['strTerm'] = _items[y]['strTerm'] || '';
                                            _orderitem['intOrderId'] = _items[y]['intOrderId'] || null;
                                            _orderitem['tblOrderTaxCode'] = _taxcodes;

                                            console.log(_taxcodes);
                                            if(_taxcodes.length > 1) {
                                                _orderitem['ysnHavingApplicableTax'] = true;
                                            }
                                            else {
                                                _orderitem['ysnHavingApplicableTax'] = false;
                                            }

                                            // _items[y]['tblOrderTaxCode'] = _taxcodes;                                            
                                            // _items[y].intItemMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+100);
                                            // _items[y].intOrderMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+100);
                                            // _items[y].intOrderId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+100);
                                            
                                            _sites[x]['tblOrderItem'] = [];
                                            _sites[x]['tblOrderItem'].push(_orderitem);
                                        }
                                        else {
                                            _sites[x]['tblOrderItem'] = [];
                                            _sites[x]['tblOrderItem'].push(_orderitem);
                                        }
                                    }
                                }
                            }
                    
                            console.log('orders');
                            console.log(_sites);
                            loader.dismiss();
                    
                            resolve(_sites);            
                        },err=>{
                            console.log(err);
                            loader.dismiss();
                        });

                    }
                    else{
                        _query = 'SELECT \'false\' as ysnSelected, item.dblSalePrice as price, 0 as quantity, 0 as ending, \'\' as strContractHeaderNumber, * from item where strItemNo IN (' + _itemList + '0\')';
                        console.log(_query);
                        me.getByQuery(_query).then(res => {    
                            var _items = JSON.parse(JSON.stringify(res));
                            console.log('items');
                            console.log(_items);


                            _query = 'SELECT \'false\' as ysnSelected, 0 as dblTotalTax,* from applicabletaxcode where strItemNo IN (' + _itemList + '0\') and intSiteId IN (' + _siteList + ') and intEntityId = ' + entityId;
                            console.log(_query);
                            me.getByQuery(_query).then(res => {    
                                var _itemtaxcode = JSON.parse(JSON.stringify(res));
                                console.log('taxcodes');
                                console.log(_itemtaxcode);                        


                        
                                // FINAL RECONSTRUCT
                                for(var x = 0; x <= _sites.length-1; x++) {
                                    for(var y = 0; y <= _items.length-1; y++) {
                                        if(_sites[x].intOrderId == _items[y].intOrderId) {
                                            if(_itemtaxcode.length > 0) {
                                                var _taxcodes = [];
                                                for(var z = 0; z <= _itemtaxcode.length-1; z++) {
                                                    if(_items[y].strItemNo == _itemtaxcode[z].strItemNo && _items[y].intSiteId == _itemtaxcode[z].intSiteId && _itemtaxcode[z].intEntityId == entityId) {

                                                        // var _orderitemtax = new OrderTaxCode();
                                                        // _orderitemtax.dblAdjustedTax = 0; //false as ysnSelected, 0 as dblTotalTax
                                                        // _orderitemtax['ysnSelected'] = 'false';
                                                        // _orderitemtax['dblTotalTax'] = 0;

                                                        // _orderitemtax['dblAdjustedTax'] = _items['dblAdjustedTax'];
                                                        // _orderitemtax['dblBaseAdjustedTax'] = _items['dblBaseAdjustedTax'];
                                                        // _orderitemtax['dblExemptionPercent'] =  _items['dblExemptionPercent'];
                                                        // _orderitemtax['dblRate'] =  _items['dblRate'];
                                                        // _orderitemtax['dblTax'] =  _items['dblTax'];
                                                        // _orderitemtax['dblTotalTax'] =  _items['dblTotalTax'];
                                                        // _orderitemtax['intItemId'] =  _items['intItemId'];
                                                        // _orderitemtax['intTaxClassId'] =  _items['intTaxClassId'];
                                                        // _orderitemtax['intTaxCodeId'] =  _items['intTaxCodeId'];
                                                        // _orderitemtax['intTaxGroupId'] =  _items['intTaxGroupId'];
                                                        // _orderitemtax['intSalesTaxAccountId'] =  _items['intSalesTaxAccountId'];
                                                        // _orderitemtax['strCalculationMethod'] =  _items['strCalculationMethod'];
                                                        // _orderitemtax['strTaxCode'] =  _items['strTaxCode'];
                                                        // _orderitemtax['strTaxGroup'] =  _items['strTaxGroup'];
                                                        // _orderitemtax['ysnTaxExempt'] =  _items['ysnTaxExempt'];
                                                        // _orderitemtax['ysnTaxOnly'] =  _items['ysnTaxOnly'];
                                                        // _orderitemtax['strNotes'] =  _items['strNotes'];

                                                        _taxcodes.push(_itemtaxcode[z]);
                                                    }                  
                                                }
                                                _items[y]['tblOrderTaxCode'] = _taxcodes;
                                                _sites[x]['tblOrderItem'] = [];
                                                _sites[x]['tblOrderItem'].push(_items[y]);
                                            }
                                            else {
                                                _sites[x]['tblOrderItem'] = [];
                                                _sites[x]['tblOrderItem'].push(_items[y]);
                                            }
                                        }
                                    }
                                }
                        
                                console.log(_sites);
                                loader.dismiss();
                        
                                resolve(_sites);            
                            },err=>{
                                console.log(err);
                                loader.dismiss();
                            });
                            

                        },err=>{
                            console.log(err);
                            loader.dismiss();
                        });

                                           
                    }

                    


            
                    // var _siteList = '';
                    // for(var x = 0; x <= _items.length-1; x++) {
                    //     _siteList = _siteList + _items[x].intSiteId + ', ';
                    // }

                    // var _orderitem = new OrderItem();
                    // _orderitem['ysnSelected'] = false; //false as ysnSelected,  orderitem.dblPrice as price, 0 as quantity, 0 as ending, contractheader.strContractNumber as strContractHeaderNumber
                    // _orderitem['price'] = null;
                    // _orderitem['quantity'] = 0;
                    // _orderitem['ending'] = 0;
                    // _orderitem['strContractHeaderNumber'] = null;                    
                    // _orderitem['dblAvailableQty'] = _items['dblAvailableQty'];
                    // _orderitem['dblCashPrice'] = _items['dblCashPrice'];
                    // _orderitem['dblPrice'] = _items['dblPrice'];
                    // _orderitem['dblQuantity'] = _items['dblQuantity'];
                    // _orderitem['dblTotal'] = _items['dblTotal'];
                    // _orderitem['intContractHeaderId'] = _items['intContractHeaderId'];
                    // _orderitem['intContractDetailId'] = _items['intContractDetailId'];
                    // _orderitem['intContractSeq'] = _items['intContractSeq'];
                    // _orderitem['intDriverId'] = _items['intDriverId'];
                    // _orderitem['intItemId'] = _items['intItemId'];
                    // _orderitem['intItemUOMId'] = _items['intItemUOMId'];
                    // _orderitem['intRouteId'] = _items['intRouteId'];
                    // _orderitem['intEntityId'] = _items['intEntityId'];
                    // _orderitem['intSiteId'] = _items['intSiteId'];
                    // _orderitem['intSiteNumber'] = _items['intSiteNumber'];
                    // _orderitem['intTermId'] = _items['intTermId'];
                    // _orderitem['strItemNo'] = _items['strItemNo'];
                    // _orderitem['strItemDescription'] = _items['strItemDescription'];
                    // _orderitem['strSiteDescription'] = _items['strSiteDescription'];
                    // _orderitem['strState'] = _items['strState'];
                    // _orderitem['strTerm'] = _items['strTerm'];
            

                         
                },err=>{
                    console.log(err);
                    loader.dismiss();
                });


            })
            .catch(e => {
                console.log(e);
            });


           




                  

            

           

            // _orderitem['tblOrderTaxCode'] = [];
            // _orderitem['tblOrderTaxCode'].push(_orderitemtax);
            // _order['tblOrderItem'] = [];
            // _order['tblOrderItem'].push(_orderitem);
            // _invoice.push(_order);

            // console.log(_invoice);

            // loader.dismiss();
            // resolve(_invoice);                
        });
    }

}