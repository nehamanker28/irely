import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { User } from '../../models/user';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IUserBRL extends Base<User> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}