import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { Device } from '../../models/device';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IDeviceBRL extends Base<Device> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}