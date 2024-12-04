// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";
// import { retry } from 'rxjs/operator/retry';

// import { SyncDeviceData } from '../models/syncdevicedata';
// import { SQLITEBRL } from '../brl/sqlite';

// @Injectable()
// export class SyncDeviceDataBRL {

//     constructor(public sqlite: SQLite, public sqliteBrl: SQLITEBRL){ }

//     async sync(record: SyncDeviceData) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     var _table = new SyncDeviceData();
//                     var _sql = me.sqliteBrl.createtable('syncdevicedata',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => {
//                         console.log(res);
//                         console.log('Created syncdevicedata Table');

//                         db.executeSql('SELECT * FROM syncdevicedata',[])
//                         .then(res => {
//                             console.log(res);
//                             if(res.rows.length>0) {
//                                 resolve(res);                                
//                             }
//                             else{
//                                 var records = me.defaultRecord(record)
//                                 me.addBulk(record, records).then(res => {
//                                     resolve(res);
//                                 });
//                             }
//                         })
//                         .catch(e => { console.log(e); });

//                     }).catch(e => console.log(e));                    

                    
//                 })
//                 .catch(e => { console.log(e); if(e == "cordova_not_available") { resolve("success"); } else { resolve("failed"); } });
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     async get() {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.getData('syncdevicedata').then(res => {
//                     resolve(res);
//                 })
//                 .catch(e => {
//                     console.log(e);          
//                     resolve("failed");
//                 });      
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     async add(record: SyncDeviceData) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addData('syncdevicedata',record).then(res => {
//                     resolve(res);
//                 })
//                 .catch(e => {
//                     console.log(e);          
//                     resolve("failed");
//                 });      
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     async addBulk(record: SyncDeviceData, data: any) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addBulkData('syncdevicedata',record,data).then(res => {
//                     resolve(res);
//                 })
//                 .catch(e => {
//                     console.log(e);          
//                     resolve("failed");
//                 });      
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     async update(record: SyncDeviceData) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.updateData('syncdevicedata',record).then(res => {
//                     resolve(res);
//                 })
//                 .catch(e => {
//                     console.log(e);          
//                     resolve("failed");
//                 });      
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     async deleteTable() {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.droptable('syncdevicedata').then(res => {
//                     resolve(res);
//                 })
//                 .catch(e => {
//                     console.log(e);          
//                     resolve("failed");
//                 });      
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     private defaultRecord(record: SyncDeviceData){
//         var records = [];
                
//         var record = new SyncDeviceData();
//         record.intTableStatus = 1;
//         record.strDisplayName = 'Order';
//         record.strTableName = 'orders';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 2;        
//         record.strDisplayName = 'Customer';
//         record.strTableName = 'customer';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 3;        
//         record.strDisplayName = 'Consumption Site';
//         record.strTableName = 'consumptionsite';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 4;        
//         record.strDisplayName = 'Delivery History';
//         record.strTableName = 'deliveryhistory';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 5;        
//         record.strDisplayName = 'Device';
//         record.strTableName = 'device';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 5;        
//         record.strDisplayName = 'Item';
//         record.strTableName = 'item';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 6;        
//         record.strDisplayName = 'Applicable Tax Code';
//         record.strTableName = 'applicabletaxcode';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 7;
//         record.strDisplayName = 'Tax Code';
//         record.strTableName = 'taxcode';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 8;
//         record.strDisplayName = 'Contract Header';
//         record.strTableName = 'contractheader';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 9;
//         record.strDisplayName = 'Contract Detail';
//         record.strTableName = 'contractdetail';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         // PHASE 2
//         // var record = new SyncDeviceData();
//         // record.intTableStatus = 9;
//         // record.strDisplayName = 'Contract Split';
//         // record.strTableName = 'contractsplit';
//         // record.ysnTableWithErrors = false;
//         // record.dtmTableLastUpdated = '(no data)';
//         // records.push(record);

//         // PHASE 2
//         // var record = new SyncDeviceData();
//         // record.intTableStatus = 9;
//         // record.strDisplayName = 'Contract Split Detail';
//         // record.strTableName = 'contractsplitdetail';
//         // record.ysnTableWithErrors = false;
//         // record.dtmTableLastUpdated = '(no data)';
//         // records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 10;
//         record.strDisplayName = 'Terms';
//         record.strTableName = 'terms';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 11;
//         record.strDisplayName = 'User';
//         record.strTableName = 'user';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 12;
//         record.strDisplayName = 'Location';
//         record.strTableName = 'location';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 13;
//         record.strDisplayName = 'Truck';
//         record.strTableName = 'truck';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var record = new SyncDeviceData();
//         record.intTableStatus = 14;
//         record.strDisplayName = 'Meter';
//         record.strTableName = 'meter';
//         record.ysnTableWithErrors = false;
//         record.dtmTableLastUpdated = '(no data)';
//         record.intTotal = 0;
//         records.push(record);

//         var _data = [];
//         _data['data'] = records;

//         return _data;
//     }

// }