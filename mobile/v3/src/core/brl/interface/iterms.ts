import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Terms } from '../../models/terms';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class ITermsBRL extends Base<Terms> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}