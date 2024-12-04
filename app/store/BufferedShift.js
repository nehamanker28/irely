Ext.define('MobileBilling.store.BufferedShift', {
    extend: 'Ext.data.BufferedStore',
    alias: 'store.mdbufferedshift',
    requires: [
        'MobileBilling.model.Shift'
    ],
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MobileBilling.model.Shift',
            storeId: 'mdBufferedShift',
            pageSize: 50,
            batchActions: true,
            proxy: {
                type: 'rest',
                api: {
                    read: './mobilebilling/api/shift/get'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                    messageProperty: 'message'
                }
            }
        }, cfg)]);
    }
});
