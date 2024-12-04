import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { InvoiceItems } from '../../models/invoiceitems';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IInvoiceItemsBRL extends Base<InvoiceItems> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}