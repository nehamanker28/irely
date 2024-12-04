import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { SyncDeviceData } from '../../models/syncdevicedata';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class ISyncDeviceDataBRL extends Base<SyncDeviceData> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}