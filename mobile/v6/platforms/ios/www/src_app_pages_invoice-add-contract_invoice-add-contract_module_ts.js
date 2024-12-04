(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-add-contract_invoice-add-contract_module_ts"],{

/***/ 4131:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/invoice-add-contract/invoice-add-contract-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddContractPageRoutingModule": () => (/* binding */ InvoiceAddContractPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_add_contract_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-contract.page */ 54842);




const routes = [
    {
        path: '',
        component: _invoice_add_contract_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddContractPage
    }
];
let InvoiceAddContractPageRoutingModule = class InvoiceAddContractPageRoutingModule {
};
InvoiceAddContractPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceAddContractPageRoutingModule);



/***/ }),

/***/ 74612:
/*!***************************************************************************!*\
  !*** ./src/app/pages/invoice-add-contract/invoice-add-contract.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddContractPageModule": () => (/* binding */ InvoiceAddContractPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_add_contract_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-contract-routing.module */ 4131);






let InvoiceAddContractPageModule = class InvoiceAddContractPageModule {
};
InvoiceAddContractPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _invoice_add_contract_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddContractPageRoutingModule
        ],
        // declarations: [InvoiceAddContractPage],
        providers: []
    })
], InvoiceAddContractPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-add-contract_invoice-add-contract_module_ts.js.map