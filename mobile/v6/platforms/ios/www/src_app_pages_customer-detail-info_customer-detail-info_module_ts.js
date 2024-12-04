(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_customer-detail-info_customer-detail-info_module_ts"],{

/***/ 16983:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/customer-detail-info/customer-detail-info-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailInfoPageRoutingModule": () => (/* binding */ CustomerDetailInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_detail_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-detail-info.page */ 91882);




const routes = [
    {
        path: '',
        component: _customer_detail_info_page__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailInfoPage
    }
];
let CustomerDetailInfoPageRoutingModule = class CustomerDetailInfoPageRoutingModule {
};
CustomerDetailInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerDetailInfoPageRoutingModule);



/***/ }),

/***/ 29286:
/*!***************************************************************************!*\
  !*** ./src/app/pages/customer-detail-info/customer-detail-info.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailInfoPageModule": () => (/* binding */ CustomerDetailInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_detail_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-detail-info-routing.module */ 16983);
/* harmony import */ var _customer_detail_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-detail-info.page */ 91882);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);











let CustomerDetailInfoPageModule = class CustomerDetailInfoPageModule {
};
CustomerDetailInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _customer_detail_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailInfoPageRoutingModule
        ],
        declarations: [_customer_detail_info_page__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailInfoPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfoBRL,
            _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_5__.OrderBRL,
        ]
    })
], CustomerDetailInfoPageModule);



/***/ }),

/***/ 91882:
/*!*************************************************************************!*\
  !*** ./src/app/pages/customer-detail-info/customer-detail-info.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailInfoPage": () => (/* binding */ CustomerDetailInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_detail_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-detail-info.page.html */ 66932);
/* harmony import */ var _customer_detail_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-detail-info.page.scss */ 70331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);








let CustomerDetailInfoPage = class CustomerDetailInfoPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, router, menu, commonSQL) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.menu = menu;
        this.commonSQL = commonSQL;
        this.data = [];
        this.customer = [];
        this.sites = [];
        this.currentFilter = '';
        this.currentCustomer = '';
        this.currentCustomerId = 0;
        this.currentSite = 0;
        this.createInvoiceButton = true;
        this.createPaymentButton = true;
        this.showSearchbar = false;
        this.menu.enable(true);
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var me = this;
        console.log('customer details');
        console.log(_framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.customerDetail);
        if (_framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.customerDetail) {
            me.customer = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.customerDetail;
            me.sites = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.sites;
            me.globalInfo = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.globalInfo;
            me.getConsumptionSites();
            if (me.globalInfo == null || me.globalInfo == undefined) {
                me.userGlobalInfo();
            }
        }
    }
    userGlobalInfo() {
        var me = this;
        me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
            console.log(res);
            if (res[0]) {
                me.globalInfo = res[0];
            }
        }).catch(e => {
            console.log;
            if (me.globalInfo == null || me.globalInfo == undefined) {
                me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
                    console.log(res);
                    if (res[0]) {
                        me.globalInfo = res[0];
                    }
                });
            }
        });
    }
    getConsumptionSites() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            var _query = "select *, ysnTaxable as ysnSiteTaxable, (select strDeviceType from tblTMSiteDevice where (tblTMSiteDevice.dblTankCapacity > 0 or tblTMSiteDevice.strDeviceType IS NOT NULL) and tblTMSiteDevice.intSiteID = tblTMSite.intSiteID LIMIT 1) as strDeviceType, (select GROUP_CONCAT(strSerialNumber,'/') as strSerialNumber from tblTMSiteDevice where (tblTMSiteDevice.strSerialNumber <> '' and tblTMSiteDevice.strSerialNumber IS NOT NULL) and tblTMSiteDevice.intSiteID = tblTMSite.intSiteID LIMIT 1) as strSerialNumber from tblTMSite where tblTMSite.intCustomerID = '" + me.customer['intCustomerId'] + "' order by tblTMSite.intSiteNumber";
            console.log('SITE ==> ', _query);
            me.commonSQL.getDataQuery(_query).then(res => {
                me.sites = JSON.parse(JSON.stringify(res));
                console.log('sites');
                console.log(me.sites);
                loader.dismiss();
            })
                .catch(e => {
                console.log(e);
                loader.dismiss();
            });
        });
    }
    showInvoice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var _createInvoice = yield me.alertCtrl.create({
                header: 'Create Invoice',
                message: 'Is this invoice a metered delivery?',
                cssClass: 'order-msgbox',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log(me.customer);
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.stopReload = false;
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.InvoiceRecord = [];
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams = { customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: true };
                            me.router.navigateByUrl('/invoice');
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            console.log(me.customer);
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.stopReload = false;
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.InvoiceRecord = [];
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams = { customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: false };
                            me.router.navigateByUrl('/invoice');
                        }
                    }
                ]
            });
            // var _collectCashMessage = await me.alertCtrl.create({
            //   header: 'Warning',
            //   message: 'Please collect cash before dispensing.',
            //   cssClass: 'order-msgbox',
            //   buttons: [
            //     {
            //       text: 'Ok',
            //       handler: () => {
            //         _createInvoice.present();
            //       }
            //     }
            //   ]
            // });
            var _createInvoiceInvalid = yield me.alertCtrl.create({
                message: 'Shift has not yet started!',
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                        }
                    }
                ]
            });
            let confirm = yield me.alertCtrl.create({
                header: 'Create Invoice',
                message: 'Are you sure you want to continue?',
                cssClass: 'order-msgbox',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            if (me.globalInfo['ysnShiftOnGoing'] == 'true' || me.globalInfo['ysnShiftOnGoing'] == true) {
                                if (me.customer['dblCreditLimit'] <= 0) {
                                    // _collectCashMessage.present();
                                    _createInvoice.present();
                                }
                                else {
                                    _createInvoice.present();
                                }
                            }
                            else {
                                _createInvoiceInvalid.present();
                            }
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
    showPayment() {
        var me = this;
        console.log(me.customer);
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.stopReload = false;
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.InvoiceRecord = [];
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams = { customerData: me.customer, isFromCustomer: true };
        me.router.navigateByUrl('/payment');
    }
};
CustomerDetailInfoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL }
];
CustomerDetailInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-detail-info',
        template: _raw_loader_customer_detail_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_detail_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerDetailInfoPage);



/***/ }),

/***/ 70331:
/*!***************************************************************************!*\
  !*** ./src/app/pages/customer-detail-info/customer-detail-info.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-col p {\n  margin: 0px;\n}\n\n.blink_me {\n  animation: blinker 1s linear infinite;\n  background-color: red;\n  color: white;\n}\n\n@keyframes blinker {\n  50% {\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLWRldGFpbC1pbmZvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7QUFBUjs7QUFJQTtFQUNFLHFDQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRTtJQUNFLFVBQUE7RUFERjtBQUNGIiwiZmlsZSI6ImN1c3RvbWVyLWRldGFpbC1pbmZvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb2wge1xuICAgIHAge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG59XG5cbi5ibGlua19tZSB7XG4gIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XG4gIGJhY2tncm91bmQtY29sb3I6cmVkO1xuICBjb2xvcjp3aGl0ZTtcbn1cblxuQGtleWZyYW1lcyBibGlua2VyIHtcbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG4iXX0= */");

/***/ }),

/***/ 66932:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-detail-info/customer-detail-info.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-button slot=\"end\" primary (click)=\"showInvoice()\" >\n      Create Invoice\n    </ion-button>\n    <ion-button slot=\"end\" primary (click)=\"showPayment()\" >\n      Create Payment\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <p *ngIf=\"customer['dblCreditLimit'] <= 0\" style=\"position:absolute;margin-left: 70%;\" class=\"blink_me\">Cash on delivery (COD)</p>\n      <ion-list-header class=\"customer-details-header\">\n          <h1>Customer</h1>\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Name:</p>\n            </ion-col>\n            <ion-col size=\"10\" style=\"justify-content: left;\">\n              <p><b>{{customer['strCustomerName']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Phone:</p>\n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>{{customer['strPhone1']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Email:</p>\n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>{{customer['strEmail']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Billing Address:</p>\n            </ion-col>\n            <ion-col size=\"8\" style=\"justify-content: left;\">\n              <p><b>{{customer['strBillToAddress']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Billing City, State, Zip:</p>\n            </ion-col>\n            <ion-col size=\"8\" style=\"justify-content: left;\">\n              <p><b>{{customer['strBillToCity']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Notes:</p>\n            </ion-col>\n            <ion-col size=\"10\" style=\"justify-content: left;\">\n              <p><b>{{customer['strInternalNotes']}} &nbsp;</b></p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <ion-list-header class=\"customer-details-header\">\n        <h1>AR</h1>\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Credit Limit:</p>\n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{customer['dblCreditLimit']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Current Balance:</p>\n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>&nbsp; {{customer['dblTotalDue']}}</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>31+ Days Amt:</p>\n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{customer['dbl31DaysAmountDue']}} &nbsp;</b></p>\n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Last Payment:</p>\n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>&nbsp; {{customer['dtmLastPaymentDate']}}</b></p>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Split With:</p>\n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{customer['dbl31DaysAmountDue']}} &nbsp;</b></p>\n            </ion-col>\n            <!-- <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Last Payment Date:</p>\n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>&nbsp; {{customer['dtmLastPaymentDate']}}</b></p>\n            </ion-col> -->\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label stacked>Credit Limit</ion-label>\n        <ion-input type=\"text\" value={{customer['dblCreditLimit']}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Current Balance</ion-label>\n        <ion-input type=\"text\" value={{customer['dblTotalDue']}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>31+ Days Amount</ion-label>\n        <ion-input type=\"text\" value={{customer['dbl31DaysAmountDue']}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Last Payment Date</ion-label>\n        <ion-input type=\"text\" value={{customer['dtmLastPaymentDate']}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Last Payment Amount</ion-label>\n        <ion-input type=\"text\" value={{customer['dblLastPayment']}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Split With</ion-label>\n        <ion-input type=\"text\" value=\"\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Split Percentage</ion-label>\n        <ion-input type=\"text\" value=\"\"></ion-input>\n      </ion-item> -->\n    </ion-list>\n    <ion-list style=\"margin-bottom: 0px;\" *ngIf=\"sites.length > 0\">\n      <ion-list-header class=\"customer-details-header\">\n        <h1>Sites</h1>\n      </ion-list-header>\n      <ion-item *ngFor=\"let site of sites\">\n        <table>\n          <td width=\"120px\">\n            <p>Site No:</p>\n            <p>Description:</p>\n            <p>Site Address:</p>\n            <p>City, State, Zip:</p>\n            <p>Item No:</p>\n            <p>Fill Method:</p>\n            <p>Terms:</p>\n            <!-- <p>Last Delivery Date:</p>\n            <p>Last Delivery Qty:</p> -->\n            <p>Device Type:</p>\n            <p>Serial No:</p>\n            <p>Capacity:</p>\n            <p>Instruction:</p>\n          </td>\n          <td style=\"padding-left:10px\">\n            <p><b>{{site.intSiteNumber || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strDescription || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strSiteAddress || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strCity || ' '}}, {{site.strState || ' '}}, {{site.strZipCode || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strItemNo || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strFillMethod || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strDeliveryTerm || ' '}} &nbsp; </b></p>\n            <!-- <p><b>Not yet implemented</b></p>\n            <p><b>Not yet implemented</b></p> -->\n            <p><b>{{site.strDeviceType || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strSerialNumber || ' '}} &nbsp; </b></p>\n            <p><b>{{site.dblTankCapacity || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strInstruction || ' '}} &nbsp; </b></p>\n          </td>\n\n        </table>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer-detail-info_customer-detail-info_module_ts.js.map