(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-completed_invoice-completed_module_ts"],{

/***/ 54100:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/invoice-completed/invoice-completed-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceCompletedPageRoutingModule": () => (/* binding */ InvoiceCompletedPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_completed_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-completed.page */ 33182);




const routes = [
    {
        path: '',
        component: _invoice_completed_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceCompletedPage
    }
];
let InvoiceCompletedPageRoutingModule = class InvoiceCompletedPageRoutingModule {
};
InvoiceCompletedPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceCompletedPageRoutingModule);



/***/ }),

/***/ 10689:
/*!*********************************************************************!*\
  !*** ./src/app/pages/invoice-completed/invoice-completed.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceCompletedPageModule": () => (/* binding */ InvoiceCompletedPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_completed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-completed-routing.module */ 54100);
/* harmony import */ var _invoice_completed_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-completed.page */ 33182);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);








let InvoiceCompletedPageModule = class InvoiceCompletedPageModule {
};
InvoiceCompletedPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _invoice_completed_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceCompletedPageRoutingModule
        ],
        declarations: [_invoice_completed_page__WEBPACK_IMPORTED_MODULE_1__.InvoiceCompletedPage],
        providers: [
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL
        ]
    })
], InvoiceCompletedPageModule);



/***/ }),

/***/ 33182:
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-completed/invoice-completed.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceCompletedPage": () => (/* binding */ InvoiceCompletedPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_completed_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-completed.page.html */ 98732);
/* harmony import */ var _invoice_completed_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-completed.page.scss */ 85209);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/base/service */ 4229);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/models/tankwagon */ 65516);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);











let InvoiceCompletedPage = class InvoiceCompletedPage extends _framework_common_base_service__WEBPACK_IMPORTED_MODULE_3__.Service {
    constructor(navCtrl, loadingCtrl, alertCtrl, commonSQL, http, https, message) {
        super(http, https);
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonSQL = commonSQL;
        this.http = http;
        this.https = https;
        this.message = message;
        this.data = [];
        this.customer = [];
        this.sites = [];
        this.currentFilter = '';
        this.currentCustomer = '';
        this.currentCustomerId = 0;
        this.currentSite = 0;
        this.tmAlerts = [];
        this.dynamicScrollHeight = "500px";
        this.dynamicScrollWidth = "1950px";
    }
    ionViewDidEnter() {
        var me = this;
        me.getInvoiceList();
        var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
        _rows.forEach(element => {
            element.setAttribute("style", "height: 50px !important;");
        });
    }
    getInvoiceList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            if (me.searchValue !== "" && me.searchValue !== undefined) {
                _query = 'SELECT * FROM invoice where strInvoiceNo like \'%' + me.searchValue + '%\'' +
                    ' or strCustomerNo like \'%' + me.searchValue + '%\'' +
                    ' or strCustomerName like \'%' + me.searchValue + '%\'' +
                    ' or strLocationName like \'%' + me.searchValue + '%\'' +
                    ' or strComments like \'%' + me.searchValue + '%\'' +
                    ' or strVoidComments like \'%' + me.searchValue + '%\'';
            }
            else {
                _query = 'SELECT * FROM invoice';
            }
            console.log(_query);
            me.commonSQL.getDataQuery(_query + me.currentFilter).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log(me.data);
                me.dynamicScrollHeight = ((40 * me.data.length) + 700).toString() + 'px';
                var options = {
                    year: "numeric", month: "short",
                    day: "numeric", hour: "2-digit", minute: "2-digit"
                };
                for (var x = 0; x <= me.data.length - 1; x++) {
                    me.data[x].dtmInvoiceDate = new Date(me.data[x].dtmInvoiceDate).toLocaleTimeString("en-US", options);
                    if (me.data[x].ysnVoided != "true") {
                        me.data[x].ysnVoided = "false";
                    }
                }
                loader.dismiss();
                var _txtSearch = me.searchInput.el;
                _txtSearch.getElementsByTagName('input')[0].focus();
            })
                .catch(e => {
                loader.dismiss();
            });
        });
    }
    voidInvoice(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(item);
            if (item.ysnVoided == "true" || item.ysnVoided == true)
                return;
            let confirm = yield me.alertCtrl.create({
                message: 'Are you sure you want to void invoice ' + item.strInvoiceNo + '?',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            me.voidComment(item);
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            item.ysnVoided = 'false';
                            console.log('void process canceled');
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
    voidComment(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(item);
            var _data = item.intOrderId;
            let loader = yield me.loadingCtrl.create({ message: "Voiding invoice...", backdropDismiss: true });
            let alert = yield me.alertCtrl.create({
                message: 'Void Invoice',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'comment',
                        placeholder: 'Add Comment...'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            item.ysnVoided = 'false';
                            console.log('void process canceled');
                        }
                    },
                    {
                        text: 'Void Invoice',
                        handler: data => {
                            loader.present();
                            me.getbasic('/mobilebilling/api/invoice/getvoidinvoice?id=' + _data).subscribe(res => {
                                console.log(res);
                                me.commonSQL.updateDataQuery("UPDATE invoice SET ysnVoided = 'true', ysnSendToOffice = 'true', strVoidComments = '" + data.comment + "' WHERE intInvoiceId = '" + item.intInvoiceId + "'").then(res => {
                                    me.data = JSON.parse(JSON.stringify(res));
                                    me.getInvoiceList();
                                    loader.dismiss();
                                });
                                me.commonSQL.getDataQuery('SELECT * from invoiceitems WHERE intOrderId = \'' + item.intOrderId + '\'').then(res => {
                                    var _record = JSON.parse(JSON.stringify(res));
                                    for (var z = 0; z <= _record.length - 1; z++) {
                                        var _id = _record[z].intContractDetailId;
                                        ;
                                        var _quantity = _record[z].dblQuantity;
                                        var _itemid = _record[z].intItemId;
                                        var _itemno = _record[z].strItemNo;
                                        var _itemdesc = _record[z].strItemDescription;
                                        // +++++ TANK WAGON INSERT +++++
                                        var _tankwagon = [];
                                        var _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_5__.Tankwagon;
                                        _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_5__.Tankwagon;
                                        _line.intItemId = _itemid;
                                        _line.strItemNo = _itemid;
                                        _line.strDescription = _itemdesc;
                                        _line.dblQuantity = _quantity;
                                        _line.strTransactionReference = 'Increases Inventory of Product';
                                        _line.strTransactionType = 'Void Invoice';
                                        _tankwagon.push(_line);
                                        me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res => { console.log('TANKWAGON UPDATED'); });
                                        // +++++ TANK WAGON INSERT +++++
                                        // me.commonSQL.updateByQuery('UPDATE loadinventory SET dblQuantityReturned = (dblQuantityReturned + ' + _quantity + ') WHERE intItemId = \'' + _itemid + '\'').then(res => { console.log(res); });
                                        // me.commonSQL.updateDataQuery("UPDATE contractdetail SET dblAvailableQty = (dblAvailableQty + " + _quantity + ") WHERE intContractDetailId = " + _id).then(res => console.log(res));
                                    }
                                });
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    sendInvoiceToServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let confirm = yield me.alertCtrl.create({
                message: 'Are you sure you want to send failed invoices to the server?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                            me.buildSendData();
                        })
                    }, {
                        text: 'No',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                        })
                    }
                ]
            });
            confirm.present();
        });
    }
    buildSendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Sending data...", backdropDismiss: true });
            loader.present();
            return new Promise((resolve, reject) => {
                var me = this;
                var _shift = [], _invoice = [], _invoiceitems = [], _invoicetaxcodes = [], _outofgass = [], _data = [];
                // debugger;
                // SEND SHIFT
                console.log('SEND SHIFT');
                me.commonSQL.getData('shift').then(res => {
                    _shift = res;
                    console.log('SHIFT');
                    console.log(_shift);
                    me.commonSQL.getData('invoice').then(res => {
                        console.log('INVOICE');
                        console.log(res);
                        _invoice = res.filter(x => x.intShiftId == _shift[_shift.length - 1].intShiftId); //res[res.length-1];
                        console.log(_invoice);
                        me.commonSQL.getData('invoiceitems').then(res => {
                            console.log('INVOICE ITEMS');
                            _invoiceitems = res;
                            console.log(_invoiceitems);
                            me.commonSQL.getData('invoicetaxcodes').then(res => {
                                console.log('TAXES');
                                _invoicetaxcodes = res;
                                console.log(_invoicetaxcodes);
                                _data = _shift[_shift.length - 1];
                                _data['tblMBILInvoices'] = [];
                                console.log('BUILDING INVOICE DATA');
                                for (var x = 0; x <= _invoice.length - 1; x++) {
                                    var _temp_invoice = [];
                                    _temp_invoice = _invoice[x];
                                    if (_temp_invoice['ysnSendToOffice'] != 'true' && _temp_invoice['ysnVoided'] != 'true') {
                                        var _tmAlerts = {
                                            strCustomerNumber: _temp_invoice['strCustomerNumber'],
                                            intSiteNumber: _temp_invoice['intSiteNumber'],
                                            dtmDateDelivery: _temp_invoice['dtmDeliveryDate'],
                                            dblQuantity: _temp_invoice['dblQuantity'],
                                            dblPrice: _temp_invoice['dblPrice'],
                                            dblTotal: _temp_invoice['dblTotal']
                                        };
                                        me.tmAlerts.push(_tmAlerts);
                                        console.log(_temp_invoice);
                                        for (var y = 0; y <= _invoiceitems.length - 1; y++) {
                                            if (_invoice[x].intOrderId == _invoiceitems[y].intOrderId) {
                                                console.log(_invoiceitems[y]);
                                                // _temp_invoice['tblMBILInvoiceItems'] = [];
                                                if (!_temp_invoice['tblMBILInvoiceItems']) {
                                                    _temp_invoice['tblMBILInvoiceItems'] = [];
                                                }
                                                _temp_invoice['tblMBILInvoiceItems'].push(_invoiceitems[y]);
                                                debugger;
                                                _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
                                                for (var z = 0; z <= _invoicetaxcodes.length - 1; z++) {
                                                    if (_invoiceitems[y].intOrderId == _invoicetaxcodes[z].intOrderId) {
                                                        if (!_temp_invoice['tblMBILInvoiceItems'][0]) {
                                                            _temp_invoice['tblMBILInvoiceItems'][0] = [];
                                                        }
                                                        if (_temp_invoice['tblMBILInvoiceItems'][0]) {
                                                            console.log('temp invoice Y');
                                                            console.log(_temp_invoice['tblMBILInvoiceItems'][0]);
                                                            // if(!_temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes']) {
                                                            //   _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
                                                            // }
                                                            _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'].push(_invoicetaxcodes[z]);
                                                            console.log('pushed invoice');
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        console.log(_temp_invoice);
                                        _data['tblMBILInvoices'].push(_temp_invoice);
                                    }
                                }
                                console.log('before sending entire shift');
                                console.log(_data);
                                var _orderList = '';
                                for (var x = 0; x <= _invoice.length - 1; x++) {
                                    if (_invoice[x].ysnSendToOffice != 'true' && _invoice[x].ysnVoided != 'true') {
                                        _orderList = _orderList + _invoice[x].intOrderId + '\', \'';
                                    }
                                }
                                me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => {
                                    console.log('syncentireshift');
                                    console.log(res);
                                    me.commonSQL.updateDataQuery('UPDATE invoice SET ysnSendToOffice = \'true\' WHERE intOrderId IN (\'' + _orderList + '0\')').then(res => { console.log(res); console.log('update invoice'); });
                                    // // TM Alerts
                                    console.log(me.tmAlerts);
                                    //update status
                                    me.putraw('tankmanagement/api/consumptionsite/updatedispatchordernew', me.tmAlerts).subscribe(res => {
                                        console.log('updatedispatchorders');
                                        console.log(res);
                                    });
                                    //email notification
                                    me.postraw('tankmanagement/api/consumptionsite/emaildeliveries', me.tmAlerts).subscribe(res => {
                                        console.log('emaildeliveries');
                                        console.log(res);
                                    });
                                    loader.dismiss();
                                    me.getInvoiceList();
                                });
                            });
                        });
                    });
                });
            });
        });
    }
};
InvoiceCompletedPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__.CommonSQL },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__.HTTP },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message }
];
InvoiceCompletedPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['txtSearch', { static: false },] }]
};
InvoiceCompletedPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-invoice-completed',
        template: _raw_loader_invoice_completed_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_completed_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceCompletedPage);



/***/ }),

/***/ 85209:
/*!*********************************************************************!*\
  !*** ./src/app/pages/invoice-completed/invoice-completed.page.scss ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLWNvbXBsZXRlZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 98732:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-completed/invoice-completed.page.html ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-grid no-padding>\n      <ion-row large>\n        <ion-col size=\"8\">\n          <ion-searchbar #txtSearch [(ngModel)]=\"searchValue\" large (ionChange)=\"getInvoiceList()\" [debounce]=\"2000\"></ion-searchbar>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button ion-button expand=\"block\" primary (click)=\"sendInvoiceToServer()\" style=\"height: 42px !important;\">Send Failed Invoices</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content padding scrollX=\"true\">       \n  <!-- <ion-scroll scrollX=\"true\" [ngStyle]=\"{'height':dynamicScrollHeight}\"> -->\n    <ion-list [ngStyle]=\"{'width':dynamicScrollWidth}\">\n      <ion-row>\n        <ion-col style=\"width: 900px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Invoice No</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 150px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Customer No</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 250px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Customer Name</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Location Name</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 300px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Invoice Date</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 70px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label style=\"text-align: left;\"><b>Void</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Comments</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Void Comments</b></ion-label>\n          </ion-item>\n        </ion-col>          \n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Sent to Office</b></ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngFor=\"let item of data\">\n        <ion-col style=\"width: 900px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strInvoiceNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 150px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strCustomerNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 250px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strCustomerName}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strLocationName}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 300px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.dtmInvoiceDate}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 70px !important; padding: 5px 0px 5px 0px\">\n          <ion-item style=\"width: 100% !important; align-items: center;\">\n            <ion-button ion-button expand=\"block\" style=\"width: 100% !important; align-items: center;\" [disabled]=\"item['ysnVoided']\" primary item-end icon-left (click)=\"voidInvoice(item)\">\n              <!-- <ion-icon name=\"close-circle-outline\" style=\"margin-right: 5px;\"></ion-icon> -->\n              Void\n            </ion-button>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strComments}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strVoidComments}}</ion-label>\n          </ion-item>\n        </ion-col>                    \n        <ion-col style=\"width: 70px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label *ngIf=\"item.ysnSendToOffice=='true'\">Sent</ion-label>\n            <ion-label *ngIf=\"item.ysnSendToOffice!='true'\">Failed</ion-label>\n          </ion-item>\n        </ion-col>                            \n      </ion-row>\n    </ion-list>\n  <!-- </ion-scroll> -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-completed_invoice-completed_module_ts.js.map