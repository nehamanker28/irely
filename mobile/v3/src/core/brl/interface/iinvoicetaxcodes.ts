import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { InvoiceTaxCodes } from '../../models/invoicetaxcodes';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IInvoiceTaxCodesBRL extends Base<InvoiceTaxCodes> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}