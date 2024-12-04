import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { ApplicableTaxCode } from '../../models/applicabletaxcode';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IApplicableTaxCodeBRL extends Base<ApplicableTaxCode> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}