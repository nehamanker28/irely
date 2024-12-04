import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { CompanyPreference } from '../../models/CompanyPreference';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class ICompanyPreferenceBRL extends Base<CompanyPreference> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}