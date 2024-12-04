import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { ILocationBRL } from '../interface/ilocation';

@Injectable()
export class LocationBRL extends ILocationBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}