Ext.define('MobileBilling.model.ShiftPayment', {
    extend: 'iRely.BaseEntity',
    requires: [
        'Ext.data.Field'
    ],
    idProperty: 'intPaymentId',

    fields: [
        { name: 'intPaymentId', type: 'int', allowNull: true },
        { name: 'strPaymentNo', type: 'string' },
        { name: 'intEntityCustomerId', type: 'int', allowNull: true },
        { name: 'strCustomerNo', type: 'string' },
        { name: 'strCustomerName', type: 'string' },
        { name: 'intLocationId', type: 'int', allowNull: true },
        { name: 'strLocationName', type: 'string' },
        { name: 'intEntityDriverId', type: 'int', allowNull: true },
        { name: 'strDriverNo', type: 'string' },
        { name: 'strDriverName', type: 'string' },
        { name: 'intShiftId', type: 'int', allowNull: true,
            reference: {
            type: 'MobileBilling.model.Shift',
            role: 'tblMBILShift',
            inverse: {
                role: 'tblMBILPayments',
                storeConfig: {
                    complete: true,
                    remoteFilter: true,
                    proxy: {
                        type: 'rest',
                        api: {
                            read: './mobilebilling/api/shift/getpayments'
                        },
                        reader: {
                            type: 'json',
                            rootProperty: 'data',
                            messageProperty: 'message'
                        }
                    },
                    sortOnLoad: true,
                    sorters: {
                        direction: 'DESC',
                        property: 'intSort'
                    }
                }
            }
        } },
        { name: 'intShiftNumber', type: 'int', allowNull: true },
        { name: 'dtmDatePaid', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'strMethod', type: 'string' },
        { name: 'strCheckNumber', type: 'string' },
        { name: 'dblPayment', type: 'float' },
        { name: 'strComments', type: 'string' },
        { name: 'ysnPosted', type: 'boolean' },
        { name: 'ysnVoid', type: 'boolean' }
    ]
});
