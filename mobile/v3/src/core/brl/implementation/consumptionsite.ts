import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IConsumptionSiteBRL } from '../interface/iconsumptionsite';

@Injectable()
export class ConsumptionSiteBRL extends IConsumptionSiteBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}