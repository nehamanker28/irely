import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController, Platform, Events } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { Http } from '@angular/http';

import { ReportService } from '../../providers/irely/report-service';
import { i21syncDeviceService } from '../../providers/irely/i21syncdevice-service';
import { CommonSQL } from '../../core/framework/sqlite/implementation/common-sql';
import { MessageUtil } from '../../core/framework/message/message-util';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { DeviceToken } from '../../core/framework/push/models/device-token';

import { Order } from '../../core/models/order';
import { Location } from '../../core/models/location';
import { ConsumptionSite } from '../../core/models/consumptionsite';
import { Customer } from '../../core/models/customer';
import { DeliveryHistory } from '../../core/models/deliveryhistory';
import { Device } from '../../core/models/device';
import { Item } from '../../core/models/item';
import { ApplicableTaxCode } from '../../core/models/applicabletaxcode';
import { TaxCode } from '../../core/models/taxcode';
import { Terms } from '../../core/models/terms';
import { OrderSite } from '../../core/models/ordersite';
import { OrderItem } from '../../core/models/orderitem';
import { OrderTaxCode } from '../../core/models/ordertaxcode';
import { GlobalInfo } from '../../core/models/globalinfo';
import { CompanyPreference } from '../../core/models/CompanyPreference';
import { SyncDeviceData } from '../../core/models/syncdevicedata';
import { Shift } from '../../core/models/shift';
import { Payment } from '../../core/models/payment';
import { Invoice } from '../../core/models/invoice';
import { InvoiceItems } from '../../core/models/invoiceitems';
import { InvoiceTaxCodes } from '../../core/models/invoicetaxcodes';
import { OutOfGas } from '../../core/models/outofgas';
import { ContractHeader } from '../../core/models/contractheader';
import { ContractDetail } from '../../core/models/contractdetail';

import { SyncDeviceDataBRL } from '../../core/brl/implementation/syncdevicedata';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { LocationBRL } from '../../core/brl/implementation/location';
import { InvoiceBRL } from '../../core/brl/implementation/invoice';
import { InvoiceItemsBRL } from '../../core/brl/implementation/invoiceitems';
import { InvoiceTaxCodesBRL } from '../../core/brl/implementation/invoicetaxcodes';
import { ShiftBRL } from '../../core/brl/implementation/shift';
import { OutOfGasBRL } from '../../core/brl/implementation/outofgas';
import { Configuration } from '../../core/framework/common/configuration';
import { OrderBRL } from '../../core/brl/implementation/order';
import { PaymentBRL } from '../../core/brl/implementation/payment';

@IonicPage()
@Component({
  selector: 'page-shift-main',
  templateUrl: 'shift-main.html',
})
export class ShiftMainPage extends BaseService<DeviceToken> {
  startDate: string;
  endDate: string;
  startDateInterval: any;
  endDateInterval: any;
  startShiftStatus: boolean = false;
  endShiftStatus: boolean = true;
  truckNumberStatus: boolean = false;
  LocationStatus: boolean = false;
  location: object = [];
  invoice: object = [];
  invoiceTotal: number = 0;  
  payment: object = [];
  paymentTotal: number = 0;
  data: object = [];
  strLocation: string;
  intLocation: number;
  globalInfo: any;
  counter: number = 0;
  totalOrderReceived: string = '0';
  itemOrderItem: any;  
  itemOrderItemTaxCode: any;
  driver: string = '';

  pdfObj = null;
  tmAlerts = [];
  

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public loadingCtrl: LoadingController, 
              private messageUtil: MessageUtil,
              public alertCtrl: AlertController, 
              private globalBRL: GlobalInfoBRL, 
              private locationBRL: LocationBRL,
              private invoiceBRL: InvoiceBRL,
              private InvoiceItemsBRL: InvoiceItemsBRL,
              private InvoiceTaxCodesBRL: InvoiceTaxCodesBRL,
              private shiftBRL: ShiftBRL,
              private OutOfGasBRL: OutOfGasBRL,
              private orderBrl: OrderBRL,
              private syncDeviceDataBRL: SyncDeviceDataBRL,
              private i21syncDeviceService: i21syncDeviceService,
              private paymentBRL: PaymentBRL,
              private sqliteBRL: CommonSQL,
              private events: Events,
              public http: Http,
              private reportService: ReportService,
              private keyboard: Keyboard) {
                super(http);
  }

  ngAfterViewInit() {
    var me = this;
    console.log('Shift Main');

    me.shiftSetup();
    me.locationSetup();   
    me.userGlobalInfo(); 
    me.getInvoice(); 
    me.getPayment();
  }  

  hideKeyboard() {
    this.keyboard.close();
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
    });
  }

  //#region SETUP

  shiftSetup() {
    var me = this;
    var _global = new GlobalInfo();
    me.globalBRL.createTable(_global).then(res=>{
      me.globalBRL.getRecord(_global).then(res => {
        me.data = res;
        console.log(me.data);

        if(me.data['intLocation'] == null) {
          me.data['intLocation'] = Configuration.DefaultLocation;
        }

        me.driver = (me.data['intDriverNumber'] || '') + ' - ' + (me.data['strFullName'] || '');

        if(res['ysnShiftOnGoing'] == 'true' || res['ysnShiftOnGoing'] == true) {
          me.ongoingShiftSetup(res);
        }
        else{
          me.noShiftStartingSetup();
        }      
      });
    });
  }

  noShiftStartingSetup(){
    var me = this;
    var options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
    };  
    var startRefresh = function() {
      var date = new Date();        
      me.startDate = date.toLocaleTimeString("en-US", options);
    };

    if(me.data['dblOdometerStart'] == null) {
      me.data['dblOdometerStart'] = 0;
      me.data['dblTotalizer1Start'] = 0;
      me.data['dblTotalizer2Start'] = 0;
    }

    me.data['dblOdometerEnd'] = 0;
    me.data['dblTotalizer1End'] = 0;
    me.data['dblTotalizer2End'] = 0;
    
    me.startDateInterval = setInterval(function(){ startRefresh() }, 500);  
  }

  ongoingShiftSetup(record: any) {
    var me = this;
    me.startShiftStatus = true;
    me.endShiftStatus = false;
    me.truckNumberStatus = true;
    me.LocationStatus = true;


    var options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
    };
    me.startDate = new Date(record['dtmStartShiftDate']).toLocaleTimeString("en-US", options);
  }

  locationSetup() {
    var me = this;    
    me.locationBRL.getByQuery('select * from location order by strLocationName').then(res => {
      console.log(res);
      this.location = res;
    });

    // var _location = new Location();
    // me.locationBRL.get(_location).then(res => {
    //   console.log(res);
    //   this.location = res;
    // });
  }

  getInvoice() {
    var me = this;
    me.invoiceBRL.getByQuery('select invoice.strCustomerNo, invoice.strCustomerName, invoice.strInvoiceNo, invoiceitems.strItemNo, invoiceitems.strItemDescription, invoiceitems.dblQuantity, invoiceitems.dblPrice from invoice left join invoiceitems on invoice.intOrderId = invoiceitems.intOrderId order by strItemNo').then(res => {
      console.log(res);
      this.invoice = res;
    });
  }

  getPayment() {
    var me = this;
    me.invoiceBRL.getByQuery('select * from payment').then(res => {
      console.log(res);
      this.payment = res;
    });
  }

  //#endregion

  //#region EVENTS

  locationChange(event) {
    console.log(event);
    this.strLocation = event.strLocationName;
    this.intLocation = event.intCompanyLocationId;
    this.data['strLocation'] = this.strLocation;
    this.data['intLocation'] = this.intLocation;
  }

  //#endregion

  //#region FUNCTIONS

  formatDate(value)
  {
    return value.getMonth()+1 + "/" + value.getDate() + "/" + value.getFullYear() + ' ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
  }

  getDateFormat(value) {
    var options = {  
      year: "numeric", month: "short",  
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
    };  
    return value.toLocaleTimeString("en-US", options);
  }

  updateDeviceDataList(item: SyncDeviceData, records: any, entity: any, data: any) {
    var me = this,
        _now = new Date();

    return new Promise ((resolve, reject) => {

      me.sqliteBRL.createTable(entity).then(res => {
        console.log(item);
        console.log(records);
        console.log(entity);
        console.log(data);
        console.log(records.length);

        if(records.length < 1 || records['total'] < 1){
          me.counter++;
          resolve(res);
        }
        me.orderBrl.addBulk(entity,data).then(res => {
          item.dtmTableLastUpdated = _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString();

          var record = new SyncDeviceData();
          record.dtmTableLastUpdated = item.dtmTableLastUpdated;
          record.intTableStatus = item.intTableStatus;
          record.strDisplayName = item.strDisplayName;
          record.strTableName = item.strTableName;
          record.ysnTableWithErrors = item.ysnTableWithErrors;
          record.intTotal = records.total || records.length;

          me.syncDeviceDataBRL.update(record).then(res => {
            console.log(res);
            me.counter++;
            resolve(res);
          });        
          
        }) ;
      });
    });    
  }

  clearInputValue(elem) {
    elem.getElementRef().nativeElement.children[0].select();
  }

  //#endregion


  //#region BUTTONS

  startShift(record: any) {
    var me = this;
    console.log(record);

    var location = JSON.stringify(me.location);
    var strLocationName = JSON.parse(location).filter(function (item) {
      if(item.intCompanyLocationId == record.intLocation){
        return item.strLocationName;
      }
      console.log(item);
    });

    if(strLocationName.length > 0) {
      me.data['strLocation'] = strLocationName[0].strLocationName;
      me.data['intLocation'] = strLocationName[0].intCompanyLocationId;
    }

    if(me.data['dblOdometerStart'] == null || me.data['dblOdometerStart'] == 0) {
      let confirm = this.alertCtrl.create({
        message: 'Odometer (start) is required.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      confirm.present();
      return;
    }

    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to start a new shift?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {

            var loader = this.loadingCtrl.create({content: "Starting shift...", enableBackdropDismiss: true});
            loader.present();

            var _shift = new Shift();
            _shift.intDriverId = me.globalInfo.intDriverNumber;
            _shift.intLocationId = me.data['intLocation'];
            _shift.intShiftNumber = (me.globalInfo.intShiftCounter || 0) + 1;
            _shift.dtmShiftDate =  new Date(me.startDate);
            _shift.dtmStartTime =  new Date(me.startDate);

            console.log(_shift);

            me.postraw('mobilebilling/api/shift/startshift', {intDriverId: me.globalInfo.intDriverNumber, intLocationId: me.data['intLocation'], intShiftNumber: _shift.intShiftNumber, dtmShiftDate: _shift.dtmShiftDate, dtmStartTime: _shift.dtmStartTime}).subscribe(data => { 
              console.log(data);
              console.log(JSON.parse(data._body));

              var _data = JSON.parse(data._body);
              
              clearInterval(this.startDateInterval);
              me.startShiftStatus = true;
              me.endShiftStatus = false;
              me.truckNumberStatus = true;
              me.LocationStatus = true;
              me.data['intShiftCounter'] = (me.globalInfo.intShiftCounter || 0) + 1; //daily counter
              me.data['intShiftId'] = _data[0].intShiftId;
              me.driver = (me.data['intDriverNumber'] || '') + ' - ' + (me.data['strFullName'] || '');

              //Start Shift Process
              var updateRecord = new GlobalInfo();
              updateRecord.dtmStartShiftDate = new Date(me.startDate);            
              updateRecord.intShiftCounter = (me.globalInfo.intShiftCounter || 0) + 1; //daily counter
              updateRecord.intShiftId = _data[0].intShiftId;
              updateRecord.ysnShiftOnGoing = true;
              updateRecord.intLocation = record.intLocation;
              updateRecord.strLocation = me.data['strLocation'];
              updateRecord.dblOdometerStart = me.data['dblOdometerStart'];
              updateRecord.dblOdometerEnd = me.data['dblOdometerEnd'];
              me.globalBRL.update(updateRecord);

              //Start Shift Process
              var addRecord = new Shift();
              addRecord.dtmShiftDate = updateRecord.dtmStartShiftDate;
              addRecord.dtmStartTime = updateRecord.dtmStartShiftDate;
              addRecord.intLocationId = record.intLocationId;
              addRecord.strLocationName = me.data['strLocation'];
              addRecord.intShiftId = updateRecord.intShiftId;
              addRecord.intShiftNumber = updateRecord.intShiftCounter;
              addRecord.strTruckName = record.strTruckNumber;
              addRecord.intDriverId = me.globalInfo.intDriverNumber;
              me.shiftBRL.add(addRecord);

              loader.dismiss();
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

  receiveOrder(record: any) {
    console.log(record);

    var me = this;  
    me.counter = 0;

    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            let loader = me.loadingCtrl.create({content: "Fetching tables...", enableBackdropDismiss: true});
            loader.present();
            var refresh = function() {
              if (me.counter >= 3) {
                loader.dismiss();
                me.counter = 0;

                var _date = new Date();
                record.dtmReceivedOrders = me.getDateFormat(_date);

                var _record = new GlobalInfo();
                _record.intGlobal = record.intGlobal;
                _record.dtmReceivedOrders = record.dtmReceivedOrders;
                _record.strTotalOrderReceived = me.totalOrderReceived + ' Orders Received';
                me.globalBRL.update(_record);

                clearInterval(me.startDateInterval);

                me.navCtrl.setRoot(me.navCtrl.getActive().component);
              }
            }    
            me.startDateInterval = setInterval(function(){ refresh() }, 1000);

            var _record = new SyncDeviceData();
            var _default = me.syncDeviceDataBRL.defaultRecord(_record);
            console.log(_record);
            me.syncDeviceDataBRL.createTable(_record).then(res=> {
              // console.log(res);
              me.syncDeviceDataBRL.get(_record).then(res => {    
                console.log(res);
                if(res.length > 1) {
                  me.syncDeviceDataBRL.get(_record).then(res => {
                    var _intDriverNumber = me.data['intDriverNumber'];
                    var strFullName = me.data['strFullName'];

                    me.data = res;
                    me.data['intDriverNumber'] = _intDriverNumber;
                    me.data['strFullName'] = strFullName;
                    
                    for(var x = 0; x <= me.data['length'] - 1; x++) {
                      console.log(me.data[x]['strTableName']);
                      if(me.data[x]['strTableName'] == 'orders' || me.data[x]['strTableName'] == 'orderitem' || me.data[x]['strTableName'] == 'ordertaxcode') {
                        me.updateData(me.data[x]);
                      }
                    } 
                  });
                }
                else {
                  me.syncDeviceDataBRL.addBulk(_record,_default).then(res => {    
                    // console.log(res);
                    me.syncDeviceDataBRL.get(_record).then(res => {
                      const _intDriverNumber = me.data['intDriverNumber'];
                      const _strFullName = me.data['strFullName'];

                      me.data = res;
                      me.data['intDriverNumber'] = _intDriverNumber;
                      me.data['strFullName'] = _strFullName;

                      for(var x = 0; x <= me.data['length'] - 1; x++) {
                        console.log(me.data[x]['strTableName']);
                        if(me.data[x]['strTableName'] == 'orders' || me.data[x]['strTableName'] == 'orderitem' || me.data[x]['strTableName'] == 'ordertaxcode') {
                          me.updateData(me.data[x]);
                        }
                      } 
                    })
                  });
                }        
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

  receiveFullData(record: any) {
    console.log(record);

    var me = this;  
    me.counter = 0;

    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            let loader = me.loadingCtrl.create({content: "Fetching tables...", enableBackdropDismiss: true});
            loader.present();
            var refresh = function() {
              if (me.counter >= 14) {
                loader.dismiss();
                me.counter = 0;

                var _date = new Date();
                record.dtmReceivedFullData = me.getDateFormat(_date);

                var _record = new GlobalInfo();
                _record.intGlobal = record.intGlobal;
                _record.dtmReceivedFullData = record.dtmReceivedFullData;
                _record.strTotalOrderReceived = me.totalOrderReceived + ' Orders Received';
                
                console.log('default location');
                console.log(me.location);
                if(me.location['length'] > 0) {
                  _record.strLocation = me.location[0].strLocationName;
                  _record.intLocation = me.location[0].intCompanyLocationId;
                }                

                me.globalBRL.update(_record);                              

                clearInterval(me.startDateInterval);

                me.navCtrl.setRoot(me.navCtrl.getActive().component);
              }
            }    
            me.startDateInterval = setInterval(function(){ refresh() }, 1000);

            var _record = new SyncDeviceData();
            var _default = me.syncDeviceDataBRL.defaultRecord(_record);
            console.log(_record);
            me.syncDeviceDataBRL.createTable(_record).then(res=> {
              console.log(res);
              me.syncDeviceDataBRL.get(_record).then(res => {    
                console.log(res);
                if(res.length > 1) {
                  me.syncDeviceDataBRL.get(_record).then(res => {
                    const _intDriverNumber = me.data['intDriverNumber'];
                    const _strFullName = me.data['strFullName'];

                    me.data = res;
                    me.data['intDriverNumber'] = _intDriverNumber;
                    me.data['strFullName'] = _strFullName;

                    console.log(me.data);
                    for(var x = 0; x <= me.data['length'] - 1; x++) {
                      if(me.data[x]['ysnIncludeSyncAll'] != 'true') {
                        me.counter++;
                      }
                      else{
                        me.updateData(me.data[x]);
                      }
                    }
                  });
                }
                else {
                  me.syncDeviceDataBRL.addBulk(_record,_default).then(res => {    
                    console.log(res);
                    me.syncDeviceDataBRL.get(_record).then(res => {                      
                      const _intDriverNumber = me.data['intDriverNumber'];
                      const _strFullName = me.data['strFullName'];

                      me.data = res;
                      me.data['intDriverNumber'] = _intDriverNumber;
                      me.data['strFullName'] = _strFullName;
                      
                      console.log(me.data);
                      for(var x = 0; x <= me.data['length'] - 1; x++) {
                        if(me.data[x]['ysnIncludeSyncAll'] != 'true') {
                          me.counter++;
                        }
                        else{
                          me.updateData(me.data[x]);
                        }
                      } 
                    })
                  });
                }        
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

  updateData(item) {    
    var me = this;
    console.log(item);

    if(!item) return;

    switch(item.strTableName) {
      case 'orders':
          me.i21syncDeviceService.getOrder(me.globalInfo.intDriverNumber).subscribe(res=>{
            console.log(res);   

            if(res.total == 0) { me.counter++; return; }

            me.totalOrderReceived = res.total;

            let _rawData = res;
            let _entity = new Order();          
            me.sqliteBRL.dropTable(_entity).then(res => {              
              me.getOrderItem(me.itemOrderItem);
              return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
            });
          });
          break;
        case 'orderitem':
          // me.i21syncDeviceService.getOrderItem(me.globalInfo.intDriverNumber).subscribe(res=>{
          //   console.log(res);   

          //   if(res['total'] == 0) { me.counter++; return; }

          //   let _rawData = res;
          //   let _entity = new OrderItem();
          //   me.sqliteBRL.dropTable(_entity).then(res => {
          //     console.log(res);                                
          //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          //   });
          // });

          me.itemOrderItem = item;
          break;
        case 'ordertaxcode':
          // me.i21syncDeviceService.getOrderTaxCode(me.globalInfo.intDriverNumber).subscribe(res=>{
          //   console.log(res);   

          //   if(res['total'] == 0) { me.counter++; return; }

          //   let _rawData = res;
          //   let _entity = new OrderTaxCode();
          //   me.sqliteBRL.dropTable(_entity).then(res => {
          //     console.log(res);                                
          //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          //   });
          // });

          me.itemOrderItemTaxCode = item;
          break;
      case 'customer':
          me.i21syncDeviceService.getCustomer().subscribe(res=>{
            console.log(res);   

            if(res['total'] == 0) { me.counter++; return; }

            let _rawData = res;
            let _entity = new Customer();
            me.sqliteBRL.dropTable(_entity).then(res => {
              console.log(res);                                
              return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
            });
          });
          break;
      case 'consumptionsite':
          me.i21syncDeviceService.getConsumptionSite().subscribe(res=>{
            console.log(res);   

            if(res['total'] == 0) { me.counter++; return; }

            let _rawData = res;
            let _entity = new ConsumptionSite();
            me.sqliteBRL.dropTable(_entity).then(res => {
              console.log(res);                                
              return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
            });
          });
          break;            
      case 'deliveryhistory':
        me.i21syncDeviceService.getDeliveryHistory().subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.counter++; return; }

          let _rawData = res;
          let _entity = new DeliveryHistory();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;  
      case 'device':
        me.i21syncDeviceService.getDevice().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.counter++; return; }

          let _rawData = res;
          let _entity = new Device();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;   
      case 'item':
        me.i21syncDeviceService.getItem().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.counter++; return; }

          let _rawData = res;
          let _entity = new Item();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;
      case 'applicabletaxcode':
        me.i21syncDeviceService.getApplicableTaxCode().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.counter++; return; }

          let _rawData = res;
          let _entity = new ApplicableTaxCode();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;
      case 'taxcode':
        me.i21syncDeviceService.getTaxCode().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.counter++; return; }

          var _res = res['data'];          
          var _newRes = {data:[],success:true,total:100};
          for(var x = 0; x <= _res.length - 1; x++) {
            for(var y = 0; y <= _res[x]['tblSMTaxCodeRates'].length - 1; y++) {
              var _record = {};                          
              _record['intTaxCodeId'] = _res[x].intTaxCodeId;
              _record['strTaxCode'] = _res[x].strTaxCode;
              _record['dblRate'] = _res[x]['tblSMTaxCodeRates'][y].dblRate;
              _record['dtmEffectiveDate'] = _res[x]['tblSMTaxCodeRates'][y].dtmEffectiveDate;
              _record['strCalculationMethod'] = _res[x]['tblSMTaxCodeRates'][y].strCalculationMethod;
              _record['intTaxCodeRateId'] = _res[x]['tblSMTaxCodeRates'][y].intTaxCodeRateId;
              _newRes['data'].push(_record);
            }
          }

          _newRes['total'] = _newRes['data'].length;

          console.log(_newRes);

          let _rawData = _newRes;
          let _entity = new TaxCode();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;
      case 'terms':
        me.i21syncDeviceService.getTerms().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.counter++; return; }

          let _rawData = res;
          let _entity = new Terms();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;
      case 'location':
        me.i21syncDeviceService.getLocation(me.globalInfo.ContactParentId).subscribe(res=>{
          console.log(res);   
          var _res = res;
          
          if(res['total'] == 0 || res['length'] == 0) { me.counter++; return; }

          let _rawData = _res;
          let _entity = new Location();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;
      case 'contractheader':
        me.i21syncDeviceService.getContractHeader().subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.counter++; return; }

          let _rawData = res;
          let _entity = new ContractHeader();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);              
          });
        });
        break;
      case 'contractdetail':
        me.i21syncDeviceService.getContractDetail().subscribe(res=>{
          console.log(res);   
          var _res = res;
          
          if(res['total'] == 0 || res['length'] == 0) { me.counter++; return; }
          // if(res['data'] == null || res['data'] == undefined) {
          //   _res = { data: res, total: res['length'], sucess: true };
          //   console.log(_res);
          // }    

          let _rawData = _res;
          let _entity = new ContractDetail();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);  
          });
        });
        break;
      case 'configuration':
        me.i21syncDeviceService.getConfiguration().subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.counter++; return; }

          let _rawData = res;
          let _entity = new CompanyPreference();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
          });
        });
        break;
      default:
          console.log(item);
    }
  }

  getOrderItem(item) {
    var me = this;
    me.i21syncDeviceService.getOrderItem(me.globalInfo.intDriverNumber).subscribe(res=>{
      console.log(res);   

      if(res['total'] == 0) { me.counter++; return; }

      let _rawData = res;
      let _entity = new OrderItem();
      me.sqliteBRL.dropTable(_entity).then(res => {
        me.getOrderItemTax(me.itemOrderItemTaxCode);
        return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
      });
    });
  }

  getOrderItemTax(item) {
    var me = this;
    me.i21syncDeviceService.getOrderTaxCode(me.globalInfo.intDriverNumber).subscribe(res=>{
      console.log(res);   

      if(res['total'] == 0) { me.counter++; return; }

      let _rawData = res;
      let _entity = new OrderTaxCode();
      me.sqliteBRL.dropTable(_entity).then(res => {
        console.log(res);                                
        return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
      });
    });
  }



  openLoadInventory(record: any) {
    this.events.subscribe('loadInventoryProcess', (paramsVar) => {
      console.log(paramsVar);

      record.dtmLoadInventory = paramsVar.dtmLoadInventory;      
      this.events.unsubscribe('loadInventoryProcess');
    });

    this.navCtrl.push("ShiftLoadinventoryPage",record);
  }

  openInspection(record: any) {
    this.events.subscribe('truckinspection', (paramsVar) => {
      console.log(paramsVar);

      record.dtmTruckInspection = paramsVar.dtmTruckInspection;      
      this.events.unsubscribe('truckinspection');
    });

    this.navCtrl.push("ShiftInspectionPage",record);
  }

  openHosepipingChek(record: any) {
    this.events.subscribe('hosepipingcheck', (paramsVar) => {
      console.log(paramsVar);

      record.dtmHosePipingCheck = paramsVar.dtmHosePipingCheck;      
      this.events.unsubscribe('hosepipingcheck');
    });

    this.navCtrl.push("ShiftHosepipingcheckPage",record);
  }

  openShiftReport() {
    this.navCtrl.push("ShiftreportPage");    
  }

  endShift() {
    var me = this;
    let confirm = this.alertCtrl.create({
      message: 'Are you sure you want to end the current shift?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            me.startShiftStatus = false;
            me.endShiftStatus = true;
            me.truckNumberStatus = true;
            me.LocationStatus = true;
            
            //End Shift Process
            me.noShiftStartingSetup();
            var updateRecord = new GlobalInfo();   
            updateRecord.ysnShiftOnGoing = false;
            // updateRecord.dblOdometerEnd = 0;
            updateRecord.dblOdometerEnd = me.data['dblOdometerEnd'];
            updateRecord.dblTotalizer1End = 0;
            updateRecord.dblTotalizer2End = 0;            
            me.globalBRL.update(updateRecord);

            //End Shift Process
            var updateEndShift = new Shift();
            updateEndShift.dtmEndTime = new Date();
            me.shiftBRL.update(updateEndShift);

            me.userGlobalInfo(); 

            var options = {  
              year: "numeric", month: "short",  
              day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"  
            };
            me.endDate = new Date().toLocaleTimeString("en-US", options);
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

  buildSendData() {
    var me = this;
    var _shift = [],
        _invoice = [],
        _invoiceitems = [],
        _invoicetaxcodes = [],
        _payments = [],
        _outofgass = [],
        _data = [],
        _tmAlertsInvoices = [];

    let loader = me.loadingCtrl.create({content: "Sending data..."});
    loader.present();

    me.shiftBRL.get(new Shift).then(res => {
      _shift = res;
      me.invoiceBRL.get(new Invoice).then(res => {
        _invoice = res;
        console.log(_invoice);
        me.InvoiceItemsBRL.get(new InvoiceItems).then(res => {
          _invoiceitems = res;
          me.InvoiceTaxCodesBRL.get(new InvoiceTaxCodes).then(res => {
            _invoicetaxcodes = res;

            _data = _shift[0];
            _data['tblMBILInvoices'] = [];

            for(var x = 0; x<=_invoice.length-1; x++) {
              var _temp_invoice = [];
              _temp_invoice = _invoice[x];

              var _tmAlerts = {
                strCustomerNumber: _temp_invoice['strCustomerNumber'],
                intSiteNumber: _temp_invoice['intSiteNumber'],
                dtmDateDelivery: _temp_invoice['dtmDeliveryDate'],
                dblQuantity: _temp_invoice['dblQuantity'],
                dblPrice: _temp_invoice['dblPrice'],
                dblTotal: _temp_invoice['dblTotal']
              };
              me.tmAlerts.push(_tmAlerts);

              if(_invoice[x].ysnVoided != 'true' && _invoice[x].ysnSendToOffice == 'false') {
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
            }

            console.log(_data);

            me.paymentBRL.get(new Payment).then(res => {
              _payments = res;

              _data['tblMBILPayments'] = [];
              
              for(var x = 0; x<=_payments.length-1; x++) {
                var _temp_payment = [];
                _temp_payment = _payments[x];                  

                if(_payments[x].ysnVoided != 'true' && _payments[x].ysnSendToOffice == 'false') {
                  console.log(_temp_payment);
                  _data['tblMBILPayments'].push(_temp_payment);
                }
              }

              me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => { 
                console.log('syncentireshift');
                console.log(res);
                loader.dismiss();

                let confirm = this.alertCtrl.create({
                  message: 'Data sucessfully sent.'
                });
                confirm.present();

                // TM Alerts
                // 1 order 1 site 1 item
                for(var x = 0; x<= me.tmAlerts.length-1; x++) {
                  me.postraw('/tankmanagement/api/consumptionsite/emaildeliveries', me.tmAlerts[x]).subscribe(res => { 
                    console.log('emaildeliveries');
                    console.log(res);
                  });
                }

              });

            });

          });
        });
      });
    });
  }

  //#endregion

  //#region REPORT

  buildInvoiceReport() {
    var me = this;
    var _itemContent = [];    
    var _invoiceContent = [];
    var _previousItem = '';
    var _item = {};
    var _body = {style:'',color:'',table:{widths:[],headerRows:0,body:[]},layout:''};
    var _total = {};
    var _itemQuantity = 0;
    var _itemTotal = 0;
    
    for(var x = 0; x <= me.invoice['length'] - 1; x++) {      
      var record = me.invoice[x];      
      var _itemAmount = (record.dblQuantity || 0 ) * (record.dblPrice || 0);

      if(_previousItem != me.invoice[x].strItemNo) {
        _itemContent = [];
        _itemTotal = 0;
        _itemQuantity = 0;
        _item = {text: 'Item: ' + record.strItemNo + ' - ' + record.strItemDescription, style: 'tableHeader', margin: [0, 5, 0, 3]};
        _body = {style: 'tableExample',color: '#444',table: {widths: [20, 65, '*', '*', 65, 80],headerRows: 1,body: []},layout: 'noBorders'};
        _body.table.body.push([{text: '', alignment: 'left'}, {text: record.strCustomerNo, alignment: 'left'}, {text: record.strCustomerName, alignment: 'left'}, {text: record.strInvoiceNo, alignment: 'left'},{text: record.dblQuantity || 0, alignment: 'right'},{text: _itemAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}]);
      }
      else {
        _body.table.body.push([{text: '', alignment: 'left'}, {text: record.strCustomerNo, alignment: 'left'}, {text: record.strCustomerName, alignment: 'left'}, {text: record.strInvoiceNo, alignment: 'left'},{text: record.dblQuantity || 0, alignment: 'right'},{text: _itemAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}]);
      }

      _itemTotal = _itemTotal + _itemAmount;
      _itemQuantity = _itemQuantity + record.dblQuantity;      
      _previousItem = me.invoice[x].strItemNo;

      var _next = 0;
      if(me.invoice[x+1]) {
        _next = _next + 1;
      }
      if(_previousItem != me.invoice[x+_next].strItemNo || me.invoice[x+1] == null) {
        me.invoiceTotal = me.invoiceTotal + _itemTotal;
        _total = {style: 'tableExample',color: '#444',table: {widths: [20, 65, '*', '*', 65, 80],headerRows: 1,
            body: [
              [
                '','','', 
                {text: 'Item Total:', alignment: 'right', style: 'tableHeader'},
                {text: _itemQuantity, alignment: 'right', style: 'tableHeader'},
                {text: '$' + _itemTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader'}
              ],
            ]
          },
          layout: 'noBorders'
        };

        _itemContent.push(_item);    
        _itemContent.push(_body);
        _itemContent.push(_total);
        _invoiceContent.push(_itemContent);
      }      
    }

    return _invoiceContent;
  }

  buildPaymentReport() {
    var me = this;
    var _itemContent = [];

    var _body = {
                  style: 'tableExample',
                  color: '#444',
                  table: {
                    widths: [20, 65, '*', '*', 65, 80],
                    headerRows: 1,
                    body: []
                  },
                  layout: 'noBorders'
                };

    for(var x = 0; x <= me.payment['length'] - 1; x++) {      
      var record = me.payment[x];
      _body.table.body.push([{text: '', alignment: 'left'}, {text: record.strCustomerNo || '', alignment: 'left'}, {text: record.strCustomerName || '', alignment: 'left'}, {text: record.strPaymentNo || '', alignment: 'left'},{text: record.strMethod || 'Check', alignment: 'right'},{text: record.dblPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right'}]);
      me.paymentTotal = me.paymentTotal + record.dblPayment;
    }

    _itemContent.push(_body);
    
    return _itemContent;
  }

  reviewShift() {
    var me = this;    
    var _date = me.startDate || me.getDateFormat(new Date());    
    var _dateonly = _date.substring(0,_date.lastIndexOf(','));
    var _timeonly = _date.substring(_date.lastIndexOf(',')+1,_date.length);
    var _dateEnd = me.endDate || me.getDateFormat(new Date());
    var _timeEndOnly = _dateEnd.substring(_dateEnd.lastIndexOf(',')+1,_dateEnd.length);
    var _invoiceContent = [];
    var _paymentContent = [];

    me.invoiceTotal = 0;    
    _invoiceContent = me.buildInvoiceReport();
    console.log(_invoiceContent);

    _paymentContent = me.buildPaymentReport();
    console.log(_paymentContent);

    //TIME DIFFERENCE
    var _startTime: any = _timeonly;
    var _endTime: any = _timeEndOnly;
    var _shiftTimeDifference: any = '';
    var _dayDifference = 1;

    if(_startTime.indexOf('PM') > 0 && _endTime.indexOf('AM') > 0) _dayDifference = 2;

    var startDate: any = new Date("January 1, 2000 " + _startTime);
    var endDate: any = new Date("January " + _dayDifference + ", 2000 " + _endTime);
    var timeDiff = Math.abs(startDate - endDate);

    var hh: any = Math.floor(timeDiff / 1000 / 60 / 60);
    if(hh < 10) {
        hh = '0' + hh;
    }
    timeDiff -= hh * 1000 * 60 * 60;
    var mm: any = Math.floor(timeDiff / 1000 / 60);
    if(mm < 10) {
        mm = '0' + mm;
    }
    timeDiff -= mm * 1000 * 60;
    var ss: any = Math.floor(timeDiff / 1000);
    if(ss < 10) {
        ss = '0' + ss;
    }

    _shiftTimeDifference = hh + ":" + mm + ":" + ss;

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
          { text: 'Driver\'s Shift Report', style: 'header' },    
          {
            style: 'tableExample',
            color: '#444',
            table: {
              widths: [40, '*', 40, 118, 40, 40],
              body: [ 
                [{text: 'Driver:', alignment: 'left', style: 'tableHeader'}, {text: me.data['strFullName'] || '', alignment: 'left'}, {text: 'Date:', alignment: 'left', style: 'tableHeader'}, {text: _dateonly, alignment: 'left'}, {text: 'Shift:', alignment: 'left', style: 'tableHeader'}, {text: me.data['intShiftCounter'] || '0', alignment: 'left'}]
              ]
            },
            layout: 'noBorders'
          },
          {text: '\n'},
          {
            style: 'tableExample',
            color: '#444',
            table: {
              widths: [70, 78, 78, 78, 5, 65, 25, '*'],
              headerRows: 1,
              body: [
                [{text: '', alignment: 'left', style: 'tableHeader'}, {text: 'Start', alignment: 'left', style: 'tableHeader'}, {text: 'End', alignment: 'left', style: 'tableHeader'}, {text: 'Diff', alignment: 'left', style: 'tableHeader'},'','',{text: 'No.', alignment: 'left', style: 'tableHeader'},{text: 'Amount', alignment: 'left', style: 'tableHeader'}],
                [{text: 'Time:', alignment: 'left', style: 'tableHeader'}, {text: _timeonly || '', alignment: 'left'}, {text: _timeEndOnly || '', alignment: 'left'}, {text: _shiftTimeDifference || '', alignment: 'left'},'',{text: 'Invoices:', alignment: 'left', style: 'tableHeader'},me.invoice['length'], '$' + me.invoiceTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')],
                [{text: 'Odometer:', alignment: 'left', style: 'tableHeader'}, {text: me.data['dblOdometerStart'] || '0', alignment: 'left'}, {text: me.data['dblOdometerEnd'] || '0', alignment: 'left'}, {text: (me.data['dblOdometerStart'] || 0) - (me.data['dblOdometerEnd'] || 0), alignment: 'left'},'',{text: 'Receipts:', alignment: 'left', style: 'tableHeader'},me.payment['length'],'$' + me.paymentTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')],
                [{text: 'Meter 1:', alignment: 'left', style: 'tableHeader'}, {text: me.data['dblTotalizer1Start'] || '0', alignment: 'left'}, {text: me.data['dblTotalizer1End'] || '0', alignment: 'left'}, {text: (me.data['dblTotalizer1Start'] || 0) - (me.data['dblTotalizer1End'] || 0), alignment: 'left'},'','','',''],
                [{text: 'Meter 2:', alignment: 'left', style: 'tableHeader'}, {text: me.data['dblTotalizer2Start'] || '0', alignment: 'left'}, {text: me.data['dblTotalizer2End'] || '0', alignment: 'left'}, {text: (me.data['dblTotalizer2Start'] || 0) - (me.data['dblTotalizer2End'] || 0), alignment: 'left'},'','','',''],
              ]
            },
            layout: 'noBorders'
          },
          {text: '\n'},
          {text: '\n'},
          { text: 'Deliveries by Item', alignment: 'left', style: 'tableHeader', margin: [0, 0, 0, 10], },    
          {
            style: 'tableExample',
            color: '#444',
            table: {
              widths: [20, 65, '*', '*', 65, 80],
              headerRows: 1,
              body: [
                [{text: '', alignment: 'left', style: 'tableHeader'}, {text: 'Cust No:', alignment: 'left', style: 'tableHeader'}, {text: 'Name:', alignment: 'left', style: 'tableHeader'}, {text: 'Invoice No.', alignment: 'left', style: 'tableHeader'},{text: 'Quantity', alignment: 'right', style: 'tableHeader'},{text: 'Amount', alignment: 'right', style: 'tableHeader'}],
              ]
            },
            layout: 'noBorders'
          },
          {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
          // ++++++++++++++++++++++++++++++++++
          // BEGIN - DETAILS SHOULD BE DYNAMIC
          // ++++++++++++++++++++++++++++++++++
          // {text: 'Item: PRO - Propane Home Use', style: 'tableHeader', margin: [0, 5, 0, 3]},
          // {
          //   style: 'tableExample',
          //   color: '#444',
          //   table: {
          //     widths: [20, 65, '*', '*', 65, 80],
          //     headerRows: 1,
          //     body: [
          //       [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
          //         [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
          //     ]
          //   },
          //   layout: 'noBorders'
          // },
          // {
          //   style: 'tableExample',
          //   color: '#444',
          //   table: {
          //     widths: [20, 65, '*', '*', 65, 80],
          //     headerRows: 1,
          //     body: [
          //       ['','','', {text: 'Item Total:', alignment: 'right', style: 'tableHeader'},{text: 772.4, alignment: 'right', style: 'tableHeader'},{text: '$1,324.26', alignment: 'right', style: 'tableHeader'}],
          //     ]
          //   },
          //   layout: 'noBorders'
          // },

          // _invoiceContent.toString(),
          // {items: '\n'},

          // ++++++++++++++++++++++++++++++++++
          // END - DETAILS SHOULD BE DYNAMIC
          // ++++++++++++++++++++++++++++++++++
          {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
          {
            style: 'tableExample',
            color: '#444',
            margin: [0, 5, 0, 0],
            table: {
              widths: [20, 65, '*', '*', 65, 80],
              headerRows: 1,
              body: [
                ['','','', {text: 'Total Deliveries:', alignment: 'right', style: 'tableHeader'},'',{text: '$' + me.invoiceTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader'}],
              ]
            },
            layout: 'noBorders'
          },
          {text: '\n'},
          {text: '\n'},
          { text: 'Payment Receipts', alignment: 'left', style: 'tableHeader', margin: [0, 0, 0, 10] },    
          {
            style: 'tableExample',
            color: '#444',
            table: {
              widths: [20, 65, '*', '*', 65, 80],
              headerRows: 1,
              body: [
                [{text: '', alignment: 'left', style: 'tableHeader'}, {text: 'Cust No:', alignment: 'left', style: 'tableHeader'}, {text: 'Name:', alignment: 'left', style: 'tableHeader'}, {text: 'Receipt No.', alignment: 'left', style: 'tableHeader'},{text: 'Method', alignment: 'right', style: 'tableHeader'},{text: 'Amount', alignment: 'right', style: 'tableHeader'}],
              ]
            },
            layout: 'noBorders'
          },
          {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
          // ++++++++++++++++++++++++++++++++++
          // BEGIN - DETAILS SHOULD BE DYNAMIC
          // ++++++++++++++++++++++++++++++++++
          // {
          //   style: 'tableExample',
          //   color: '#444',
          //   table: {
          //     widths: [20, 65, '*', '*', 65, 80],
          //     headerRows: 1,
          //     body: [
          //       [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
          //         [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
          //     ]
          //   },
          //   layout: 'noBorders'
          // },

          // _paymentContent.toString(),

          // ++++++++++++++++++++++++++++++++++
          // END - DETAILS SHOULD BE DYNAMIC
          // ++++++++++++++++++++++++++++++++++
          {canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595-2*40, y2: 5, lineWidth: 1 }]},
          {
          style: 'tableExample',
          color: '#444',
          margin: [0, 5, 0, 0],
          table: {
            widths: [20, 65, '*', '*', 60, 85],
            headerRows: 1,
            body: [
              ['','','', {text: 'Total Receipts:', alignment: 'right', style: 'tableHeader'},'',{text: '$' + me.paymentTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader'}],
            ]
          },
          layout: 'noBorders'
          },
          {text: '\n'},
            
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
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        },
            story: {
              italic: true,
              alignment: 'center',
              width: '50%'
            },
            body: {
              fontSize: 12
            }
          },
          defaultStyle: {
              fontSize: 11.5
          }
    };

    console.log(docDefinition);

    // STARTING AT #9    
    if(_invoiceContent.length > 0) {
      if(_invoiceContent[0].length) {
        var _positionStart = 9;
        for(var x = 0; x <= _invoiceContent.length - 1; x++) {
          for(var y = 0; y <= _invoiceContent[x].length - 1; y++) {
            docDefinition['content'].splice(_positionStart+y, 0, _invoiceContent[x][y]);
          }    
          _positionStart = _positionStart + _invoiceContent[x].length;
        }
      }
    }
    
    // STARTING AT #16
    if(_paymentContent.length > 0) {
      _positionStart = _positionStart + 7;
      for(var x = 0; x <= _paymentContent.length - 1; x++) {
        docDefinition['content'].splice(_positionStart, 0, _paymentContent[x]);
        _positionStart = _positionStart + 1;
      }
    }

    var _now = new Date(),
        _filename = "Shift-Review_" +_now.getFullYear() + ("0"+(_now.getMonth()+1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours()+1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
    me.reportService.create(docDefinition, _filename, false, true);

  }  

  //#endregion



}
