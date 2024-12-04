Ext.define('MobileBilling.model.ShiftInvoice', {
    extend: 'iRely.BaseEntity',
    requires: [
        'Ext.data.Field'
    ],
    idProperty: 'intInvoiceId',

    fields: [
        { name: 'intInvoiceId', type: 'int', allowNull: true },
        { name: 'strInvoiceNo', type: 'string' },
        { name: 'intOrderId', type: 'int', allowNull: true },
        { name: 'intEntityCustomerId', type: 'int', allowNull: true },
        { name: 'strCustomerNo', type: 'string' },
        { name: 'strCustomerName', type: 'string' },
        { name: 'intLocationId', type: 'int', allowNull: true },
        { name: 'strLocationName', type: 'string' },
        { name: 'strType', type: 'string' },
        { name: 'dtmDeliveryDate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'dtmInvoiceDate', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'intDriverId', type: 'int', allowNull: true },
        { name: 'strDriverNo', type: 'string' },
        { name: 'strDriverName', type: 'string' },
        { name: 'intShiftId', type: 'int', allowNull: true,
            reference: {
            type: 'MobileBilling.model.Shift',
            role: 'tblMBILShift',
            inverse: {
                role: 'tblMBILInvoices',
                storeConfig: {
                    complete: true,
                    remoteFilter: true,
                    proxy: {
                        type: 'rest',
                        api: {
                            read: './mobilebilling/api/shift/getinvoices'
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
        { name: 'strComments', type: 'string' },
        { name: 'dblTotal', type: 'float' },
        { name: 'intTermId', type: 'int', allowNull: true },
        { name: 'strTerm', type: 'string' },
        { name: 'ysnPosted', type: 'boolean' },
        { name: 'ysnVoid', type: 'boolean' }
    ]
});
