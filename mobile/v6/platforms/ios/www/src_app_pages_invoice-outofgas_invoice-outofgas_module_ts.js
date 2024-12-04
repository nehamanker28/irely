(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-outofgas_invoice-outofgas_module_ts"],{

/***/ 98195:
/*!***************************************************************************!*\
  !*** ./src/app/pages/invoice-outofgas/invoice-outofgas-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceOutofgasPageRoutingModule": () => (/* binding */ InvoiceOutofgasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_outofgas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-outofgas.page */ 68916);




const routes = [
    {
        path: '',
        component: _invoice_outofgas_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceOutofgasPage
    }
];
let InvoiceOutofgasPageRoutingModule = class InvoiceOutofgasPageRoutingModule {
};
InvoiceOutofgasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceOutofgasPageRoutingModule);



/***/ }),

/***/ 65124:
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-outofgas/invoice-outofgas.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceOutofgasPageModule": () => (/* binding */ InvoiceOutofgasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_outofgas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-outofgas-routing.module */ 98195);
/* harmony import */ var _invoice_outofgas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-outofgas.page */ 68916);







let InvoiceOutofgasPageModule = class InvoiceOutofgasPageModule {
};
InvoiceOutofgasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invoice_outofgas_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceOutofgasPageRoutingModule
        ],
        declarations: [_invoice_outofgas_page__WEBPACK_IMPORTED_MODULE_1__.InvoiceOutofgasPage]
    })
], InvoiceOutofgasPageModule);



/***/ }),

/***/ 68916:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invoice-outofgas/invoice-outofgas.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceOutofgasPage": () => (/* binding */ InvoiceOutofgasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_outofgas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-outofgas.page.html */ 74907);
/* harmony import */ var _invoice_outofgas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-outofgas.page.scss */ 23226);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 4329);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/report.service */ 67119);
/* harmony import */ var _framework_models_outofgas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/models/outofgas */ 44167);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);









let InvoiceOutofgasPage = class InvoiceOutofgasPage {
    constructor(navCtrl, navParams, loadingCtrl, alertCtrl, commonSQL, plt, reportService, keyboard) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonSQL = commonSQL;
        this.plt = plt;
        this.reportService = reportService;
        this.keyboard = keyboard;
        this.currentCustomerId = 0;
        this.outOfGas = new _framework_models_outofgas__WEBPACK_IMPORTED_MODULE_4__.OutOfGas();
        this.device = [];
        this.currentSiteId = 0;
        this.pdfObj = null;
        this.currentCustomerData = [];
        this.currentSiteData = [];
    }
    ngOnInit() {
    }
    ionViewDidLoad() {
        var me = this;
        me.currentCustomerData = me.navParams.get('currentCustomerData');
        me.currentSiteData = me.navParams.get('currentSiteData');
        me.currentCustomerId = me.currentCustomerData['intEntityCustomerId'];
        me.currentSiteId = me.currentSiteData['intSiteId'];
        //Manual Binding
        me.outOfGas.intCustomerId = me.currentSiteData['intEntityCustomerId'];
        me.outOfGas.intSiteId = me.currentSiteData['intSiteId'];
        me.outOfGas.strCustomerNo = me.currentCustomerData['strCustomerNumber'];
        me.outOfGas.strCustomerName = me.currentCustomerData['strCustomerName'];
        me.outOfGas.strSiteNo = me.currentSiteData['intSiteNumber'];
        me.outOfGas.strSiteDescription = me.currentCustomerData['strDescription'];
        console.log('Delivery - Out Of Gas Page');
        me.getOutOfGas();
        me.getDevice();
    }
    hideKeyboard() {
        this.keyboard.hide();
    }
    clearInputValue(elem) {
        elem.getElementRef().nativeElement.children[0].select();
    }
    getOutOfGas() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading Data...", backdropDismiss: true });
            loader.present();
            console.log('SELECT * FROM outofgas where intSiteId = \'' + me.outOfGas.intSiteId + '\' AND intCustomerId = \'' + me.outOfGas.intCustomerId + '\'');
            me.commonSQL.getDataQuery('SELECT * FROM outofgas where intSiteId = \'' + me.outOfGas.intSiteId + '\' AND intCustomerId = \'' + me.outOfGas.intCustomerId + '\'').then(res => {
                me.outOfGas = JSON.parse(JSON.stringify(res));
                console.log(me.outOfGas);
                loader.dismiss();
            })
                .catch(e => {
                console.log(e);
                loader.dismiss();
            });
        });
    }
    getDevice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading Device...", backdropDismiss: true });
            loader.present();
            console.log('SELECT * FROM tblTMSiteDevice where intSiteId = \'' + me.outOfGas.intSiteId + '\'');
            me.commonSQL.getDataQuery('SELECT * FROM tblTMSiteDevice where intSiteId = \'' + me.outOfGas.intSiteId + '\'').then(res => {
                me.device = JSON.parse(JSON.stringify(res));
                console.log(me.device);
                if (me.device.length > 0) {
                    me.device = me.device[0];
                    me.outOfGas.dblCapacity = me.device['dblTankCapacity'];
                    me.outOfGas.strSerialNo = me.device['strSerialNumber'];
                    me.outOfGas.strTankDescription = me.device['strTankDescription'];
                }
                loader.dismiss();
            })
                .catch(e => {
                console.log(e);
                loader.dismiss();
            });
        });
    }
    cancel() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            let confirm = yield this.alertCtrl.create({
                message: 'Are you sure you want to cancel?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            this.navCtrl.pop();
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
    save() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield this.loadingCtrl.create({ message: "Saving...", backdropDismiss: true });
            loader.present();
            me.commonSQL.updateData(me.outOfGas['tablename'], me.outOfGas).then(res => {
                this.createPdf(me.outOfGas);
                loader.dismiss();
            });
        });
    }
    logo() {
        return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
    }
    createPdf(record) {
        console.log(record);
        var me = this;
        var irelyImage = me.logo();
        var _companyname = localStorage.getItem('company_name') || '';
        var _address = localStorage.getItem('company_address') || '';
        var _county = localStorage.getItem('company_county') || '';
        var _city = localStorage.getItem('company_city') || '';
        var _state = localStorage.getItem('company_state') || '';
        var _zip = localStorage.getItem('company_zip') || '';
        var _driver = '';
        var _drivername = '';
        var _billingaddress = '';
        var _billingaddress2 = '';
        var docDefinition = {
            content: [
                {
                    table: {
                        widths: [155, '*', '*'],
                        body: [
                            [
                                { image: irelyImage, width: 100 },
                                {}
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', '*', '*'],
                        body: [
                            [{ text: _companyname, bold: true }, '', ''],
                            [_address + ' ' + _county, '', ''],
                            [_city + ', ' + _state + ' ' + _zip, '', ''],
                            ['', '', ''],
                            ['', '', '']
                        ]
                    },
                    layout: 'noBorders'
                },
                { text: 'Out of Gas Report', style: 'header' },
                {
                    table: {
                        headerRows: 1,
                        widths: [100, '*', 100, '*'],
                        body: [
                            ['', '', '', ''],
                            ['', '', '', ''],
                            [{ text: 'Customer:', alignment: 'left' }, { text: me.outOfGas.strCustomerNo || '', alignment: 'left' }, { text: 'Driver:', alignment: 'left' }, { text: me.outOfGas.strDriverNumber || '', alignment: 'left' }],
                            ['', me.outOfGas.strCustomerName || '', '', ''],
                            ['', '', '', ''],
                            ['', '', '', ''],
                            [{ text: 'Billing Address:', alignment: 'left' }, { text: me.outOfGas.strCustomerBillingAddressA || '', alignment: 'left' }, { text: 'Date:', alignment: 'left' }, { text: me.outOfGas.dtmDate || '', alignment: 'left' }],
                            ['', me.outOfGas.strCustomerBillingAddressB || '', '', ''],
                            ['', '', '', ''],
                        ],
                    },
                    layout: 'noBorders'
                },
                { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
                {
                    table: {
                        headerRows: 1,
                        widths: [100, '*', 100, '*'],
                        body: [
                            ['', '', '', ''],
                            ['', '', '', ''],
                            [{ text: 'Site Number:', alignment: 'left' }, { text: me.outOfGas.strSiteNo || '', alignment: 'left' }, { text: 'Serial No:', alignment: 'left' }, { text: me.outOfGas.strSerialNo || '', alignment: 'left' }],
                            ['', '', '', ''],
                            ['', '', '', ''],
                            [{ text: 'Site Address:', alignment: 'left' }, { text: me.outOfGas.strSiteAddressA || '', alignment: 'left' }, { text: 'Capacity:', alignment: 'left' }, { text: me.outOfGas.dblCapacity || '', alignment: 'left' }],
                            ['', me.outOfGas.strSiteAddressB || '', '', ''],
                            ['', '', '', ''],
                            ['', '', { text: 'Description:', alignment: 'left' }, { text: me.outOfGas.strTankDescription || '', alignment: 'left' }],
                            ['', '', '', ''],
                            ['', '', '', ''],
                            ['', '', '', ''],
                            ['', '', '', ''],
                        ],
                    },
                    layout: 'noBorders'
                },
                {
                    table: {
                        headerRows: 1,
                        widths: [120, '*', '*', '*'],
                        body: [
                            ['', '', '', ''],
                            ['', '', '', ''],
                            ['', '', '', ''],
                            ['', '', '', ''],
                            [{ text: 'Leak Test Status:', alignment: 'left' }, { text: me.outOfGas.strLeakTestStatus || '', alignment: 'left' }, {}, {}],
                            ['', '', '', ''],
                            [{ text: 'Minutes Held:', alignment: 'left' }, { text: me.outOfGas.dblMinutesHeld || '', alignment: 'left' }, {}, {}],
                            ['', '', '', ''],
                            [{ text: 'Pressure (psi):', alignment: 'left' }, { text: me.outOfGas.dblPressureReading || '', alignment: 'left' }, {}, {}],
                            ['', '', '', ''],
                            [{ text: 'Tagged and Locked:', alignment: 'left' }, { text: me.outOfGas.ysnTaggedLocked || '', alignment: 'left' }, {}, {}],
                            ['', '', '', ''],
                            [{ text: 'Customer Notified:', alignment: 'left' }, { text: me.outOfGas.ysnCustomerNotified || '', alignment: 'left' }, {}, {}],
                            ['', '', '', ''],
                            [{ text: 'Applience Lit:', alignment: 'left' }, { text: me.outOfGas.ysnAppliancesLit || '', alignment: 'left' }, {}, {}],
                            ['', '', '', ''],
                            [{ text: 'Notes:', alignment: 'left' }, { text: me.outOfGas.strNoted || '', alignment: 'left' }, {}, {}],
                            ['', '', '', ''],
                        ],
                    },
                    layout: 'noBorders'
                },
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
                    fontSize: 12
                }
            },
            defaultStyle: {
                fontSize: 11.5
            }
        };
        var _now = new Date(), _filename = "Delivery-Out-Of-Gas_" + _now.getFullYear() + ("0" + (_now.getMonth() + 1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours() + 1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
        me.reportService.create(docDefinition, _filename.replace(/[/\\?%*:|"<>]/g, ''));
        // this.navCtrl.pop().then(() => {
        //   this.events.publish('closeInvoice');
        // });
    }
};
InvoiceOutofgasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavParams },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__.CommonSQL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: _providers_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportService },
    { type: _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_2__.Keyboard }
];
InvoiceOutofgasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-invoice-outofgas',
        template: _raw_loader_invoice_outofgas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_outofgas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceOutofgasPage);



/***/ }),

/***/ 23226:
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-outofgas/invoice-outofgas.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLW91dG9mZ2FzLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 74907:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-outofgas/invoice-outofgas.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>invoice-outofgas</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"10\"></ion-col>\n        <ion-col size=\"2\" end>\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"save()\" class=\"button-global\">Save</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-content>\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"3\">\n                <ion-item class=\"control-disabled\">\n                  <ion-label stacked style=\"width: 300px !important\">Customer No</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['strCustomerNo']\" readonly=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item class=\"control-disabled\">\n                  <ion-label stacked style=\"width: 300px !important\">Full Name</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['strCustomerName']\" readonly=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item class=\"control-disabled\">\n                  <ion-label stacked style=\"width: 300px !important\">Site No</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['strSiteNo']\" readonly=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item class=\"control-disabled\">\n                  <ion-label stacked style=\"width: 300px !important\">Site Description</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['strSiteDescription']\" readonly=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col size=\"3\">\n                <ion-item class=\"control-disabled\">\n                  <ion-label stacked style=\"width: 300px !important\">Serial No</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['strSerialNo']\" readonly=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"3\">\n                <ion-item class=\"control-disabled\">\n                  <ion-label stacked style=\"width: 300px !important\">Capacity</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['dblCapacity']\" readonly=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n                <ion-item class=\"control-disabled\">\n                  <ion-label stacked style=\"width: 300px !important\">Tank Description</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['strTankDescription']\" readonly=\"true\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label>Leak Test Status:</ion-label>\n                  <ion-select #type clearInput interface=\"popover\" [(ngModel)]=\"outOfGas['strLeakTestStatus']\"> \n                    <ion-select-option>Passed</ion-select-option>\n                    <ion-select-option>Failed</ion-select-option>\n                  </ion-select>\n                </ion-item>\n              </ion-col>\n              <ion-col>\n                <ion-item>\n                  <ion-label style=\"width: 170px !important\">Pressure Reading:</ion-label>\n                  <ion-input type=\"number\" class=\"editable-input\" (ionFocus)=\"clearInputValue($event)\" (keyup.enter)=\"hideKeyboard()\" [(ngModel)]=\"outOfGas['dblPressureReading']\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label style=\"width: 150px !important\">Minutes Held:</ion-label>\n                  <ion-input type=\"number\" [(ngModel)]=\"outOfGas['dblMinutesHeld']\" ></ion-input>\n                </ion-item>\n              </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label style=\"width: 120px !important\">Tagged and Locked</ion-label>\n                    <ion-checkbox color=\"danger\" [(ngModel)]=\"outOfGas['ysnTaggedLocked']\"></ion-checkbox>\n                  </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label style=\"width: 120px !important\">Customer Notified</ion-label>\n                  <ion-checkbox color=\"danger\" [(ngModel)]=\"outOfGas['ysnCustomerNotified']\"></ion-checkbox>\n                </ion-item>\n              </ion-col>\n                <ion-col>\n                  <ion-item>\n                    <ion-label style=\"width: 120px !important\">Appliances Lit</ion-label>\n                    <ion-checkbox color=\"danger\" [(ngModel)]=\"outOfGas['ysnAppliancesLit']\"></ion-checkbox>\n                  </ion-item>\n              </ion-col>\n            </ion-row>           \n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label style=\"width: 120px !important\">Notes:</ion-label>\n                  <ion-input type=\"text\" [(ngModel)]=\"outOfGas['strNotes']\"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row> \n          </ion-grid>\n        </ion-content>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-outofgas_invoice-outofgas_module_ts.js.map