import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IGlobalInfoBRL<GlobalInfo> extends Base<GlobalInfo> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}