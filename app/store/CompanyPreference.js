Ext.define('MobileBilling.store.CompanyPreference', {
    extend: 'Ext.data.Store',
    alias: 'store.mdcompanypreference',
    requires: [
        'MobileBilling.model.CompanyPreference'
    ],
    constructor: function (cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            model: 'MobileBilling.model.CompanyPreference',
            storeId: 'mdCompanyPreference',
            pageSize: 50,
            batchActions: true,
            proxy: {
                type: 'rest',
                api: {
                    read: './mobilebilling/api/companypreference/get',
                    update: './mobilebilling/api/companypreference/put',
                    create: './mobilebilling/api/companypreference/post',
                    destroy: './mobilebilling/api/companypreference/delete'
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
