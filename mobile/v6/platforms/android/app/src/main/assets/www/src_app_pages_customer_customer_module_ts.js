(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_customer_customer_module_ts"],{

/***/ 41880:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/customer-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPageRoutingModule": () => (/* binding */ CustomerPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.page */ 72036);




const routes = [
    {
        path: '',
        component: _customer_page__WEBPACK_IMPORTED_MODULE_0__.CustomerPage
    }
];
let CustomerPageRoutingModule = class CustomerPageRoutingModule {
};
CustomerPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerPageRoutingModule);



/***/ }),

/***/ 56921:
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPageModule": () => (/* binding */ CustomerPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-routing.module */ 41880);
/* harmony import */ var _customer_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.page */ 72036);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);











let CustomerPageModule = class CustomerPageModule {
};
CustomerPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerPageRoutingModule
        ],
        declarations: [_customer_page__WEBPACK_IMPORTED_MODULE_1__.CustomerPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfoBRL,
            _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_5__.OrderBRL
        ]
    })
], CustomerPageModule);



/***/ }),

/***/ 72036:
/*!*************************************************!*\
  !*** ./src/app/pages/customer/customer.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerPage": () => (/* binding */ CustomerPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer.page.html */ 86968);
/* harmony import */ var _customer_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.page.scss */ 96280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);








let CustomerPage = class CustomerPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, router, commonSQL, menu) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.commonSQL = commonSQL;
        this.menu = menu;
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
        this.menu.enable(true);
    }
    ionViewDidEnter() {
        var me = this;
        me.userGlobalInfo();
        me.getCustomerList();
        var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
        _rows.forEach(element => {
            element.setAttribute("style", "height: 50px !important;");
        });
        this.menu.enable(true);
    }
    sortFilter(query) {
        var me = this;
        if (query && query !== '') {
            me.currentFilter = ' where strName like \'%' + query + '%\' ';
        }
        else {
            me.currentFilter = '';
        }
        me.getCustomerList();
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
    getCustomerList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            me.createInvoiceButton = true;
            me.createPaymentButton = true;
            me.data = [];
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            if (me.searchValue !== "" && me.searchValue !== undefined) {
                _query = 'SELECT * FROM tblARCustomer where strName like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strCustomerNumber like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strCustomerName like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strBillToAddress like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' order by strCustomerName LIMIT 50 ';
            }
            else {
                _query = 'SELECT * FROM tblARCustomer order by strCustomerName LIMIT 50';
            }
            console.log(_query);
            me.commonSQL.getDataQuery(_query + me.currentFilter).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                loader.dismiss();
                var _txtSearch = me.searchInput.el;
                _txtSearch.getElementsByTagName('input')[0].focus();
            })
                .catch(e => {
                loader.dismiss();
            });
        });
    }
    showInvoice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(me.currentCustomer + ' ' + me.currentCustomerId + ' ' + me.globalInfo['intLocation']);
            var _createInvoice = yield me.alertCtrl.create({
                header: 'Create Invoice',
                message: 'Is this invoice a metered delivery?',
                cssClass: 'order-msgbox',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            console.log(me.customer);
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams = { customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: true };
                            me.router.navigateByUrl('/invoice');
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            console.log(me.customer);
                            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams = { customer: me.customer, isFromCustomer: true, sites: me.sites, isMeter: false };
                            me.router.navigateByUrl('/invoice');
                        }
                    }
                ]
            });
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
                                _createInvoice.present();
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
    reorderItems(indexes) {
        let element = this.data[indexes.from];
        this.data.splice(indexes.from, 1);
        this.data.splice(indexes.to, 0, element);
    }
    reorderSites(indexes) {
        let element = this.sites[indexes.from];
        this.sites.splice(indexes.from, 1);
        this.sites.splice(indexes.to, 0, element);
    }
    showCustomerDetails(item) {
        var me = this;
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams = { customerDetail: item, globalInfo: me.globalInfo, sites: me.sites };
        me.router.navigateByUrl('/customer-detail-info');
    }
    getConsumptionSites() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            console.log(me.currentCustomerId);
            var _query = 'SELECT * FROM tblTMSite left join tblTMSiteDevice on tblTMSiteDevice.intSiteId = tblTMSite.intSiteId where tblTMSite.intEntityId = \'' + me.currentCustomerId + '\'';
            console.log(_query);
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
    selectConsumptionSite(site) {
        console.log(site);
        if (site['intSiteId'] !== null && site['intSiteId'] !== "") {
            this.currentSite = site['intSiteId'];
        }
    }
    showOOG(site) {
        console.log(site);
        console.log(this.customer);
        // this.navCtrl.push("DeliveryOutofgasPage", { currentCustomerData: this.customer, currentSiteData: site });
    }
    showPayment() {
        var me = this;
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams = { customerData: me.customer, isFromCustomer: true };
        me.router.navigateByUrl('/payment');
    }
    formatDate(value) {
        return value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getFullYear() + ' ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
    }
    getDateFormat(value) {
        var options = {
            year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };
        return value.toLocaleTimeString("en-US", options);
    }
};
CustomerPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.MenuController }
];
CustomerPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['txtSearch', { static: false },] }]
};
CustomerPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer',
        template: _raw_loader_customer_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerPage);



/***/ }),

/***/ 96280:
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item-sliding[track=generated] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\n\nion-item-sliding[track=customer] ion-label {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n\n.customer {\n  border-left: 2px solid #6600cc;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTRTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFNRTtFQUNFLDhCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFPQTtFQUNFLDhCQUFBO0VBQ0Usa0JBQUE7QUFKSiIsImZpbGUiOiJjdXN0b21lci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY2F0ZWdvcmllczogKFxuICAgIGdlbmVyYXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgIGN1c3RvbWVyOiAjNjYwMGNjLFxuIC8vICAgZm9vZDogIzNiYzdjNCxcbiAvLyAgIGRvY3VtZW50YXRpb246ICNiMTZiZTMsXG4gLy8gICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4gKTtcbiBcbiBAZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9JyN7JHRyYWNrfSddIGlvbi1sYWJlbCB7XG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAkdmFsdWU7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICB9XG59XG5cbi5jdXN0b21lciB7XG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzY2MDBjYztcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ 86968:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer/customer.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header translucent=\"true\">\n  <ion-toolbar>\n    <ion-title *ngIf=\"!showSearchbar\">Customer List</ion-title>\n    <ion-searchbar #txtSearch  *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"searchValue\" (ionChange)=\"getCustomerList()\" (ionCancel)=\"showSearchbar = false\" placeholder=\"Search\" [debounce]=\"2000\"></ion-searchbar>\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-list #scheduleList>\n\n    <ion-item-sliding *ngFor=\"let item of data; let i=index\" #slidingItem >\n      <ion-item (click)=\"showCustomerDetails(item)\">\n        <ion-label class=\"customer\">\n          <h3><b>{{i+1}}). {{item.strCustomerName}} &mdash; {{item.strCustomerNumber}}</b></h3>\n          <p>\n            <b>Bill To:</b> {{item.strBillToAddress}}, {{item.strBillToCity}}, {{item.strBillToState}}, {{item.strBillToZipCode}}\n          </p>\n          <p>\n            <b>Email:</b> {{item.strEmail}} &mdash; <b>Phone:</b> {{item.strPhone1}}\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_customer_module_ts.js.map