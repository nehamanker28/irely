Ext.define("MobileBilling.search.Shift", {
    alias: "search.mdshift",
    singleton: true,
    searchConfigs: [
       {
            title: 'Search Shifts',
            url: './mobilebilling/api/shift/search',
            columns: [
                {dataIndex: 'intShiftId', text: 'Shift Id', flex: 1, defaultSort: true, dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'intShiftNumber', text: 'Shift No', flex: 1, dataType: 'numeric' },
                {dataIndex: 'intDriverId', text: 'Driver Id', flex: 1, dataType: 'numeric', hidden: true },
                {dataIndex: 'strDriverNo', text: 'Driver No', flex: 1, dataType: 'string' },
                {dataIndex: 'strDriverName', text: 'Driver Name', flex: 1, dataType: 'string' },
                {dataIndex: 'intLocationId', text: 'Location Id', flex: 1, dataType: 'numeric', hidden: true },
                {dataIndex: 'strLocationName', text: 'Location Name', flex: 1, dataType: 'string' },
                {dataIndex: 'dtmShiftDate', text: 'Shift Date', flex: 1, dataType: 'date' },
                {dataIndex: 'dtmStartTime', text: 'Start Time', flex: 1, dataType: 'time', dateFormat: 'time' },
                {dataIndex: 'dtmEndTime', text: 'End Time', flex: 1, dataType: 'time', dateFormat: 'time' },
                {dataIndex: 'intTruckId', text: 'Truck Id', flex: 1, dataType: 'numeric', hidden: true },
                {dataIndex: 'strTruckName', text: 'Truck Name', flex: 1, dataType: 'string' },
                {dataIndex: 'intStartOdometer', text: 'Start Odometer', flex: 1, dataType: 'numeric' },
                {dataIndex: 'intEndOdometer', text: 'End Odometer', flex: 1, dataType: 'numeric' },
                {dataIndex: 'dblFuelGallonsDelievered', text: 'Gallons Delivered', flex: 1, dataType: 'float' , xtype: 'numbercolumn', currencyField: true},
                {dataIndex: 'dblFuelSales', text: 'Fuel Sales', flex: 1, dataType: 'float' , xtype: 'numbercolumn', currencyField: true}
            ]
        }
    ]
    
});