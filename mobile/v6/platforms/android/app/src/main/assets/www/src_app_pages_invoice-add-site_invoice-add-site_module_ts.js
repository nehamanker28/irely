(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-add-site_invoice-add-site_module_ts"],{

/***/ 42658:
/*!***************************************************************************!*\
  !*** ./src/app/pages/invoice-add-site/invoice-add-site-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddSitePageRoutingModule": () => (/* binding */ InvoiceAddSitePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_add_site_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-site.page */ 96421);




const routes = [
    {
        path: '',
        component: _invoice_add_site_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddSitePage
    }
];
let InvoiceAddSitePageRoutingModule = class InvoiceAddSitePageRoutingModule {
};
InvoiceAddSitePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceAddSitePageRoutingModule);



/***/ }),

/***/ 93884:
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-add-site/invoice-add-site.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddSitePageModule": () => (/* binding */ InvoiceAddSitePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_add_site_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-site-routing.module */ 42658);
/* harmony import */ var _invoice_add_site_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-site.page */ 96421);







let InvoiceAddSitePageModule = class InvoiceAddSitePageModule {
};
InvoiceAddSitePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invoice_add_site_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddSitePageRoutingModule
        ],
        declarations: [_invoice_add_site_page__WEBPACK_IMPORTED_MODULE_1__.InvoiceAddSitePage],
        providers: []
    })
], InvoiceAddSitePageModule);



/***/ }),

/***/ 96421:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invoice-add-site/invoice-add-site.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddSitePage": () => (/* binding */ InvoiceAddSitePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_add_site_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-add-site.page.html */ 75691);
/* harmony import */ var _invoice_add_site_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-site.page.scss */ 83779);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);








let InvoiceAddSitePage = class InvoiceAddSitePage {
    constructor(navCtrl, loadingCtrl, commonSQL, globalEventsService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonSQL = commonSQL;
        this.globalEventsService = globalEventsService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log('ionViewDidLoad CustomerInvoiceAddItemPage');
            var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
            _rows.forEach(element => {
                element.setAttribute("style", "height: 50px !important;");
            });
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            me.currentCustomer = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.customerid;
            console.log(me.currentCustomer);
            //'select DISTINCT tblTMSite.intSiteNumber, tblTMSite.strDescription, tblTMSiteDevice.strSerialNumber, tblTMSiteDevice.dblTankCapacity, tblTMSite.intSiteId, tblTMSite.strSiteAddress, tblTMSite.strItemNo, tblTMSite.strEntityNo from tblTMSite left join tblTMSiteDevice on tblTMSiteDevice.intSiteId = tblTMSite.intSiteId where tblTMSite.strEntityNo = \'' + me.currentCustomer + '\' order by tblTMSite.intSiteNumber'
            me.commonSQL.getDataQuery("select *, ysnTaxable as ysnSiteTaxable, (select GROUP_CONCAT(strSerialNumber,'/') as strSerialNumber from tblTMSiteDevice where tblTMSiteDevice.intSiteId = tblTMSite.intSiteId and (tblTMSiteDevice.strSerialNumber IS NOT NULL AND tblTMSiteDevice.strSerialNumber <> '')) as strSerialNumber from tblTMSite where tblTMSite.intCustomerID = '" + me.currentCustomer + "' order by tblTMSite.intSiteNumber").then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log(me.data);
                loader.dismiss();
            });
        });
    }
    loadItemQuery(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Filtering data...", backdropDismiss: true });
            loader.present();
            console.log(me.searchValue);
            console.log(event.detail.value);
            me.commonSQL.getDataQuery("select *, ysnTaxable as ysnSiteTaxable, (select GROUP_CONCAT(strSerialNumber,'/') as strSerialNumber from tblTMSiteDevice where tblTMSiteDevice.intSiteId = tblTMSite.intSiteId and (tblTMSiteDevice.strSerialNumber IS NOT NULL AND tblTMSiteDevice.strSerialNumber <> '')) as strSerialNumber from tblTMSite where tblTMSite.intCustomerID = '" + me.currentCustomer + "' and (tblTMSite.intSiteNumber like '%" + me.searchValue + "%' or tblTMSite.strDescription like '%" + me.searchValue + "%') order by intSiteNumber").then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log(me.data);
                loader.dismiss();
                var _txtSearch = me.searchInput.el;
                _txtSearch.getElementsByTagName('input')[0].focus();
            });
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
    addSite() {
        var me = this;
        console.log(me.currentSelected);
        if (me.currentSelected) {
            me.currentSelected['strCustomerNumber'] = me.currentCustomer;
            me.navCtrl.pop().then(() => {
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.globalFlag = false;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.CustomerRecord.ysnSiteTaxable = me.currentSelected['ysnSiteTaxable'];
                me.globalEventsService.publishEventsSite(me.currentSelected);
            });
        }
    }
};
InvoiceAddSitePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__.GlobalEventsService }
];
InvoiceAddSitePage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['txtSearch', { static: false },] }]
};
InvoiceAddSitePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-invoice-add-site',
        template: _raw_loader_invoice_add_site_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_add_site_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceAddSitePage);



/***/ }),

/***/ 83779:
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-add-site/invoice-add-site.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLWFkZC1zaXRlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 75691:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-add-site/invoice-add-site.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"8\" style=\"margin-right: 5px;\">\n          <ion-searchbar #txtSearch  [(ngModel)]=\"searchValue\" large (ionChange)=\"loadItemQuery($event)\" [debounce]=\"2000\"></ion-searchbar>\n        </ion-col>\n        <ion-col col-auto></ion-col>\n        <ion-col size=\"3.5\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"addSite()\" class=\"button-global\"> Ok </ion-button>          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <!-- <ion-item> -->\n      <ion-row>\n        <ion-col size=\"2\">\n          Site Number\n        </ion-col>\n        <ion-col size=\"3\">\n          Description\n        </ion-col>\n        <!-- <ion-col size=\"2\">\n          Serial Number\n        </ion-col>\n        <ion-col size=\"1\">\n          Tank Capacity\n        </ion-col> -->\n        <ion-col size=\"3\">\n          Item Number\n        </ion-col>\n        <ion-col size=\"4\">\n          Site Address\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data; let i=index\" radio-group>  \n        <ion-col size=\"2\">\n          <ion-item>\n            <ion-checkbox color=\"primary\" [(ngModel)]=\"item['ysnSelected']\" (click)=\"selectItem(item)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">{{item.intSiteNumber}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label>{{item.strDescription}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <!-- <ion-col size=\"2\">\n          <ion-item>\n            <ion-label>{{item.strSerialNumber}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-item>\n            <ion-label>{{item.dblTankCapacity}}</ion-label>\n          </ion-item>\n        </ion-col> -->\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label>{{item.strItemNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>{{item.strSiteAddress}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    <!-- </ion-item> -->\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-add-site_invoice-add-site_module_ts.js.map