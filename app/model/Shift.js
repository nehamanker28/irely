Ext.define('MobileBilling.model.Shift', {
    extend: 'iRely.BaseEntity',
    requires: [
        'Ext.data.Field',
        'MobileBilling.model.ShiftInvoice',
        'MobileBilling.model.ShiftPayment'
    ],
    idProperty: 'intShiftId',

    fields: [
        { name: 'intShiftId', type: 'int', allowNull: true },
        { name: 'dtmShiftDate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'intDriverId', type: 'int', allowNull: true },
        { name: 'strDriverNo', type: 'string' },
        { name: 'strDriverName', type: 'string' },
        { name: 'intLocationId', type: 'int', allowNull: true },
        { name: 'strLocationName', type: 'string' },
        { name: 'intShiftNumber', type: 'int', allowNull: true },
        { name: 'strShiftNo', type: 'string' },        
        { name: 'dtmStartTime', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'dtmEndTime', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'strTruckName', type: 'string' },
        { name: 'intStartOdometer', type: 'int', allowNull: true },
        { name: 'intEndOdometer', type: 'int', allowNull: true },
        { name: 'dblFuelGallonsDelievered', type: 'float' },
        { name: 'dblFuelSales', type: 'float' }
    ]


});
