import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Customer } from '../../models/customer';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class ICustomerBRL extends Base<Customer> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}