import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IDeviceBRL } from '../interface/idevice';

@Injectable()
export class DeviceBRL extends IDeviceBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}