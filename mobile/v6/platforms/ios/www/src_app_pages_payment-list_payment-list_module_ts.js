(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_payment-list_payment-list_module_ts"],{

/***/ 33623:
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-list/payment-list-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentListPageRoutingModule": () => (/* binding */ PaymentListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _payment_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-list.page */ 29008);




const routes = [
    {
        path: '',
        component: _payment_list_page__WEBPACK_IMPORTED_MODULE_0__.PaymentListPage
    }
];
let PaymentListPageRoutingModule = class PaymentListPageRoutingModule {
};
PaymentListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentListPageRoutingModule);



/***/ }),

/***/ 35414:
/*!***********************************************************!*\
  !*** ./src/app/pages/payment-list/payment-list.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentListPageModule": () => (/* binding */ PaymentListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _payment_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-list-routing.module */ 33623);
/* harmony import */ var _payment_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-list.page */ 29008);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);










let PaymentListPageModule = class PaymentListPageModule {
};
PaymentListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _payment_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentListPageRoutingModule
        ],
        declarations: [_payment_list_page__WEBPACK_IMPORTED_MODULE_1__.PaymentListPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfoBRL,
        ]
    })
], PaymentListPageModule);



/***/ }),

/***/ 29008:
/*!*********************************************************!*\
  !*** ./src/app/pages/payment-list/payment-list.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentListPage": () => (/* binding */ PaymentListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_payment_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./payment-list.page.html */ 65683);
/* harmony import */ var _payment_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-list.page.scss */ 99597);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _framework_common_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/service */ 4229);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);











let PaymentListPage = class PaymentListPage extends _framework_common_base_service__WEBPACK_IMPORTED_MODULE_2__.Service {
    constructor(navCtrl, loadingCtrl, alertCtrl, commonSQL, router, menu, https, http) {
        super(http, https);
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonSQL = commonSQL;
        this.router = router;
        this.menu = menu;
        this.https = https;
        this.http = http;
        this.data = [];
        this.customer = [];
        this.sites = [];
        this.currentFilter = '';
        this.currentCustomer = '';
        this.currentCustomerId = 0;
        this.currentSite = 0;
        this.dynamicScrollHeight = "500px";
        this.dynamicScrollWidth = "3000px";
        this.menu.enable(true);
    }
    ionViewDidLoad() {
        var me = this;
        me.getPaymentList();
        var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
        _rows.forEach(element => {
            element.setAttribute("style", "height: 50px !important;");
        });
    }
    ionViewDidEnter() {
        var me = this;
        me.getPaymentList();
        this.menu.enable(true);
    }
    getPaymentList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            if (me.searchValue !== "" && me.searchValue !== undefined) {
                _query = 'SELECT * FROM payment where strPaymentNo like \'%' + me.searchValue + '%\'' +
                    ' or strCustomerNo like \'%' + me.searchValue + '%\'' +
                    ' or strCustomerName like \'%' + me.searchValue + '%\'' +
                    ' or strLocationName like \'%' + me.searchValue + '%\'' +
                    ' or strMethod like \'%' + me.searchValue + '%\'' +
                    ' or strCheckNumber like \'%' + me.searchValue + '%\'' +
                    ' or strComments like \'%' + me.searchValue + '%\'' +
                    ' or strVoidComments like \'%' + me.searchValue + '%\'';
            }
            else {
                _query = 'SELECT * FROM payment';
            }
            console.log(_query);
            me.commonSQL.getDataQuery(_query).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                me.dynamicScrollHeight = ((40 * me.data.length) + 700).toString() + 'px';
                var options = {
                    year: "numeric", month: "short",
                    day: "numeric", hour: "2-digit", minute: "2-digit"
                };
                for (var x = 0; x <= me.data.length - 1; x++) {
                    me.data[x].dtmDatePaid = new Date(me.data[x].dtmDatePaid).toLocaleTimeString("en-US", options);
                    if (me.data[x].ysnVoided != "true") {
                        me.data[x].ysnVoided = "false";
                    }
                }
                loader.dismiss();
                var _txtSearch = me.searchInput.el;
                _txtSearch.getElementsByTagName('input')[0].focus();
            })
                .catch(e => {
                loader.dismiss();
            });
        });
    }
    openReceivePayment() {
        // this.navCtrl.push("CustomerPaymentPage");
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.globalFlag = false;
        this.router.navigateByUrl('/payment');
    }
    voidInvoice(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(item);
            if (item.ysnVoided == "false" || item.ysnVoided == false)
                return;
            let confirm = yield me.alertCtrl.create({
                message: 'Are you sure you want to void payment ' + item.strPaymentNo + '?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            me.voidComment(item);
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            item.ysnVoided = 'false';
                            console.log('void process canceled');
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
    voidComment(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(item);
            var _data = item.strPaymentNo;
            let alert = yield me.alertCtrl.create({
                message: 'Void Payment',
                inputs: [
                    {
                        name: 'comment',
                        placeholder: 'Add Comment...'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: data => {
                            item.ysnVoided = 'false';
                            console.log('void process canceled');
                        }
                    },
                    {
                        text: 'Void Payment',
                        handler: data => {
                            me.getbasic('/mobilebilling/api/payment/getvoidpayment?id=' + _data).subscribe(res => {
                                console.log(res);
                                me.commonSQL.updateDataQuery("UPDATE payment SET ysnVoided = 'true', ysnSendToOffice = 'true', strVoidComments = '" + data.comment + "', dtmDateVoided = '" + new Date() + "' WHERE intPaymentId = " + item.intPaymentId).then(res => {
                                    me.data = JSON.parse(JSON.stringify(res));
                                    me.getPaymentList();
                                });
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    sendInvoiceToServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let confirm = yield me.alertCtrl.create({
                message: 'Are you sure you want to send failed payment to the server?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                            me.buildSendData();
                        })
                    }, {
                        text: 'No',
                        handler: () => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                        })
                    }
                ]
            });
            confirm.present();
        });
    }
    buildSendData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Sending data...", backdropDismiss: true });
            loader.present();
            return new Promise((resolve, reject) => {
                var me = this;
                var _shift = [], _payment = [], _outofgass = [], _data = [];
                // debugger;
                // SEND SHIFT
                console.log('SEND SHIFT');
                me.commonSQL.getData('shift').then(res => {
                    _shift = res;
                    console.log('SHIFT');
                    console.log(_shift);
                    me.commonSQL.getData('payment').then(res => {
                        console.log('PAYMENT');
                        console.log(res);
                        _payment = res.filter(x => x.intShiftId == _shift[_shift.length - 1].intShiftId);
                        console.log(_payment);
                        console.log('BUILDING PAYMENT DATA');
                        _data = _shift[_shift.length - 1];
                        _data['tblMBILInvoices'] = [];
                        _data['tblMBILPayments'] = [];
                        for (var x = 0; x <= _payment.length - 1; x++) {
                            var _temp_payment = [];
                            _temp_payment = _payment[x];
                            if (_payment[x].ysnVoided != 'true' && _payment[x].ysnSendToOffice != 'true') {
                                console.log(_temp_payment);
                                _data['tblMBILPayments'].push(_temp_payment);
                            }
                        }
                        console.log('before sending entire shift');
                        console.log(_data);
                        var _paymentList = '';
                        for (var x = 0; x <= _payment.length - 1; x++) {
                            if (_payment[x].ysnSendToOffice != 'true' && _payment[x].ysnVoided != 'true') {
                                _paymentList = _paymentList + _payment[x].strPaymentNo + '\', \'';
                            }
                        }
                        me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => {
                            console.log('syncentireshift');
                            console.log(res);
                            me.commonSQL.updateDataQuery('UPDATE payment SET ysnSendToOffice = \'true\' WHERE strPaymentNo IN (\'' + _paymentList + '0\')').then(res => { console.log(res); console.log('updated payment'); });
                            loader.dismiss();
                            me.getPaymentList();
                        });
                    });
                });
            });
        });
    }
};
PaymentListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__.CommonSQL },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.MenuController },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_5__.HTTP },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient }
];
PaymentListPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['txtSearch', { static: false },] }]
};
PaymentListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-payment-list',
        template: _raw_loader_payment_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_payment_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PaymentListPage);



/***/ }),

/***/ 99597:
/*!***********************************************************!*\
  !*** ./src/app/pages/payment-list/payment-list.page.scss ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LWxpc3QucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 65683:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-list/payment-list.page.html ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-grid no-padding>\n      <ion-row large>\n        <ion-col size=\"5.5\">\n          <ion-searchbar #txtSearch  [(ngModel)]=\"searchValue\" large (ionChange)=\"getPaymentList()\" [debounce]=\"2000\"></ion-searchbar>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-button ion-button expand=\"block\" primary (click)=\"openReceivePayment()\" style=\"height: 42px !important;\">Receive Payment</ion-button>\n        </ion-col>\n        <ion-col size=\"3.5\">\n          <ion-button ion-button expand=\"block\" primary (click)=\"sendInvoiceToServer()\" style=\"height: 42px !important;\">Send Failed Payments</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content padding scrollX=\"true\">       \n  <!-- <ion-scroll scrollX=\"true\" [ngStyle]=\"{'height':dynamicScrollHeight}\"> -->\n    <ion-list [ngStyle]=\"{'width':dynamicScrollWidth}\">\n      <ion-row>\n        <ion-col style=\"width: 300px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Payment No</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Customer No</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 300px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Customer Name</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Location Name</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 300px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Date Paid</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Payment Method</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n            <ion-item>\n              <ion-label><b>Check No</b></ion-label>\n            </ion-item>\n          </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Payment Total</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 70px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label style=\"text-align: left;\"><b>Void</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Comments</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Void Comments</b></ion-label>\n          </ion-item>\n        </ion-col>   \n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Sent to Office</b></ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data\">\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strPaymentNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strCustomerNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strCustomerName}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strLocationName}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.dtmDatePaid}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strMethod}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strCheckNumber}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.dblPayment}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 70px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-toggle [(ngModel)]=\"item['ysnVoided']\" checked=\"item['ysnVoided']\" [disabled]=\"item['ysnVoided']\" color=\"blue\" (ionChange)=\"voidInvoice(item)\"></ion-toggle>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strComments}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strVoidComments}}</ion-label>\n          </ion-item>\n        </ion-col> \n        <ion-col style=\"width: 70px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label *ngIf=\"item.ysnSendToOffice=='true'\">Sent</ion-label>\n            <ion-label *ngIf=\"item.ysnSendToOffice!='true'\">Failed</ion-label>\n          </ion-item>\n        </ion-col>      \n      </ion-row>\n    </ion-list>\n  <!-- </ion-scroll> -->\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_payment-list_payment-list_module_ts.js.map