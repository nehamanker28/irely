import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IInvoiceTaxCodesBRL } from '../interface/iinvoicetaxcodes';

@Injectable()
export class InvoiceTaxCodesBRL extends IInvoiceTaxCodesBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}