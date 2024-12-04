import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Shift } from '../../models/shift';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IShiftBRL extends Base<Shift> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}