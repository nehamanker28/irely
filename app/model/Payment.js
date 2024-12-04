Ext.define('MobileBilling.model.Payment', {
    extend: 'iRely.BaseEntity',
    requires: [
        'Ext.data.Field'
    ],
    idProperty: 'intPaymentId',

    fields: [
        { name: 'intPaymentId', type: 'int' },
        { name: 'strPaymentNo', type: 'string' },
        { name: 'intEntityCustomerId', type: 'int' },
        { name: 'strCustomerNo', type: 'string' },
        { name: 'strCustomerName', type: 'string' },
        { name: 'intLocationId', type: 'int' },
        { name: 'strLocationName', type: 'string' },
        { name: 'intEntityDriverId', type: 'int' },
        { name: 'strDriverNo', type: 'string' },
        { name: 'strDriverName', type: 'string' },
        { name: 'intShiftId', type: 'int'},
        { name: 'intShiftNumber', type: 'int' },
        { name: 'dtmDatePaid', type: 'date', dateFormat: 'c', dateWriteFormat: 'Y-m-d' },
        { name: 'strMethod', type: 'string' },
        { name: 'strCheckNumber', type: 'string' },
        { name: 'dblPayment', type: 'float' },
        { name: 'strComments', type: 'string' },
        { name: 'ysnPosted', type: 'boolean' },
        { name: 'ysnVoided', type: 'boolean' }
    ],

    validators: [
        { type: 'presence', field: 'strPaymentNo' },
        { type: 'presence', field: 'strCustomerNo' },
        { type: 'presence', field: 'strLocationName' },
        { type: 'presence', field: 'strMethod' },
        { type: 'presence', field: 'dtmDatePaid' },
        { type: 'presence', field: 'strDriverNo' },
        { type: 'presence', field: 'intShiftNumber' }
    ]


});
