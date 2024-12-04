import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IItemBRL } from '../interface/iitem';

@Injectable()
export class ItemBRL extends IItemBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}