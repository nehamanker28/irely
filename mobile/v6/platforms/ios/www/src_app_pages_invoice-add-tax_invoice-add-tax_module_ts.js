(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-add-tax_invoice-add-tax_module_ts"],{

/***/ 74445:
/*!*************************************************************************!*\
  !*** ./src/app/pages/invoice-add-tax/invoice-add-tax-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddTaxPageRoutingModule": () => (/* binding */ InvoiceAddTaxPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_add_tax_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-tax.page */ 11420);




const routes = [
    {
        path: '',
        component: _invoice_add_tax_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddTaxPage
    }
];
let InvoiceAddTaxPageRoutingModule = class InvoiceAddTaxPageRoutingModule {
};
InvoiceAddTaxPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceAddTaxPageRoutingModule);



/***/ }),

/***/ 97015:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invoice-add-tax/invoice-add-tax.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddTaxPageModule": () => (/* binding */ InvoiceAddTaxPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_add_tax_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-tax-routing.module */ 74445);
/* harmony import */ var _invoice_add_tax_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-tax.page */ 11420);







let InvoiceAddTaxPageModule = class InvoiceAddTaxPageModule {
};
InvoiceAddTaxPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invoice_add_tax_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddTaxPageRoutingModule
        ],
        declarations: [_invoice_add_tax_page__WEBPACK_IMPORTED_MODULE_1__.InvoiceAddTaxPage],
        providers: []
    })
], InvoiceAddTaxPageModule);



/***/ }),

/***/ 11420:
/*!***************************************************************!*\
  !*** ./src/app/pages/invoice-add-tax/invoice-add-tax.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddTaxPage": () => (/* binding */ InvoiceAddTaxPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_add_tax_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-add-tax.page.html */ 75729);
/* harmony import */ var _invoice_add_tax_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-tax.page.scss */ 99757);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);








let InvoiceAddTaxPage = class InvoiceAddTaxPage {
    constructor(navCtrl, loadingCtrl, commonSQL, globalEventsService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonSQL = commonSQL;
        this.globalEventsService = globalEventsService;
        this.searchValue = "";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad CustomerInvoiceAddTaxPage');
        var me = this;
        var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
        _rows.forEach(element => {
            element.setAttribute("style", "height: 50px !important;");
        });
        me.customerId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.intEntityId;
        me.siteId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.intSiteId;
        me.itemId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.intItemId;
        console.log(me.customerId + ' ' + me.siteId + ' ' + me.itemId);
        me.loadTaxQuery();
    }
    loadTaxQuery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            console.log(me.searchValue);
            //var _query = 'select distinct strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intFulltaxId, false as ysnSelected from tblFullTax order by strTaxCode';
            var _query = 'SELECT distinct strTaxGroup, strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intFulltaxId, false as ysnSelected FROM tblFullTax ' +
                'WHERE intTaxClassId IN (SELECT intTaxClassId FROM tblCategoryTax ' +
                'WHERE intCategoryId IN (SELECT intCategoryId FROM tblInventoryItem where intItemId = \'' + me.itemId + '\'))  order by strTaxGroup, strTaxCode';
            if (me.searchValue != "") {
                _query = 'SELECT distinct strTaxGroup, strTaxCode,strCalculationMethod,dblRate,intTaxCodeId,intFulltaxId, false as ysnSelected FROM tblFullTax ' +
                    'WHERE intTaxClassId IN (SELECT intTaxClassId FROM tblCategoryTax ' +
                    'WHERE intCategoryId IN (SELECT intCategoryId FROM tblInventoryItem where intItemId = \'' + me.itemId + '\')) ';
                'AND (strTaxCode like \'%' + me.searchValue + '%\' or strCalculationMethod like \'%' + me.searchValue + '%\' or dblRate like \'%' + me.searchValue + '%\') order by strTaxGroup, strTaxCode';
            }
            me.commonSQL.getDataQuery(_query).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log(me.data);
                loader.dismiss();
                var _txtSearch = me.searchInput.el;
                _txtSearch.getElementsByTagName('input')[0].focus();
            });
        });
    }
    selectTax(item) {
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
    addTaxCode() {
        var me = this;
        console.log(me.currentSelected);
        me.navCtrl.pop().then(() => {
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.globalFlag = false;
            me.globalEventsService.publishEventsTax(me.currentSelected);
        });
    }
};
InvoiceAddTaxPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__.GlobalEventsService }
];
InvoiceAddTaxPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['txtSearch', { static: false },] }]
};
InvoiceAddTaxPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-invoice-add-tax',
        template: _raw_loader_invoice_add_tax_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_add_tax_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceAddTaxPage);



/***/ }),

/***/ 99757:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invoice-add-tax/invoice-add-tax.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLWFkZC10YXgucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 75729:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-add-tax/invoice-add-tax.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"8\" style=\"margin-right: 5px;\">\n          <ion-searchbar #txtSearch  [(ngModel)]=\"searchValue\" large (ionChange)=\"loadTaxQuery()\" [debounce]=\"2000\"></ion-searchbar>\n        </ion-col>\n        <ion-col col-auto></ion-col>\n        <ion-col size=\"3.5\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"addTaxCode()\" class=\"button-global\"> Ok </ion-button>          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>  \n</ion-header>\n  \n<ion-content padding>\n  <ion-grid>\n    <!-- <ion-item> -->\n      <ion-row>\n        <ion-col size=\"3\">\n          Tax Group    \n        </ion-col>\n        <ion-col size=\"3\">\n          Tax Code    \n        </ion-col>\n        <ion-col size=\"3\">\n          Calculation Method\n        </ion-col>\n        <ion-col size=\"3\">\n          Rate\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let tax of data; let i=index\" radio-group>\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-checkbox color=\"primary\" [(ngModel)]=\"tax['ysnSelected']\" (click)=\"selectTax(tax)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">{{tax.strTaxGroup}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label style=\"padding-left: 5px;\">{{tax.strTaxCode}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label>{{tax.strCalculationMethod}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-label>{{tax.dblRate}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    <!-- </ion-item> -->\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-add-tax_invoice-add-tax_module_ts.js.map