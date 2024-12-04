(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-add-comment_invoice-add-comment_module_ts"],{

/***/ 79091:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/invoice-add-comment/invoice-add-comment-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddCommentPageRoutingModule": () => (/* binding */ InvoiceAddCommentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_add_comment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-comment.page */ 37107);




const routes = [
    {
        path: '',
        component: _invoice_add_comment_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddCommentPage
    }
];
let InvoiceAddCommentPageRoutingModule = class InvoiceAddCommentPageRoutingModule {
};
InvoiceAddCommentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceAddCommentPageRoutingModule);



/***/ }),

/***/ 9331:
/*!*************************************************************************!*\
  !*** ./src/app/pages/invoice-add-comment/invoice-add-comment.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddCommentPageModule": () => (/* binding */ InvoiceAddCommentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_add_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-comment-routing.module */ 79091);
/* harmony import */ var _invoice_add_comment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-comment.page */ 37107);







let InvoiceAddCommentPageModule = class InvoiceAddCommentPageModule {
};
InvoiceAddCommentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invoice_add_comment_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddCommentPageRoutingModule
        ],
        declarations: [_invoice_add_comment_page__WEBPACK_IMPORTED_MODULE_1__.InvoiceAddCommentPage]
    })
], InvoiceAddCommentPageModule);



/***/ }),

/***/ 37107:
/*!***********************************************************************!*\
  !*** ./src/app/pages/invoice-add-comment/invoice-add-comment.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddCommentPage": () => (/* binding */ InvoiceAddCommentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_add_comment_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-add-comment.page.html */ 42533);
/* harmony import */ var _invoice_add_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-comment.page.scss */ 91520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);







let InvoiceAddCommentPage = class InvoiceAddCommentPage {
    constructor(navCtrl, globalEventsService) {
        this.navCtrl = navCtrl;
        this.globalEventsService = globalEventsService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var me = this;
        console.log('ionViewDidLoad CustomerInvoiceCommentPage');
        me.comment = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.strComment;
        console.log(me.comment);
    }
    Okay() {
        var me = this;
        console.log(me.comment);
        me.navCtrl.pop().then(() => {
            me.globalEventsService.publishEventsComment(me.comment);
        });
    }
};
InvoiceAddCommentPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_2__.GlobalEventsService }
];
InvoiceAddCommentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-invoice-add-comment',
        template: _raw_loader_invoice_add_comment_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_add_comment_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceAddCommentPage);



/***/ }),

/***/ 91520:
/*!*************************************************************************!*\
  !*** ./src/app/pages/invoice-add-comment/invoice-add-comment.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLWFkZC1jb21tZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 42533:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-add-comment/invoice-add-comment.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>invoice-add-comment</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"8\" style=\"margin-right: 5px; color: black\">\n          <h3>Add Comment</h3>\n        </ion-col>\n        <ion-col col-auto></ion-col>\n        <ion-col size=\"3.5\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"Okay()\" class=\"button-global\"> Ok </ion-button>          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content padding>\n  <ion-textarea rows=\"20\" placeholder=\"Enter a comment\" [(ngModel)]=\"comment\" style=\"border: green; border-style: solid; border-width: thin;\"></ion-textarea>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-add-comment_invoice-add-comment_module_ts.js.map