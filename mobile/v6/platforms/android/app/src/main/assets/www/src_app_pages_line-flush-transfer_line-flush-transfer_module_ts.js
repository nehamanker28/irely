(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_line-flush-transfer_line-flush-transfer_module_ts"],{

/***/ 92273:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/line-flush-transfer/line-flush-transfer-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineFlushTransferPageRoutingModule": () => (/* binding */ LineFlushTransferPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _line_flush_transfer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-flush-transfer.page */ 27189);




const routes = [
    {
        path: '',
        component: _line_flush_transfer_page__WEBPACK_IMPORTED_MODULE_0__.LineFlushTransferPage
    }
];
let LineFlushTransferPageRoutingModule = class LineFlushTransferPageRoutingModule {
};
LineFlushTransferPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LineFlushTransferPageRoutingModule);



/***/ }),

/***/ 55143:
/*!*************************************************************************!*\
  !*** ./src/app/pages/line-flush-transfer/line-flush-transfer.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineFlushTransferPageModule": () => (/* binding */ LineFlushTransferPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _line_flush_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-flush-transfer-routing.module */ 92273);
/* harmony import */ var _line_flush_transfer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-flush-transfer.page */ 27189);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);










let LineFlushTransferPageModule = class LineFlushTransferPageModule {
};
LineFlushTransferPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _line_flush_transfer_routing_module__WEBPACK_IMPORTED_MODULE_0__.LineFlushTransferPageRoutingModule
        ],
        declarations: [_line_flush_transfer_page__WEBPACK_IMPORTED_MODULE_1__.LineFlushTransferPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfoBRL
        ]
    })
], LineFlushTransferPageModule);



/***/ }),

/***/ 27189:
/*!***********************************************************************!*\
  !*** ./src/app/pages/line-flush-transfer/line-flush-transfer.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineFlushTransferPage": () => (/* binding */ LineFlushTransferPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_line_flush_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./line-flush-transfer.page.html */ 39208);
/* harmony import */ var _line_flush_transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./line-flush-transfer.page.scss */ 67924);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_models_lineflushandtransfer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/models/lineflushandtransfer */ 57866);
/* harmony import */ var _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/models/tankwagon */ 65516);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/report.service */ 67119);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);














let LineFlushTransferPage = class LineFlushTransferPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, router, globalEventsService, globalBRL, commonSQL, messageUtil, modalCtrl, reportService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.globalEventsService = globalEventsService;
        this.globalBRL = globalBRL;
        this.commonSQL = commonSQL;
        this.messageUtil = messageUtil;
        this.modalCtrl = modalCtrl;
        this.reportService = reportService;
        this.data = [];
        this.ysnAdded = false;
        this.isLineFlash = false;
    }
    ngOnInit() {
        console.log('setObservables');
        this.setObservables();
    }
    ionViewDidEnter() {
        var me = this;
        if (me.ysnAdded == false) {
            // this.getLoadInventoryList();
            me.userGlobalInfo();
            me.TransactionType();
        }
    }
    TransactionType() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var confirm = yield me.alertCtrl.create({
                header: 'Line Flush and Transfer',
                message: 'Do you want to create?',
                cssClass: 'order-msgbox',
                buttons: [
                    {
                        text: 'Line Flush',
                        handler: () => {
                            me.isLineFlash = true;
                        }
                    },
                    {
                        text: 'Transfer',
                        handler: () => {
                            me.isLineFlash = false;
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
    setObservables() {
        var me = this;
        me.globalEventsService.getObservableLoadInventory().subscribe((data) => {
            console.log('Data Received ', data);
            if (data && me.ysnAdded == false) {
                var item = new _framework_models_lineflushandtransfer__WEBPACK_IMPORTED_MODULE_3__.LineFlushAndTransfer;
                item.intItemId = data.intItemId;
                item.strItemNo = data.strItemNo;
                item.strDescription = data.strDescription;
                item.dblQuantity = data.dblQuantity;
                me.data.push(item);
                me.ysnAdded = true;
            }
        });
    }
    clearInputValue(elem) {
        elem.getElementRef().nativeElement.children[0].select();
    }
    getLoadInventoryList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            me.commonSQL.getDataQuery('SELECT * FROM lineflushandtransfer').then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log(me.data);
                loader.dismiss();
            })
                .catch(e => {
                loader.dismiss();
            });
        });
    }
    userGlobalInfo() {
        var me = this;
        me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
            console.log(res);
            if (res[0]) {
                me.globalInfo = res[0];
            }
        }).catch(e => {
            console.log;
            if (me.globalInfo == null || me.globalInfo == undefined) {
                me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
                    console.log(res);
                    if (res[0]) {
                        me.globalInfo = res[0];
                    }
                });
            }
        });
    }
    removeSelection() {
        this.data = this.data.filter(val => val.ysnSelected != true);
    }
    openAddItem() {
        var me = this;
        me.ysnAdded = false;
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams = me.globalInfo;
        me.router.navigateByUrl('/shift-loadinventory-add-item');
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
            me.currentSelected.ysnSelected = true;
        }
    }
    done() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var _add = new _framework_models_lineflushandtransfer__WEBPACK_IMPORTED_MODULE_3__.LineFlushAndTransfer();
            let loader = yield me.loadingCtrl.create({ message: "Saving...", backdropDismiss: true });
            loader.present();
            // +++++ TANK WAGON INSERT +++++
            var _reference = 'No Impact';
            var _type = 'Line Flush';
            if (me.isLineFlash == false) {
                _reference = 'Decreases Inventory of Product';
                _type = 'Transfer';
            }
            var _tankwagon = [];
            var _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__.Tankwagon;
            me.data.forEach(item => {
                _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__.Tankwagon;
                _line.intItemId = item.intItemId;
                _line.strItemNo = item.strItemNo;
                _line.strDescription = item.strDescription;
                _line.dblQuantity = item.dblQuantity * -1;
                _line.strTransactionReference = _reference;
                _line.strTransactionType = _type;
                _tankwagon.push(_line);
            });
            me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res => { console.log('TANKWAGON UPDATED'); });
            // +++++ TANK WAGON INSERT +++++
            // me.lineFlushAndTransferBRL.deleteByQuery(_add.tablename).then(res => {
            me.commonSQL.addBulkData(_add['tablename'], _add, me.data).then(res => {
            });
            // });    
            loader.dismiss();
            me.messageUtil.showToastMessage("Load Inventory has been successfully saved.", function () {
                me.modalCtrl.dismiss({
                    'dismissed': true
                });
            }, 2000);
        });
    }
    logo() {
        return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
    }
    createPdf() {
        var me = this;
        var irelyImage = me.logo();
        var _companyname = localStorage.getItem('company_name') || '';
        var _address = localStorage.getItem('company_address') || '';
        var _county = localStorage.getItem('company_county') || '';
        var _city = localStorage.getItem('company_city') || '';
        var _state = localStorage.getItem('company_state') || '';
        var _zip = localStorage.getItem('company_zip') || '';
        var _date = new Date();
        var _lineflushDate = ("0" + (_date.getMonth() + 1)).slice(-2) + "/" + ("0" + _date.getDate()).slice(-2) + "/" + _date.getFullYear();
        var docDefinition = {
            footer: function (currentPage, pageCount) {
                return {
                    columns: [
                        {
                            text: [
                                {
                                    text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                                }
                            ],
                            margin: [0, 0, 35, 0],
                            alignment: 'right'
                        }
                    ]
                };
            },
            content: [
                {
                    table: {
                        widths: [105, '*', '*'],
                        body: [
                            [
                                { image: irelyImage, width: 100 },
                                [
                                    {
                                        table: {
                                            body: [
                                                [{ text: _companyname, bold: true }, '', ''],
                                                [_address + ' ' + _county, '', ''],
                                                [_city + ', ' + _state + ' ' + _zip, '', ''],
                                                ['', '', ''],
                                                ['', '', '']
                                            ]
                                        },
                                        layout: 'noBorders'
                                    }
                                ],
                                [
                                    {
                                        table: {
                                            widths: ['*'],
                                            body: [
                                                [{ text: 'Line Flush / Pump Around', alignment: 'right', style: 'header', margin: [0, 0, 0, 0], }],
                                                [{ text: (new Date()).toDateString(), alignment: 'right', italics: true }],
                                            ]
                                        },
                                        layout: 'noBorders'
                                    }
                                ],
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },
                { text: '\n' },
                {
                    style: 'tableExample',
                    table: {
                        widths: [90, '*', 80, '*'],
                        body: [
                            [{ text: 'Driver:', style: 'shadedbox' }, { text: me.globalInfo.strFullName, alignment: 'left' }, { text: 'Shift:', style: 'shadedbox' }, { text: me.globalInfo.intShiftCounter, alignment: 'left' }],
                            [{ text: 'Ticket:', style: 'shadedbox' }, { text: '009000014', alignment: 'left' }, { text: 'Time:', style: 'shadedbox' }, { text: (new Date()).getTime(), alignment: 'left' },]
                        ]
                    }
                },
                { text: '\n' },
                { text: '\n' },
                {
                    style: 'shadedbox',
                    bold: true,
                    table: {
                        widths: [120, 110, 70, 180],
                        body: [
                            [{ text: 'ITEM', alignment: 'left', style: 'tableHeader', border: [true, true, false, true] }, { text: 'Description', alignment: 'left', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Quantity', alignment: 'right', style: 'tableHeader', border: [false, true, false, true] }, { text: 'Comments', alignment: 'right', style: 'tableHeader', border: [false, true, true, true] }],
                        ]
                    },
                },
                // ++++++++++++++++++++++++++++++++++++++
                // BEGIN - DETAILS SHOULD BE DYNAMIC #1
                // ++++++++++++++++++++++++++++++++++++++
                {
                    style: 'tableExample',
                    table: {
                        widths: [120, 110, 70, 180],
                        body: [
                            [{ text: 'DIESEL-99', alignment: 'left', border: [false, false, false, false] }, { text: 'DIESEL CTR - 99', alignment: 'left', border: [false, false, false, false] }, { text: '52.00', alignment: 'right', border: [false, false, false, false] }, { text: 'Full Tank', alignment: 'right', border: [false, false, false, false] }],
                        ]
                    },
                },
                // ++++++++++++++++++++++++++++++++++++++
                // END - DETAILS SHOULD BE DYNAMIC
                // ++++++++++++++++++++++++++++++++++++++
                { text: '\n' },
            ],
            styles: {
                header: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 10, 0, 10],
                    fontfamily: 'Wingdings'
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%'
                },
                body: {
                    fontSize: 12,
                },
                shadedbox: {
                    alignment: 'left',
                    fillColor: '#cccccc',
                    bold: true
                }
            },
            defaultStyle: {
                fontSize: 11.5,
            }
        };
        var _now = new Date(), _filename = "Line-Flush-Transfer-" + _now.getFullYear() + ("0" + (_now.getMonth() + 1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours() + 1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
        me.reportService.create(docDefinition, _filename.replace(/[/\\?%*:|"<>]/g, ''), false);
    }
};
LineFlushTransferPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_8__.GlobalEventsService },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_2__.GlobalInfoBRL },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_7__.CommonSQL },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_9__.Message },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _providers_report_service__WEBPACK_IMPORTED_MODULE_6__.ReportService }
];
LineFlushTransferPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-line-flush-transfer',
        template: _raw_loader_line_flush_transfer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_line_flush_transfer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LineFlushTransferPage);



/***/ }),

/***/ 67924:
/*!*************************************************************************!*\
  !*** ./src/app/pages/line-flush-transfer/line-flush-transfer.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5lLWZsdXNoLXRyYW5zZmVyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 39208:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/line-flush-transfer/line-flush-transfer.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <!-- <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons> -->\n\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"3\" start style=\"margin-right: 5px;\">\n          <ion-button start ion-button expand=\"block\" primary size=\"large\"(click)=\"removeSelection()\" class=\"button-global\">Remove Item</ion-button>\n        </ion-col>\n        <ion-col size=\"3\" start>\n          <ion-button start ion-button expand=\"block\" primary size=\"large\"(click)=\"openAddItem()\" class=\"button-global\">Add Item</ion-button>\n        </ion-col>\n        <ion-col size=\"3.5\"></ion-col>\n        <ion-col size=\"2\" end>\n          <ion-button end ion-button expand=\"block\" primary size=\"large\"(click)=\"done()\" class=\"button-global\">Done</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>       \n  <br>\n  <!-- <ion-label style=\"padding-left: 15px; padding-top: 5px; font-size: large;\"><b>Location:</b> {{strLocation}}</ion-label> -->\n  <ion-list>\n    <ion-grid padding>\n      <ion-row justify-content-start>\n        <ion-col size=\"4\">\n          <ion-item>\n            <b>Item #</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item>\n            <b>Description</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item>\n          <b>Quantity</b>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data; let i=index\">\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-checkbox style=\"margin: 0px !important;\" color=\"primary\" [(ngModel)]=\"item['ysnSelected']\" (click)=\"selectItem(item)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">{{item.strItemNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"5\">\n          <ion-item>\n            <ion-label>{{item.strDescription}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-input type=\"number\" class=\"input-border-styles\" [(ngModel)]=\"item['dblQuantity']\" (ionFocus)=\"clearInputValue($event)\"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_line-flush-transfer_line-flush-transfer_module_ts.js.map