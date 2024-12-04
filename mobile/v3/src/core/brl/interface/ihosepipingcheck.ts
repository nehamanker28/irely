import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { HosepipingCheck } from '../../models/hosepipingcheck';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IHosepipingCheckBRL extends Base<HosepipingCheck> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}