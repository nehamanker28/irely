import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';

import { SyncDeviceData } from '../../models/syncdevicedata';
import { Base } from '../../_common/sqlite/implementation/base';
import { CommonSQL } from '../../_common/sqlite/implementation/common-sql';

@Injectable()
export class ISyncDeviceDataBRL extends Base<SyncDeviceData> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}