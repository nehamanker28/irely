import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';

import { MBILOrder } from '../../models/tblMBILOrder';
import { Base } from '../../_common/sqlite/implementation/base';
import { CommonSQL } from '../../_common/sqlite/implementation/common-sql';

@Injectable()
export class IOrderBRL extends Base<MBILOrder> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}