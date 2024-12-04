import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { ITermsBRL } from '../interface/iterms';

@Injectable()
export class TermsBRL extends ITermsBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}