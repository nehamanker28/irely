Ext.define('MobileBilling.view.PaymentViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mdpayment',

    requires: [
        'EntityManagement.store.SalespersonBuffered',
        'i21.store.CompanyLocationBuffered',
        'EntityManagement.store.CustomerBuffered',
        'MobileBilling.store.BufferedShift'
],

    stores: {
        PaymentMethod: {
            autoLoad: true,
            data: [{ strMethod: 'Cash' }, { strMethod: 'Check' }],
            fields: { name: 'strMethod' }
        },
        customer: {
            type: 'customerbuffered'
        },
        location: {
            type:'companylocationbuffered'
        },
        driver: {
            type: 'emsalespersonbuffered'
        },
        shift: {
            type: 'mdbufferedshift'
        }
    },

    formulas: {
        readOnlyPosting: function (get) {
            var _readOnly = false;
            _readOnly = get('current.ysnVoided');

            if(_readOnly != true) {
                _readOnly = get('current.ysnPosted');
            }
            return _readOnly;
        }
    }
});