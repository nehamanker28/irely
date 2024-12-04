import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { ICompanyPreferenceBRL } from '../interface/icompanypreference';

@Injectable()
export class CompanyPreferenceBRL extends ICompanyPreferenceBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}