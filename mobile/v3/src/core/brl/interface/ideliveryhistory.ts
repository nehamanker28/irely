import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { DeliveryHistory } from '../../models/deliveryhistory';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IDeliveryHistoryBRL extends Base<DeliveryHistory> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}