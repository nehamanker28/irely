import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Events, Platform, ActionSheetController, PopoverController, ViewController  } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { DeviceToken } from '../../core/framework/push/models/device-token';
import { ReportService } from '../../providers/irely/report-service';

import { GlobalInfo } from '../../core/models/globalinfo';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { OrderBRL } from '../../core/brl/implementation/order';
import { CustomerBRL } from '../../core/brl/implementation/customer';
import { Invoice } from '../../core/models/invoice';
import { InvoiceBRL } from '../../core/brl/implementation/invoice';
import { InvoiceItems } from '../../core/models/invoiceitems';
import { InvoiceItemsBRL } from '../../core/brl/implementation/invoiceitems';
import { InvoiceTaxCodes } from '../../core/models/invoicetaxcodes';
import { InvoiceTaxCodesBRL } from '../../core/brl/implementation/invoicetaxcodes';
import { ShiftBRL } from '../../core/brl/implementation/shift';
import { Shift } from '../../core/models/shift';
import { OutOfGasBRL } from '../../core/brl/implementation/outofgas';
import { OutOfGas } from '../../core/models/outofgas';

@IonicPage()
@Component({
  selector: 'page-customer-invoice',
  templateUrl: 'customer-invoice.html',
})
export class CustomerInvoicePage extends BaseService<DeviceToken> {
  sites = [];
  orders = [];
  items = [];
  itemtaxcode = [];
  customer = [];
  itemTaxCode = [];
  currentCustomer = 0;
  meter = [];
  currentOrder = [];
  globalInfo: any;
  invoice = [];
  invoiceRecord: any;
  reportName: any;
  grandTotal: number = 0;

  langs;
  langForm; 
  pdfObj = null;

  totalItem: number = 0;
  totalTax: number = 0;

  tmAlerts = {
    strCustomerNumber: '',
    intSiteNumber: '',
    dtmDateDelivery: '',
    dblQuantity: 0,
    dblPrice: 0,
    dblTotal: 0
  };

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController,
              private popoverCtrl: PopoverController,
              private storage: Storage,
              private events: Events,
              private globalBRL: GlobalInfoBRL,
              private orderBRL: OrderBRL,
              private customerBRL: CustomerBRL,              
              private invoiceBRL: InvoiceBRL,
              private invoiceitemsBRL: InvoiceItemsBRL,
              private invoicetaxcodesBRL: InvoiceTaxCodesBRL,
              private shiftBRL: ShiftBRL,
              private outofgasBRL: OutOfGasBRL,
              public http: Http,
              private reportService: ReportService) {
                super(http);
    this.invoice = navParams.get('invoice');
    console.log(this.invoice);

    if(!Array.isArray(this.invoice)) {
      var _customernumber = this.invoice;
      this.invoice = [];
      this.currentOrder['strCustomerNumber'] = _customernumber;
    }

  }

  //#region SETUP

  ionViewDidLoad() {
    var me = this;
    console.log('ionViewDidLoad CustomerInvoicePage');    
    console.log(me.currentCustomer);

    me.getCustomer();

    me.meter['process'] = 'Start Pumping';
    me.meter['quantity'] = 0;
    me.meter['ending'] = 0;
    me.currentOrder['gridEnabled'] = false;    

    this.langForm = new FormGroup({
      "langs": new FormControl({value: 'rust', disabled: false})
    });

    me.userGlobalInfo();
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
    });
  }

  getCustomer() {
    var me = this;
    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    var _customernumber = me.currentOrder['strCustomerNumber'] || me.invoice[0].strCustomerNo;

    me.customerBRL.getByQuery('SELECT \'Invoice\' as strType, * FROM customer where strCustomerNumber = \'' + _customernumber + '\'').then(res => {
      me.customer = JSON.parse(JSON.stringify(res));
      console.log(me.customer);

      if(me.customer.length > 0) {
        me.customer = me.customer[0];
      }
      
      loader.dismiss();
    },err=>{
      console.log(err);
      loader.dismiss();
    })
  }

  getOrder() {
    var me = this;

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    me.orderBRL.getByQuery('SELECT \'false\' as ysnSelected,* from ordersite where strCustomerNumber = \'' + me.currentCustomer + '\'').then(res => {    
      me.orders = JSON.parse(JSON.stringify(res));
      console.log(me.orders);

      var _orderList = '';
      for(var x = 0; x <= me.orders.length-1; x++) {
        _orderList = _orderList + me.orders[x].intOrderId + ', ';
      }

      me.orderBRL.getByQuery('SELECT \'false\' as ysnSelected, 0 as price, 0 as quantity, 0 as ending,* from orderitem where intOrderId IN (' + _orderList + '0)').then(res => {    
        me.items = JSON.parse(JSON.stringify(res));
        console.log(me.items);

        var _itemList = '';
        for(var x = 0; x <= me.items.length-1; x++) {
          _itemList = _itemList + me.items[x].intMBILOrderItemId + ', ';
        }

        me.orderBRL.getByQuery('SELECT \'false\' as ysnSelected,* from ordertaxcode where intMBILOrderItemId IN (' + _itemList + '0)').then(res => {    
          me.itemtaxcode = JSON.parse(JSON.stringify(res));
          console.log(me.itemtaxcode);

          // FINAL RECONSTRUCT
          for(var x = 0; x <= me.orders.length-1; x++) {
            for(var y = 0; y <= me.items.length-1; y++) {
              if(me.orders[x].intOrderId == me.items[y].intOrderId) {
                if(me.itemtaxcode.length > 0) {
                  var _taxcodes = [];
                  for(var z = 0; z <= me.itemtaxcode.length-1; z++) {
                    if(me.items[y].intMBILOrderItemId == me.itemtaxcode[z].intMBILOrderItemId) {
                      _taxcodes.push(me.itemtaxcode[z]);
                    }                  
                  }
                  me.items[y]['tblOrderTaxCode'] = _taxcodes;
                  me.orders[x]['tblOrderItem'] = [];
                  me.orders[x]['tblOrderItem'].push(me.items[y]);
                }
                else {
                  me.orders[x]['tblOrderItem'] = [];
                  me.orders[x]['tblOrderItem'].push(me.items[y]);
                }
              }
            }
          }

          me.invoice = me.orders;
          
          console.log(me.invoice);
          loader.dismiss();
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
  }

  //#endregion

  //#region FUNCTIONS

  selectOrderStyle(order) {
    var me = this;

    console.log(order);
    var _rows = Array.from(document.getElementsByName('order_items'));
    _rows.forEach(element => {
      element.setAttribute("style", "border-style: none;");
    })

    document.getElementById('order_div_'+order.intOrderItemMobileId).setAttribute("style", "border-style: dashed; border-color:#118bd8; border-width: 3px; border-radius: 4px;");

    me.meter['quantity'] = order.tblOrderItem.quantity;
    me.meter['ending'] = order.tblOrderItem.ending;
    me.currentOrder = order;
    me.currentOrder['gridEnabled'] = false;
  }

  updateMeter(item) {
    var me = this;
    me.meter['quantity'] = item.quantity;
    me.meter['ending'] = item.ending;
    me.invoice[0]['dblTotal'] = ((item.price * item.quantity) || 0).toFixed(2);
    item['totalamount'] = ((item.price || 0) * (item.quantity || 0));    
    item['itemgrandtotal'] = item['totalamount'];
    item['itemtotaltax'] = 0;
    me.grandTotal = 0;
    
    var _totalTax = 0;
    for(var x = 0; x <= item['tblOrderTaxCode'].length - 1; x++) {
      var record = item['tblOrderTaxCode'][x];      
      var _totalamount = item.totalamount;

      if(item.ysnHavingApplicableTax == false || item.ysnHavingApplicableTax == 'false') {
        _totalamount = 0;
      }

      if(record.ysnTaxExempt == 'false' || record.ysnTaxExempt == false) {
        if(record.strCalculationMethod === 'Percentage') {
          record.dblTotalTax = (((record.dblRate || 0) / 100) * (_totalamount || 0)).toFixed(2);
        }
        else {
          record.dblTotalTax = ((record.dblRate || 0) * (_totalamount || 0)).toFixed(2);
        }
      }

      _totalTax = _totalTax + parseFloat(record.dblTotalTax || 0);
      
      console.log(record);
    }

    item['itemtotaltax'] = _totalTax;

    for(var x = 0; x <= me.invoice['length'] - 1; x++) {
      var _record = me.invoice[x];

      for(var y = 0; y <= _record['tblOrderItem']['length'] - 1; y++) {      
        var _item = _record['tblOrderItem'][y];
        _item['itemgrandtotal'] = (_item['totalamount'] || 0) + (_item['itemtotaltax'] || 0);
        me.grandTotal =  (me.grandTotal || 0) + (_item['itemgrandtotal'] || 0);
      } 
    }

    console.log(item);
  }

  startPumping(process) {
    var me = this;
    if(process == 'Start Pumping'){
      me.meter['process'] = 'STOP';
    }
    else{
      me.meter['process'] = 'FINISHED';
    }    

    document.getElementById('gridInvoice').setAttribute('disabled','true');
    me.currentOrder['gridEnabled'] = true;
  }
  
  contractProcess(id, quantity) {
    var me = this; 
    console.log('contract process'); 
    console.log(quantity);
    console.log(id);

    me.invoiceitemsBRL.updateByQuery("UPDATE contractdetail SET dblAvailableQty = (dblAvailableQty - " + quantity + ") WHERE intContractDetailId = " + id).then(res => console.log(res));
  }


  //#endregion

  //#region BUTTONS

  removeselectionInvoice() {
    console.log(this.currentOrder);

    if(this.currentOrder['ysnSelected'] == true) {
      this.invoice = this.invoice.filter(val=>val.ysnSelected != true);
    }
    else {
      for(var x = 0; x <= this.currentOrder['tblOrderItem'].length - 1; x++) {
        if(this.currentOrder['tblOrderItem'][x].ysnSelected == true) {
          this.currentOrder['tblOrderItem'] = this.currentOrder['tblOrderItem'].filter(val=>val.ysnSelected != true);
          return false;
        }
        else if(this.currentOrder['tblOrderItem'][x].tblOrderTaxCode){
          if(this.currentOrder['tblOrderItem'][x].tblOrderTaxCode.filter(val=>val.ysnSelected == true).length > 0) {
            this.currentOrder['tblOrderItem'][x].tblOrderTaxCode = this.currentOrder['tblOrderItem'][x].tblOrderTaxCode.filter(val=>val.ysnSelected != true);
            return false;
          }
        }
      }
    }

  }

  openAddMenu() {
    var me = this;
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Add Site',
          handler: () => {
            me.openAddSite();
          }
        },{
          text: 'Add Items',
          handler: () => {
            me.openAddItem();
          }
        },{
          text: 'Add Tax Code',
          handler: () => {
            me.openAddTaxCode();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  openAddItem() {
    this.events.subscribe('addInvoiceItem', (paramsVar) => {
      console.log(paramsVar);

      var _item = new InvoiceItems();
      _item.intOrderId = this.currentOrder['strOrderNumber'] || Math.floor(Math.random() * (999999999 - 1) + 1);
      _item.strOrderNumber = this.currentOrder['strOrderNumber'] || Math.floor(Math.random() * (999999999 - 1) + 1);
      _item.intEntityId = this.globalInfo.intUserId;
      _item.strCustomerNumber = this.currentOrder['strCustomerNumber'];
      _item.intDriverId = this.globalInfo.intDriverNumber;
      _item.intSiteId = this.currentOrder['intSiteId'];
      _item.intSiteNumber = this.currentOrder['intSiteNumber'];
      _item.strSiteDescription = this.currentOrder['strSiteName'];
      _item.intItemId = paramsVar.intItemId;
      _item.strItemNo = paramsVar.strItemNo;
      _item.strItemDescription = paramsVar.strDescription;
      _item.dblPrice = paramsVar.dblSalePrice;
      _item.ysnSelected = false;
      _item['price'] = 0;
      _item['quantity'] = 0;
      _item['totalamount'] = 0;
      _item['InvoiceTaxCodes'] = [];
      _item['tblOrderTaxCode'] = [];

      if(!this.currentOrder["tblOrderItem"]) {
        this.currentOrder["tblOrderItem"] = [];
        this.currentOrder["tblOrderItem"].push(_item);
      }
      else {
        this.currentOrder["tblOrderItem"][this.currentOrder["tblOrderItem"].length] = _item;
      }      

      this.events.unsubscribe('addInvoiceItem');
    });

    this.navCtrl.push("CustomerInvoiceAddItemPage", { intLocation: this.globalInfo['intLocation'] });
  }
  
  openAddSite() {
    this.events.subscribe('addInvoiceSite', (paramsVar) => {
      console.log(paramsVar);

      var _site = new InvoiceItems();
      _site.dblTankCapacity = paramsVar.dblTankCapacity;
      _site.intDriverId = this.globalInfo.intDriverNumber;
      _site.intOrderId = Math.floor(Math.random() * (999999999 - 1) + 1);
      _site.intOrderItemMobileId = Math.floor(Math.random() * (999999999 - 1) + 1);
      _site.intSiteId = paramsVar.intSiteId;
      _site.intSiteNumber = paramsVar.intSiteNumber;
      _site.strSerialNumber = paramsVar.strSerialNumber;
      _site.strSiteDescription = paramsVar.strDescription;
      _site.ysnSelected = false;
      _site['tblOrderItem'] = [];
      
      this.invoice[this.invoice.length] = _site;

      this.events.unsubscribe('addInvoiceSite');
    });

    this.navCtrl.push("CustomerInvoiceAddSitePage", { customerid: this.currentOrder['strCustomerNo'] });
  }

  openAddTaxCode() {
    var me = this;
    me.events.subscribe('addInvoiceTaxCode', (paramsVar) => {
      console.log(paramsVar);

      var _taxcode = new InvoiceTaxCodes();
      _taxcode.intInvoiceItemId = me.currentOrder['intOrderItemId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
      _taxcode.intItemId = me.currentOrder['intItemId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
      _taxcode.intTaxCodeId = paramsVar.intTaxCodeId;
      _taxcode.strCalculationMethod = paramsVar.strCalculationMethod;
      _taxcode.strTaxCode = paramsVar.strTaxCode;
      _taxcode.dblRate = paramsVar.dblRate || 0;
      _taxcode.ysnSelected = false;

      if(!me.currentOrder["tblOrderItem"][0]["tblOrderTaxCode"]) {
        console.log(me.currentOrder["tblOrderItem"][0]);

        var _quantity = me.currentOrder["tblOrderItem"][0].quantity || 0;
        if(me.currentOrder["tblOrderItem"][0].ysnHavingApplicableTax == false || me.currentOrder["tblOrderItem"][0].ysnHavingApplicableTax == 'false') {
          _quantity = 0;
        }

        if(_taxcode.ysnTaxExempt != true) {
          if(_taxcode.strCalculationMethod === 'Percentage') {
            _taxcode.dblTotalTax = ((_taxcode.dblRate || 0) / 100) * (_quantity || 0);
          }
          else {
            _taxcode.dblTotalTax = (_taxcode.dblRate || 0) * (_quantity || 0);
          }
        }

        // _taxcode.dblTotalTax = (_taxcode.dblRate || 0) * (_quantity || 0);
        me.currentOrder["tblOrderItem"][0]["tblOrderTaxCode"] = [];
        me.currentOrder["tblOrderItem"][0]["tblOrderTaxCode"].push(_taxcode);
      }
      else {
        var _lastItem = me.currentOrder["tblOrderItem"].length - 1;
        console.log(me.currentOrder["tblOrderItem"][_lastItem]);

        var _quantity = me.currentOrder["tblOrderItem"][_lastItem].quantity || 0;
        if(me.currentOrder["tblOrderItem"][_lastItem].ysnHavingApplicableTax == false || me.currentOrder["tblOrderItem"][_lastItem].ysnHavingApplicableTax == 'false') {
          _quantity = 0;
        }

        if(_taxcode.ysnTaxExempt != true) {
          if(_taxcode.strCalculationMethod === 'Percentage') {
            _taxcode.dblTotalTax = ((_taxcode.dblRate || 0) / 100) * (_quantity || 0);
          }
          else {
            _taxcode.dblTotalTax = (_taxcode.dblRate || 0) * (_quantity || 0);
          }
        }

        // _taxcode.dblTotalTax = (_taxcode.dblRate || 0) * (_quantity || 0);
        me.currentOrder["tblOrderItem"][_lastItem]["tblOrderTaxCode"][me.currentOrder["tblOrderItem"][_lastItem]["tblOrderTaxCode"].length] = _taxcode;
      }    

      me.events.unsubscribe('addInvoiceTaxCode');
    });

    if(!me.currentOrder) return;
    if(!me.currentOrder['tblOrderItem']) return;
    if(!me.currentOrder['tblOrderItem'][0]) return;
    if(!me.currentOrder['tblOrderItem'][0].intSiteId) return;
    if(!me.currentOrder['tblOrderItem'][0].intItemId) return;

    me.navCtrl.push("CustomerInvoiceAddTaxPage", {intEntityId: me.currentOrder['intEntityId'], intSiteId: me.currentOrder['intSiteId'], intItemId: me.currentOrder['intItemId']});
  }

  // presentRadioPopover(ev: UIEvent) {
  //   let popover = this.popoverCtrl.create('CustomerInvoicePopoverMenuPage');

  //   popover.present({
  //     ev: ev
  //   });
  // } 

  openMiscMenu() {
    var me = this;
    const actionSheet = this.actionSheetCtrl.create({
      buttons: [
        {
          text: 'Comment',
          handler: () => {
            me.openComment();
          }
        },{
          text: 'Customer Detail',
          handler: () => {
            me.moreDetail();
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    actionSheet.present();
  }

  openComment() {
    this.events.subscribe('addComment', (paramsVar) => {
      console.log(paramsVar);

      this.invoice[0]['strComments'] = paramsVar;
      this.events.unsubscribe('addComment');
    });

    this.navCtrl.push("CustomerInvoiceCommentPage", { strComment: this.invoice[0]['strComments'] });
  }

  moreDetail() {
    console.log(this.currentOrder['strCustomerNumber']);
    console.log(this.invoice[0].strCustomerNo);
    this.navCtrl.push("CustomerDetailPage", { customerid: this.currentOrder['strCustomerNo'] || this.invoice[0].strCustomerNo });
  }

  cancelInvoice() {
    var me = this;
    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to cancel?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.pop();
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log(me.invoice);
          }
        }
      ]
    });
    confirm.present(); 
  }

  doneInvoice() {
    var me = this;
    var loader = this.loadingCtrl.create({content: "Saving invoice...", enableBackdropDismiss: true});
        loader.present();

    var _date = new Date();
    var datestring = _date.getFullYear() + "" + ("0"+(_date.getMonth()+1)).slice(-2) + "" +
                     ("0" + _date.getDate()).slice(-2) + "" + ("0" + _date.getHours()).slice(-2) + "" + ("0" + _date.getMinutes()).slice(-2)  + "" + ("0" + _date.getSeconds()).slice(-2);
                     
    console.log(me.customer);
    console.log(me.invoice);
    console.log(me.globalInfo);

    // +++++++ HEADER +++++++
    var _invoice = new Invoice();
    _invoice.strInvoiceNo = 'SI-M-' + datestring;
    _invoice.intOrderId = me.invoice[0]['intOrderId'] || 0;
    _invoice.intEntityCustomerId = me.customer['intEntityCustomerId'];
    _invoice.strCustomerNo = me.customer['strCustomerNumber'];
    _invoice.strCustomerName = me.customer['strCustomerName'];
    _invoice.strLocationName = me.customer['strCustomerNumber'];
    _invoice.intLocationId = me.globalInfo.intLocation;
    _invoice.strType = me.customer['strType'];
    _invoice.dtmDeliveryDate = _date.toJSON();
    _invoice.dtmInvoiceDate = _date.toJSON();
    _invoice.intDriverId = me.globalInfo.intDriverId || me.globalInfo.intDriverNumber;
    _invoice.intShiftId = me.globalInfo.intShiftCounter;
    _invoice.strComments = me.customer['strInternalNotes'];
    _invoice.dblTotal = (me.totalItem + me.totalTax);

    me.invoiceRecord = _invoice;
    me.reportName = _invoice.strInvoiceNo; //report name | pdf filename

    me.invoiceBRL.add(_invoice).then(res => {
      console.log(res);

        // +++++++ DETAIL (ITEM) +++++++
        var _invoiceItemList = [];
        for(var x = 0; x <= me.invoice.length - 1; x++) {
          var _invoiceItems = new InvoiceItems();
          _invoiceItems.intInvoiceId = null; // result of header invoice
          _invoiceItems.intItemId = me.invoice[x]['tblOrderItem'][0].intItemId || 0;
          _invoiceItems.intContractDetailId = null; // nowhere to pull
          _invoiceItems.intSiteId = me.invoice[x]['tblOrderItem'][0].intSiteId || 0;
          _invoiceItems.intOrderId = me.invoice[x]['tblOrderItem'][0].intOrderId || 0;
          _invoiceItems.strOrderNumber = me.invoice[x]['tblOrderItem'][0].strOrderNumber || 0;
          _invoiceItems.strItemNo = me.invoice[x]['tblOrderItem'][0].strItemNo;
          _invoiceItems.strItemDescription = me.invoice[x]['tblOrderItem'][0].strItemDescription;
          _invoiceItems.strSiteDescription = me.invoice[x]['tblOrderItem'][0].strSiteDescription;
          _invoiceItems.dblPrice = me.invoice[x]['tblOrderItem'][0].dblPrice || 0;
          _invoiceItems.ysnOutOfGas = me.invoice[x]['ysnOutOfGas'] || false;

          _invoiceItems.dblQuantity = me.invoice[x]['tblOrderItem'][0].quantity || 0;          
          _invoiceItems.dblTotal = me.invoice[x]['tblOrderItem'][0].totalamount || 0;          
          
          // _invoiceItems.strInvoiceNo = _invoiceItems.strInvoiceNo || '';
          // _invoiceItems.intEntityCustomerId = _invoiceItems.intEntityCustomerId || 0;
          // _invoiceItems.strCustomerNo = _invoiceItems.strCustomerNo || '';
          // _invoiceItems.strCustomerName = _invoiceItems.strCustomerName || '';
          // _invoiceItems.intLocationId = _invoiceItems.intLocationId || 0;
          // _invoiceItems.strLocationName = _invoiceItems.strLocationName || '';
          // _invoiceItems.strType = _invoiceItems.strType || '';
          // _invoiceItems.dtmDeliveryDate = _invoiceItems.dtmDeliveryDate || new Date();
          // _invoiceItems.dtmInvoiceDate = _invoiceItems.dtmInvoiceDate || new Date();
          // _invoiceItems.intDriverId = _invoiceItems.intDriverId || 0;
          // _invoiceItems.strDriverNo = _invoiceItems.strDriverNo || '';
          // _invoiceItems.strDriverName = _invoiceItems.strDriverName || '';
          // _invoiceItems.intShiftId = _invoiceItems.intShiftId || 0;
          // _invoiceItems.intShiftNumber = _invoiceItems.intShiftNumber || 0;
          // _invoiceItems.strComments = _invoiceItems.strComments || '';
          // _invoiceItems.dblTotal = _invoiceItems.dblTotal || 0;
          // _invoiceItems.intTermId = _invoiceItems.intTermId || 0;
          // _invoiceItems.strTerm = _invoiceItems.strTerm || '';
          // _invoiceItems.ysnPosted = _invoiceItems.ysnPosted || false;
          // _invoiceItems.inti21InvoiceId = _invoiceItems.inti21InvoiceId || 0;
          // _invoiceItems.stri21InvoiceNo = _invoiceItems.stri21InvoiceNo || '';
          // _invoiceItems.intConcurrencyId = _invoiceItems.intConcurrencyId || 0;
          // _invoiceItems.strStatus = _invoiceItems.strStatus || '';
          // _invoiceItems.intInvoiceSiteId = _invoiceItems.intInvoiceSiteId || 0;
          // _invoiceItems.intSiteNumber = _invoiceItems.intSiteNumber || 0;
          // _invoiceItems.strSiteDescription = _invoiceItems.strSiteDescription || '';
          // _invoiceItems.strSiteAddress = _invoiceItems.strSiteAddress || '';
          // _invoiceItems.strCity = _invoiceItems.strCity || '';
          // _invoiceItems.strState = _invoiceItems.strState || '';
          // _invoiceItems.strZipCode = _invoiceItems.strZipCode || '';
          // _invoiceItems.strCountry = _invoiceItems.strCountry || '';
          // _invoiceItems.strSiteStatus = _invoiceItems.strSiteStatus || '';
          // _invoiceItems.intInvoiceItemId = _invoiceItems.intInvoiceItemId || 0;
          // _invoiceItems.intItemUOMId = _invoiceItems.intItemUOMId || 0;
          // _invoiceItems.strUnitMeasure = _invoiceItems.strUnitMeasure || '';
          // _invoiceItems.dblQuantity = _invoiceItems.dblQuantity || 0;
          // _invoiceItems.strContractNumber = _invoiceItems.strContractNumber || '';
          // _invoiceItems.intContractSeq = _invoiceItems.intContractSeq || 0;
          // _invoiceItems.inti21InvoiceDetailId = _invoiceItems.inti21InvoiceDetailId || 0;

          _invoiceItemList.push(_invoiceItems);
        }

        me.invoiceRecord['items'] = _invoiceItemList;

        me.invoiceitemsBRL.addBulk(new InvoiceItems(),_invoiceItemList).then(res => {
          console.log(res);

            // +++++++ DETAIL (TAX CODE) +++++++
            var _invoiceTaxCodeList = [];
            for(var x = 0; x <= me.invoice.length - 1; x++) {
              for(var z = 0; z <= me.invoice[x]['tblOrderItem'][0]['tblOrderTaxCode'].length - 1; z++) {
              
                var _invoiceTaxCodes = new InvoiceTaxCodes();
                _invoiceTaxCodes.intOrderId = me.invoice[0]['intOrderId'] || 0;
                _invoiceTaxCodes.intInvoiceTaxId = null;
                _invoiceTaxCodes.intInvoiceItemId = null;
                _invoiceTaxCodes.intItemId = me.invoice[x]['tblOrderItem'][0].intItemId || 0;
                _invoiceTaxCodes.intTaxCodeId = me.invoice[x]['tblOrderItem'][0]['tblOrderTaxCode'][z].intTaxCodeId || 0;
                _invoiceTaxCodes.dblRate = me.invoice[x]['tblOrderItem'][0]['tblOrderTaxCode'][z].dblRate || 0;

                _invoiceTaxCodeList.push(_invoiceTaxCodes);
              }            
            }

            me.invoiceRecord['taxcodes'] = _invoiceTaxCodeList;

            if(_invoiceTaxCodeList.length > 0) {
              me.invoicetaxcodesBRL.addBulk(new InvoiceTaxCodes(), _invoiceTaxCodeList).then(res => {
                console.log(res);
                
                me.createPdf();
                for(var x = 0; x <= me.invoice.length - 1; x++) {
                  for(var z = 0; z <= me.invoice[x]['tblOrderItem'].length - 1; z++) {
                    var _id = me.invoice[x]['tblOrderItem'][z].intContractDetailId;;
                    var _quantity = me.invoice[x]['tblOrderItem'][z].quantity;
                    me.contractProcess(_id, _quantity); //Contract
                  }              
                }
                me.sendShiftData();
                loader.dismiss();

                var _hasOOG = false;
                for(var x = 0; x <= me.invoice.length - 1; x++) {
                  console.log(me.invoice[x]);
                  if(me.invoice[x]['ysnOutOfGas']) {
                    _hasOOG = true;
                    me.deliveryOutOfGas(me.customer, me.invoice[x]['tblOrderItem'][0]);
                  }
                }

                if(!_hasOOG) {
                  me.navCtrl.pop();
                }                          
                
              });
            }
            else {
              console.log(res);
                
              me.createPdf();
              for(var x = 0; x <= me.invoice.length - 1; x++) {
                for(var z = 0; z <= me.invoice[x]['tblOrderItem'].length - 1; z++) {
                  var _id = me.invoice[x]['tblOrderItem'][z].intContractDetailId;;
                  var _quantity = me.invoice[x]['tblOrderItem'][z].quantity;
                  me.contractProcess(_id, _quantity); //Contract
                }              
              }
              me.sendShiftData();
              loader.dismiss();

              var _hasOOG = false;
              for(var x = 0; x <= me.invoice.length - 1; x++) {
                console.log(me.invoice[x]);
                if(me.invoice[x]['ysnOutOfGas']) {
                  _hasOOG = true;
                  me.deliveryOutOfGas(me.customer, me.invoice[x]['tblOrderItem'][0]);
                }
              }

              if(!_hasOOG) {
                me.navCtrl.pop();
              }
            }

            

        });
                     
    });
  }

  clearInputValue(elem) {
    elem.getElementRef().nativeElement.children[0].select();
  }

  deliveryOutOfGas(customer, site) {
    this.events.subscribe('closeInvoice', (paramsVar) => {      
      this.navCtrl.pop();
      this.events.unsubscribe('closeInvoice');
    });    
    this.navCtrl.push("DeliveryOutofgasPage", { currentCustomerData: customer, currentSiteData: site });
  }

  //#endregion

  //#region REPORTS
  
  logo() {
    return 'data:image/jpeg;base64,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';
  }

  buildInvoiceItemsReport() {
    var me = this;
    var _itemContent = [];    
    var _invoiceContent = [];
    var _item = {};
    var _body = {style:'',table:{widths:[],body:[]},layout:''};
    var _itemTotal = 0;
    var _itemPrice = 0;
    var _itemQuantity = 0;

    for(var x = 0; x <= me.invoice['length'] - 1; x++) {
      var record = me.invoice[x];      

      me.tmAlerts.intSiteNumber = record.intSiteNumber;
      me.tmAlerts.strCustomerNumber = me.currentOrder['strCustomerNumber'];
      me.tmAlerts.dtmDateDelivery = (new Date()).toString();

      _itemContent = [];
      _item = {text: record.intSiteNumber + ', ' + record.strSiteDescription + ', ' + record.strSiteAddress, bold: false, margin: [0, 5, 0, 3]};
      _body = {style: 'tableExample',table: {widths: [80, 55, 65, 65, 65, 65, 65],body: []},layout: 'noBorders'};

      for(var y = 0; y <= record['tblOrderItem']['length'] - 1; y++) {      
        var item = record['tblOrderItem'][y];
        console.log(item);
        var _itemTotal = (parseFloat(item['totalamount'] || 0));

        // if(item.ysnTaxExempt == 'false' || item.ysnTaxExempt == false) {
        //   if(item.strCalculationMethod === 'Percentage') {
        //     _itemTotal = ((item.dblQuantity || 0 ) / 100) * (item.dblPrice || 0);
        //   }
        //   else {
        //     _itemTotal = (item.dblQuantity || 0 ) * (item.dblPrice || 0);
        //   }
        // }

        me.totalItem = me.totalItem + _itemTotal;
        _itemPrice = _itemPrice + (item.dblPrice || 0);
        _itemQuantity = _itemQuantity + (item.dblQuantity || 0);

        console.log(item);

        _body.table.body.push([{text: item.strItemNo + ' - ' + item.strItemDescription, alignment: 'left'}, {text: parseInt(item.quantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}, {text: (item.ending || '0') + '%', alignment: 'right'}, {text: item.strContractHeaderNumber || '', alignment: 'right'},{text: item.dblAvailableQty || '', alignment: 'right'},{text: item.dblPrice.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'},{text: _itemTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}]);
        
        for(var z = 0; z <= item['tblOrderTaxCode']['length'] - 1; z++) {
          var taxcode = item['tblOrderTaxCode'][z];

          if(taxcode.dblTotalTax > 0) {
            me.totalTax = me.totalTax + parseFloat(taxcode.dblTotalTax || 0);

            console.log(taxcode);           

            _body.table.body.push([{text: taxcode.strTaxCode, alignment: 'right', style: 'tableHeader', colSpan: 5},{},{},{},{},{text: taxcode.dblRate, alignment: 'right', style: 'tableHeader'},{text: taxcode.dblTotalTax, alignment: 'right', style: 'tableHeader'}]);
          }
        }
      }

      me.tmAlerts.dblTotal = me.totalTax;
      me.tmAlerts.dblPrice = _itemPrice;
      me.tmAlerts.dblQuantity = _itemQuantity;
      
      _itemContent.push(_item);    
      _itemContent.push(_body);
      _invoiceContent.push(_itemContent);
    }

    return _invoiceContent;
  }

  createPdf() {
    var me = this;
    var irelyImage = me.logo();
    var _date = new Date();
    var _invoiceDate = ("0"+(_date.getMonth()+1)).slice(-2) + "/" + ("0" + _date.getDate()).slice(-2) + "/" + _date.getFullYear();

    console.log(me.customer);
    console.log(me.invoice);
    console.log(me.invoiceRecord);

    var _invoiceContent = me.buildInvoiceItemsReport();
    console.log(_invoiceContent);

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
            columns: [
                {
                    text: [
                        {
                            text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                        }
                    ],
                    margin: [0, 0, 35, 0],
                    alignment: 'right'
                }
            ]
        };
      },
      content: [
        {
          table: {
            widths: [ 105, '*', '*' ],
            body: [
              [
                { image: irelyImage, width: 100 },
                [
                  {
                    table: {
                      body: [
                        [{ text: 'iRely Propane Services', bold: true }, '', ''],
                        ['4242 Flagstaff', '', ''],
                        ['Fort Wayne, IN 46815', '', ''],
                        ['', '', ''],
                        ['', '', '']
                      ]
                    },
                    layout: 'noBorders'
                  }
                ],
                { text: 'Invoice: ' + me.invoiceRecord.strInvoiceNo, alignment: 'right', style: 'header' },  
              ]
            ]
          },
          layout: 'noBorders'
        },
        {text: '\n'},
        {
			style: 'tableExample',
			table: {
			    widths: [70, 258],
				body: [
					[
						{
							rowSpan: 1,
							colSpan: 1,
							border: [true, true, true, true],
							fillColor: '#cccccc',
							text: 'Bill To:'
            },
            ' ' + me.customer['strBillToAddress'] + '\n' + me.customer['strBillToCity'] + ', ' + me.customer['strBillToState'] + ' ' + me.customer['strBillToZipCode'] + ', United States'
						//'Office \n 223 Main Street \n Fort Wayne, IN 12121, United States \n '
					]
				]
			}
		},
		{text: '\n'},
		{
			style: 'tableExample',
			table: {
				widths: [70, '*', 80, '*', 70, '*'],
				body: [
					[{text: 'Customer:', style: 'shadedbox'}, {text: me.customer['strCustomerNumber'] || '', alignment: 'left'}, {text: 'Driver:', style: 'shadedbox'}, {text: me.invoice[0]['strDriverName'] || '', alignment: 'left'}, {text: 'PO Number:', style: 'shadedbox'}, {text: '', alignment: 'left'}],
					[{text: 'Terms:', style: 'shadedbox'}, {text: me.customer['strTerm'] || '', alignment: 'left'}, {text: 'Paid:', style: 'shadedbox'}, {text: 'No', alignment: 'left'}, {text: '', style: 'shadedbox'}, {text: '', alignment: 'left'}],
					[{text: 'Invoice Date:', style: 'shadedbox'}, {text: _invoiceDate || '', alignment: 'left'}, {text: 'Delivery Date:', style: 'shadedbox'}, {text: _invoiceDate || '', alignment: 'left'}, {text: 'Due Date:', style: 'shadedbox'}, {text: '12/21/2017', alignment: 'left'}],
					[{text: 'Discount Detail:', style: 'shadedbox'}, {text: 'Office \n4242 Flagstaff Cove \nFort Wayne, IN, 46815, \nUnited States', colSpan: 2, alignment: 'left'}, {}, {text: 'Invoice Header Comment:', style: 'shadedbox'}, {text: me.invoiceRecord.strComments || '', alignment: 'left', colSpan: 2}]
				]
			}
		},
		{text: '\n'},
		{text: '\n'},
        {
          style: 'tableExample',
          bold: true,
          table: {
            widths: [80, 55, 65, 65, 65, 65, 65],
            headerRows: 1,
            body: [
              [{text: 'Item', alignment: 'left', style: 'tableHeader'}, {text: 'Quantity', alignment: 'right', style: 'tableHeader'}, {text: 'End % Full', alignment: 'right', style: 'tableHeader'}, {text: 'Contract #', alignment: 'right', style: 'tableHeader'},{text: 'Balance', alignment: 'right', style: 'tableHeader'},{text: 'Price', alignment: 'right', style: 'tableHeader'},{text: 'Total', alignment: 'right', style: 'tableHeader'}],
            ]
          },
          layout: 'noBorders'
        },
        {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},        
		{text: '\n'},
        {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
        {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
        {text: '\n'},
        {text: 'Total Records: 1', italics: true},
        {text: '\n'},
        {
			style: 'tableExample',
			table: {
			    widths: [70, 200, 40, 70, '*'],
		    	body: [
					[
            {
              rowSpan: 3,
              colSpan: 1,
              border: [false, false, false, false],
              text: ''
            },
						{
						    rowSpan: 3, 
                colSpan: 1, 
                border: [false, false, false, false],
						    text: ''
						}, 
						{
							rowSpan: 3,
							colSpan: 1,
							border: [false, false, false, false],
							text: ''
						},
						{
						    rowSpan: 1, 
						    colSpan: 1, 
						    fillColor: '#cccccc',
						    text: 'Subtotal:'
						},
						{text: me.totalItem.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}
					],
					[
					    '', 
					    '', 
					    '', 
					    {
						    rowSpan: 1, 
						    colSpan: 1, 
						    fillColor: '#cccccc',
						    text: 'Tax:'
						}, 
						{text: me.totalTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}
					],
					[
					    '', 
					    '', 
					    '', 
					    {
						    rowSpan: 1, 
						    colSpan: 1, 
						    fillColor: '#cccccc',
						    text: 'Total:'
						}, 
						{text: (me.totalItem + me.totalTax).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}
					 ]
				]
			}
		},
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
          margin: [0, 10, 0, 10],
          fontfamily: 'Wingdings'
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%'
        },
        body: {
          fontSize: 12,
        },
        shadedbox: {
           alignment: 'left', 
           fillColor: '#cccccc',
           bold: true
        }
      },
      defaultStyle: {
          fontSize: 11.5,
      }      
    };

    // STARTING AT #9    
    var _positionStart = 9;
    for(var x = 0; x <= _invoiceContent.length - 1; x++) {
      for(var y = 0; y <= _invoiceContent[x].length - 1; y++) {
        docDefinition['content'].splice(_positionStart+y, 0, _invoiceContent[x][y]);
      }    
      _positionStart = _positionStart + _invoiceContent[x].length;
    }

    var _now = new Date(),
        _filename = me.reportName; //"Invoice_" +_now.getFullYear() + ("0"+(_now.getMonth()+1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours()+1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
    me.reportService.create(docDefinition, _filename, true);

  }

  //#endregion

  //#region SEND DATA

  sendShiftData() {
    var me = this;
    var _shift = [],
        _invoice = [],
        _invoiceitems = [],
        _invoicetaxcodes = [],
        _outofgass = [],
        _data = [];

    me.shiftBRL.get(new Shift).then(res => {
      _shift = res;
      me.invoiceBRL.get(new Invoice).then(res => {
        console.log(res);
        _invoice[0] = res[res.length-1];
        console.log(_invoice);
        me.invoiceitemsBRL.get(new InvoiceItems).then(res => {
          _invoiceitems = res;
          me.invoicetaxcodesBRL.get(new InvoiceTaxCodes).then(res => {
            _invoicetaxcodes = res;

            console.log(_shift);
            _data = _shift[0];
            _data['tblMBILInvoices'] = [];

            for(var x = 0; x<=_invoice.length-1; x++) {
              var _temp_invoice = [];
              _temp_invoice = _invoice[x];
              for(var y = 0; y<=_invoiceitems.length-1; y++) {
                if(_invoice[x].intOrderId == _invoiceitems[y].intOrderId) {
                  _temp_invoice['tblMBILInvoiceItems'] = [];
                  _temp_invoice['tblMBILInvoiceItems'].push(_invoiceitems[y]);
                  _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
                  for(var z = 0; z<=_invoicetaxcodes.length-1; z++) {                      
                    if(_invoice[x].intOrderId == _invoicetaxcodes[z].intOrderId) {                                                
                      _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'].push(_invoicetaxcodes[z]);
                    }
                  }
                }
              }
              console.log(_temp_invoice);
              _data['tblMBILInvoices'].push(_temp_invoice);
            }

            console.log(_data);

            me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => { 
              console.log('syncentireshift');
              console.log(res);
              // loader.dismiss();

              me.invoiceitemsBRL.updateByQuery("UPDATE invoice SET ysnSendToOffice = 'true' WHERE intOrderId = " + _invoice[_invoice.length-1].intOrderId).then(res => { console.log(res); console.log('update invoice'); });
              me.invoiceitemsBRL.updateByQuery("UPDATE orders SET strOrderStatus = 'Delivered' WHERE intOrderId = " + _invoice[_invoice.length-1].intOrderId).then(res => { console.log(res); console.log('update orders'); });

              // TM Alerts
              // 1 order 1 site 1 item                                        
              me.postraw('/tankmanagement/api/consumptionsite/emaildeliveries', me.tmAlerts).subscribe(res => { 
                console.log('emaildeliveries');
                console.log(res);
              });
              
              // me.navCtrl.pop();
            });                  

          });
        });
      });
    });
  }

  //#endregion

}
