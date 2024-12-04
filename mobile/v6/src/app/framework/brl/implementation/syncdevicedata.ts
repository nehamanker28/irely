import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../_common/sqlite/implementation/common-sql';
import { ISyncDeviceDataBRL } from '../interface/isyncdevicedata';
import { SyncDeviceData } from '../../models/syncdevicedata';

@Injectable()
export class SyncDeviceDataBRL extends ISyncDeviceDataBRL {

    constructor(public common: CommonSQL, public db: SQLite) {
        super(common, db);
    }

    defaultRecord(): Promise<any> {
        var me = this;
        return new Promise((resolve, reject) => {
            var records = [];
            console.log('SYNC DEVICE => defaultRecord');

            var record = new SyncDeviceData();

            record = new SyncDeviceData();
            record.intTableStatus = 1;
            record.strDisplayName = 'AR Customer';
            record.strTableName = 'tblARCustomer';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 2;
            record.strDisplayName = 'Category Tax';
            record.strTableName = 'tblCategoryTax';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 3;
            record.strDisplayName = 'Category Tax Exemption';
            record.strTableName = 'tblCategoryTaxExemption';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 4;
            record.strDisplayName = 'Contract Export';
            record.strTableName = 'tblContractExport';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 5;
            record.strDisplayName = 'Customer Special Pricing';
            record.strTableName = 'tblCustomerSpecialPricing';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 6;
            record.strDisplayName = 'Customer Tax Exemption';
            record.strTableName = 'tblCustomerTaxExemption';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 7;
            record.strDisplayName = 'Entity Location';
            record.strTableName = 'tblEntityLocation';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 8;
            record.strDisplayName = 'Full Tax';
            record.strTableName = 'tblFullTax';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 9;
            record.strDisplayName = 'Inventory Item';
            record.strTableName = 'tblInventoryItem';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 10;
            record.strDisplayName = 'Company Preference';
            record.strTableName = 'tblMBILCompanyPreference';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 11;
            record.strDisplayName = 'MBIL Order';
            record.strTableName = 'tblMBILOrder';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 12;
            record.strDisplayName = 'MBIL Order Item';
            record.strTableName = 'tblMBILOrderItem';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 13;
            record.strDisplayName = 'MBIL Order Tax Code';
            record.strTableName = 'tblMBILOrderTaxCode';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 14;
            record.strDisplayName = 'SM Location';
            record.strTableName = 'tblSMLocation';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 15;
            record.strDisplayName = 'SM Term';
            record.strTableName = 'tblSMTerm';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 16;
            record.strDisplayName = 'SM Truck';
            record.strTableName = 'tblSMTruck';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 17;
            record.strDisplayName = 'TM Delivery History';
            record.strTableName = 'tblTMDeliveryHistory';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 18;
            record.strDisplayName = 'TM Site';
            record.strTableName = 'tblTMSite';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 19;
            record.strDisplayName = 'TM Site Device';
            record.strTableName = 'tblTMSiteDevice';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);


            // ++++++++++++++++++++++++++++
            // ++++++ REGULAR TABLE +++++++
            // ++++++++++++++++++++++++++++


            record = new SyncDeviceData();
            record.intTableStatus = 20;
            record.strDisplayName = 'Global Info';
            record.strTableName = 'globalinfo';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 21;
            record.strDisplayName = 'Hosepiping Check';
            record.strTableName = 'hosepipingcheck';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 22;
            record.strDisplayName = 'Invoice';
            record.strTableName = 'invoice';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 23;
            record.strDisplayName = 'Invoice Item';
            record.strTableName = 'invoiceitems';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 24;
            record.strDisplayName = 'Invoice Item Tax';
            record.strTableName = 'invoicetaxcodes';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 25;
            record.strDisplayName = 'Shift';
            record.strTableName = 'shift';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 26;
            record.strDisplayName = 'User';
            record.strTableName = 'user';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 27;
            record.strDisplayName = 'Vehicle Inspection';
            record.strTableName = 'vehicleinspection';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 28;
            record.strDisplayName = 'Out Of Gas';
            record.strTableName = 'outofgas';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 29;
            record.strDisplayName = 'Payment';
            record.strTableName = 'payment';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 30;
            record.strDisplayName = 'Load Inventory';
            record.strTableName = 'loadinventory';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 31;
            record.strDisplayName = 'Tank Wagon';
            record.strTableName = 'tankwagon';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 32;
            record.strDisplayName = 'Line Flush And Transfer';
            record.strTableName = 'lineflushandtransfer';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 33;
            record.strDisplayName = 'Order Site';
            record.strTableName = 'ordersite';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 34;
            record.strDisplayName = 'Company Setup';
            record.strTableName = 'tblSMCompanySetup';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 35;
            record.strDisplayName = 'Customer Multi Level Pricing';
            record.strTableName = 'tblCustomerMultiLevelPricing';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 36;
            record.strDisplayName = 'PDF Files';
            record.strTableName = 'tblMBILPDF';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);

            record = new SyncDeviceData();
            record.intTableStatus = 37;
            record.strDisplayName = 'Payment Method';
            record.strTableName = 'tblSMPaymentMethod';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);

            var _data = [];
            _data['data'] = records;

            console.log(' +++ DEFAULT SYNC DATA +++ ');
            console.log(_data);

            me.addBulk(record, records).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }

}