// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";

// import { GlobalInfo } from '../models/globalinfo';
// import { retry } from 'rxjs/operator/retry';
// import { SQLITEBRL } from '../brl/sqlite';

// @Injectable()
// export class GlobalInfoBRL {

//     constructor(public sqlite: SQLite, public sqliteBrl: SQLITEBRL){ }

//     async syncGlobalInfo(record: GlobalInfo) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     var _table = new GlobalInfo();
//                     var _sql = me.sqliteBrl.createtable('globalinfo',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => console.log('Created globalinfo Table')).catch(e => console.log(e));

//                     db.executeSql('SELECT * FROM globalinfo',[])
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

//     async addGlobalInfo(record: GlobalInfo) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addData('globalinfo',record).then(res => {
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

//     async updateGlobalInfo(record: GlobalInfo) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.updateData('globalinfo',record).then(res => {
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

//     async deleteGlobalInfoTable() {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.droptable('globalinfo').then(res => {
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

//     async getGlobalInfo() {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.getRecord('globalinfo', new GlobalInfo()).then(res => {
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