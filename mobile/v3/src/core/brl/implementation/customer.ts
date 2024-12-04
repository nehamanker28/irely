import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { ICustomerBRL } from '../interface/icustomer';

@Injectable()
export class CustomerBRL extends ICustomerBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}