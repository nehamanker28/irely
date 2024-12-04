import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IHosepipingCheckBRL } from '../interface/ihosepipingcheck';

@Injectable()
export class HosepipingCheckBRL extends IHosepipingCheckBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}