(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_customer-detail_customer-detail_module_ts"],{

/***/ 96708:
/*!*************************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailPageRoutingModule": () => (/* binding */ CustomerDetailPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _customer_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-detail.page */ 36673);




const routes = [
    {
        path: '',
        component: _customer_detail_page__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailPage
    }
];
let CustomerDetailPageRoutingModule = class CustomerDetailPageRoutingModule {
};
CustomerDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CustomerDetailPageRoutingModule);



/***/ }),

/***/ 97087:
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailPageModule": () => (/* binding */ CustomerDetailPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _customer_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-detail-routing.module */ 96708);
/* harmony import */ var _customer_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-detail.page */ 36673);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);








let CustomerDetailPageModule = class CustomerDetailPageModule {
};
CustomerDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _customer_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerDetailPageRoutingModule
        ],
        declarations: [_customer_detail_page__WEBPACK_IMPORTED_MODULE_1__.CustomerDetailPage],
        providers: [
            _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_2__.OrderBRL
        ]
    })
], CustomerDetailPageModule);



/***/ }),

/***/ 36673:
/*!***************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerDetailPage": () => (/* binding */ CustomerDetailPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_customer_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./customer-detail.page.html */ 9095);
/* harmony import */ var _customer_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer-detail.page.scss */ 32298);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);







let CustomerDetailPage = class CustomerDetailPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, commonSQL) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.commonSQL = commonSQL;
        this.data = [];
        this.customer = [];
        this.sites = [];
        this.sitesAndHistory = [];
        this.currentSort = '';
        this.currentFilter = '';
        this.currentCustomer = '';
        this.currentOrder = [];
        this.invoice = [];
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad CustomerDetailPage');
        this.currentCustomer = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.customerid;
        this.getOrderList();
    }
    getOrderList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            var _query = 'SELECT * FROM tblARCustomer where strCustomerNumber = \'' + me.currentCustomer + '\'';
            console.log(_query);
            me.commonSQL.getDataQuery(_query).then(res => {
                if (res.length > 0) {
                    me.customer = JSON.parse(JSON.stringify(res[0]));
                    console.log('customer');
                    console.log(me.customer);
                }
                loader.dismiss();
            }, err => {
                console.log(err);
                loader.dismiss();
            });
            me.sites = [];
            _query = 'SELECT tblTMSite.*, tblTMSiteDevice.*, tblTMDeliveryHistory.dtmInvoiceDate, tblTMDeliveryHistory.dblQuantityDelivered FROM tblTMSite left join tblTMSiteDevice on tblTMSiteDevice.intSiteId = tblTMSite.intSiteId left join tblTMDeliveryHistory on tblTMDeliveryHistory.intSiteID = tblTMSite.intSiteNumber where tblTMSite.strEntityNo = \'' + me.currentCustomer + '\'';
            console.log(_query);
            me.commonSQL.getDataQuery(_query).then(res => {
                me.sites = JSON.parse(JSON.stringify(res));
                console.log('sites');
                console.log(me.sites);
                var _previousEntityId = 0;
                var _x = -1;
                for (var x = 0; x <= me.sites.length - 1; x++) {
                    if (me.sites[x].intEntityId == _previousEntityId) {
                        me.sitesAndHistory[_x]['tblSiteHistory'].push(me.sites[x]);
                    }
                    else {
                        _x = _x + 1;
                        me.sitesAndHistory[_x] = me.sites[x];
                        me.sitesAndHistory[_x]['tblSiteHistory'] = [];
                        me.sitesAndHistory[_x]['tblSiteHistory'].push(me.sites[x]);
                    }
                    _previousEntityId = me.sites[x].intEntityId;
                }
                console.log(me.sitesAndHistory);
            })
                .catch(e => {
                console.log(e);
            });
        });
    }
};
CustomerDetailPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL }
];
CustomerDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-customer-detail',
        template: _raw_loader_customer_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_customer_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CustomerDetailPage);



/***/ }),

/***/ 32298:
/*!*****************************************************************!*\
  !*** ./src/app/pages/customer-detail/customer-detail.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b21lci1kZXRhaWwucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 9095:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/customer-detail/customer-detail.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>customer-detail</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<!-- <ion-content padding>\n  <ion-list style=\"margin-bottom: 0px;\">\n    <ion-list-header class=\"customer-details-header\">\n      <h1>Customer</h1>\n    </ion-list-header>\n    <ion-item>\n      <ion-grid>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p>Name:</p>                            \n          </ion-col>\n          <ion-col size=\"10\" style=\"justify-content: left;\">\n            <p><b>{{customer.strCustomerName}} &nbsp;</b></p>                       \n          </ion-col>\n        </ion-row>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p>Phone:</p>                            \n          </ion-col>\n          <ion-col size=\"4\" style=\"justify-content: left;\">\n            <p><b>{{customer.strPhone}} &nbsp;</b></p>                       \n          </ion-col>\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p>Email:</p>                            \n          </ion-col>\n          <ion-col size=\"4\" style=\"justify-content: left;\">\n            <p><b>{{customer.strEmail}} &nbsp;</b></p>                       \n          </ion-col>\n        </ion-row>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p>Billing Address:</p>                            \n          </ion-col>\n          <ion-col size=\"8\" style=\"justify-content: left;\">\n            <p><b>{{customer.strBillToAddress}} &nbsp;</b></p>                       \n          </ion-col>\n        </ion-row>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p>City, State, Zip:</p>                            \n          </ion-col>\n          <ion-col size=\"8\" style=\"justify-content: left;\">\n            <p><b>{{customer.strBillToCity}} &nbsp;</b></p>                       \n          </ion-col>\n        </ion-row>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p>Notes:</p>                            \n          </ion-col>\n          <ion-col size=\"10\" style=\"justify-content: left;\">\n            <p><b>{{customer.strInternalNotes}} &nbsp;</b></p>                       \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <ion-list style=\"margin-bottom: 0px;\">\n    <ion-list-header class=\"customer-details-header\">\n      <h1>AR</h1>\n    </ion-list-header>\n    <ion-item>\n      <ion-grid>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"3\" style=\"justify-content: left;\">\n            <p>Credit Limit:</p>                            \n          </ion-col>\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p><b>{{customer.dblCreditLimit}} &nbsp;</b></p>                       \n          </ion-col>\n          <ion-col size=\"3\" style=\"justify-content: left;\">\n            <p>Current Balance:</p>                            \n          </ion-col>\n          <ion-col size=\"4\" style=\"justify-content: left;\">\n            <p><b>&nbsp; {{customer.dblTotalDue}}</b></p>                       \n          </ion-col>\n        </ion-row>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"3\" style=\"justify-content: left;\">\n            <p>31+ Days Amount:</p>                            \n          </ion-col>\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p><b>{{customer.dbl31DaysAmountDue}} &nbsp;</b></p>                       \n          </ion-col>\n          <ion-col size=\"3\" style=\"justify-content: left;\">\n            <p>Last Payment Date:</p>                            \n          </ion-col>\n          <ion-col size=\"4\" style=\"justify-content: left;\">\n            <p><b>&nbsp; {{customer.dtmLastPaymentDate}}</b></p>                       \n          </ion-col>\n        </ion-row>\n        <ion-row style=\"max-height: 42px;\">\n          <ion-col size=\"3\" style=\"justify-content: left;\">\n            <p>Split With:</p>                            \n          </ion-col>\n          <ion-col size=\"2\" style=\"justify-content: left;\">\n            <p><b>{{customer.dbl31DaysAmountDue}} &nbsp;</b></p>                       \n          </ion-col>\n         \n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>\n  <ion-list style=\"margin-bottom: 0px;\">\n    <ion-list-header class=\"customer-details-header\">\n      <h1>Sites</h1>\n    </ion-list-header>\n    <ion-item style=\"border-bottom:1px;border-style:solid;border-bottom-color: lightgray;\" *ngFor=\"let site of sitesAndHistory\" >\n      <table>                  \n        <td>\n          <p>Site No:</p>\n          <p>Description:</p>\n          <p>Site Address:</p>\n          <p>City, State, Zip:</p>\n          <p>Item No:</p>\n          <p>Fill Method:</p>\n          <p>Terms:</p>\n          <p>Type:</p>\n          <p>Serial No:</p>\n          <p>Capacity:</p>\n        </td>\n        <td style=\"padding-left:10px\">\n          <p><b>{{site.intSiteNumber || ' '}} &nbsp; </b></p>\n          <p><b>{{site.strDescription || ' '}} &nbsp; </b></p>                 \n          <p><b>{{site.strSiteAddress || ' '}} &nbsp; </b></p>\n          <p><b>{{site.strCity || ' '}}, {{site.strState || ' '}}, {{site.strZipCode || ' '}} &nbsp; </b></p>\n          <p><b>{{site.strItemNo || ' '}} &nbsp; </b></p>\n          <p><b>{{site.strFillMethod || ' '}} &nbsp; </b></p>\n          <p><b>{{site.strDeliveryTerm || ' '}} &nbsp; </b></p>\n          <p><b>{{site.strDeviceType || ' '}} &nbsp; </b></p>\n          <p><b>{{site.strSerialNumber || ' '}} &nbsp; </b></p>\n          <p><b>{{site.dblTankCapacity || ' '}} &nbsp; </b></p>\n        </td>        \n      </table>\n      <br>\n      <ion-list-header class=\"customer-details-header\">\n        <h2>Delivery History</h2>\n      </ion-list-header>\n      <ion-item style=\"border-top:1px;border-style:solid;border-top-color: lightgray;\" *ngFor=\"let history of site.tblSiteHistory\" >\n        <table style=\"padding-left: 100px\">                  \n          <td>\n            <p>Quantity:</p>\n            <p>Date Delivered:</p>\n          </td>\n          <td style=\"padding-left:10px\">\n            <p><b>{{history.dblQuantityDelivered || ' '}} &nbsp; </b></p>\n            <p><b>{{history.dtmInvoiceDate || ' '}} &nbsp; </b></p>\n          </td>        \n        </table>\n      </ion-item>\n    </ion-item>                    \n  </ion-list>\n</ion-content> -->\n\n\n\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>  \n    <ion-title>Customer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <!-- <ion-list-header class=\"customer-details-header\">\n        <h1>Customer</h1>\n      </ion-list-header> -->\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Name:</p>                            \n            </ion-col>\n            <ion-col size=\"10\" style=\"justify-content: left;\">\n              <p><b>{{customer['strCustomerName']}} &nbsp;</b></p>                       \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Phone:</p>                            \n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>{{customer['strPhone']}} &nbsp;</b></p>                       \n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Email:</p>                            \n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>{{customer['strEmail']}} &nbsp;</b></p>                       \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p>Billing Address:</p>                            \n            </ion-col>\n            <ion-col size=\"8\" style=\"justify-content: left;\">\n              <p><b>{{customer['strBillToAddress']}} &nbsp;</b></p>                       \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p>Billing City, State, Zip:</p>                            \n            </ion-col>\n            <ion-col size=\"8\" style=\"justify-content: left;\">\n              <p><b>{{customer['strBillToCity']}} &nbsp;</b></p>                       \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p>Notes:</p>                            \n            </ion-col>\n            <ion-col size=\"10\" style=\"justify-content: left;\">\n              <p><b>{{customer['strInternalNotes']}} &nbsp;</b></p>                       \n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n    <ion-list style=\"margin-bottom: 0px;\">\n      <ion-list-header class=\"customer-details-header\">\n        <h1>AR</h1>\n      </ion-list-header>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Credit Limit:</p>                            \n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{customer['dblCreditLimit']}} &nbsp;</b></p>                       \n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Current Balance:</p>                            \n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>&nbsp; {{customer['dblTotalDue']}}</b></p>                       \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>31+ Days Amt:</p>                            \n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{customer['dbl31DaysAmountDue']}} &nbsp;</b></p>                       \n            </ion-col>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Last Payment:</p>                            \n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>&nbsp; {{customer['dtmLastPaymentDate']}}</b></p>                       \n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Split With:</p>                            \n            </ion-col>\n            <ion-col size=\"2\" style=\"justify-content: left;\">\n              <p><b>{{customer['dbl31DaysAmountDue']}} &nbsp;</b></p>                       \n            </ion-col>\n            <!-- <ion-col size=\"3\" style=\"justify-content: left;\">\n              <p>Last Payment Date:</p>                            \n            </ion-col>\n            <ion-col size=\"4\" style=\"justify-content: left;\">\n              <p><b>&nbsp; {{customer.dtmLastPaymentDate}}</b></p>                       \n            </ion-col> -->\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n\n      <!-- <ion-item>\n        <ion-label stacked>Credit Limit</ion-label>\n        <ion-input type=\"text\" value={{customer.dblCreditLimit}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Current Balance</ion-label>\n        <ion-input type=\"text\" value={{customer.dblTotalDue}}></ion-input>\n      </ion-item> \n      <ion-item>\n        <ion-label stacked>31+ Days Amount</ion-label>\n        <ion-input type=\"text\" value={{customer.dbl31DaysAmountDue}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Last Payment Date</ion-label>\n        <ion-input type=\"text\" value={{customer.dtmLastPaymentDate}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Last Payment Amount</ion-label>\n        <ion-input type=\"text\" value={{customer.dblLastPayment}}></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Split With</ion-label>\n        <ion-input type=\"text\" value=\"\"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label stacked>Split Percentage</ion-label>\n        <ion-input type=\"text\" value=\"\"></ion-input>\n      </ion-item> -->\n    </ion-list>\n    <ion-list style=\"margin-bottom: 0px;\" *ngIf=\"sites.length > 0\">\n      <ion-list-header class=\"customer-details-header\">\n        <h1>Sites</h1>\n      </ion-list-header>\n      <ion-item *ngFor=\"let site of sites\">\n        <table>                  \n          <td>\n            <p>Site No:</p>\n            <p>Description:</p>\n            <p>Site Address:</p>\n            <p>City, State, Zip:</p>\n            <p>Item No:</p>\n            <p>Fill Method:</p>\n            <p>Terms:</p>\n            <!-- <p>Last Delivery Date:</p>\n            <p>Last Delivery Qty:</p> -->\n            <p>Type:</p>\n            <p>Serial No:</p>\n            <p>Capacity:</p>\n          </td>\n          <td style=\"padding-left:10px\">\n            <p><b>{{site.intSiteNumber || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strDescription || ' '}} &nbsp; </b></p>                 \n            <p><b>{{site.strSiteAddress || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strCity || ' '}}, {{site.strState || ' '}}, {{site.strZipCode || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strItemNo || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strFillMethod || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strDeliveryTerm || ' '}} &nbsp; </b></p>\n            <!-- <p><b>Not yet implemented</b></p>                 \n            <p><b>Not yet implemented</b></p> -->\n            <p><b>{{site.strDeviceType || ' '}} &nbsp; </b></p>\n            <p><b>{{site.strSerialNumber || ' '}} &nbsp; </b></p>\n            <p><b>{{site.dblTankCapacity || ' '}} &nbsp; </b></p>\n          </td>\n          \n        </table>\n      </ion-item>                    \n    </ion-list>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer-detail_customer-detail_module_ts.js.map