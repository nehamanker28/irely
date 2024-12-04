Ext.define('MobileBilling.store.Payment', {
    extend: 'Ext.data.Store',
    alias: 'store.mdpayment',
    requires: [
        'MobileBilling.model.Payment'
    ],
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MobileBilling.model.Payment',
            storeId: 'mdPayment',
            pageSize: 1,
            batchActions: true,
            proxy: {
                type: 'rest',
                api: {
                    read: './mobilebilling/api/payment/get',
                    update: './mobilebilling/api/payment/put',
                    create: './mobilebilling/api/payment/post',
                    destroy: './mobilebilling/api/payment/delete'
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
