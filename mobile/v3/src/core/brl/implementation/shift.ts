import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IShiftBRL } from '../interface/ishift';

@Injectable()
export class ShiftBRL extends IShiftBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}