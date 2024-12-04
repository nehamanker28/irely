import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IInvoiceItemsBRL } from '../interface/iinvoiceitems';

@Injectable()
export class InvoiceItemsBRL extends IInvoiceItemsBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}