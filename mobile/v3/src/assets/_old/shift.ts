// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";

// import { Shift } from '../models/shift';
// import { retry } from 'rxjs/operator/retry';
// import { SQLITEBRL } from '../brl/sqlite';

// @Injectable()
// export class ShiftBRL {

//     constructor(public sqlite: SQLite, public sqliteBrl: SQLITEBRL){ }

//     async syncGlobalInfo(record: Shift) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     var _table = new Shift();
//                     var _sql = me.sqliteBrl.createtable('shift',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => console.log('Created shift Table')).catch(e => console.log(e));

//                     db.executeSql('SELECT * FROM shift',[])
//                     .then(res => {
//                         if(res.rows.length>0) {
//                             me.updateGlobalInfo(record).then(res => {
//                                 resolve(res);
//                             });
//                         }
//                         else{
//                             me.addGlobalInfo(record).then(res => {
//                                 resolve(res);
//                             });
//                         }
//                     })
//                     .catch(e => { console.log(e); });
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

//     async addGlobalInfo(record: Shift) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addData('shift',record).then(res => {
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

//     async updateGlobalInfo(record: Shift) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.updateData('shift',record).then(res => {
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

//     async deleteShiftTable() {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.droptable('shift').then(res => {
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