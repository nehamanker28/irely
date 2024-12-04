Ext.define('MobileBilling.view.ShiftViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mdshift',

    config: {
        binding: {
            dtpShiftDate: { value: '{current.dtmShiftDate}'},
            txtDriverNumber: { value: '{current.strDriverNo}'},
            txtDriverName: { value: '{current.strDriverName}'},
            txtLocationName: { value: '{current.strLocationName}'},
            txtShiftNo: { value: '{current.intShiftNumber}'},
            dtpStartTime: { value: '{current.dtmStartTime}'},
            dtpEndTime: { value: '{current.dtmEndTime}'},
            txtTruckNo: { value: '{current.strTruckName}'},
            txtStartOdometer: { value: '{current.intStartOdometer}'},
            txtEndOdometer: { value: '{current.intEndOdometer}'},
            txtFuelDelivered: { value: '{current.dblFuelGallonsDelievered}'},
            txtFuelSales: { value: '{current.dblFuelSales}'},

            grdInvoice: {
                colCustomer: 'strCustomerName',
                colLocation: 'strLocationName',
                colInvoiceNo: {
                    dataIndex: 'strInvoiceNo',
                    drillDownText: 'Open Invoice',
                    drillDownClick: 'onOpenInvoiceClick'
                },
                colInvoiceDate: 'dtmInvoiceDate',
                colType: 'strType',
                colTerms: 'strTerm',
                colItemTotal: 'dblTotalBefTax',
                colInvoiceTotal: 'dblTotal',
                colTotalTaxAmount:'dblTotalTaxAmount',
                colComment: 'strComments',
                colPosted: 'ysnPosted',
                colVoided: 'ysnVoided'
            },

            grdPayment: {
                colCustomer: 'strCustomerName',
                colLocation: 'strLocationName',
                colPaymentNo: 'strPaymentNo',
                colPaymentDate: 'dtmDatePaid',
                colMethod: 'strMethod',
                colCheckNumber: 'strCheckNumber',
                colPayment: 'dblPayment',
                colComment: 'strComments',
                colPosted: 'ysnPosted',
                colVoided: 'ysnVoided'
            }
        }
    },

    setupContext: function() {
        "use strict";
        var me = this,
            win = me.getView(),
            store = Ext.create('MobileBilling.store.Shift', { pageSize: 1 });
        var grdInvoice = win.down('#grdInvoice'),
            grdPayment = win.down('#grdPayment');

        win.context = Ext.create('iRely.Engine', {
            window: win,
            store: store,
            binding: me.config.binding,
            enableAudit: true,
            details: [
                {
                    key: 'tblMBILInvoices',
                    lazy: true,
                    component: Ext.create('iRely.grid.Manager', {
                        grid: grdInvoice,
                        position: 'none'
                    }),
                    selectOnChange: true
                },
                {
                    key: 'tblMBILPayments',
                    lazy: true,
                    component: Ext.create('iRely.grid.Manager', {
                        grid: grdPayment,
                        position: 'none'
                    }),
                    selectOnChange: true
                }
            ]
        });

        return win.context;
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
                        column: 'intShiftId',
                        value: config.id
                    }];
                }
                context.data.load({
                    filters: config.filters
                });
            }
        }
    },

    onOpenInvoiceClick: function(value, record) {
      var me = this;
      console.log(record.data.intInvoiceId);
      iRely.Functions.openScreen(`MobileBilling.view.Invoice`,record);
    },

});
