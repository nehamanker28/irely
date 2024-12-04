import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Item } from '../../models/item';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IItemBRL extends Base<Item> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}