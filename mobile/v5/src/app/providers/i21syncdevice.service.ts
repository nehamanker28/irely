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
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
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

  constructor(public http: HttpClient,
    public https: HTTP,
    public loadingCtrl: LoadingController,
    public commonSQL: CommonSQL,
    private syncDeviceDataBRL: SyncDeviceDataBRL,
    private globalBRL: GlobalInfoBRL,
    private message: Message,
    private zip: Zip,
    private file: File,
    private transfer: FileTransfer,
    private fileOpener: FileOpener,
    private sqlitePorter: SQLitePorter,
    private storage: Storage) {
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
      }
      else if(!Array.isArray(tablename)) {
        _tablestogenerate = tablename;
      }                  
      
      me.getrawNoRequestPromise('mobilebilling/api/order/getgenerateexport?driverId=' + driverid + '&tablename=' + _tablestogenerate + "&orders=" + orderIds).then((exportResponse) => {
        console.log('generated file: ' + exportResponse);

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
    };
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

}
