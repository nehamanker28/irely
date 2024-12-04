import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IVehicleInspectionBRL } from '../interface/ivehicleinspection';

@Injectable()
export class VehicleInspectionBRL extends IVehicleInspectionBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}