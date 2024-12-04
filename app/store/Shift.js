Ext.define('MobileBilling.store.Shift', {
    extend: 'Ext.data.Store',
    alias: 'store.mdshift',
    requires: [
        'MobileBilling.model.Shift'
    ],
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MobileBilling.model.Shift',
            storeId: 'mdShift',
            pageSize: 50,
            batchActions: true,
            proxy: {
                type: 'rest',
                api: {
                    read: './mobilebilling/api/shift/get',
                    update: './mobilebilling/api/shift/put',
                    create: './mobilebilling/api/shift/post',
                    destroy: './mobilebilling/api/shift/delete'
                },
                reader: {
                    type: 'json',
                    rootProperty: 'data',
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
