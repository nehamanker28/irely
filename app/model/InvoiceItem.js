Ext.define('MobileBilling.model.InvoiceItem', {
    extend: 'iRely.BaseEntity',
    alias: 'model.InvoiceItem',
    idProperty: 'intInvoiceItemId',

    fields: [
        { 
            name: 'intInvoiceItemId', 
            type: 'int'
        }, 
        {
            name: 'intInvoiceId', 
            type: 'int',
            reference: {
                type: 'MobileBilling.model.Invoice',
                role: 'tblMBILInvoice',
                inverse: {
                    role: 'tblMBILInvoiceItems',
                    storeConfig: {
                        complete: true,
                        remoteFilter: true,
                        proxy: {
                            type: 'rest',
                            api: {
                                read: './mobilebilling/api/invoice/getdetails'
                            },
                            reader: {
                                type: 'json',
                                rootProperty: 'data',
                                messageProperty: 'message'
                            }
                        }
                    }
                }
            }
        },
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
        { name: 'intShiftId', type: 'int', allowNull: true },
        { name: 'intShiftNumber', type: 'int', allowNull: true },
        { name: 'strShiftNo', type: 'string' },
        { name: 'strComments', type: 'string' },
        { name: 'dblTotal', type: 'float' },
        { name: 'intTermId', type: 'int', allowNull: true },
        { name: 'ysnPosted', type: 'boolean' },
        { name: 'intInvoiceSiteId', type: 'int', allowNull: true },
        { name: 'intSiteId', type: 'int', allowNull: true },
        { name: 'intSiteNumber', type: 'int', allowNull: true },
        { name: 'strSiteDescription', type: 'string' },
        { name: 'strSiteAddress', type: 'string' },
        { name: 'strCity', type: 'string' },
        { name: 'strState', type: 'string' },
        { name: 'strZipCode', type: 'string' },
        { name: 'strCountry', type: 'string' },
        { name: 'intInvoiceItemId', type: 'int', allowNull: true },
        { name: 'intItemId', type: 'int', allowNull: true },
        { name: 'strItemNo', type: 'string' },
        { name: 'strItemDescription', type: 'string' },
        { name: 'intItemUOMId', type: 'int', allowNull: true },
        { name: 'strUnitMeasure', type: 'string' },
        { name: 'dblQuantity', type: 'float' },
        { name: 'dblPrice', type: 'float' },
        { name: 'intContractDetailId', type: 'int', allowNull: true },
        { name: 'strContractNumber', type: 'string' },
        { name: 'intContractSeq', type: 'int', allowNull: true },
        { name: 'dblItemTotal', type: 'float', allowNull: true },
        { name: 'dblTaxTotal', type: 'float', allowNull: true },
    ],

    validators: [
        // { type: 'presence', field: 'intSiteNumber' },
        { type: 'presence', field: 'strItemNo' },
        { type: 'presence', field: 'dblQuantity' },
        { type: 'presence', field: 'dblPrice' }
    ]
});
