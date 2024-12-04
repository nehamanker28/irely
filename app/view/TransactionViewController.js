Ext.define('MobileBilling.view.TransactionViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mdtransaction',
    
    config: {
        binding: {
            grdInvoices: {
                colInvoiceNo: 'strInvoiceNo',
                colCustomerNo: 'strCustomerNumber',
                colCustomerName: 'strCustomerName',
                colLocationName: 'strLocationName',
                colInvoiceDate: 'dtmInvoiceDate',
                colDriverNo: 'strDriverNo',
                colDriverName: 'strDriverName',
                colTotal: 'dblTotal',
                colPosted: 'ysnPosted'
            },

            grdPayments: {
                colPaymentNo: 'strPaymentNo',
                colCustomerNo: 'strCustomerNumber',
                colCustomerName: 'strCustomerName',
                colLocationName: 'strLocationName',
                colDatePaid: 'dtmDatePaid',
                colDriverNo: 'strDriverNo',
                colDriverName: 'strDriverName',
                colTotal: 'dblTotal',
                colPosted: 'ysnPosted'
            }
        }
    },

    show: function(config) {
        "use strict";

        var me = this,
            win = this.getView();

        if (config) {
            win.show();

            var context = win.context ? win.context.initialize() : me.setupContext();

            if (config.action === 'new') {
                context.data.addRecord();
            } else {
                if (config.id) {
                    config.filters = [{
                        column: 'intLoadHeaderId',
                        value: config.id
                    }];
                }
                context.data.load({
                    filters: config.filters
                });
            }
        }
    }
});
