import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IApplicableTaxCodeBRL } from '../interface/iapplicabletaxcode';

@Injectable()
export class ApplicableTaxCodeBRL extends IApplicableTaxCodeBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}