import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { Base } from '../../_common/sqlite/implementation/base';
import { CommonSQL } from '../../_common/sqlite/implementation/common-sql';

@Injectable()
export class IUserBRL extends Base<User> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}