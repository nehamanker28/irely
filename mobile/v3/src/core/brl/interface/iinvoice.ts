import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Invoice } from '../../models/invoice';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IInvoiceBRL extends Base<Invoice> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}