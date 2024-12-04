import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { LoadInventory } from '../../models/loadinventory';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class ILoadInventoryBRL extends Base<LoadInventory> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}