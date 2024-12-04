Ext.define('MobileBilling.controller.MobileBilling', {
    extend: 'i21.controller.Module',
    alias: 'controller.mobilebilling',

    requires: [
        'MobileBilling.store.CompanyPreference'
    ],

    singleton: true,

    moduleName: 'MobileBilling',

    constructor: function () {
        this.superclass.constructor.call(this);
    },

    init: function () {
        this.companyPreferenceStore = Ext.create('MobileBilling.store.CompanyPreference');
        this.companyPreferenceStore.load();
    },

    getCompanyPreference: function(field) {
        var me = this,
            record = me.companyPreferenceStore.getAt(0);
        
        return record.get(field);
    }

});
