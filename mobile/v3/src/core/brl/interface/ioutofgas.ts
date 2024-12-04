import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { OutOfGas } from '../../models/outofgas';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IOutOfGasBRL extends Base<OutOfGas> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}