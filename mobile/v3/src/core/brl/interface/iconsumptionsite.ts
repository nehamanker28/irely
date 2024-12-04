import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { ConsumptionSite } from '../../models/consumptionsite';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IConsumptionSiteBRL extends Base<ConsumptionSite> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}