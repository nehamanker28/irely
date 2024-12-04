(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_shift-transfer_shift-transfer_module_ts"],{

/***/ 73739:
/*!***********************************************************************!*\
  !*** ./src/app/pages/shift-transfer/shift-transfer-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftTransferPageRoutingModule": () => (/* binding */ ShiftTransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shift_transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-transfer.page */ 61688);




const routes = [
    {
        path: '',
        component: _shift_transfer_page__WEBPACK_IMPORTED_MODULE_0__.ShiftTransferPage
    }
];
let ShiftTransferPageRoutingModule = class ShiftTransferPageRoutingModule {
};
ShiftTransferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShiftTransferPageRoutingModule);



/***/ }),

/***/ 77723:
/*!***************************************************************!*\
  !*** ./src/app/pages/shift-transfer/shift-transfer.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftTransferPageModule": () => (/* binding */ ShiftTransferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shift_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-transfer-routing.module */ 73739);
/* harmony import */ var _shift_transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-transfer.page */ 61688);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);










let ShiftTransferPageModule = class ShiftTransferPageModule {
};
ShiftTransferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _shift_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShiftTransferPageRoutingModule
        ],
        declarations: [_shift_transfer_page__WEBPACK_IMPORTED_MODULE_1__.ShiftTransferPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL,
        ]
    })
], ShiftTransferPageModule);



/***/ }),

/***/ 61688:
/*!*************************************************************!*\
  !*** ./src/app/pages/shift-transfer/shift-transfer.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftTransferPage": () => (/* binding */ ShiftTransferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_shift_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shift-transfer.page.html */ 51888);
/* harmony import */ var _shift_transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-transfer.page.scss */ 44785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/i21syncdevice.service */ 79561);
/* harmony import */ var _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/syncdevicedata */ 1447);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/base/service */ 4229);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);











let ShiftTransferPage = class ShiftTransferPage extends _framework_common_base_service__WEBPACK_IMPORTED_MODULE_5__.Service {
    constructor(navCtrl, loadingCtrl, i21syncDeviceService, syncDeviceDataBRL, commonSQL, https, http) {
        super(http, https);
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.i21syncDeviceService = i21syncDeviceService;
        this.syncDeviceDataBRL = syncDeviceDataBRL;
        this.commonSQL = commonSQL;
        this.https = https;
        this.http = http;
        this.data = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad ShiftTransferPage');
        this.tableStatus();
        this.userGlobalInfo();
    }
    userGlobalInfo() {
        var me = this;
        me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
            console.log(res);
            if (res[0]) {
                me.globalInfo = res[0];
            }
        });
    }
    tableStatus() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            me.data.push({ strTableName: 'shift', strDisplayName: 'Shift Information', dtmUploaded: null });
            me.data.push({ strTableName: 'invoices', strDisplayName: 'Invoices', dtmUploaded: null });
            me.data.push({ strTableName: 'outofgas', strDisplayName: 'Out Of Gas Reports', dtmUploaded: null });
            me.data.push({ strTableName: 'payments', strDisplayName: 'Payments', dtmUploaded: null });
            me.data.push({ strTableName: 'orders', strDisplayName: 'Update Orders', dtmUploaded: null });
            // Send Shift Information
            // Send Invoices
            // Send Out Of Gas Reports
            // Send Payments
            // Update Orders    
            loader.dismiss();
        });
    }
    sendData(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(item);
            let loader = yield me.loadingCtrl.create({ message: "Fetching data...", backdropDismiss: true });
            loader.present();
            switch (item.strTableName) {
                case 'shift':
                    me.commonSQL.getData('shift').then(res => {
                        console.log(res);
                        me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => {
                            console.log('syncmobileinvoices');
                            console.log(data);
                            loader.dismiss();
                        });
                    });
                    break;
                case 'invoices':
                    me.commonSQL.getData('invoice').then(res => {
                        console.log(res);
                        me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => {
                            console.log('syncmobileinvoices');
                            console.log(data);
                            loader.dismiss();
                        });
                    });
                    break;
                case 'outofgas':
                    me.commonSQL.getData('outofgas').then(res => {
                        console.log(res);
                        me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => {
                            console.log('syncmobileinvoices');
                            console.log(data);
                            loader.dismiss();
                        });
                    });
                    break;
                case 'payments':
                    me.commonSQL.getData('payment').then(res => {
                        console.log(res);
                        me.postraw('/mobilebilling/api/invoice/syncmobileinvoices', res).subscribe(data => {
                            console.log('syncmobileinvoices');
                            console.log(data);
                            loader.dismiss();
                        });
                    });
                    break;
                case 'orders':
                    break;
                default:
                    console.log(item);
                    loader.dismiss();
            }
        });
    }
};
ShiftTransferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_2__.i21SyncDeviceService },
    { type: _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceDataBRL },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__.CommonSQL },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_6__.HTTP },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
ShiftTransferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-shift-transfer',
        template: _raw_loader_shift_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shift_transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShiftTransferPage);



/***/ }),

/***/ 44785:
/*!***************************************************************!*\
  !*** ./src/app/pages/shift-transfer/shift-transfer.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC10cmFuc2Zlci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 51888:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shift-transfer/shift-transfer.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>shift-transfer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-grid>\n      <ion-row justify-content-start>\n        <ion-col size=\"4\" text-left><ion-label text-left><b>Table Name</b></ion-label></ion-col>\n        <ion-col size=\"3\" text-left><ion-label><b>Last Data Send</b></ion-label></ion-col>\n        <ion-col size=\"5\" text-left></ion-col>\n      </ion-row>\n      <ion-row justify-content-start *ngFor=\"let item of data; let i=index\">\n        <ion-col size=\"4\" text-left>\n          <ion-label>{{item.strDisplayName}}</ion-label>          \n        </ion-col>\n        <ion-col size=\"3\" text-left>\n          <ion-label>{{item.dtmUploaded}}</ion-label>          \n        </ion-col>\n        <ion-col size=\"5\" text-left>\n          <ion-button ion-button expand=\"block\" fill=\"outline\" item-end icon-left (click)=\"sendData(item)\">\n            <ion-icon name=\"ios-cloud-download\"></ion-icon>\n            Send\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shift-transfer_shift-transfer_module_ts.js.map