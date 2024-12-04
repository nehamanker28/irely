import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class DatabaseProvider {

  private db: SQLiteObject;
  private isOpen: boolean;

  constructor(public storage: SQLite) {
    if (!this.isOpen) {
      this.storage = new SQLite();
      this.storage.create({ name: "irelydb.db", location: "default" }).then((db: SQLiteObject) => {
        this.db = db;
        this.isOpen = true;
      }).catch((error) => {
        console.log(error);
      });
    }
  }

  createTable(entity: any){
    var me = this;
    return new Promise ((resolve, reject) => {
        var _sql = me.generateScript(entity['tablename'],entity['mapping']);
        this.db.executeSql(_sql, []).then((data) =>{
            console.log('Created ' + entity['tablename'] + ' Table');
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
  }

  dropTable(entity: any){
    return new Promise ((resolve, reject) => {
        this.db.executeSql('DROP TABLE IF EXISTS ' + entity['tablename'], []).then((data) =>{
            console.log('Dropped ' + entity['tablename'] + ' Table');
            resolve(data);
        }, (error) => {
            reject(error);
        });
    });
  }
  
  public generateScript(tablename: string, fields: any) {
    try
    {            
        var _sql = '';
        for(var x in fields){                        
            console.log(x);
            console.log(fields[x]);

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
       return e;
    }
}  

}