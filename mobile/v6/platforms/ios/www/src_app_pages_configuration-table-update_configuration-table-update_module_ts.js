(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_configuration-table-update_configuration-table-update_module_ts"],{

/***/ 10071:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/configuration-table-update/configuration-table-update-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationTableUpdatePageRoutingModule": () => (/* binding */ ConfigurationTableUpdatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _configuration_table_update_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-table-update.page */ 43508);




const routes = [
    {
        path: '',
        component: _configuration_table_update_page__WEBPACK_IMPORTED_MODULE_0__.ConfigurationTableUpdatePage
    }
];
let ConfigurationTableUpdatePageRoutingModule = class ConfigurationTableUpdatePageRoutingModule {
};
ConfigurationTableUpdatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigurationTableUpdatePageRoutingModule);



/***/ }),

/***/ 20752:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/configuration-table-update/configuration-table-update.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationTableUpdatePageModule": () => (/* binding */ ConfigurationTableUpdatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _configuration_table_update_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-table-update-routing.module */ 10071);
/* harmony import */ var _configuration_table_update_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-table-update.page */ 43508);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/i21syncdevice.service */ 79561);










let ConfigurationTableUpdatePageModule = class ConfigurationTableUpdatePageModule {
};
ConfigurationTableUpdatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _configuration_table_update_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationTableUpdatePageRoutingModule
        ],
        declarations: [_configuration_table_update_page__WEBPACK_IMPORTED_MODULE_1__.ConfigurationTableUpdatePage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
            _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_4__.i21SyncDeviceService
        ]
    })
], ConfigurationTableUpdatePageModule);



/***/ }),

/***/ 43508:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/configuration-table-update/configuration-table-update.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationTableUpdatePage": () => (/* binding */ ConfigurationTableUpdatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_configuration_table_update_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuration-table-update.page.html */ 93212);
/* harmony import */ var _configuration_table_update_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-table-update.page.scss */ 23102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/i21syncdevice.service */ 79561);
/* harmony import */ var _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/syncdevicedata */ 1447);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_models_syncdevicedata__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/models/syncdevicedata */ 72681);











let ConfigurationTableUpdatePage = class ConfigurationTableUpdatePage {
    constructor(navCtrl, loadingCtrl, messageUtil, i21syncDeviceService, syncDeviceDataBRL, commonSQL, orderBrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.messageUtil = messageUtil;
        this.i21syncDeviceService = i21syncDeviceService;
        this.syncDeviceDataBRL = syncDeviceDataBRL;
        this.commonSQL = commonSQL;
        this.orderBrl = orderBrl;
    }
    ngOnInit() {
        console.log('ConfigurationTableUpdatePage');
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            const loader = yield this.loadingCtrl.create({
                message: 'Loading data...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            loader.present();
            var _record = new _framework_models_syncdevicedata__WEBPACK_IMPORTED_MODULE_7__.SyncDeviceData();
            me.commonSQL.getData(_record.tablename).then(res => {
                me.data = res;
                console.log(me.data);
                loader.dismiss();
            });
        });
    }
    updateData(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(item);
            const loader = yield this.loadingCtrl.create({
                message: 'Fetching data...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            loader.present();
            me.i21syncDeviceService.getGenerateExport(me.globalInfo.intDriverNumber, item.strTableName, "").then(res => {
                console.log('getGenerateExport: ' + res);
                loader.dismiss();
            });
        });
    }
    updateDeviceDataList(item, loader, records, entity, data) {
        var me = this, _now = new Date();
        return new Promise((resolve, reject) => {
            me.commonSQL.createTable(entity).then(res => {
                if (records.length < 1) {
                    loader.dismiss();
                    resolve(res);
                }
                me.orderBrl.addBulk(entity, data).then(res => {
                    item.dtmTableLastUpdated = _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString();
                    var record = new _framework_models_syncdevicedata__WEBPACK_IMPORTED_MODULE_7__.SyncDeviceData();
                    record.dtmTableLastUpdated = item.dtmTableLastUpdated;
                    record.intTableStatus = item.intTableStatus;
                    record.strDisplayName = item.strDisplayName;
                    record.strTableName = item.strTableName;
                    record.ysnTableWithErrors = item.ysnTableWithErrors;
                    record.intTotal = records.total || records.length;
                    record.ysnIncludeSyncAll = item.ysnIncludeSyncAll;
                    me.syncDeviceDataBRL.update(record).then(res => {
                        console.log(res);
                        loader.dismiss();
                        resolve(res);
                    });
                });
            });
        });
    }
    noData(loader) {
        var me = this;
        me.messageUtil.showAlertInfoMessage("No data received.");
        loader.dismiss();
    }
};
ConfigurationTableUpdatePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message },
    { type: _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_3__.i21SyncDeviceService },
    { type: _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_4__.SyncDeviceDataBRL },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__.CommonSQL },
    { type: _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_5__.OrderBRL }
];
ConfigurationTableUpdatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-configuration-table-update',
        template: _raw_loader_configuration_table_update_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuration_table_update_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigurationTableUpdatePage);



/***/ }),

/***/ 23102:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/configuration-table-update/configuration-table-update.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLXRhYmxlLXVwZGF0ZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 93212:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuration-table-update/configuration-table-update.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Update Table</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <br>\n  <ion-grid>\n    <ion-row justify-content-start>\n      <ion-col size=\"3\" text-left><ion-label text-left><b>Table Name</b></ion-label></ion-col>\n      <ion-col size=\"3\" text-left><ion-label><b>Last Update</b></ion-label></ion-col>\n      <ion-col size=\"3\" text-left><ion-label><b>Include on Sync All</b></ion-label></ion-col>\n      <ion-col size=\"3\" text-left></ion-col>\n    </ion-row>\n    <ion-row justify-content-start *ngFor=\"let item of data; let i=index\" >\n      <ion-col size=\"3\" text-left *ngIf=\"item.ysnVisible === 'true'\" >\n        <ion-label>{{item.strDisplayName}}</ion-label>          \n      </ion-col>\n      <ion-col size=\"3\" text-left *ngIf=\"item.ysnVisible === 'true'\" >\n        <ion-label>{{item.dtmTableLastUpdated}}</ion-label>          \n      </ion-col>\n      <ion-col size=\"3\" text-left *ngIf=\"item.ysnVisible === 'true'\" >\n        <ion-toggle [(ngModel)]=\"item['ysnIncludeSyncAll']\" checked=\"item['ysnIncludeSyncAll']\" color=\"primary\"></ion-toggle>\n      </ion-col>\n      <ion-col size=\"3\" text-left *ngIf=\"item.ysnVisible === 'true'\" >\n        <ion-button ion-button expand=\"block\" primary size=\"large\"item-end icon-left (click)=\"updateData(item)\">\n          <ion-icon name=\"cloud-download-outline\" style=\"margin-right: 5px;\"></ion-icon>\n          Update\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_configuration-table-update_configuration-table-update_module_ts.js.map