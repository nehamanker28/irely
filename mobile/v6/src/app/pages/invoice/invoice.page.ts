import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController, Platform, ActionSheetController, PopoverController, ModalController  } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Service } from '../../framework/_common/base/service';
import { Token } from '../../framework/_common/base/token';
import { ReportService } from '../../providers/report.service';
import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';
import { Message } from '../../framework/_common/base/message';
import { config } from 'rxjs';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { TMSite } from '../../framework/models/tblTMSite';
import { Invoice } from '../../framework/models/invoice';
import { InvoiceItems } from '../../framework/models/invoiceitems';
import { InvoiceTaxCodes } from '../../framework/models/invoicetaxcodes';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { InvoiceTaxPage } from '../invoice-tax/invoice-tax.page';
import { InvoiceAddContractPage } from '../invoice-add-contract/invoice-add-contract.page';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Tankwagon } from '../../framework/models/tankwagon';
import { HTTP } from '@ionic-native/http/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { LCR_functions } from '../../providers/LCR_functions';
import { LCR_bluetooth } from '../../providers/LCR_bluetooth';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.page.html',
  styleUrls: ['./invoice.page.scss'],
  providers: [DatePipe]
})
export class InvoicePage extends Service<Token> {
  sites = [];
  orders = [];
  items = [];
  item = [];
  pricing = [];
  itemtaxcode = [];
  customer = [];
  paymentMethod = [];
  itemTaxCode = [];
  currentCustomer = 0;
  meter = [];
  currentOrder = [];
  previousOrder = [];
  globalInfo: any;
  invoice = [];
  invoiceRecord: any;
  reportName: any;
  grandTotal: number = 0;
  isFromCustomer: boolean = false;
  isPricingLevel: boolean = false;
  isContractApplied: boolean = false;
  isMeter: boolean = false;
  selectedItems = [];
  ysnAdded: boolean = false;
  customerNumber: string;
  contract = [];
  terms = [];
  counter:boolean = false;
  paramTaxExempCustomerId: any;
  paramTaxExempItem: any;
  paramTaxExempCategoryId: any;
  paramTaxExempTaxCodeId: any;
  paramTaxExempTaxClassId: any;
  paramTaxExempCustomerLocationId: any;
  paramTaxExempSiteId: any;
  intMeterNode = '1';
  originalPrice: number = 0;
  placeholderPaymentInfo = 'Payment Info';

  gps_latitude = '';
  gps_longitude = '';

  langs;
  langForm;
  pdfObj = null;

  totalItem: number = 0;
  totalTax: number = 0;

  tmUpdate = [];
  tmAlerts = {
    strCustomerNumber: '',
    intSiteNumber: '',
    dtmDateDelivery: '',
    dblQuantity: 0,
    dblPrice: 0,
    dblTotal: 0
  };

  meter_preset = 0;
  meter_quantity = 0;
  meter_ending = 0;
  meter_process = 'START PUMPING';
  meter_status = 'Disconnected';
  meterDeviceLoop: any;
  meter_start = 0;
  meter_end = 0;
  meter_totalizer = 0;
  meter_LCR_msg;
  meter_sale_number = 0;
  meter_name: any;
  meter_fail_attempt = 0;
  meter_quantity_status = 'ok';

  meter_header_report: any = {text: '\n'};

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              public actionSheetCtrl: ActionSheetController,
              private popoverCtrl: PopoverController,
              private message: Message,
              private storage: Storage,
              private fileOpener: FileOpener,
              private file: File,
              private router: Router,
              private globalEventsService: GlobalEventsService,
              public modalController: ModalController,
              private menu: MenuController,
              public https: HTTP,
              public http: HttpClient,
              private commonSQL: CommonSQL,
              private LCR: LCR_functions,
              private LCR_BT: LCR_bluetooth,
              private reportService: ReportService,
              private geolocation: Geolocation,
              private datePipe: DatePipe) {
                super(http, https);
    this.setObservables();

    if(!localStorage.getItem('company_logo')) {
      this.commonSQL.getDataQuery('SELECT * FROM tblSMCompanySetup').then(data => {
        console.log(' SM SETUP ', data);
        localStorage.setItem('company_logo',atob(data[0].imgCompanyLogo) || '');
        localStorage.setItem('company_name',data[0].strCompanyName || '');
        localStorage.setItem('company_address',data[0].strAddress || '');
        localStorage.setItem('company_county',data[0].strCounty || '');
        localStorage.setItem('company_city',data[0].strCity || '');
        localStorage.setItem('company_state',data[0].strState || '');
        localStorage.setItem('company_zip',data[0].strZip || '');
        localStorage.setItem('company_country',data[0].strCountry || '');
      },err=>{
        console.log(err);
      });

    }

  }

  //#region SETUP

  async ionViewWillEnter() {
    var me = this;

    console.log('ionViewWillEnter CustomerInvoicePage');
    console.log(me.currentCustomer);
    console.log(me.invoice);
  var _collectCashMessage = await me.alertCtrl.create({
      header: 'Warning',
      message: 'Please collect cash before dispensing.',
      cssClass: 'order-msgbox',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            me.counter = true;
            setTimeout(function(){
              if(me.invoice == null || me.invoice.length < 1) {
                if(me.sites) {
                  if(me.sites.length > 0) {
                    me.openAddSite();
                  }
                  else {
                    me.openAddItem();
                  }
                }
              }
            }, 1500);
          }
        }
      ]
    });
    me.menu.enable(false);

    if(Configuration.stopReload === false || !Configuration.stopReload) {
      me.invoice = Configuration.navParams['invoice'];
      me.sites = Configuration.navParams['sites'];
      me.customer = Configuration.navParams['customer'] || [];
      me.isFromCustomer = Configuration.navParams['isFromCustomer'] || false;
      me.isMeter = Configuration.navParams['isMeter'] || false;
      Configuration.isFromCustomer = me.isFromCustomer;
      Configuration.isMeter = me.isMeter;
      Configuration.Site = me.sites;

      console.log('invoice loaded');
      console.log(me.isFromCustomer);

      if(!Array.isArray(me.invoice) && me.invoice) {
        var _customernumber = me.invoice;
        me.invoice = [];
        me.currentOrder['strCustomerNumber'] = _customernumber;
      }
      else if(me.customer && !me.invoice) {
        me.invoice = [];
        me.currentOrder = me.customer;
      }

      me.getCustomer();
      me.getPaymentMethod();

      me.meter['process'] = 'Start Pumping';
      me.meter['quantity'] = 0;
      me.meter['ending'] = 0;
      me.currentOrder['gridEnabled'] = false;

      me.langForm = new FormGroup({
        "langs": new FormControl({value: 'rust', disabled: false})
      });

      me.userGlobalInfo();
      if (me.customer['dblCreditLimit'] <= 0){
        if(!me.counter){
          _collectCashMessage.present();
        }
      }else{
        setTimeout(function(){
          if(me.invoice == null || me.invoice.length < 1) {
            if(me.sites) {
              if(me.sites.length > 0) {
                me.openAddSite();
              }
              else {
                me.openAddItem();
              }
            }
          }
        }, 1500);
      }


    } else {
      Configuration.stopReload = false;
      me.customer = Configuration.CustomerRecord;
      me.invoice = Configuration.InvoiceRecord;
      me.selectedItems = Configuration.ItemRecord;
      me.globalInfo = Configuration.GlobalInfo;
      me.isFromCustomer = Configuration.isFromCustomer;
      me.sites = Configuration.Site;

      if (me.customer['dblCreditLimit'] <= 0){
        if (!me.counter){
          _collectCashMessage.present();
        }
      }
    }

    if(me.LCR_BT.CURRENT_HAS_CONNECTION == true) {
      if(me.LCR_BT.meter_1_test_status != 'DISCONNECTED') {
        me.meter_status = 'Connected';
      }
      me.meter_name = me.LCR.METER_1_NAME;
    }

    // GET CURRENT LOCATION
    console.log('GPS HERE!!!');
    me.geolocation.getCurrentPosition().then((res) => {
      // res.coords.latitude
      // res.coords.longitude
      console.log('GPS HERE!!! RESULT');
      console.log(res);
      console.log(res.coords);
      me.gps_latitude = res.coords.latitude.toString() || '';
      me.gps_longitude = res.coords.longitude.toString() || '';

     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }

  userGlobalInfo() {
    var me = this;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
      }
      Configuration.GlobalInfo = me.globalInfo;
    });
  }

  async getCustomer() {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data customer...", backdropDismiss: true});
    loader.present();

    var _customernumber = me.currentOrder['strCustomerNo']  || me.currentOrder['strCustomerNumber'];
    if(me.invoice[0]) {
      _customernumber = me.invoice[0].strCustomerNo;
    }
    me.customerNumber = _customernumber;

    me.commonSQL.getDataQuery('SELECT \'Invoice\' as strInvoiceType, tblSMTerm.*, tblARCustomer.*, tblEntityLocation.intTaxGroupId as intTaxGroupId, tblEntityLocation.strTaxGroup as strTaxGroup, ' +
                              ' (select ysnApplySalesTax from tblARCustomer where tblARCustomer.intEntityId = tblARCustomer.intEntityCustomerId LIMIT 1) as ysnApplySalesTax, ' +
                              ' (select ysnApplyPrepaidTax from tblARCustomer where tblARCustomer.intEntityId = tblARCustomer.intEntityCustomerId LIMIT 1) as ysnApplyPrepaidTax, ' +
                              ' (select ysnTaxExempt from tblARCustomer where tblARCustomer.intEntityId = tblARCustomer.intEntityCustomerId LIMIT 1) as ysnTaxExempt FROM tblARCustomer ' +
                              ' left join tblSMTerm on tblARCustomer.intTerm = tblSMTerm.intTermID ' +
                              ' left join tblEntityLocation on tblARCustomer.intEntityCustomerId = tblEntityLocation.intEntityId and tblARCustomer.intShipToId = tblEntityLocation.intEntityLocationId where tblARCustomer.strCustomerNumber = \'' + _customernumber + '\'').then(res => {
      me.customer = JSON.parse(JSON.stringify(res));
      console.log(me.customer);

      if(me.customer.length > 0) {
        me.customer = me.customer[0];
        Configuration.CustomerRecord = me.customer;
      }

      loader.dismiss();
    },err=>{
      console.log(err);
      loader.dismiss();
    });
  }

  async getPaymentMethod() {
    var me = this;

    me.commonSQL.getDataQuery('SELECT * FROM tblSMPaymentMethod WHERE strPaymentMethod IN (\'Cash\',\'Check\')').then(res => {
      me.paymentMethod = JSON.parse(JSON.stringify(res));
      console.log(me.paymentMethod);
      Configuration.PaymentMethodRecord = me.paymentMethod;
    },err=>{
      console.log(err);
    });
  }

  //#endregion

  //#region MAIN PROCESS

  setObservables() {
    var me = this;
    console.log('setObservables');

    // ADD ITEM
    me.globalEventsService.getObservableItem().subscribe((data) => {
      console.log(data);
      debugger;
      if(data && Configuration.globalFlag == false) {
        if(me.invoice.length == 0) {
          var _site = new TMSite();
          _site.dblTankCapacity = 0;
          _site.intDriverId = me.globalInfo.intDriverNumber;
          _site.intOrderId = Math.floor(Math.random() * (999999999 - 1) + 1);
          _site.intOrderItemMobileId = Math.floor(Math.random() * (999999999 - 1) + 1);
          _site.intSiteID = null;
          _site.intSiteNumber = null;
          _site.strSerialNumber = null;
          _site.strSiteDescription = null;
          _site.intTaxStateID = null;
          _site.ysnSelected = false;
          _site.strCustomerNumber = data.strCustomerNumber;
          _site.ysnTaxable = false;
          _site.strItemNo = data.strItemNo;
          _site['tblOrderItem'] = [];

          me.paramTaxExempSiteId = null;
          me.invoice[me.invoice['length'] || 0] = _site;

          me.currentOrder['intOrderId'] = _site.intOrderId;
          me.currentOrder['strCustomerNumber'] = _site.strCustomerNumber;
          me.currentOrder['intSiteId'] = _site.intSiteID || _site['intSiteId'];
          me.currentOrder['intSiteNumber'] = _site.intSiteNumber;
          me.currentOrder['strSiteAddress'] = _site.strSiteAddress;
          me.currentOrder['intTaxStateID'] = _site.intTaxStateID;
          me.currentOrder['ysnTaxable'] = _site.ysnTaxable;
        }

        // var _item = new InvoiceItems();
        // _item.intOrderId = me.currentOrder['intOrderId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
        // _item.strOrderNumber = me.currentOrder['strOrderNumber'] || Math.floor(Math.random() * (999999999 - 1) + 1);
        // _item.intEntityId = me.globalInfo.intUserId;
        // _item.strCustomerNumber = me.currentOrder['strCustomerNumber'];
        // _item.intDriverId = me.globalInfo.intDriverNumber;
        // _item.intSiteId = me.currentOrder['intSiteId'];
        // _item.intSiteNumber = me.currentOrder['intSiteNumber'];
        // _item.strSiteDescription = me.currentOrder['strSiteName'];
        // _item.strSiteAddress = me.currentOrder['strSiteAddress'];
        // _item.intItemId = data.intItemId;
        // _item.strItemNo = data.strItemNo;
        // _item.strItemDescription = data.strDescription;
        // _item.dblPrice = data.dblSalePrice;
        // _item.ysnSelected = false;
        // _item['price'] = data.dblSalePrice;
        // _item['quantity'] = 0;
        // _item['totalamount'] = 0;
        // _item['InvoiceTaxCodes'] = [];
        // _item['tblOrderTaxCode'] = [];

        // ADD SELECTED ITEM TO ORDER
        debugger;
        me.currentOrder['intItemId'] = data.intItemId;
        me.currentOrder['strItemNo'] = data.strItemNo;
        me.currentOrder['strItemDescription'] = data.intItemId;
        me.currentOrder['dblPrice'] = data.dblSalePrice;

        // CHECK PRICING HIERARCHY
        if(me.sites) { // removed applyContract --it usually happens at the beginning
          // if(me.sites.length > 0) {
          //   // Apply Contract
          //   me.applyContract( me.currentOrder);
          // }
          // else {
          //   // Apply Special Pricing
          //   me.applySpecialPricing(me.currentOrder);
          // }

          // Apply Special Pricing --added for provision
          me.applySpecialPricing(me.currentOrder);
        }
        else {
          // Apply Special Pricing
          me.applySpecialPricing(me.currentOrder);
        }

        // if(!me.currentOrder["tblOrderItem"]) {
        //   me.currentOrder["tblOrderItem"] = [];
        //   me.currentOrder["tblOrderItem"].push(_item);
        //   me.invoice[me.invoice['length']-1 || 0]["tblOrderItem"].push(_item);
        // }
        // else {
        //   var _invoiceLenght = me.invoice['length'] || 0;
        //   if(_invoiceLenght > 0) _invoiceLenght = _invoiceLenght - 1;

        //   var _totalItem =  me.invoice[_invoiceLenght]["tblOrderItem"].length;
        //   me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] || 0] = _item;

        //   if((me.invoice[_invoiceLenght]["tblOrderItem"].length) > _totalItem) {
        //     //do thing
        //   }
        //   else {
        //     me.invoice[_invoiceLenght]["tblOrderItem"].push(_item);
        //   }
        // }

        Configuration.globalFlag = true;
        // me.applyTax(_item, false);
      }
    });

    // ADD SITE
    me.globalEventsService.getObservableSite().subscribe((data) => {
      console.log(data);
      console.log(Configuration.globalFlag);

      if(data && Configuration.globalFlag == false) {

        //restore invoice
        me.invoice = Configuration.InvoiceRecord;

        var _site = new TMSite();
        _site.dblTankCapacity = data.dblTankCapacity;
        _site.intDriverId = me.globalInfo.intDriverNumber;
        _site.intOrderId = Math.floor(Math.random() * (999999999 - 1) + 1);
        _site.intOrderItemMobileId = Math.floor(Math.random() * (999999999 - 1) + 1);
        _site.intSiteID = data.intSiteId || data.intSiteID;
        _site['intSiteId'] = data.intSiteId || data.intSiteID;
        _site.intSiteNumber = data.intSiteNumber;
        _site.strSerialNumber = data.strSerialNumber;
        _site.strSiteDescription = data.strDescription;
        _site.strSiteAddress = data.strSiteAddress;
        _site.intTaxStateID = data.intTaxStateID;
        _site.ysnTaxable = data.ysnTaxable;
        _site.intLocationId = data.intLocationId;
        _site.strLocation = data.strLocation;
        _site.ysnSelected = false;
        _site.strCustomerNumber = data.strCustomerNumber;
        _site.strItemNo = data.strItemNo;
        _site['tblOrderItem'] = [];

        me.paramTaxExempSiteId = _site.intSiteID;
        me.invoice[me.invoice['length'] || 0] = _site;
        Configuration.globalFlag = true;
        Configuration.InvoiceRecord = me.invoice; //save global
        me.customer = Configuration.CustomerRecord;

        if(me.isFromCustomer === true){
          me.applyContract(_site);
        }
      }
    });

    // ADD TAX CODE
    me.globalEventsService.getObservableTax().subscribe((data) => {
      console.log(data);
      debugger;
      console.log('add tax code');


      if(data && Configuration.globalFlag == false) {

        //restore selected item
        me.selectedItems = Configuration.ItemRecord;

        var _taxcode = new InvoiceTaxCodes();
        _taxcode.intOrderId = me.currentOrder['intOrderId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
        _taxcode.intInvoiceItemId = me.currentOrder['intOrderItemId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
        _taxcode.intItemId = me.currentOrder['intItemId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
        _taxcode.intTaxCodeId = data.intTaxCodeId;
        _taxcode.strCalculationMethod = data.strCalculationMethod;
        _taxcode.strTaxCode = data.strTaxCode;
        _taxcode.dblRate = data.dblRate || 0;
        _taxcode.ysnSelected = false;
        _taxcode.dblTotalTax = 0;

        if(me.selectedItems.length > 0) {
          console.log(me.selectedItems);
          var _lastItem = me.selectedItems.length-1;

          var _quantity = me.selectedItems[_lastItem].quantity || 0;
          if(me.selectedItems[_lastItem].ysnHavingApplicableTax == false || me.selectedItems[_lastItem].ysnHavingApplicableTax == 'false') {
            _quantity = 0;
          }

          if(_taxcode.ysnTaxExempt != true) {
            if(_taxcode.strCalculationMethod === 'Percentage') {
              _taxcode.dblTotalTax = parseFloat((((_taxcode.dblRate || 0) / 100) * (_quantity || 0)).toFixed(2));
            }
            else {
              _taxcode.dblTotalTax = parseFloat(((_taxcode.dblRate || 0) * (_quantity || 0)).toFixed(2));
            }
          }

          me.selectedItems[_lastItem]["tblOrderTaxCode"].push(_taxcode);
          me.updateMeter(me.selectedItems[_lastItem]);
        }

        Configuration.globalFlag = true;
        Configuration.ItemRecord = me.selectedItems;
      }
    });

    // ADD COMMENT
    me.globalEventsService.getObservableComment().subscribe((data) => {
      console.log(data);

      if(data && Configuration.globalFlag == false) {
        console.log(data);

        this.invoice[0]['strComments'] = data;
        Configuration.globalFlag = true;
      }
    });

    // CUSTOMER
    me.globalEventsService.getObservableCustomer().subscribe((data) => {
      console.log(data);

      if(data && Configuration.globalFlag == false) {
        console.log(data);
        Configuration.globalFlag = true;
      }
    });

    // ADD SIGNATURE
    me.globalEventsService.getObservableSignature().subscribe((data) => {
      console.log(data);

      if(data && Configuration.globalFlag == false) {
        console.log(data);

        this.invoice[0]['strSignature'] = data;
        Configuration.globalFlag = true;
      }
    });

  }

  updateQuantity(id, quantity, itemid, itemno, description) {
    var me = this;
    console.log('++++++ UPDATE QUANTITY PROCESS ++++++');
    console.log(quantity);
    console.log(id);
    console.log(itemid);

    if(itemid) {
      // +++++ TANK WAGON INSERT +++++
      var _tankwagon = [];
      var _line = new Tankwagon();
      _line.intItemId = itemid;
      _line.strItemNo = itemno;
      _line.strDescription = description;
      _line.dblQuantity = quantity * -1;
      _line.strTransactionReference = 'Decreases Inventory of Product';
      _line.strTransactionType = 'Invoice';
      _tankwagon.push(_line);
      me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res=>{console.log('TANKWAGON UPDATED');});
      // +++++ TANK WAGON INSERT +++++
    }

    if(id) {
      me.commonSQL.updateDataQuery("UPDATE tblContractExport SET dblAvailableQty = (dblAvailableQty - " + (quantity || 0) + ") WHERE intContractDetailId = \'" + id + '\'').then(res => console.log('UPDATED CONTRACTS'));
    }
  }

  async applyContract(order) {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Looking for open contract...", backdropDismiss: true});
    loader.present();

    if(!me.customer || me.customer.length == 0) {
      me.customer = Configuration.CustomerRecord;
    }

    me.currentOrder = order;
    me.customerNumber = order['strCustomerNumber'] || me.customer['strCustomerNumber'] || me.currentOrder['strCustomerNo']  || me.currentOrder['strCustomerNumber'] || me.invoice[0].strCustomerNo;
    me.paramTaxExempCustomerId = me.customer['intEntityCustomerId'];

    if(me.isFromCustomer == true) {
      me.customerNumber = me.customer['strCustomerNumber'];
    }

    console.log(me.currentOrder);
    console.log(me.invoice);
    console.log(me.customer);
    console.log(me.paramTaxExempCustomerId);
    console.log("CUSTOMER NUMBER ===> ", me.customerNumber);

    // SELECT tblContractExport.*, (IFNULL(tblContractExport.dblAvailableQty,0) - IFNULL(SUM(invoiceitems.dblQuantity),0)) as dblItemAvailableQty FROM tblContractExport left join invoiceitems on tblContractExport.strEntityNo = invoiceitems.strEntityNo and tblContractExport.intItemId = invoiceitems.intItemId WHERE tblContractExport.strEntityNo =
    me.commonSQL.getDataQuery('SELECT * FROM tblContractExport WHERE strEntityNo = \'' + me.customerNumber + '\'').then(res => {
      me.contract = JSON.parse(JSON.stringify(res));
      console.log('INVOICE CONTRACTS => ', me.contract);

      if(me.contract.length >= 1) { // MBIL-608
        loader.dismiss();
        me.openCustomerContract(order);
      }
      else if(me.contract.length == 1) { // obsolete due to MBIL-608
        loader.dismiss();
        me.applyCustomerContract(me.contract);
      }
      else {
        loader.dismiss();
        me.applySpecialPricing(order);
      }
    },err=>{
      console.log(err);
      loader.dismiss();
    });
  }

  async applyCustomerContract(contracts,price = null) {
    var me = this;

    debugger;

    contracts.forEach(contract => {
      // ITEMS
      var _item = new InvoiceItems();
      _item.intOrderId = me.currentOrder['intOrderId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
      _item.strOrderNumber = me.currentOrder['strOrderNumber'] || Math.floor(Math.random() * (999999999 - 1) + 1);
      _item.intEntityId = me.globalInfo.intUserId;
      _item.strCustomerNumber = me.currentOrder['strCustomerNumber'];
      _item.intDriverId = me.globalInfo.intDriverNumber;
      _item.intSiteId = me.currentOrder['intSiteId'];
      _item.intSiteNumber = me.currentOrder['intSiteNumber'];
      _item.strSiteDescription = me.currentOrder['strSiteName'];
      _item.intTaxStateID = me.currentOrder['intTaxStateID'];
      _item.ysnTaxable = me.currentOrder['ysnTaxable'];
      _item.strSiteAddress = me.currentOrder['strSiteAddress'];
      _item.intItemId = contract['intItemId'];
      _item.strItemNo = contract['strItemNo'];
      _item.strItemDescription = contract['strDescription'];
      _item.dblPrice = price || contract['dblCashPrice'];
      _item['intContractDetailId'] = contract['intContractDetailId'];
      _item['intContractSeq'] = contract['intContractSeq'];
      _item['strContractNumber'] = contract['strContractNumber'];
      _item['dblAvailableQty'] = contract['dblAvailableQty'];
      _item['hasContract'] = true;
      _item.ysnSelected = false;
      _item['price'] = price || contract['dblCashPrice'];
      _item['quantity'] = 0;
      _item['totalamount'] = 0;
      _item['InvoiceTaxCodes'] = [];
      _item['tblOrderTaxCode'] = [];

      if(!me.currentOrder["tblOrderItem"]) {
        me.currentOrder["tblOrderItem"] = [];
        me.currentOrder["tblOrderItem"].push(_item);
      }
      else {
        me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] || 0] = _item;
      }

      me.applyTax(_item, true).then(tax=>{
        console.log(tax);
      },err=>{
        console.log(err);
      });

    });
  }

  async applySpecialPricing(order) {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Looking for pricing...", backdropDismiss: true});
    loader.present();

    if(!me.customer || me.customer.length == 0) {
      me.customer = Configuration.CustomerRecord;
    }

    me.currentOrder = order;
    me.customerNumber = order['strCustomerNumber'] || me.customer['strCustomerNumber'] || me.currentOrder['strCustomerNo']  || me.currentOrder['strCustomerNumber'] || me.invoice[0].strCustomerNo;

    console.log(me.currentOrder);
    console.log(me.invoice);
    console.log(me.customer);

    me.commonSQL.getDataQuery('SELECT * FROM tblCustomerSpecialPricing where strItemNo = \'' + order.strItemNo + '\' and intEntityId = \'' + me.customer['intEntityId'] + '\' and intLocationId = \'' + me.globalInfo.intLocation + '\' LIMIT 1').then(res => {
      me.pricing = JSON.parse(JSON.stringify(res));
      console.log(me.pricing);

      if(me.pricing.length > 0) {
        me.pricing = me.pricing[0];

        loader.dismiss();
        me.applyItemsFromSite(order, me.pricing['dblPrice']);
      }
      else if (me.customer['strLevel'] != null && me.customer['strLevel'] != '') {
        loader.dismiss();
        me.applyMultiLevelPricing(order);
      }
      else {
        loader.dismiss();
        me.applyItemsFromSite(order);
      }
    },err=>{
      console.log(err);
      loader.dismiss();
    });
  }

  async applyMultiLevelPricing(order) {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Looking for multi level pricing...", backdropDismiss: true});
    loader.present();

    if(!me.customer || me.customer.length == 0) {
      me.customer = Configuration.CustomerRecord;
    }

    var _intLocation = me.globalInfo['intLocation'];
    if(me.sites) {
      if(me.sites.length > 0) {
        _intLocation = me.currentOrder['intLocationId'];
      }
    }

    me.currentOrder = order;
    me.customerNumber = order['strCustomerNumber'] || me.customer['strCustomerNumber'] || me.currentOrder['strCustomerNo']  || me.currentOrder['strCustomerNumber'] || me.invoice[0].strCustomerNo;

    me.commonSQL.getDataQuery('SELECT * FROM tblCustomerMultiLevelPricing where dtmEffectiveDate <= date(\'now\') and strPriceLevel = \'' + me.customer['strLevel'] + '\' and strItemNo = \'' + order.strItemNo + '\' and intEntityId = \'' + me.customer['intEntityId'] + '\' and intCompanyLocationPricingLevelId = \'' + _intLocation + '\' LIMIT 1').then(res => {
      me.pricing = JSON.parse(JSON.stringify(res));
      console.log(me.pricing);

      if(me.pricing.length > 0) {
        me.isPricingLevel = true;

        me.commonSQL.getDataQuery('SELECT * FROM tblCustomerMultiLevelPricing where dtmEffectiveDate <= date(\'now\') and dblMin <= \'0\' and dblMax >= \'0\' and strPriceLevel = \'' + me.customer['strLevel'] + '\' and strItemNo = \'' + order.strItemNo + '\' and intEntityId = \'' + me.customer['intEntityId'] + '\' and intCompanyLocationPricingLevelId = \'' + _intLocation + '\' LIMIT 1').then(res => {
          me.pricing = JSON.parse(JSON.stringify(res));
          console.log(me.pricing);

          if(me.pricing.length > 0) {
            me.pricing = me.pricing[0];

            loader.dismiss();
            me.applyItemsFromSite(order, me.pricing['dblUnitPrice']);
          }
          else {
            loader.dismiss();
            me.applyItemsFromSite(order);
          }
        },err=>{
          console.log(err);
          loader.dismiss();
        });

      }
      else {
        loader.dismiss();
        me.applyItemsFromSite(order);
      }
    },err=>{
      console.log(err);
      loader.dismiss();
    });
  }

  async applyPricingTier(item, meter = null) {
    var me = this;
    // let loader = await me.loadingCtrl.create({message: "Looking for multi level pricing...", backdropDismiss: true});
    // loader.present();

    var _intLocation = me.globalInfo['intLocation'];
    if(me.sites) {
      if(me.sites.length > 0) {
        _intLocation = me.currentOrder['intLocationId'];
      }
    }

    if(!me.customer || me.customer.length == 0) {
      me.customer = Configuration.CustomerRecord;
    }

    me.commonSQL.getDataQuery('SELECT * FROM tblCustomerMultiLevelPricing where dtmEffectiveDate <= date(\'now\') and dblMin <= \'' + item['quantity'] + '\' and dblMax >= \'' + item['quantity'] + '\' and strPriceLevel = \'' + me.customer['strLevel'] + '\' and intItemId = \'' + item.intItemId + '\' and intEntityId = \'' + me.customer['intEntityId'] + '\' and intCompanyLocationPricingLevelId = \'' + _intLocation + '\' LIMIT 1').then(res => {
      me.pricing = JSON.parse(JSON.stringify(res));
      console.log(me.pricing);

      if(me.pricing.length > 0) {
        me.pricing = me.pricing[0];
        item.price = me.pricing['dblUnitPrice'];
        item.dblPrice = me.pricing['dblUnitPrice'];
      }
      else {
        item.price = me.originalPrice;
        item.dblPrice = me.originalPrice;
      }

      // loader.dismiss();
      me.processUpdateMeter(item, meter);

    },err=>{
      console.log(err);
      // loader.dismiss();
    });
  }

  async applyItemsFromSite(order, price = null) {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Looking for item...", backdropDismiss: true});
    loader.present();

    if(!me.customer || me.customer.length == 0) {
      me.customer = Configuration.CustomerRecord;
    }

    me.currentOrder = order;
    me.customerNumber = order['strCustomerNumber'] || me.customer['strCustomerNumber'] || me.currentOrder['strCustomerNo']  || me.currentOrder['strCustomerNumber'] || me.invoice[0].strCustomerNo;

    console.log(me.currentOrder);
    console.log(me.invoice);
    console.log(me.customer);

    var _strLocationNumber = me.globalInfo['strLocationNumber'];
    if(me.sites) {
      if(me.sites.length > 0) {
        _strLocationNumber = me.currentOrder['strLocation'] || me.sites[0].strLocation;
      }
    }

    me.commonSQL.getDataQuery('SELECT * FROM tblInventoryItem where strLocationNumber = \'' + _strLocationNumber + '\' and strItemNo = \'' + order.strItemNo + '\' LIMIT 1').then(res => {
      me.item = JSON.parse(JSON.stringify(res));
      console.log(me.item);

      if(me.item.length > 0) {
        me.item = me.item[0];

        // ITEMS
        var _item = new InvoiceItems();
        _item.intOrderId = me.currentOrder['intOrderId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
        _item.strOrderNumber = me.currentOrder['strOrderNumber'] || Math.floor(Math.random() * (999999999 - 1) + 1);
        _item.intEntityId = me.globalInfo.intUserId;
        _item.strCustomerNumber = me.currentOrder['strCustomerNumber'];
        _item.intDriverId = me.globalInfo.intDriverNumber;
        _item.intSiteId = me.currentOrder['intSiteID'] || me.currentOrder['intSiteId'];
        _item.intSiteNumber = me.currentOrder['intSiteNumber'];
        _item.strSiteDescription = me.currentOrder['strSiteName'];
        _item.strSiteAddress = me.currentOrder['strSiteAddress'];
        _item.intTaxStateID = me.currentOrder['intTaxStateID'];
        _item.ysnTaxable = me.currentOrder['ysnTaxable'];
        _item.intItemId = me.item['intItemId'];
        _item.strItemNo = me.item['strItemNo'];
        _item.strItemDescription = me.item['strDescription'];
        _item.dblPrice = price || me.item['dblSalePrice'];
        _item.ysnSelected = false;
        _item['price'] = price || me.item['dblSalePrice'];
        _item['quantity'] = 0;
        _item['totalamount'] = 0;
        _item['InvoiceTaxCodes'] = [];
        _item['tblOrderTaxCode'] = [];

        me.originalPrice = me.item['dblSalePrice']; //keep the original incase the tier pricing did not match

        if(me.currentOrder['createdLine'] == true) {
          me.invoice[0]["tblOrderItem"].push(_item);
        }
        else if(!me.currentOrder["tblOrderItem"]) {
          me.currentOrder["tblOrderItem"] = [];
          me.currentOrder["tblOrderItem"].push(_item);
        }
        else if(me.currentOrder["tblOrderItem"].length == 0) {
          //me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] || 0] = _item;
          me.currentOrder["tblOrderItem"][0] = _item;
        }
        else {
          // me.currentOrder["tblOrderItem"] = [];
          // me.currentOrder["tblOrderItem"].push(_item);
          // me.invoice[me.invoice['length'] || 0] = me.currentOrder;
          me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] || 0] = _item;
        }

        if(me.invoice[me.invoice['length']-1 || 0]["tblOrderItem"].length == 0) { // ADD IF ORDER ITEM TABLE IS EMPTY
          me.invoice[me.invoice['length']-1 || 0]["tblOrderItem"].push(_item);
        }

        loader.dismiss();
        if(me.customer['ysnTaxExempt'] != 'true' && me.customer['ysnTaxExempt'] != true) {
          me.applyTax(_item, false).then(tax=>{
            console.log(tax);
          },err=>{
            console.log(err);
          });
        }

      }

      loader.dismiss();
    },err=>{
      console.log(err);
      loader.dismiss();
    });
  }

  async applyTax(item, withContract) {
    var me = this;
    var _item = item;

    let loader = await me.loadingCtrl.create({message: "Applying tax...", backdropDismiss: true});
    loader.present();

    // TAXES
    me.commonSQL.getDataQuery('SELECT * FROM tblInventoryItem where intItemId = \'' + _item.intItemId + '\' LIMIT 1').then(items => {
      var _items = items; //JSON.parse(JSON.stringify(item));
      console.log('ITEM => ' + _items);

      me.paramTaxExempItem = _item.intItemId;
      me.paramTaxExempCategoryId = _items[0].intCategoryId;

      //get category
      me.commonSQL.getDataQuery('SELECT * FROM tblCategoryTax where intCategoryId = \'' + _items[0].intCategoryId + '\'').then(async category => {
        var _category = category; //JSON.parse(JSON.stringify(category));
        console.log('CATEGORY => ' + _category);

        var _categories = '0';
        for(var x = 0; x <= _category.length -1; x++) {
          _categories = _categories + "','" + _category[x].intTaxClassId;
        }
        _categories = "'" + _categories + "'";

        console.log(me.customer);

        // TAX LOGIC
        var _intTaxGroupId = 0;
        var _fulltaxScript = '';
        let siteTax;
       var _query = `select *, ysnTaxable as ysnSiteTaxable, (select GROUP_CONCAT(strSerialNumber,'/') as strSerialNumber
                from tblTMSiteDevice where tblTMSiteDevice.intSiteId = tblTMSite.intSiteId and (tblTMSiteDevice.strSerialNumber IS NOT NULL AND tblTMSiteDevice.strSerialNumber <> '')) as strSerialNumber
                from tblTMSite
                where intSiteId = '${me.currentOrder['intSiteId']}'`;
        if (me.currentOrder["ysnTaxable"] == undefined){
          var result = await me.commonSQL.getDataQuery(_query).then(res=> {
            debugger;
            me.currentOrder["ysnTaxable"] = res[0]['ysnSiteTaxable'];
            me.currentOrder["intTaxStateID"] = res[0]['intTaxStateID'];
          })
        }
          // _intTaxGroupId = me.customer['intTaxGroupId'];
          if(me.currentOrder["ysnTaxable"] == true || me.currentOrder["ysnTaxable"] == 'true') {
            _intTaxGroupId = me.currentOrder["intTaxStateID"];
            _fulltaxScript = 'SELECT * FROM tblFullTax where intTaxClassId IN (' + _categories + ') and intTaxGroupId = \'' + _intTaxGroupId + '\'';
          }
          else {
            _intTaxGroupId = me.customer['intTaxGroupId'];
            _fulltaxScript = 'SELECT * FROM tblFullTax where intTaxClassId IN (' + _categories + ')  and intTaxGroupId = \'' + _intTaxGroupId + '\'';

            if(me.customer['ysnApplySalesTax'] != 'true' && me.customer['ysnApplySalesTax'] != true) {
            _fulltaxScript = _fulltaxScript + ' and strType NOT LIKE \'' + '%Sales Tax%' + '\'';
            }
            if(me.customer['ysnApplyPrepaidTax'] != 'true' || me.customer['ysnApplyPrepaidTax'] != true) {
            _fulltaxScript = _fulltaxScript + ' and strType NOT LIKE \'' + '%Prepaid Sales Tax%' + '\'';
            }
            if(me.customer['ysnSiteTaxable'] != 'true' || me.customer['ysnSiteTaxable'] != true) {
            _fulltaxScript = _fulltaxScript + ' and strType NOT LIKE \'' + '%Sales Tax%' + '\'';
            }
          }

          //get tax
          me.commonSQL.getDataQuery(_fulltaxScript).then(tax => {
            var _tax = tax; //JSON.parse(JSON.stringify(tax));
            console.log('TAX => ' + _tax);
            debugger;
            if(_tax.length > 0) {
            me.applyTaxExempt(_tax).then(res => {
              console.log('FINAL TAX');
              console.log(res);
              var _tax = res;
              for(var x = 0; x <= _tax['length'] - 1; x++){
              var _taxcode = new InvoiceTaxCodes();
              _taxcode.intOrderId = me.currentOrder['intOrderId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
              _taxcode.intInvoiceItemId = me.currentOrder['intOrderItemId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
              _taxcode.intItemId = me.currentOrder['intItemId'] || Math.floor(Math.random() * (999999999 - 1) + 1);
              _taxcode.intTaxCodeId = _tax[x].intTaxCodeId;
              _taxcode.strCalculationMethod = _tax[x].strCalculationMethod;
              _taxcode.strTaxCode = _tax[x].strTaxCode;
              _taxcode.dblRate = _tax[x].dblRate || 0;
              _taxcode.ysnSelected = false;
              _taxcode.strTaxableByOtherTaxes = _tax[x].strTaxableByOtherTaxes;

              if(me.currentOrder['createdLine'] == true) {
                if(!me.invoice[0]["tblOrderItem"][me.invoice[0]["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"]) {
                  me.invoice[0]["tblOrderItem"][me.invoice[0]["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"] = [];
                  me.invoice[0]["tblOrderItem"][me.invoice[0]["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"].push(_taxcode);
                }
                else {
                  me.invoice[0]["tblOrderItem"][me.invoice[0]["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"].push(_taxcode);
                }
              }
              else {
                if(!me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"]) {
                  me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"] = [];
                  me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"].push(_taxcode);
                }
                else {
                  me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] - 1 || 0]["tblOrderTaxCode"].push(_taxcode);
                }
              }

              
              }
            });
            }

            if(withContract === true) {
            me.message.showAlertInfoMessage('Customer contract applied!');
            }

          });


        loader.dismiss();
      },err=>{
        console.log(err);
        loader.dismiss();
      });

      loader.dismiss();
    },err=>{
      console.log(err);
      loader.dismiss();
    });
  }

  async applyTaxExempt(data) {
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Applying tax...", backdropDismiss: true});
    loader.present();

    return new Promise ((resolve, reject) => {
      var _appliedTax = data;
      var _ctr = 0;

      // CUSTOMER TAXES
      for(var x = 0; x <= data.length -1; x++) {
        var _customerTax = 'SELECT \'' + data[x].intFulltaxId + '\' as intFulltaxId, * FROM tblCustomerTaxExemption where ' +
                            '(intEntityCustomerId = \'' + me.paramTaxExempCustomerId + '\' or intEntityCustomerId IS NULL) ' +
                            'and (intItemId = \'' + me.paramTaxExempItem + '\' or intItemId IS NULL) ' +
                            'and (intCategoryId = \'' + me.paramTaxExempCategoryId + '\' or intCategoryId IS NULL) ' +
                            'and (intTaxCodeId = \'' + data[x].intTaxCodeId + '\' or intTaxCodeId IS NULL) ' +
                            'and (intTaxClassId = \'' + data[x].intTaxClassId + '\' or intTaxClassId IS NULL) ' +
                            'and (intEntityCustomerLocationId = \'' + me.paramTaxExempCustomerLocationId + '\' or intEntityCustomerLocationId IS NULL) ' +
                            'and (intSiteNumber = \'' + me.paramTaxExempSiteId + '\' or intSiteNumber IS NULL)';

        me.commonSQL.getDataQuery(_customerTax).then(cusTax => {
          var _tax = cusTax;
          console.log('CUSTOMER TAX => ' + JSON.stringify(_tax));

          if(_tax.length > 0) {
            console.log(_tax);
            console.log('with customer tax exempt');

            _appliedTax = _appliedTax.filter(function( obj ) {
              for(var y = 0; y <= _tax.length -1; y++) {
                return obj.intFulltaxId !== _tax[y].intFulltaxId;
              }

              // for(var y = 0; y <= _tax.length -1; y++) {
                // if(obj.intTaxCodeId != null && obj.intSiteNumber == null && obj.intTaxClassId == null && obj.intCategoryId == null && obj.intItemId == null && obj.intEntityCustomerLocationId == null) {
                //   return obj.intTaxCodeId !== _tax[y].intTaxCodeId || 0;
                // }
                // if(obj.intTaxClassId != null && obj.intTaxCodeId == null) {
                //   return obj.intTaxClassId !== _tax[y].intTaxClassId || 0;
                // }
                // if(obj.intCategoryId != null && obj.intTaxCodeId == null && obj.intTaxClassId == null) {
                //   return obj.intCategoryId !== _tax[y].intCategoryId || 0;
                // }
                // if(obj.intItemId != null && obj.intTaxCodeId == null && obj.intTaxClassId == null && obj.intCategoryId == null) {
                //   return obj.intItemId !== _tax[y].intItemId || 0;
                // }
                // if(obj.intEntityCustomerLocationId != null && obj.intTaxCodeId == null && obj.intTaxClassId == null && obj.intCategoryId == null && obj.intItemId == null) {
                //   return obj.intEntityCustomerLocationId !== _tax[y].intEntityCustomerLocationId || 0;
                // }
                // if(obj.intSiteNumber != null && obj.intTaxCodeId == null && obj.intTaxClassId == null && obj.intCategoryId == null && obj.intItemId == null && obj.intEntityCustomerLocationId == null) {
                //   return obj.intSiteNumber !== _tax[y].intSiteNumber || 0;
                // }
              // }

            });

            console.log(_appliedTax);
            _ctr = _ctr + 1;

            if(_ctr >= data.length) {
              loader.dismiss();
              resolve(_appliedTax);
            }

          }
          else {
            console.log('no customer tax exempt => check category');

            var _categoryTax = 'SELECT \'' + data[_ctr].intFulltaxId + '\' as intFulltaxId, * FROM tblCategoryTaxExemption where intCategoryId = \'' + me.paramTaxExempCategoryId + '\'';
            me.commonSQL.getDataQuery(_categoryTax).then(catTax => {
              var _tax = catTax;
              console.log('CATEGORY TAX => ' + JSON.stringify(_tax));

              if(_tax.length > 0) {
                console.log(_tax);
                console.log('with category tax exempt');

                _appliedTax = _appliedTax.filter(function( obj ) {
                  for(var y = 0; y <= _tax.length -1; y++) {
                    return obj.intFulltaxId !== _tax[y].intFulltaxId;
                  }
                });

                console.log(_appliedTax);
              }
              else {
                console.log('no category tax exempt');
              }

              _ctr = _ctr + 1;
              if(_ctr >= data.length) {
                loader.dismiss();
                resolve(_appliedTax);
              }
            });

          }

        },err=>{
          console.log(err);
          loader.dismiss();
          resolve(err);
        });
      }
    });
  }

  //#endregion

  //#region FUNCTIONS

  selectOrderStyle(order) {
    var me = this;
    var _rows = Array.from(document.getElementsByName('order_items'));
    _rows.forEach(element => {
      element.setAttribute("style", "border-style: none;");
    });

    if(document.getElementById('invoice_order_div_'+order.intOrderItemMobileId)) {
      document.getElementById('invoice_order_div_'+order.intOrderItemMobileId).setAttribute("style", "border-style: dashed; border-color:#118bd8; border-width: 3px; border-radius: 4px;");
    }

    if(order.tblOrderItem) {
      me.meter['quantity'] = order.tblOrderItem.quantity;
      me.meter['ending'] = order.tblOrderItem.ending;
    }

    me.currentOrder = order;
    me.currentOrder['gridEnabled'] = false;
    console.log(me.currentOrder);
    setTimeout(function(){
      for(var x = 0; x <= me.invoice.length -1; x++) {
        if(me.invoice[x].intOrderItemMobileId != order.intOrderItemMobileId) {
          me.invoice[x].ysnSelected = false;
          for(var y = 0; y <= me.invoice[x]['tblOrderItem'].length -1; y++) {
            me.invoice[x]['tblOrderItem'][y].ysnSelected = false;
            for(var z = 0; z <= me.invoice[x]['tblOrderItem'][y]['tblOrderTaxCode'].length -1; z++) {
              me.invoice[x]['tblOrderItem'][y]['tblOrderTaxCode'][z].ysnSelected = false;
            }
          }
        }
      }

      // me.currentOrder['ysnSelected'] = true;
      me.previousOrder = me.currentOrder;

    }, 100);

  }

  updateMeter(item, meter = null) {
    var me = this;
    item.dblPrice = item.price;

    if(me.isPricingLevel == true) {
      me.applyPricingTier(item, meter);
    }
    else {
      me.processUpdateMeter(item, meter);
    }
  }

  processUpdateMeter(item, meter = null) {
    var me = this;
    item.dblPrice = item.price;

    if(meter) {
      item.quantity = meter;
    }
    if(item.hasContract == true) {
      if(item.quantity > item.dblAvailableQty && item["createdLine"] != true) {
        // Add Message to add new line
        item["createdLine"] = true;
        me.message.showAlertInfoMessage('Quantity exceeded available quantity (' + item.dblAvailableQty + ') in customer contract! A new line item is added.').then(()=>{
          // call new function
          me.addNewLine(item);
        });        
        item.quantity = item.dblAvailableQty;        
        return;
      }
      else if(item.quantity > item.dblAvailableQty && item["createdLine"] == true) {
        item.quantity = item.dblAvailableQty;
      }
    }
    me.meter['quantity'] = item.quantity;
    me.meter['ending'] = item.ending;
    me.meter['dblMeterTotalizer'] = me.meter_totalizer;
    me.invoice[0]['dblTotal'] = ((item.price * item.quantity) || 0).toFixed(2);
    item['totalamount'] = ((item.price || 0) * (item.quantity || 0));
    item['itemgrandtotal'] = item['totalamount'];
    item['itemtotaltax'] = 0;
    item['dblMeterTotalizer'] = me.meter_totalizer;
    me.grandTotal = 0;

    // NORMAL TAX CALCULATION
    var _totalTax = 0;
    if(item['tblOrderTaxCode']) {
      for(var x = 0; x <= item['tblOrderTaxCode'].length - 1; x++) {
        var record = item['tblOrderTaxCode'][x];
        var _totalamount = item.totalamount;

        if(item.ysnHavingApplicableTax == false || item.ysnHavingApplicableTax == 'false') {
          _totalamount = 0;
        }

        // if(record.ysnTaxExempt == 'false' || record.ysnTaxExempt == false) {
          if(record.strCalculationMethod === 'Percentage') {
            record.dblTotalTax = (((record.dblRate || 0) / 100) * (_totalamount || 0)).toFixed(2);
          }
          else {
            record.dblTotalTax = ((record.dblRate || 0) * ( item.quantity || 0)).toFixed(2);
          }
        // }

        _totalTax = _totalTax + parseFloat(record.dblTotalTax || 0);

        console.log(record);
      }
    }

    item['itemtotaltax'] = _totalTax;


    // TAX ON TAX CALCULATION
    var _mainTaxOnTax = [];
    var _subTaxOnTax = [];
    if(item['tblOrderTaxCode']) {
      for(var x = 0; x <= item['tblOrderTaxCode'].length - 1; x++) {
        var record = item['tblOrderTaxCode'][x];
        var _totalamount = item.totalamount;
        if(record.strTaxableByOtherTaxes != '') {
          record.strTaxableByOtherTaxes = '0,' + record.strTaxableByOtherTaxes + ',0';
          _subTaxOnTax.push(record);
          var _taxontax = record.strTaxableByOtherTaxes.split(',');
          for(var z = 0; z <= item['tblOrderTaxCode'].length - 1; z++) {
            var _taxLoop = item['tblOrderTaxCode'][z];
            for(var y = 0; y <= _taxontax.length - 1; y++) {
              if(_taxLoop.intTaxCodeId == _taxontax[y]) {
                _mainTaxOnTax.push(_taxLoop);
              }
            }
          }
        }
      }
      console.log(_mainTaxOnTax);

      if(_mainTaxOnTax.length > 0) {
        for(var x = 0; x <= _mainTaxOnTax.length - 1; x++) {
          var _TotalTaxonTax = 0.00;
          for(var y = 0; y <= _subTaxOnTax.length - 1; y++) {
            if(_subTaxOnTax[y].strTaxableByOtherTaxes.indexOf(','+_mainTaxOnTax[x].intTaxCodeId+',') != -1) {
              _TotalTaxonTax = _TotalTaxonTax + parseFloat(_subTaxOnTax[y]['dblTotalTax']);
            }
          }
          var _PriceAndQuantity = item.price * item.quantity;
          var _TotalPricAndQuantity = _PriceAndQuantity + _TotalTaxonTax;
          if(_mainTaxOnTax[x]['strCalculationMethod'] === 'Percentage') {
            _mainTaxOnTax[x]['dblTotalTax'] =  parseFloat((parseFloat(_TotalPricAndQuantity.toString()) * ((_mainTaxOnTax[x]['dblRate'] || 0) / 100)).toFixed(2));
          }
          else {
            _mainTaxOnTax[x]['dblTotalTax'] = parseFloat((parseFloat(_TotalPricAndQuantity.toString()) * (_mainTaxOnTax[x]['dblRate'] || 0)).toFixed(2));
          }

          for(var z = 0; z <= item['tblOrderTaxCode'].length - 1; z++) {
            if(item['tblOrderTaxCode'][z].intTaxCodeId === _mainTaxOnTax[x].intTaxCodeId) {
              item['tblOrderTaxCode'][z].dblTotalTax = parseFloat(_mainTaxOnTax[x]['dblTotalTax']);
            }
            else{
              item['tblOrderTaxCode'][z].dblTotalTax = parseFloat(item['tblOrderTaxCode'][z].dblTotalTax);
            }
          }
        }

        _totalTax = 0.00;
        for(var z = 0; z <= item['tblOrderTaxCode'].length - 1; z++) {
          var record = item['tblOrderTaxCode'][z];
          _totalTax = _totalTax + parseFloat(record.dblTotalTax || 0);
        }

        item['itemtotaltax'] = _totalTax;
      }
    }

    for(var x = 0; x <= me.invoice['length'] - 1; x++) {
      var _record = me.invoice[x];

      if(_record['tblOrderItem']) {
        for(var y = 0; y <= _record['tblOrderItem']['length'] - 1; y++) {
          var _item = _record['tblOrderItem'][y];
          _item['itemgrandtotal'] = (_item['totalamount'] || 0) + (_item['itemtotaltax'] || 0);
          me.grandTotal =  (me.grandTotal || 0) + (_item['itemgrandtotal'] || 0);
        }
      }
    }

    console.log(item);
  }

  recalcInvoice() {
    var me = this;
    me.grandTotal = 0;
    for(var x = 0; x <= me.invoice['length'] - 1; x++) {
      var _record = me.invoice[x];

      if(_record['tblOrderItem']) {
        for(var y = 0; y <= _record['tblOrderItem']['length'] - 1; y++) {
          var _item = _record['tblOrderItem'][y];
          _item['itemgrandtotal'] = (_item['totalamount'] || 0) + (_item['itemtotaltax'] || 0);
          me.grandTotal =  (me.grandTotal || 0) + (_item['itemgrandtotal'] || 0);
        }
      }
    }
  }

  selectMeter() {
    var me = this;
    console.log(me.intMeterNode);
    if(me.intMeterNode == '1') {
      me.meter_name = me.LCR.METER_1_NAME;
      me.meter_quantity = 0;
      me.meter_preset = 0;
      me.meter_totalizer = 0;
      me.meter_process = 'START PUMPING';
      if(me.LCR_BT.CURRENT_HAS_CONNECTION == true) {
        if(me.LCR_BT.meter_1_test_status != 'DISCONNECTED') {
          me.meter_status = 'Connected';
        } else {
          me.meter_status = 'Disconnected';
        }
      }
    }
    else {
      me.meter_name = me.LCR.METER_2_NAME;
      me.meter_quantity = 0;
      me.meter_preset = 0;
      me.meter_totalizer = 0;
      me.meter_process = 'START PUMPING';
      if(me.LCR_BT.CURRENT_HAS_CONNECTION == true) {
        if(me.LCR_BT.meter_2_test_status != 'DISCONNECTED') {
          me.meter_status = 'Connected';
        } else {
          me.meter_status = 'Disconnected';
        }
      }
    }
    clearInterval(me.meterDeviceLoop);
    me.connect_LCR();
  }

  selectPaymentMethod() {
    var me = this;
    var _method = me.paymentMethod.find(x=>x.intPaymentMethodId==me.customer['intPaymentMethodId']);
    if('Check' == _method.strPaymentMethod) {
      me.placeholderPaymentInfo = 'Check Number';
    }
    else{
      me.placeholderPaymentInfo = 'Payment Info';
    }
  }

  addNewLine(item) {
    var me = this;

    var _item = new InvoiceItems();
      _item.intOrderId = item.intOrderId;
      _item.strOrderNumber = item.strOrderNumber;
      _item.intEntityId = item.intEntityId;
      _item.strCustomerNumber = item.strCustomerNumber;
      _item.intDriverId = item.intDriverId;
      _item.intSiteId = item.intSiteId;
      _item.intSiteNumber = item.intSiteNumber;
      _item.strSiteDescription = item.strSiteDescription;
      _item.intTaxStateID = item.intTaxStateID;
      _item.ysnTaxable = item.ysnTaxable;
      _item.strSiteAddress = item.strSiteAddress;
      _item.intItemId = item.intItemId;
      _item.strItemNo = item.strItemNo;
      _item.strItemDescription = item.strItemDescription;
      _item.dblPrice = item.dblPrice;
      _item['intContractDetailId'] = null;
      _item['intContractSeq'] = null;
      _item['strContractNumber'] = null;
      _item['dblAvailableQty'] = 0;
      _item['hasContract'] = false;
      _item.ysnSelected = item.ysnSelected;
      _item['price'] = 0;
      _item['quantity'] = 0;
      _item['totalamount'] = 0;
      _item['createdLine'] = true;

      // if(!me.currentOrder["tblOrderItem"]) {
      //   me.currentOrder["tblOrderItem"] = [];
      //   me.currentOrder["tblOrderItem"].push(_item);
      // }
      // else {
      //   me.currentOrder["tblOrderItem"][me.currentOrder["tblOrderItem"]['length'] || 0] = _item;
      // }

      console.log(_item);
      me.applySpecialPricing(_item);

  }

  //#endregion

  //#region LCR COMMANDS

  async startPumping() {
    var me = this;

    if(me.meter_status != 'Connected') {
      let confirm = await me.alertCtrl.create({
        message: 'Please connect to Meter device',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      confirm.present();
      return true;
    }

    if(me.meter_preset <= 0) {
      let confirm = await me.alertCtrl.create({
        message: 'Please enter a preset value',
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
    else {
      if(me.meter_process == 'START PUMPING'){
        me.startPump();
      }
      else{
        me.LCR.StopPump(null).then((data)=>{
          me.LCR_BT.sendToDevice(data).then(()=> {
            me.meter_process = 'START PUMPING';
            clearInterval(me.meterDeviceLoop);
            me.meter_totalizer = 0;
            me.setTotalizer(me.intMeterNode).then(()=> {
              me.pumpClearStage();
            });
          });
        })
      }

    }
  }

  async startPump() {
    var me = this;

    // SELECTED ITEM IS REQUIRED
    var _withSelected = false;
    for(var x = 0; x <= me.currentOrder['tblOrderItem'].length -1; x++) {
      if(me.currentOrder['tblOrderItem'][x].ysnSelected == true) {
        _withSelected = true;
      }
    }

    if(_withSelected == false) {
      let confirm = await me.alertCtrl.create({
        message: 'Please select item to pump.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      confirm.present();
      return false;
    }

    var _presetType = 'Gross';
    if(me.intMeterNode == '1') {
      if(me.LCR_BT.meter_1_test_preset_type.indexOf('Gross') == -1) {
        _presetType = 'Net'
      }
    }
    else {
      if(me.LCR_BT.meter_2_test_preset_type.indexOf('Net') == -1) {
        _presetType = 'Gross'
      }
    }

    me.meter_process = 'PLEASE WAIT..';
    me.getTotalizer(_presetType).then(()=>{
      me.getStartMeterData(_presetType).then(()=>{
        if(_presetType == 'Gross') {
          me.LCR.BuildGrossPreset(me.meter_preset).then((data)=>{
            console.log('BuildPreset');
            console.log(data);
            me.LCR_BT.sendToDevice(data).then((data)=> {
              console.log('sendToDevice');
              console.log(data);
              me.LCR.StartPump(null).then((data)=>{
                console.log('StartPump');
                console.log(data);
                me.LCR_BT.sendToDevice(data).then(()=> {
                  me.meter_process = 'STOP';
                  me.meter_end = me.meter_quantity;
                  me.getMeterData();
                });
              });
            }, (data)=> {
              console.log('FAILED: sendToDevice');
              console.log(data);
            });
          });
        }
        else {
          me.LCR.BuildNetPreset(me.meter_preset).then((data)=>{
            console.log('BuildPreset');
            console.log(data);
            me.LCR_BT.sendToDevice(data).then((data)=> {
              console.log('sendToDevice');
              console.log(data);
              me.LCR.StartPump(null).then((data)=>{
                console.log('StartPump');
                console.log(data);
                me.LCR_BT.sendToDevice(data).then(()=> {
                  me.meter_process = 'STOP';
                  me.meter_end = me.meter_quantity;
                  me.getMeterData();
                });
              });
            }, (data)=> {
              console.log('FAILED: sendToDevice');
              console.log(data);
            });
          });
        }
      });
    });
  }

  connect_LCR() {
    var me = this,
        address = '';

    if(me.intMeterNode == '1') {
      address = me.LCR.METER_1_ADDRESS;
    }
    else {
      address = me.LCR.METER_2_ADDRESS;
    }

    if(!address) {
      me.message.showAlertInfoMessage('No meter device assign!');
    }
    else {
      me.LCR_BT.connectDevice(address).then((data)=> {
        console.log(data);
        me.LCR_BT.getPaired().then(()=>{
          me.processPresetType(me.intMeterNode).then(()=>{
            me.meter_status = 'Connected';
            me.meter_process = 'START PUMPING';

            if(me.intMeterNode == '1') {
              me.LCR_BT.meter_1_test_status = 'Connected';
              me.LCR_BT.meter_2_test_status = 'DISCONNECTED';
            }
            else {
              me.LCR_BT.meter_2_test_status = 'Connected';
              me.LCR_BT.meter_1_test_status = 'DISCONNECTED';
            }
          });
        });
      });
    }
  }

  getMeterData() {
    var me = this;
    me.meterDeviceLoop = setInterval(() => {
      console.log(me.meter_LCR_msg);
      me.LCR_BT.sendToDevice(me.meter_LCR_msg).then((res) => {
        console.log('after sendToDevice');
        console.log(res);

        if(res.length < 12) {
          me.meter_fail_attempt++;
          if(me.meter_fail_attempt >= 5) {
            console.log('FAIL LIMIT RETRY NOW!');
            me.meter_fail_attempt = 0;
            clearInterval(me.meterDeviceLoop);
            me.startPump();
          }
        }
        else {
          me.meter_fail_attempt = 0;
        }

        var sourceByte = res;
        var sourceHexString = me.LCR.byteToHexString(sourceByte);
        console.log(sourceHexString);
        var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
        console.log(sourceString);

        var sourceFinalOutput = parseInt(sourceString,16) / 10;
        if(sourceFinalOutput) {
          if(sourceFinalOutput > (me.meter_preset + 500)) {
            console.log('Invalid Meter Amount: ' + sourceFinalOutput);

            me.meter_quantity_status = 'invalid';

            // me.meter_quantity = me.meter_quantity + 0.1;
            // me.meter_quantity = parseFloat(parseFloat(me.meter_quantity.toString()).toFixed(2));
            // if(me.currentOrder) {
            //   if(me.currentOrder['tblOrderItem']) {
            //     if(me.currentOrder['tblOrderItem'].length > 1) {
            //       var _withSelected = false;
            //       for(var x = 0; x <= me.currentOrder['tblOrderItem'].length -1; x++) {
            //         if(me.currentOrder['tblOrderItem'][x].ysnSelected == true) {
            //           me.currentOrder['tblOrderItem'][x].quantity = me.meter_quantity;
            //           _withSelected = true;
            //         }
            //       }
            //       if(_withSelected == false){
            //         me.currentOrder['tblOrderItem'][0].quantity = me.meter_quantity;
            //       }
            //     }
            //     else {
            //       me.currentOrder['tblOrderItem'][0].quantity = me.meter_quantity;
            //     }
            //   }
            //   else {
            //     me.currentOrder = me.invoice[0];
            //     me.currentOrder['tblOrderItem'][0].quantity = me.meter_quantity;
            //   }
            // }
            // me.updateMeter(me.currentOrder, me.meter_quantity);

          }
          else {
            me.meter_quantity = sourceFinalOutput || 0;
            me.meter_quantity_status = 'ok';
            if(me.currentOrder) {
              if(me.currentOrder['tblOrderItem']) {
                if(me.currentOrder['tblOrderItem'].length > 1) {
                  var _withSelected = false;
                  for(var x = 0; x <= me.currentOrder['tblOrderItem'].length -1; x++) {
                    if(me.currentOrder['tblOrderItem'][x].ysnSelected == true) {
                      me.currentOrder['tblOrderItem'][x].quantity = me.meter_quantity;
                      _withSelected = true;
                    }
                  }
                  if(_withSelected == false){
                    me.currentOrder['tblOrderItem'][0].quantity = me.meter_quantity;
                  }
                }
                else {
                  me.currentOrder['tblOrderItem'][0].quantity = me.meter_quantity;
                }
              }
              else {
                me.currentOrder = me.invoice[0];
                me.currentOrder['tblOrderItem'][0].quantity = me.meter_quantity;
              }
            }
            me.updateMeter(me.currentOrder, me.meter_quantity);
            console.log('Meter Amount: ' + sourceFinalOutput);

            if(me.meter_quantity == me.meter_preset) {
              me.meter_process = 'FINISHED';
              me.meter_end = me.meter_quantity;

              me.setTotalizer(me.intMeterNode).then(()=> {
                me.pumpClearStage().then((data)=> {
                  me.printStage();
                });
                clearInterval(me.meterDeviceLoop);
              });
            }
          }
        }

      }
    )},250);
  }

  getTotalizer(presetType): Promise<any> {
    var me = this;

    return new Promise((resolve, reject) => {
      if(presetType == 'Gross') {
        me.LCR.GrossTotalizer().then((data)=> {
          console.log(data);
          me.LCR_BT.sendToDevice(data).then((res) => {
            console.log(res);
            var sourceByte = res;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            console.log('Gross Totalizer Meter: ' + sourceFinalOutput);

            if(sourceFinalOutput == NaN || !sourceFinalOutput) {
              console.log('RETRY');
              me.LCR_BT.sendToDevice(data).then((res) => {
                console.log(res);
                var sourceByte = res;
                var sourceHexString = me.LCR.byteToHexString(sourceByte);
                console.log(sourceHexString);
                var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
                console.log(sourceString);
                var sourceFinalOutput = parseInt(sourceString,16) / 10;
                console.log('Gross Totalizer Meter: ' + sourceFinalOutput);

                if(sourceFinalOutput) {
                  me.meter_totalizer = sourceFinalOutput;
                }

                resolve(sourceFinalOutput);
              });
            }
            else {
              me.meter_totalizer = sourceFinalOutput;
              resolve(sourceFinalOutput);
            }
          }, (data) => {
            console.log('RETRY');
            me.LCR_BT.sendToDevice(data).then((res) => {
              console.log(res);
              var sourceByte = res;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              console.log('Gross Totalizer Meter: ' + sourceFinalOutput);

              if(sourceFinalOutput) {
                me.meter_totalizer = sourceFinalOutput;
              }

              resolve(sourceFinalOutput);
            });
          });
        });
      }
      else {
        me.LCR.NetTotalizer().then((data)=> {
          console.log(data);
          me.LCR_BT.sendToDevice(data).then((res) => {
            console.log(res);
            var sourceByte = res;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            console.log('Net Totalizer Meter: ' + sourceFinalOutput);

            if(sourceFinalOutput == NaN || !sourceFinalOutput) {
              console.log('RETRY');
              me.LCR_BT.sendToDevice(data).then((res) => {
                console.log(res);
                var sourceByte = res;
                var sourceHexString = me.LCR.byteToHexString(sourceByte);
                console.log(sourceHexString);
                var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
                console.log(sourceString);
                var sourceFinalOutput = parseInt(sourceString,16) / 10;
                console.log('Net Totalizer Meter: ' + sourceFinalOutput);

                if(sourceFinalOutput) {
                  me.meter_totalizer = sourceFinalOutput;
                }

                resolve(sourceFinalOutput);
              });
            }
            else {
              me.meter_totalizer = sourceFinalOutput;
              resolve(sourceFinalOutput);
            }
          }, (data) => {
            console.log('RETRY');
            me.LCR_BT.sendToDevice(data).then((res) => {
              console.log(res);
              var sourceByte = res;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              console.log('Net Totalizer Meter: ' + sourceFinalOutput);

              if(sourceFinalOutput) {
                me.meter_totalizer = sourceFinalOutput;
              }

              resolve(sourceFinalOutput);
            });
          });
        });
      }

    });
  }

  getStartMeterData(presetType): Promise<any> {
    var me = this;

    return new Promise((resolve, reject) => {
      me.LCR.MeterValue(presetType).then((data)=> {
        console.log(data);
        me.meter_LCR_msg = data;
        me.LCR_BT.sendToDevice(data).then((res) => {
          console.log(res);
          var sourceByte = res;
          var sourceHexString = me.LCR.byteToHexString(sourceByte);
          console.log(sourceHexString);
          var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
          console.log(sourceString);
          var sourceFinalOutput = parseInt(sourceString,16) / 10;
          console.log('Start Meter: ' + sourceFinalOutput);

          if(sourceFinalOutput == NaN || !sourceFinalOutput) {
            console.log('RETRY');
            me.LCR_BT.sendToDevice(data).then((res) => {
              console.log(res);
              var sourceByte = res;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              console.log('Start Meter: ' + sourceFinalOutput);
              me.meter_start = sourceFinalOutput;
              me.meter_end = (me.meter_preset + me.meter_start);
              resolve(sourceFinalOutput);
            });
          }
          else {
            me.meter_start = sourceFinalOutput;
            me.meter_end = (me.meter_preset + me.meter_start);
            resolve(sourceFinalOutput);
          }
        }, (data) => {
          console.log('RETRY');
          me.LCR_BT.sendToDevice(data).then((res) => {
            console.log(res);
            var sourceByte = res;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            console.log('Start Meter: ' + sourceFinalOutput);
            me.meter_start = sourceFinalOutput;
            me.meter_end = (me.meter_preset + me.meter_start);
            resolve(sourceFinalOutput);
          });
        });
      });
    });
  }

  pumpClearStage(): Promise<any> {
    var me = this;

    return new Promise((resolve, reject) => {
      me.LCR.SaleNumber().then((data)=> {
        console.log(data);
        me.LCR_BT.sendToDevice(data).then((res) => {
          console.log(res);
          var sourceByte = res;
          var sourceHexString = me.LCR.byteToHexString(sourceByte);
          console.log(sourceHexString);
          var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
          console.log(sourceString);
          var sourceFinalOutput = parseInt(sourceString,16) / 10;
          console.log('Sale Number: ' + sourceFinalOutput);

          if(sourceFinalOutput) {
            me.meter_sale_number = sourceFinalOutput;
          }

          if(sourceFinalOutput == NaN || !sourceFinalOutput) {
            me.LCR_BT.sendToDevice(data).then((res) => {
              console.log(res);
              var sourceByte = res;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              console.log('Sale Number: ' + sourceFinalOutput);

              if(sourceFinalOutput) {
                me.meter_sale_number = sourceFinalOutput;
              }
              resolve(sourceFinalOutput);
            });
          }
          else {
            resolve(sourceFinalOutput);
          }
        }, ()=> {
          me.LCR_BT.sendToDevice(data).then((res) => {
            console.log(res);
            var sourceByte = res;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            console.log('Sale Number: ' + sourceFinalOutput);

            if(sourceFinalOutput) {
              me.meter_sale_number = sourceFinalOutput;
            }
            resolve(sourceFinalOutput);
          });
        });
      });
    });
  }

  printStage(): Promise<any> {
    var me = this;

    return new Promise((resolve, reject) => {
      me.LCR.PrintPump().then((data)=> {
        console.log(data);
        me.LCR_BT.sendToDevice(data).then((res) => {
          console.log(res);
          var sourceByte = res;
          var sourceHexString = me.LCR.byteToHexString(sourceByte);
          console.log(sourceHexString);
          var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
          console.log(sourceString);
          var sourceFinalOutput = parseInt(sourceString,16) / 10;
          console.log('PRINTING: ' + sourceFinalOutput);

          if(sourceFinalOutput == NaN || !sourceFinalOutput) {
            me.LCR_BT.sendToDevice(data).then((res) => {
              console.log(res);
              var sourceByte = res;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              console.log('PRINTING: ' + sourceFinalOutput);
              resolve(sourceFinalOutput);
            });
          }
          else {
            resolve(sourceFinalOutput);
          }
        }, ()=> {
          me.LCR_BT.sendToDevice(data).then((res) => {
            console.log(res);
            var sourceByte = res;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            console.log('PRINTING: ' + sourceFinalOutput);
            resolve(sourceFinalOutput);
          });
        });
      });
    });
  }

  setTotalizer(node): Promise<any> {
    var me = this;
    var _lcr = null;

    return new Promise((resolve, reject) => {
      if(node == 1) {
        me.LCR.DATA_TO = me.LCR.METER_1_DATA_TO;
      }
      else {
        me.LCR.DATA_TO = me.LCR.METER_2_DATA_TO;
      }

      if(me.LCR_BT.meter_1_test_preset_type.indexOf('Gross') != -1 || me.LCR_BT.meter_2_test_preset_type.indexOf('Gross') != -1) {
        me.LCR.GrossTotalizer().then((data)=>{
          _lcr = data;
          me.LCR_BT.sendToDevice(_lcr).then((data)=> {
            console.log(data);
            var sourceByte = data;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            if(sourceFinalOutput == NaN || !sourceFinalOutput) {
              me.LCR_BT.sendToDevice(_lcr).then((data)=> {
                console.log(data);
                var sourceByte = data;
                var sourceHexString = me.LCR.byteToHexString(sourceByte);
                var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
                var sourceFinalOutput = parseInt(sourceString,16) / 10;
                console.log('Gross Totalizer: ' + sourceFinalOutput);
                if(node == 1) {
                  me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1End = ' + sourceFinalOutput + '');
                }
                else {
                  me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2End = ' + sourceFinalOutput + '');
                }
                resolve(sourceFinalOutput);
              });
            }
            else {
              if(node == 1) {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1End = ' + sourceFinalOutput + '');
              }
              else {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2End = ' + sourceFinalOutput + '');
              }
              resolve(sourceFinalOutput);
            }
          }, (data) => {
            me.LCR_BT.sendToDevice(_lcr).then((data)=> {
              console.log(data);
              var sourceByte = data;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              console.log('Gross Totalizer: ' + sourceFinalOutput);
              if(node == 1) {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1End = ' + sourceFinalOutput + '');
              }
              else {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2End = ' + sourceFinalOutput + '');
              }
              resolve(sourceFinalOutput);
            });
          });
        }, (data) => {
          console.log(data);
          console.log('ERROR');
        });
      }
      else {
        me.LCR.NetTotalizer().then((data)=>{
          _lcr = data;
          me.LCR_BT.sendToDevice(_lcr).then((data)=> {
            console.log(data);
            var sourceByte = data;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            if(sourceFinalOutput == NaN || !sourceFinalOutput) {
              me.LCR_BT.sendToDevice(_lcr).then((data)=> {
                console.log(data);
                var sourceByte = data;
                var sourceHexString = me.LCR.byteToHexString(sourceByte);
                var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
                var sourceFinalOutput = parseInt(sourceString,16) / 10;
                console.log('Net Totalizer: ' + sourceFinalOutput);
                if(node == 1) {
                  me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1End = ' + sourceFinalOutput + '');
                }
                else {
                  me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2End = ' + sourceFinalOutput + '');
                }
                resolve(sourceFinalOutput);
              });
            }
            else {
              if(node == 1) {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1End = ' + sourceFinalOutput + '');
              }
              else {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2End = ' + sourceFinalOutput + '');
              }
              resolve(sourceFinalOutput);
            }
          }, (data) => {
            me.LCR_BT.sendToDevice(_lcr).then((data)=> {
              console.log(data);
              var sourceByte = data;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              console.log('Net Totalizer: ' + sourceFinalOutput);
              if(node == 1) {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1End = ' + sourceFinalOutput + '');
              }
              else {
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2End = ' + sourceFinalOutput + '');
              }
              resolve(sourceFinalOutput);
            });
          });
        }, (data) => {
          console.log(data);
          console.log('ERROR');
        });
      }

    });
  }

  processPresetType(node): Promise<any> {
    var me = this;
    var _lcr = null;

    return new Promise ((resolve, reject) => {

      if(node == 1) {
        me.LCR.DATA_TO = me.LCR.METER_1_DATA_TO;
      }
      else {
        me.LCR.DATA_TO = me.LCR.METER_2_DATA_TO;
      }

      //7E 7E 14 01 82 03 00 21 00 57 A9
      //7e 7e ff 01 82 03 00 21 00 df c8

      me.LCR.PresetType().then((data)=>{
        _lcr = data;
        me.LCR_BT.sendToDevice(_lcr).then((data)=> {
          console.log(data);
          var sourceByte = data;
          var sourceHexString = me.LCR.byteToHexString(sourceByte);
          console.log(sourceHexString);
          var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
          console.log(sourceString);

          var _presetType = 'Gross';
          var sourceFinalOutput = parseInt(sourceString,16) / 10;
          if(sourceFinalOutput != 0) {
            _presetType = 'Net';
          }
          console.log(_presetType + ' Preset Type: ' + sourceFinalOutput);

          if(sourceFinalOutput == NaN || !sourceFinalOutput) {
            me.LCR_BT.sendToDevice(_lcr).then((data)=> {
              console.log(data);
              var sourceByte = data;
              var sourceHexString = me.LCR.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);

              var _presetType = 'Gross';
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              if(sourceFinalOutput != 0) {
                _presetType = 'Net';
              }
              console.log(_presetType + ' Preset Type: ' + sourceFinalOutput);

              if(node == 1) {
                me.LCR_BT.meter_1_test_preset_type = 'Preset Type: ' + _presetType + '';
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType1 = \'' + _presetType + '\'');
              }
              else {
                me.LCR_BT.meter_2_test_preset_type = 'Preset Type: ' + _presetType + '';
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType2 = \'' + _presetType + '\'');
              }
              resolve(true);
            });
          }
          else {
            if(node == 1) {
              me.LCR_BT.meter_1_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType1 = \'' + _presetType + '\'');
            }
            else {
              me.LCR_BT.meter_2_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType2 = \'' + _presetType + '\'');
            }

            resolve(true);
          }
        }, (data) => {
          me.LCR_BT.sendToDevice(_lcr).then((data)=> {
            console.log(data);
            var sourceByte = data;
            var sourceHexString = me.LCR.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);

            var _presetType = 'Gross';
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            if(sourceFinalOutput != 0) {
              _presetType = 'Net';
            }
            console.log(_presetType + ' Preset Type: ' + sourceFinalOutput);

            if(node == 1) {
              me.LCR_BT.meter_1_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType1 = \'' + _presetType + '\'');
            }
            else {
              me.LCR_BT.meter_2_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType2 = \'' + _presetType + '\'');
            }
            resolve(true);
          });
        });
      }, (data) => {
        console.log(data);
        console.log('ERROR');
        reject(true);
      });

    });
  }

  //#endregion

  //#region BUTTONS

  removeselectionInvoice() {
    var me = this;
    console.log(me.currentOrder);

    if(me.currentOrder['ysnSelected'] == true) {

      me.invoice = me.invoice.filter(val=>val.ysnSelected != true);
      me.currentOrder = [];
      //added 06.22.2021 (Kenneth)
      if (me.invoice.length > 0){
        me.currentOrder = me.invoice[0];
      }

      me.recalcInvoice();
    }
    else {
      for(var x = 0; x <= me.currentOrder['tblOrderItem'].length - 1; x++) {
        if(me.currentOrder['tblOrderItem'][x].ysnSelected == true) {
          var _unselected = me.currentOrder['tblOrderItem'].filter(val=>val.ysnSelected != true);
          me.currentOrder['tblOrderItem'] = [];
          me.currentOrder['tblOrderItem'] = _unselected;

          // commented - cuz it removed all
          // for(var y = 0; y <= me.invoice.length - 1; y++) {
          //   if(me.invoice[y].intSiteId == me.currentOrder['intSiteId']) {
          //     me.invoice = me.invoice.splice(y+1, 1);
          //   }
          // }

          me.recalcInvoice();
          return false;
        }
        else if(me.currentOrder['tblOrderItem'][x].tblOrderTaxCode){
          if(me.currentOrder['tblOrderItem'][x].tblOrderTaxCode.filter(val=>val.ysnSelected == true).length > 0) {
            var _unselected = me.currentOrder['tblOrderItem'][x].tblOrderTaxCode.filter(val=>val.ysnSelected != true);
            me.currentOrder['tblOrderItem'][x].tblOrderTaxCode = [];
            me.currentOrder['tblOrderItem'][x].tblOrderTaxCode = _unselected;

            me.recalcInvoice();
            return false;
          }
        }
      }
    }

  }

  async openAddMenu() {
    var me = this;
    const actionSheet = await me.actionSheetCtrl.create({
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

  async openAddItem() {
    var me = this;
    // var _selected = me.invoice.filter(val=>val.ysnSelected == true);
    // if(_selected.length < 1) {
    //   let confirm = await me.alertCtrl.create({
    //     message: 'Please select a Customer Site to add items.',
    //     buttons: [
    //       {
    //         text: 'Ok',
    //         handler: () => {
    //         }
    //       }
    //     ]
    //   });
    //   confirm.present();
    //   return false;
    // }

    var _intLocation = me.globalInfo['intLocation'];
    var _strLocationNumber = me.globalInfo['strLocationNumber'];
    if(me.sites) {
      if(me.sites.length > 0) {
        _intLocation = me.currentOrder['intLocationId'];
        _strLocationNumber = me.currentOrder['strLocation'];
        // _intLocation = me.sites[0].intLocationId;
        // _strLocationNumber = me.sites[0].strLocation;
      }
    }
    if (me.invoice.length > 0 && me.currentOrder.length == 0){
      me.currentOrder = me.invoice[0];
    }
    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.InvoiceRecord = me.invoice;
    Configuration.navParams = { intLocation: _intLocation, strLocationNumber: _strLocationNumber, strCustomerNumber: me.customerNumber };
    me.router.navigateByUrl('/invoice-add-item');
  }

  async openAddSite() {
    var me = this;
    var _customerId = me.currentOrder['intEntityId'] || me.currentOrder['strCustomerNumber'] || me.customer['intCustomerId'];

    if(me.isFromCustomer === true){
      _customerId = me.customer['intCustomerId'];
    }

    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.InvoiceRecord = me.invoice;
    Configuration.navParams = { customerid: _customerId };
    console.log(me.currentOrder);
    console.log(me.customer);
    me.router.navigateByUrl('/invoice-add-site');
  }

  async openAddTaxCode() {
    var me = this;
    var _selected = [];
    for(var x = 0; x <= me.invoice.length -1; x++) {
      _selected = me.invoice[x].tblOrderItem.filter(function (val) { return val.ysnSelected == true; });
      if(_selected.length > 0) me.selectedItems = _selected;
    }
    if(me.selectedItems.length < 1) {
      let confirm = await me.alertCtrl.create({
        message: 'Please select Item to add tax codes.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      confirm.present();
      return false;
    }

    if(!me.currentOrder) return;
    if(!me.currentOrder['tblOrderItem']) return;
    if(!me.currentOrder['tblOrderItem'][0]) return;
    if(!me.currentOrder['tblOrderItem'][0].intSiteId ) return;
    if(!me.currentOrder['tblOrderItem'][0].intItemId) return;

    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.InvoiceRecord = me.invoice;
    Configuration.ItemRecord = me.selectedItems;
    Configuration.navParams = {intEntityId: me.currentOrder['intEntityId'], intSiteId: me.currentOrder['intSiteId'] || me.currentOrder['intSiteID'], intItemId: me.currentOrder['intItemId']};
    me.router.navigateByUrl('/invoice-add-tax');
  }

  async openItemTaxes(item) {
    var me = this;

    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.navParams = {item: item };
    item['strTaxGroup'] = me.customer['strTaxGroup'];

    console.log(me.customer);

    const modal = await this.modalController.create({
      component: InvoiceTaxPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'items': item
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss()
    console.log(data);

    if(data) {
      item.tblOrderTaxCode = data.taxes;
      me.updateMeter(item);
    }

  }

  async openCustomerContract(order) {
    var me = this;

    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.navParams = {contract: me.contract };

    me.contract['customerName'] = me.customer['strCustomerName'] || '';

    console.log(me.contract);

    const modal = await this.modalController.create({
      component: InvoiceAddContractPage,
      cssClass: 'my-custom-class',
      componentProps: {
        'items': me.contract
      }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss()
    console.log(data);

    if(data) {
      if(data.contracts[0]) {
        me.contract = data.contracts;
        console.log('CUSTOMER CONTRACT => ', me.contract);
        debugger;
        if (me.contract[0]['ysnMaxPrice'] == 'true' || me.contract[0]['ysnMaxPrice'] == true){
          let retailPrice = await me.getRetailPrice(order);
          if(retailPrice <= me.contract[0]['dblCashPrice']){
            me.applyCustomerContract(me.contract,retailPrice);
          }else{
            me.applyCustomerContract(me.contract);
          }
        }else{
          me.applyCustomerContract(me.contract);
        }
      }
      else {
        me.applySpecialPricing(order);
      }
    }
    else {
      me.applySpecialPricing(order);
    }

  }

  async openMiscMenu() {
    var me = this;
    const actionSheet = await me.actionSheetCtrl.create({
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

  async openComment() {
    var me = this;

    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.InvoiceRecord = me.invoice;
    Configuration.navParams = { strComment: this.invoice[0]['strComments'] || this.customer['strInternalNotes']};
    me.router.navigateByUrl('/invoice-add-comment');
  }

  async moreDetail() {
    var me = this;
    console.log(this.currentOrder['strCustomerNumber']);
    console.log(this.invoice[0].strCustomerNo);

    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.InvoiceRecord = me.invoice;
    Configuration.navParams = { customerid: this.currentOrder['strCustomerNo'] || this.invoice[0].strCustomerNo || this.currentOrder['strCustomerNumber'] };
    me.router.navigateByUrl('/customer-detail');
  }

  async addSignature() {
    var me = this;

    Configuration.globalFlag = false;
    Configuration.stopReload = true;
    Configuration.InvoiceRecord = me.invoice;
    me.router.navigateByUrl('/invoice-add-signature');
  }

  async cancelInvoice() {
    var me = this;
    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to cancel?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            // CLEAR LCR
            if(me.LCR_BT.CURRENT_HAS_CONNECTION == true) {
              me.printStage();
              clearInterval(me.meterDeviceLoop);
            }
               me.sites = [];
              me.orders = [];
              me.items = [];
              me.itemtaxcode = [];
              me.customer = [];
              me.itemTaxCode = [];
              me.currentCustomer = 0;
              me.meter = [];
              me.currentOrder = [];
              me.invoice = [];
              Configuration.InvoiceRecord = [];
              Configuration.ItemRecord = [];

              me.sites = [];
              me.orders = [];
              me.items = [];
              me.item = [];
              me.pricing = [];
              me.itemtaxcode = [];
              me.customer = [];
              me.itemTaxCode = [];
              me.currentCustomer = 0;
              me.meter = [];
              me.currentOrder = [];
              me.previousOrder = [];
              me.invoice = [];
              me.invoiceRecord = null;
              me.reportName = null;
              me.grandTotal = 0;
              me.selectedItems = [];
              me.ysnAdded = false;
              me.customerNumber = '';
              me.contract = [];

              me.paramTaxExempCustomerId = null;
              me.paramTaxExempItem = null;
              me.paramTaxExempCategoryId = null;
              me.paramTaxExempTaxCodeId = null;
              me.paramTaxExempTaxClassId = null;
              me.paramTaxExempCustomerLocationId = null;
              me.paramTaxExempSiteId = null;

              me.globalEventsService.getObservableSiteClear();
              me.globalEventsService.getObservableItemClear();
              me.globalEventsService.getObservableTaxClear();
              clearInterval(me.meterDeviceLoop);

              if(me.isFromCustomer == true) {
                me.router.navigateByUrl('/customer');
              }
              else {
                me.router.navigateByUrl('/order');
              }
            // me.router.navigateByUrl('/order');
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

  async doneInvoice() {
    var me = this;

    if(me.customer['strInvoiceType'] == 'Cash') {
      var _method = me.paymentMethod.find(x=>x.intPaymentMethodId==me.customer['intPaymentMethodId']);
      if(_method == undefined) {
        let checknumberValid = await me.alertCtrl.create({
          message: 'Payment Method is required!',
          buttons:[
            {
              text:'OK',
              handler: () => {

              }
            }
          ]
        });
        checknumberValid.present();
        return false;
      }
      else if('Check' == _method.strPaymentMethod) {
        if(me.customer['strPaymentInfo'] == null || me.customer['strPaymentInfo'] == '' || me.customer['strPaymentInfo'] == undefined) {
          let checknumberValid = await me.alertCtrl.create({
            message: 'Check Number is required!',
            buttons:[
              {
                text:'OK',
                handler: () => {

                }
              }
            ]
          });
          checknumberValid.present();
          return false;
        }
      }
    }

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to submit?',
      buttons: [
        {
          text: 'Yes',
          handler: async () => {
            let isFromOrder = (me.invoice[0]['intOrderId'] || 0) !== 0;
            console.log(`fromOrder: ${isFromOrder}`);
            if(isFromOrder == true) {
              this.commonSQL.getDataQuery(`Select * from invoice where intOrderId = '${me.invoice[0]['intOrderId']}'`).then(async res => {
                if(res.length == 0){
                  me.processInvoice();
                }else{
                  let invoicePosted = await me.alertCtrl.create({
                    message: 'Invoice already created!',
                    buttons:[
                      {
                        text:'OK',
                        handler: () => {

                        }
                      }
                    ]
                  });
                  invoicePosted.present();
                }
              });
            }else{
              me.processInvoice();
            }
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

  async processInvoice() {
    var me = this;
    var loader = await me.loadingCtrl.create({message: "Saving invoice...", backdropDismiss: true});
        loader.present();

    var _date = new Date();
    var datestring = _date.getFullYear().toString().substring(2,4) + "" + ("0"+(_date.getMonth()+1)).slice(-2) + "" + ("0" + _date.getDate()).slice(-2) + "" + ("0" + _date.getHours()).slice(-2) + "" + ("0" + _date.getMinutes()).slice(-2) + "" + _date.getSeconds();

    console.log(me.customer);
    console.log(me.invoice);
    console.log(me.globalInfo);
    console.log(datestring);

    // GET CURRENT LOCATION
    console.log('GPS HERE!!!');
    me.geolocation.getCurrentPosition().then((res) => {
      console.log('GPS HERE!!! RESULT');
      console.log(res);
      me.gps_latitude = res.coords.latitude.toString() || '';
      me.gps_longitude = res.coords.longitude.toString() || '';
     }).catch((error) => {
       console.log('Error getting location', error);
     });

    me.commonSQL.getDataQuery('select * from invoice where strInvoiceNo = \'' + 'SI-' + (me.globalInfo.intDriverNumber || me.globalInfo.intDriverId) + '-' + datestring + '\'').then((data)=> {

      var _data = JSON.parse(JSON.stringify(data));
      if(_data.length > 0) {
        _date = new Date();
        datestring = _date.getFullYear().toString().substring(2,4) + "" + ("0"+(_date.getMonth()+1)).slice(-2) + "" + ("0" + _date.getDate()).slice(-2) + "" + ("0" + _date.getHours()).slice(-2) + "" + ("0" + _date.getMinutes()).slice(-2) + "" + _date.getSeconds() + "0";
        console.log(datestring);
      }
      // +++++++ HEADER +++++++
      var _invoice = new Invoice();
      _invoice.strInvoiceNo = 'SI-' + (me.globalInfo.intDriverNumber || me.globalInfo.intDriverId) + '-' + datestring;
      _invoice.intOrderId = me.invoice[0]['intOrderId'] || 0;
      _invoice.intEntityCustomerId = me.customer['intEntityCustomerId'];
      _invoice.strCustomerNo = me.customer['strCustomerNumber'];
      _invoice.strCustomerName = me.customer['strCustomerName'];
      _invoice.strLocationName = me.customer['strCustomerNumber'];
      _invoice.intLocationId = me.globalInfo.intLocation;
      _invoice.strType = me.customer['strInvoiceType'] || 'Invoice';
      _invoice.dtmDeliveryDate = _date.toJSON();
      _invoice.dtmInvoiceDate = _date.toJSON();
      _invoice.intDriverId = me.globalInfo.intDriverId || me.globalInfo.intDriverNumber;
      _invoice.intShiftId = me.globalInfo.intShiftId || me.globalInfo.intShiftCounter;
      _invoice.strComments = me.invoice[0]['strComments'] || me.customer['strInternalNotes'];
      _invoice.dblTotal = parseFloat((me.grandTotal || 0.00).toFixed(2));
      _invoice.intTermId = me.invoice[0]['intTermId'] ||  null;
      _invoice.strSignature = me.invoice[0]['strSignature'] ||  null;
      _invoice.intPaymentMethodId = me.customer['intPaymentMethodId'] ||  null;
      _invoice.strPaymentInfo = me.customer['strPaymentInfo'] ||  null;

      _invoice.strLatitude = me.gps_latitude;
      _invoice.strLongitude = me.gps_longitude;

      if(me.isFromCustomer == true) {
        _invoice.intTermId = me.customer['intTerm'] || null;
      }


      me.invoiceRecord = _invoice;
      me.reportName = _invoice.strInvoiceNo; //report name | pdf filename

      console.log(me.invoice);

      me.commonSQL.addData(_invoice['tablename'],_invoice).then(res => {
        console.log(res);

        // +++++++ DETAIL (ITEM) +++++++
        var _invoiceItemList = [];
        for(var x = 0; x <= me.currentOrder["tblOrderItem"].length - 1; x++) {
          var _invoiceItems = new InvoiceItems();
          let itemTotal = (me.currentOrder['tblOrderItem'][x]['price'] || me.currentOrder['tblOrderItem'][x].dblPrice) * (me.currentOrder['tblOrderItem'][x].quantity || 0)
          _invoiceItems.intInvoiceId = null; // result of header invoice
          _invoiceItems.strInvoiceNo = 'SI-' + (me.globalInfo.intDriverNumber || me.globalInfo.intDriverId) + '-' + datestring;
          _invoiceItems.intItemId = me.currentOrder['tblOrderItem'][x].intItemId || 0;
          _invoiceItems.intContractDetailId = me.currentOrder['tblOrderItem'][x].intContractDetailId || 0;
          _invoiceItems.intContractSeq = me.currentOrder['tblOrderItem'][x].intContractSeq || 0;
          _invoiceItems.intSiteId = me.currentOrder['tblOrderItem'][x].intSiteId || 0;
          _invoiceItems.intSiteNumber = me.currentOrder['tblOrderItem'][x].intSiteNumber || 0
          _invoiceItems.intOrderId = me.currentOrder['tblOrderItem'][x].intOrderId || 0;
          _invoiceItems.strOrderNumber = me.currentOrder['tblOrderItem'][x].strOrderNumber || 0;
          _invoiceItems.strItemNo = me.currentOrder['tblOrderItem'][x].strItemNo;
          _invoiceItems.strItemDescription = me.currentOrder['tblOrderItem'][x].strItemDescription;
          _invoiceItems.strSiteDescription = me.currentOrder['tblOrderItem'][x].strSiteDescription;
          _invoiceItems.strSiteAddress = me.currentOrder['tblOrderItem'][x].strSiteAddress;
          _invoiceItems.dblPrice = me.currentOrder['tblOrderItem'][x]['price'] || me.currentOrder['tblOrderItem'][x].dblPrice;
          _invoiceItems.ysnOutOfGas = me.currentOrder['ysnOutOfGas'] || false;
          _invoiceItems.dblQuantity = me.currentOrder['tblOrderItem'][x].quantity || 0;
          _invoiceItems.dblTotal = me.currentOrder['tblOrderItem'][x].totalamount || 0;
          _invoiceItems.dblTaxTotal = me.currentOrder['tblOrderItem'][x].itemtotaltax || 0; //Kenneth 06.18.2021
          _invoiceItems.dblItemTotal = itemTotal; //Kenneth 06.18.2021
          _invoiceItems.dblPercentageFull = me.currentOrder['tblOrderItem'][x].ending || 0;
          _invoiceItemList.push(_invoiceItems);

          // me.commonSQL.updateDataQuery('UPDATE loadinventory SET dblQuantityReturned = (dblQuantityReturned - ' + _invoiceItems.dblQuantity + ') WHERE intItemId = \'' + _invoiceItems.intItemId + '\'').then(res => { console.log(res); });
        }

        me.invoiceRecord['items'] = _invoiceItemList;

        me.commonSQL.addBulkData(_invoiceItems['tablename'], new InvoiceItems(), _invoiceItemList).then(res => {
          console.log(res);

        console.log('tax code');
        debugger;

            // +++++++ DETAIL (TAX CODE) +++++++
            var _invoiceTaxCodeList = [];
            for(var x = 0; x <= me.currentOrder["tblOrderItem"].length - 1; x++) {
              for(var z = 0; z <= me.currentOrder['tblOrderItem'][x]['tblOrderTaxCode'].length - 1; z++) {

                var _invoiceTaxCodes = new InvoiceTaxCodes();
                _invoiceTaxCodes.intOrderId = me.currentOrder['tblOrderItem'][x].intOrderId || 0;
                _invoiceTaxCodes.intInvoiceTaxId = null;
                _invoiceTaxCodes.intInvoiceItemId = null;
                _invoiceTaxCodes.intItemId = me.currentOrder['tblOrderItem'][x].intItemId || 0;
                _invoiceTaxCodes.strTaxCode = me.currentOrder['tblOrderItem'][x]['tblOrderTaxCode'][z].strTaxCode;
                _invoiceTaxCodes.intTaxCodeId = me.currentOrder['tblOrderItem'][x]['tblOrderTaxCode'][z].intTaxCodeId || 0;
                _invoiceTaxCodes.dblRate = me.currentOrder['tblOrderItem'][x]['tblOrderTaxCode'][z].dblRate || 0;
                _invoiceTaxCodes.dblTotalTax = me.currentOrder['tblOrderItem'][x]['tblOrderTaxCode'][z].dblTotalTax || 0;
                _invoiceTaxCodes.dblTax = _invoiceTaxCodes.dblTotalTax;
                _invoiceTaxCodes.strCalculationMethod = me.currentOrder['tblOrderItem'][x]['tblOrderTaxCode'][z].strCalculationMethod;
                _invoiceTaxCodeList.push(_invoiceTaxCodes);
              }
            }

            me.invoiceRecord['taxcodes'] = _invoiceTaxCodeList;

            if(_invoiceTaxCodeList.length > 0) {
              me.commonSQL.addBulkData(_invoiceTaxCodes['tablename'], new InvoiceTaxCodes(), _invoiceTaxCodeList).then(res => {
                console.log(res);

                me.createPdf();
                for(var z = 0; z <= me.currentOrder['tblOrderItem'].length - 1; z++) {
                  var _id = me.currentOrder['tblOrderItem'][z].intContractDetailId;;
                  var _quantity = me.currentOrder['tblOrderItem'][z].quantity;
                  var _itemid = me.currentOrder['tblOrderItem'][z].intItemId;
                  var _itemno = me.currentOrder['tblOrderItem'][z].strItemNo;
                  var _itemdesc = me.currentOrder['tblOrderItem'][z].strItemDescription;
                  me.updateQuantity(_id, _quantity, _itemid, _itemno, _itemdesc);
                }
                me.sendShiftData();
                loader.dismiss();

              });
            }
            else {
              console.log(res);

              me.createPdf();
              for(var z = 0; z <= me.currentOrder['tblOrderItem'].length - 1; z++) {
                var _id = me.currentOrder['tblOrderItem'][z].intContractDetailId;;
                var _quantity = me.currentOrder['tblOrderItem'][z].quantity;
                var _itemid = me.currentOrder['tblOrderItem'][z].intItemId;
                var _itemno = me.currentOrder['tblOrderItem'][z].strItemNo;
                var _itemdesc = me.currentOrder['tblOrderItem'][z].strItemDescription;
                me.updateQuantity(_id, _quantity, _itemid, _itemno, _itemdesc);
              }
              me.sendShiftData();
              loader.dismiss();
            }



        });

      });

      // CLEAR LCR
      if(me.LCR_BT.CURRENT_HAS_CONNECTION == true) {
        me.printStage();
      }

    });
  }

  clearInputValue(elem) {
    elem.target.children[0].select();
  }

  deliveryOutOfGas(customer, site) {
    // this.events.subscribe('closeInvoice', (paramsVar) => {
    //   this.navCtrl.pop();
    //   this.events.unsubscribe('closeInvoice');
    // });
    // this.navCtrl.push("DeliveryOutofgasPage", { currentCustomerData: customer, currentSiteData: site });
  }

  //#endregion

  //#region REPORTS

  logo() {
    return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
  }

  buildInvoiceItemsReport() {
    var me = this;
    var _itemContent = [];
    var _invoiceContent = [];
    var _item = {};
    var _body = {style:'',table:{widths:[],body:[]},layout:''};
    var _header = [];
    var _header_item = {table:{body:[]},layout:'noBorders'};
    var _date = new Date();
    var _invoiceDate = ("0"+(_date.getMonth()+1)).slice(-2) + "/" + ("0" + _date.getDate()).slice(-2) + "/" + _date.getFullYear();
    var _item_description = '';

    for(var x = 0; x <= me.invoice['length'] - 1; x++) {
      var record = me.invoice[x];
      console.log(record);

      var _itemTotal = 0;
      var _itemPrice = 0;
      var _itemQuantity = 0;

      me.tmAlerts.intSiteNumber = record.intSiteNumber;
      me.tmAlerts.strCustomerNumber = me.currentOrder['strCustomerNo'] || me.currentOrder['strCustomerNumber'];
      me.tmAlerts.dtmDateDelivery = me.datePipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss a');

      _itemContent = [];
      _item = {text: (record.intSiteNumber || '') + ', ' + (record.strSiteDescription || '') + ', ' + (record.strSiteAddress || '') , bold: false, margin: [0, 5, 0, 3]};
      _body = {style: 'tableExample',table: {widths: [80, 55, 65, 65, 65, 65, 65],body: []},layout: 'noBorders'};

      for(var y = 0; y <= record['tblOrderItem']['length'] - 1; y++) {
        var item = record['tblOrderItem'][y];
        console.log(item);
        var _itemGrandTotal = (parseFloat(item['itemgrandtotal'] || 0));

        if(!item.quantity) item.quantity = 0;
        if(!item.dblPrice || item.dblPrice == '') item.dblPrice = 0;

        item.dblPrice = (parseFloat(item.dblPrice || 0));
        me.totalItem = me.totalItem + parseFloat(item['totalamount'] || 0);

        _itemTotal = _itemTotal + _itemGrandTotal;
        _itemPrice = _itemPrice + (item.dblPrice || 0);
        _itemQuantity = _itemQuantity + (parseFloat(item.quantity || 0));

        console.log(item);

        if(item.strContractNumber != '' || item.strContractNumber != undefined || item.strContractNumber != null) {
          if(item.dblAvailableQty == '' || item.dblAvailableQty == undefined || item.dblAvailableQty == null) {
            item.dblAvailableQty = '0.00';
          }
        }

        _body.table.body.push([{text: item.strItemNo + ' - ' + item.strItemDescription, alignment: 'left'}, {text: parseFloat(item.quantity).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}, {text: (item.ending || '0') + '%', alignment: 'right'}, {text: item.strContractNumber || '', alignment: 'right'},{text: item.dblAvailableQty || '', alignment: 'right'},{text: (item.dblPrice || 0.00).toString(), alignment: 'right'},{text: parseFloat(item['totalamount'] || 0).toFixed(2).toString().match(/^-?\d+(?:\.\d{0,2})?/)[0] || 0.00, alignment: 'right'}]);

        for(var z = 0; z <= item['tblOrderTaxCode']['length'] - 1; z++) {
          var taxcode = item['tblOrderTaxCode'][z];

          if(taxcode.dblTotalTax > 0) {
            me.totalTax = me.totalTax + parseFloat(taxcode.dblTotalTax || 0);

            console.log(taxcode);

            if(!taxcode.dblRate) taxcode.dblRate = 0;
            if(!taxcode.dblTotalTax) taxcode.dblTotalTax = 0;

            _body.table.body.push([{text: taxcode.strTaxCode || '', alignment: 'right', style: 'tableHeader', colSpan: 5},{},{},{},{},{text: taxcode.dblRate, alignment: 'right', style: 'tableHeader'},{text: taxcode.dblTotalTax, alignment: 'right', style: 'tableHeader'}]);
          }
        }

        // HEADER
        if(me.isMeter == true) {
          _item_description = item.strItemDescription;
          _header_item.table.body.push(['', '',{ text: 'LCR - Meter #' + me.LCR.DATA_TO, alignment: 'left' }]);
          _header_item.table.body.push(['', '',{ text: 'Sale ' + me.meter_sale_number + ' ' + _invoiceDate + ' ' + _date.getHours() + ":" + _date.getMinutes() + ":" + _date.getSeconds(), alignment: 'left' }]);
          _header_item.table.body.push(['', '',{ text: 'Start: 0.00  End: ' + parseFloat((item.dblQuantity || item.quantity)).toFixed(2), alignment: 'left' }]);
          _header_item.table.body.push(['', '',{ text: _item_description.substring(0,23), alignment: 'left' }]);
          _header_item.table.body.push(['', '',{ text: 'Totalizer: ' + ((item.dblMeterTotalizer || 0) + (item.dblQuantity || item.quantity)), alignment: 'left' }]);
          _header.push(_header_item);
        }
      }

      me.tmAlerts.dblTotal = _itemTotal;
      me.tmAlerts.dblPrice = _itemPrice;
      me.tmAlerts.dblQuantity = _itemQuantity;
      me.tmUpdate.push(me.tmAlerts);

      if(record.intSiteNumber) {
        _itemContent.push(_item);
      }
      _itemContent.push(_body);
      _invoiceContent.push(_itemContent);
    }

    if(me.isMeter == true) {
      me.meter_header_report = _header;
    }

    return _invoiceContent;
  }

  createPdf() {
    var me = this;
    var irelyImage = me.logo();
    var _date = new Date();
    var _invoiceDate = ("0"+(_date.getMonth()+1)).slice(-2) + "/" + ("0" + _date.getDate()).slice(-2) + "/" + _date.getFullYear();
    var _signatureDate = new Date().toLocaleString('en-US', { hour12: true, year: 'numeric', month: 'numeric', day: 'numeric', hour: "numeric", minute: "numeric" });
    var _signatureLabel = 'Customer Signature: ';
    var _signatureOpacity = 1;
    var _signatureMaxHeight = 200;
    var _companyname = localStorage.getItem('company_name') || '';
    var _address = localStorage.getItem('company_address') || '';
    var _county = localStorage.getItem('company_county') || '';
    var _city = localStorage.getItem('company_city') || '';
    var _state = localStorage.getItem('company_state') || '';
    var _zip = localStorage.getItem('company_zip') || '';
    var _country = localStorage.getItem('company_country') || '';
    var _totalRecords = 1;

    console.log(me.customer);
    console.log(me.invoice);
    console.log(me.invoiceRecord);

    var _invoiceContent = me.buildInvoiceItemsReport();
    console.log(_invoiceContent);

    // DUE DATE - BEGIN
    var _dueDate = new Date();
    // var _month = _dueDate.getMonth() + 1;
    // var _day = _dueDate.getDate();
    // var _year = _dueDate.getFullYear();
    // me.customer['intDueNextMonth'] -- cutoff day
    // me.customer['intDayofMonthDue'] -- days of month due

    // if(me.customer['intDueNextMonth'] == 0) {
    //   //_month = _month + 1;
    // }
    // else if(_day <= me.customer['intDueNextMonth']) {
    //   _month = _month + 1;
    //   if(me.customer['intDueNextMonth'] != 0) {
    //     _day = me.customer['intDueNextMonth'];
    //   }
    // }
    // else if(_day > me.customer['intDueNextMonth']) {
    //   _month = _month + 2;
    //   if(me.customer['intDueNextMonth'] != 0) {
    //     _day = me.customer['intDueNextMonth'];
    //   }
    // }

    if(me.customer['strType'] === 'Date Driven'){
      //AccountsReceivable.common.ARFunctions.getDateDrivenDueDate(current, termRecord.get('intTermID'), callback);
    }
    else if(me.customer['strType'] === 'Specific Date')
    {
      _dueDate = me.customer['dtmDueDate'];
    }
    else{
      _dueDate.setDate(_dueDate.getDate() + parseInt(me.customer['intBalanceDue'] || 0));
    }

    var _month = _dueDate.getMonth() + 1;
    var _day = _dueDate.getDate();
    var _year = _dueDate.getFullYear();

    var _dueDates = ("0"+(_month)).slice(-2) + "/" + ("0" + _day).slice(-2) + "/" + _year;
    // DUE DATE - END

    // DISCOUNT DETAIL - BEGIN
    var _discountDetailTotal = me.totalItem + me.totalTax;
    var _discountDetailDays = parseInt(me.customer['intDiscountDay'] || 0);
    var _discountDetailPercent = parseFloat(me.customer['dblDiscountEP'] || 0);
    var _discountDetailNewDay = new Date();
    _discountDetailNewDay.setDate(_discountDetailNewDay.getDate() + _discountDetailDays);
    var _discountDetailDate = ("0"+(_date.getMonth()+1)).slice(-2) + "/" + ("0" + _discountDetailNewDay.getDate()).slice(-2) + "/" + _date.getFullYear();
    var _discountDetailDeduct = _discountDetailTotal * (_discountDetailPercent / 100);
    var _discountDetailPay = _discountDetailTotal - _discountDetailDeduct;

    var _discountMSG = 'If paid by ' + _discountDetailDate + ', deduct $' + (_discountDetailDeduct).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + ' and pay $' + (_discountDetailPay).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') + '.';

    if(_discountDetailPercent <= 0) {
      _discountMSG = 'After ' + _discountDetailDate + ', pay the full amount';
    }
    // DISCOUNT DETAIL - END


    // PAYMENT METHOD
    var _isPaid = 'No';
    if(me.customer['strInvoiceType'] == 'Cash') _isPaid = 'Yes';
    // PAYMENT METHOD

    // TOTAL RECORDS
    _totalRecords = me.invoice.length || 1;

    // SIGNATURE
    if(me.invoiceRecord.strSignature == null || me.invoiceRecord.strSignature == undefined || me.invoiceRecord.strSignature == '') {
      // _signatureLabel = '';
      me.invoiceRecord.strSignature = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAgMAAABjUWAiAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEUAAAD///8AAABzxoNxAAAAAXRSTlMAQObYZgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAUSURBVCjPY2AYBaMAGQQMtAOIBgA33ABRYgX+MwAAAABJRU5ErkJggg==";
      _signatureDate = '';
      _signatureOpacity = 0;
      _signatureMaxHeight = 35;
    }


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
                { text: '', alignment: 'right', style: 'header' },
                { text: '', alignment: 'right', style: 'header' },
                { text: 'Invoice: ' + me.invoiceRecord.strInvoiceNo, alignment: 'right', style: 'header' },
              ]
            ]
          },
          layout: 'noBorders'
        },
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
                        [{ text: _companyname, bold: true }, '', ''],
                        [_address + '  ' +  _county, '', ''],
                        [_city + ', ' + _state + ', ' + _zip + ', ' + _country, '', ''],
                        ['', '', ''],
                        ['', '', '']
                      ]
                    },
                    layout: 'noBorders'
                  }
                ],
                me.meter_header_report
                // [
                //   {
                //     table: {
                //       body: [
                //         // ['', '',{ text: 'LCR - Meter #' + me.LCR.DATA_TO, bold: true, alignment: 'right' }],
                //         // ['', '',{ text: 'Sale ' + me.meter_sale_number + ' ' + _invoiceDate + ' ' + _date.getHours() + ":" + _date.getMinutes() + ":" + _date.getSeconds(), bold: true, alignment: 'right' }],
                //         // ['', '',{ text: 'Start: 0.0  End: ' + me.meter_quantity, bold: true, alignment: 'right' }],
                //         // ['', '', ''],
                //         // ['', '',{ text: 'Totalizer: ' + me.meter_end, bold: true, alignment: 'right' }],
                //       ]
                //     },
                //     layout: 'noBorders'
                //   }
                // ],
                // { text: 'Invoice: ' + me.invoiceRecord.strInvoiceNo, alignment: 'right', style: 'header' },
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
            me.customer['strCustomerName'] + '\n' + me.customer['strBillToAddress'] + '\n' + me.customer['strBillToCity'] + ', ' + me.customer['strBillToState'] + ' ' + me.customer['strBillToZipCode'] + ', ' + _country
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
					[{text: 'Customer:', style: 'shadedbox'}, {text: me.customer['strCustomerNumber'] || '', alignment: 'left'}, {text: 'Driver:', style: 'shadedbox'}, {text: me.globalInfo.strFullName || '', alignment: 'left'}, {text: 'Latitude:', style: 'shadedbox'}, {text: me.gps_latitude || '', alignment: 'left'}],
					[{text: 'Terms:', style: 'shadedbox'}, {text: me.customer['strTerm'] || '', alignment: 'left'}, {text: 'Paid:', style: 'shadedbox'}, {text: _isPaid, alignment: 'left'}, {text: 'Longitude', style: 'shadedbox'}, {text: me.gps_longitude || '', alignment: 'left'}],
					[{text: 'Invoice Date:', style: 'shadedbox'}, {text: _invoiceDate || '', alignment: 'left'}, {text: 'Delivery Date:', style: 'shadedbox'}, {text: _invoiceDate || '', alignment: 'left'}, {text: 'Due Date:', style: 'shadedbox'}, {text: _dueDates, alignment: 'left'}],
					[{text: 'Discount Detail:', style: 'shadedbox'}, {text: _discountMSG, colSpan: 2, alignment: 'left'}, {}, {text: 'Invoice Header Comment:', style: 'shadedbox'}, {text: me.invoiceRecord.strComments || me.customer['strInternalNotes'], alignment: 'left', colSpan: 2}]
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
        {text: 'Total Records: ' + _totalRecords, italics: true},
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
			},
		},
    {text: '\n'},
    {
      table: {
        widths: [ '*', 205, 125 ],
        body: [
          [
            { text: '', alignment: 'right' },
            { image: me.invoiceRecord.strSignature || '', width: 200, maxHeight: _signatureMaxHeight, opacity: _signatureOpacity },
            { text: '', alignment: 'left' },
          ]
        ]
      },
      layout: 'noBorders'
    },
    {
      table: {
        widths: [ '*', 205, 125 ],
        body: [
          [
            { text: _signatureLabel, alignment: 'right' },
            { text: '_____________________________________', width: 200 },
            { text: _signatureDate, alignment: 'left' },
          ]
        ]
      },
      layout: 'noBorders'
    }
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
        me.reportService.create(docDefinition, _filename.replace(/[/\\?%*:|"<>]/g, ''), false);

    me.doInsertPDFInfo(_filename + ".pdf");//Kenneth 06.23.2021
    me.openPDF(_filename.replace(/[/\\?%*:|"<>]/g,''));

  }

  async openPDF(_filename) {
    var me = this;
    let confirm = await me.alertCtrl.create({
      message: 'Do you want to open the created invoice report?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {

            me.file.listDir(me.file.dataDirectory,'reports').then((result)=>{
              console.log(result);

              for(let file of result){
                var _file = {type: '',filename:'',fullpath:'',datecreated: '',visible: 'false'};

                if(file.isFile == true){
                  console.log(file);
                  _file.type = file.name.substr(0,file.name.indexOf('_')).replace(/-/g,' ');
                  _file.filename = file.name;
                  _file.fullpath = file.nativeURL;

                  if(_filename + ".pdf" == _file.filename) {
                    // me.navCtrl.pop();

                    me.sites = [];
                    me.orders = [];
                    me.items = [];
                    me.itemtaxcode = [];
                    me.customer = [];
                    me.itemTaxCode = [];
                    me.currentCustomer = 0;
                    me.meter = [];
                    me.currentOrder = [];
                    me.invoice = [];
                    Configuration.InvoiceRecord = [];
                    Configuration.ItemRecord = [];

                    me.sites = [];
                    me.orders = [];
                    me.items = [];
                    me.item = [];
                    me.pricing = [];
                    me.itemtaxcode = [];
                    me.customer = [];
                    me.itemTaxCode = [];
                    me.currentCustomer = 0;
                    me.meter = [];
                    me.currentOrder = [];
                    me.previousOrder = [];
                    me.invoice = [];
                    me.invoiceRecord = null;
                    me.reportName = null;
                    me.grandTotal = 0;
                    me.selectedItems = [];
                    me.ysnAdded = false;
                    me.customerNumber = '';
                    me.contract = [];

                    me.paramTaxExempCustomerId = null;
                    me.paramTaxExempItem = null;
                    me.paramTaxExempCategoryId = null;
                    me.paramTaxExempTaxCodeId = null;
                    me.paramTaxExempTaxClassId = null;
                    me.paramTaxExempCustomerLocationId = null;
                    me.paramTaxExempSiteId = null;

                    me.globalEventsService.getObservableSiteClear();
                    me.globalEventsService.getObservableItemClear();
                    me.globalEventsService.getObservableTaxClear();

                    if(me.isFromCustomer == true) {
                      me.router.navigateByUrl('/customer');
                    }
                    else {
                      me.router.navigateByUrl('/order');
                    }
                    me.fileOpener.open(_file.fullpath, 'application/pdf');
                    return;
                  }
                }
              }
            });
          }
        },
        {
          text: 'No',
          handler: () => {
            var _hasOOG = false;
            for(var x = 0; x <= me.invoice.length - 1; x++) {
              console.log(me.invoice[x]);
              if(me.invoice[x]['ysnOutOfGas']) {
                _hasOOG = true;
                me.deliveryOutOfGas(me.customer, me.invoice[x]['tblOrderItem'][0]);
              }
            }
            if(!_hasOOG) {
              // me.navCtrl.pop();

              me.sites = [];
              me.orders = [];
              me.items = [];
              me.itemtaxcode = [];
              me.customer = [];
              me.itemTaxCode = [];
              me.currentCustomer = 0;
              me.meter = [];
              me.currentOrder = [];
              me.invoice = [];
              Configuration.InvoiceRecord = [];
              Configuration.ItemRecord = [];

              me.sites = [];
              me.orders = [];
              me.items = [];
              me.item = [];
              me.pricing = [];
              me.itemtaxcode = [];
              me.customer = [];
              me.itemTaxCode = [];
              me.currentCustomer = 0;
              me.meter = [];
              me.currentOrder = [];
              me.previousOrder = [];
              me.invoice = [];
              me.invoiceRecord = null;
              me.reportName = null;
              me.grandTotal = 0;
              me.selectedItems = [];
              me.ysnAdded = false;
              me.customerNumber = '';
              me.contract = [];

              me.paramTaxExempCustomerId = null;
              me.paramTaxExempItem = null;
              me.paramTaxExempCategoryId = null;
              me.paramTaxExempTaxCodeId = null;
              me.paramTaxExempTaxClassId = null;
              me.paramTaxExempCustomerLocationId = null;
              me.paramTaxExempSiteId = null;

              me.globalEventsService.getObservableSiteClear();
              me.globalEventsService.getObservableItemClear();
              me.globalEventsService.getObservableTaxClear();

              if(me.isFromCustomer == true) {
                me.router.navigateByUrl('/customer');
              }
              else {
                me.router.navigateByUrl('/order');
              }
            }
          }
        }
      ]
    });
    confirm.present();
  }

  doInsertPDFInfo(_filename:string){
    console.log('start doInsertPDFInfo');
    let me = this,
        pdfinfo = new tblMBILPDF();
      console.log(me.globalInfo);

        me.commonSQL.getData("shift").then(res=>{
          console.log('data get from shift');
          let shiftdata = res[res.length-1];
          pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
          pdfinfo.intShiftId = me.globalInfo.intShiftCounter;
          pdfinfo.intDriverId = me.globalInfo.intDriverNumber;
          pdfinfo.strFileName = _filename;
          pdfinfo.strFileType = "INVOICE";
          me.commonSQL.addData('tblMBILPDF',pdfinfo).then(res=>{
            console.log('successfully inserted to tblMBILPDF');
            me.commonSQL.getData('tblMBILPDF').then(result=> console.log(result));
          });
        })

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

    // debugger;

    // SEND SHIFT
    console.log('SEND SHIFT');
    me.commonSQL.getData('shift').then(res => {
      _shift = res;
      console.log('SHIFT');
      console.log(_shift);
      me.commonSQL.getData('invoice').then(res => {
        console.log('INVOICE');
        console.log(res);
        _invoice = res.filter(x=>x.intShiftId == _shift[_shift.length-1].intShiftId); //res[res.length-1];
        console.log(_invoice);
        me.commonSQL.getData('invoiceitems').then(res => {
          console.log('INVOICE ITEMS');
          _invoiceitems = res;
          console.log(_invoiceitems);
          me.commonSQL.getData('invoicetaxcodes').then(res => {
            console.log('TAXES');
            _invoicetaxcodes = res;

            console.log(_invoicetaxcodes);
            _data = _shift[_shift.length-1];
            _data['tblMBILInvoices'] = [];

            console.log('BUILDING INVOICE DATA');
            for(var x = 0; x<=_invoice.length-1; x++) {
              var _temp_invoice = [];
              _temp_invoice = _invoice[x];

              if(_temp_invoice['ysnSendToOffice'] != 'true') {
                console.log(_temp_invoice);
                for(var y = 0; y<=_invoiceitems.length-1; y++) {

                  if(_invoice[x].intOrderId == _invoiceitems[y].intOrderId) {
                    console.log(_invoiceitems[y]);
                    // _temp_invoice['tblMBILInvoiceItems'] = [];
                    if(!_temp_invoice['tblMBILInvoiceItems']) {
                      _temp_invoice['tblMBILInvoiceItems'] = [];
                    }
                    _temp_invoice['tblMBILInvoiceItems'].push(_invoiceitems[y]);
                    debugger;

                    _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
                    for(var z = 0; z<=_invoicetaxcodes.length-1; z++) {
                      if(_invoiceitems[y].intOrderId == _invoicetaxcodes[z].intOrderId) {
                        if(!_temp_invoice['tblMBILInvoiceItems'][0]){
                          _temp_invoice['tblMBILInvoiceItems'][0] = [];
                        }
                        if(_temp_invoice['tblMBILInvoiceItems'][0]) {
                          console.log('temp invoice Y')
                          console.log(_temp_invoice['tblMBILInvoiceItems'][0]);
                          // if(!_temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes']) {
                          //   _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
                          // }
                          _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'].push(_invoicetaxcodes[z]);
                          console.log('pushed invoice')
                        }
                      }

                    }

                  }
                }
                console.log(_temp_invoice);
                _data['tblMBILInvoices'].push(_temp_invoice);
              }
            }

            console.log('before sending entire shift');
            console.log(_data);

            var _orderList = '';
            for(var x = 0; x <= _invoice.length-1; x++) {
              _orderList = _orderList + _invoice[x].intOrderId + '\', \'';
            }

            me.commonSQL.updateDataQuery('UPDATE tblMBILOrder SET strOrderStatus = \'Delivered\' WHERE intOrderId IN (\'' + _orderList + '0\')').then(res => { console.log(res); console.log('update orders'); });

            me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => {
              console.log('syncentireshift');
              console.log(res);
              // loader.dismiss();

              me.commonSQL.updateDataQuery('UPDATE invoice SET ysnSendToOffice = \'true\' WHERE intOrderId IN (\'' + _orderList + '0\')').then(res => { console.log(res); console.log('update invoice'); });
              // me.commonSQL.updateDataQuery("UPDATE orders SET strOrderStatus = 'Delivered' WHERE intOrderId = " + _invoice[0].intOrderId).then(res => { console.log(res); console.log('update orders'); });

              // // TM Alerts
              console.log('TM UPDATE IN INVOICE',me.tmUpdate);

              //update status
              me.putraw('tankmanagement/api/consumptionsite/updatedispatchordernew', me.tmUpdate).subscribe(res => {
                console.log('updatedispatchorders');
                console.log(res);
              });

              //email notification
              me.postraw('tankmanagement/api/consumptionsite/emaildeliveries', me.tmUpdate).subscribe(res => {
                console.log('emaildeliveries');
                console.log(res);
              });

              // me.sites = [];
              // me.orders = [];
              // me.items = [];
              // me.itemtaxcode = [];
              // me.customer = [];
              // me.itemTaxCode = [];
              // me.currentCustomer = 0;
              // me.meter = [];
              // me.currentOrder = [];
              // me.invoice = [];
              // Configuration.InvoiceRecord = [];

              // me.sites = [];
              // me.orders = [];
              // me.items = [];
              // me.item = [];
              // me.pricing = [];
              // me.itemtaxcode = [];
              // me.customer = [];
              // me.itemTaxCode = [];
              // me.currentCustomer = 0;
              // me.meter = [];
              // me.currentOrder = [];
              // me.previousOrder = [];
              // me.invoice = [];
              // me.invoiceRecord = null;
              // me.reportName = null;
              // me.grandTotal = 0;
              // me.isFromCustomer = false;
              // me.selectedItems = [];
              // me.ysnAdded = false;
              // me.customerNumber = '';
              // me.contract = [];

              // me.paramTaxExempCustomerId = null;
              // me.paramTaxExempItem = null;
              // me.paramTaxExempCategoryId = null;
              // me.paramTaxExempTaxCodeId = null;
              // me.paramTaxExempTaxClassId = null;
              // me.paramTaxExempCustomerLocationId = null;
              // me.paramTaxExempSiteId = null;

              // me.globalEventsService.getObservableItemClear();

              // me.navCtrl.pop();

            });

          });
        });
      });
    });
  }

  async getRetailPrice(order){
    debugger;
    var me = this;
    // let loader = await me.loadingCtrl.create({message: "validating contract price...", backdropDismiss: true});
    // loader.present();

    if(!me.customer || me.customer.length == 0) {
      me.customer = Configuration.CustomerRecord;
    }

    var _intLocation = me.globalInfo['intLocation'];
    if(me.sites) {
      if(me.sites.length > 0) {
        _intLocation = me.currentOrder['intLocationId'];
      }
    }

    var _strLocationNumber = me.globalInfo['strLocationNumber'];
    if(me.sites) {
      if(me.sites.length > 0) {
        _strLocationNumber = me.currentOrder['strLocation']
      }
    }

    let customerNo = order['strCustomerNumber'] || me.customer['strCustomerNumber'] || me.currentOrder['strCustomerNo']  || me.currentOrder['strCustomerNumber'] || me.invoice[0].strCustomerNo;
    let customerSpecialPricing = await me.commonSQL.getDataQuery('SELECT * FROM tblCustomerSpecialPricing where strItemNo = \'' + order.strItemNo + '\' and intEntityId = \'' + me.customer['intEntityId'] + '\' and intLocationId = \'' + me.globalInfo.intLocation + '\' LIMIT 1');

    if (customerSpecialPricing.length > 0){

        return customerSpecialPricing[0]['dblPrice'];
    }
    else if (me.customer['strLevel'] != null && me.customer['strLevel'] != '') {
        // me.applyMultiLevelPricing(order);
        let hasMultilevel = await me.commonSQL.getDataQuery('SELECT * FROM tblCustomerMultiLevelPricing where dtmEffectiveDate <= date(\'now\') and strPriceLevel = \'' + me.customer['strLevel'] + '\' and strItemNo = \'' + order.strItemNo + '\' and intEntityId = \'' + me.customer['intEntityId'] + '\' and intCompanyLocationPricingLevelId = \'' + _intLocation + '\' LIMIT 1');
        if(hasMultilevel.length > 0){
          let multiLevelPricing = await me.commonSQL.getDataQuery('SELECT * FROM tblCustomerMultiLevelPricing where dtmEffectiveDate <= date(\'now\') and dblMin <= \'0\' and dblMax >= \'0\' and strPriceLevel = \'' + me.customer['strLevel'] + '\' and strItemNo = \'' + order.strItemNo + '\' and intEntityId = \'' + me.customer['intEntityId'] + '\' and intCompanyLocationPricingLevelId = \'' + _intLocation + '\' LIMIT 1');

          return multiLevelPricing[0]['dblUnitPrice']
        }
        else {
          let price = await me.commonSQL.getDataQuery('SELECT * FROM tblInventoryItem where strLocationNumber = \'' + _strLocationNumber + '\' and strItemNo = \'' + order.strItemNo + '\' LIMIT 1');

          return price[0]['dblSalePrice'];
        }
    }
    else {
      let price = await me.commonSQL.getDataQuery('SELECT * FROM tblInventoryItem where strLocationNumber = \'' + _strLocationNumber + '\' and strItemNo = \'' + order.strItemNo + '\' LIMIT 1');

      return price[0]['dblSalePrice'];
    }

  }
  //#endregion

}
