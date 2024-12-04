(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_payment_payment_module_ts"],{

/***/ 34018:
/*!*********************************************************!*\
  !*** ./src/app/pages/payment/payment-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 48622);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 64923:
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 34018);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 48622);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);










let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfoBRL,
        ]
    })
], PaymentPageModule);



/***/ }),

/***/ 48622:
/*!***********************************************!*\
  !*** ./src/app/pages/payment/payment.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment.page.html */ 46058);
/* harmony import */ var _payment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss */ 90204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _framework_common_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/service */ 4229);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/report.service */ 67119);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_models_payment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/models/payment */ 10785);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);
/* harmony import */ var _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../framework/models/tblMBILPDF */ 12750);
















let PaymentPage = class PaymentPage extends _framework_common_base_service__WEBPACK_IMPORTED_MODULE_2__.Service {
    constructor(navCtrl, loadingCtrl, alertCtrl, commonSQL, globalBRL, plt, https, http, globalEventsService, reportService, router, menu) {
        super(http, https);
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonSQL = commonSQL;
        this.globalBRL = globalBRL;
        this.plt = plt;
        this.https = https;
        this.http = http;
        this.globalEventsService = globalEventsService;
        this.reportService = reportService;
        this.router = router;
        this.menu = menu;
        this.data = [];
        this.detail = [];
        this.currentSort = '';
        this.currentFilter = '';
        this.currentCustomer = '';
        this.customers = "";
        this._isCheck = true;
        this.PaymentId = null;
        this.currentLocation = '';
        this.pdfObj = null;
        this.menu.enable(true);
        this.setObservables();
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad CustomerPaymentPage');
        var me = this;
        if (_framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams) {
            me.PaymentId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.PaymentId;
            if (me.PaymentId != null) {
                me.loadPayment();
            }
            me.currentCustomer = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.customerData;
            if (me.currentCustomer !== null && me.currentCustomer !== undefined) {
                me.data["intEntityCustomerId"] = me.currentCustomer["intEntityCustomerId"];
                me.data["strCustomerNo"] = me.currentCustomer["strCustomerNumber"];
                me.data["strCustomerName"] = me.currentCustomer["strCustomerName"];
                me.data["strBillToAddress"] = me.currentCustomer["strBillToAddress"];
                me.data["strBillToCity"] = me.currentCustomer["strBillToCity"];
                me.data["strBillToState"] = me.currentCustomer["strBillToState"];
                me.data["strBillToZipCode"] = me.currentCustomer["strBillToZipCode"];
            }
        }
        me.locationSetup();
        // me.userGlobalInfo();
    }
    setObservables() {
        var me = this;
        console.log('setObservables');
        // ADD PAYMENT
        me.globalEventsService.getObservablePayment().subscribe((data) => {
            console.log(data);
            if (data && _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.globalFlag == false) {
                me.data["intEntityCustomerId"] = data.intEntityCustomerId;
                me.data["strCustomerNo"] = data.strCustomerNumber;
                me.data["strCustomerName"] = data.strCustomerName;
                me.data["strBillToAddress"] = data.strBillToAddress;
                me.data["strBillToCity"] = data.strBillToCity;
                me.data["strBillToState"] = data.strBillToState;
                me.data["strBillToZipCode"] = data.strBillToZipCode;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.globalFlag = true;
            }
        });
    }
    userGlobalInfo() {
        var me = this;
        me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
            console.log(res);
            if (res[0]) {
                me.globalInfo = res[0];
                me.currentLocation = (me.globalInfo['intLocation'] || '').toString();
                var _date = new Date();
                var datestring = _date.getFullYear().toString().substring(2, 4) + "" + ("0" + (_date.getMonth() + 1)).slice(-2) + "" +
                    ("0" + _date.getDate()).slice(-2) + "" + ("0" + _date.getHours()).slice(-2) + "" + ("0" + _date.getMinutes()).slice(-2);
                +"" + _date.getSeconds();
                me.data["strPaymentNo"] = 'PAY-' + (me.globalInfo.intDriverNumber || me.globalInfo.intDriverId) + '-' + datestring;
            }
        });
    }
    locationSetup() {
        var me = this;
        me.commonSQL.getDataQuery('select * from tblSMLocation order by strLocationName').then(res => {
            console.log(res);
            this.location = res;
            me.userGlobalInfo();
        });
    }
    loadPayment() {
        var me = this;
        me.commonSQL.getDataQuery('select * from payment where intPaymentId = \'' + me.PaymentId + '\'').then(res => {
            me.data = JSON.parse(JSON.stringify(res));
            console.log(me.data);
        });
    }
    voidPayment() {
        var me = this;
    }
    methodChange(value, item) {
        var me = this;
        console.log(value);
        console.log(item);
        if (value == 'Cash') {
            me._isCheck = false;
        }
        else {
            me._isCheck = true;
        }
        me.data['strMethod'] = value;
    }
    searchCustomer() {
        var me = this;
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.globalFlag = false;
        me.router.navigateByUrl('/customer-list');
    }
    completePayment() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            if (me.data["strPaymentNo"] == null || me.data["strPaymentNo"] == '') {
                let confirm = yield me.alertCtrl.create({
                    message: 'Payment Number is required.',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                            }
                        }
                    ]
                });
                confirm.present();
                return;
            }
            if (me.data["dblPayment"] == null || me.data["dblPayment"] == undefined) {
                let confirm = yield me.alertCtrl.create({
                    message: 'Payment Amount is required.',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                            }
                        }
                    ]
                });
                confirm.present();
                return;
            }
            if (me.data["strCustomerNo"] == null || me.data["strCustomerNo"] == '') {
                let confirm = yield me.alertCtrl.create({
                    message: 'Customer is required.',
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                            }
                        }
                    ]
                });
                confirm.present();
                return;
            }
            var loader = yield me.loadingCtrl.create({ message: "Saving Payment...", backdropDismiss: true });
            loader.present();
            var _date = new Date();
            var location = JSON.stringify(me.location);
            var strLocationName = JSON.parse(location).filter(function (item) {
                if (item.intCompanyLocationId == me.currentLocation) {
                    me.data["strLocationName"] = item.strLocationName;
                    return item.strLocationName;
                }
                console.log(item);
            });
            var _payment = new _framework_models_payment__WEBPACK_IMPORTED_MODULE_7__.Payment();
            _payment.intPaymentId = null;
            _payment.strPaymentNo = me.data["strPaymentNo"];
            _payment.intEntityCustomerId = me.data["intEntityCustomerId"];
            ;
            _payment.strCustomerNo = me.data["strCustomerNo"];
            _payment.strCustomerName = me.data["strCustomerName"];
            _payment.intLocationId = parseInt(me.currentLocation.toString() || '0');
            _payment.strLocationName = me.data["strLocationName"];
            _payment.intEntityDriverId = me.globalInfo.intDriverId || me.globalInfo.intDriverNumber;
            _payment.strDriverNo = null;
            _payment.strDriverName = me.globalInfo.strFullName;
            _payment.intShiftId = me.globalInfo.intShiftId;
            _payment.intShiftNumber = me.globalInfo.intShiftCounter;
            _payment.dtmDatePaid = _date.toJSON();
            _payment.strMethod = me.data["strMethod"] || 'Cash';
            _payment.strCheckNumber = me.data["strCheckNumber"];
            _payment.dblPayment = me.data["dblPayment"];
            _payment.strComments = me.data["strComments"];
            _payment.ysnPosted = false;
            _payment.ysnCompleted = true;
            _payment.ysnVoided = false;
            _payment.ysnSendToOffice = false;
            me.currentPayment = _payment;
            console.log(me.currentPayment);
            me.commonSQL.addData(_payment['tablename'], _payment).then(res => {
                console.log(res);
                me.globalEventsService.getObservablePaymentClear();
                loader.dismiss();
                me.createPdf();
                me.sendDataToOffice();
                me.navCtrl.pop();
            });
        });
    }
    logo() {
        return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
    }
    createPdf() {
        var me = this;
        var irelyImage = me.logo();
        var _companyname = localStorage.getItem('company_name') || '';
        var _address = localStorage.getItem('company_address') || '';
        var _county = localStorage.getItem('company_county') || '';
        var _city = localStorage.getItem('company_city') || '';
        var _state = localStorage.getItem('company_state') || '';
        var _zip = localStorage.getItem('company_zip') || '';
        var _date = new Date();
        var _paymentDate = ("0" + (_date.getMonth() + 1)).slice(-2) + "/" + ("0" + _date.getDate()).slice(-2) + "/" + _date.getFullYear();
        console.log(me.globalInfo);
        var docDefinition = {
            footer: function (currentPage, pageCount) {
                return {
                    columns: [
                        {
                            text: [
                                {
                                    text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                                }
                            ],
                            margin: [0, 0, 35, 0],
                            alignment: 'right'
                        }
                    ]
                };
            },
            content: [
                {
                    table: {
                        widths: [105, '*', '*'],
                        body: [
                            [
                                { image: irelyImage, width: 100 },
                                [
                                    {
                                        table: {
                                            body: [
                                                [{ text: _companyname, bold: true }, '', ''],
                                                [_address + ' ' + _county, '', ''],
                                                [_city + ', ' + _state + ' ' + _zip, '', ''],
                                                ['', '', ''],
                                                ['', '', '']
                                            ]
                                        },
                                        layout: 'noBorders'
                                    }
                                ],
                                [
                                    {
                                        table: {
                                            widths: ['*'],
                                            body: [
                                                [{ text: 'Payment Receipt', alignment: 'right', style: 'header', margin: [0, 0, 0, 0], }],
                                                [{ text: (new Date()).toDateString(), alignment: 'right', italics: true }],
                                            ]
                                        },
                                        layout: 'noBorders'
                                    }
                                ],
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },
                { text: '\n' },
                {
                    style: 'tableExample',
                    table: {
                        widths: [90, '*', 80, '*'],
                        body: [
                            [{ text: 'Location:', style: 'shadedbox' }, { text: me.currentPayment.strLocationName || '', alignment: 'left' }, { text: 'Driver:', style: 'shadedbox' }, { text: me.currentPayment.strDriverName || '', alignment: 'left' }],
                            [{ text: 'Currency:', style: 'shadedbox' }, { text: 'USD', alignment: 'left' }, { text: 'Date:', style: 'shadedbox' }, { text: _paymentDate || '', alignment: 'left' },],
                            [{ text: 'Customer No.:', style: 'shadedbox' }, { text: me.currentPayment.strCustomerNo || '', alignment: 'left' }, { text: 'Shift No:', style: 'shadedbox' }, { text: me.currentPayment.intShiftNumber || '', alignment: 'left' },],
                            [{ text: 'Customer Name:', style: 'shadedbox' }, { text: me.currentPayment.strCustomerName || '', alignment: 'left' }, { text: '', style: 'shadedbox' }, { text: '', alignment: 'left' },],
                            [{ text: 'Address:', style: 'shadedbox' }, { text: (me.data["strBillToAddress"] || '') + (me.data["strBillToCity"] || '') + ', ' + (me.data["strBillToState"] || '') + ', ' + (me.data["strBillToZipCode"] || '') + ',\n' + 'United States', alignment: 'left' }, { text: 'Notes:', style: 'shadedbox' }, { text: me.currentPayment.strComments || '', alignment: 'left' }]
                        ]
                    }
                },
                { text: '\n' },
                { text: '\n' },
                {
                    style: 'shadedbox',
                    bold: true,
                    table: {
                        widths: [150, 70, 120, 140],
                        body: [
                            [{ text: 'Payment Number', alignment: 'left', style: 'tableHeader', border: [true, true, false, true] }, { text: 'Method', alignment: 'left', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Check Number', alignment: 'right', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Amount', alignment: 'right', style: 'tableHeader', border: [false, true, true, true] }],
                        ]
                    },
                },
                // ++++++++++++++++++++++++++++++++++++++
                // BEGIN - DETAILS SHOULD BE DYNAMIC #1
                // ++++++++++++++++++++++++++++++++++++++
                {
                    style: 'tableExample',
                    table: {
                        widths: [150, 70, 120, 140],
                        body: [
                            [{ text: me.currentPayment.strPaymentNo || '', alignment: 'left', border: [false, false, false, false] }, { text: me.currentPayment.strMethod || '', alignment: 'left', border: [false, false, false, false] }, { text: me.currentPayment.strCheckNumber || '', alignment: 'right', border: [false, false, false, false] }, { text: (parseFloat(me.currentPayment.dblPayment)).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right', border: [false, false, false, false] }],
                        ]
                    },
                },
                // ++++++++++++++++++++++++++++++++++++++
                // END - DETAILS SHOULD BE DYNAMIC
                // ++++++++++++++++++++++++++++++++++++++
                { text: '\n' },
            ],
            styles: {
                header: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 10, 0, 10],
                    fontfamily: 'Wingdings'
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%'
                },
                body: {
                    fontSize: 12,
                },
                shadedbox: {
                    alignment: 'left',
                    fillColor: '#cccccc',
                    bold: true
                }
            },
            defaultStyle: {
                fontSize: 11.5,
            }
        };
        //RCV-M-20171106132145
        var _now = new Date(), _filename = "RCV-M-" + _now.getFullYear() + ("0" + (_now.getMonth() + 1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours() + 1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
        me.doInsertPDFInfo(_filename + ".pdf"); //Kenneth 06.23.2021
        me.reportService.create(docDefinition, _filename.replace(/[/\\?%*:|"<>]/g, ''), false, true);
    }
    sendDataToOffice() {
        var me = this;
        var _shift = [], _payments = [], _data = [];
        me.commonSQL.getDataQuery('select * from shift').then(res => {
            _shift = res;
            _data = _shift[_shift.length - 1];
            me.commonSQL.getDataQuery("select * from payment where ysnSendToOffice = 'false'").then(res => {
                _payments = res;
                _data['tblMBILPayments'] = [];
                for (var x = 0; x <= _payments.length - 1; x++) {
                    var _temp_payment = [];
                    _temp_payment = _payments[x];
                    console.log(_temp_payment);
                    _data['tblMBILPayments'].push(_temp_payment);
                }
                console.log('payment');
                console.log(_data);
                me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => {
                    console.log('syncentireshift');
                    console.log(res);
                    me.commonSQL.updateDataQuery("UPDATE payment SET ysnSendToOffice = 'true' WHERE strPaymentNo = '" + me.data["strPaymentNo"] + "'").then(res => console.log(res));
                });
            });
        });
    }
    back() {
        this.navCtrl.pop().then(() => {
            this.globalEventsService.getObservablePaymentClear();
        });
    }
    doInsertPDFInfo(_filename) {
        console.log('start doInsertPDFInfo');
        let me = this, pdfinfo = new _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_10__.tblMBILPDF();
        console.log(me.globalInfo);
        me.commonSQL.getData("shift").then(res => {
            console.log('data get from shift');
            let shiftdata = res[res.length - 1];
            pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
            pdfinfo.intShiftId = me.globalInfo.intShiftCounter;
            pdfinfo.intDriverId = me.globalInfo.intDriverNumber;
            pdfinfo.strFileName = _filename;
            pdfinfo.strFileType = "PAYMENT";
            me.commonSQL.addData('tblMBILPDF', pdfinfo).then(res => {
                console.log('successfully inserted to tblMBILPDF');
                me.commonSQL.getData('tblMBILPDF').then(result => console.log(result));
            });
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__.CommonSQL },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_8__.GlobalInfoBRL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_9__.HTTP },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClient },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__.GlobalEventsService },
    { type: _providers_report_service__WEBPACK_IMPORTED_MODULE_5__.ReportService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-payment',
        template: _raw_loader_payment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentPage);



/***/ }),

/***/ 90204:
/*!*************************************************!*\
  !*** ./src/app/pages/payment/payment.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 46058:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button (click)=\"back()\"></ion-back-button>\n    </ion-buttons>\n    <ion-grid no-padding >\n      <ion-row>\n        <ion-col></ion-col>\n        <ion-col size=\"4\" style=\"margin-right: 5px; color: black\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"searchCustomer()\" class=\"button-global\">Search Customer</ion-button>\n        </ion-col>\n        <ion-col size=\"3\" style=\"margin-right: 5px;\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"voidPayment()\" class=\"button-global\" [disabled]=\"!data['ysnCompleted']\">Void</ion-button>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"completePayment()\" class=\"button-global\">Complete</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; margin-top: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Payment Number:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-input [(ngModel)]=\"data['strPaymentNo']\" type=\"text\" readonly=\"true\"></ion-input>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; margin-top: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Entity Number:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-input [(ngModel)]=\"data['strCustomerNo']\" readonly=\"true\"></ion-input>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Customer Name:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-input [(ngModel)]=\"data['strCustomerName']\" readonly=\"true\"></ion-input>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Location Name:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-select [(ngModel)]=\"currentLocation\" clearInput interface=\"popover\">\n              <ion-select-option *ngFor=\"let item of location; let i = index;\" [value]=\"item.intCompanyLocationId\">\n                <span>{{item.strLocationName}}</span>\n              </ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Amount:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-input type=\"number\" [(ngModel)]=\"data['dblPayment']\"></ion-input>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Method:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-select #method value=\"Cash\" clearInput interface=\"popover\" (ionChange)=\"methodChange(method.value, currentCustomer)\">\n              <ion-select-option>Check</ion-select-option>\n              <ion-select-option>Cash</ion-select-option>\n            </ion-select>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Check Number:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-input *ngIf=\"_isCheck\" type=\"number\" [(ngModel)]=\"data['strCheckNumber']\"></ion-input>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; width: 100% !important;\">\n          <ion-col size=\"2\">\n            <ion-label>Comment:</ion-label>\n          </ion-col>\n          <ion-col size=\"5\">\n            <ion-textarea rows=\"4\" [(ngModel)]=\"data['strComments']\"></ion-textarea>\n          </ion-col>\n          <ion-col></ion-col>\n        </ion-item>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment_payment_module_ts.js.map