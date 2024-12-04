Ext.define('MobileBilling.view.InvoiceViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.mdinvoice',

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
            txtInvoiceNo: {
                value: '{current.strInvoiceNo}',
                readOnly: '{readOnlyPosting}'
            },
            cboType: {
                value: '{current.strType}',
                store: '{InvoiceType}',
                readOnly: '{readOnlyPosting}'
            },
            dtpDeliveryDate: {
                value: '{current.dtmDeliveryDate}',
                readOnly: '{readOnlyPosting}'
            },
            dtpInvoiceDate: {
                value: '{current.dtmInvoiceDate}',
                readOnly: '{readOnlyPosting}'
            },
            cboDriver: {
                value: '{current.strDriverName}',
                origValueField: 'intEntityId',
                origUpdateField: 'intDriverId',
                store: '{driver}',
                defaultFilters: [{
                    column: 'strType',
                    value: 'Driver'
                }],
                readOnly: '{readOnlyPosting}'
            },
            cboShiftNo: {
                value: '{current.strShiftNo}',
                origValueField: 'intShiftId',
                origUpdateField: 'intShiftId',
                store: '{shift}',
                defaultFilters: [{
                    column: 'intDriverId',
                    value: '{current.intDriverId}',
                    conjunction: 'And'
                },{
                    column: 'intLocationId',
                    value: '{current.intLocationId}',
                    conjunction: 'And'
                }],
                readOnly: '{readOnlyPosting}'
            },
            txtInvoiceTotal: {
                value: '{current.dblTotal}',
                readOnly: '{readOnlyPosting}'
            },
            cboTerm: {
                value: '{current.strTerm}',
                store: '{terms}',
                origValueField: 'intTermID',
                origUpdateField: 'intTermId',
                readOnly: '{readOnlyPosting}'
            },
            txtComments: {
                value: '{current.strComments}',
                readOnly: '{readOnlyPosting}'
            },
            cboPaymentMethod: {
                value: '{current.strPaymentMethod}',
                store: '{paymentmethod}',
                origValueField: 'intPaymentMethodID',
                origUpdateField: 'intPaymentMethodId',
                readOnly: '{readOnlyPostingInvoiceType}'
            },
            txtPaymentInfo: {
                value: '{current.strPaymentInfo}',
                readOnly: '{readOnlyPostingInvoiceType}'
            },

            grdInvoice: {
                readOnly: '{readOnlyPosting}',
                colSiteNo: {
                    dataIndex: 'intSiteNumber',
                    editor: {
                        store: '{sites}',
                        origValueField: 'intSiteId',
                        origUpdateField: 'intSiteId',
                        defaultFilters: [{
                            column: 'intLocationId',
                            value: '{current.intLocationId}'
                        },{
                            column: 'intEntityId',
                            value: '{current.intEntityCustomerId}'
                        }]
                    }
                },
                colSiteDescription: 'strSiteDescription',
                colItemNo: {
                    dataIndex: 'strItemNo',
                    editor: {
                        store: '{items}',
                        origValueField: 'intItemId',
                        origUpdateField: 'intItemId',
                        defaultFilters: [
                            {
                                column: 'strType',
                                condition: 'noteq',
                                value: 'Bundle',
                                conjunction: 'and'
                            },
                            {
                                column: 'strType',
                                condition: 'noteq',
                                value: 'Kit',
                                conjunction: 'and'
                            },
                            {
                                column: 'strType',
                                condition: 'noteq',
                                value: 'Software',
                                conjunction: 'and'
                            },
                            {
                                column: 'strType',
                                condition: 'noteq',
                                value: 'Other Charge',
                                conjunction: 'and'
                            },
                            {
                                column: 'intLocationId',
                                condition: 'eq',
                                value: '{current.intLocationId}',
                                conjunction: 'and'
                            }
                        ]
                    }
                },
                colItemDescription: 'strItemDescription',
                colPrice: 'dblPrice',
                colQty: 'dblQuantity',
                colEndingPercent: 'dblPercentageFull',
                colContract: {
                    dataIndex: 'strContractNumber',
                    editor: {
                        origValueField: 'intContractDetailId',
                        origUpdateField: 'intContractDetailId',
                        store: '{contracts}',
                        defaultFilters: [{
                            column: 'strContractType',
                            condition: 'eq',
                            value: 'Sale',
                            conjunction: 'and'
                        },
                        {
                            column: 'intItemId',
                            condition: 'eq',
                            value: '{grdInvoice.selection.intItemId}',
                            conjunction: 'and'
                        },
                        {
                            column: 'intEntityId',
                            condition: 'eq',
                            value: '{current.intEntityCustomerId}',
                            conjunction: 'and'
                        },
                        {
                            column: 'ysnAllowedToShow',
                            condition: 'eq',
                            value: true,
                            conjunction: 'and'
                        },
                        {
                            column: 'dtmStartDate',
                            condition: 'lte',
                            value: '{current.dtmInvoiceDate}',
                            conjunction: 'and'
                        }, {
                            column: 'dtmEndDate',
                            condition: 'gte',
                            value: '{current.dtmInvoiceDate}',
                            conjunction: 'and'
                        }]
                    }
                },
                colContractSequence: {
                    dataIndex: 'intContractSeq'
                },
                colPriceChanged: '',
                colOrderNo: 'strOrderNumber'
            }
        }
    },

    setupContext: function() {
        "use strict";
        var me = this,
            win = me.getView(),
            store = Ext.create('MobileBilling.store.Invoice', { pageSize: 1 });
        var grdInvoice = win.down('#grdInvoice'),
            cboPaymentMethod = win.down('#cboPaymentMethod'),
            txtPaymentInfo = win.down('#txtPaymentInfo');

        win.context = Ext.create('iRely.Engine', {
            window: win,
            store: store,
            controller: me,
            binding: me.config.binding,
            enableAudit: true,
            details: [
                {
                  key: 'tblMBILInvoiceItems',
                  component: Ext.create('iRely.grid.Manager', {
                      grid: grdInvoice
                  }),
                  lazy: true
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
                        column: 'intInvoiceId',
                        value: config.id
                    }];
                }
                context.data.load({
                    filters: config.filters
                });
            }
        }
    },

    onSiteSelect: function(combo, records, eOpts) {
        var grid = combo.up('grid');
        var plugin = grid.editingPlugin;
        var grdRecord = plugin.activeRecord;

        grdRecord.set('strSiteDescription', records[0].get('strDescription'));
    },

    onEditPrice: function(combo, records, eOpts) {
      var grid = combo.up('grid');
      var plugin = grid.editingPlugin;
      var grdRecord = plugin.activeRecord;
      var rate = 0.00,
          tax = 0.00;

      if(grdRecord.data.strCalculationMethod == 'Percentage'){
        rate = (grdRecord.data.dblRate / 100);
        tax = (grdRecord.data.dblQuantity * records) * rate;
      }else{
        rate = grdRecord.data.dblRate;
        tax = grdRecord.data.dblQuantity * rate;
      }

      var result =  (records * grdRecord.data.dblQuantity) + (tax);
      grdRecord.set('dblItemTotal',records * grdRecord.data.dblQuantity);
      grdRecord.set('dblTaxTotal',tax);

      var grd = combo.up("#grdInvoice");
      var win = combo.up('window');
      var current = win.viewModel.data.current;
      if (current) {
        let total = grd.store.sum('dblItemTotal') + grd.store.sum('dblTaxTotal');
        current.set('dblTotal', total);
          // current.set('dblTotal', result);
      }


  },

  onEditQty:  function(combo, records, eOpts) {
        var grid = combo.up('grid');
        var plugin = grid.editingPlugin;
        var grdRecord = plugin.activeRecord;
        var rate = 0.00,
            tax = 0.00;

        if(grdRecord.data.strCalculationMethod == 'Percentage'){
        rate = (grdRecord.data.dblRate / 100);
        tax = (records * grdRecord.data.dblPrice) * rate;
        }else{
        rate = grdRecord.data.dblRate;
        tax = records * rate;
        }
        var result =  (records * grdRecord.data.dblPrice) + (tax);
        grdRecord.set('dblItemTotal',records * grdRecord.data.dblPrice);
        grdRecord.set('dblTaxTotal',tax);
        var grd = combo.up("#grdInvoice");
        var win = combo.up('window');
        var current = win.viewModel.data.current;
        if (current) {
        let total = grd.store.sum('dblItemTotal') + grd.store.sum('dblTaxTotal');
        current.set('dblTotal', total);
            // current.set('dblTotal', result);
        }
    },

    onItemSelect: function(combo, records, eOpts) {
        var grid = combo.up('grid');
        var plugin = grid.editingPlugin;
        var grdRecord = plugin.activeRecord;

        grdRecord.set('strItemDescription', records[0].get('strItemDescription'));
    },

    onContractSelect: function(combo, records, eOpts) {
        var grid = combo.up('grid');
        var plugin = grid.editingPlugin;
        var grdRecord = plugin.activeRecord;

        grdRecord.set('intContractSeq', records[0].get('intContractSeq'));
    },

    onTypeSelect: function(combo, records, eOpts) {
        var me = this,
            win = combo.up('window'),
            cboPaymentMethod = win.down('#cboPaymentMethod'),
            txtPaymentInfo = win.down('#txtPaymentInfo');

        if(records !== undefined && records !== null) {
            var strType = records[0].data.strType,
                current = me.getViewModel().data.current;

            current.set('strType',records[0].data.strType);
            if(strType == 'Cash') {
                cboPaymentMethod.setReadOnly(false);
                txtPaymentInfo.setReadOnly(false);
            }
            else {
                cboPaymentMethod.setReadOnly(true);
                txtPaymentInfo.setReadOnly(true);
            }
        }
    },    

    beforeSelectLocation: function(field, record) {
        var me = this,
            current = me.getViewModel().data.current,
            selectedLocation = record.get('intCompanyLocationId'),
            selectedLocatioName = record.get('strLocationName'),
            currentLocation = current.get('intLocationId'),
            details = current['tblMBILInvoiceItems'](),
            records = details ? details.getRange() : [];

        if (records && records.length > 1 && selectedLocation != currentLocation) {
            iRely.Msg.showQuestion('This will clear all the item. Do you want to continue?', function(btn) {
                if (btn && btn === 'no') return false;
                else {
                    var i = records.length - 1;

                    for (; i >= 0; i--) {
                        if (!records[i].dummy)
                            details.removeAt(i);
                    }
                    current.set('intLocationId', selectedLocation);
                    current.set('strLocationName', selectedLocatioName);
                }
            });
            return false;
        }
        return true;
    },

    onPostInvoice: function(button, e, eOpts) {
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
                msg: 'Posting invoice...',
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
            url: './mobilebilling/api/invoice/PostInvoice',
            headers: { 'Authorization': iRely.Configuration.Security.AuthToken },
            params: {
                param: 'select intInvoiceId from tblMBILInvoice where intInvoiceId = ' + record.data.intInvoiceId,
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
            "#cboSite" : {
                select: this.onSiteSelect
            },
            "#cboItem" : {
                select: this.onItemSelect
            },
            "#cboContract": {
                select: this.onContractSelect
            },
            "#cboLocation": {
                beforeselect: this.beforeSelectLocation
            },
            "#cboType": {
                select: this.onTypeSelect
            },            
            "#btnPost": {
              click: this.onPostInvoice
            },
            "#EditPrice": {
              change: this.onEditPrice
            },
            "#editQty": {
              change: this.onEditQty
            },
        });
    }
});
