// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";
// import { retry } from 'rxjs/operator/retry';

// import { InvoiceDetail } from '../models/invoicedetail';
// import { SQLITEBRL } from '../brl/sqlite';

// @Injectable()
// export class InvoiceDetailBRL {

//     constructor(public sqlite: SQLite, public sqliteBrl: SQLITEBRL){ }

//     async sync(data: any) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     var _table = new InvoiceDetail();
//                     var _sql = me.sqliteBrl.createtable('invoicedetail',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => {
//                         console.log('Created invoicedetail Table');
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

//     async createtable() {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     var _table = new InvoiceDetail();
//                     var _sql = me.sqliteBrl.createtable('invoicedetail',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => {
//                         console.log('Created invoicedetail Table');
//                         resolve(res);
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
//                 me.sqliteBrl.getData('invoicedetail').then(res => {
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

//     async add(record: InvoiceDetail) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addData('invoicedetail',record).then(res => {
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

//     async addBulk(record: InvoiceDetail, data: any) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addBulkData('invoicedetail',record,data).then(res => {
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

//     async update(record: InvoiceDetail) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.updateData('invoicedetail',record).then(res => {
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
//                 me.sqliteBrl.droptable('invoicedetail').then(res => {
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

//     async getInvoiceDetailQuery(query: string) {
//         var me = this;
//         console.log(query);
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.getDataQuery(query).then(res => {
//                     console.log(res);

//                     var _data = JSON.parse(JSON.stringify(res));
//                     var _items = [];
//                     for(var x = 0; x <= _data.length-1; x++){
//                         var _item = [];
//                         var _entry = '{';
//                         for(var i = 0; i <= _data[x].length-1; i++){          
//                             var _fieldname = _data[x][i]["field"];
//                             var _value = _data[x][i]["value"];
//                             _entry = _entry +'"' + _fieldname + '": "' + _value + '",';
//                         }
//                         _entry = _entry.substr(0,_entry.length-1) + '}';
//                         _items.push(JSON.parse(_entry.replace(/(\r\n\t|\n|\r\t)/gm,"")));
//                     }
//                     console.log(_items);
                    
//                     resolve(_items);
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