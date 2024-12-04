import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Location } from '../../models/location';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class ILocationBRL extends Base<Location> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}