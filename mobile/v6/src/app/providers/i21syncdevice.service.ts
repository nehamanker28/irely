import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { NavController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { Observable } from "rxjs";
import { GetRequest } from '../framework/_common/base/api';
import { Filter } from '../framework/_common/base/api';
import { of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Zip } from '@ionic-native/zip/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { Message } from '../framework/_common/base/message';
import { Token } from '../framework/_common/base/token';
import { Service } from '../framework/_common/base/service';
import { Storage } from '@ionic/storage';

import { CommonSQL } from '../framework/_common/sqlite/implementation/common-sql';
import { SyncDeviceDataBRL } from '../framework/brl/implementation/syncdevicedata';
import { GlobalInfoBRL } from '../framework/brl/implementation/globalinfo';

import { ARCustomer } from '../framework/models/tblARCustomer'
import { CategoryTax } from '../framework/models/tblCategoryTax';
import { CategoryTaxExemption } from '../framework/models/tblCategoryTaxExemption';
import { ContractExport } from '../framework/models/tblContractExport';
import { CustomerSpecialPricing } from '../framework/models/tblCustomerSpecialPricing';
import { CustomerTaxExemption } from '../framework/models/tblCustomerTaxExemption';
import { EntityLocation } from '../framework/models/tblEntityLocation';
import { FullTax } from '../framework/models/tblFullTax';
import { InventoryItem } from '../framework/models/tblInventoryItem';
import { MBILCompanyPreference } from '../framework/models/tblMBILCompanyPreference';
import { MBILOrder } from '../framework/models/tblMBILOrder';
import { MBILOrderItem } from '../framework/models/tblMBILOrderItem';
import { MBILOrderTaxCode } from '../framework/models/tblMBILOrderTaxCode';
import { SMLocation } from '../framework/models/tblSMLocation';
import { SMTerm } from '../framework/models/tblSMTerm';
import { SMTruck } from '../framework/models/tblSMTruck';
import { TMDeliveryHistory } from '../framework/models/tblTMDeliveryHistory';
import { TMSite } from '../framework/models/tblTMSite';
import { TMSiteDevice } from '../framework/models/tblTMSiteDevice';
import { tblSMCompanySetup } from '../framework/models/tblSMCompanySetup';

import { GlobalInfo } from '../framework/models/globalinfo';
import { HosepipingCheck } from '../framework/models/hosepipingcheck';
import { Invoice } from '../framework/models/invoice';
import { InvoiceItems } from '../framework/models/invoiceitems';
import { InvoiceTaxCodes } from '../framework/models/invoicetaxcodes';
import { Shift } from '../framework/models/shift';
import { SyncDeviceData } from '../framework/models/syncdevicedata';
import { User } from '../framework/models/user';
import { VehicleInspection } from '../framework/models/vehicleinspection';
import { OutOfGas } from '../framework/models/outofgas';
import { Payment } from '../framework/models/payment';
import { LoadInventory } from '../framework/models/loadinventory';
import { Tankwagon } from '../framework/models/tankwagon';
import { LineFlushAndTransfer } from '../framework/models/lineflushandtransfer';
import { OrderSite } from '../framework/models/ordersite';

import { HTTP } from '@ionic-native/http/ngx';

import { from,Subject,BehaviorSubject, fromEvent, merge,Observer} from "rxjs";
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class i21SyncDeviceService extends Service<Token> {

  counter: number = 0;
  globalInfo: any;

  totalOrderReceived: string = '0';
  itemOrderItem: any;
  itemOrderItemTaxCode: any;

  fullDataInterval: any;
  fullDataBufferInterval: any;
  receiveOrderInterval: any;
  refreshTableInterval: any;
  allOrders = [];
  previousOrders = [];
  newOrdersList =[];
  data = [];
  ordersInLocal = [];
  ordersInServer = [];
  notDeliveredInServerOrders = [];
  Invoice = [];
  tmUpdate = [];
  tmAlerts = {
    strCustomerNumber: '',
    intSiteNumber: '',
    dtmDateDelivery: '',
    dblQuantity: 0,
    dblPrice: 0,
    dblTotal: 0
  };
  private subject = new Subject<any>();

  public OrderData: any = [];
  public OrderSubject$ = new BehaviorSubject<any>(this.OrderData);
  OrderChanged$ = this.OrderSubject$.asObservable();

  public isNewOrder: boolean = false;
  public isNewOrderSubject$ = new BehaviorSubject<boolean>(this.isNewOrder);
  isNewOrderChanged$ = this.isNewOrderSubject$.asObservable();

  constructor(public http: HttpClient,
    public https: HTTP,
    public loadingCtrl: LoadingController,
    public commonSQL: CommonSQL,
    private syncDeviceDataBRL: SyncDeviceDataBRL,
    private globalBRL: GlobalInfoBRL,
    private message: Message,
    private zip: Zip,
    private file: File,
    // private transfer: FileTransfer,
    private fileOpener: FileOpener,
    private sqlitePorter: SQLitePorter,
    private datePipe: DatePipe,
    private storage: Storage) 
    {
    super(http, https);
  }


  // +++++++++ BULK ZIP PROCESS +++++++++

  getGenerateExport(driverid, tablename, orderIds) : Promise<any> {
    let me = this;
    var _filename = "";

    return new Promise((resolve, reject) => {

      console.log('=======> START GENERATE EXPORT');

      console.log(driverid);
      console.log(tablename);
      console.log(orderIds);

      var _tablestogenerate = "";
      if(tablename == "complete_order") {
        _tablestogenerate = tablename;

        // me.commonSQL.executeQuery('DELETE FROM tblMBILOrder WHERE strOrderNumber NOT IN (' + orderIds + ')').then((res) => {
        //   console.log(res);          
        //   console.log('orders deleted');
        // });
      }
      else if(!Array.isArray(tablename)) {
        _tablestogenerate = tablename;
      }                  
      
      me.getrawNoRequestPromise('mobilebilling/api/order/getgenerateexport?driverId=' + driverid + '&tablename=' + _tablestogenerate + "&orders=" + orderIds).then((exportResponse) => {
        console.log('generated file: ' + exportResponse);
        if(tablename == "complete_order") {
          me.commonSQL.executeQuery('DELETE FROM tblMBILOrder WHERE strOrderNumber NOT IN (' + orderIds + ')').then((res) => {
            console.log(res);          
            console.log('orders deleted');
          });
        }
        else{

        }

        var _data = JSON.parse(exportResponse);
        console.log(_data);
        _filename = _data['data'];
        console.log(_filename);

        me.file.checkDir(me.file.dataDirectory, 'export_data').then(res => {
          me.getZipAndExtract(_filename, tablename).then((res) => {
            console.log('IMPORTING getGenerateExport DONE ==> ', res);
            resolve(res);
          },
            err => {
              console.log(err);
              reject(err);
            });
        }
        ).catch(err => {
          console.log(err);
          me.file.createDir(me.file.dataDirectory, 'i21_files', false).then(res => {
            console.log('folder created');
            me.file.createDir(me.file.dataDirectory, 'export_data', false).then(res => {
              console.log('folder created');
              me.getZipAndExtract(_filename, tablename).then((res) => {
                console.log('IMPORTING getGenerateExport DONE ==> ', res);
                resolve(res);
              },
                err => {
                  console.log(err);
                  reject(err);
                });
            });
          });
        });
      },
        err => {
          console.log(err);
          reject(err);
        });

    });

  }

  getZipAndExtract(filename, tablenames) {
    var me = this;
    var _filename = filename;

    return new Promise((resolve, reject) => {

      me.getzipPromise('Export/MobileBilling/' + 'mobile_billing_' + _filename + '.zip').then((response) => {
        console.log('downloaded zip: ' + response);

        me.file.checkDir(me.file.dataDirectory, 'export_data').then(res => {
          console.log('inside folder');

          me.file.writeFile(me.file.dataDirectory + 'export_data/', 'mobile_billing_' + _filename + '.zip', response, { replace: true }).then(fileEntry => {
            console.log('created zip file: ' + fileEntry);

            me.zip.unzip(me.file.dataDirectory + 'export_data/' + 'mobile_billing_' + _filename + '.zip', me.file.dataDirectory + "i21_files/", (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
              .then((result) => {
                console.log('unzip result: ' + result);
 
                if (result === 0) {
                  console.log('SUCCESS'); 

                  // var _jsonFiles = [
                  //                     'tblCustomerSpecialPricing',
                  //                     'tblInventoryItem',
                  //                     'tblContractExport',
                  //                     'tblFullTax',
                  //                     'tblCategoryTax',
                  //                     'tblEntityLocation',
                  //                     'tblCustomerTaxExemption',
                  //                     'tblCategoryTaxExemption',
                  //                     'tblARCustomer',
                  //                     'tblTMSite',
                  //                     'tblSMTruck',
                  //                     'tblTMDeliveryHistory',
                  //                     'tblTMSiteDevice',
                  //                     'tblSMTerm',
                  //                     'tblSMLocation',
                  //                     'tblMBILCompanyPreference',
                  //                     'tblMBILOrder',
                  //                     'tblMBILOrderItem',
                  //                     'tblMBILOrderTaxCode'
                  //                     'tblSMCompanySetup'
                  //                 ];         

                  var _jsonFiles = [];
                                  
                  if (tablenames == 'all') {
                    _jsonFiles = [
                                    'tblCustomerSpecialPricing',
                                    'tblCustomerMultiLevelPricing',
                                    'tblInventoryItem',
                                    'tblContractExport',
                                    'tblFullTax',
                                    'tblCategoryTax',
                                    'tblEntityLocation',
                                    'tblCustomerTaxExemption',
                                    'tblCategoryTaxExemption',
                                    'tblARCustomer',
                                    'tblTMSite',
                                    'tblSMTruck',
                                    'tblTMDeliveryHistory',
                                    'tblTMSiteDevice',
                                    'tblSMTerm',
                                    'tblSMLocation',
                                    'tblSMPaymentMethod',
                                    'tblMBILCompanyPreference',
                                    'tblMBILOrder', 
                                    'tblMBILOrderItem',
                                    'tblMBILOrderTaxCode',
                                    'tblSMCompanySetup'
                                ];       
                  }
                  else if(!Array.isArray(tablenames)) {
                    _jsonFiles.push(tablenames);
                  }  
                  else {
                    _jsonFiles = tablenames;
                  }

                  if(tablenames == "complete_order") {
                    _jsonFiles = [
                                    'tblMBILOrder',
                                    'tblMBILOrderItem',
                                    'tblMBILOrderTaxCode'
                                  ];
                  }

                  const _totalTable = _jsonFiles.length;
                  var _updateFlag = 0;

                  _jsonFiles.forEach(tablename => {
                    console.log(tablename)

                    var _file = tablename + _filename;

                    me.file.readAsBinaryString(me.file.dataDirectory + 'i21_files/', _file + ".json").then(content => {

                      me.commonSQL.importDataFromServer(content).then(res => {
                        console.log(tablename + '  IMPORTED SUCCESS ==> ', res);
                        var _now = new Date();

                        me.syncDeviceDataBRL.updateByQuery("UPDATE syncdevicedata SET dtmTableLastUpdated = '" + _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString() + "', intTotal = '" + JSON.parse(content).data.inserts[tablename].length + "' WHERE strTableName = '" + tablename + "'").then(res => {
                          console.log(res);
                          _updateFlag++;
                          if (_updateFlag == _totalTable) {
                            resolve(res);
                          }
                        }).catch(err => {
                          console.log('ERROR UPDATING ' + tablename + ' ==> ', err);
                          _updateFlag++;
                          if (_updateFlag == _totalTable) {
                            reject(err);
                          }
                        });

                      }).catch(err => {
                        console.log('ERROR INSERTING importDataFromServer ' + _file + ' ==> ', err);
                        _updateFlag++;
                        if (_updateFlag == _totalTable) {
                          reject(err);
                        }
                      });

                    })
                      .catch(err => {
                        console.log('ERROR => ' + err);
                        _updateFlag++;
                        if (_updateFlag == _totalTable) {
                          reject(err);
                        }
                      });

                  });

                }

                if (result === -1) {
                  console.log('FAILED');
                  reject(res);
                }

                // return result;
              });
          });
        });

      });
    });
  }


  processReceiveFulldata(record: any, data: any, location: any, global: any, callback: any): Promise<any> {
    return new Promise((resolve, reject) => {
      var me = this;
      me.globalInfo = global;

      console.log('++++++ START FULL DATA +++++++ ');

      debugger;

      var _record = new SyncDeviceData();
      me.syncDeviceDataBRL.get(_record).then(res => {
        console.log('++++++++ SYNC DATA ++++++++');
        console.log(res);
        if (res.length > 1) {
          const _intDriverNumber = data['intDriverNumber'];
          const _strFullName = data['strFullName'];
          var _tablesToGet = [];

          console.log(data);
          for (var x = 0; x <= res['length'] - 1; x++) {
            if (res[x]['ysnIncludeSyncAll'] == 'true' || res[x]['ysnIncludeSyncAll'] == true) {
              _tablesToGet.push(res[x]['strTableName']);
            }
          }
          console.log('TABLES TO GET ==========>');
          console.log(_tablesToGet);
          me.getGenerateExport(_intDriverNumber, _tablesToGet, "").then(res => {
            console.log('export all: ', res);
            resolve(res);
          }).catch(err => {
            reject(err);
          });
        }
      });

    });
  }


  getExportFiles() : Promise<any> {
    let me = this;

    return new Promise((resolve, reject) => {       
      var _url = 'mobilebilling/api/order/getexport';   
      me.getrawNoRequestPromise(_url).then((data) => {
        console.log('FILE NAMES' + data);
        resolve(data);
      },
        err => {
          console.log(err);
          reject(err);
        });

    });

  }













  // +++++++++ GLOBAL RECIEVE DATA +++++++++

  formatDate(value) {
    return value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getFullYear() + ' ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
  }

  getDateFormat(value) {
    var options = {
      year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    } as const;
    return value.toLocaleTimeString("en-US", options);
  }

  refreshTable(): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      me.commonSQL.DropAndCreate('',true).then(()=>{
        console.log('+++++++ TABLE REFRESHED +++++++++');
        resolve(me);
      });
    });

  }

  async sqlBufferTime(callback): Promise<any> {
    var me = this;
    let loader = await me.loadingCtrl.create({ message: "inserting data...", backdropDismiss: true });
    return new Promise((resolve, reject) => {
      loader.present();
      var refreshBuff = function () {
        loader.dismiss();
        me.message.showAlertInfoMessage('Data successfully imported!');
        clearInterval(me.fullDataBufferInterval);
        resolve(true);
      }
      me.fullDataBufferInterval = setInterval(function () { refreshBuff() }, 15000);
    });
  }



  // processReceiveOrder(loader, record, data, global) {
  //   var me = this;
  //   me.globalInfo = global;

  //   var refresh = function() {
  //     if (me.counter >= 3) {
  //       if(loader) loader.dismiss();
  //       me.counter = 0;

  //       var _date = new Date();
  //       record['dtmReceivedOrders'] = me.getDateFormat(_date);

  //       data['dtmReceivedOrders'] = record.dtmReceivedOrders;
  //       data['totalOrderReceived'] = me.totalOrderReceived;
  //       data['strTotalOrderReceived'] = me.totalOrderReceived + ' Orders Received';

  //       var _record = new GlobalInfo();
  //       _record.intGlobal = record.intGlobal;
  //       _record.dtmReceivedOrders = record.dtmReceivedOrders;
  //       _record.strTotalOrderReceived = me.totalOrderReceived + ' Orders Received';
  //       me.globalBRL.update(_record);

  //       clearInterval(me.receiveOrderInterval);

  //       console.log('++++++++++++++ FINISH ORDERS IMPORT ++++++++++++++');
  //       me.sqlBufferTime(null);

  //     }
  //   }    
  //   me.receiveOrderInterval = setInterval(function(){ refresh() }, 1000);

  //   var _record = new SyncDeviceData();
  //   var _default = me.syncDeviceDataBRL.defaultRecord(_record);
  //   console.log(_record);
  //   me.syncDeviceDataBRL.createTable(_record).then(res=> {
  //     me.syncDeviceDataBRL.get(_record).then(res => {    
  //       console.log(res);
  //       ;
  //       if(res.length > 1) {
  //         me.syncDeviceDataBRL.get(_record).then(res => {
  //           var _intDriverNumber = data['intDriverNumber'];
  //           var strFullName = data['strFullName'];

  //           data = res;
  //           data['intDriverNumber'] = _intDriverNumber;
  //           data['strFullName'] = strFullName;

  //           for(var x = 0; x <= data['length'] - 1; x++) {
  //             console.log(data[x]['strTableName']);
  //             if(data[x]['strTableName'] == 'orders' || data[x]['strTableName'] == 'orderitem' || data[x]['strTableName'] == 'ordertaxcode') {
  //               me.updateData(data[x], true, me.globalInfo);
  //             }
  //           } 
  //         });
  //       }
  //       else {
  //         me.syncDeviceDataBRL.addBulk(_record,_default).then(res => {    
  //           me.syncDeviceDataBRL.get(_record).then(res => {
  //             const _intDriverNumber = data['intDriverNumber'];
  //             const _strFullName = data['strFullName'];

  //             data = res;
  //             data['intDriverNumber'] = _intDriverNumber;
  //             data['strFullName'] = _strFullName;

  //             for(var x = 0; x <= data['length'] - 1; x++) {
  //               console.log(data[x]['strTableName']);
  //               if(data[x]['strTableName'] == 'orders' || data[x]['strTableName'] == 'orderitem' || data[x]['strTableName'] == 'ordertaxcode') {
  //                 me.updateData(data[x], true, me.globalInfo);
  //               }
  //             } 
  //           })
  //         });
  //       }        
  //     });
  //   });
  // }

  // processReceiveFulldata(record: any, loader: any, data: any, location: any, global: any, callback: any): Promise<any>  {
  //   return new Promise ((resolve, reject) => { 
  //     var me = this;

  //     me.globalInfo = global;

  //     console.log('++++++ START FULL DATA +++++++ ' + me.counter);

  //     var refresh = function() {
  //       console.log('++++++ REFRESH COUNTER +++++++ ' + me.counter);
  //       if (me.counter >= 16) {
  //         console.log('++++++ REFRESH COUNTER +++++++ ' + me.counter);
  //         loader.dismiss();

  //         me.counter = 0;

  //         var _date = new Date();
  //         record.dtmReceivedFullData = me.getDateFormat(_date);

  //         data['dtmReceivedFullData'] = record.dtmReceivedFullData;
  //         data['strTotalOrderReceived'] = me.totalOrderReceived + ' Orders Received';

  //         var _record = new GlobalInfo();
  //         _record.intGlobal = record.intGlobal;
  //         _record.dtmReceivedFullData = record.dtmReceivedFullData;
  //         _record.strTotalOrderReceived = me.totalOrderReceived + ' Orders Received';

  //         console.log('default location');
  //         console.log(location); 
  //         if(location['length'] > 0) {
  //           _record.strLocation = location[0].strLocationName;
  //           _record.intLocation = location[0].intCompanyLocationId;
  //           data['intLocation'] = location[0].intCompanyLocationId;
  //         }                

  //         me.globalBRL.update(_record);                              

  //         clearInterval(me.fullDataInterval);
  //         console.log(data);
  //         console.log('++++++++++++++ FINISH IMPORT ++++++++++++++');
  //         me.sqlBufferTime(callback).then((res)=>{
  //           resolve(res);
  //         })          
  //       }
  //     }    
  //     me.fullDataInterval = setInterval(function(){ refresh() }, 1000);

  //     var _record = new SyncDeviceData();
  //     var _default = me.syncDeviceDataBRL.defaultRecord(_record);

  //     me.syncDeviceDataBRL.get(_record).then(res => {    
  //       console.log('++++++++ SYNC DATA ++++++++');
  //       console.log(res);
  //       if(res.length > 1) {
  //         me.syncDeviceDataBRL.get(_record).then(res => {
  //           const _intDriverNumber = data['intDriverNumber'];
  //           const _strFullName = data['strFullName'];

  //           data = res;
  //           data['intDriverNumber'] = _intDriverNumber;
  //           data['strFullName'] = _strFullName;

  //           console.log(data);
  //           for(var x = 0; x <= data['length'] - 1; x++) {
  //             if(data[x]['ysnIncludeSyncAll'] != 'true') {
  //               me.counter++;
  //             }
  //             else{
  //               me.commonSQL.DropAndCreate(data[x], false).then(table=> { 
  //                 console.log(table); 
  //                 me.updateData(table, false, me.globalInfo); 
  //               });
  //             }
  //           }
  //         });
  //       }
  //       else {
  //         me.syncDeviceDataBRL.addBulk(_record,_default).then(res => {    
  //           console.log(res);
  //           me.syncDeviceDataBRL.get(_record).then(res => {                      
  //             const _intDriverNumber = data['intDriverNumber'];
  //             const _strFullName = data['strFullName'];

  //             data = res;
  //             data['intDriverNumber'] = _intDriverNumber;
  //             data['strFullName'] = _strFullName;

  //             console.log(data);
  //             for(var x = 0; x <= data['length'] - 1; x++) {
  //               if(data[x]['ysnIncludeSyncAll'] != 'true') {
  //                 me.counter++;
  //               }
  //               else{
  //                 me.commonSQL.DropAndCreate(data[x], false).then(table=> { 
  //                   console.log(table); 
  //                   me.updateData(table, false, me.globalInfo); 
  //                 });
  //               }
  //             }

  //           })
  //         });
  //       }        
  //     });

  //   });
  // }


  getShift(): Observable<any> {
    let me = this;

    return me.getraw('mobilebilling/api/shift/startshift')
      .pipe(tap(response => <Shift>response));
  }





  // updateDeviceDataList(item: SyncDeviceData, records: any, entity: any, data: any, createTable: boolean): Promise<any> {
  //   var me = this,
  //       _now = new Date();

  //   return new Promise ((resolve, reject) => {

  //     if(createTable == true) {
  //       me.commonSQL.createTable(entity).then(res => {
  //         console.log(item);
  //         console.log(records);
  //         console.log(entity);
  //         console.log(data);
  //         console.log(records.length);

  //         if(records.length < 1 || records['total'] < 1){
  //           console.log(records);
  //           me.counter++;
  //           resolve(res);
  //         }
  //         else {
  //           me.syncDeviceDataBRL.addBulk(entity,data).then(res => {
  //             item.dtmTableLastUpdated = _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString();

  //             var record = new SyncDeviceData();
  //             record.dtmTableLastUpdated = item.dtmTableLastUpdated;
  //             record.intTableStatus = item.intTableStatus;
  //             record.strDisplayName = item.strDisplayName;
  //             record.strTableName = item.strTableName;
  //             record.ysnTableWithErrors = item.ysnTableWithErrors;
  //             record.intTotal = records.total || records.length;

  //             me.syncDeviceDataBRL.update(record).then(res => {
  //               console.log(res);
  //               me.counter++;
  //               resolve(res);
  //             });        

  //           });
  //         }

  //       });
  //     }
  //     else {
  //       if(records.length < 1 || records['total'] < 1){
  //         console.log(records);
  //         me.counter++;
  //         resolve(records);
  //       }
  //       else {
  //         me.syncDeviceDataBRL.addBulk(entity,data).then(res => {
  //           item.dtmTableLastUpdated = _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString();

  //           var record = new SyncDeviceData();
  //           record.dtmTableLastUpdated = item.dtmTableLastUpdated;
  //           record.intTableStatus = item.intTableStatus;
  //           record.strDisplayName = item.strDisplayName;
  //           record.strTableName = item.strTableName;
  //           record.ysnTableWithErrors = item.ysnTableWithErrors;
  //           record.intTotal = records.total || records.length;

  //           me.syncDeviceDataBRL.update(record).then(res => {
  //             console.log(res);
  //             me.counter++;
  //             console.log('+++++++ COUNTER CHECKER ++++++++++ ' + me.counter + ' - ' + item.strTableName);
  //             resolve(res);
  //           });        

  //         });
  //       }        
  //     }

  //   });    
  // }






  // updateData(item, skip, global) {    
  //   var me = this;
  //   console.log(item);

  //   me.globalInfo = global;

  //   if(!item) return; 

  //   switch(item.strTableName) {
  //     case 'orders':
  //         me.getOrder(me.globalInfo.intDriverNumber).subscribe((res)=>{ 
  //           console.log(res);   

  //           if(res.total == 0) { me.counter++; return; }

  //           me.totalOrderReceived = res.total;

  //           let _rawData = res;
  //           let _entity = new Order();          
  //           me.commonSQL.dropTable(_entity).then(res => {              
  //             me.getOrderItemData(me.itemOrderItem);
  //             return me.updateDeviceDataList(item,_rawData, _entity, _rawData, true);         
  //           });
  //         });
  //         break;
  //       case 'orderitem':
  //         // me.i21syncDeviceService.getOrderItem(me.globalInfo.intDriverNumber).subscribe(res=>{
  //         //   console.log(res);   

  //         //   if(res['total'] == 0) { me.counter++; return; }

  //         //   let _rawData = res;
  //         //   let _entity = new OrderItem();
  //         //   me.commonSQL.dropTable(_entity).then(res => {
  //         //     console.log(res);                                
  //         //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
  //         //   });
  //         // });

  //         me.itemOrderItem = item;
  //         break;
  //       case 'ordertaxcode':
  //         // me.i21syncDeviceService.getOrderTaxCode(me.globalInfo.intDriverNumber).subscribe(res=>{
  //         //   console.log(res);   

  //         //   if(res['total'] == 0) { me.counter++; return; }

  //         //   let _rawData = res;
  //         //   let _entity = new OrderTaxCode();
  //         //   me.commonSQL.dropTable(_entity).then(res => {
  //         //     console.log(res);                                
  //         //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
  //         //   });
  //         // });

  //         me.itemOrderItemTaxCode = item;
  //         break;
  //     case 'customer':
  //         me.getCustomer().subscribe(res=>{
  //           console.log(res);   

  //           if(res['total'] == 0) { me.counter++; return; }

  //           let _rawData = res;
  //           let _entity = new Customer();             
  //           return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
  //         });
  //         break;
  //     case 'consumptionsite':
  //         me.getConsumptionSite().subscribe(res=>{
  //           console.log(res);   

  //           if(res['total'] == 0) { me.counter++; return; }

  //           let _rawData = res;
  //           let _entity = new ConsumptionSite();         
  //           return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
  //         });
  //         break;            
  //     case 'tblTMDeliveryHistory':
  //       // me.i21syncDeviceService.getDeliveryHistory().subscribe(res=>{
  //       //   console.log(res);   

  //       //   if(res['total'] == 0) { me.counter++; return; }

  //       //   let _rawData = res;
  //       //   let _entity = new DeliveryHistory();
  //       //   me.commonSQL.dropTable(_entity).then(res => {
  //       //     console.log(res);                                
  //       //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
  //       //   });
  //       // });
  //       me.counter++;
  //       break;  
  //     case 'device':
  //       me.getDevice().subscribe(res=>{
  //         console.log(res);   

  //         if(res['total'] == 0) { me.counter++; return; }

  //         let _rawData = res;
  //         let _entity = new Device();                       
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip); 
  //       });
  //       break;   
  //     case 'item':
  //       // me.i21syncDeviceService.getItem().subscribe(res=>{
  //       //   console.log(res);   

  //       //   if(res['total'] == 0) { me.counter++; return; }

  //       //   let _rawData = res;
  //       //   let _entity = new Item();
  //       //   me.commonSQL.dropTable(_entity).then(res => {
  //       //     console.log(res);                                
  //       //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
  //       //   });
  //       // });
  //       me.counter++;
  //       break;
  //     case 'applicabletaxcode':
  //       me.getApplicableTaxCode().subscribe(res=>{
  //         console.log(res);   

  //         if(res['total'] == 0) { me.counter++; return; }

  //         let _rawData = res;
  //         let _entity = new ApplicableTaxCode();                      
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
  //       });
  //       break;
  //     case 'taxcode':
  //       me.getTaxCode().subscribe(res=>{
  //         console.log(res);   

  //         if(res['total'] == 0) { me.counter++; return; }

  //         var _res = res['data'];          
  //         var _newRes = {data:[],success:true,total:100};
  //         for(var x = 0; x <= _res.length - 1; x++) {
  //           for(var y = 0; y <= _res[x]['tblSMTaxCodeRates'].length - 1; y++) {
  //             var _record = {};                          
  //             _record['intTaxCodeId'] = _res[x].intTaxCodeId;
  //             _record['strTaxCode'] = _res[x].strTaxCode;
  //             _record['dblRate'] = _res[x]['tblSMTaxCodeRates'][y].dblRate;
  //             _record['dtmEffectiveDate'] = _res[x]['tblSMTaxCodeRates'][y].dtmEffectiveDate;
  //             _record['strCalculationMethod'] = _res[x]['tblSMTaxCodeRates'][y].strCalculationMethod;
  //             _record['intTaxCodeRateId'] = _res[x]['tblSMTaxCodeRates'][y].intTaxCodeRateId;
  //             _newRes['data'].push(_record);
  //           }
  //         }

  //         _newRes['total'] = _newRes['data'].length;

  //         console.log(_newRes);

  //         let _rawData = _newRes;
  //         let _entity = new TaxCode();              
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
  //       });
  //       break;
  //     case 'terms':
  //       me.getTerms().subscribe(res=>{
  //         console.log(res);   

  //         if(res['total'] == 0) { me.counter++; return; }

  //         let _rawData = res;
  //         let _entity = new Terms();                            
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip); 
  //       });
  //       break;
  //     case 'location':
  //       me.getLocation(me.globalInfo.ContactParentId).subscribe(res=>{
  //         console.log(res);   
  //         var _res = res;

  //         if(res['total'] == 0 || res['length'] == 0) { me.counter++; return; }

  //         let _rawData = _res;
  //         let _entity = new Location();              
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
  //       });
  //       break;
  //     case 'contractheader':
  //       me.getContractHeader().subscribe(res=>{
  //         console.log(res);   

  //         if(res['total'] == 0) { me.counter++; return; }

  //         let _rawData = res;
  //         let _entity = new ContractHeader();
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
  //       });
  //       break;
  //     case 'contractdetail':
  //       me.getContractDetail().subscribe(res=>{
  //         console.log(res);   
  //         var _res = res;

  //         if(res['total'] == 0 || res['length'] == 0) { me.counter++; return; }

  //         let _rawData = _res;
  //         let _entity = new ContractDetail();
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);  
  //       });
  //       break;
  //     case 'configuration':
  //       me.getConfiguration().subscribe(res=>{
  //         console.log(res);   

  //         if(res['total'] == 0) { me.counter++; return; }

  //         let _rawData = res;
  //         let _entity = new CompanyPreference();
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip); 
  //       });
  //       break;
  //     case 'truck':
  //       me.getTruck().subscribe(res=>{
  //         console.log(res);   

  //         if(res['total'] == 0) { me.counter++; return; }

  //         let _rawData = res;
  //         let _entity = new Truck();                             
  //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);         
  //       });
  //       break;
  //     case 'tblCustomerSpecialPricing':
  //       me.getGenerateExport('all').then(res=>{
  //         console.log('export all: ' + res);   
  //         me.counter++; return;
  //       }).catch(err => {
  //         me.counter++; return;
  //       });
  //       break;
  //     default:
  //         console.log(item);
  //   }
  // }



  // getOrderItemData(item) {
  //   var me = this;
  //   me.getOrderItem(me.globalInfo.intDriverNumber).subscribe(res=>{
  //     console.log(res);   

  //     if(res['total'] == 0) { me.counter++; return; }

  //     let _rawData = res;
  //     let _entity = new OrderItem();
  //     me.commonSQL.dropTable(_entity).then(res => {
  //       me.getOrderItemTaxData(me.itemOrderItemTaxCode);
  //       return me.updateDeviceDataList(item,_rawData, _entity, _rawData, true);         
  //     });
  //   });
  // }

  // getOrderItemTaxData(item) {
  //   var me = this;
  //   me.getOrderTaxCode(me.globalInfo.intDriverNumber).subscribe(res=>{
  //     console.log(res);   

  //     if(res['total'] == 0) { me.counter++; return; }

  //     let _rawData = res;
  //     let _entity = new OrderTaxCode();
  //     me.commonSQL.dropTable(_entity).then(res => {
  //       return me.updateDeviceDataList(item,_rawData, _entity, _rawData, true);         
  //     });
  //   });
  // }




  // +++++++++ API INTEGRATION CALLS +++++++++

  // getCustomer(): Observable<Customer> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('accountsreceivable/api/report/searchcustomerinquiryreport', request)
  //   .pipe(tap(response => <Customer>response));
  // }      

  // getConsumptionSite(): Observable<ConsumptionSite> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('tankmanagement/api/mobilebilling/searchconsumptionsites', request)
  //   .pipe(tap(response => <ConsumptionSite>response));
  // }

  // getDeliveryHistory(): Observable<DeliveryHistory> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('tankmanagement/api/mobilebilling/searchdeliveryhistory', request)
  //   .pipe(tap(response => <DeliveryHistory>response));
  // }

  // getDevice(): Observable<Device> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('tankmanagement/api/mobilebilling/getsitedevices', request)
  //   .pipe(tap(response => <Device>response));
  // }

  // getItem(): Observable<Item> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('inventory/api/item/searchitemlite', request)
  //   .pipe(tap(response => <Item>response)); 
  // }

  // getApplicableTaxCode(): Observable<ApplicableTaxCode> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('tankmanagement/api/mobilebilling/searchconsumptionsites', request)
  //   .pipe(tap(response => <ApplicableTaxCode>response));
  // }

  // getTaxCode(): Observable<TaxCode> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('i21/api/taxcode/get', request)
  //   .pipe(tap(response => <TaxCode>response));
  // }

  // getTerms(): Observable<Terms> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('i21/api/term/search', request)
  //   .pipe(tap(response => <Terms>response));
  // }

  // getLocation(id): Observable<Location> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999,
  //     filter: [{c:"intEntityId",v:id,cj:"or",g:"g0"}]
  //   });
  //   return me.getraw('i21/api/companylocation/search', request)
  //   .pipe(tap(response => <Location>response));
  // }  

  // getContractHeader(): Observable<ContractHeader> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('ContractManagement/api/contractHeader/SearchMBILContractHeader', request)
  //   .pipe(tap(response => <ContractHeader>response));
  // }

  // getContractDetail(): Observable<ContractDetail> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('ContractManagement/api/contractHeader/SearchMBILContractDetail', request)
  //   .pipe(tap(response => <ContractDetail>response));
  // }

  // getOrder(driverId): Observable<any> {
  //   let me = this;

  //   let request = new GetRequest({      
  //     filter: driverId
  //   });
  //   return me.getraw('mobilebilling/api/order/getorder', request)
  //   .pipe(tap(response => {
  //     console.log(response);
  //     return <Order>response;
  //   }));
  // }

  // getOrderItem(driverId): Observable<any> {
  //   let me = this;

  //   let request = new GetRequest({      
  //     filter: driverId
  //   });
  //   return me.getraw('mobilebilling/api/order/getorderitem', request)
  //   .pipe(tap(response => {
  //     ;
  //     <OrderItem>response;
  //   }));
  // }

  // getOrderTaxCode(driverId): Observable<any> {
  //   let me = this;

  //   let request = new GetRequest({      
  //     filter: driverId
  //   });
  //   return me.getraw('mobilebilling/api/order/getordertaxcode', request)
  //   .pipe(tap(response => <OrderTaxCode>response));
  // }

  // getConfiguration(): Observable<any> {
  //   let me = this;

  //   let request = new GetRequest();
  //   return me.getraw('mobilebilling/api/companypreference/get', request)
  //   .pipe(tap(response => <CompanyPreference>response));
  // }

  // getTruck(): Observable<any> {
  //   let me = this;

  //   let request = new GetRequest({
  //     page: 1,
  //     start: 0,
  //     limit: 99999
  //   });
  //   return me.getraw('i21/api/truck/get',request)
  //   .pipe(tap(response => <Truck>response));
  // }

//++++++++Changes done by Neha +++++++++++++//// 
async getOrderInterval(driverID,loader:any){
  //debugger;
  console.log("DRIVERID =======",driverID)
  var me = this;
if(loader != null){
  loader.present();
}
 
  this.getPreviosOrderList(driverID);

  me.commonSQL.getDataQuery('SELECT strOrderNumber FROM tblMBILOrder WHERE strOrderStatus = \'Delivered\'').then((res) => {
    var _orderIds = "'";
    res.forEach(order => {
      _orderIds = _orderIds + order['strOrderNumber'] + "', '"
    });

    me.getGenerateExport(driverID || 0,'complete_order', _orderIds + "0'").then((data)=>{
      console.log(data);
     
      if(loader != null){
        loader.dismiss();
      }
          me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
        var _date = new Date();
        console.log(res);
        me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
          me.getOrderList(driverID,'','');
         
        });
      });
    },
    err => {
      console.log(err);
      if(loader != null){
        loader.dismiss();
      }
     // loader.dismiss();
    });
  });
}
getPreviosOrderList(driverID){
  var me = this,
      _query = '';
  this.previousOrders = [];
  var filter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
 // var sort = 
  me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
    console.log("AFTER SEND SHIFT DATA ===",res)
  })

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
            Where tblMBILOrder.intDriverId = '${ driverID }'`;

  console.log(_query  + ' and ' + filter);
  me.commonSQL.getDataQuery(_query + ' and ' + filter)
  .then(res => {
    //debugger;
    this.previousOrders = res;
    console.log("PREVIOUS ORDERS ===",me.previousOrders)
  },
  err => {
    console.log(err);
   // loader.dismiss();
  });

    // return from(
    //   me.commonSQL.getDataQuery(_query).then(
    //     res => {
    //       me.allOrders = res;
    //      console.log(me.allOrders);
    //       return me.allOrders;
    //     }
    //   )
    // ).pipe(map(m => <any>m));
 
}
async getOrderList(driverID,filter,currentSort): Promise<Observable<any>> {
  var me = this,
      _query = '';
 // me.data = [];
  me.allOrders = [];
  me.newOrdersList = [];
  var deliveredOrder = [];
  var dispatchedOrder = [];
  // let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
  // loader.present();
  me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
    console.log("AFTER SEND SHIFT DATA ===",res)
  })

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
            Where tblMBILOrder.intDriverId = '${driverID }'`;
  // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';

  if(filter != ''){
    _query = _query + ' and ' + filter + ' ' + currentSort
  }
    console.log(_query);
    return from(
    me.commonSQL.getDataQuery(_query )
    .then(res => {
      me.allOrders = [];

      me.allOrders = res;
      console.log('all orders are here. . .')
      console.log(me.allOrders);

      if(this.previousOrders.length != 0){
        console.log("previous order in GetOrderList",this.previousOrders)
        me.newOrdersList = this.allOrders.filter(({ strOrderNumber: id1 }) => !this.previousOrders.some(({ strOrderNumber: id2 }) => id2 === id1));
        console.log("DIfference between orders ====",me.newOrdersList);
      }
      var _strOrder = '';
      var _strRoute = '';
      var _hasNoRoute = false;
       me.data = [];
      for(var x = 0; x <= res.length - 1; x++) {
        if(_strOrder != res[x].strOrderNumber) {
          if(res[x].strOrderStatus != 'Delivered'){
          if(res[x].dblQuantity > res[x].dblTankQuantity) {
            res[x].strOrderStatus = 'fuelnotenough';
          }
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
         
          for(var i = 0;i <= me.newOrdersList.length -1; i++){
           
            if(res[x].strOrderStatus != 'Delivered'){
              this.isNewOrder = false;
            if(me.newOrdersList[i].strOrderNumber == res[x].strOrderNumber){
              res[x].strOrderStatus = 'NEW';
              this.isNewOrder = true;
             
            }
            this.isNewOrderSubject$.next(this.isNewOrder);
              //console.log("ORDER NUMER ==",me.newOrdersList[i].strOrderNumber,res[x].strOrderNumber,res[x].strOrderStatus)
            }
          }
        
          if(res[x].strOrderStatus == 'Delivered'){
            deliveredOrder.push(res[x]);
            console.log("DELIVERED= ",deliveredOrder);
          }
          else{
            dispatchedOrder.push(res[x])
            console.log("dispatchedOrder= ",dispatchedOrder);
          }
         
          me.data.push(res[x]);
         // console.log("NEW ORDERS ARARAA ===",me.data)
        }
        //loader.dismiss();
        _strOrder = res[x].strOrderNumber;
        _strRoute = res[x].strRouteId;
      }
      this.OrderData = dispatchedOrder;
      this.OrderSubject$.next(this.OrderData);
      if(filter == ' tblMBILOrder.strOrderStatus != \'Delivered\' '){
        return dispatchedOrder;
      }
      else
         return deliveredOrder;
      //return this.data
     
    },
    )
    ).pipe(map(m => <any>m));
  }


  // async InCompleteOrder() {
  //   // console.log(record);

  //   var me = this;
  //   me.ordersInLocal = []

  //   me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
  //     console.log(res);
  //     this.ordersInLocal = res;
  //     var _orderIds =  "'";
      
  //     me.getGenerateExport(me.globalInfo.intDriverNumber || 0,'complete_order', _orderIds + "0'").then((data)=>{
  //       console.log(data);
  //       me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
  //         var _date = new Date();
  //         console.log(res);
  //         me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
  //           me.sendIncompleteOrders();
           
  //         });
  //       });
  //     });
  //   });

  // }
  // async sendIncompleteOrders() {
  //   var me = this,
  //       _query = '';
  //       ;
  //   me.ordersInServer = [];
  //   me.notDeliveredInServerOrders = [];
 

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

   
  //     me.commonSQL.getDataQuery(_query)
  //     .then(res => {
     

  //       me.allOrders = res;
  //       me.ordersInServer = res;
  //       console.log('all orders are here. . .')
  //       console.log(me.ordersInServer);
     
  //       me.notDeliveredInServerOrders = this.ordersInLocal.filter(({ strOrderStatus: id1 }) => !this.ordersInServer.some(({ strOrderStatus: id2 }) => id2 === id1));
  //       debugger;
  //       console.log("DIfference between orders in Server ====",me.notDeliveredInServerOrders);
  //      // this.sendShiftData()
  //       this.getTankDetail()
  //     },
  //     err => {
  //       console.log(err);
  //      // loader.dismiss();
  //     });
    

  // }

 getTankDetail(){
  // debugger;
  var me = this;
  me.tmUpdate = [];
  var _invoiceitems =[];

  me.commonSQL.getDataQuery("select * from invoice where ysnSendToOffice <> 'true' or ysnSendToOffice IS NULL").then((res)=> {
    me.Invoice = res
    console.log("log 1",res)
    })
  
      me.commonSQL.getData('invoiceitems').then(res => {
        console.log('INVOICE ITEMS');
        _invoiceitems = res;
        console.log(_invoiceitems);

        for (var x = 0; x <= me.Invoice.length - 1; x++) {
          for (var y = 0; y <= _invoiceitems.length - 1; y++) {
          
          if (me.Invoice[x].strInvoiceNo == _invoiceitems[y].strInvoiceNo) {
  
            console.log("matching invoice",_invoiceitems[y]);
            me.tmAlerts = {
              strCustomerNumber: me.Invoice[x].strCustomerNo,
              intSiteNumber: _invoiceitems[y].intSiteNumber,
              dtmDateDelivery: me.datePipe.transform(new Date(),'yyyy-MM-dd hh:mm:ss a'),
             // dtmDateDelivery:'',
              dblQuantity:_invoiceitems[y].dblQuantity ,
              dblPrice:_invoiceitems[y].dblPrice ,
              dblTotal: me.Invoice[x].dblTotal
            };
            me.tmUpdate.push(me.tmAlerts);
          }}
        }
      })
   
 
   
    console.log("the TM UPdate",this.tmUpdate)
    this.sendShiftData()
 }

  sendShiftData() {
    var me = this;
    var _shift = [],
        _invoice = [],
        _invoiceitems = [],
        _invoicetaxcodes = [],
        _outofgass = [],
        _data = [];

    // debugger;

  
    // me.commonSQL.getDataQuery('SELECT * FROM invoiceitems').then((res) => {
    //   me.Invoice = res
    //   console.log(me.Invoice);
    //   })
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
            // for(var x = 0; x <= this.notDeliveredInServerOrders.length-1; x++) {
            //   _orderList = _orderList + this.notDeliveredInServerOrders[x].strOrderNumber + '\', \'';
            // }
           
            // me.commonSQL.updateDataQuery('UPDATE tblMBILOrder SET strOrderStatus = \'Delivered\' WHERE strOrderNumber IN (\'' + _orderList + '0\')').then(
            //   res => { console.log(res); console.log('update orders');
            //   // this.getPreviosOrderList();
            //   // this.getOrderList();
            // });

            for(var x = 0; x <= _invoice.length-1; x++) {
              _orderList = _orderList + _invoice[x].intOrderId + '\', \'';
            }

            me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => {
              console.log('syncentireshift');
              console.log(res);
               me.commonSQL.updateDataQuery('UPDATE invoice SET ysnSendToOffice = \'true\' WHERE intOrderId IN (\'' + _orderList + '0\')').then(res => { console.log(res); console.log('update invoice'); });

             
             // update status
             console.log('TMUPDATE = ',me.tmUpdate)
              me.putraw('tankmanagement/api/consumptionsite/updatedispatchordernew',this.tmUpdate).subscribe(res => {
                console.log('updatedispatchorders');
                console.log(res);
              });

              //email notification
              me.postraw('tankmanagement/api/consumptionsite/emaildeliveries', this.tmUpdate).subscribe(res => {
                console.log('emaildeliveries');
                console.log(res);
              });

            
            });

          });
        });
      });
    });
  }
}
