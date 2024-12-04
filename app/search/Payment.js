Ext.define("MobileBilling.search.Payment", {
    alias: "search.mdpayment",
    singleton: true,
    searchConfigs: [
       {
            title: 'Search Mobile Payments',
            url: './mobilebilling/api/payment/search',
            columns: [
                {dataIndex: 'intPaymentId', text: 'Payment Id', flex: 1, defaultSort: true, dataType: 'numeric', key: true, hidden: true},
                {dataIndex: 'strPaymentNo', text: 'Payment No', flex: 1, dataType: 'string' },
                {dataIndex: 'intEntityCustomerId', text: 'Customer Id', flex: 1, dataType: 'numeric', hidden: true },
                {dataIndex: 'strCustomerNo', text: 'Customer No', flex: 1, dataType: 'string' },
                {dataIndex: 'strCustomerName', text: 'Customer Name', flex: 1, dataType: 'string' },
                {dataIndex: 'intLocationId', text: 'Location Id', flex: 1, dataType: 'numeric', hidden: true },
                {dataIndex: 'strLocationName', text: 'Location Name', flex: 1, dataType: 'string' },
                {dataIndex: 'intEntityDriverId', text: 'Driver Id', flex: 1, dataType: 'numeric', hidden: true },
                {dataIndex: 'strDriverNo', text: 'Driver No', flex: 1, dataType: 'string' },
                {dataIndex: 'strDriverName', text: 'Driver Name', flex: 1, dataType: 'string' },
                {dataIndex: 'intShiftId', text: 'Shift Id', flex: 1, dataType: 'numeric', hidden: true },
                {dataIndex: 'intShiftNumber', text: 'Shift No', flex: 1, dataType: 'numeric' },
                {dataIndex: 'dtmDatePaid', text: 'Date Paid', flex: 1, dataType: 'date' },
                {dataIndex: 'strMethod', text: 'Payment Method', flex: 1, dataType: 'string' },
                {dataIndex: 'strCheckNumber', text: 'Check No', flex: 1, dataType: 'string' },
                {dataIndex: 'dblPayment', text: 'Payment', flex: 1, dataType: 'float' , xtype: 'numbercolumn', currencyField: true},
                {dataIndex: 'strComments', text: 'Comments', flex: 1, dataType: 'string' },
                {dataIndex: 'ysnPosted', text: 'Posted', flex: 1, dataType: 'boolean' },
                {dataIndex: 'ysnVoided', text: 'Voided', flex: 1, dataType: 'boolean' },
            ]
        }
    ]
    
});