(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_login-forgotpassword_login-forgotpassword_module_ts"],{

/***/ 39955:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/login-forgotpassword/login-forgotpassword-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForgotpasswordPageRoutingModule": () => (/* binding */ LoginForgotpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-forgotpassword.page */ 8811);




const routes = [
    {
        path: '',
        component: _login_forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.LoginForgotpasswordPage
    }
];
let LoginForgotpasswordPageRoutingModule = class LoginForgotpasswordPageRoutingModule {
};
LoginForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginForgotpasswordPageRoutingModule);



/***/ }),

/***/ 76965:
/*!***************************************************************************!*\
  !*** ./src/app/pages/login-forgotpassword/login-forgotpassword.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForgotpasswordPageModule": () => (/* binding */ LoginForgotpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-forgotpassword-routing.module */ 39955);
/* harmony import */ var _login_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-forgotpassword.page */ 8811);







let LoginForgotpasswordPageModule = class LoginForgotpasswordPageModule {
};
LoginForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginForgotpasswordPageRoutingModule
        ],
        declarations: [_login_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.LoginForgotpasswordPage]
    })
], LoginForgotpasswordPageModule);



/***/ }),

/***/ 8811:
/*!*************************************************************************!*\
  !*** ./src/app/pages/login-forgotpassword/login-forgotpassword.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForgotpasswordPage": () => (/* binding */ LoginForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-forgotpassword.page.html */ 36670);
/* harmony import */ var _login_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-forgotpassword.page.scss */ 64454);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let LoginForgotpasswordPage = class LoginForgotpasswordPage {
    constructor() { }
    ngOnInit() {
    }
};
LoginForgotpasswordPage.ctorParameters = () => [];
LoginForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login-forgotpassword',
        template: _raw_loader_login_forgotpassword_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_forgotpassword_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginForgotpasswordPage);



/***/ }),

/***/ 64454:
/*!***************************************************************************!*\
  !*** ./src/app/pages/login-forgotpassword/login-forgotpassword.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1mb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 36670:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-forgotpassword/login-forgotpassword.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>login-forgotpassword</ion-title>\n  </ion-toolbar>\n</ion-header>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-forgotpassword_login-forgotpassword_module_ts.js.map