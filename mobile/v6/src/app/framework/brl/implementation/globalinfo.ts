import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../_common/sqlite/implementation/common-sql';
import { IGlobalInfoBRL } from '../interface/iglobalinfo';
import { GlobalInfo } from '../../models/globalinfo';

@Injectable()
export class GlobalInfoBRL extends IGlobalInfoBRL<GlobalInfo> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}