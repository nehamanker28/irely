(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_invoice-add-item_invoice-add-item_module_ts"],{

/***/ 14050:
/*!***************************************************************************!*\
  !*** ./src/app/pages/invoice-add-item/invoice-add-item-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddItemPageRoutingModule": () => (/* binding */ InvoiceAddItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_add_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-item.page */ 8617);




const routes = [
    {
        path: '',
        component: _invoice_add_item_page__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddItemPage
    }
];
let InvoiceAddItemPageRoutingModule = class InvoiceAddItemPageRoutingModule {
};
InvoiceAddItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoiceAddItemPageRoutingModule);



/***/ }),

/***/ 94322:
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-add-item/invoice-add-item.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddItemPageModule": () => (/* binding */ InvoiceAddItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-add-item-routing.module */ 14050);
/* harmony import */ var _invoice_add_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-item.page */ 8617);







let InvoiceAddItemPageModule = class InvoiceAddItemPageModule {
};
InvoiceAddItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invoice_add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoiceAddItemPageRoutingModule
        ],
        declarations: [_invoice_add_item_page__WEBPACK_IMPORTED_MODULE_1__.InvoiceAddItemPage],
        providers: []
    })
], InvoiceAddItemPageModule);



/***/ }),

/***/ 8617:
/*!*****************************************************************!*\
  !*** ./src/app/pages/invoice-add-item/invoice-add-item.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddItemPage": () => (/* binding */ InvoiceAddItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_add_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-add-item.page.html */ 97334);
/* harmony import */ var _invoice_add_item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-item.page.scss */ 79688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);








let InvoiceAddItemPage = class InvoiceAddItemPage {
    constructor(navCtrl, loadingCtrl, commonSQL, globalEventsService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonSQL = commonSQL;
        this.globalEventsService = globalEventsService;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad CustomerInvoiceAddItemPage');
        var me = this;
        var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
        _rows.forEach(element => {
            element.setAttribute("style", "height: 50px !important;");
        });
        me.locationId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.intLocation;
        me.locationNumber = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.strLocationNumber;
        me.customerNumber = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.navParams.strCustomerNumber;
        console.log(me.locationNumber);
        me.loadItemQuery();
    }
    loadItemQuery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            console.log(me.searchValue);
            // var _query = 'select distinct strItemNo,strDescription,dblSalePrice,intItemId,strLocationNumber, false as ysnSelected from tblInventoryItem where strLocationNumber = \'' + me.locationNumber + '\' order by strItemNo';
            // if(me.searchValue) {
            //   _query = 'select distinct strItemNo,strDescription,dblSalePrice,intItemId,strLocationNumber, false as ysnSelected from tblInventoryItem where strLocationNumber = \'' + me.locationNumber + '\' and (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\') order by strItemNo';
            // }
            // Special Pricing
            var _queryPricing = 'select distinct strItemNo,strDescription,dblFinalPrice,intItemId,strLocationNumber, false as ysnSelected, ' +
                'CASE WHEN dblFinalPrice IS NULL ' +
                'THEN dblSalePrice ' +
                'ELSE dblFinalPrice ' +
                'END dblSalePrice ' +
                'from ' +
                '( ' +
                'select ' +
                '*, ' +
                '(select dblPrice from tblCustomerSpecialPricing ' +
                '   where tblCustomerSpecialPricing.strItemNo = tblInventoryItem.strItemNo ' +
                '      and tblCustomerSpecialPricing.strCustomerNumber = \'' + me.customerNumber + '\' LIMIT 1 ) as dblFinalPrice ' +
                'from tblInventoryItem ' +
                'where tblInventoryItem.strLocationNumber = \'' + me.locationNumber + '\' ' +
                ') tblPricing';
            if (me.searchValue) {
                _queryPricing = _queryPricing + ' where (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\') order by strItemNo';
            }
            me.commonSQL.getDataQuery(_queryPricing).then(res => {
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
    addItem() {
        var me = this;
        console.log(me.currentSelected);
        if (me.currentSelected) {
            me.navCtrl.pop().then(() => {
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.globalFlag = false;
                me.globalEventsService.publishEventsItem(me.currentSelected);
            });
        }
    }
};
InvoiceAddItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_3__.GlobalEventsService }
];
InvoiceAddItemPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['txtSearch', { static: false },] }]
};
InvoiceAddItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-invoice-add-item',
        template: _raw_loader_invoice_add_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_add_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceAddItemPage);



/***/ }),

/***/ 79688:
/*!*******************************************************************!*\
  !*** ./src/app/pages/invoice-add-item/invoice-add-item.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLWFkZC1pdGVtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 97334:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-add-item/invoice-add-item.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"8\" style=\"margin-right: 5px;\">\n          <ion-searchbar #txtSearch  [(ngModel)]=\"searchValue\" large (ionChange)=\"loadItemQuery()\" [debounce]=\"2000\"></ion-searchbar>\n        </ion-col>\n        <ion-col col-auto></ion-col>\n        <ion-col size=\"3.5\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"addItem()\" class=\"button-global\"> Ok </ion-button>          \n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <!-- <ion-item> -->\n      <ion-row>\n        <ion-col size=\"4\">\n          Item Number          \n        </ion-col>\n        <ion-col size=\"4\">\n          Item Description\n        </ion-col>\n        <ion-col size=\"4\">\n          Price\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data; let i=index\" radio-group >\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-checkbox color=\"primary\" [(ngModel)]=\"item['ysnSelected']\" (click)=\"selectItem(item)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">{{item.strItemNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>{{item.strDescription}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>{{item.dblSalePrice}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    <!-- </ion-item> -->\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_invoice-add-item_invoice-add-item_module_ts.js.map