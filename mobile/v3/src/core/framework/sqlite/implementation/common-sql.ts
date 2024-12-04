import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { ICommonSQL } from '../interface/icommon-sql';

@Injectable()
export class CommonSQL implements ICommonSQL {

    private db: SQLiteObject;
    private isOpen: boolean;

    constructor(public sqlite: SQLite){
        if (!this.isOpen) {
            this.sqlite = new SQLite();
            this.sqlite.create({ name: "irelydb2.db", location: "default" }).then((db: SQLiteObject) => {
                this.db = db;
                this.isOpen = true;
            }).catch((error) => {
                console.log(error);
            });
        }
    }
    
    //#region - BUILD STRING to SCRIPTS

    public buildtablescript(tablename: string, fields: any) {
        try
        {            
            var _sql = '';
            for(var x in fields){                        
                // console.log(x);
                // console.log(fields[x]);

                if(fields[x] == 'pk'){
                    _sql = x + ' INTEGER PRIMARY KEY, ';
                }
                else if(fields[x] == 'number'){
                    _sql = _sql + x + ' INT, ';
                }
                else if(fields[x] == 'string' || fields[x] == 'date' || fields[x] == 'boolean'){
                    _sql = _sql + x + ' TEXT, ';
                }
                else if(fields[x] == 'decimal'){
                    _sql = _sql + x + ' REAL, ';
                }
            }
            
            if(_sql.length > 5) {
                _sql = _sql.substr(0,_sql.length-2);
            }

            var _final = 'CREATE TABLE IF NOT EXISTS ' + tablename + '(' + _sql + ')';
            console.log(_final);

            return _final;
        }
        catch (e) {
            console.log(e);
           return e;
        }
    }    

    public insert(tablename: string, record: any) {
        try
        {
            var _sqlString = 'INSERT INTO ' + tablename + ' VALUES(NULL,';
            var _sqlValue = [];
            var _result = [];
            var _table = record['mapping'];

            for(var key in _table){                
                if (!_table.hasOwnProperty(key)) continue;

                if(_table[key] != 'pk'){
                    var obj = record[key];
                    _sqlString = _sqlString + '?,';          
                    _sqlValue.push(obj);
                }
            }
            _sqlString = _sqlString.substr(0,_sqlString.length-1) + ')';

            _result.push(_sqlString);
            _result.push(_sqlValue);

            console.log(_result);

            return _result;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    public insertbulk(tablename: string, record: any, data: any) {
        try
        {
            var _sqlString = 'INSERT INTO ' + tablename + ' (';
            var _result = [];
            var _table = record['mapping'];

            for(var insertKey in _table){                
                if (!_table.hasOwnProperty(insertKey)) continue;

                if(_table[insertKey] != 'pk'){
                    _sqlString = _sqlString + insertKey + ',';
                }
            }

            _sqlString = _sqlString.substr(0,_sqlString.length-1) + ') VALUES';

            if(!data.data) {
                data.data = data;
            }

            for(var x = 0; x <= data.data.length -1; x++){           
                _sqlString = _sqlString + '(';     
                for(var key in _table){
                    if(_table[key] != 'pk'){
                        var _val = data.data[x][key];
                        if(_table[key] == 'string' || _table[key] == 'date' || _table[key] == 'boolean'){
                            if(_val != null && _val != undefined && _val != 'null' && _val != 'undefined') {
                                _val = _val.toString().replace(/'/g,''); //temporary
                            }
                            else{
                                _val = "";
                            }
                            _sqlString = _sqlString + "'" + _val + "',";
                        }
                        else{                        
                            if(_val == null || _val == undefined || _val == 'null' || _val == 'undefined' || _val == '') {
                                _val = "''";
                            }
                            _sqlString = _sqlString + _val + ',';
                        }
                    }
                }
                _sqlString = _sqlString.substr(0,_sqlString.length-1) + '),';
            }

            _sqlString = _sqlString.substr(0,_sqlString.length-1);
            _result.push(_sqlString);

            console.log(_result);

            return _result;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    public update(tablename: string, record: any) {
        try
        {
            var _sqlString = 'UPDATE ' + tablename + ' SET ';
            var _sqlValue = [];
            var _result = [];
            var _table = record['mapping'];
            var _where = '';

            for(var updateKey in _table){                
                if (!_table.hasOwnProperty(updateKey)) continue;

                if(_table[updateKey] != 'pk' && (record[updateKey] != undefined && record[updateKey] != null)){ //added null validation to not override existing data
                    var obj1 = record[updateKey];
                    _sqlString = _sqlString + updateKey + '=?, ';          
                    _sqlValue.push(obj1);
                }
                else if(_table[updateKey] == 'pk' && (record[updateKey] != undefined && record[updateKey] != null)){
                    var obj2 = record[updateKey];
                    _where = ' WHERE ' + updateKey + ' = ' + obj2;
                }
            }
            _sqlString = _sqlString.substr(0,_sqlString.length-2);
            _sqlString = _sqlString + _where;

            _result.push(_sqlString);
            _result.push(_sqlValue);

            console.log(_result);

            return _result;
        }
        catch (e) {
            console.log(e);
            return e;
        }        
    }

    //#endregion

    //#region - EXECUTE SCRIPTS

    getDataTable(table: string) {
        var me = this;
        return new Promise ((resolve, reject) => {                  
            me.db.executeSql('SELECT * FROM ' + table, []).then(res => {                   
                var _tableData = [];
                for(var i=0; i<=res.rows.length-1; i++) {
                    var _row = res.rows.item(i);              
                    _tableData.push(_row);
                }     
                console.log(_tableData);
                console.log('Get data from ' + table);
                resolve(_tableData);
            }, (error) => {
                console.log(error);
                reject(error);
            });  
        });
    }

    getData(table: string) {
        var me = this;
        return new Promise ((resolve, reject) => {       
            me.db.executeSql('SELECT * FROM ' + table, [])
            .then(res => {                   
                var _tableData = [];                        
                for(var i=0; i<=res.rows.length-1; i++) {
                    var _row = res.rows.item(i);
                    _tableData.push(_row);
                }     
                console.log(_tableData);
                console.log('Get data from ' + table);
                resolve(_tableData);
            }, (error) => {
                console.log(error);
                reject(error);
            });  
        });
    }

    getRecord(table: string) {
        var me = this;
        return new Promise ((resolve, reject) => {    
            me.db.executeSql('SELECT * FROM ' + table, [])
            .then(res => {       
                console.log(res);               
                var _row = res.rows.item(0);
                console.log(_row);
                console.log('Get record from ' + table);
                resolve(_row);
            }, (error) => {
                console.log(error);
                reject(error);
            });  
        });
    }

    getDataQuery(query: string) {
        var me = this;
        return new Promise ((resolve, reject) => {          
            me.db.executeSql(query, [])
            .then(res => {                                          
                var _tableData = [];                        
                for(var i=0; i<=res.rows.length-1; i++) {
                    var _row = res.rows.item(i);     
                    _tableData.push(_row);
                }
                console.log(_tableData);
                console.log('Get Data from Query');
                resolve(_tableData);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        }); 
    }


    addData(tablename: string, record: any) {
        var me = this;      
        return new Promise ((resolve, reject) => {    
            var _sql = me.insert(tablename,record);
            console.log(_sql);
            me.db.executeSql(_sql[0],_sql[1])
            .then(res => {
                console.log(res);
                console.log('Data added ' + tablename);
                resolve(res);
            }, (error) => {
                console.log(error);
                reject(error);
            });  
        });
    }

    addBulkData(tablename: string, record: any, data: any) {
        var me = this;
        return new Promise ((resolve, reject) => {
            var _sql = me.insertbulk(tablename,record, data);
            console.log(_sql[0]);
            me.db.executeSql(_sql[0],[])
            .then(res => {
                console.log(res);
                console.log('Bulk data added ' + tablename);
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });                 
        });
    }


    updateData(tablename: string, record: any) {
        var me = this;
        return new Promise ((resolve, reject) => {    
            var _sql = me.update(tablename,record);            
            me.db.executeSql(_sql[0],_sql[1])
            .then((data) => {
                console.log(data);
                console.log('Record updated ' + tablename);
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }

    updateDataQuery(query: string) {
        var me = this;
        return new Promise ((resolve, reject) => {           
            me.db.executeSql(query, [])
            .then((data) => {
                console.log(data);
                console.log('Record updated ' + query);
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }

    deleteData(tablename: string, query: string) {
        var me = this;
        return new Promise ((resolve, reject) => {           
            me.db.executeSql('DELETE FROM ' + tablename + query, [])
            .then((data) => {
                console.log(data);
                console.log('Record deleted ' + tablename + ' ' + query);
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }

    deleteDataQuery(query: string) {
        var me = this;
        return new Promise ((resolve, reject) => {           
            me.db.executeSql('DELETE FROM ' + query, [])
            .then((data) => {
                console.log(data);
                console.log('Record deleted ' + query);
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }


    createTable(entity: any){
        var me = this;
        return new Promise ((resolve, reject) => {
            var _sql = me.buildtablescript(entity['tablename'],entity['mapping']);
            this.db.executeSql(_sql, [])
            .then((data) =>{
                console.log('Created ' + entity['tablename'] + ' Table');
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    
    dropTable(entity: any){
        debugger;

        console.log('DROP TABLE ' + entity['tablename']);
        return new Promise ((resolve, reject) => {
            this.db.executeSql('DROP TABLE IF EXISTS ' + entity['tablename'] || entity, [])
            .then((data) =>{
                console.log('Dropped ' + entity['tablename'] + ' Table');
                resolve(data);
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }

    //#endregion

}