import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IOutOfGasBRL } from '../interface/ioutofgas';

@Injectable()
export class OutOfGasBRL extends IOutOfGasBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}