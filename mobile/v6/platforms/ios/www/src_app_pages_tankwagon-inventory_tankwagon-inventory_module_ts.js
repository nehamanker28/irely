(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_tankwagon-inventory_tankwagon-inventory_module_ts"],{

/***/ 47867:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/tankwagon-inventory/tankwagon-inventory-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankwagonInventoryPageRoutingModule": () => (/* binding */ TankwagonInventoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tankwagon_inventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tankwagon-inventory.page */ 91790);




const routes = [
    {
        path: '',
        component: _tankwagon_inventory_page__WEBPACK_IMPORTED_MODULE_0__.TankwagonInventoryPage
    }
];
let TankwagonInventoryPageRoutingModule = class TankwagonInventoryPageRoutingModule {
};
TankwagonInventoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TankwagonInventoryPageRoutingModule);



/***/ }),

/***/ 8055:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tankwagon-inventory/tankwagon-inventory.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankwagonInventoryPageModule": () => (/* binding */ TankwagonInventoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _tankwagon_inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tankwagon-inventory-routing.module */ 47867);
/* harmony import */ var _tankwagon_inventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tankwagon-inventory.page */ 91790);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);










let TankwagonInventoryPageModule = class TankwagonInventoryPageModule {
};
TankwagonInventoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _tankwagon_inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.TankwagonInventoryPageRoutingModule
        ],
        declarations: [_tankwagon_inventory_page__WEBPACK_IMPORTED_MODULE_1__.TankwagonInventoryPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL
        ]
    })
], TankwagonInventoryPageModule);



/***/ }),

/***/ 91790:
/*!***********************************************************************!*\
  !*** ./src/app/pages/tankwagon-inventory/tankwagon-inventory.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TankwagonInventoryPage": () => (/* binding */ TankwagonInventoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tankwagon_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tankwagon-inventory.page.html */ 98757);
/* harmony import */ var _tankwagon_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tankwagon-inventory.page.scss */ 53806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/report.service */ 67119);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);









let TankwagonInventoryPage = class TankwagonInventoryPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, router, globalEventsService, commonSQL, reportService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.globalEventsService = globalEventsService;
        this.commonSQL = commonSQL;
        this.reportService = reportService;
        this.data = [];
        this.grandTotal = 0;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad ShiftLoadinventoryPage');
        this.getTankWagon();
    }
    getTankWagon() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            me.data = [];
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            me.commonSQL.getDataQuery('SELECT * FROM tankwagon order by intItemId').then(res => {
                var _records = JSON.parse(JSON.stringify(res));
                console.log(_records);
                var _previous = { 'intItemId': 0, 'strItemNo': '', 'strDescription': '', 'dblQuantity': 0 };
                _records.forEach(element => {
                    if (_previous.intItemId != element.intItemId) {
                        if (_previous.intItemId != 0) {
                            me.data.push(_previous);
                            _previous = element;
                        }
                        else if (element.strTransactionType != 'Line Flush') {
                            _previous = element;
                        }
                    }
                    else if (element.strTransactionType != 'Line Flush') {
                        _previous.dblQuantity = _previous.dblQuantity + parseFloat(element.dblQuantity || 0);
                    }
                    console.log(me.data);
                });
                me.data.push(_previous);
                loader.dismiss();
            })
                .catch(e => {
                loader.dismiss();
            });
        });
    }
    tankDetails() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            me.router.navigateByUrl('/tankwagon-inventory-details');
        });
    }
};
TankwagonInventoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_4__.GlobalEventsService },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _providers_report_service__WEBPACK_IMPORTED_MODULE_3__.ReportService }
];
TankwagonInventoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-tankwagon-inventory',
        template: _raw_loader_tankwagon_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tankwagon_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TankwagonInventoryPage);



/***/ }),

/***/ 53806:
/*!*************************************************************************!*\
  !*** ./src/app/pages/tankwagon-inventory/tankwagon-inventory.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YW5rd2Fnb24taW52ZW50b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 98757:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tankwagon-inventory/tankwagon-inventory.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"9\"></ion-col>\n        <ion-col size=\"3\" end>\n          <ion-button end ion-button expand=\"block\" primary size=\"large\"(click)=\"tankDetails()\" class=\"button-global\">Tank Detail</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>       \n  <br>\n  <ion-list>\n    <ion-grid padding>\n      <ion-row justify-content-start>       \n        <ion-col size=\"3\">\n          <ion-item>\n            <b>Item Number</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item>\n            <b>Description</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item style=\"text-align: center;\">\n            <ion-label><b>Current Inventory</b></ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data; let i=index\">\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label>{{item.strItemNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-label>{{item.strDescription}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item style=\"text-align: center;\">\n            <ion-label>{{item.dblQuantity}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>\n<!-- <ion-footer padding>\n  <h3 style=\"text-align: end; padding-right: 20px\">Remains: {{(grandTotal || 0.00).toFixed(2)}}</h3>\n</ion-footer> -->");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_tankwagon-inventory_tankwagon-inventory_module_ts.js.map