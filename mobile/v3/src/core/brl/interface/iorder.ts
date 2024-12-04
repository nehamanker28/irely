import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Order } from '../../models/order';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IOrderBRL extends Base<Order> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}