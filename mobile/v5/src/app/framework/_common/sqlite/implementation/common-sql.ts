import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { ICommonSQL } from '../interface/icommon-sql';
import { Configuration } from '../../configuration/configuration';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

import { ARCustomer } from '../../../models/tblARCustomer'
import { CategoryTax } from '../../../models/tblCategoryTax';
import { CategoryTaxExemption } from '../../../models/tblCategoryTaxExemption';
import { ContractExport } from '../../../models/tblContractExport';
import { CustomerSpecialPricing } from '../../../models/tblCustomerSpecialPricing';
import { CustomerMultiLevelPricing } from '../../../models/tblCustomerMultiLevelPricing';
import { CustomerTaxExemption } from '../../../models/tblCustomerTaxExemption';
import { EntityLocation } from '../../../models/tblEntityLocation';
import { FullTax } from '../../../models/tblFullTax';
import { InventoryItem } from '../../../models/tblInventoryItem';
import { MBILCompanyPreference } from '../../../models/tblMBILCompanyPreference';
import { MBILOrder } from '../../../models/tblMBILOrder';
import { MBILOrderItem } from '../../../models/tblMBILOrderItem';
import { MBILOrderTaxCode } from '../../../models/tblMBILOrderTaxCode';
import { SMLocation } from '../../../models/tblSMLocation';
import { SMTerm } from '../../../models/tblSMTerm';
import { SMTruck } from '../../../models/tblSMTruck';
import { TMDeliveryHistory } from '../../../models/tblTMDeliveryHistory';
import { TMSite } from '../../../models/tblTMSite';
import { TMSiteDevice } from '../../../models/tblTMSiteDevice';
import { tblSMCompanySetup } from '../../../models/tblSMCompanySetup';

import { GlobalInfo } from '../../../models/globalinfo';
import { HosepipingCheck } from '../../../models/hosepipingcheck';
import { Invoice } from '../../../models/invoice';
import { InvoiceItems } from '../../../models/invoiceitems';
import { InvoiceTaxCodes } from '../../../models/invoicetaxcodes';
import { Shift } from '../../../models/shift';
import { SyncDeviceData } from '../../../models/syncdevicedata';
import { User } from '../../../models/user';
import { VehicleInspection } from '../../../models/vehicleinspection';
import { OutOfGas } from '../../../models/outofgas';
import { Payment } from '../../../models/payment';
import { LoadInventory } from '../../../models/loadinventory';
import { Tankwagon } from '../../../models/tankwagon';
import { LineFlushAndTransfer } from '../../../models/lineflushandtransfer';
import { OrderSite } from '../../../models/ordersite';
import { tblMBILPDF } from '../../../models/tblMBILPDF';

// import { ContractHeader } from '../../../models/contractheader';
// import { ContractDetail } from '../../../models/contractdetail';

@Injectable()
export class CommonSQL implements ICommonSQL {

  private db: SQLiteObject;
  private isOpen: boolean;
  counter: number = 0;
  refreshTableInterval: any;

  constructor(public sqlite: SQLite, private sqlitePorter: SQLitePorter) {
    ;
    this.openSQLite().then((res) => {
      console.log('init');
      this.initiateSQLite();
    });
  }

  async openSQLite() {
    var me = this;
    this.sqlite = await new SQLite();
  }

  async initiateSQLite(): Promise<any> {
    return new Promise((resolve, reject) => {
      var me = this;
      if (!Configuration.sqliteIsOpen) {
        if (!me.sqlite.create({ name: "irely_sqlite_db.db", location: "default" })) return;

        me.sqlite.create({ name: "irely_sqlite_db.db", location: "default" }).then((db: SQLiteObject) => {
          me.db = db;
          me.isOpen = true;
          Configuration.sqlite = db;
          Configuration.sqliteIsOpen = true;
          console.log('open sql');
          resolve(db);
        }).catch((error) => {
          console.log(error);
          resolve(error);
        });
      }
      else {
        me.db = Configuration.sqlite;
        resolve(me.db);
      }
      console.log(me.db);
    });
  }

  async createDB() {
    ;
    console.log('createDB');
    if (!this.isOpen) {
      await this.sqlite.create({ name: "irely_sqlite_db.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  //#region - BUILD STRING to SCRIPTS

  public buildtablescript(tablename: string, fields: any) {
    try {
      var _sql = '';
      for (var x in fields) {
        if (fields[x] == 'pk') {
          _sql = x + ' INTEGER PRIMARY KEY, ';
        }
        else if (fields[x] == 'number') {
          _sql = _sql + x + ' INT, ';
        }
        else if (fields[x] == 'string' || fields[x] == 'date' || fields[x] == 'boolean') {
          _sql = _sql + x + ' TEXT, ';
        }
        else if (fields[x] == 'decimal') {
          _sql = _sql + x + ' REAL, ';
        }
      }

      if (_sql.length > 5) {
        _sql = _sql.substr(0, _sql.length - 2);
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
    try {
      var _sqlString = 'INSERT INTO ' + tablename + ' VALUES(NULL,';
      var _sqlValue = [];
      var _result = [];
      var _table = record['mapping'];

      for (var key in _table) {
        if (!_table.hasOwnProperty(key)) continue;

        if (_table[key] != 'pk') {
          var obj = record[key];
          _sqlString = _sqlString + '?,';
          _sqlValue.push(obj);
        }
      }
      _sqlString = _sqlString.substr(0, _sqlString.length - 1) + ')';

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
    try {
      var _sqlString = 'INSERT INTO ' + tablename + ' (';
      var _result = [];
      var _table = record['mapping'];

      for (var insertKey in _table) {
        if (!_table.hasOwnProperty(insertKey)) continue;

        if (_table[insertKey] != 'pk') {
          _sqlString = _sqlString + insertKey + ',';
        }
      }

      _sqlString = _sqlString.substr(0, _sqlString.length - 1) + ') VALUES';

      if (!data.data) {
        data.data = data;
      }

      for (var x = 0; x <= data.data.length - 1; x++) {
        _sqlString = _sqlString + '(';
        for (var key in _table) {
          if (_table[key] != 'pk') {
            var _val = data.data[x][key];
            if (_table[key] == 'string' || _table[key] == 'date' || _table[key] == 'boolean') {
              if (_val != null && _val != undefined && _val != 'null' && _val != 'undefined') {
                _val = _val.toString().replace(/'/g, ''); //temporary
              }
              else {
                _val = "";
              }
              _sqlString = _sqlString + "'" + _val + "',";
            }
            else {
              if (_val == null || _val == undefined || _val == 'null' || _val == 'undefined' || _val == '') {
                _val = "''";
              }
              _sqlString = _sqlString + _val + ',';
            }
          }
        }
        _sqlString = _sqlString.substr(0, _sqlString.length - 1) + '),';
      }

      _sqlString = _sqlString.substr(0, _sqlString.length - 1);
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
    try {
      var _sqlString = 'UPDATE ' + tablename + ' SET ';
      var _sqlValue = [];
      var _result = [];
      var _table = record['mapping'];
      var _where = '';

      for (var updateKey in _table) {
        if (!_table.hasOwnProperty(updateKey)) continue;

        if (_table[updateKey] != 'pk' && (record[updateKey] != undefined && record[updateKey] != null)) { //added null validation to not override existing data
          var obj1 = record[updateKey];
          _sqlString = _sqlString + updateKey + '=?, ';
          _sqlValue.push(obj1);
        }
        else if (_table[updateKey] == 'pk' && (record[updateKey] != undefined && record[updateKey] != null)) {
          var obj2 = record[updateKey];
          _where = ' WHERE ' + updateKey + ' = ' + obj2;
        }
      }
      _sqlString = _sqlString.substr(0, _sqlString.length - 2);
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

  getDataTable(table: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      console.log(table);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          me.db.executeSql('SELECT * FROM ' + table, []).then(res => {
            var _tableData = [];
            for (var i = 0; i <= res.rows.length - 1; i++) {
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
      else {
        me.db.executeSql('SELECT * FROM ' + table, []).then(res => {
          var _tableData = [];
          for (var i = 0; i <= res.rows.length - 1; i++) {
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
      }
    });
  }

  getData(table: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      console.log(table);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          me.db.executeSql('SELECT * FROM ' + table, [])
            .then(res => {
              var _tableData = [];
              for (var i = 0; i <= res.rows.length - 1; i++) {
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
      else {
        me.db.executeSql('SELECT * FROM ' + table, [])
          .then(res => {
            var _tableData = [];
            for (var i = 0; i <= res.rows.length - 1; i++) {
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
      }
    });
  }

  getRecord(table: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      console.log(table);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
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
      else {
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
      }
    });
  }

  getDataQuery(query: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      console.log(query);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          me.db.executeSql(query, [])
            .then(res => {
              var _tableData = [];
              for (var i = 0; i <= res.rows.length - 1; i++) {
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
      else {
        me.db.executeSql(query, [])
          .then(res => {
            var _tableData = [];
            for (var i = 0; i <= res.rows.length - 1; i++) {
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
      }
    });
  }


  addData(tablename: string, record: any): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      console.log(tablename,record);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          var _sql = me.insert(tablename, record);
          console.log(_sql);
          me.db.executeSql(_sql[0], _sql[1])
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
      else {
        var _sql = me.insert(tablename, record);
        console.log(_sql);
        me.db.executeSql(_sql[0], _sql[1])
          .then(res => {
            console.log(res);
            console.log('Data added ' + tablename);
            resolve(res);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }

    });
  }

  addBulkData(tablename: string, record: any, data: any): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      console.log(tablename,data);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          var _sql = me.insertbulk(tablename, record, data);
          console.log(_sql[0]);
          me.db.executeSql(_sql[0], [])
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
      else {
        var _sql = me.insertbulk(tablename, record, data);
        console.log(_sql[0]);
        me.db.executeSql(_sql[0], [])
          .then(res => {
            console.log(res);
            console.log('Bulk data added ' + tablename);
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }
    });
  }


  updateData(tablename: string, record: any): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      console.log(tablename,record);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          var _sql = me.update(tablename, record);
          me.db.executeSql(_sql[0], _sql[1])
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
      else {
        var _sql = me.update(tablename, record);
        me.db.executeSql(_sql[0], _sql[1])
          .then((data) => {
            console.log(data);
            console.log('Record updated ' + tablename);
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }
    });
  }

  updateDataQuery(query: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      console.log(query);
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
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
      else {
        me.db.executeSql(query, [])
          .then((data) => {
            console.log(data);
            console.log('Record updated ' + query);
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }
    });
  }

  deleteData(tablename: string, query: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
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
      else {
        me.db.executeSql('DELETE FROM ' + tablename + query, [])
          .then((data) => {
            console.log(data);
            console.log('Record deleted ' + tablename + ' ' + query);
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }
    });
  }

  deleteDataQuery(query: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
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
      else {
        me.db.executeSql('DELETE FROM ' + query, [])
          .then((data) => {
            console.log(data);
            console.log('Record deleted ' + query);
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }
    });
  }

  createTable(entity: any): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          var _sql = me.buildtablescript(entity['tablename'], entity['mapping']);
          me.db.executeSql(_sql, [])
            .then((data) => {
              console.log('Created ' + entity['tablename'] + ' Table');
              resolve(data);
            }, (error) => {
              console.log(error);
              reject(error);
            });
        });
      }
      else {
        var _sql = me.buildtablescript(entity['tablename'], entity['mapping']);
        me.db.executeSql(_sql, [])
          .then((data) => {
            console.log('Created ' + entity['tablename'] + ' Table');
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }
    });
  }

  dropTable(entity: any): Promise<any> {
    var me = this;
    console.log('DROP TABLE ' + entity['tablename'] || entity);
    return new Promise((resolve, reject) => {
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          me.db.executeSql('DROP TABLE IF EXISTS ' + entity['tablename'] || entity, [])
            .then((data) => {
              console.log('Dropped ' + entity['tablename'] + ' Table');
              resolve(data);
            }, (error) => {
              console.log(error);
              reject(error);
            });
        });
      }
      else {
        me.db.executeSql('DROP TABLE IF EXISTS ' + entity['tablename'] || entity, [])
          .then((data) => {
            console.log('Dropped ' + entity['tablename'] + ' Table');
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
      }
    });
  }

  //#endregion

  //#region - JSON TO DB

  importDataFromServer(jsonFile: any): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      // var successFn = function(count){
      //     alert("Successfully imported JSON to DB; equivalent to "+count+" SQL statements");
      // };
      // var errorFn = function(error){
      //     alert("The following error occurred: "+error.message);
      // };
      // var progressFn = function(current, total){
      //     console.log("Imported "+current+"/"+total+" statements");
      // };

      console.log('INSERT THIS ==> ');
      console.log(jsonFile);

      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          this.sqlitePorter.importJsonToDb(me.db, jsonFile)
          .then(res => {
            console.log('Data IMPORTED ==> ', res);
            resolve(res);
          }, (error) => {
            console.log(error);
            reject(error);
          });
        });
      }
      else {
        this.sqlitePorter.importJsonToDb(me.db, jsonFile)
        .then(res => {
          console.log('Data IMPORTED ==> ', res);
          resolve(res);
        }, (error) => {
          console.log(error);
          reject(error);
        });
      }

    });
  }

  //#endregion

  //#region - Database and Table

  wipeDB(): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          this.sqlitePorter.wipeDb(me.db).then((data) => {
            console.log('Dropped DB');
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
        });
      }
      else {
        this.sqlitePorter.wipeDb(me.db)
        .then((data) => {
          console.log('Dropped DB');
          resolve(data);
        }, (error) => {
          console.log(error);
          reject(error);
        });
      }
    });
  }

  DropAndCreate(table, createAll): Promise<any> {
    return new Promise((resolve, reject) => {

      var me = this;
      var tablename = '';
      me.counter = 0;

      if (table) {
        tablename = table['strTableName'];
      }

      if (createAll == true) {
        var refresh = function () {
          if (me.counter >= 72) { //total number of tables x 2
            me.counter = 0;
            ;
            clearInterval(me.refreshTableInterval);
            console.log('+++++++ TABLE DROP and CREATE +++++++++');
            resolve(me);
          }
        }
        me.refreshTableInterval = setInterval(function () { refresh(); }, 500);
      }

      // ++++++++++++++++++
      // +++++ TABLES +++++
      // ++++++++++++++++++

      // #1
      if (tablename == 'tblARCustomer' || createAll == true) {
        me.dropTable(new ARCustomer()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new ARCustomer()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #2
      if (tablename == 'tblCategoryTax' || createAll == true) {
        me.dropTable(new CategoryTax()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new CategoryTax()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #3
      if (tablename == 'tblCategoryTaxExemption' || createAll == true) {
        me.dropTable(new CategoryTaxExemption()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new CategoryTaxExemption()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #4
      if (tablename == 'tblContractExport' || createAll == true) {
        me.dropTable(new ContractExport()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new ContractExport()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #5
      if (tablename == 'tblCustomerSpecialPricing' || createAll == true) {
        me.dropTable(new CustomerSpecialPricing()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new CustomerSpecialPricing()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #6
      if (tablename == 'tblCustomerTaxExemption' || createAll == true) {
        me.dropTable(new CustomerTaxExemption()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new CustomerTaxExemption()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #7
      if (tablename == 'tblEntityLocation' || createAll == true) {
        me.dropTable(new EntityLocation()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new EntityLocation()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #8
      if (tablename == 'tblFullTax' || createAll == true) {
        me.dropTable(new FullTax()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new FullTax()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #9
      if (tablename == 'tblInventoryItem' || createAll == true) {
        me.dropTable(new InventoryItem()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new InventoryItem()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #10
      if (tablename == 'tblMBILCompanyPreference' || createAll == true) {
        me.dropTable(new MBILCompanyPreference()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new MBILCompanyPreference()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #11
      if (tablename == 'tblMBILOrder' || createAll == true) {
        me.dropTable(new MBILOrder()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new MBILOrder()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #12
      if (tablename == 'tblMBILOrderItem' || createAll == true) {
        me.dropTable(new MBILOrderItem()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new MBILOrderItem()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #13
      if (tablename == 'tblMBILOrderTaxCode' || createAll == true) {
        me.dropTable(new MBILOrderTaxCode()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new MBILOrderTaxCode()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #14
      if (tablename == 'tblSMLocation' || createAll == true) {
        me.dropTable(new SMLocation()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new SMLocation()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #15
      if (tablename == 'tblSMTerm' || createAll == true) {
        me.dropTable(new SMTerm()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new SMTerm()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #16
      if (tablename == 'tblSMTruck' || createAll == true) {
        me.dropTable(new SMTruck()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new SMTruck()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #17
      if (tablename == 'tblTMDeliveryHistory' || createAll == true) {
        me.dropTable(new TMDeliveryHistory()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new TMDeliveryHistory()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #18
      if (tablename == 'tblTMSite' || createAll == true) {
        me.dropTable(new TMSite()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new TMSite()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #19
      if (tablename == 'tblTMSiteDevice' || createAll == true) {
        me.dropTable(new TMSiteDevice()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new TMSiteDevice()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }


      // ++++++++++++++++++++++++++++
      // ++++++ REGULAR TABLE +++++++
      // ++++++++++++++++++++++++++++


      // #20
      if (tablename == 'ordersite' || createAll == true) {
        me.dropTable(new OrderSite()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new OrderSite()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #21
      if (tablename == 'globalinfo' || createAll == true) {
        me.dropTable(new GlobalInfo()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new GlobalInfo()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #22
      if (tablename == 'horsepipingcheck' || createAll == true) {
        me.dropTable(new HosepipingCheck()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new HosepipingCheck()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #23
      if (tablename == 'invoice' || createAll == true) {
        me.dropTable(new Invoice()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new Invoice()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #24
      if (tablename == 'invoiceitems' || createAll == true) {
        me.dropTable(new InvoiceItems()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new InvoiceItems()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #25
      if (tablename == 'invoicetaxcodes' || createAll == true) {
        me.dropTable(new InvoiceTaxCodes()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new InvoiceTaxCodes()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #26
      if (tablename == 'lineflushandtransfer' || createAll == true) {
        me.dropTable(new LineFlushAndTransfer()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new LineFlushAndTransfer()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #27
      if (tablename == 'loadinventory' || createAll == true) {
        me.dropTable(new LoadInventory()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new LoadInventory()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #28
      if (tablename == 'outofgas' || createAll == true) {
        me.dropTable(new OutOfGas()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new OutOfGas()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #29
      if (tablename == 'payment' || createAll == true) {
        me.dropTable(new Payment()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new Payment()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #30
      if (tablename == 'shift' || createAll == true) {
        me.dropTable(new Shift()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new Shift()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #31
      if (tablename == 'syncdevicedata' || createAll == true) {
        me.dropTable(new SyncDeviceData()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new SyncDeviceData()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #32
      if (tablename == 'tankwagon' || createAll == true) {
        me.dropTable(new Tankwagon()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new Tankwagon()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #33
      if (tablename == 'user' || createAll == true) {
        me.dropTable(new User()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new User()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #34
      if (tablename == 'vehicleinspection' || createAll == true) {
        me.dropTable(new VehicleInspection()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new VehicleInspection()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #35
      if (tablename == 'tblSMCompanySetup' || createAll == true) {
        me.dropTable(new tblSMCompanySetup()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new tblSMCompanySetup()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #36
      if (tablename == 'tblCustomerMultiLevelPricing' || createAll == true) {
        me.dropTable(new CustomerMultiLevelPricing()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new CustomerMultiLevelPricing()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }

      // #37
      if (tablename == 'tblMBILPDF' || createAll == true) {
        me.dropTable(new tblMBILPDF()).then(res => {
          console.log(res);
          me.counter++;
          me.createTable(new tblMBILPDF()).then(res => {
            console.log(res);
            me.counter++;
            console.log(tablename);
            if (createAll == false) { resolve(table); }
          });
        });
      }



    });

  }

  executeQuery(query: string): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {
      if (me.db == undefined) {
        console.log('reconfigure sqlite');
        me.initiateSQLite().then(() => {
          me.db.executeSql(query, [])
          .then((data) => {
            console.log(data);
            console.log('Query successfully executed ' + query);
            resolve(data);
          }, (error) => {
            console.log(error);
            reject(error);
          });
        });
      }
      else {
        me.db.executeSql(query, [])
        .then((data) => {
          console.log(data);
          console.log('Query successfully executed ' + query);
          resolve(data);
        }, (error) => {
          console.log(error);
          reject(error);
        });
      }
    });
  }

  //#endregion


}
