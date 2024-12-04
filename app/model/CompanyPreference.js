Ext.define('MobileBilling.model.CompanyPreference', {
    extend: 'iRely.BaseEntity',
    requires: [
        'Ext.data.Field'
    ],
    idProperty: 'intCompanyPreferenceId',

    fields: [
        { name: 'intCompanyPreferenceId', type: 'int', allowNull: true },
        { name: 'ysnShowLogo', type: 'boolean' },
        { name: 'intCompanyContact', type: 'int', allowNull: true },
        { name: 'strCompanyName', type: 'string' },
        { name: 'strDefaultCustomerNo', type: 'string' },
        { name: 'strDefaultSiteNo', type: 'string' },
        { name: 'strHazardousSpillCompanyName', type: 'string' },
        { name: 'strHazardousSpillCompanyPhoneNumber', type: 'string' },
        { name: 'strEmergencyCustomerCode', type: 'string' }
    ]


});
