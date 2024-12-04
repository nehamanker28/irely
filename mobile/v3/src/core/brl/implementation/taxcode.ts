import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { ITaxCodeBRL } from '../interface/itaxcode';

@Injectable()
export class TaxCodeBRL extends ITaxCodeBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}