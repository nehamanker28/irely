Ext.define('MobileBilling.view.InvoiceViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.mdinvoice',

    requires: [
        'EntityManagement.store.SalespersonBuffered',
        'i21.store.CompanyLocationBuffered',
        'i21.store.TermBuffered',
        'EntityManagement.store.CustomerBuffered',
        'MobileBilling.store.BufferedShift',
        'Inventory.store.BufferedItemLocation',
        'TankManagement.store.ConsumptionSiteBuffered',
        'ContractManagement.store.ContractDetailViewBuffered',
        'AccountsReceivable.store.PaymentMethodBuffered'
],

    stores: {
        InvoiceType: {
            autoLoad: true,
            data: [{ strType: 'Invoice' }, { strType: 'Cash' }],
            fields: { name: 'strType' }
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
        },
        terms: {
            type: 'termbuffered'
        },
        items: {
            type: 'icbuffereditemlocation'
        },
        sites: {
            type: 'tmconsumptionsitebuffered'
        },
        contracts: {
            type: 'ctcontractdetailviewbuffered'
        },
        paymentmethod: {
            type: 'arpaymentmethodbuffered'
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
        },
        readOnlyPostingInvoiceType: function (get) {
            var _readOnly = false;
            _readOnly = get('current.ysnVoided'),
            _invoiceType = get('current.strType');

            if(_invoiceType == 'Cash') {
                if(_readOnly != true) {
                    _readOnly = get('current.ysnPosted');
                }
                return _readOnly;
            }
            else {
                return true;
            }            
        }
    }

});