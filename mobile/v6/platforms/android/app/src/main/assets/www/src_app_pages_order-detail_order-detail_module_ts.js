(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_order-detail_order-detail_module_ts"],{

/***/ 90465:
/*!*******************************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPageRoutingModule": () => (/* binding */ OrderDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail.page */ 63797);




const routes = [
    {
        path: '',
        component: _order_detail_page__WEBPACK_IMPORTED_MODULE_0__.OrderDetailPage
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderDetailPageRoutingModule);



/***/ }),

/***/ 88931:
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPageModule": () => (/* binding */ OrderDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-detail-routing.module */ 90465);
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page */ 63797);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);











let OrderDetailPageModule = class OrderDetailPageModule {
};
OrderDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _order_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderDetailPageRoutingModule
        ],
        declarations: [_order_detail_page__WEBPACK_IMPORTED_MODULE_1__.OrderDetailPage],
        providers: [
            _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_2__.OrderBRL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfoBRL,
            _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfo,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__.CommonSQL
        ]
    })
], OrderDetailPageModule);



/***/ }),

/***/ 63797:
/*!*********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderDetailPage": () => (/* binding */ OrderDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order-detail.page.html */ 89514);
/* harmony import */ var _order_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-detail.page.scss */ 61925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);










let OrderDetailPage = class OrderDetailPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, globalBRL, router, menu, orderBRL, commonSQL) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.globalBRL = globalBRL;
        this.router = router;
        this.menu = menu;
        this.orderBRL = orderBRL;
        this.commonSQL = commonSQL;
        this.detail = [];
        this.delivered = 'open';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var me = this;
        me.detail = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.navParams.orderDetail;
        console.log(me.detail);
        me.delivered = me.detail['strOrderStatus'] || 'open';
        me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
            console.log(res);
            if (res[0]) {
                me.globalInfo = res[0];
                console.log('global info ==> ', me.globalInfo);
                console.log(me.globalInfo);
            }
        });
    }
    buildInvoice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var _createInvoiceInvalid = yield me.alertCtrl.create({
                message: 'Shift has not yet started!',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                        }
                    }
                ]
            });
            if (me.detail['dblCreditLimit'] <= 0) {
                let confirm = yield me.alertCtrl.create({
                    header: 'Warning',
                    message: 'Please collect cash before dispensing.',
                    buttons: [
                        {
                            text: 'OK',
                            handler: () => {
                                if (me.globalInfo['ysnShiftOnGoing'] == true || me.globalInfo['ysnShiftOnGoing'] == 'true') {
                                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.stopReload = false;
                                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.InvoiceRecord = [];
                                    me.orderBRL.buildInvoice(me.detail, false).then(res => {
                                        console.log(res);
                                        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.navParams = { invoice: res, isMeter: true }; // MBIL-546
                                        me.router.navigateByUrl('/invoice');
                                    });
                                }
                                else {
                                    _createInvoiceInvalid.present();
                                }
                            }
                        }
                    ]
                });
                confirm.present();
            }
            else {
                if (me.globalInfo['ysnShiftOnGoing'] == true || me.globalInfo['ysnShiftOnGoing'] == 'true') {
                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.stopReload = false;
                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.InvoiceRecord = [];
                    me.orderBRL.buildInvoice(me.detail, false).then(res => {
                        console.log(res);
                        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.navParams = { invoice: res, isMeter: true }; // MBIL-546
                        me.router.navigateByUrl('/invoice');
                    });
                }
                else {
                    _createInvoiceInvalid.present();
                }
            }
        });
    }
};
OrderDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_3__.OrderBRL },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__.CommonSQL }
];
OrderDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-order-detail',
        template: _raw_loader_order_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_order_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderDetailPage);



/***/ }),

/***/ 61925:
/*!***********************************************************!*\
  !*** ./src/app/pages/order-detail/order-detail.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".blink_me {\n  animation: blinker 1s linear infinite;\n  background-color: red;\n  color: white;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFBO0VBQ0Y7QUFDRiIsImZpbGUiOiJvcmRlci1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJsaW5rX21lIHtcbiAgYW5pbWF0aW9uOiBibGlua2VyIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZWQ7XG4gIGNvbG9yOndoaXRlO1xufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rZXIge1xuICA1MCUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ 89514:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order-detail/order-detail.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n\n    </ion-buttons>\n    <ion-button slot=\"end\" primary (click)=\"buildInvoice()\" [disabled]=\"delivered == 'Delivered'\" >\n      Create Invoice\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <p *ngIf=\"detail['dblCreditLimit'] <= 0\" style=\"position:absolute;margin-left: 70%;\" class=\"blink_me\">Cash on delivery (COD)</p>\n      <ion-list-header class=\"order-details-header\">\n        <h1>AR</h1>\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Stop Number:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['intStopNumber']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Item Number:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strItemNo']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Quantity:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['dblQuantity']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Price:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['dblPrice']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Contract Number:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strContractNumber']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Available Quantity:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['dblAvailableQty'] | number}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <ion-list-header class=\"order-details-header\">\n        <h1>Customer</h1>\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Number:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strCustomerNumber']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Phone:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strPhone1']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Name:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strCustomerName']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Email:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strEmail']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Notes:</p>\n            </ion-col>\n            <ion-col size=\"9\" style=\"justify-content: left;\">\n              <p><b>{{detail['strInternalNotes']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <ion-list-header class=\"order-details-header\">\n        <h1>AR</h1>\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Credit Limit:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['dblCreditLimit']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p>Last Payment Date:</p>\n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{detail['dtmLastPaymentDate']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Current Balance:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['dblTotalDue']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p>Last Payment Amount:</p>\n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{detail['dblLastPayment']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>31 Days Amt:</p>\n            </ion-col>\n            <ion-col size=\"9\" style=\"justify-content: left;\">\n              <p><b>{{detail['dbl31DaysAmountDue']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <ion-list-header class=\"order-details-header\">\n        <h1>Site</h1>\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Number:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['intSiteNumber']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Address:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strSiteAddress']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Description:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strDescription']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>City:</p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p><b>{{detail['strCity']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Instruction:</p>\n            </ion-col>\n            <ion-col size=\"9\" style=\"justify-content: left;\">\n              <p><b>{{detail['strInstruction']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_order-detail_order-detail_module_ts.js.map