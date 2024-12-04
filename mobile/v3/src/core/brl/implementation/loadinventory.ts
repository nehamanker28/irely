import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { ILoadInventoryBRL } from '../interface/iloadinventory';

@Injectable()
export class LoadInventoryBRL extends ILoadInventoryBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}