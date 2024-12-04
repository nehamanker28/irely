import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { ISyncDeviceDataBRL } from '../interface/isyncdevicedata';
import { SyncDeviceData } from '../../models/syncdevicedata';

@Injectable()
export class SyncDeviceDataBRL extends ISyncDeviceDataBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

    public defaultRecord(record: SyncDeviceData){
        var records = [];
                        
        record = new SyncDeviceData();
        record.intTableStatus = 1;        
        record.strDisplayName = 'Customer';
        record.strTableName = 'customer';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 2;        
        record.strDisplayName = 'Consumption Site';
        record.strTableName = 'consumptionsite';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 3;        
        record.strDisplayName = 'Delivery History';
        record.strTableName = 'deliveryhistory';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 4;        
        record.strDisplayName = 'Device';
        record.strTableName = 'device';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 5;        
        record.strDisplayName = 'Item';
        record.strTableName = 'item';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 6;        
        record.strDisplayName = 'Applicable Tax Code';
        record.strTableName = 'applicabletaxcode';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 7;
        record.strDisplayName = 'Tax Code';
        record.strTableName = 'taxcode';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 8;
        record.strDisplayName = 'Contract Header';
        record.strTableName = 'contractheader';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 9;
        record.strDisplayName = 'Contract Detail';
        record.strTableName = 'contractdetail';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        // PHASE 2
        // record = new SyncDeviceData();
        // record.intTableStatus = 9;
        // record.strDisplayName = 'Contract Split';
        // record.strTableName = 'contractsplit';
        // record.ysnTableWithErrors = false;
        // record.dtmTableLastUpdated = '(no data)';
        // records.push(record);

        // PHASE 2
        // record = new SyncDeviceData();
        // record.intTableStatus = 9;
        // record.strDisplayName = 'Contract Split Detail';
        // record.strTableName = 'contractsplitdetail';
        // record.ysnTableWithErrors = false;
        // record.dtmTableLastUpdated = '(no data)';
        // records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 10;
        record.strDisplayName = 'Terms';
        record.strTableName = 'terms';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 11;
        record.strDisplayName = 'User';
        record.strTableName = 'user';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = false;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 12;
        record.strDisplayName = 'Location';
        record.strTableName = 'location';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 13;
        record.strDisplayName = 'Truck';
        record.strTableName = 'truck';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = false;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        // record = new SyncDeviceData();
        // record.intTableStatus = 14;
        // record.strDisplayName = 'Meter';
        // record.strTableName = 'meter';
        // record.ysnTableWithErrors = false;
        // record.dtmTableLastUpdated = '(no data)';
        // record.intTotal = 0;
        // record.ysnVisible = true;
        // record.ysnIncludeSyncAll = true;
        // records.push(record);

        record = new SyncDeviceData();
        record.intTableStatus = 14;
        record.strDisplayName = 'Load Inventory';
        record.strTableName = 'loadinventory';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '';
        record.intTotal = 0;
        record.ysnVisible = false;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();      
        record.intTableStatus = 15;
        record.strDisplayName = 'Orders';
        record.strTableName = 'orders';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();      
        record.intTableStatus = 16;
        record.strDisplayName = 'Order Item';
        record.strTableName = 'orderitem';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();      
        record.intTableStatus = 17;
        record.strDisplayName = 'Order Tax Code';
        record.strTableName = 'ordertaxcode';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();      
        record.intTableStatus = 18;
        record.strDisplayName = 'Payment';
        record.strTableName = 'payment';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        record = new SyncDeviceData();      
        record.intTableStatus = 19;
        record.strDisplayName = 'Configuration';
        record.strTableName = 'configuration';
        record.ysnTableWithErrors = false;
        record.dtmTableLastUpdated = '(no data)';
        record.intTotal = 0;
        record.ysnVisible = true;
        record.ysnIncludeSyncAll = true;
        records.push(record);

        var _data = [];
        _data['data'] = records;

        return _data;
    }

}