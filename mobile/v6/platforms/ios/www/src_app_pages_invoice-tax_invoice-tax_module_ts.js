(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-tax_invoice-tax_module_ts"],{

/***/ 85755:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invoice-tax/invoice-tax-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceTaxPageRoutingModule": () => (/* binding */ InvoiceTaxPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_tax_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-tax.page */ 85552);




const routes = [
    {
        path: '',
        component: _invoice_tax_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceTaxPage
    }
];
let InvoiceTaxPageRoutingModule = class InvoiceTaxPageRoutingModule {
};
InvoiceTaxPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceTaxPageRoutingModule);



/***/ }),

/***/ 37557:
/*!*********************************************************!*\
  !*** ./src/app/pages/invoice-tax/invoice-tax.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceTaxPageModule": () => (/* binding */ InvoiceTaxPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_tax_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-tax-routing.module */ 85755);






let InvoiceTaxPageModule = class InvoiceTaxPageModule {
};
InvoiceTaxPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _invoice_tax_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceTaxPageRoutingModule
        ],
        // declarations: [InvoiceTaxPage]
    })
], InvoiceTaxPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-tax_invoice-tax_module_ts.js.map