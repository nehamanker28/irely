// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";
// import { retry } from 'rxjs/operator/retry';

// import { DeliveryHistory } from '../models/deliveryhistory';
// import { SQLITEBRL } from '../brl/sqlite';

// @Injectable()
// export class DeliveryHistoryBRL {

//     constructor(public sqlite: SQLite, 
//                 public sqliteBrl: SQLITEBRL){ }

//     async sync(data: any) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     var _table = new DeliveryHistory();
//                     var _sql = me.sqliteBrl.createtable('deliveryhistory',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => {
//                         console.log('Created deliveryhistory Table');
//                         me.addBulk(_table, data).then(res => {
//                             resolve(res);
//                         });
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
//                 me.sqliteBrl.getData('deliveryhistory').then(res => {
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

//     async add(record: DeliveryHistory) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addData('deliveryhistory',record).then(res => {
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

//     async addBulk(record: DeliveryHistory, data: any) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addBulkData('deliveryhistory',record,data).then(res => {
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

//     async update(record: DeliveryHistory) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.updateData('deliveryhistory',record).then(res => {
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
//                 me.sqliteBrl.droptable('deliveryhistory').then(res => {
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

// }