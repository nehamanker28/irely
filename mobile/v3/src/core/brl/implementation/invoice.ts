import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IInvoiceBRL } from '../interface/iinvoice';

@Injectable()
export class InvoiceBRL extends IInvoiceBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}