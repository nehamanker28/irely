import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Payment } from '../../models/payment';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IPaymentBRL extends Base<Payment> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}