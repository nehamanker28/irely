(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_payment-receive_payment-receive_module_ts"],{

/***/ 43285:
/*!*************************************************************************!*\
  !*** ./src/app/pages/payment-receive/payment-receive-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentReceivePageRoutingModule": () => (/* binding */ PaymentReceivePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_receive_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-receive.page */ 64141);




const routes = [
    {
        path: '',
        component: _payment_receive_page__WEBPACK_IMPORTED_MODULE_0__.PaymentReceivePage
    }
];
let PaymentReceivePageRoutingModule = class PaymentReceivePageRoutingModule {
};
PaymentReceivePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentReceivePageRoutingModule);



/***/ }),

/***/ 18375:
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-receive/payment-receive.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentReceivePageModule": () => (/* binding */ PaymentReceivePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_receive_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-receive-routing.module */ 43285);
/* harmony import */ var _payment_receive_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-receive.page */ 64141);







let PaymentReceivePageModule = class PaymentReceivePageModule {
};
PaymentReceivePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _payment_receive_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentReceivePageRoutingModule
        ],
        declarations: [_payment_receive_page__WEBPACK_IMPORTED_MODULE_1__.PaymentReceivePage]
    })
], PaymentReceivePageModule);



/***/ }),

/***/ 64141:
/*!***************************************************************!*\
  !*** ./src/app/pages/payment-receive/payment-receive.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentReceivePage": () => (/* binding */ PaymentReceivePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_receive_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-receive.page.html */ 90270);
/* harmony import */ var _payment_receive_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-receive.page.scss */ 62308);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PaymentReceivePage = class PaymentReceivePage {
    constructor() {
        this.searchCustomer = [];
        this.voidPayment = [];
        this.completePayment = [];
        this.methodChange = [];
        this.data = [];
        this.detail = [];
        this.currentSort = '';
        this.currentFilter = '';
        this.currentCustomer = '';
        this.customers = "";
        this._isCheck = true;
        this.PaymentId = null;
        this.currentLocation = '';
    }
    ngOnInit() {
    }
};
PaymentReceivePage.ctorParameters = () => [];
PaymentReceivePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-payment-receive',
        template: _raw_loader_payment_receive_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_receive_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentReceivePage);



/***/ }),

/***/ 62308:
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-receive/payment-receive.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXJlY2VpdmUucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 90270:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-receive/payment-receive.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>  \n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid no-padding>\n      <ion-row class=\"ion-align-self-end\">\n        <ion-col></ion-col>\n        <ion-col size=\"3\" style=\"margin-right: 5px; color: black\">\n          <ion-button ion-button expand=\"block\" size=\"large\" primary (click)=\"searchCustomer()\" class=\"button-global\">Search Customer</ion-button>\n        </ion-col>\n        <ion-col size=\"3\" style=\"margin-right: 5px;\">\n          <ion-button ion-button expand=\"block\" size=\"large\" primary (click)=\"voidPayment()\" class=\"button-global\" [disabled]=\"!data['ysnCompleted']\">Void</ion-button>\n        </ion-col>\n        <ion-col size=\"3\" end>\n          <ion-button ion-button expand=\"block\" size=\"large\" primary (click)=\"completePayment()\" class=\"button-global\">Complete</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-grid>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; margin-top: 10px\">\n          <ion-label>Payment Number:</ion-label>\n          <ion-input [(ngModel)]=\"data['strPaymentNo']\" type=\"text\"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px; margin-top: 10px\">\n          <ion-label>Entity Number:</ion-label>\n          <ion-input [(ngModel)]=\"data['strCustomerNo']\" readonly=\"true\"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px\">\n          <ion-label>Customer Name:</ion-label>\n          <ion-input [(ngModel)]=\"data['strCustomerName']\" readonly=\"true\"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px\">\n          <ion-label>Location Name:</ion-label>\n          <ion-select clearInput interface=\"popover\" [(ngModel)]=\"data['intLocation']\"> \n              <ion-select-option *ngFor=\"let item of location; let i = index;\" [value]=\"item.intCompanyLocationId\">\n                <span>{{item.strLocationName}}</span>\n              </ion-select-option>\n            </ion-select>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px\">\n          <ion-label>Amount:</ion-label>\n          <ion-input type=\"number\" [(ngModel)]=\"data['dblPayment']\"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px\">\n          <ion-label>Method:</ion-label>\n          <ion-select #method clearInput interface=\"popover\" (ionChange)=\"methodChange(method.value, currentCustomer)\">\n            <ion-select-option selected=\"true\">Check</ion-select-option>\n            <ion-select-option>Cash</ion-select-option>\n          </ion-select>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px\">\n          <ion-label>Check Number:</ion-label>\n          <ion-input *ngIf=\"_isCheck\" type=\"number\" [(ngModel)]=\"data['strCheckNumber']\"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row>\n        <ion-item style=\"margin-bottom: 10px\">\n          <ion-label>Comment:</ion-label>\n          <ion-textarea rows=\"4\" [(ngModel)]=\"data['strComments']\"></ion-textarea>\n        </ion-item>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment-receive_payment-receive_module_ts.js.map