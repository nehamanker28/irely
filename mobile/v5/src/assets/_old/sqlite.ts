// import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
// import { Injectable } from '@angular/core';
// import { Observable } from "rxjs/Rx";
// import { retry } from 'rxjs/operator/retry';

// @Injectable()
// export class SQLITEBRL {

//     constructor(public sqlite: SQLite){ }

    
//     // execute table scripts

//     public createtable(tablename: string, fields: any) {
//         try
//         {            
//             var _sql = '';
//             for(var x in fields){                        
//                 console.log(x);
//                 console.log(fields[x]);

//                 if(fields[x] == 'pk'){
//                     _sql = x + ' INTEGER PRIMARY KEY, ';
//                 }
//                 else if(fields[x] == 'number'){
//                     _sql = _sql + x + ' INT, ';
//                 }
//                 else if(fields[x] == 'string' || fields[x] == 'date' || fields[x] == 'boolean'){
//                     _sql = _sql + x + ' TEXT, ';
//                 }
//                 else if(fields[x] == 'decimal'){
//                     _sql = _sql + x + ' REAL, ';
//                 }
//             }
            
//             if(_sql.length > 5) {
//                 _sql = _sql.substr(0,_sql.length-2);
//             }

//             var _final = 'CREATE TABLE IF NOT EXISTS ' + tablename + '(' + _sql + ')';
//             console.log(_final);

//             return _final;
//         }
//         catch (e) {
//            return e;
//         }
//     }

//     async droptable(tablename: string) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 this.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                     }).then((db: SQLiteObject) => {
//                         db.executeSql('DROP TABLE IF EXISTS ' + tablename, [])
//                         .then(res => {
//                             console.log(res);
//                             resolve("success");
//                         })
//                         .catch(e => {
//                             console.log(e);
//                             resolve("failed");
//                         });
//                     }).catch(e => console.log(e));
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }


//     // build scripts

//     public insert(tablename: string, record: any) {
//         var _sqlString = 'INSERT INTO ' + tablename + ' VALUES(NULL,';
//         var _sqlValue = [];
//         var _result = [];
//         var _table = record.fields()[0];

//         for(var key in _table){                
//             if (!_table.hasOwnProperty(key)) continue;

//             if(_table[key] != 'pk'){
//                 var obj = record[key];
//                 _sqlString = _sqlString + '?,';          
//                 _sqlValue.push(obj);
//             }
//         }
//         _sqlString = _sqlString.substr(0,_sqlString.length-1) + ')';

//         _result.push(_sqlString);
//         _result.push(_sqlValue);

//         return _result;
//     }

//     public insertbulk(tablename: string, record: any, data: any) {
//         var _sqlString = 'INSERT INTO ' + tablename + ' (';
//         var _result = [];
//         var _table = record.fields()[0];

//         for(var key in _table){                
//             if (!_table.hasOwnProperty(key)) continue;

//             if(_table[key] != 'pk'){
//                 _sqlString = _sqlString + key + ',';
//             }
//         }

//         _sqlString = _sqlString.substr(0,_sqlString.length-1) + ') VALUES';

//         for(var x = 0; x <= data.data.length -1; x++){           
//             _sqlString = _sqlString + '(';     
//             for(var key in _table){
//                 if(_table[key] != 'pk'){
//                     var _val = data.data[x][key];
//                     if(_table[key] == 'string' || _table[key] == 'date' || _table[key] == 'boolean'){
//                         if(_val != null && _val != undefined && _val != 'null' && _val != 'undefined') {
//                             _val = _val.toString().replace('\'','\'\'');
//                         }
//                         else{
//                             _val = "";
//                         }
//                         _sqlString = _sqlString + "'" + _val + "',";
//                     }
//                     else{                        
//                         if(_val == null || _val == undefined || _val == 'null' || _val == 'undefined') {
//                             _val = "''";
//                         }
//                         _sqlString = _sqlString + _val + ',';
//                     }
//                 }
//             }
//             _sqlString = _sqlString.substr(0,_sqlString.length-1) + '),';
//         }

//         _sqlString = _sqlString.substr(0,_sqlString.length-1);
//         _result.push(_sqlString);

//         return _result;
//     }

//     async update(tablename: string, record: any) {
//         return new Promise((resolve, reject) => {
//             var _sqlString = 'UPDATE ' + tablename + ' SET ';
//             var _sqlValue = [];
//             var _result = [];
//             var _table = record.fields()[0];
//             var _where = '';

//             for(var key in _table){                
//                 if (!_table.hasOwnProperty(key)) continue;

//                 if(_table[key] != 'pk' && (record[key] != undefined && record[key] != null)){ //added null validation to not override existing data
//                     var obj = record[key];
//                     _sqlString = _sqlString + key + '=?, ';          
//                     _sqlValue.push(obj);
//                 }
//                 else if(_table[key] == 'pk' && (record[key] != undefined && record[key] != null)){
//                     var obj = record[key];
//                     _where = ' WHERE ' + key + ' = ' + obj;
//                 }
//             }
//             _sqlString = _sqlString.substr(0,_sqlString.length-2);
//             _sqlString = _sqlString + _where;

//             _result.push(_sqlString);
//             _result.push(_sqlValue);

//             console.log(_result);

//             resolve(_result);
//         });

        
//     }


//     // execute data scripts

//     async getDataTable(table: string) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql('SELECT * FROM ' + table, [])
//                     .then(res => {                   
//                         var _tableData = [];
//                         for(var i=0; i<=res.rows.length-1; i++) {
//                             var _row = res.rows.item(i);
//                             var fields = Object.keys(_row);
                            
//                             for(var x=0; x<=fields.length-1; x++) {
//                                 _tableData.push({'field':fields[x],'value':_row[fields[x]]||''});
//                             }                            
//                         }     
//                         console.log(_tableData);
//                         resolve(_tableData);                  
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

//     async getData(table: string) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql('SELECT * FROM ' + table, [])
//                     .then(res => {                   
//                         var _tableData = [];                        
//                         for(var i=0; i<=res.rows.length-1; i++) {
//                             var _recordData = [];
//                             var _row = res.rows.item(i);
//                             var fields = Object.keys(_row);
                            
//                             for(var x=0; x<=fields.length-1; x++) {
//                                 _recordData.push({'field':fields[x],'value':_row[fields[x]]||''});
//                             }
//                             _tableData.push(_recordData);
//                         }     
//                         resolve(_tableData);
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

//     async getRecord(table: string, model: any) {
//         var me = this;
//         try
//         {            
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql('SELECT * FROM ' + table, [])
//                     .then(res => {                      
//                         var _row = res.rows.item(0);
//                         var fields = Object.keys(_row);                            
//                         for(var x=0; x<=fields.length-1; x++) {
//                             model[fields[x]] = _row[fields[x]];
//                         }
//                         resolve(model);
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

//     async getDataQuery(query: string) {
//         var me = this;
//         try
//         {            
//             console.log(query);
//             return new Promise((resolve, reject) => {
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql(query, [])
//                     .then(res => {                      
//                         console.log(res);

//                         var _tableData = [];                        
//                         for(var i=0; i<=res.rows.length-1; i++) {
//                             var _recordData = [];
//                             var _row = res.rows.item(i);
//                             var fields = Object.keys(_row);
                            
//                             for(var x=0; x<=fields.length-1; x++) {
//                                 _recordData.push({'field':fields[x],'value':_row[fields[x]]||''});
//                             }
//                             _tableData.push(_recordData);
//                         }

//                         // var _data = JSON.parse(JSON.stringify(res));
//                         // var _items = [];
//                         // for(var x = 0; x <= _data.length-1; x++){
//                         //     var _item = [];
//                         //     var _entry = '{';
//                         //     for(var i = 0; i <= _data[x].length-1; i++){          
//                         //         var _fieldname = _data[x][i]["field"];
//                         //         var _value = _data[x][i]["value"];
//                         //         _entry = _entry +'"' + _fieldname + '": "' + _value + '",';
//                         //     }
//                         //     _entry = _entry.substr(0,_entry.length-1) + '}';
//                         //     _items.push(JSON.parse(_entry.replace(/(\r\n\t|\n|\r\t)/gm,"")));
//                         // }
//                         // console.log(_items);

//                         resolve(_tableData);                  
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

//     async addData(tablename: string, record: any) {
//         var me = this;
//         try
//         {            
//             var _sql = me.insert(tablename,record);

//             return new Promise((resolve, reject) => {
//                 this.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql(_sql[0],_sql[1])
//                     .then(res => {
//                         console.log(res);
//                         resolve("success");
//                     })
//                     .catch(e => {
//                         console.log(e);          
//                         resolve("failed");
//                     });
//                 })
//                 .catch(e => {
//                     console.log(e);
//                 });                
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     async addBulkData(tablename: string, record: any, data: any) {
//         var me = this;
//         try
//         {            
//             var _sql = me.insertbulk(tablename,record, data);
//             console.log(_sql[0]);

//             return new Promise((resolve, reject) => {
//                 this.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql(_sql[0],[])
//                     .then(res => {
//                         console.log(res);
//                         resolve("success");
//                     })
//                     .catch(e => {
//                         console.log(e);          
//                         resolve("failed");
//                     });
//                 })
//                 .catch(e => {
//                     console.log(e);
//                 });                
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }

//     async updateData(tablename: string, record: any) {
//         var me = this;
//         try
//         {      
//             return new Promise((resolve, reject) => {                
//                 me.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     console.log('UPDATE SYNCDATA HERE');
//                     me.update(tablename,record).then(res => {
//                         console.log(res);
//                         db.executeSql(res[0],res[1]).then(res => {
//                             resolve("success");  
//                         })
//                         .catch(e => {
//                             console.log(e);          
//                             resolve("failed");
//                         });
//                     });                    
//                 })
//                 .catch(e => {
//                     console.log(e);
//                 });                
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             });
//         }
//     }

//     async deleteData(tablename: string) {
//         var me = this;
//         try
//         {
//             return new Promise((resolve, reject) => {
//                 this.sqlite.create({
//                     name: 'irelydb.db',
//                     location: 'default'
//                 }).then((db: SQLiteObject) => {
//                     db.executeSql('DELETE FROM ' + tablename, [])
//                     .then(res => {
//                         console.log(res);
//                         resolve("success");  
//                     })
//                     .catch(e => {
//                         console.log(e);
//                         resolve("failed");
//                     });
//                 }).catch(e => console.log(e));
//             })
//         }
//         catch (e) {
//             return new Promise((resolve, reject) => {
//                 resolve("failed");
//             })
//         }
//     }


// }