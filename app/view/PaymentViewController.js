Ext.define('MobileBilling.view.PaymentViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mdpayment',
    
    config: {
        binding: {
            btnSave: {
                disabled: '{readOnlyPosting}'
            },
            btnDelete: {
                disabled: '{readOnlyPosting}'
            },
            btnUndo: {
                disabled: '{readOnlyPosting}'
            },
            btnPost: {
                disabled: '{readOnlyPosting}'
            },
            cboCustomer: {
                value: '{current.strCustomerNo}',
                origValueField: 'intEntityId',
                origUpdateField: 'intEntityCustomerId',
                store: '{customer}',
                readOnly: '{readOnlyPosting}'
            },
            cboLocation: {
                value: '{current.strLocationName}',
                origValueField: 'intCompanyLocationId',
                origUpdateField: 'intLocationId',
                store: '{location}',
                readOnly: '{readOnlyPosting}'
            },
            txtPaymentNo: { 
                value: '{current.strPaymentNo}',
                readOnly: '{readOnlyPosting}'
            },
            cboShiftNo: {
                value: '{current.intShiftNumber}',                
                origValueField: 'intShiftId',
                origUpdateField: 'intShiftId',
                store: '{shift}',
                defaultFilters: [{
                    column: 'intDriverId',
                    value: '{current.intEntityDriverId}',
                    conjunction: 'And'
                },{
                    column: 'intLocationId',
                    value: '{current.intLocationId}',
                    conjunction: 'And'
                }],
                readOnly: '{readOnlyPosting}'
            },
            cboDriver: {
                value: '{current.strDriverNo}',
                store: '{driver}',
                origValueField: 'intEntityId',
                origUpdateField: 'intEntityDriverId',
                defaultFilters: [{
                    column: 'strType',
                    value: 'Driver'
                }],
                readOnly: '{readOnlyPosting}'
            },
            txtDriverName: { 
                value: '{current.strDriverName}',
                readOnly: '{readOnlyPosting}'
            },
            dtpPaymentDate: { 
                value: '{current.dtmDatePaid}',
                readOnly: '{readOnlyPosting}'
            },
            cboPaymentMethod: {
                value: '{current.strMethod}',
                store: '{PaymentMethod}',
                readOnly: '{readOnlyPosting}'
            },
            txtAmount: { 
                value: '{current.dblPayment}',
                readOnly: '{readOnlyPosting}'
            },
            txtCheckNo: { 
                value: '{current.strCheckNumber}',
                readOnly: '{readOnlyPosting}'
            },
            txtComments: { 
                value: '{current.strComments}',
                readOnly: '{readOnlyPosting}'
            },
        }
    },

    setupContext: function(options) {
        "use strict";
        var me = this,
            win = options.window,
            store = Ext.create('MobileBilling.store.Payment', { pageSize: 1 });

        win.context = Ext.create('iRely.Engine', {
            window: win,
            store: store,
            binding: me.config.binding,
            enableAudit: true
        });

        return win.context;
    },

    show: function(config) {
        "use strict";

        var me = this,
            win = this.getView();

        if (config) {
            win.show();

            var context = win.context ? win.context.initialize() : me.setupContext({window: win});

            if (config.action === 'new') {
                context.data.addRecord();
            } else {
                if (config.id) {
                    config.filters = [{
                        column: 'intPaymentId',
                        value: config.id
                    }];
                }
                context.data.load({
                    filters: config.filters
                });
            }
        }
    },

    onDriverSelect: function(combo, records){
        if (records.length <= 0)
            return;

        var win = combo.up('window');
        var current = win.viewModel.data.current;

        if (current) {
            current.set('strDriverName', records[0].get('strName'));
        }
    },

    onPostPayment: function(button, e, eOpts) {
        var me = this,
            win = Ext.WindowManager.getActive(),
            context = win.context,
            record = context.viewModel.get('current');

        if (context.data.hasChanges()) {
            context.data.saveRecord({
                successFn: function () {
                    me.postingProcess(win, record);
                }
            });
        }
        else {
            me.postingProcess(win, record);
        }
    },

    postingProcess: function (sender, record) {
        var me = this,
            win = sender,
            context = win.context;

        var msg = function(){
            Ext.MessageBox.show({
                msg: 'Posting payment...',
                titleAlign:"center",
                width:300,
                wait:true,
                waitConfig: {interval:200},
                modal:true
            });
        };

        msg();

        Ext.Ajax.timeout = 999999999;
        Ext.Ajax.request({
            url: './mobilebilling/api/payment/PostPayment',
            headers: { 'Authorization': iRely.Configuration.Security.AuthToken },
            params: {
                param: 'select intPaymentId from tblMBILPayment where intPaymentId = ' + record.data.intPaymentId,
                preview: false,
                toPost: true,
                userId: app.UserId
            },
            method: 'GET',
            timeout: 999999999,
            success: function(response){
                Ext.MessageBox.close();
                i21.functions.showInfoDialog(response.responseText.replace(/"/g, ''));
                context.data.load();
            },
            failure: function(response){
                Ext.MessageBox.close();
                i21.functions.showErrorDialog(response.responseText.replace(/"/g, ''));
            }
        });
    },

    init: function(application) {
        this.control({
            "#cboDriver": {
                select: this.onDriverSelect
            },
            "#btnPost": {
                click: this.onPostPayment
            }
        })
    }
});
