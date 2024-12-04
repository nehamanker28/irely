import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { TaxCode } from '../../models/taxcode';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class ITaxCodeBRL extends Base<TaxCode> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}