import { Injectable } from '@angular/core';
import { IBase } from '../interface/ibase';
import { CommonSQL } from './common-sql';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable()
export class Base<T> implements IBase<T> {

    constructor(public common: CommonSQL, public sqlite: SQLite) { }    

    get(entity: T) {
        var me = this;
        try
        {
            return me.common.getData(entity['tablename']);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    getByQuery(query: string) {
        var me = this;
        try
        {
            console.log(query);
            return me.common.getDataQuery(query);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    getRecord(entity: T) {
        var me = this;
        try
        {
            return me.common.getRecord(entity['tablename']);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    add(entity: T) {
        var me = this;
        try
        {
            return me.common.addData(entity['tablename'], entity);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    addBulk(entity: T, data: any) {
        var me = this;
        try
        {
            return me.common.addBulkData(entity['tablename'], entity, data);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    update(entity: T) {
        var me = this;
        try
        {
            return me.common.updateData(entity['tablename'], entity);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    updateByQuery(query: string) {
        var me = this;
        try
        {
            return me.common.updateDataQuery(query);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    deleteByQuery(query: string) {
        var me = this;
        try
        {
            return me.common.deleteDataQuery(query);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }

    

    createTable(entity: T) {
        var me = this;
        try
        {
            return me.common.dropTable(entity['tablename']).then(()=>me.common.createTable(entity));
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    
    deleteTable(entity: T) {
        var me = this;
        try
        {
            return me.common.dropTable(entity['tablename']);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    
}