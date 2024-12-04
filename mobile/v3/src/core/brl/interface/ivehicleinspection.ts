import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';

import { VehicleInspection } from '../../models/vehicleinspection';
import { Base } from '../../framework/sqlite/implementation/base';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';

@Injectable()
export class IVehicleInspectionBRL extends Base<VehicleInspection> {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}