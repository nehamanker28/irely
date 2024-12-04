// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";
// import { retry } from 'rxjs/operator/retry';

// import { Terms } from '../models/terms';
// import { SQLITEBRL } from '../brl/sqlite';

// @Injectable()
// export class TermsBRL {

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
//                     var _table = new Terms();
//                     var _sql = me.sqliteBrl.createtable('terms',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => {
//                         console.log('Created terms Table');
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
//                 me.sqliteBrl.getData('terms').then(res => {
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

//     async add(record: Terms) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addData('terms',record).then(res => {
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

//     async addBulk(record: Terms, data: any) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addBulkData('terms',record,data).then(res => {
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

//     async update(record: Terms) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.updateData('terms',record).then(res => {
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
//                 me.sqliteBrl.droptable('terms').then(res => {
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