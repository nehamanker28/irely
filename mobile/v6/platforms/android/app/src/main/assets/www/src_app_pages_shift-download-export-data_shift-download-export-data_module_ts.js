(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_shift-download-export-data_shift-download-export-data_module_ts"],{

/***/ 78199:
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/shift-download-export-data/shift-download-export-data-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftDownloadExportDataPageRoutingModule": () => (/* binding */ ShiftDownloadExportDataPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shift_download_export_data_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-download-export-data.page */ 81819);




const routes = [
    {
        path: '',
        component: _shift_download_export_data_page__WEBPACK_IMPORTED_MODULE_0__.ShiftDownloadExportDataPage
    }
];
let ShiftDownloadExportDataPageRoutingModule = class ShiftDownloadExportDataPageRoutingModule {
};
ShiftDownloadExportDataPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShiftDownloadExportDataPageRoutingModule);



/***/ }),

/***/ 52142:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/shift-download-export-data/shift-download-export-data.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftDownloadExportDataPageModule": () => (/* binding */ ShiftDownloadExportDataPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shift_download_export_data_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-download-export-data-routing.module */ 78199);
/* harmony import */ var _shift_download_export_data_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-download-export-data.page */ 81819);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);










let ShiftDownloadExportDataPageModule = class ShiftDownloadExportDataPageModule {
};
ShiftDownloadExportDataPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _shift_download_export_data_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShiftDownloadExportDataPageRoutingModule
        ],
        declarations: [_shift_download_export_data_page__WEBPACK_IMPORTED_MODULE_1__.ShiftDownloadExportDataPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL,
        ]
    })
], ShiftDownloadExportDataPageModule);



/***/ }),

/***/ 81819:
/*!*************************************************************************************!*\
  !*** ./src/app/pages/shift-download-export-data/shift-download-export-data.page.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftDownloadExportDataPage": () => (/* binding */ ShiftDownloadExportDataPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_shift_download_export_data_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shift-download-export-data.page.html */ 99956);
/* harmony import */ var _shift_download_export_data_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-download-export-data.page.scss */ 69708);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/i21syncdevice.service */ 79561);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);











let ShiftDownloadExportDataPage = class ShiftDownloadExportDataPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, router, commonSQL, messageUtil, modalCtrl, file, i21syncDeviceService, globalEventsService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.commonSQL = commonSQL;
        this.messageUtil = messageUtil;
        this.modalCtrl = modalCtrl;
        this.file = file;
        this.i21syncDeviceService = i21syncDeviceService;
        this.globalEventsService = globalEventsService;
        this.data = [];
    }
    ngOnInit() {
        console.log('setObservables');
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad ShiftDownloadExportDataPage');
        var me = this;
        me.i21syncDeviceService.getExportFiles().then((data) => {
            console.log(data);
            var _data = JSON.parse(data);
            me.data = _data.data.slice().sort((a, b) => b.intExportFilesId - a.intExportFilesId);
        });
    }
    selectItem(item) {
        var me = this;
        console.log(item);
        console.log(me.currentSelected);
        if (me.currentSelected == null) {
            me.currentSelected = item;
        }
        else {
            me.previousSelected = me.currentSelected;
            me.previousSelected.ysnSelected = false;
            me.currentSelected = item;
        }
    }
    done() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(me.currentSelected);
            me.file.checkDir(me.file.dataDirectory, 'export_data').then(res => {
                me.processDownload();
            }).catch(err => {
                console.log(err);
                me.file.createDir(me.file.dataDirectory, 'i21_files', false).then(res => {
                    console.log('folder created');
                    me.file.createDir(me.file.dataDirectory, 'export_data', false).then(res => {
                        console.log('folder created');
                        me.processDownload();
                    });
                });
            });
        });
    }
    receiveOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log('processing receive order');
            var me = this;
            let counter = 0;
            // me.commonSQL.getDataQuery('SELECT strOrderNumber FROM tblMBILOrder').then((res) => {
            //   console.log(res);
            //   var _orderIds = "'";
            //   res.forEach(order => {
            //     _orderIds = _orderIds + order['strOrderNumber'] + "', '"
            //   });
            console.log('getting new orders . . .');
            me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
                let info = res[0];
                console.log(info);
                me.i21syncDeviceService.getGenerateExport(info.intDriverNumber || 0, 'complete_order', "'0'").then((data) => {
                    console.log('updating orders . . .');
                    console.log(data);
                    console.log('NEW ORDERS ==> ', data);
                    me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
                        var _date = new Date();
                        console.log(res);
                        me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res => {
                        });
                    });
                });
            });
            // });
        });
    }
    processDownload() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Fetching data...", backdropDismiss: true });
            loader.present();
            me.i21syncDeviceService.getZipAndExtract(me.currentSelected.strFileName, 'all').then((res) => {
                console.log('IMPORTING getZipAndExtract DONE ==> ', res);
                me.receiveOrder();
                me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
                    var _date = new Date();
                    console.log(res);
                    me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedFullData = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res => {
                        let getOrderIds = `select invoice.intOrderId,item.intItemId,item.intSiteId,sum(item.dblQuantity)dblQuantity
                             from invoice invoice
                             inner join invoiceitems item on invoice.intOrderId = item.intOrderId
                             inner join tblMBILOrderItem orderitem on item.intOrderId = orderitem.intOrderId and item.intItemId = orderitem.intItemId
                             Group by invoice.intOrderId,item.intItemId,item.intSiteId`;
                        // let getOrderIds = `Select * from invoiceitems`;
                        me.commonSQL.getDataQuery(getOrderIds).then(res => {
                            console.log('data from order ids ');
                            // console.log(res);
                            for (let item of res) {
                                console.log(item);
                                let update_quantity = "Update tblMBILOrderItem set dblQuantity = CASE WHEN (dblQuantity - " + item.dblQuantity + ") < 0 THEN 0 else dblQuantity - " + item.dblQuantity + " end  where intOrderId = '" + item.intOrderId + "' and intItemId = '" + item.intItemId + "'";
                                console.log(update_quantity);
                                me.commonSQL.updateDataQuery(update_quantity).then(res => {
                                    //
                                    me.commonSQL.getDataQuery("Select * from tblMBILOrderItem where intOrderId = '" + item.intOrderId + "'").then(result => {
                                        console.log('Current value of order item');
                                        console.log(result);
                                    });
                                });
                            }
                            console.log('data from order ids end');
                        });
                        loader.dismiss();
                        me.messageUtil.showToastMessage("Data successfully downloaded.", function () {
                            me.modalCtrl.dismiss({
                                'dismissed': true
                            });
                        }, 3000);
                        me.navCtrl.pop();
                    });
                });
            }, err => {
                console.log(err);
                loader.dismiss();
            });
        });
    }
};
ShiftDownloadExportDataPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_6__.Message },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_4__.File },
    { type: _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_3__.i21SyncDeviceService },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_5__.GlobalEventsService }
];
ShiftDownloadExportDataPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-shift-download-export-data',
        template: _raw_loader_shift_download_export_data_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shift_download_export_data_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShiftDownloadExportDataPage);



/***/ }),

/***/ 69708:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/shift-download-export-data/shift-download-export-data.page.scss ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC1kb3dubG9hZC1leHBvcnQtZGF0YS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 99956:
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shift-download-export-data/shift-download-export-data.page.html ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-grid no-padding>\n      <ion-row>        \n        <ion-col></ion-col>\n        <ion-col size=\"2\" end>\n          <ion-button end ion-button expand=\"block\" primary size=\"large\"(click)=\"done()\" class=\"button-global\">Done</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content scrollX=\"true\">       \n  <br>\n  <ion-list>\n    <ion-grid padding>\n      <ion-row justify-content-start>\n        <ion-col size=\"6\">\n          <ion-item>\n            <b>File Name</b>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <b>Date Created</b>\n          </ion-item>\n        </ion-col>        \n      </ion-row>\n      <ion-row *ngFor=\"let item of data; let i=index\">\n        <ion-col size=\"6\">\n          <ion-item>\n            <ion-checkbox style=\"margin: 0px !important;\" color=\"primary\" [(ngModel)]=\"item['ysnSelected']\" (click)=\"selectItem(item)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">Mobile_Billing{{item.strFileName}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label>{{item.dtmCreatedDate |  date:'MM/dd/yyyy hh:mm:ss'}}</ion-label>\n          </ion-item>\n        </ion-col>        \n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shift-download-export-data_shift-download-export-data_module_ts.js.map