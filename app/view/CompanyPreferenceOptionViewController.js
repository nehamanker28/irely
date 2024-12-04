Ext.define('MobileBilling.view.CompanyPreferenceOptionViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mdcompanypreferenceoption',

    config: {
        binding: {
            chkShowLogo: {
                value: '{current.ysnShowLogo}'
            },
            optCompanyContact: {
                value: '{current.intCompanyContact}'
            },
            txtCompanyName: {
                value: '{current.strCompanyName}'
            },
            txtDefaultCustomerNo: {
                value: '{current.strDefaultCustomerNo}'
            },
            txtDefaultSiteNo: {
                value: '{current.strDefaultSiteNo}'
            },
            txtHazardousSpillCompanyName: {
                value: '{current.strHazardousSpillCompanyName}'
            },
            txtHazardousSpillCompanyPhoneNumber: {
                value: '{current.strHazardousSpillCompanyPhoneNumber}'
            },
            txtEmergencyCustomerCode: {
                value: '{current.strEmergencyCustomerCode}'
            }
        }
    },

    setupData: function () {
        "use strict";
        var me = this,
        win = me.getView();

        me.data = Ext.create('iRely.data.Manager', {
            window: win,
            store: i21.ModuleMgr.MobileBilling.companyPreferenceStore
        });

        me.data.store.on({
            load: Ext.bind(me.onStoreLoad, me),
            single: true
        });

        me.data.on({
            savesuccess: Ext.bind(me.onSaveSuccess, me)
        });
    },

    onStoreLoad: function (store, records, success, eOpts) {},

    onSaveSuccess: function () {}

});
