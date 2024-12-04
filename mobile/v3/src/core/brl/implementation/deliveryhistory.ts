import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IDeliveryHistoryBRL } from '../interface/ideliveryhistory';

@Injectable()
export class DeliveryHistoryBRL extends IDeliveryHistoryBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}