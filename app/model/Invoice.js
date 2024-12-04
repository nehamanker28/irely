Ext.define('MobileBilling.model.Invoice', {
    extend: 'iRely.BaseEntity',
    alias: 'model.Invoice',
    idProperty: 'intInvoiceId',

    fields: [
        { name: 'intInvoiceId', type: 'int' },
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
        { name: 'strDriverNo', type: 'string', allowNull: true },
        { name: 'strDriverName', type: 'string' },
        { name: 'intShiftId', type: 'int', allowNull: true },
        { name: 'intShiftNumber', type: 'int', allowNull: true },
        { name: 'strShiftNo', type: 'string' },        
        { name: 'strComments', type: 'string' },
        { name: 'dblTotal', type: 'float' },
        { name: 'intTermId', type: 'int', allowNull: true },
        { name: 'ysnPosted', type: 'boolean' },
        { name: 'ysnVoided', type: 'boolean' },
        { name: 'intPaymentMethodId', type: 'int' },
        { name: 'strPaymentMethod', type: 'string' },
        { name: 'strPaymentInfo', type: 'string' },
    ],

    validators: [
        { type: 'presence', field: 'strInvoiceNo' },
        { type: 'presence', field: 'strCustomerNo' },
        { type: 'presence', field: 'strLocationName' },
        { type: 'presence', field: 'strType' },
        { type: 'presence', field: 'dtmDeliveryDate' },
        { type: 'presence', field: 'dtmInvoiceDate' },
        { type: 'presence', field: 'strDriverName' },
        { type: 'presence', field: 'intShiftId' }
    ]

});
