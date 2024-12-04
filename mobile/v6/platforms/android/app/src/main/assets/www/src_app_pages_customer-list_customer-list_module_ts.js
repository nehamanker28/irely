(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_customer-list_customer-list_module_ts"],{

/***/ 55160:
/*!*********************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListPageRoutingModule": () => (/* binding */ CustomerListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-list.page */ 34479);




const routes = [
    {
        path: '',
        component: _customer_list_page__WEBPACK_IMPORTED_MODULE_0__.CustomerListPage
    }
];
let CustomerListPageRoutingModule = class CustomerListPageRoutingModule {
};
CustomerListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerListPageRoutingModule);



/***/ }),

/***/ 74033:
/*!*************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListPageModule": () => (/* binding */ CustomerListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-list-routing.module */ 55160);
/* harmony import */ var _customer_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list.page */ 34479);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);








let CustomerListPageModule = class CustomerListPageModule {
};
CustomerListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _customer_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerListPageRoutingModule
        ],
        declarations: [_customer_list_page__WEBPACK_IMPORTED_MODULE_1__.CustomerListPage],
        providers: [
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration,
        ]
    })
], CustomerListPageModule);



/***/ }),

/***/ 34479:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerListPage": () => (/* binding */ CustomerListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-list.page.html */ 75944);
/* harmony import */ var _customer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-list.page.scss */ 8886);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);








let CustomerListPage = class CustomerListPage {
    constructor(navCtrl, commonSQL, loadingCtrl, globalEventsService) {
        this.navCtrl = navCtrl;
        this.commonSQL = commonSQL;
        this.loadingCtrl = loadingCtrl;
        this.globalEventsService = globalEventsService;
        this.data = [];
        this.dynamicScrollHeight = "500px";
        this.dynamicScrollWidth = "2000px";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var me = this;
        me.getCustomerList();
        var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
        _rows.forEach(element => {
            element.setAttribute("style", "height: 50px !important;");
        });
    }
    getCustomerList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            let loader = yield me.loadingCtrl.create({ message: "Loading Customers...", backdropDismiss: true });
            loader.present();
            if (me.searchValue !== "" && me.searchValue !== undefined) {
                _query = 'SELECT * FROM tblARCustomer WHERE strCustomerNumber like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strCustomerName like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strBillToAddress like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strBillToCity like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strBillToState like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' or strBillToZipCode like \'%' + me.searchValue.toString().replace(/'/g, "''") + '%\'' +
                    ' LIMIT 30 ';
            }
            else {
                _query = 'SELECT * FROM tblARCustomer order by strCustomerName LIMIT 50';
            }
            me.commonSQL.getDataQuery(_query).then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                me.dynamicScrollHeight = ((30 * me.data.length) + 500).toString() + 'px';
                loader.dismiss();
                var _txtSearch = me.searchInput.el;
                _txtSearch.getElementsByTagName('input')[0].focus();
            })
                .catch(e => {
                loader.dismiss();
            });
        });
    }
    selectCustomer() {
        var me = this;
        console.log(me.currentSelected);
        me.navCtrl.pop().then(() => {
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.globalFlag = false;
            me.globalEventsService.publishEventsPayment(me.currentSelected);
        });
    }
    selectItem(item) {
        var me = this;
        if (me.currentSelected == null) {
            me.currentSelected = item;
        }
        else {
            me.previousSelected = me.currentSelected;
            me.previousSelected.ysnSelected = false;
            me.currentSelected = item;
        }
    }
};
CustomerListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__.CommonSQL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_2__.GlobalEventsService }
];
CustomerListPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['txtSearch', { static: false },] }]
};
CustomerListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-customer-list',
        template: _raw_loader_customer_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerListPage);



/***/ }),

/***/ 8886:
/*!*************************************************************!*\
  !*** ./src/app/pages/customer-list/customer-list.page.scss ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1saXN0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 75944:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-list/customer-list.page.html ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>  \n\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"7.5\" style=\"margin-right: 5px;\">\n          <ion-searchbar #txtSearch  [(ngModel)]=\"searchValue\" (ionChange)=\"getCustomerList()\" [debounce]=\"2000\"></ion-searchbar> \n        </ion-col>\n        <ion-col size=\"4\" style=\"margin-right: 5px;\">\n          <ion-button expand=\"block\" primary (click)=\"selectCustomer()\" style=\"height: 42px !important;\">Select</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding> \n  <!-- <ion-scroll scrollX=\"true\" [ngStyle]=\"{'height':dynamicScrollHeight}\"> -->\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\" hidden=\"hidden\">\n          <ion-item>\n            <ion-label><b>Entity Id</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 100px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Customer No</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Customer Name</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Address</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 100px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>City, State</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 100px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>Zip Code</b></ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data\">\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\" hidden=\"hidden\">\n          <ion-item>\n            <ion-label>{{item.intEntityId}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 100px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-checkbox color=\"primary\" [(ngModel)]=\"item['ysnSelected']\" (click)=\"selectItem(item)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">{{item.strCustomerNumber}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strCustomerName}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 200px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strBillToAddress}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 100px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strBillToCity}}, {{item.strBillToState}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col style=\"width: 100px !important; padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label>{{item.strBillToZipCode}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  <!-- </ion-scroll> -->\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer-list_customer-list_module_ts.js.map