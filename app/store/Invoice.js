Ext.define('MobileBilling.store.Invoice', {
    extend: 'Ext.data.Store',
    alias: 'store.mdinvoice',
    requires: [
        'MobileBilling.model.Invoice',
        'MobileBilling.model.InvoiceItem'
    ],
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MobileBilling.model.Invoice',
            storeId: 'mdInvoice',
            pageSize: 1,
            batchActions: true,
            proxy: {
                type: 'rest',
                api: {
                    read: './mobilebilling/api/invoice/get',
                    update: './mobilebilling/api/invoice/put',
                    create: './mobilebilling/api/invoice/post',
                    destroy: './mobilebilling/api/invoice/delete'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    successProperty: 'success',
                    messageProperty: 'message'
                },
                writer: {
                    type: 'json',
                    writeAllFields: true,
                    allowSingle: false
                }
            }
        }, cfg)]);
    }
});
