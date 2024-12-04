// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";
// import { retry } from 'rxjs/operator/retry';

// import { User } from '../models/user';
// import { GlobalInfo } from '../models/globalinfo';

// import { GlobalInfoBRL } from '../brl/globalinfo';
// import { SQLITEBRL } from '../brl/sqlite';

// @Injectable()
// export class UserBRL {

//     constructor(public sqlite: SQLite, public globalBrl: GlobalInfoBRL, public sqliteBrl: SQLITEBRL){ }


//     async syncUser(record: User) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     var _table = new User();
//                     var _sql = me.sqliteBrl.createtable('user',_table.fields()[0]);

//                     db.executeSql(_sql, {})
//                     .then(res => console.log('Created user Table')).catch(e => console.log(e));
                    
//                     console.log(record.intUserId);

//                     db.executeSql('SELECT * FROM user WHERE intUserId=?', [record.intUserId])
//                     .then(res => {
//                         if(res.rows.length>0) {
//                             me.updateUser(record).then(res => {
//                                 if(res == "success") {
//                                     var _global = me.defaultRecord(record);
//                                     me.globalBrl.syncGlobalInfo(_global).then(res=> {
//                                         resolve(res);
//                                     })
//                                 }
//                                 else {
//                                     resolve("failed");
//                                 }
//                             });
//                         }
//                         else{
//                             me.addUser(record).then(res => {
//                                 if(res == "success") {                                    
//                                     var _global = me.defaultRecord(record);
//                                     me.globalBrl.syncGlobalInfo(_global).then(res=> {
//                                         resolve(res);
//                                     })
//                                 }
//                                 else {
//                                     resolve("failed");
//                                 }
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

//     async addUser(record: User) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.addData('user',record).then(res => {
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

//     async updateUser(record: User) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.updateData('user',record).then(res => {
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

//     async deleteUserTable() {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 me.sqliteBrl.droptable('user').then(res => {
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

//     async loginOffline(username: string, password: string) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql('SELECT * FROM user WHERE strUserName=? and strPassword=?', [username, password])
//                     .then(res => {
//                         if(res.rows.length>0) {
//                             resolve("success");
//                         }
//                         else{
//                             resolve("failed");
//                         }
//                     })
//                     .catch(e => {
//                         console.log(e);
//                         resolve("failed");
//                     });                    
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

//     private defaultRecord(record: User){
//         var _global = new GlobalInfo();
//         _global.intUserMobileId = record.intUserMobileId;
//         _global.intUserId = record.intUserId;
//         _global.intLocation = record.intLocation;
//         _global.intDriverNumber = record.intDriverNumber;
//         _global.strFullName = record.strFullName;
//         _global.strLocation = record.strLocation;
//         _global.strPassword = record.strPassword;
//         _global.strUserName = record.strUserName;

//         _global.ysnShiftOnGoing = false;
//         _global.intShiftCounter = 1;
//         _global.intDriverNumber = 3; 'sample only - need to delete on production'
//         _global.strTruckNumber = '60/03'; 'sample only - need to delete on production'

//         return _global;
//     }

// }