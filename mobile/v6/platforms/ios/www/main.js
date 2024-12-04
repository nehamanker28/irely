(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 90158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 39895);



const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'account',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_account_account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/account/account.module */ 36868)).then(m => m.AccountModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'signup',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_signup_signup_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/signup/signup.module */ 17110)).then(m => m.SignUpModule)
    },
    {
        path: 'app',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_pages_shift_shift_module_ts"), __webpack_require__.e("default-src_app_pages_dashboard_dashboard_module_ts"), __webpack_require__.e("src_app_pages_tabs-page_tabs-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tabs-page/tabs-page.module */ 60078)).then(m => m.TabsModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/dashboard/dashboard.module */ 71659)).then(m => m.DashboardPageModule)
    },
    {
        path: 'shift',
        loadChildren: () => __webpack_require__.e(/*! import() */ "default-src_app_pages_shift_shift_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift/shift.module */ 27686)).then(m => m.ShiftPageModule)
    },
    {
        path: 'order',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_order_order_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/order/order.module */ 92866)).then(m => m.OrderPageModule)
    },
    {
        path: 'configuration',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_configuration_configuration_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/configuration/configuration.module */ 28254)).then(m => m.ConfigurationPageModule)
    },
    {
        path: 'configuration-table-update',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_configuration-table-update_configuration-table-update_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/configuration-table-update/configuration-table-update.module */ 20752)).then(m => m.ConfigurationTableUpdatePageModule)
    },
    {
        path: 'configuration-table-view',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_configuration-table-view_configuration-table-view_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/configuration-table-view/configuration-table-view.module */ 39781)).then(m => m.ConfigurationTableViewPageModule)
    },
    {
        path: 'shift-inspection',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_shift-inspection_shift-inspection_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift-inspection/shift-inspection.module */ 97857)).then(m => m.ShiftInspectionPageModule)
    },
    {
        path: 'shift-hosepippingcheck',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_shift-hosepippingcheck_shift-hosepippingcheck_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift-hosepippingcheck/shift-hosepippingcheck.module */ 67368)).then(m => m.ShiftHosepippingcheckPageModule)
    },
    {
        path: 'shift-loadinventory',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_shift-loadinventory_shift-loadinventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift-loadinventory/shift-loadinventory.module */ 73671)).then(m => m.ShiftLoadinventoryPageModule)
    },
    {
        path: 'shift-loadinventory-add-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_shift-loadinventory-add-item_shift-loadinventory-add-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift-loadinventory-add-item/shift-loadinventory-add-item.module */ 96839)).then(m => m.ShiftLoadinventoryAddItemPageModule)
    },
    {
        path: 'shift-transfer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_shift-transfer_shift-transfer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift-transfer/shift-transfer.module */ 77723)).then(m => m.ShiftTransferPageModule)
    },
    {
        path: 'shift-download-export-data',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_shift-download-export-data_shift-download-export-data_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/shift-download-export-data/shift-download-export-data.module */ 52142)).then(m => m.ShiftDownloadExportDataPageModule)
    },
    {
        path: 'invoice',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_invoice_invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice/invoice.module */ 21259)).then(m => m.InvoicePageModule)
    },
    {
        path: 'invoice-add-item',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_invoice-add-item_invoice-add-item_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-add-item/invoice-add-item.module */ 94322)).then(m => m.InvoiceAddItemPageModule)
    },
    {
        path: 'invoice-add-site',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_invoice-add-site_invoice-add-site_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-add-site/invoice-add-site.module */ 93884)).then(m => m.InvoiceAddSitePageModule)
    },
    {
        path: 'invoice-add-tax',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_invoice-add-tax_invoice-add-tax_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-add-tax/invoice-add-tax.module */ 97015)).then(m => m.InvoiceAddTaxPageModule)
    },
    {
        path: 'invoice-add-comment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_invoice-add-comment_invoice-add-comment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-add-comment/invoice-add-comment.module */ 9331)).then(m => m.InvoiceAddCommentPageModule)
    },
    {
        path: 'customer',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customer_customer_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customer/customer.module */ 56921)).then(m => m.CustomerPageModule)
    },
    {
        path: 'customer-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customer-detail_customer-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customer-detail/customer-detail.module */ 97087)).then(m => m.CustomerDetailPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 64923)).then(m => m.PaymentPageModule)
    },
    {
        path: 'payment',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment/payment.module */ 64923)).then(m => m.PaymentPageModule)
    },
    {
        path: 'invoice-outofgas',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_invoice-outofgas_invoice-outofgas_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-outofgas/invoice-outofgas.module */ 65124)).then(m => m.InvoiceOutofgasPageModule)
    },
    {
        path: 'login-forgotpassword',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-forgotpassword_login-forgotpassword_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-forgotpassword/login-forgotpassword.module */ 76965)).then(m => m.LoginForgotpasswordPageModule)
    },
    {
        path: 'login-connection',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login-connection_login-connection_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login-connection/login-connection.module */ 21748)).then(m => m.LoginConnectionPageModule)
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/login/login.module */ 21053)).then(m => m.LoginPageModule)
    },
    {
        path: 'invoice-completed',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_invoice-completed_invoice-completed_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-completed/invoice-completed.module */ 10689)).then(m => m.InvoiceCompletedPageModule)
    },
    {
        path: 'customer-list',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_customer-list_customer-list_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customer-list/customer-list.module */ 74033)).then(m => m.CustomerListPageModule)
    },
    {
        path: 'payment-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-list_payment-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-list/payment-list.module */ 35414)).then(m => m.PaymentListPageModule)
    },
    {
        path: 'pdf-list',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pdf-list_pdf-list_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pdf-list/pdf-list.module */ 66242)).then(m => m.PdfListPageModule)
    },
    {
        path: 'payment-receive',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_payment-receive_payment-receive_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/payment-receive/payment-receive.module */ 18375)).then(m => m.PaymentReceivePageModule)
    },
    {
        path: 'configuration-meter-device',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_configuration-meter-device_configuration-meter-device_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/configuration-meter-device/configuration-meter-device.module */ 55495)).then(m => m.ConfigurationMeterDevicePageModule)
    },
    {
        path: 'order-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_order-detail_order-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/order-detail/order-detail.module */ 88931)).then(m => m.OrderDetailPageModule)
    },
    {
        path: 'customer-detail-info',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_customer-detail-info_customer-detail-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/customer-detail-info/customer-detail-info.module */ 29286)).then(m => m.CustomerDetailInfoPageModule)
    },
    {
        path: 'invoice-tax',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_invoice-tax_invoice-tax_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-tax/invoice-tax.module */ 37557)).then(m => m.InvoiceTaxPageModule)
    },
    {
        path: 'invoice-add-contract',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_invoice-add-contract_invoice-add-contract_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-add-contract/invoice-add-contract.module */ 74612)).then(m => m.InvoiceAddContractPageModule)
    },
    {
        path: 'configuration-settings',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_configuration-settings_configuration-settings_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/configuration-settings/configuration-settings.module */ 88592)).then(m => m.ConfigurationSettingsPageModule)
    },
    {
        path: 'line-flush-transfer',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_line-flush-transfer_line-flush-transfer_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/line-flush-transfer/line-flush-transfer.module */ 55143)).then(m => m.LineFlushTransferPageModule)
    },
    {
        path: 'tankwagon-inventory',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tankwagon-inventory_tankwagon-inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tankwagon-inventory/tankwagon-inventory.module */ 8055)).then(m => m.TankwagonInventoryPageModule)
    },
    {
        path: 'tankwagon-inventory-details',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_tankwagon-inventory-details_tankwagon-inventory-details_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/tankwagon-inventory-details/tankwagon-inventory-details.module */ 83118)).then(m => m.TankwagonInventoryDetailsPageModule)
    },
    {
        path: 'invoice-add-signature',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_pages_invoice-add-signature_invoice-add-signature_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/invoice-add-signature/invoice-add-signature.module */ 75510)).then(m => m.InvoiceAddSignaturePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./app.component.html */ 91106);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 43069);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./providers/user-data */ 76401);
/* harmony import */ var _providers_login_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./providers/login.service */ 96465);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _providers_refresh_interval_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/refresh-interval-service.service */ 57051);





// import { SwUpdate } from '@angular/service-worker';










let AppComponent = class AppComponent {
    constructor(menu, platform, router, splashScreen, statusBar, storage, userData, refreshIntervalService, 
    // private swUpdate: SwUpdate,
    loginService, toastCtrl, 
    // private shiftPage : ShiftPage,
    globalInfoBRL, commonSQL) {
        this.menu = menu;
        this.platform = platform;
        this.router = router;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.storage = storage;
        this.userData = userData;
        this.refreshIntervalService = refreshIntervalService;
        this.loginService = loginService;
        this.toastCtrl = toastCtrl;
        this.globalInfoBRL = globalInfoBRL;
        this.commonSQL = commonSQL;
        this.appPages = [
            {
                title: 'Dashboard',
                url: '/app/tabs/dashboard',
                icon: 'home'
            },
            {
                title: 'Shift',
                url: '/shift',
                icon: 'stopwatch'
            },
            {
                title: 'Order',
                url: '/order',
                icon: 'cart'
            },
            {
                title: 'Customer',
                url: '/customer',
                icon: 'person'
            },
            {
                title: 'Line Flush and Transfer',
                url: '/line-flush-transfer',
                icon: 'swap-horizontal'
            }
            // {
            //   title: 'Schedule',
            //   url: '/app/tabs/schedule',
            //   icon: 'people'
            // },
            // {
            //   title: 'Speakers',
            //   url: '/app/tabs/speakers',
            //   icon: 'people'
            // },
            // {
            //   title: 'Map',
            //   url: '/app/tabs/map',
            //   icon: 'map'
            // },
            // {
            //   title: 'About',
            //   url: '/app/tabs/about',
            //   icon: 'information-circle'
            // }
        ];
        this.loggedIn = false;
        this.dark = false;
        this.delayFlag = false;
        this.delayFlagReady = false;
        this.delayLogFlag = false;
        this.delayLogFlagReady = false;
        this.initializeApp();
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            me.menu.enable(false);
            me.storage.create();
            me.loggedIn = yield me.checkLoginStatus();
            console.log(me.loggedIn);
            // me.swUpdate.available.subscribe(async res => {
            //   const toast = await me.toastCtrl.create({
            //     message: 'Update available!',
            //     position: 'bottom',
            //     buttons: [
            //       {
            //         role: 'cancel',
            //         text: 'Reload'
            //       }
            //     ]
            //   });
            //   await toast.present();
            //   toast
            //     .onDidDismiss()
            //     .then(() => me.swUpdate.activateUpdate())
            //     .then(() => window.location.reload());
            // });
            //setup connection
            me.loginService.getToken();
            me.loginService.getConnection().subscribe((connection) => {
                ;
                var _connection = JSON.stringify(connection);
                console.log(connection);
                console.log(_connection);
                try {
                    var _newConnection = JSON.parse(_connection);
                    _newConnection = JSON.parse(_newConnection);
                    console.log(_newConnection.strLink);
                    console.log(_framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress);
                    if (_newConnection.strLink !== '' && _newConnection.strLink !== null) {
                        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress = _newConnection.strLink || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress;
                        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.Company = _newConnection.strCompany || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.Company;
                    }
                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress + "/";
                }
                catch (e) {
                    console.log(_newConnection.strLink);
                    console.log(_framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress);
                    if (_newConnection.strLink !== '' && _newConnection.strLink !== null) {
                        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress = _newConnection.strLink || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress;
                        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.Company = _newConnection.strCompany || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.Company;
                    }
                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress + "/";
                }
            });
            if (me.loggedIn == true) {
                if (localStorage.getItem('connection') == null || localStorage.getItem('connection') == undefined || localStorage.getItem('connection') == '') {
                    localStorage.setItem('connection', _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.BaseAddress + ' - ' + _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.Company);
                }
                me.router.navigateByUrl('/shift');
            }
            else {
                me.menu.enable(false);
                me.router.navigateByUrl('/login');
            }
            // me.delayLogFlagReady = true;
            //       }
            //       clearInterval(me.delayLogReady);
            //     }
            //     me.delayLogFlag = true;
            //     me.delayLogReady = setInterval(function(){ refresh() }, 3000);
            //   }
        });
    }
    initializeApp() {
        var me = this;
        console.log('ready app');
        if (me.delayFlag == false) {
            var refresh = function () {
                console.log('delay ready app');
                if (me.delayFlagReady == false) {
                    console.log('delay ready app start');
                    me.platform.ready().then(() => {
                        me.statusBar.styleDefault();
                        //me.statusBar.backgroundColorByName("yellow");
                        me.statusBar.overlaysWebView(false);
                        me.splashScreen.hide();
                    });
                    me.delayFlagReady = true;
                }
                clearInterval(me.delayReady);
            };
            me.delayFlag = true;
            me.delayReady = setInterval(function () { refresh(); }, 3000);
        }
    }
    checkLoginStatus() {
        return this.userData.isLoggedIn().then(loggedIn => {
            console.log(loggedIn);
            return loggedIn || false;
            // return this.updateLoggedInStatus(loggedIn);
        });
    }
    updateLoggedInStatus(loggedIn) {
        setTimeout(() => {
            this.loggedIn = loggedIn;
        }, 300);
    }
    listenForLoginEvents() {
        window.addEventListener('user:login', () => {
            this.updateLoggedInStatus(true);
        });
        window.addEventListener('user:signup', () => {
            this.updateLoggedInStatus(true);
        });
        window.addEventListener('user:logout', () => {
            this.updateLoggedInStatus(false);
        });
    }
    logout() {
        var me = this;
        me.refreshIntervalService.clearRefreshInterval();
        me.globalInfoBRL.updateByQuery('UPDATE globalinfo SET ysnLogged = \'false\'').then(result => {
            me.userData.logout().then(() => {
                me.menu.enable(false);
                return me.router.navigateByUrl('login');
            });
        });
    }
    openConfiguration() {
        this.router.navigateByUrl('/configuration');
    }
    openTutorial() {
        this.menu.enable(false);
        this.storage.set('ion_did_tutorial', false);
        this.router.navigateByUrl('/tutorial');
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_2__.SplashScreen },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_3__.StatusBar },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_5__.UserData },
    { type: _providers_refresh_interval_service_service__WEBPACK_IMPORTED_MODULE_10__.RefreshIntervalServiceService },
    { type: _providers_login_service__WEBPACK_IMPORTED_MODULE_6__.LoginService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ToastController },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_9__.GlobalInfoBRL },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_8__.CommonSQL }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewEncapsulation.None,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ 51524);
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ 73494);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ionic/storage-angular */ 54925);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ 90158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/service-worker */ 72249);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../environments/environment */ 92340);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/network/ngx */ 75592);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/printer/ngx */ 17008);
/* harmony import */ var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/keyboard/ngx */ 4329);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./framework/_common/base/message */ 40807);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./providers/report.service */ 67119);
/* harmony import */ var _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./providers/i21syncdevice.service */ 79561);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_base_token__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./framework/_common/base/token */ 4500);
/* harmony import */ var _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./framework/brl/implementation/syncdevicedata */ 1447);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./framework/brl/implementation/order */ 17848);
/* harmony import */ var _ionic_native_zip_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/zip/ngx */ 86410);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 15855);
/* harmony import */ var _providers_LCR_functions__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./providers/LCR_functions */ 27201);
/* harmony import */ var _providers_LCR_bluetooth__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./providers/LCR_bluetooth */ 68779);
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ 28078);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 16030);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ionic-native/base64-to-gallery/ngx */ 7020);
/* harmony import */ var _pages_invoice_tax_invoice_tax_page__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/invoice-tax/invoice-tax.page */ 85552);
/* harmony import */ var _pages_invoice_add_contract_invoice_add_contract_page__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/invoice-add-contract/invoice-add-contract.page */ 54842);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./framework/models/globalinfo */ 68439);





// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
















// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';






// import { Service } from './framework/_common/base/service';


















let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_35__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_36__.NgModule)({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_37__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__.AppRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_38__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_39__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_39__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.IonicModule.forRoot(),
            _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_41__.IonicStorageModule.forRoot({
                name: 'irely_db',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            }),
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_42__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_6__.environment.production
            })
        ],
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent, _pages_invoice_tax_invoice_tax_page__WEBPACK_IMPORTED_MODULE_32__.InvoiceTaxPage, _pages_invoice_add_contract_invoice_add_contract_page__WEBPACK_IMPORTED_MODULE_33__.InvoiceAddContractPage],
        entryComponents: [_pages_invoice_tax_invoice_tax_page__WEBPACK_IMPORTED_MODULE_32__.InvoiceTaxPage, _pages_invoice_add_contract_invoice_add_contract_page__WEBPACK_IMPORTED_MODULE_33__.InvoiceAddContractPage],
        providers: [
            // InAppBrowser, 
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__.SplashScreen,
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar,
            _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_7__.Network,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_40__.Platform,
            _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_8__.AppVersion,
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_9__.SQLite,
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_10__.File,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_11__.FileOpener,
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_14__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_17__.CommonSQL,
            _ionic_native_zip_ngx__WEBPACK_IMPORTED_MODULE_23__.Zip,
            _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_24__.SQLitePorter,
            // FileTransfer,
            _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_0__.HTTP,
            _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_19__.SyncDeviceDataBRL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_20__.GlobalInfoBRL,
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_21__.Configuration,
            _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_22__.OrderBRL,
            _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_16__.i21SyncDeviceService,
            // Service,
            _framework_common_base_token__WEBPACK_IMPORTED_MODULE_18__.Token,
            _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_12__.Printer,
            _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_13__.Keyboard,
            _providers_LCR_functions__WEBPACK_IMPORTED_MODULE_25__.LCR_functions,
            _providers_LCR_bluetooth__WEBPACK_IMPORTED_MODULE_26__.LCR_bluetooth,
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_27__.BluetoothSerial,
            _providers_report_service__WEBPACK_IMPORTED_MODULE_15__.ReportService,
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_30__.AndroidPermissions,
            _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_28__.Geolocation,
            _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_29__.LocationAccuracy,
            _ionic_native_base64_to_gallery_ngx__WEBPACK_IMPORTED_MODULE_31__.Base64ToGallery,
            _ionic_storage__WEBPACK_IMPORTED_MODULE_3__.Storage,
            _angular_common__WEBPACK_IMPORTED_MODULE_43__.DatePipe,
            _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_34__.GlobalInfo,
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 83949:
/*!***********************************************!*\
  !*** ./src/app/framework/_common/base/api.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter": () => (/* binding */ Filter),
/* harmony export */   "Sort": () => (/* binding */ Sort),
/* harmony export */   "GetRequest": () => (/* binding */ GetRequest),
/* harmony export */   "GetResponse": () => (/* binding */ GetResponse),
/* harmony export */   "PostResponse": () => (/* binding */ PostResponse)
/* harmony export */ });
class Filter {
    constructor(fields) {
        if (fields)
            Object.assign(this, fields);
    }
}
class Sort {
    constructor(fields) {
        if (fields)
            Object.assign(this, fields);
    }
}
class GetRequest {
    constructor(fields) {
        let me = this;
        me.page = 1;
        me.start = 0;
        me.limit = 1;
        me.filter = [];
        me.sort = [];
        if (fields)
            Object.assign(me, fields);
    }
}
class GetResponse {
}
class PostResponse {
}


/***/ }),

/***/ 52768:
/*!*******************************************************!*\
  !*** ./src/app/framework/_common/base/base-entity.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseEntity": () => (/* binding */ BaseEntity)
/* harmony export */ });
class BaseEntity {
    constructor() {
        this.strClientID = '1';
        this.intConcurrencyId = 1;
    }
}


/***/ }),

/***/ 40807:
/*!***************************************************!*\
  !*** ./src/app/framework/_common/base/message.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => (/* binding */ Message)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let Message = class Message {
    constructor(toastCtrl, alertCtrl) {
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    showAlertInfoMessage(message, callback) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            alert.dismiss().then(() => {
                                if (callback)
                                    callback();
                            });
                            return false;
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertOkCancelMessage(message, callback) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: 'Ok',
                        handler: () => {
                            alert.dismiss().then(() => {
                                callback('ok');
                            });
                            return false;
                        }
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            callback('cancel');
                            return false;
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertYesNoMessage(message, callback) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            alert.dismiss().then(() => {
                                callback('yes');
                            });
                            return false;
                        }
                    },
                    {
                        text: 'No',
                        role: 'cancel',
                        handler: () => {
                            alert.dismiss().then(() => {
                                callback('no');
                            });
                            return false;
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showAlertYesNoCancelMessage(message, callback) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                message: message,
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            callback('cancel');
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            alert.dismiss().then(() => {
                                callback('no');
                            });
                        }
                    },
                    {
                        text: 'Yes',
                        handler: () => {
                            alert.dismiss().then(() => {
                                callback('yes');
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    showToastMessage(message, callback, duration = 2000) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: message,
                duration: duration,
                position: 'bottom'
            });
            // toast.onDidDismiss(() => {
            //     if (callback)
            //         callback();
            // });
            toast.present();
        });
    }
};
Message.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.AlertController }
];
Message = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)()
], Message);



/***/ }),

/***/ 4229:
/*!***************************************************!*\
  !*** ./src/app/framework/_common/base/service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Service": () => (/* binding */ Service)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configuration/common-method */ 20271);
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../configuration/configuration */ 35217);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api */ 83949);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);









class Service {
    constructor(http, https) {
        this.http = http;
        this.https = https;
        this.uri = '';
        this.idProperty = 'id';
    }
    get(request) {
        let me = this;
        request = request || new _api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        return me.http.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.readUri || (me.uri + '/get')}?${_configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.encodeToUri(request)}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    create(entity) {
        let me = this;
        return me.http.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.createUri || (me.uri + '/post')}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    save(entity) {
        let me = this;
        return me.http.put(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.updateUri || (me.uri + '/put')}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    delete(entity) {
        let me = this;
        return me.http.delete(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.deleteUri || (me.uri + '/delete')}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders(), observe: "body", }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    getbyid(id) {
        let me = this;
        return me.get(new _api__WEBPACK_IMPORTED_MODULE_2__.GetRequest({
            filter: [new _api__WEBPACK_IMPORTED_MODULE_2__.Filter({
                    c: me.idProperty,
                    v: id
                })]
        }));
    }
    customget(uri, request) {
        let me = this;
        request = request || new _api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        return me.http.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}?${_configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.encodeToUri(request)}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    getbasic(uri) {
        let me = this;
        return me.http.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    custompost(uri, entity) {
        let me = this;
        return me.http.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    getrawNoRequest(uri, request) {
        let me = this;
        request = request || new _api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        return me.http.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    getrawNoRequestAsync(uri, request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            request = request || new _api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
            return yield me.http.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this)).toPromise();
        });
    }
    getrawNoRequestPromise(uri, request) {
        return new Promise((resolve, reject) => {
            let me = this;
            const url = `${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`;
            const newURL = url.replace(/ /g, '');
            me.https.setServerTrustMode('nocheck').then(res => {
                console.log(res);
                me.https.setRequestTimeout(3600);
                me.https.sendRequest(newURL, {
                    method: 'get',
                    headers: { 'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.AuthToken,
                        'ICompany': _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.Company
                    }
                }).then(data => {
                    console.log(data);
                    resolve(data.data);
                })
                    .catch(error => {
                    console.log(error);
                    reject(error);
                });
            });
        });
    }
    getraw(uri, request) {
        let me = this;
        request = request || new _api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        return me.http.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}?${_configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.encodeToUri(request)}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    getzip(uri, request) {
        let me = this;
        request = request || new _api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        var _url = `${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}?${_configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.encodeToUri(request)}`;
        console.log(_url);
        _url = _url.replace('https', 'http');
        return me.http.get(_url, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getZipHeaders(), responseType: 'blob' });
        // .pipe(
        //   map((res: any) => {
        //     return new Blob([res.blob()], { type: 'application/zip, application/octet-stream' });
        //   })
        // );
    }
    getzipPromise(uri, request) {
        return new Promise((resolve, reject) => {
            let me = this;
            var url = `${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`;
            me.https.setServerTrustMode('nocheck').then(res => {
                console.log(res);
                me.https.setRequestTimeout(3600);
                me.https.sendRequest(url, {
                    method: 'get',
                    responseType: 'blob',
                    headers: {
                        'Content-Type': 'application/zip, application/octet-stream',
                        'Authorization': `Bearer ` + _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.AuthToken,
                        'ICompany': _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.Company,
                        'timeout': `${9999000}`
                    }
                }).then(data => {
                    console.log(data);
                    // console.log(data.data); // data received by server
                    // console.log(data.headers);
                    resolve(data.data);
                })
                    .catch(error => {
                    console.log(error);
                    // console.log(error.error); // error message as string
                    // console.log(error.headers);
                    reject(error);
                });
            });
        });
    }
    postraw(uri, data) {
        let me = this;
        console.log(data);
        return me.http.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, JSON.stringify(data), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    postrawAuth(uri, data) {
        let me = this;
        return me.http.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, data, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getBearer() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    putraw(uri, data) {
        let me = this;
        return me.http.put(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, JSON.stringify(data), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this));
    }
    createAsync(entity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            return yield me.http.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.uri}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this)).toPromise();
        });
    }
    saveAsync(entity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            return yield me.http.put(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.uri}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this)).toPromise();
        });
    }
    deleteAsync(entity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            return yield me.http.delete(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.uri}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(result => result, this)).toPromise();
        });
    }
    handleErrors(error) {
        console.log(JSON.stringify(error.json()));
        return rxjs__WEBPACK_IMPORTED_MODULE_6__.Observable.throw(error);
    }
}
Service.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Inject, args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient,] }] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__.HTTP }
];


/***/ }),

/***/ 4500:
/*!*************************************************!*\
  !*** ./src/app/framework/_common/base/token.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": () => (/* binding */ Token)
/* harmony export */ });
/* harmony import */ var _base_base_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/base-entity */ 52768);

class Token extends _base_base_entity__WEBPACK_IMPORTED_MODULE_0__.BaseEntity {
}


/***/ }),

/***/ 20271:
/*!******************************************************************!*\
  !*** ./src/app/framework/_common/configuration/common-method.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonMethod": () => (/* binding */ CommonMethod)
/* harmony export */ });
/* harmony import */ var _configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration */ 35217);

class CommonMethod {
    static getBearer() {
        var headers = null;
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'ICompany': _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.Company
        };
        return headers;
    }
    static getHeaders() {
        var headers = null;
        headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ` + _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.AuthToken,
            'ICompany': _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.Company,
            'timeout': `${3600}`
        };
        return headers;
    }
    static getZipHeaders() {
        var headers = null;
        headers = {
            'Content-Type': 'application/zip, application/octet-stream',
            'Authorization': `Bearer ` + _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.AuthToken,
            'ICompany': _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.Company,
            'timeout': `${3600}`
        };
        return headers;
    }
    static encodeToUri(param) {
        return Object.keys(param).map(function (k) {
            return `${encodeURIComponent(k)}=${(k == 'filter' || k == 'sort') ? JSON.stringify(param[k]) : encodeURIComponent(param[k])}`;
        }).join('&');
    }
    static getMapSource(address) {
        return `https://maps.googleapis.com/maps/api/staticmap?center=${address}&zoom=14&size=250x150&key=AIzaSyAAtaIJf5CK1O7EjCTIjVVu-_Fx3LCf_i0`;
    }
    static getEntityImageSource(id) {
        id = id || _configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.EntityId;
        return `${_configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.BaseAddress}globalcomponentengine/api/usersinfo/getuserdefaultpicture?entityId=${id}&company=${_configuration__WEBPACK_IMPORTED_MODULE_0__.Configuration.Company}`;
    }
    static highlightButton(menu) {
        if (document.getElementsByClassName('btnShiftPage').length > 0) {
            document.getElementsByClassName('btnDashboardPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnShiftPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnOrderPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnCustomerPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnCompletedInvoicePage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnReceivedPaymentPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnConfigurationPage')[0].classList.remove('menu-global-active');
            document.getElementsByClassName('btnProfilePage')[0].classList.remove('menu-global-active');
            //document.getElementById('btn'+menu).classList.add('menu-global-active');
            document.getElementsByClassName('btn' + menu)[0].classList.add('menu-global-active');
        }
    }
}


/***/ }),

/***/ 35217:
/*!******************************************************************!*\
  !*** ./src/app/framework/_common/configuration/configuration.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Configuration": () => (/* binding */ Configuration)
/* harmony export */ });
class Configuration {
    taxes() {
        this.itemTax = [];
    }
}
Configuration.BaseAddress = "http://192.168.2.10/iRelyi21TE"; // "http://192.168.1.6/2010proddev";  //http://192.168.1.8/2010MBIL/  //"http://74.208.186.24/MBIL/"; //http://192.168.1.6/dev2010 // http://192.168.0.24/Dev1921/"; // "http://74.208.186.24/MOB1920/"; //server connection http://qc.irely.com/MOB1830/  ++  //http://192.168.0.197/1830Dev/
Configuration.Company = "TE"; //location
Configuration.ApiKey = "AIzaSyDX4uw6XEnQ0iq4V4hR8FbTU13joMIFNIg";
Configuration.sqliteIsOpen = false;
Configuration.globalFlag = false;
Configuration.stopReload = false;


/***/ }),

/***/ 47143:
/*!******************************************************************!*\
  !*** ./src/app/framework/_common/data/providers/base-service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseService": () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configuration/common-method */ 20271);
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration/configuration */ 35217);
/* harmony import */ var _base_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base/api */ 83949);








class BaseService {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.uri = '';
        this.idProperty = 'id';
    }
    get(request) {
        let me = this;
        request = request || new _base_api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        return me.httpclient.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.readUri || (me.uri + '/get')}?${_configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.encodeToUri(request)}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    create(entity) {
        let me = this;
        return me.httpclient.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.createUri || (me.uri + '/post')}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    save(entity) {
        let me = this;
        return me.httpclient.put(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.updateUri || (me.uri + '/put')}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    delete(entity) {
        let me = this;
        return me.httpclient.delete(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.deleteUri || (me.uri + '/delete')}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders(), observe: "body" } //JSON.stringify([entity])
        ).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    getbyid(id) {
        let me = this;
        return me.get(new _base_api__WEBPACK_IMPORTED_MODULE_2__.GetRequest({
            filter: [new _base_api__WEBPACK_IMPORTED_MODULE_2__.Filter({
                    c: me.idProperty,
                    v: id
                })]
        }));
    }
    customget(uri, request) {
        let me = this;
        request = request || new _base_api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        console.log('LOAD COMPANY REQUEST');
        return me.httpclient.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}?${_configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.encodeToUri(request)}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    getbasic(uri) {
        let me = this;
        return me.httpclient.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    custompost(uri, entity) {
        let me = this;
        return me.httpclient.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    getraw(uri, request) {
        let me = this;
        request = request || new _base_api__WEBPACK_IMPORTED_MODULE_2__.GetRequest();
        return me.httpclient.get(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}?${_configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.encodeToUri(request)}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    postraw(uri, data) {
        let me = this;
        return me.httpclient.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, JSON.stringify(data), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    postrawAuth(uri, data) {
        let me = this;
        return me.httpclient.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, data, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getBearer() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    putraw(uri, data) {
        let me = this;
        return me.httpclient.put(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${uri}`, JSON.stringify(data), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this));
    }
    createAsync(entity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            return yield me.httpclient.post(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.uri}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this)).toPromise();
        });
    }
    saveAsync(entity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            return yield me.httpclient.put(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.uri}`, JSON.stringify([entity]), { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this)).toPromise();
        });
    }
    deleteAsync(entity) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            return yield me.httpclient.delete(`${_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.BaseAddress}${me.uri}`, { headers: _configuration_common_method__WEBPACK_IMPORTED_MODULE_0__.CommonMethod.getHeaders() }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(result => result, this)).toPromise();
        });
    }
    handleErrors(error) {
        console.log(JSON.stringify(error.json()));
        return rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable.throw(error);
    }
}
BaseService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Inject, args: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient,] }] }
];


/***/ }),

/***/ 58296:
/*!*****************************************************************!*\
  !*** ./src/app/framework/_common/sqlite/implementation/base.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Base": () => (/* binding */ Base)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-sql */ 56443);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);




let Base = class Base {
    constructor(common, sqlite) {
        this.common = common;
        this.sqlite = sqlite;
    }
    get(entity) {
        var me = this;
        try {
            return me.common.getData(entity['tablename']);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    getByQuery(query) {
        var me = this;
        try {
            console.log(query);
            return me.common.getDataQuery(query);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    getRecord(entity) {
        var me = this;
        try {
            return me.common.getRecord(entity['tablename']);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    add(entity) {
        var me = this;
        try {
            return me.common.addData(entity['tablename'], entity);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    addBulk(entity, data) {
        var me = this;
        try {
            return me.common.addBulkData(entity['tablename'], entity, data);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    update(entity) {
        var me = this;
        try {
            return me.common.updateData(entity['tablename'], entity);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    updateByQuery(query) {
        var me = this;
        try {
            return me.common.updateDataQuery(query);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    deleteByQuery(query) {
        var me = this;
        try {
            return me.common.deleteDataQuery(query);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    createTable(entity) {
        var me = this;
        try {
            return me.common.dropTable(entity['tablename']).then(() => me.common.createTable(entity));
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    deleteTable(entity) {
        var me = this;
        try {
            return me.common.dropTable(entity['tablename']);
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
};
Base.ctorParameters = () => [
    { type: _common_sql__WEBPACK_IMPORTED_MODULE_0__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite }
];
Base = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)()
], Base);



/***/ }),

/***/ 56443:
/*!***********************************************************************!*\
  !*** ./src/app/framework/_common/sqlite/implementation/common-sql.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommonSQL": () => (/* binding */ CommonSQL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../configuration/configuration */ 35217);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 15855);
/* harmony import */ var _models_tblARCustomer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/tblARCustomer */ 77205);
/* harmony import */ var _models_tblCategoryTax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../models/tblCategoryTax */ 30449);
/* harmony import */ var _models_tblCategoryTaxExemption__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../models/tblCategoryTaxExemption */ 32311);
/* harmony import */ var _models_tblContractExport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../models/tblContractExport */ 37891);
/* harmony import */ var _models_tblCustomerSpecialPricing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../models/tblCustomerSpecialPricing */ 56796);
/* harmony import */ var _models_tblCustomerMultiLevelPricing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../models/tblCustomerMultiLevelPricing */ 12021);
/* harmony import */ var _models_tblCustomerTaxExemption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../models/tblCustomerTaxExemption */ 5990);
/* harmony import */ var _models_tblEntityLocation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../models/tblEntityLocation */ 22857);
/* harmony import */ var _models_tblFullTax__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../models/tblFullTax */ 8917);
/* harmony import */ var _models_tblInventoryItem__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../models/tblInventoryItem */ 19011);
/* harmony import */ var _models_tblMBILCompanyPreference__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../models/tblMBILCompanyPreference */ 50593);
/* harmony import */ var _models_tblMBILOrder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../models/tblMBILOrder */ 38130);
/* harmony import */ var _models_tblMBILOrderItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../models/tblMBILOrderItem */ 140);
/* harmony import */ var _models_tblMBILOrderTaxCode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../models/tblMBILOrderTaxCode */ 58730);
/* harmony import */ var _models_tblSMLocation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../models/tblSMLocation */ 79840);
/* harmony import */ var _models_tblSMTerm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../models/tblSMTerm */ 92570);
/* harmony import */ var _models_tblSMTruck__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../models/tblSMTruck */ 982);
/* harmony import */ var _models_tblTMDeliveryHistory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../models/tblTMDeliveryHistory */ 33221);
/* harmony import */ var _models_tblTMSite__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../models/tblTMSite */ 70029);
/* harmony import */ var _models_tblTMSiteDevice__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../models/tblTMSiteDevice */ 1176);
/* harmony import */ var _models_tblSMPaymentMethod__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../models/tblSMPaymentMethod */ 43450);
/* harmony import */ var _models_tblSMCompanySetup__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../models/tblSMCompanySetup */ 57734);
/* harmony import */ var _models_globalinfo__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../models/globalinfo */ 68439);
/* harmony import */ var _models_hosepipingcheck__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../models/hosepipingcheck */ 57249);
/* harmony import */ var _models_invoice__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../models/invoice */ 49412);
/* harmony import */ var _models_invoiceitems__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../models/invoiceitems */ 16726);
/* harmony import */ var _models_invoicetaxcodes__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../models/invoicetaxcodes */ 62988);
/* harmony import */ var _models_shift__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../models/shift */ 87518);
/* harmony import */ var _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../../models/syncdevicedata */ 72681);
/* harmony import */ var _models_user__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../../models/user */ 7490);
/* harmony import */ var _models_vehicleinspection__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../../models/vehicleinspection */ 38101);
/* harmony import */ var _models_outofgas__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../../models/outofgas */ 44167);
/* harmony import */ var _models_payment__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../../models/payment */ 10785);
/* harmony import */ var _models_loadinventory__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../../models/loadinventory */ 72369);
/* harmony import */ var _models_tankwagon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../../models/tankwagon */ 65516);
/* harmony import */ var _models_lineflushandtransfer__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../models/lineflushandtransfer */ 57866);
/* harmony import */ var _models_ordersite__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../../models/ordersite */ 80344);
/* harmony import */ var _models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../../models/tblMBILPDF */ 12750);











































// import { ContractHeader } from '../../../models/contractheader';
// import { ContractDetail } from '../../../models/contractdetail';
let CommonSQL = class CommonSQL {
    constructor(sqlite, sqlitePorter) {
        this.sqlite = sqlite;
        this.sqlitePorter = sqlitePorter;
        this.counter = 0;
        ;
        this.openSQLite().then((res) => {
            console.log('init');
            this.initiateSQLite();
        });
    }
    openSQLite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_41__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            this.sqlite = yield new _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite();
        });
    }
    initiateSQLite() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_41__.__awaiter)(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                var me = this;
                if (!_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.sqliteIsOpen) {
                    if (!me.sqlite.create({ name: "irely_sqlite_db.db", location: "default" }))
                        return;
                    me.sqlite.create({ name: "irely_sqlite_db.db", location: "default" }).then((db) => {
                        me.db = db;
                        me.isOpen = true;
                        _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.sqlite = db;
                        _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.sqliteIsOpen = true;
                        console.log('open sql');
                        resolve(db);
                    }).catch((error) => {
                        console.log(error);
                        resolve(error);
                    });
                }
                else {
                    me.db = _configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.sqlite;
                    resolve(me.db);
                }
                console.log(me.db);
            });
        });
    }
    createDB() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_41__.__awaiter)(this, void 0, void 0, function* () {
            ;
            console.log('createDB');
            if (!this.isOpen) {
                yield this.sqlite.create({ name: "irely_sqlite_db.db", location: "default" }).then((db) => {
                    this.db = db;
                    this.isOpen = true;
                }).catch((error) => {
                    console.log(error);
                });
            }
        });
    }
    //#region - BUILD STRING to SCRIPTS
    buildtablescript(tablename, fields) {
        try {
            var _sql = '';
            for (var x in fields) {
                if (fields[x] == 'pk') {
                    _sql = x + ' INTEGER PRIMARY KEY, ';
                }
                else if (fields[x] == 'number') {
                    _sql = _sql + x + ' INT, ';
                }
                else if (fields[x] == 'string' || fields[x] == 'date' || fields[x] == 'boolean') {
                    _sql = _sql + x + ' TEXT, ';
                }
                else if (fields[x] == 'decimal') {
                    _sql = _sql + x + ' REAL, ';
                }
            }
            if (_sql.length > 5) {
                _sql = _sql.substr(0, _sql.length - 2);
            }
            var _final = 'CREATE TABLE IF NOT EXISTS ' + tablename + '(' + _sql + ')';
            console.log(_final);
            return _final;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    insert(tablename, record) {
        try {
            var _sqlString = 'INSERT INTO ' + tablename + ' VALUES(NULL,';
            var _sqlValue = [];
            var _result = [];
            var _table = record['mapping'];
            for (var key in _table) {
                if (!_table.hasOwnProperty(key))
                    continue;
                if (_table[key] != 'pk') {
                    var obj = record[key];
                    _sqlString = _sqlString + '?,';
                    _sqlValue.push(obj);
                }
            }
            _sqlString = _sqlString.substr(0, _sqlString.length - 1) + ')';
            _result.push(_sqlString);
            _result.push(_sqlValue);
            console.log(_result);
            return _result;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    insertbulk(tablename, record, data) {
        try {
            var _sqlString = 'INSERT INTO ' + tablename + ' (';
            var _result = [];
            var _table = record['mapping'];
            for (var insertKey in _table) {
                if (!_table.hasOwnProperty(insertKey))
                    continue;
                if (_table[insertKey] != 'pk') {
                    _sqlString = _sqlString + insertKey + ',';
                }
            }
            _sqlString = _sqlString.substr(0, _sqlString.length - 1) + ') VALUES';
            if (!data.data) {
                data.data = data;
            }
            for (var x = 0; x <= data.data.length - 1; x++) {
                _sqlString = _sqlString + '(';
                for (var key in _table) {
                    if (_table[key] != 'pk') {
                        var _val = data.data[x][key];
                        if (_table[key] == 'string' || _table[key] == 'date' || _table[key] == 'boolean') {
                            if (_val != null && _val != undefined && _val != 'null' && _val != 'undefined') {
                                _val = _val.toString().replace(/'/g, ''); //temporary
                            }
                            else {
                                _val = "";
                            }
                            _sqlString = _sqlString + "'" + _val + "',";
                        }
                        else {
                            if (_val == null || _val == undefined || _val == 'null' || _val == 'undefined' || _val == '') {
                                _val = "''";
                            }
                            _sqlString = _sqlString + _val + ',';
                        }
                    }
                }
                _sqlString = _sqlString.substr(0, _sqlString.length - 1) + '),';
            }
            _sqlString = _sqlString.substr(0, _sqlString.length - 1);
            _result.push(_sqlString);
            console.log(_result);
            return _result;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    update(tablename, record) {
        try {
            var _sqlString = 'UPDATE ' + tablename + ' SET ';
            var _sqlValue = [];
            var _result = [];
            var _table = record['mapping'];
            var _where = '';
            for (var updateKey in _table) {
                if (!_table.hasOwnProperty(updateKey))
                    continue;
                if (_table[updateKey] != 'pk' && (record[updateKey] != undefined && record[updateKey] != null)) { //added null validation to not override existing data
                    var obj1 = record[updateKey];
                    _sqlString = _sqlString + updateKey + '=?, ';
                    _sqlValue.push(obj1);
                }
                else if (_table[updateKey] == 'pk' && (record[updateKey] != undefined && record[updateKey] != null)) {
                    var obj2 = record[updateKey];
                    _where = ' WHERE ' + updateKey + ' = ' + obj2;
                }
            }
            _sqlString = _sqlString.substr(0, _sqlString.length - 2);
            _sqlString = _sqlString + _where;
            _result.push(_sqlString);
            _result.push(_sqlValue);
            console.log(_result);
            return _result;
        }
        catch (e) {
            console.log(e);
            return e;
        }
    }
    //#endregion
    //#region - EXECUTE SCRIPTS
    getDataTable(table) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(table);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql('SELECT * FROM ' + table, []).then(res => {
                        var _tableData = [];
                        for (var i = 0; i <= res.rows.length - 1; i++) {
                            var _row = res.rows.item(i);
                            _tableData.push(_row);
                        }
                        console.log(_tableData);
                        console.log('Get data from ' + table);
                        resolve(_tableData);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql('SELECT * FROM ' + table, []).then(res => {
                    var _tableData = [];
                    for (var i = 0; i <= res.rows.length - 1; i++) {
                        var _row = res.rows.item(i);
                        _tableData.push(_row);
                    }
                    console.log(_tableData);
                    console.log('Get data from ' + table);
                    resolve(_tableData);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    getData(table) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(table);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql('SELECT * FROM ' + table, [])
                        .then(res => {
                        var _tableData = [];
                        for (var i = 0; i <= res.rows.length - 1; i++) {
                            var _row = res.rows.item(i);
                            _tableData.push(_row);
                        }
                        console.log(_tableData);
                        console.log('Get data from ' + table);
                        resolve(_tableData);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql('SELECT * FROM ' + table, [])
                    .then(res => {
                    var _tableData = [];
                    for (var i = 0; i <= res.rows.length - 1; i++) {
                        var _row = res.rows.item(i);
                        _tableData.push(_row);
                    }
                    console.log(_tableData);
                    console.log('Get data from ' + table);
                    resolve(_tableData);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    getRecord(table) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(table);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql('SELECT * FROM ' + table, [])
                        .then(res => {
                        console.log(res);
                        var _row = res.rows.item(0);
                        console.log(_row);
                        console.log('Get record from ' + table);
                        resolve(_row);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql('SELECT * FROM ' + table, [])
                    .then(res => {
                    console.log(res);
                    var _row = res.rows.item(0);
                    console.log(_row);
                    console.log('Get record from ' + table);
                    resolve(_row);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    getDataQuery(query) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(query);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql(query, [])
                        .then(res => {
                        var _tableData = [];
                        for (var i = 0; i <= res.rows.length - 1; i++) {
                            var _row = res.rows.item(i);
                            _tableData.push(_row);
                        }
                        console.log(_tableData);
                        console.log('Get Data from Query');
                        resolve(_tableData);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql(query, [])
                    .then(res => {
                    var _tableData = [];
                    for (var i = 0; i <= res.rows.length - 1; i++) {
                        var _row = res.rows.item(i);
                        _tableData.push(_row);
                    }
                    console.log(_tableData);
                    console.log('Get Data from Query');
                    resolve(_tableData);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    addData(tablename, record) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(tablename, record);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    var _sql = me.insert(tablename, record);
                    console.log(_sql);
                    me.db.executeSql(_sql[0], _sql[1])
                        .then(res => {
                        console.log(res);
                        console.log('Data added ' + tablename);
                        resolve(res);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                var _sql = me.insert(tablename, record);
                console.log(_sql);
                me.db.executeSql(_sql[0], _sql[1])
                    .then(res => {
                    console.log(res);
                    console.log('Data added ' + tablename);
                    resolve(res);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    addBulkData(tablename, record, data) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(tablename, data);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    var _sql = me.insertbulk(tablename, record, data);
                    console.log(_sql[0]);
                    me.db.executeSql(_sql[0], [])
                        .then(res => {
                        console.log(res);
                        console.log('Bulk data added ' + tablename);
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                var _sql = me.insertbulk(tablename, record, data);
                console.log(_sql[0]);
                me.db.executeSql(_sql[0], [])
                    .then(res => {
                    console.log(res);
                    console.log('Bulk data added ' + tablename);
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    updateData(tablename, record) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(tablename, record);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    var _sql = me.update(tablename, record);
                    me.db.executeSql(_sql[0], _sql[1])
                        .then((data) => {
                        console.log(data);
                        console.log('Record updated ' + tablename);
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                var _sql = me.update(tablename, record);
                me.db.executeSql(_sql[0], _sql[1])
                    .then((data) => {
                    console.log(data);
                    console.log('Record updated ' + tablename);
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    updateDataQuery(query) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log(query);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql(query, [])
                        .then((data) => {
                        console.log(data);
                        console.log('Record updated ' + query);
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql(query, [])
                    .then((data) => {
                    console.log(data);
                    console.log('Record updated ' + query);
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    deleteData(tablename, query) {
        var me = this;
        return new Promise((resolve, reject) => {
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql('DELETE FROM ' + tablename + query, [])
                        .then((data) => {
                        console.log(data);
                        console.log('Record deleted ' + tablename + ' ' + query);
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql('DELETE FROM ' + tablename + query, [])
                    .then((data) => {
                    console.log(data);
                    console.log('Record deleted ' + tablename + ' ' + query);
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    deleteDataQuery(query) {
        var me = this;
        return new Promise((resolve, reject) => {
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql('DELETE FROM ' + query, [])
                        .then((data) => {
                        console.log(data);
                        console.log('Record deleted ' + query);
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql('DELETE FROM ' + query, [])
                    .then((data) => {
                    console.log(data);
                    console.log('Record deleted ' + query);
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    createTable(entity) {
        var me = this;
        return new Promise((resolve, reject) => {
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    var _sql = me.buildtablescript(entity['tablename'], entity['mapping']);
                    me.db.executeSql(_sql, [])
                        .then((data) => {
                        console.log('Created ' + entity['tablename'] + ' Table');
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                var _sql = me.buildtablescript(entity['tablename'], entity['mapping']);
                me.db.executeSql(_sql, [])
                    .then((data) => {
                    console.log('Created ' + entity['tablename'] + ' Table');
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    dropTable(entity) {
        var me = this;
        console.log('DROP TABLE ' + entity['tablename'] || 0);
        return new Promise((resolve, reject) => {
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql('DROP TABLE IF EXISTS ' + entity['tablename'] || 0, [])
                        .then((data) => {
                        console.log('Dropped ' + entity['tablename'] + ' Table');
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql('DROP TABLE IF EXISTS ' + entity['tablename'] || 0, [])
                    .then((data) => {
                    console.log('Dropped ' + entity['tablename'] + ' Table');
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    //#endregion
    //#region - <SQL>|<JSON> TO DB
    importDataFromServer(jsonFile) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log('INSERT THIS ==> ');
            console.log(jsonFile);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    this.sqlitePorter.importJsonToDb(me.db, jsonFile)
                        .then(res => {
                        console.log('Data IMPORTED ==> ', res);
                        resolve(res);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                this.sqlitePorter.importJsonToDb(me.db, jsonFile)
                    .then(res => {
                    console.log('Data IMPORTED ==> ', res);
                    resolve(res);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    importDataFromApp(sqlFile) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log('INSERT THIS ==> ');
            console.log(sqlFile);
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    this.sqlitePorter.importSqlToDb(me.db, sqlFile)
                        .then(res => {
                        console.log('Data IMPORTED ==> ', res);
                        resolve(res);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                this.sqlitePorter.importSqlToDb(me.db, sqlFile)
                    .then(res => {
                    console.log('Data IMPORTED ==> ', res);
                    resolve(res);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    //#endregion
    //#region - Database and Table
    wipeDB() {
        var me = this;
        return new Promise((resolve, reject) => {
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    this.sqlitePorter.wipeDb(me.db).then((data) => {
                        console.log('Dropped DB');
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                this.sqlitePorter.wipeDb(me.db)
                    .then((data) => {
                    console.log('Dropped DB');
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    backupDB() {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log('EXPORT DB');
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    this.sqlitePorter.exportDbToJson(me.db).then((data) => {
                        console.log(data);
                        console.log('EXPORT DB');
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                this.sqlitePorter.exportDbToJson(me.db)
                    .then((data) => {
                    console.log(data);
                    console.log('EXPORT DB');
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
    DropAndCreate(table, createAll) {
        return new Promise((resolve, reject) => {
            var me = this;
            var tablename = '';
            me.counter = 0;
            if (table) {
                tablename = table['strTableName'];
            }
            if (createAll == true) {
                var refresh = function () {
                    if (me.counter >= 74) { //total number of tables x 2
                        me.counter = 0;
                        ;
                        clearInterval(me.refreshTableInterval);
                        console.log('+++++++ TABLE DROP and CREATE +++++++++');
                        resolve(me);
                    }
                };
                me.refreshTableInterval = setInterval(function () { refresh(); }, 500);
            }
            // ++++++++++++++++++
            // +++++ TABLES +++++
            // ++++++++++++++++++
            // #1
            if (tablename == 'tblARCustomer' || createAll == true) {
                me.dropTable(new _models_tblARCustomer__WEBPACK_IMPORTED_MODULE_3__.ARCustomer()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblARCustomer__WEBPACK_IMPORTED_MODULE_3__.ARCustomer()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #2
            if (tablename == 'tblCategoryTax' || createAll == true) {
                me.dropTable(new _models_tblCategoryTax__WEBPACK_IMPORTED_MODULE_4__.CategoryTax()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblCategoryTax__WEBPACK_IMPORTED_MODULE_4__.CategoryTax()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #3
            if (tablename == 'tblCategoryTaxExemption' || createAll == true) {
                me.dropTable(new _models_tblCategoryTaxExemption__WEBPACK_IMPORTED_MODULE_5__.CategoryTaxExemption()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblCategoryTaxExemption__WEBPACK_IMPORTED_MODULE_5__.CategoryTaxExemption()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #4
            if (tablename == 'tblContractExport' || createAll == true) {
                me.dropTable(new _models_tblContractExport__WEBPACK_IMPORTED_MODULE_6__.ContractExport()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblContractExport__WEBPACK_IMPORTED_MODULE_6__.ContractExport()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #5
            if (tablename == 'tblCustomerSpecialPricing' || createAll == true) {
                me.dropTable(new _models_tblCustomerSpecialPricing__WEBPACK_IMPORTED_MODULE_7__.CustomerSpecialPricing()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblCustomerSpecialPricing__WEBPACK_IMPORTED_MODULE_7__.CustomerSpecialPricing()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #6
            if (tablename == 'tblCustomerTaxExemption' || createAll == true) {
                me.dropTable(new _models_tblCustomerTaxExemption__WEBPACK_IMPORTED_MODULE_9__.CustomerTaxExemption()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblCustomerTaxExemption__WEBPACK_IMPORTED_MODULE_9__.CustomerTaxExemption()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #7
            if (tablename == 'tblEntityLocation' || createAll == true) {
                me.dropTable(new _models_tblEntityLocation__WEBPACK_IMPORTED_MODULE_10__.EntityLocation()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblEntityLocation__WEBPACK_IMPORTED_MODULE_10__.EntityLocation()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #8
            if (tablename == 'tblFullTax' || createAll == true) {
                me.dropTable(new _models_tblFullTax__WEBPACK_IMPORTED_MODULE_11__.FullTax()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblFullTax__WEBPACK_IMPORTED_MODULE_11__.FullTax()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #9
            if (tablename == 'tblInventoryItem' || createAll == true) {
                me.dropTable(new _models_tblInventoryItem__WEBPACK_IMPORTED_MODULE_12__.InventoryItem()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblInventoryItem__WEBPACK_IMPORTED_MODULE_12__.InventoryItem()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #10
            if (tablename == 'tblMBILCompanyPreference' || createAll == true) {
                me.dropTable(new _models_tblMBILCompanyPreference__WEBPACK_IMPORTED_MODULE_13__.MBILCompanyPreference()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblMBILCompanyPreference__WEBPACK_IMPORTED_MODULE_13__.MBILCompanyPreference()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #11
            if (tablename == 'tblMBILOrder' || createAll == true) {
                me.dropTable(new _models_tblMBILOrder__WEBPACK_IMPORTED_MODULE_14__.MBILOrder()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblMBILOrder__WEBPACK_IMPORTED_MODULE_14__.MBILOrder()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #12
            if (tablename == 'tblMBILOrderItem' || createAll == true) {
                me.dropTable(new _models_tblMBILOrderItem__WEBPACK_IMPORTED_MODULE_15__.MBILOrderItem()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblMBILOrderItem__WEBPACK_IMPORTED_MODULE_15__.MBILOrderItem()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #13
            if (tablename == 'tblMBILOrderTaxCode' || createAll == true) {
                me.dropTable(new _models_tblMBILOrderTaxCode__WEBPACK_IMPORTED_MODULE_16__.MBILOrderTaxCode()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblMBILOrderTaxCode__WEBPACK_IMPORTED_MODULE_16__.MBILOrderTaxCode()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #14
            if (tablename == 'tblSMLocation' || createAll == true) {
                me.dropTable(new _models_tblSMLocation__WEBPACK_IMPORTED_MODULE_17__.SMLocation()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblSMLocation__WEBPACK_IMPORTED_MODULE_17__.SMLocation()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #15
            if (tablename == 'tblSMTerm' || createAll == true) {
                me.dropTable(new _models_tblSMTerm__WEBPACK_IMPORTED_MODULE_18__.SMTerm()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblSMTerm__WEBPACK_IMPORTED_MODULE_18__.SMTerm()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #16
            if (tablename == 'tblSMTruck' || createAll == true) {
                me.dropTable(new _models_tblSMTruck__WEBPACK_IMPORTED_MODULE_19__.SMTruck()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblSMTruck__WEBPACK_IMPORTED_MODULE_19__.SMTruck()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #17
            if (tablename == 'tblTMDeliveryHistory' || createAll == true) {
                me.dropTable(new _models_tblTMDeliveryHistory__WEBPACK_IMPORTED_MODULE_20__.TMDeliveryHistory()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblTMDeliveryHistory__WEBPACK_IMPORTED_MODULE_20__.TMDeliveryHistory()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #18
            if (tablename == 'tblTMSite' || createAll == true) {
                me.dropTable(new _models_tblTMSite__WEBPACK_IMPORTED_MODULE_21__.TMSite()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblTMSite__WEBPACK_IMPORTED_MODULE_21__.TMSite()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #19
            if (tablename == 'tblTMSiteDevice' || createAll == true) {
                me.dropTable(new _models_tblTMSiteDevice__WEBPACK_IMPORTED_MODULE_22__.TMSiteDevice()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblTMSiteDevice__WEBPACK_IMPORTED_MODULE_22__.TMSiteDevice()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #20
            if (tablename == 'tblSMPaymentMethod' || createAll == true) {
                me.dropTable(new _models_tblSMPaymentMethod__WEBPACK_IMPORTED_MODULE_23__.SMPaymentMethod()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblSMPaymentMethod__WEBPACK_IMPORTED_MODULE_23__.SMPaymentMethod()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // ++++++++++++++++++++++++++++
            // ++++++ REGULAR TABLE +++++++
            // ++++++++++++++++++++++++++++
            // #21
            if (tablename == 'ordersite' || createAll == true) {
                me.dropTable(new _models_ordersite__WEBPACK_IMPORTED_MODULE_39__.OrderSite()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_ordersite__WEBPACK_IMPORTED_MODULE_39__.OrderSite()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #22
            if (tablename == 'globalinfo' || createAll == true) {
                me.dropTable(new _models_globalinfo__WEBPACK_IMPORTED_MODULE_25__.GlobalInfo()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_globalinfo__WEBPACK_IMPORTED_MODULE_25__.GlobalInfo()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #23
            if (tablename == 'horsepipingcheck' || createAll == true) {
                me.dropTable(new _models_hosepipingcheck__WEBPACK_IMPORTED_MODULE_26__.HosepipingCheck()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_hosepipingcheck__WEBPACK_IMPORTED_MODULE_26__.HosepipingCheck()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #24
            if (tablename == 'invoice' || createAll == true) {
                me.dropTable(new _models_invoice__WEBPACK_IMPORTED_MODULE_27__.Invoice()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_invoice__WEBPACK_IMPORTED_MODULE_27__.Invoice()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #25
            if (tablename == 'invoiceitems' || createAll == true) {
                me.dropTable(new _models_invoiceitems__WEBPACK_IMPORTED_MODULE_28__.InvoiceItems()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_invoiceitems__WEBPACK_IMPORTED_MODULE_28__.InvoiceItems()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #26
            if (tablename == 'invoicetaxcodes' || createAll == true) {
                me.dropTable(new _models_invoicetaxcodes__WEBPACK_IMPORTED_MODULE_29__.InvoiceTaxCodes()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_invoicetaxcodes__WEBPACK_IMPORTED_MODULE_29__.InvoiceTaxCodes()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #27
            if (tablename == 'lineflushandtransfer' || createAll == true) {
                me.dropTable(new _models_lineflushandtransfer__WEBPACK_IMPORTED_MODULE_38__.LineFlushAndTransfer()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_lineflushandtransfer__WEBPACK_IMPORTED_MODULE_38__.LineFlushAndTransfer()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #28
            if (tablename == 'loadinventory' || createAll == true) {
                me.dropTable(new _models_loadinventory__WEBPACK_IMPORTED_MODULE_36__.LoadInventory()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_loadinventory__WEBPACK_IMPORTED_MODULE_36__.LoadInventory()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #29
            if (tablename == 'outofgas' || createAll == true) {
                me.dropTable(new _models_outofgas__WEBPACK_IMPORTED_MODULE_34__.OutOfGas()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_outofgas__WEBPACK_IMPORTED_MODULE_34__.OutOfGas()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #30
            if (tablename == 'payment' || createAll == true) {
                me.dropTable(new _models_payment__WEBPACK_IMPORTED_MODULE_35__.Payment()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_payment__WEBPACK_IMPORTED_MODULE_35__.Payment()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #31
            if (tablename == 'shift' || createAll == true) {
                me.dropTable(new _models_shift__WEBPACK_IMPORTED_MODULE_30__.Shift()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_shift__WEBPACK_IMPORTED_MODULE_30__.Shift()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #32
            if (tablename == 'syncdevicedata' || createAll == true) {
                me.dropTable(new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_31__.SyncDeviceData()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_31__.SyncDeviceData()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #33
            if (tablename == 'tankwagon' || createAll == true) {
                me.dropTable(new _models_tankwagon__WEBPACK_IMPORTED_MODULE_37__.Tankwagon()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tankwagon__WEBPACK_IMPORTED_MODULE_37__.Tankwagon()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #34
            if (tablename == 'user' || createAll == true) {
                me.dropTable(new _models_user__WEBPACK_IMPORTED_MODULE_32__.User()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_user__WEBPACK_IMPORTED_MODULE_32__.User()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #35
            if (tablename == 'vehicleinspection' || createAll == true) {
                me.dropTable(new _models_vehicleinspection__WEBPACK_IMPORTED_MODULE_33__.VehicleInspection()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_vehicleinspection__WEBPACK_IMPORTED_MODULE_33__.VehicleInspection()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #36
            if (tablename == 'tblSMCompanySetup' || createAll == true) {
                me.dropTable(new _models_tblSMCompanySetup__WEBPACK_IMPORTED_MODULE_24__.tblSMCompanySetup()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblSMCompanySetup__WEBPACK_IMPORTED_MODULE_24__.tblSMCompanySetup()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #37
            if (tablename == 'tblCustomerMultiLevelPricing' || createAll == true) {
                me.dropTable(new _models_tblCustomerMultiLevelPricing__WEBPACK_IMPORTED_MODULE_8__.CustomerMultiLevelPricing()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblCustomerMultiLevelPricing__WEBPACK_IMPORTED_MODULE_8__.CustomerMultiLevelPricing()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
            // #38
            if (tablename == 'tblMBILPDF' || createAll == true) {
                me.dropTable(new _models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_40__.tblMBILPDF()).then(res => {
                    console.log(res);
                    me.counter++;
                    me.createTable(new _models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_40__.tblMBILPDF()).then(res => {
                        console.log(res);
                        me.counter++;
                        console.log(tablename);
                        if (createAll == false) {
                            resolve(table);
                        }
                    });
                });
            }
        });
    }
    executeQuery(query) {
        var me = this;
        return new Promise((resolve, reject) => {
            if (me.db == undefined) {
                console.log('reconfigure sqlite');
                me.initiateSQLite().then(() => {
                    me.db.executeSql(query, [])
                        .then((data) => {
                        console.log(data);
                        console.log('Query successfully executed ' + query);
                        resolve(data);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                });
            }
            else {
                me.db.executeSql(query, [])
                    .then((data) => {
                    console.log(data);
                    console.log('Query successfully executed ' + query);
                    resolve(data);
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }
        });
    }
};
CommonSQL.ctorParameters = () => [
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_2__.SQLitePorter }
];
CommonSQL = (0,tslib__WEBPACK_IMPORTED_MODULE_41__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_42__.Injectable)()
], CommonSQL);



/***/ }),

/***/ 10487:
/*!************************************************************!*\
  !*** ./src/app/framework/brl/implementation/globalinfo.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalInfoBRL": () => (/* binding */ GlobalInfoBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _interface_iglobalinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/iglobalinfo */ 35394);





let GlobalInfoBRL = class GlobalInfoBRL extends _interface_iglobalinfo__WEBPACK_IMPORTED_MODULE_2__.IGlobalInfoBRL {
    constructor(common, db) {
        super(common, db);
        this.common = common;
        this.db = db;
    }
};
GlobalInfoBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
GlobalInfoBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], GlobalInfoBRL);



/***/ }),

/***/ 17848:
/*!*******************************************************!*\
  !*** ./src/app/framework/brl/implementation/order.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderBRL": () => (/* binding */ OrderBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _interface_iorder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/iorder */ 90036);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _models_tblMBILOrderItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/tblMBILOrderItem */ 140);
/* harmony import */ var _models_tblMBILOrderTaxCode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/tblMBILOrderTaxCode */ 58730);








let OrderBRL = class OrderBRL extends _interface_iorder__WEBPACK_IMPORTED_MODULE_2__.IOrderBRL {
    constructor(commonSql, db, loadingCtrl) {
        super(commonSql, db);
        this.commonSql = commonSql;
        this.db = db;
        this.loadingCtrl = loadingCtrl;
    }
    buildInvoice(detail, isCustomer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            const loading = yield me.loadingCtrl.create({
                message: 'Loading data...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            return new Promise((resolve, reject) => {
                loading.present();
                debugger;
                var orders = [], items = [], itemtaxcode = [], _query = '';
                if (isCustomer) {
                    _query = 'SELECT \'' + detail['strCustomerNumber'] + '\' as strCustomerNo, \'false\' as ysnSelected,* from tblMBILOrder left join tblMBILOrderItem on tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId left join tblTMSiteDevice on tblTMSiteDevice.intSiteID = tblMBILOrderItem.intSiteId where tblMBILOrder.strCustomerNumber = \'' + detail['strCustomerNumber'] + '\'';
                }
                else {
                    // _query = 'SELECT \'' + detail['strCustomerNumber'] + '\' as strCustomerNo, \'false\' as ysnSelected,* from tblMBILOrder left join tblMBILOrderItem on tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId left join (select * from tblTMSiteDevice LIMIT 1) deviceNew on deviceNew.intSiteID = tblMBILOrderItem.intSiteId where tblMBILOrder.intOrderId = \'' + detail['intOrderId'] + '\'';
                    _query = 'SELECT \'' + detail['strCustomerNumber'] + '\' as strCustomerNo, \'false\' as ysnSelected,* from tblMBILOrder left join (select * from tblMBILOrderItem WHERE intOrderId = \'' + detail['intOrderId'] + '\' LIMIT 1) orderItemNew on tblMBILOrder.intOrderId = orderItemNew.intOrderId left join (select * from tblTMSiteDevice WHERE intSiteID IN (select intSiteId from tblMBILOrderItem WHERE intOrderId = \'' + detail['intOrderId'] + '\' LIMIT 1) LIMIT 1) deviceNew on deviceNew.intSiteID = orderItemNew.intSiteId where tblMBILOrder.intOrderId = \'' + detail['intOrderId'] + '\'';
                    //_query = 'SELECT \'' + detail['strCustomerNumber'] + '\' as strCustomerNo, \'false\' as ysnSelected,* from tblMBILOrder left join tblMBILOrderItem on tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId left join (select DISTINCT * from device) deviceNew on deviceNew.intSiteId = tblMBILOrderItem.intSiteId  where tblMBILOrder.intOrderId = ' + detail['intOrderId'] + '';
                }
                console.log(_query);
                me.commonSql.getDataQuery(_query).then(res => {
                    orders = JSON.parse(JSON.stringify(res));
                    console.log('-- ++++++ BUILD ORDERS ++++++ ');
                    console.log(orders);
                    me.getByQuery('SELECT \'false\' as ysnSelected,  tblMBILOrderItem.dblPrice as price, tblMBILOrderItem.dblQuantity as quantity, 0 as ending, tblMBILOrderItem.*, ' +
                        'tblContractExport.intContractSeq, tblContractExport.dblCashPrice, tblContractExport.strContractNumber as strContractHeaderNumber ' +
                        'from tblMBILOrderItem left join tblContractExport on tblContractExport.strContractNumber = tblMBILOrderItem.strContractNumber and tblContractExport.intItemId = tblMBILOrderItem.intItemId where ' +
                        'tblMBILOrderItem.intOrderId = \'' + detail['intOrderId'] + '\' ').then(res => {
                        items = JSON.parse(JSON.stringify(res));
                        console.log('items');
                        console.log(items);
                        var _itemList = '';
                        for (var x = 0; x <= items.length - 1; x++) {
                            _itemList = _itemList + items[x].intOrderItemId + '\', \'';
                        }
                        me.getByQuery('SELECT \'false\' as ysnSelected, 0 as dblTotalTax,* from tblMBILOrderTaxCode where ysnTaxExempt = \'false\' and intOrderItemId IN (\'' + _itemList + '0\')').then(res => {
                            itemtaxcode = JSON.parse(JSON.stringify(res));
                            console.log('taxcodes');
                            console.log(itemtaxcode);
                            // FINAL RECONSTRUCT
                            var _previousX = 0;
                            var _previousSiteId = 0;
                            for (var x = 0; x <= orders.length - 1; x++) {
                                for (var y = 0; y <= items.length - 1; y++) {
                                    if (orders[x].intOrderId == items[y].intOrderId) {
                                        // if(_previousSiteId != orders[x].intSiteId) {
                                        //     _previousX = x;
                                        // }
                                        if (itemtaxcode.length > 0) {
                                            var _taxcodes = [];
                                            for (var z = 0; z <= itemtaxcode.length - 1; z++) {
                                                if (items[y].intOrderItemId == itemtaxcode[z].intOrderItemId) {
                                                    _taxcodes.push(itemtaxcode[z]);
                                                }
                                            }
                                            if (y > 0) {
                                                items[y]['tblOrderTaxCode'] = [];
                                                items[y]['tblOrderTaxCode'] = _taxcodes;
                                                orders[x]['tblOrderItem'].push(items[y]);
                                            }
                                            else {
                                                orders[x]['tblOrderItem'] = [];
                                                items[y]['tblOrderTaxCode'] = [];
                                                items[y]['tblOrderTaxCode'] = _taxcodes;
                                                orders[x]['tblOrderItem'].push(items[y]);
                                            }
                                        }
                                        else if (y > 0) {
                                            items[y]['tblOrderTaxCode'] = [];
                                            orders[x]['tblOrderItem'].push(items[y]);
                                        }
                                        else {
                                            // remove applied tax by default
                                            orders[x]['tblOrderItem'] = [];
                                            items[y]['tblOrderTaxCode'] = [];
                                            orders[x]['tblOrderItem'].push(items[y]);
                                        }
                                        // // remove applied tax by default
                                        // orders[_previousX]['tblOrderItem'] = [];
                                        // items[y]['tblOrderTaxCode'] = [];
                                        // orders[_previousX]['tblOrderItem'].push(items[y]);
                                    }
                                    _previousSiteId = items[x].intSiteId;
                                }
                                _previousSiteId = orders[x].intSiteId;
                            }
                            console.log(orders);
                            loading.dismiss();
                            var _finalOrders = [];
                            for (var x = 0; x <= orders.length - 1; x++) {
                                if (orders[x]['tblOrderItem']) {
                                    _finalOrders.push(orders[x]);
                                }
                            }
                            orders = _finalOrders;
                            console.log(orders);
                            resolve(orders);
                        }, err => {
                            console.log(err);
                            loading.dismiss();
                        });
                    }, err => {
                        console.log(err);
                        loading.dismiss();
                    });
                }, err => {
                    console.log(err);
                    loading.dismiss();
                });
            });
        });
    }
    buildInvoiceNoOrder(customerId, entityId, locationId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            const loading = yield this.loadingCtrl.create({
                message: 'Loading data...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            return new Promise((resolve, reject) => function () {
                return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
                    loading.present();
                    var _invoice = [];
                    var _orderId = Math.floor(Math.random() * (999999999 - 1) + 1);
                    var _query = 'SELECT \'' + customerId + '\' as strCustomerNo, \'false\' as ysnSelected, tblTMSite.strDescription as strSiteDescription, ' +
                        'intConsumptionSiteMobileId as intOrderItemMobileId, ' + _orderId + ' as intOrderId, * from tblTMSite ' +
                        'left join tblTMSiteDevice on tblTMSiteDevice.intSiteId = tblTMSite.intSiteId where tblTMSite.intEntityId = \'' + entityId + '\'';
                    console.log(_query);
                    me.getByQuery(_query).then(res => {
                        var _sites = JSON.parse(JSON.stringify(res));
                        console.log('sites');
                        console.log(_sites);
                        var _itemList = '\'';
                        var _siteList = '';
                        for (var x = 0; x <= _sites.length - 1; x++) {
                            _itemList = _itemList + _sites[x].strItemNo + '\', \'';
                            _siteList = _siteList + _sites[x].intSiteId + ', ';
                        }
                        _itemList = _itemList.replace(/null, /g, '');
                        _siteList = _siteList.replace(/null, /g, '');
                        // var _order = new Order();            
                        // _order.strCustomerNumber = customerId; //detail['strCustomerNumber'] as strCustomerNo, \'false\' as ysnSelected
                        // _order['strCustomerNo'] = customerId;
                        // _order['ysnSelected'] = 'false';
                        // _order['strSiteDescription'] = _sites['strSiteDescription'];
                        // _order['strSiteAddress'] = _sites['strSiteAddress'];
                        // _order['strSerialNumber'] = _sites['strSerialNumber'];
                        // _order['dblTankCapacity'] = _sites['dblTankCapacity'];
                        // _query = 'SELECT \'false\' as ysnSelected, item.dblSalePrice as price, 0 as quantity, 0 as ending, contractheader.strContractNumber as strContractHeaderNumber, * from contractheader left join item on item.intItemId = tblContractExport.intItemId where contractheader.intEntityId = ' + entityId; //left join contractdetail on tblContractExport.intContractHeaderId = contractheader.intContractHeaderId 
                        _query = 'SELECT \'false\' as ysnSelected, item.dblSalePrice as price, 0 as quantity, 0 as ending, \'\' as strContractHeaderNumber, 1 as intOrderMobileId, ' + _orderId + ' as intOrderId, * from tblInventoryItem where strItemNo IN (' + _itemList + '0\')';
                        console.log(_query);
                        me.getByQuery(_query).then(res => {
                            var _items = JSON.parse(JSON.stringify(res));
                            console.log('items');
                            console.log(_items);
                            if (_items.length > 0) {
                                _query = 'SELECT \'false\' as ysnSelected, 0 as dblTotalTax,1 as intInvoiceTaxCodeMobileId, ' + _orderId + ' as intOrderId, * from applicabletaxcode where strItemNo IN (' + _itemList + '0\') and intSiteId IN (' + _siteList + '0) and intEntityId = \'' + entityId + '\'';
                                console.log(_query);
                                me.getByQuery(_query).then(res => {
                                    var _itemtaxcode = JSON.parse(JSON.stringify(res));
                                    console.log('taxcodes');
                                    console.log(_itemtaxcode);
                                    // FINAL RECONSTRUCT
                                    for (var x = 0; x <= _sites.length - 1; x++) {
                                        for (var y = 0; y <= _items.length - 1; y++) {
                                            if (_sites[x].strItemNo == _items[y].strItemNo) {
                                                if (_itemtaxcode.length > 0) {
                                                    var _taxcodes = [];
                                                    for (var z = 0; z <= _itemtaxcode.length - 1; z++) {
                                                        if (_items[y].strItemNo == _itemtaxcode[z].strItemNo && _sites[x].intSiteNumber == _itemtaxcode[z].intSiteNumber) { //&& _items[y].intSiteId == _itemtaxcode[z].intSiteId && _itemtaxcode[z].intEntityId == entityId
                                                            // TAX CODE
                                                            var _orderitemtax = new _models_tblMBILOrderTaxCode__WEBPACK_IMPORTED_MODULE_4__.MBILOrderTaxCode();
                                                            _orderitemtax['dblAdjustedTax'] = 0;
                                                            _orderitemtax['ysnSelected'] = 'false';
                                                            _orderitemtax['dblTotalTax'] = 0;
                                                            _orderitemtax['dblAdjustedTax'] = _items[y]['dblAdjustedTax'];
                                                            _orderitemtax['dblBaseAdjustedTax'] = _items[y]['dblBaseAdjustedTax'];
                                                            _orderitemtax['dblExemptionPercent'] = _items[y]['dblExemptionPercent'];
                                                            _orderitemtax['dblRate'] = _itemtaxcode[z]['dblRate'];
                                                            _orderitemtax['dblTax'] = _items[y]['dblTax'];
                                                            _orderitemtax['dblTotalTax'] = _items[y]['dblTotalTax'];
                                                            _orderitemtax['intItemId'] = _items[y]['intItemId'];
                                                            _orderitemtax['intTaxClassId'] = _items[y]['intTaxClassId'];
                                                            _orderitemtax['intTaxCodeId'] = _itemtaxcode[z]['intTaxCodeId'];
                                                            _orderitemtax['intTaxGroupId'] = _items[y]['intTaxGroupId'];
                                                            _orderitemtax['intSalesTaxAccountId'] = _items[y]['intSalesTaxAccountId'];
                                                            _orderitemtax['strCalculationMethod'] = _itemtaxcode[z]['strCalculationMethod'];
                                                            _orderitemtax['strTaxCode'] = _itemtaxcode[z]['strTaxCode'];
                                                            _orderitemtax['strTaxGroup'] = _items[y]['strTaxGroup'];
                                                            _orderitemtax['ysnTaxExempt'] = _items[y]['ysnTaxExempt'];
                                                            _orderitemtax['ysnTaxOnly'] = _items[y]['ysnTaxOnly'];
                                                            _orderitemtax['strNotes'] = _items[y]['strNotes'];
                                                            _orderitemtax['intOrderId'] = _items[y]['intOrderId'];
                                                            _taxcodes.push(_orderitemtax);
                                                            // _itemtaxcode[z].intInvoiceTaxCodeMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+z);
                                                            // _itemtaxcode[z].intSiteMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+z);                                
                                                            // _itemtaxcode[z].intInvoiceItemId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+z);
                                                            // _taxcodes.push(_itemtaxcode[z]);
                                                        }
                                                    }
                                                    // dblDefaultFull: 80
                                                    // dblSalePrice: 0
                                                    // ending: 0
                                                    // intBundleItemId: ""
                                                    // intItemId: 3
                                                    // intItemLocationId: 587
                                                    // intItemMobileId: 97538459
                                                    // intOrderId: 605847409
                                                    // intOrderMobileId: 239614467
                                                    // price: 0
                                                    // quantity: 0
                                                    // strBundleItemNo: ""
                                                    // strContractHeaderNumber: ""
                                                    // strDescription: "Propane"
                                                    // strItemNo: "LPG"
                                                    // strType: "Inventory"
                                                    // tblOrderTaxCode: [{…}]
                                                    // ysnAvailableTM: "true"
                                                    // ysnSelected: false
                                                    // ITEMS
                                                    var _orderitem = new _models_tblMBILOrderItem__WEBPACK_IMPORTED_MODULE_3__.MBILOrderItem();
                                                    _orderitem['ysnSelected'] = false;
                                                    _orderitem['price'] = null;
                                                    _orderitem['quantity'] = 0;
                                                    _orderitem['ending'] = 0;
                                                    _orderitem['strContractHeaderNumber'] = null;
                                                    _orderitem['dblAvailableQty'] = _items[y]['dblAvailableQty'] || 0;
                                                    _orderitem['dblCashPrice'] = _items[y]['dblCashPrice'] || 0;
                                                    _orderitem['dblPrice'] = _items[y]['dblSalePrice'] || 0;
                                                    _orderitem['dblQuantity'] = _items[y]['dblQuantity'] || 0;
                                                    _orderitem['dblTotal'] = _items[y]['dblTotal'] || 0;
                                                    _orderitem['intContractHeaderId'] = _items[y]['intContractHeaderId'] || null;
                                                    _orderitem['intContractDetailId'] = _items[y]['intContractDetailId'] || null;
                                                    _orderitem['intContractSeq'] = _items[y]['intContractSeq'] || null;
                                                    _orderitem['intDriverId'] = _items[y]['intDriverId'] || null;
                                                    _orderitem['intItemId'] = _items[y]['intItemId'] || null;
                                                    _orderitem['intItemUOMId'] = _items[y]['intItemUOMId'] || null;
                                                    _orderitem['intRouteId'] = _items[y]['intRouteId'] || null;
                                                    _orderitem['intEntityId'] = _items[y]['intEntityId'] || null;
                                                    _orderitem['intSiteId'] = _sites[x]['intSiteId'] || null;
                                                    _orderitem['intSiteNumber'] = _sites[x]['intSiteNumber'] || null;
                                                    _orderitem['intTermId'] = _items[y]['intTermId'] || null;
                                                    _orderitem['strItemNo'] = _items[y]['strItemNo'] || '';
                                                    _orderitem['strItemDescription'] = _items[y]['strDescription'] || '';
                                                    _orderitem['strSiteDescription'] = _sites[x]['strDescription'] || '';
                                                    _orderitem['strState'] = _sites[x]['strState'] || '';
                                                    _orderitem['strTerm'] = _items[y]['strTerm'] || '';
                                                    _orderitem['intOrderId'] = _items[y]['intOrderId'] || null;
                                                    _orderitem['tblOrderTaxCode'] = _taxcodes;
                                                    console.log(_taxcodes);
                                                    if (_taxcodes.length > 1) {
                                                        _orderitem['ysnHavingApplicableTax'] = true;
                                                    }
                                                    else {
                                                        _orderitem['ysnHavingApplicableTax'] = false;
                                                    }
                                                    // _items[y]['tblOrderTaxCode'] = _taxcodes;                                            
                                                    // _items[y].intItemMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+100);
                                                    // _items[y].intOrderMobileId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+100);
                                                    // _items[y].intOrderId = Math.floor(Math.random() * (999999999 - 1) + 1) + (x+y+100);
                                                    _sites[x]['tblOrderItem'] = [];
                                                    _sites[x]['tblOrderItem'].push(_orderitem);
                                                }
                                                else {
                                                    _sites[x]['tblOrderItem'] = [];
                                                    _sites[x]['tblOrderItem'].push(_orderitem);
                                                }
                                            }
                                        }
                                    }
                                    console.log('orders');
                                    console.log(_sites);
                                    loading.dismiss();
                                    resolve(_sites);
                                }, err => {
                                    console.log(err);
                                    loading.dismiss();
                                });
                            }
                            else {
                                _query = 'SELECT \'false\' as ysnSelected, item.dblSalePrice as price, 0 as quantity, 0 as ending, \'\' as strContractHeaderNumber, * from item where strItemNo IN (' + _itemList + '0\')';
                                console.log(_query);
                                me.getByQuery(_query).then(res => {
                                    var _items = JSON.parse(JSON.stringify(res));
                                    console.log('items');
                                    console.log(_items);
                                    _query = 'SELECT \'false\' as ysnSelected, 0 as dblTotalTax,* from applicabletaxcode where strItemNo IN (' + _itemList + '0\') and intSiteId IN (' + _siteList + ') and intEntityId = \'' + entityId + '\'';
                                    console.log(_query);
                                    me.getByQuery(_query).then(res => {
                                        var _itemtaxcode = JSON.parse(JSON.stringify(res));
                                        console.log('taxcodes');
                                        console.log(_itemtaxcode);
                                        // FINAL RECONSTRUCT
                                        for (var x = 0; x <= _sites.length - 1; x++) {
                                            for (var y = 0; y <= _items.length - 1; y++) {
                                                if (_sites[x].intOrderId == _items[y].intOrderId) {
                                                    if (_itemtaxcode.length > 0) {
                                                        var _taxcodes = [];
                                                        for (var z = 0; z <= _itemtaxcode.length - 1; z++) {
                                                            if (_items[y].strItemNo == _itemtaxcode[z].strItemNo && _items[y].intSiteId == _itemtaxcode[z].intSiteId && _itemtaxcode[z].intEntityId == entityId) {
                                                                // var _orderitemtax = new OrderTaxCode();
                                                                // _orderitemtax.dblAdjustedTax = 0; //false as ysnSelected, 0 as dblTotalTax
                                                                // _orderitemtax['ysnSelected'] = 'false';
                                                                // _orderitemtax['dblTotalTax'] = 0;
                                                                // _orderitemtax['dblAdjustedTax'] = _items['dblAdjustedTax'];
                                                                // _orderitemtax['dblBaseAdjustedTax'] = _items['dblBaseAdjustedTax'];
                                                                // _orderitemtax['dblExemptionPercent'] =  _items['dblExemptionPercent'];
                                                                // _orderitemtax['dblRate'] =  _items['dblRate'];
                                                                // _orderitemtax['dblTax'] =  _items['dblTax'];
                                                                // _orderitemtax['dblTotalTax'] =  _items['dblTotalTax'];
                                                                // _orderitemtax['intItemId'] =  _items['intItemId'];
                                                                // _orderitemtax['intTaxClassId'] =  _items['intTaxClassId'];
                                                                // _orderitemtax['intTaxCodeId'] =  _items['intTaxCodeId'];
                                                                // _orderitemtax['intTaxGroupId'] =  _items['intTaxGroupId'];
                                                                // _orderitemtax['intSalesTaxAccountId'] =  _items['intSalesTaxAccountId'];
                                                                // _orderitemtax['strCalculationMethod'] =  _items['strCalculationMethod'];
                                                                // _orderitemtax['strTaxCode'] =  _items['strTaxCode'];
                                                                // _orderitemtax['strTaxGroup'] =  _items['strTaxGroup'];
                                                                // _orderitemtax['ysnTaxExempt'] =  _items['ysnTaxExempt'];
                                                                // _orderitemtax['ysnTaxOnly'] =  _items['ysnTaxOnly'];
                                                                // _orderitemtax['strNotes'] =  _items['strNotes'];
                                                                _taxcodes.push(_itemtaxcode[z]);
                                                            }
                                                        }
                                                        _items[y]['tblOrderTaxCode'] = _taxcodes;
                                                        _sites[x]['tblOrderItem'] = [];
                                                        _sites[x]['tblOrderItem'].push(_items[y]);
                                                    }
                                                    else {
                                                        _sites[x]['tblOrderItem'] = [];
                                                        _sites[x]['tblOrderItem'].push(_items[y]);
                                                    }
                                                }
                                            }
                                        }
                                        console.log(_sites);
                                        loading.dismiss();
                                        resolve(_sites);
                                    }, err => {
                                        console.log(err);
                                        loading.dismiss();
                                    });
                                }, err => {
                                    console.log(err);
                                    loading.dismiss();
                                });
                            }
                        }, err => {
                            console.log(err);
                            loading.dismiss();
                        });
                    })
                        .catch(e => {
                        console.log(e);
                    });
                });
            });
        });
    }
};
OrderBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController }
];
OrderBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()
], OrderBRL);



/***/ }),

/***/ 1447:
/*!****************************************************************!*\
  !*** ./src/app/framework/brl/implementation/syncdevicedata.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncDeviceDataBRL": () => (/* binding */ SyncDeviceDataBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _interface_isyncdevicedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/isyncdevicedata */ 31205);
/* harmony import */ var _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/syncdevicedata */ 72681);






let SyncDeviceDataBRL = class SyncDeviceDataBRL extends _interface_isyncdevicedata__WEBPACK_IMPORTED_MODULE_2__.ISyncDeviceDataBRL {
    constructor(common, db) {
        super(common, db);
        this.common = common;
        this.db = db;
    }
    defaultRecord() {
        var me = this;
        return new Promise((resolve, reject) => {
            var records = [];
            console.log('SYNC DEVICE => defaultRecord');
            var record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 1;
            record.strDisplayName = 'AR Customer';
            record.strTableName = 'tblARCustomer';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 2;
            record.strDisplayName = 'Category Tax';
            record.strTableName = 'tblCategoryTax';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 3;
            record.strDisplayName = 'Category Tax Exemption';
            record.strTableName = 'tblCategoryTaxExemption';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 4;
            record.strDisplayName = 'Contract Export';
            record.strTableName = 'tblContractExport';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 5;
            record.strDisplayName = 'Customer Special Pricing';
            record.strTableName = 'tblCustomerSpecialPricing';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 6;
            record.strDisplayName = 'Customer Tax Exemption';
            record.strTableName = 'tblCustomerTaxExemption';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 7;
            record.strDisplayName = 'Entity Location';
            record.strTableName = 'tblEntityLocation';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 8;
            record.strDisplayName = 'Full Tax';
            record.strTableName = 'tblFullTax';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 9;
            record.strDisplayName = 'Inventory Item';
            record.strTableName = 'tblInventoryItem';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 10;
            record.strDisplayName = 'Company Preference';
            record.strTableName = 'tblMBILCompanyPreference';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 11;
            record.strDisplayName = 'MBIL Order';
            record.strTableName = 'tblMBILOrder';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 12;
            record.strDisplayName = 'MBIL Order Item';
            record.strTableName = 'tblMBILOrderItem';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 13;
            record.strDisplayName = 'MBIL Order Tax Code';
            record.strTableName = 'tblMBILOrderTaxCode';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 14;
            record.strDisplayName = 'SM Location';
            record.strTableName = 'tblSMLocation';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 15;
            record.strDisplayName = 'SM Term';
            record.strTableName = 'tblSMTerm';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 16;
            record.strDisplayName = 'SM Truck';
            record.strTableName = 'tblSMTruck';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 17;
            record.strDisplayName = 'TM Delivery History';
            record.strTableName = 'tblTMDeliveryHistory';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 18;
            record.strDisplayName = 'TM Site';
            record.strTableName = 'tblTMSite';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 19;
            record.strDisplayName = 'TM Site Device';
            record.strTableName = 'tblTMSiteDevice';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            // ++++++++++++++++++++++++++++
            // ++++++ REGULAR TABLE +++++++
            // ++++++++++++++++++++++++++++
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 20;
            record.strDisplayName = 'Global Info';
            record.strTableName = 'globalinfo';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 21;
            record.strDisplayName = 'Hosepiping Check';
            record.strTableName = 'hosepipingcheck';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 22;
            record.strDisplayName = 'Invoice';
            record.strTableName = 'invoice';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 23;
            record.strDisplayName = 'Invoice Item';
            record.strTableName = 'invoiceitems';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 24;
            record.strDisplayName = 'Invoice Item Tax';
            record.strTableName = 'invoicetaxcodes';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 25;
            record.strDisplayName = 'Shift';
            record.strTableName = 'shift';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 26;
            record.strDisplayName = 'User';
            record.strTableName = 'user';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 27;
            record.strDisplayName = 'Vehicle Inspection';
            record.strTableName = 'vehicleinspection';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 28;
            record.strDisplayName = 'Out Of Gas';
            record.strTableName = 'outofgas';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 29;
            record.strDisplayName = 'Payment';
            record.strTableName = 'payment';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 30;
            record.strDisplayName = 'Load Inventory';
            record.strTableName = 'loadinventory';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 31;
            record.strDisplayName = 'Tank Wagon';
            record.strTableName = 'tankwagon';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 32;
            record.strDisplayName = 'Line Flush And Transfer';
            record.strTableName = 'lineflushandtransfer';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 33;
            record.strDisplayName = 'Order Site';
            record.strTableName = 'ordersite';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 34;
            record.strDisplayName = 'Company Setup';
            record.strTableName = 'tblSMCompanySetup';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 35;
            record.strDisplayName = 'Customer Multi Level Pricing';
            record.strTableName = 'tblCustomerMultiLevelPricing';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 36;
            record.strDisplayName = 'PDF Files';
            record.strTableName = 'tblMBILPDF';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = false;
            record.ysnIncludeSyncAll = false;
            records.push(record);
            record = new _models_syncdevicedata__WEBPACK_IMPORTED_MODULE_3__.SyncDeviceData();
            record.intTableStatus = 37;
            record.strDisplayName = 'Payment Method';
            record.strTableName = 'tblSMPaymentMethod';
            record.ysnTableWithErrors = false;
            record.dtmTableLastUpdated = '(no data)';
            record.intTotal = 0;
            record.ysnVisible = true;
            record.ysnIncludeSyncAll = true;
            records.push(record);
            var _data = [];
            _data['data'] = records;
            console.log(' +++ DEFAULT SYNC DATA +++ ');
            console.log(_data);
            me.addBulk(record, records).then(res => {
                resolve(res);
            }).catch(err => {
                reject(err);
            });
        });
    }
};
SyncDeviceDataBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
SyncDeviceDataBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], SyncDeviceDataBRL);



/***/ }),

/***/ 35394:
/*!********************************************************!*\
  !*** ./src/app/framework/brl/interface/iglobalinfo.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IGlobalInfoBRL": () => (/* binding */ IGlobalInfoBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/base */ 58296);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);





let IGlobalInfoBRL = class IGlobalInfoBRL extends _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__.Base {
    constructor(common, db) {
        super(common, db);
        this.common = common;
        this.db = db;
    }
};
IGlobalInfoBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
IGlobalInfoBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], IGlobalInfoBRL);



/***/ }),

/***/ 90036:
/*!***************************************************!*\
  !*** ./src/app/framework/brl/interface/iorder.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IOrderBRL": () => (/* binding */ IOrderBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/base */ 58296);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);





let IOrderBRL = class IOrderBRL extends _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__.Base {
    constructor(common, db) {
        super(common, db);
        this.common = common;
        this.db = db;
    }
};
IOrderBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
IOrderBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], IOrderBRL);



/***/ }),

/***/ 31205:
/*!************************************************************!*\
  !*** ./src/app/framework/brl/interface/isyncdevicedata.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ISyncDeviceDataBRL": () => (/* binding */ ISyncDeviceDataBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/base */ 58296);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);





let ISyncDeviceDataBRL = class ISyncDeviceDataBRL extends _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__.Base {
    constructor(common, db) {
        super(common, db);
        this.common = common;
        this.db = db;
    }
};
ISyncDeviceDataBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
ISyncDeviceDataBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], ISyncDeviceDataBRL);



/***/ }),

/***/ 68439:
/*!************************************************!*\
  !*** ./src/app/framework/models/globalinfo.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalInfo": () => (/* binding */ GlobalInfo)
/* harmony export */ });
class GlobalInfo {
    constructor() {
        this.mapping = {
            intGlobal: 'pk',
            intUserMobileId: 'number',
            intUserId: 'number',
            strUserName: 'string',
            strPassword: 'string',
            strFullName: 'string',
            intDriverNumber: 'number',
            intLocation: 'number',
            strLocation: 'string',
            strLocationNumber: 'string',
            ysnShiftOnGoing: 'boolean',
            intShiftId: 'number',
            intShiftCounter: 'number',
            dtmStartShiftDate: 'date',
            dtmEndShiftDate: 'date',
            intTruckId: 'number',
            strTruckNumber: 'string',
            strTruckInspectionPDF: 'string',
            strHosePipingCheckPDF: 'string',
            strReviewShiftPDF: 'string',
            dtmReceivedOrders: 'date',
            dtmReceivedFullData: 'date',
            dtmLoadInventory: 'date',
            dtmTruckInspection: 'date',
            dtmHosePipingCheck: 'date',
            dblOdometerStart: 'number',
            dblOdometerEnd: 'number',
            dblTotalizer1Start: 'number',
            dblTotalizer2Start: 'number',
            dblTotalizer1End: 'number',
            dblTotalizer2End: 'number',
            strPresetType1: 'string',
            strPresetType2: 'string',
            strTotalOrderReceived: 'string',
            ContactParentId: 'number',
            CompanyName: 'string',
            ysnLogged: 'boolean'
        };
        this.tablename = 'globalinfo';
    }
}


/***/ }),

/***/ 57249:
/*!*****************************************************!*\
  !*** ./src/app/framework/models/hosepipingcheck.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HosepipingCheck": () => (/* binding */ HosepipingCheck)
/* harmony export */ });
class HosepipingCheck {
    constructor() {
        this.mapping = {
            intCheck: 'pk',
            ysnCheck1: 'boolean',
            ysnCheck2: 'boolean',
            ysnCheck3: 'boolean',
            ysnCheck4: 'boolean',
            ysnCheck5: 'boolean',
            ysnCheck6: 'boolean',
            ysnCheck7: 'boolean',
            ysnCheck8: 'boolean',
            ysnCheck9: 'boolean',
            ysnCheck10: 'boolean',
            ysnCheck11: 'boolean',
            ysnCheck12: 'boolean',
            ysnCheck13: 'boolean',
            ysnCheck14: 'boolean',
            ysnCheck15: 'boolean',
            ysnCheck16: 'boolean',
            ysnCheck17: 'boolean',
            ysnCheck18: 'boolean',
            ysnCheck19: 'boolean',
            ysnCheck20: 'boolean',
            ysnCheck21: 'boolean',
            ysnCheck22: 'boolean',
            strTruckNumber: 'string',
            strComments: 'string',
            strHoseAssemblyNumber: 'string'
        };
        this.tablename = 'horsepipingcheck';
    }
}


/***/ }),

/***/ 49412:
/*!*********************************************!*\
  !*** ./src/app/framework/models/invoice.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoice": () => (/* binding */ Invoice)
/* harmony export */ });
class Invoice {
    constructor() {
        this.mapping = {
            intInvoiceId: 'pk',
            strInvoiceNo: 'string',
            intOrderId: 'number',
            intEntityCustomerId: 'number',
            strCustomerNo: 'string',
            strCustomerName: 'string',
            intLocationId: 'number',
            strLocationName: 'string',
            strType: 'string',
            dtmDeliveryDate: 'string',
            dtmInvoiceDate: 'string',
            intDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string',
            intShiftId: 'number',
            intShiftNumber: 'number',
            strComments: 'string',
            strVoidComments: 'string',
            dblTotal: 'number',
            intTermId: 'number',
            strTerm: 'string',
            ysnPosted: 'boolean',
            ysnVoided: 'boolean',
            inti21InvoiceId: 'number',
            stri21InvoiceNo: 'string',
            intConcurrencyId: 'number',
            strStatus: 'string',
            intPaymentMethodId: 'number',
            strPaymentInfo: 'string',
            strLatitude: 'string',
            strLongitude: 'string',
            strSignature: 'string',
            // notmapped
            ysnSendToOffice: 'boolean',
            dtmSent: 'date',
            strPaymentMethod: 'string'
        };
        this.tablename = 'invoice';
    }
}


/***/ }),

/***/ 16726:
/*!**************************************************!*\
  !*** ./src/app/framework/models/invoiceitems.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceItems": () => (/* binding */ InvoiceItems)
/* harmony export */ });
class InvoiceItems {
    constructor() {
        // intInvoiceDetailMobileId: number;
        // intInvoiceMobileId: number;
        // intInvoiceId: number;
        // intConsumptionId: number;
        // strConsumptionId: string;
        // intOrderId: number;
        // strOrderId: string;
        // intItemId: number;
        // strItemId: string;
        // dblPrice: number;
        // dblQuantity: number;
        // dblTotal: number;
        // dblEndingPercentFull: number;
        // ysnMetered: boolean;
        // dblTotalizerReading: number;
        // intContractId: number;
        // intSequence: number;
        // ysnPriceChanged: boolean;
        // ysnContractChanged: boolean;
        this.mapping = {
            // intInvoiceDetailMobileId: 'pk',
            // intInvoiceMobileId: 'number',
            // intInvoiceId: 'number',
            // intConsumptionId: 'number',
            // strConsumptionId: 'string',
            // intOrderId: 'number',
            // strOrderId: 'string',
            // intItemId: 'number',
            // strItemId: 'string',
            // dblPrice: 'number',
            // dblQuantity: 'number',
            // dblTotal: 'number',
            // dblEndingPercentFull: 'number',
            // ysnMetered: 'boolean',
            // dblTotalizerReading: 'number',
            // intContractId: 'number',
            // intSequence: 'number',
            // ysnPriceChanged: 'boolean',
            // ysnContractChanged: 'boolean'
            intInvoiceItemMobileId: 'pk',
            intInvoiceId: 'number',
            strInvoiceNo: 'string',
            intOrderId: 'number',
            intEntityCustomerId: 'number',
            strCustomerNo: 'string',
            strCustomerName: 'string',
            intLocationId: 'number',
            strLocationName: 'string',
            strType: 'string',
            dtmDeliveryDate: 'date',
            dtmInvoiceDate: 'date',
            intDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string',
            intShiftId: 'number',
            intShiftNumber: 'number',
            strComments: 'string',
            dblTotal: 'number',
            intTermId: 'number',
            strTerm: 'string',
            ysnPosted: 'boolean',
            inti21InvoiceId: 'number',
            stri21InvoiceNo: 'string',
            intConcurrencyId: 'number',
            strStatus: 'string',
            intInvoiceSiteId: 'number',
            intSiteId: 'number',
            intSiteNumber: 'number',
            strSiteDescription: 'string',
            strSiteAddress: 'string',
            strCity: 'string',
            strState: 'string',
            strZipCode: 'string',
            strCountry: 'string',
            strSiteStatus: 'string',
            intInvoiceItemId: 'number',
            intItemId: 'number',
            strItemNo: 'string',
            strItemDescription: 'string',
            intItemUOMId: 'number',
            strUnitMeasure: 'string',
            dblQuantity: 'number',
            dblPrice: 'number',
            dblPercentageFull: 'number',
            intContractDetailId: 'number',
            strContractNumber: 'string',
            intContractSeq: 'number',
            inti21InvoiceDetailId: 'number',
            dblItemTotal: 'number',
            dblTaxTotal: 'number',
            //not mapped
            dblTankCapacity: 'number',
            ysnSelected: 'boolean',
            strSerialNumber: 'string',
            strOrderNumber: 'string',
            intEntityId: 'number',
            strCustomerNumber: 'string',
            ysnOutOfGas: 'boolean',
            intOrderItemMobileId: 'string',
            intTaxStateID: 'number',
            ysnTaxable: 'boolean'
        };
        this.tablename = 'invoiceitems';
    }
}


/***/ }),

/***/ 62988:
/*!*****************************************************!*\
  !*** ./src/app/framework/models/invoicetaxcodes.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceTaxCodes": () => (/* binding */ InvoiceTaxCodes)
/* harmony export */ });
class InvoiceTaxCodes {
    constructor() {
        // intInvoiceDetailTaxMobileId: number;
        // intInvoiceDetailMobileId: number;
        // intTaxCodeId: number;
        // dblAmount: number;
        this.mapping = {
            // intInvoiceDetailTaxMobileId: 'pk',
            // intInvoiceDetailMobileId: 'number',
            // intTaxCodeId: 'number',
            // dblAmount: 'number'
            intInvoiceTaxCodeMobileId: 'pk',
            intInvoiceTaxId: 'number',
            intInvoiceItemId: 'number',
            intItemId: 'number',
            intTransactionDetailTaxId: 'number',
            intInvoiceDetailId: 'number',
            intTaxGroupMasterId: 'number',
            intTaxGroupId: 'number',
            intTaxCodeId: 'number',
            intTaxClassId: 'number',
            strTaxableByOtherTaxes: 'string',
            strCalculationMethod: 'string',
            dblRate: 'number',
            dblExemptionPercent: 'number',
            dblTax: 'number',
            dblAdjustedTax: 'number',
            dblBaseAdjustedTax: 'number',
            intSalesTaxAccountId: 'number',
            ysnSeparateOnInvoice: 'boolean',
            ysnCheckoffTax: 'boolean',
            strTaxCode: 'string',
            ysnTaxExempt: 'boolean',
            ysnTaxOnly: 'boolean',
            ysnInvalidSetup: 'boolean',
            strTaxGroup: 'string',
            strNotes: 'string',
            intUnitMeasureId: 'number',
            strUnitMeasure: 'string',
            intDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string',
            //not mapped
            ysnSelected: 'boolean',
            intOrderId: 'number',
            dblTotalTax: 'number'
        };
        this.tablename = 'invoicetaxcodes';
    }
}


/***/ }),

/***/ 57866:
/*!**********************************************************!*\
  !*** ./src/app/framework/models/lineflushandtransfer.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LineFlushAndTransfer": () => (/* binding */ LineFlushAndTransfer)
/* harmony export */ });
class LineFlushAndTransfer {
    constructor() {
        this.mapping = {
            intLineMobileId: 'pk',
            intLineId: 'number',
            intItemId: 'number',
            strItemNo: 'string',
            strDescription: 'string',
            dblQuantity: 'number',
            strComment: 'string',
            intLocationId: 'number',
            strLocation: 'number'
        };
        this.tablename = 'lineflushandtransfer';
    }
}


/***/ }),

/***/ 72369:
/*!***************************************************!*\
  !*** ./src/app/framework/models/loadinventory.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadInventory": () => (/* binding */ LoadInventory)
/* harmony export */ });
class LoadInventory {
    constructor() {
        this.mapping = {
            intLoadInventoryMobileId: 'pk',
            intLocation: 'number',
            strLocation: 'string',
            intItemNumber: 'number',
            strItemNumber: 'string',
            strItemDescription: 'string',
            dblQuantityBefore: 'number',
            dblQuantityLoaded: 'number',
            dblQuantityReturned: 'number',
            dblQuantityAfter: 'number',
            dblEnding: 'number',
            strUnitMeasure: 'string',
            _showEnding: 'boolean',
        };
        this.tablename = 'loadinventory';
    }
}


/***/ }),

/***/ 80344:
/*!***********************************************!*\
  !*** ./src/app/framework/models/ordersite.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderSite": () => (/* binding */ OrderSite)
/* harmony export */ });
class OrderSite {
    constructor() {
        this.mapping = {
            intOrderSiteMobileId: 'pk',
            dblTankCapacity: 'number',
            dtmRequestedDate: "date",
            intConcurrencyId: 'number',
            intContractDetailId: 'number',
            intContractSeq: 'number',
            intDriverId: 'number',
            intEntityId: 'number',
            intFreightTermId: 'number',
            intLocationId: 'number',
            intMBILOrderId: 'number',
            intMBILOrderSiteId: 'number',
            intOrderId: 'number',
            intRouteId: 'number',
            intShipToId: 'number',
            intSiteId: 'number',
            intSiteNumber: 'number',
            intStopNumber: 'number',
            intTaxStateID: 'number',
            intTermId: 'number',
            intUserId: 'number',
            strClientID: 'string',
            strComments: 'string',
            strContractNumber: 'string',
            strCustomerNumber: 'string',
            strDriver: 'string',
            strLocation: 'string',
            strOrderNumber: 'string',
            strOrderStatus: 'string',
            strRouteNumber: 'string',
            strRowState: 'string',
            strSerialNumber: 'string',
            strSiteName: 'string',
            strTermId: 'string',
            strUser: 'string'
        };
        this.tablename = 'ordersite';
    }
}


/***/ }),

/***/ 44167:
/*!**********************************************!*\
  !*** ./src/app/framework/models/outofgas.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutOfGas": () => (/* binding */ OutOfGas)
/* harmony export */ });
class OutOfGas {
    constructor() {
        this.mapping = {
            intOutOfGasId: 'pk',
            intCustomerId: 'number',
            intSiteId: 'number',
            strCustomerNo: 'string',
            strCustomerName: 'string',
            strSiteNo: 'string',
            strSiteDescription: 'string',
            strSerialNo: 'string',
            dblCapacity: 'number',
            strTankDescription: 'string',
            strLeakTestStatus: 'string',
            dblPressureReading: 'number',
            dblMinutesHeld: 'number',
            ysnTaggedLocked: 'boolean',
            ysnCustomerNotified: 'boolean',
            ysnAppliancesLit: 'boolean',
            strNoted: 'string',
            strCustomerBillingAddressA: 'string',
            strCustomerBillingAddressB: 'string',
            strSiteAddressA: 'string',
            strSiteAddressB: 'string',
            strDriverNumber: 'string',
            dtmDate: 'date'
        };
        this.tablename = 'outofgas';
    }
}


/***/ }),

/***/ 10785:
/*!*********************************************!*\
  !*** ./src/app/framework/models/payment.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Payment": () => (/* binding */ Payment)
/* harmony export */ });
class Payment {
    constructor() {
        this.mapping = {
            intPaymentId: 'pk',
            strPaymentNo: 'string',
            intEntityCustomerId: 'number',
            strCustomerNo: 'string',
            strCustomerName: 'string',
            intLocationId: 'number',
            strLocationName: 'string',
            intEntityDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string',
            intShiftId: 'number',
            intShiftNumber: 'number',
            dtmDatePaid: 'string',
            dtmDateVoided: 'string',
            strMethod: 'string',
            strCheckNumber: 'string',
            dblPayment: 'number',
            strComments: 'string',
            strVoidComments: 'string',
            ysnPosted: 'boolean',
            ysnVoided: 'boolean',
            //notmapped
            ysnCompleted: 'boolean',
            ysnSendToOffice: 'boolean'
        };
        this.tablename = 'payment';
    }
}


/***/ }),

/***/ 87518:
/*!*******************************************!*\
  !*** ./src/app/framework/models/shift.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Shift": () => (/* binding */ Shift)
/* harmony export */ });
class Shift {
    constructor() {
        this.mapping = {
            intShiftMobileId: 'pk',
            intShiftId: 'number',
            dtmShiftDate: 'date',
            intDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string',
            intLocationId: 'number',
            strLocationName: 'string',
            intShiftNumber: 'number',
            dtmStartTime: 'date',
            dtmEndTime: 'date',
            strTruckNumber: 'string',
            intTruckId: 'number',
            intStartOdometer: 'number',
            intEndOdometer: 'number',
            dblFuelGallonsDelievered: 'number',
            dblFuelSales: 'number',
            intConcurrencyId: 'number'
        };
        this.tablename = 'shift';
    }
}


/***/ }),

/***/ 72681:
/*!****************************************************!*\
  !*** ./src/app/framework/models/syncdevicedata.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SyncDeviceData": () => (/* binding */ SyncDeviceData)
/* harmony export */ });
class SyncDeviceData {
    constructor() {
        this.mapping = {
            intTableStatus: 'pk',
            strTableName: 'string',
            strDisplayName: 'string',
            dtmTableLastUpdated: 'string',
            ysnTableWithErrors: 'boolean',
            intTotal: 'number',
            ysnVisible: 'boolean',
            ysnIncludeSyncAll: 'boolean'
        };
        this.tablename = 'syncdevicedata';
    }
}


/***/ }),

/***/ 65516:
/*!***********************************************!*\
  !*** ./src/app/framework/models/tankwagon.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tankwagon": () => (/* binding */ Tankwagon)
/* harmony export */ });
class Tankwagon {
    constructor() {
        this.mapping = {
            intTankWagonMobileId: 'pk',
            intLineId: 'number',
            intItemId: 'number',
            strItemNo: 'string',
            strDescription: 'string',
            dblQuantity: 'number',
            dblBalance: 'number',
            strReference: 'string',
            strTransactionType: 'string',
            strTransactionReference: 'string'
        };
        this.tablename = 'tankwagon';
    }
}


/***/ }),

/***/ 77205:
/*!***************************************************!*\
  !*** ./src/app/framework/models/tblARCustomer.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ARCustomer": () => (/* binding */ ARCustomer)
/* harmony export */ });
class ARCustomer {
    constructor() {
        this.mapping = {
            intEntityId: 'pk',
            ysnApplyPrepaidTax: 'boolean',
            ysnApplySalesTax: 'boolean',
            ysnTaxExempt: 'boolean',
            strCustomerNumber: 'string',
            intBillToId: 'number',
            intShipToId: 'number',
            strTaxState: 'string',
            intCustomerId: 'number',
            intEntityCustomerId: 'number',
            intTerm: 'number',
            strName: 'string',
            strCustomerName: 'string',
            strBillToAddress: 'string',
            strBillToCity: 'string',
            strBillToState: 'string',
            strBillToZipCode: 'string',
            strPhone1: 'string',
            strEmail: 'string',
            strInternalNotes: 'string',
            strTerm: 'string',
            strLevel: 'string',
            dblCreditLimit: 'number',
            dblTotalDue: 'number',
            dbl31DaysAmountDue: 'number',
            dblLastPayment: 'number',
            dtmLastPaymentDate: 'date'
        };
        this.tablename = 'tblARCustomer';
    }
}


/***/ }),

/***/ 30449:
/*!****************************************************!*\
  !*** ./src/app/framework/models/tblCategoryTax.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryTax": () => (/* binding */ CategoryTax)
/* harmony export */ });
class CategoryTax {
    constructor() {
        this.mapping = {
            intCategoryTaxId: 'pk',
            intCategoryId: 'number',
            intTaxClassId: 'number',
            ysnActive: 'boolean'
        };
        this.tablename = 'tblCategoryTax';
    }
}


/***/ }),

/***/ 32311:
/*!*************************************************************!*\
  !*** ./src/app/framework/models/tblCategoryTaxExemption.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoryTaxExemption": () => (/* binding */ CategoryTaxExemption)
/* harmony export */ });
class CategoryTaxExemption {
    constructor() {
        this.mapping = {
            intTaxGroupCodeCategoryExemptionId: 'pk',
            intTaxGroupCodeId: 'number',
            intCategoryId: 'number',
            intConcurrencyId: 'number',
            intTaxCodeId: 'number',
            intTaxGroupId: 'number'
        };
        this.tablename = 'tblCategoryTaxExemption';
    }
}


/***/ }),

/***/ 37891:
/*!*******************************************************!*\
  !*** ./src/app/framework/models/tblContractExport.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContractExport": () => (/* binding */ ContractExport)
/* harmony export */ });
class ContractExport {
    constructor() {
        this.mapping = {
            intContractExportId: 'pk',
            intContractDetailId: 'number',
            strLocationNumber: 'string',
            strEntityNo: 'string',
            strItemNo: 'string',
            intItemId: 'number',
            strDescription: 'string',
            strTermCode: 'string',
            strContractNumber: 'string',
            strPricing: 'string',
            strType: 'string',
            intContractSeq: 'number',
            dblQuantity: 'number',
            dblContractUnitDelivered: 'number',
            dtmStartDate: 'date',
            dtmEndDate: 'date',
            dblContractPriceCT: 'number',
            ysnMaxPrice: 'boolean',
            dblCashPrice: 'number',
            dblContractCashSpent: 'number',
            dblAvailableQty: 'number'
        };
        this.tablename = 'tblContractExport';
    }
}


/***/ }),

/***/ 12021:
/*!******************************************************************!*\
  !*** ./src/app/framework/models/tblCustomerMultiLevelPricing.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerMultiLevelPricing": () => (/* binding */ CustomerMultiLevelPricing)
/* harmony export */ });
class CustomerMultiLevelPricing {
    constructor() {
        this.mapping = {
            intCustomerMultiLevelPricingId: 'pk',
            intEntityId: 'number',
            strCustomerNumber: 'string',
            strLevel: 'string',
            intItemPricingLevelId: 'number',
            intCompanyLocationPricingLevelId: 'number',
            intItemId: 'number',
            strItemNo: 'string',
            intItemLocationId: 'number',
            strPriceLevel: 'string',
            intItemUnitMeasureId: 'number',
            dblUnit: 'number',
            dtmEffectiveDate: 'date',
            dblMin: 'number',
            dblMax: 'number',
            strPricingMethod: 'string',
            dblAmountRate: 'number',
            dblUnitPrice: 'number',
            strCommissionOn: 'string',
            dblCommissionRate: 'number',
            intCurrencyId: 'number'
        };
        this.tablename = 'tblCustomerMultiLevelPricing';
    }
}


/***/ }),

/***/ 56796:
/*!***************************************************************!*\
  !*** ./src/app/framework/models/tblCustomerSpecialPricing.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerSpecialPricing": () => (/* binding */ CustomerSpecialPricing)
/* harmony export */ });
class CustomerSpecialPricing {
    constructor() {
        this.mapping = {
            intCustomerPricingId: 'pk',
            strCustomerNumber: 'string',
            strItemNo: 'string',
            dblPrice: 'number',
            strPricing: 'string',
            intEntityId: 'number',
            intLocationId: 'number'
        };
        this.tablename = 'tblCustomerSpecialPricing';
    }
}


/***/ }),

/***/ 5990:
/*!*************************************************************!*\
  !*** ./src/app/framework/models/tblCustomerTaxExemption.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerTaxExemption": () => (/* binding */ CustomerTaxExemption)
/* harmony export */ });
class CustomerTaxExemption {
    constructor() {
        this.mapping = {
            intCustomerTaxingTaxExceptionId: 'pk',
            intEntityCustomerId: 'number',
            intItemId: 'number',
            intCategoryId: 'number',
            intTaxCodeId: 'number',
            intTaxClassId: 'number',
            strState: 'string',
            strException: 'string',
            strExceptionReason: 'string',
            dtmStartDate: 'date',
            dtmEndDate: 'date',
            intEntityCustomerLocationId: 'number',
            dblPartialTax: 'number',
            intCardId: 'number',
            intVehicleId: 'number',
            intCompanyId: 'number',
            intSiteNumber: 'number'
        };
        this.tablename = 'tblCustomerTaxExemption';
    }
}


/***/ }),

/***/ 22857:
/*!*******************************************************!*\
  !*** ./src/app/framework/models/tblEntityLocation.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EntityLocation": () => (/* binding */ EntityLocation)
/* harmony export */ });
class EntityLocation {
    constructor() {
        this.mapping = {
            intEntityLocationId: 'pk',
            intEntityId: 'number',
            strLocationName: 'number',
            intTaxGroupId: 'number',
            strTaxGroup: 'string',
            intTaxClassId: 'number',
            intTermsId: 'number',
            strLocationType: 'string',
            ysnDefaultLocation: 'string',
            intFreightTermId: 'boolean'
        };
        this.tablename = 'tblEntityLocation';
    }
}


/***/ }),

/***/ 8917:
/*!************************************************!*\
  !*** ./src/app/framework/models/tblFullTax.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FullTax": () => (/* binding */ FullTax)
/* harmony export */ });
class FullTax {
    constructor() {
        this.mapping = {
            intFulltaxId: 'pk',
            intTaxGroupId: 'number',
            strTaxGroup: 'string',
            intTaxCodeId: 'number',
            strTaxCode: 'string',
            intTaxClassId: 'number',
            strTaxClass: 'string',
            strCalculationMethod: 'string',
            dblRate: 'number',
            dblQuantity: 'number',
            dblPrice: 'number',
            dblTotal: 'number',
            ysnCheckoffTax: 'boolean',
            strTaxableByOtherTaxes: 'string',
            strType: 'string'
        };
        this.tablename = 'tblFullTax';
    }
}


/***/ }),

/***/ 19011:
/*!******************************************************!*\
  !*** ./src/app/framework/models/tblInventoryItem.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryItem": () => (/* binding */ InventoryItem)
/* harmony export */ });
class InventoryItem {
    constructor() {
        this.mapping = {
            intInventoryItemId: 'pk',
            strLocationNumber: 'string',
            intItemId: 'number',
            strItemNo: 'string',
            strDescription: 'string',
            dblSalePrice: 'number',
            strAccountId: 'string',
            strUnitMeasure: 'string',
            strType: 'string',
            strPriceLevel: 'string',
            strPricingMethod: 'string',
            dblMin: 'number',
            dblMax: 'number',
            dblAmountRate: 'number',
            dblUnitPrice: 'number',
            dtmEffectiveDate: 'date',
            strTagNumber: 'string',
            strTagMessage: 'string',
            strTagDescription: 'string',
            strTagType: 'string',
            ysnHazMat: 'boolean'
        };
        this.tablename = 'tblInventoryItem';
    }
}


/***/ }),

/***/ 50593:
/*!**************************************************************!*\
  !*** ./src/app/framework/models/tblMBILCompanyPreference.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MBILCompanyPreference": () => (/* binding */ MBILCompanyPreference)
/* harmony export */ });
class MBILCompanyPreference {
    constructor() {
        this.mapping = {
            intCompanyPreferenceId: 'pk',
            ysnShowLogo: 'boolean',
            intCompanyContact: 'number',
            strCompanyName: 'string',
            strDefaultCustomerNo: 'string',
            strDefaultSiteNo: 'string',
            strHazardousSpillCompanyName: 'string',
            strHazardousSpillCompanyPhoneNumber: 'string',
            strEmergencyCustomerCode: 'string'
        };
        this.tablename = 'tblMBILCompanyPreference';
    }
}


/***/ }),

/***/ 38130:
/*!**************************************************!*\
  !*** ./src/app/framework/models/tblMBILOrder.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MBILOrder": () => (/* binding */ MBILOrder)
/* harmony export */ });
class MBILOrder {
    constructor() {
        this.mapping = {
            intOrderMobileId: 'pk',
            intOrderId: 'number',
            intDispatchId: 'number',
            strOrderNumber: 'string',
            strOrderStatus: 'string',
            dtmRequestedDate: 'date',
            intEntityId: 'number',
            strCustomerNumber: 'string',
            strCustomerName: 'string',
            intTermId: 'number',
            strTerm: 'string',
            strComments: 'string',
            intDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string',
            intRouteId: 'number',
            strRouteId: 'string',
            intSequence: 'number',
            intStopNumber: 'number',
            intConcurrencyId: 'number'
        };
        this.tablename = 'tblMBILOrder';
    }
}


/***/ }),

/***/ 140:
/*!******************************************************!*\
  !*** ./src/app/framework/models/tblMBILOrderItem.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MBILOrderItem": () => (/* binding */ MBILOrderItem)
/* harmony export */ });
class MBILOrderItem {
    constructor() {
        this.mapping = {
            intOrderItemMobileId: 'pk',
            intOrderItemId: 'number',
            intOrderId: 'number',
            strOrderNumber: 'string',
            strOrderStatus: 'string',
            dtmRequestedDate: 'date',
            intEntityId: 'number',
            strCustomerNumber: 'string',
            strCustomerName: 'string',
            intTermId: 'number',
            strTerm: 'string',
            strComments: 'string',
            intDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string',
            intRouteId: 'number',
            strRouteId: 'string',
            intSequence: 'number',
            intStopNumber: 'number',
            intSiteId: 'number',
            intSiteNumber: 'number',
            strSiteDescription: 'string',
            strSiteAddress: 'string',
            strCity: 'string',
            strState: 'string',
            strZipCode: 'string',
            intItemId: 'number',
            strItemNo: 'string',
            strItemDescription: 'string',
            intContractDetailId: 'number',
            strContractNumber: 'string',
            intContractSeq: 'number',
            intItemUOMId: 'number',
            strUOM: 'string',
            dblQuantity: 'number',
            dblPrice: 'number',
            dblTotal: 'number',
            dblMeterTotalizer: 'number'
        };
        this.tablename = 'tblMBILOrderItem';
    }
}


/***/ }),

/***/ 58730:
/*!*********************************************************!*\
  !*** ./src/app/framework/models/tblMBILOrderTaxCode.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MBILOrderTaxCode": () => (/* binding */ MBILOrderTaxCode)
/* harmony export */ });
class MBILOrderTaxCode {
    constructor() {
        this.mapping = {
            intOrderTaxCodeMobileId: 'pk',
            intOrderTaxId: 'number',
            intOrderItemId: 'number',
            intItemId: 'number',
            intTransactionDetailTaxId: 'number',
            intInvoiceDetailId: 'number',
            intTaxGroupMasterId: 'number',
            intTaxGroupId: 'number',
            intTaxCodeId: 'number',
            intTaxClassId: 'number',
            strTaxableByOtherTaxes: 'string',
            strCalculationMethod: 'string',
            dblRate: 'number',
            dblExemptionPercent: 'number',
            dblTax: 'number',
            dblAdjustedTax: 'number',
            dblBaseAdjustedTax: 'number',
            intSalesTaxAccountId: 'number',
            ysnSeparateOnInvoice: 'boolean',
            ysnCheckoffTax: 'boolean',
            strTaxCode: 'string',
            ysnTaxExempt: 'boolean',
            ysnTaxOnly: 'boolean',
            ysnInvalidSetup: 'boolean',
            strTaxGroup: 'string',
            strNotes: 'string',
            intUnitMeasureId: 'number',
            strUnitMeasure: 'string',
            intDriverId: 'number',
            strDriverNo: 'string',
            strDriverName: 'string'
        };
        this.tablename = 'tblMBILOrderTaxCode';
    }
}


/***/ }),

/***/ 12750:
/*!************************************************!*\
  !*** ./src/app/framework/models/tblMBILPDF.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tblMBILPDF": () => (/* binding */ tblMBILPDF)
/* harmony export */ });
class tblMBILPDF {
    constructor() {
        this.mapping = {
            intPDFId: 'pk',
            strFileName: 'string',
            intShiftId: 'number',
            dtShiftDate: 'date',
            intDriverId: 'number',
            strFileType: 'string',
        };
        this.tablename = 'tblMBILPDF';
    }
}


/***/ }),

/***/ 57734:
/*!*******************************************************!*\
  !*** ./src/app/framework/models/tblSMCompanySetup.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tblSMCompanySetup": () => (/* binding */ tblSMCompanySetup)
/* harmony export */ });
class tblSMCompanySetup {
    constructor() {
        this.mapping = {
            intCompanySetupID: 'pk',
            imgCompanyLogo: 'string',
            strCompanyName: 'string',
            strAddress: 'string',
            strCounty: 'string',
            strCity: 'string',
            strState: 'string',
            strZip: 'string',
            strCountry: 'string',
            ysnGlobalLogo: 'boolean'
        };
        this.tablename = 'tblSMCompanySetup';
    }
}


/***/ }),

/***/ 79840:
/*!***************************************************!*\
  !*** ./src/app/framework/models/tblSMLocation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SMLocation": () => (/* binding */ SMLocation)
/* harmony export */ });
class SMLocation {
    constructor() {
        this.mapping = {
            intLocationMobileId: 'pk',
            intCompanyLocationId: 'number',
            strLocationName: 'string',
            strLocationNumber: 'string',
            intTaxGroupId: 'number',
            strUseLocationAddress: 'string',
            strAddress: 'string',
            strCity: 'string',
            strStateProvince: 'string',
            strZipPostalCode: 'string',
            strCountry: 'string'
        };
        this.tablename = 'tblSMLocation';
    }
}


/***/ }),

/***/ 43450:
/*!********************************************************!*\
  !*** ./src/app/framework/models/tblSMPaymentMethod.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SMPaymentMethod": () => (/* binding */ SMPaymentMethod)
/* harmony export */ });
class SMPaymentMethod {
    constructor() {
        this.mapping = {
            intPaymentMethodID: 'pk',
            strPaymentMethod: 'string',
            strPaymentMethodCode: 'string',
            ysnActive: 'boolean'
        };
        this.tablename = 'tblSMPaymentMethod';
    }
}


/***/ }),

/***/ 92570:
/*!***********************************************!*\
  !*** ./src/app/framework/models/tblSMTerm.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SMTerm": () => (/* binding */ SMTerm)
/* harmony export */ });
class SMTerm {
    constructor() {
        this.mapping = {
            intTermMobileId: 'pk',
            intTermID: 'number',
            strTerm: 'string',
            strType: 'string',
            dblDiscountEP: 'number',
            intBalanceDue: 'number',
            intDiscountDay: 'number',
            intDiscountDueNextMonth: 'number',
            dblAPR: 'number',
            strTermCode: 'string',
            ysnAllowEFT: 'boolean',
            intDayofMonthDue: 'number',
            intDueNextMonth: 'number',
            dtmDiscountDate: 'date',
            dtmDueDate: 'date',
            ysnActive: 'boolean',
            ysnEnergyTrac: 'boolean',
            ysnDeferredPay: 'boolean',
            ysnIncludeTaxOnDiscount: 'boolean',
        };
        this.tablename = 'tblSMTerm';
    }
}


/***/ }),

/***/ 982:
/*!************************************************!*\
  !*** ./src/app/framework/models/tblSMTruck.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SMTruck": () => (/* binding */ SMTruck)
/* harmony export */ });
class SMTruck {
    constructor() {
        this.mapping = {
            intTruckMobileId: 'pk',
            intTruckId: 'number',
            strTruckNumber: 'string',
            strType: 'string',
            strDescription: 'string',
            strOdometerReading: 'string',
            dblCapacity: 'number',
            intItemNo: 'number'
        };
        this.tablename = 'tblSMTruck';
    }
}


/***/ }),

/***/ 33221:
/*!**********************************************************!*\
  !*** ./src/app/framework/models/tblTMDeliveryHistory.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TMDeliveryHistory": () => (/* binding */ TMDeliveryHistory)
/* harmony export */ });
class TMDeliveryHistory {
    constructor() {
        this.mapping = {
            intDeliveryHistoryMobileId: 'pk',
            intDeliveryHistoryID: 'number',
            intSiteID: 'number',
            dtmInvoiceDate: 'date',
            dblQuantityDelivered: 'number'
        };
        this.tablename = 'tblTMDeliveryHistory';
    }
}


/***/ }),

/***/ 70029:
/*!***********************************************!*\
  !*** ./src/app/framework/models/tblTMSite.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TMSite": () => (/* binding */ TMSite)
/* harmony export */ });
class TMSite {
    constructor() {
        this.mapping = {
            intConsumptionSiteMobileId: 'pk',
            intSiteID: 'number',
            intEntityId: 'number',
            intSiteNumber: 'number',
            strEntityNo: 'string',
            strDescription: 'string',
            strItemNo: 'string',
            strFillMethod: 'string',
            strDeliveryTerm: 'string',
            strSiteAddress: 'string',
            strCity: 'string',
            strState: 'string',
            strZipCode: 'string',
            dblLatitude: 'number',
            dblLongitude: 'number',
            ysnTaxable: 'boolean',
            ysnActive: 'boolean',
            intCustomerID: 'number',
            intLocationId: 'number',
            strLocation: 'string',
            strInstruction: 'string',
            intTaxStateID: 'number'
        };
        this.tablename = 'tblTMSite';
    }
}


/***/ }),

/***/ 1176:
/*!*****************************************************!*\
  !*** ./src/app/framework/models/tblTMSiteDevice.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TMSiteDevice": () => (/* binding */ TMSiteDevice)
/* harmony export */ });
class TMSiteDevice {
    constructor() {
        this.mapping = {
            intSiteDeviceMobileId: 'pk',
            intSiteDeviceID: 'number',
            intDeviceId: 'number',
            intSiteID: 'number',
            strDeviceType: 'string',
            strSerialNumber: 'string',
            strDescription: 'string',
            dblTankCapacity: 'number'
        };
        this.tablename = 'tblTMSiteDevice';
    }
}


/***/ }),

/***/ 7490:
/*!******************************************!*\
  !*** ./src/app/framework/models/user.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
    constructor() {
        this.mapping = {
            intUserMobileId: 'pk',
            intUserId: 'number',
            strUserName: 'string',
            strPassword: 'string',
            strFullName: 'string',
            intDriverNumber: 'number',
            intLocation: 'number',
            strLocation: 'string',
            ContactParentId: 'number',
            CompanyName: 'string',
            Sample: 'string'
        };
        this.tablename = 'user';
    }
}


/***/ }),

/***/ 38101:
/*!*******************************************************!*\
  !*** ./src/app/framework/models/vehicleinspection.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VehicleInspection": () => (/* binding */ VehicleInspection)
/* harmony export */ });
class VehicleInspection {
    constructor() {
        this.mapping = {
            intInspection: 'pk',
            ysnAirCompressorAndLines: 'boolean',
            ysnBatteryAndConnections: 'boolean',
            ysnBodyCabDoors: 'boolean',
            ysnBrakeAccessories: 'boolean',
            ysnBrakes: 'boolean',
            ysnCluth: 'boolean',
            ysnDriveLine: 'boolean',
            ysnEngine: 'boolean',
            ysnExhaust: 'boolean',
            ysnFuelLeak: 'boolean',
            ysnOilLeak: 'boolean',
            ysnCoolantLeak: 'boolean',
            ysnFireExtinguisher: 'boolean',
            ysnFrontAxle: 'boolean',
            ysnFuelTanks: 'boolean',
            ysnHeaterDefroster: 'boolean',
            ysnHorn: 'boolean',
            ysnLightsReflectors: 'boolean',
            ysnGauges: 'boolean',
            ysnMirrors: 'boolean',
            ysnMudFlaps: 'boolean',
            ysnOilPressure: 'boolean',
            ysnPlacards: 'boolean',
            ysnRadiator: 'boolean',
            ysnRearEndAxleStuds: 'boolean',
            ysnSafetyEquipment: 'boolean',
            ysnSprings: 'boolean',
            ysnSteering: 'boolean',
            ysnTachograph: 'boolean',
            ysnTanks: 'boolean',
            ysnTires: 'boolean',
            ysnTransmission: 'boolean',
            ysnUnloadingHosesPumps: 'boolean',
            ysnWheelsRimsLugs: 'boolean',
            ysnWindows: 'boolean',
            ysnWindshieldWipers: 'boolean',
            ysnOthers: 'boolean',
            strTruckNumber: 'string',
            ysnNoDefects: 'boolean',
            strComments: 'string'
        };
        this.tablename = 'vehicleinspection';
    }
}


/***/ }),

/***/ 54842:
/*!*************************************************************************!*\
  !*** ./src/app/pages/invoice-add-contract/invoice-add-contract.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceAddContractPage": () => (/* binding */ InvoiceAddContractPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_add_contract_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-add-contract.page.html */ 29437);
/* harmony import */ var _invoice_add_contract_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-add-contract.page.scss */ 67671);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let InvoiceAddContractPage = class InvoiceAddContractPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.contracts = [];
    }
    ngOnInit() {
        var me = this;
        console.log('Contract Modal ==> ', me.items);
        console.log(me.items);
        me.customerName = me.items['customerName'];
        me.contracts = me.items;
    }
    closeContract() {
        var me = this;
        var _contracts = [];
        _contracts.push(me.currentSelected);
        me.modalController.dismiss({
            'dismissed': true,
            'contracts': _contracts
        });
    }
    selectContract(item) {
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
};
InvoiceAddContractPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
InvoiceAddContractPage.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
InvoiceAddContractPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-invoice-add-contract',
        template: _raw_loader_invoice_add_contract_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_add_contract_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceAddContractPage);



/***/ }),

/***/ 85552:
/*!*******************************************************!*\
  !*** ./src/app/pages/invoice-tax/invoice-tax.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoiceTaxPage": () => (/* binding */ InvoiceTaxPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_tax_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice-tax.page.html */ 87120);
/* harmony import */ var _invoice_tax_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice-tax.page.scss */ 13038);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 80476);





let InvoiceTaxPage = class InvoiceTaxPage {
    constructor(modalController) {
        this.modalController = modalController;
        this.taxes = [];
    }
    ngOnInit() {
        var me = this;
        console.log('Tax Modal');
        console.log(me.items);
        me.itemNo = me.items['strItemNo'];
        me.taxGroup = me.items['strTaxGroup'];
        me.price = me.items['price'];
        me.qty = me.items['quantity'];
        me.total = me.items['strItemNo'];
        me.taxes = me.items.tblOrderTaxCode;
        console.log(me.itemNo);
        console.log(me.taxes);
    }
    deleteTax() {
        var me = this;
        me.taxes = me.taxes.filter(val => val.ysnSelected != true);
    }
    closeTax() {
        var me = this;
        me.modalController.dismiss({
            'dismissed': true,
            'taxes': me.taxes
        });
    }
};
InvoiceTaxPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
InvoiceTaxPage.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
InvoiceTaxPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-invoice-tax',
        template: _raw_loader_invoice_tax_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_tax_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoiceTaxPage);



/***/ }),

/***/ 68779:
/*!********************************************!*\
  !*** ./src/app/providers/LCR_bluetooth.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LCR_bluetooth": () => (/* binding */ LCR_bluetooth)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ 28078);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/_common/base/message */ 40807);





let LCR_bluetooth = class LCR_bluetooth {
    constructor(bluetoothSerial, alertCtrl, loadingCtrl, messageUtil, modalCtrl) {
        this.bluetoothSerial = bluetoothSerial;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.messageUtil = messageUtil;
        this.modalCtrl = modalCtrl;
        this.resultMeterValue = [];
        this.resultMeterStatus = [];
        this.meter_1_test_status = 'DISCONNECTED';
        this.meter_2_test_status = 'DISCONNECTED';
        this.meter_1_test_preset_type = '';
        this.meter_2_test_preset_type = '';
    }
    enableBluetooth() {
        this.bluetoothSerial.enable();
    }
    connectDevice(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var _attempts = 0;
            if (!address) {
                address = me.lastAddress;
            }
            else {
                me.lastAddress = address;
            }
            let loader = yield me.loadingCtrl.create({ message: "Connecting...", backdropDismiss: true });
            var _exec;
            // let alert = await me.alertCtrl.create({
            //     message: 'Do you want to connect with?',
            //     buttons: [        
            //       {
            //         text: 'Connect',
            //         handler: () => {
            //           _exec();
            //         }
            //       },
            //       {
            //         text: 'Cancel',
            //         role: 'cancel',
            //         handler: () => {
            //           console.log('Cancel clicked');
            //         }
            //       }
            //     ]
            //   });
            return new Promise((resolve, reject) => {
                _exec = function () {
                    loader.present();
                    me.bluetoothSerial.connect(address.id || address).subscribe((res) => {
                        console.log('connected');
                        var _result = res;
                        setTimeout(() => {
                            console.log('get paired');
                            me.connectedToDeviceID = address.id || address;
                            me.isConnected = true;
                            me.CURRENT_ADDRESS = address.id || address;
                            me.CURRENT_HAS_CONNECTION = true;
                            me.CURRENT_METER = _result;
                            loader.dismiss();
                            resolve(me.connectedToDeviceID);
                        }, 3000);
                    }, (res) => {
                        if (_attempts >= 5) {
                            loader.dismiss();
                            me.messageUtil.showToastMessage(res, function () {
                                me.modalCtrl.dismiss({
                                    'dismissed': true
                                });
                            }, 1000);
                            me.isConnected = false;
                            me.CURRENT_HAS_CONNECTION = false;
                            reject(res);
                        }
                        else {
                            //TRY AGAIN
                            setTimeout(() => {
                                _attempts++;
                                _exec();
                            }, 1000);
                        }
                    });
                };
                _exec();
                // alert.present();
            });
        });
    }
    disconnectDevice(address) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Disconnecting...", backdropDismiss: true });
            let alert = yield me.alertCtrl.create({
                message: 'Do you want to Disconnect?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Disconnect',
                        handler: () => {
                            loader.present();
                            me.bluetoothSerial.disconnect().then((res) => {
                                address.ysnConnected = 'false';
                                me.isConnected = false;
                                me.CURRENT_HAS_CONNECTION = false;
                                loader.dismiss();
                            }, (res) => {
                                me.alertCtrl.create({ message: res });
                                me.isConnected = true;
                                me.CURRENT_HAS_CONNECTION = true;
                                loader.dismiss();
                            });
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    connectBluetooth(address) {
        var me = this;
        return new Promise((resolve, reject) => {
            me.bluetoothSerial.connect(address).subscribe((res) => {
                console.log('connected');
                var _result = res;
                setTimeout(() => {
                    console.log('get paired');
                    me.isConnected = true;
                    me.CURRENT_ADDRESS = address;
                    me.CURRENT_HAS_CONNECTION = true;
                    me.CURRENT_METER = _result;
                    resolve(res);
                }, 5000);
            });
        });
    }
    disconnectBluetooth() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.bluetoothSerial.disconnect().then((res) => {
                resolve(res);
            }, (res) => {
                reject(res);
            });
        });
    }
    getPaired() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.pairedDevices = [];
            me.bluetoothSerial.list().then((list) => {
                console.log(list);
                var _list = list;
                me.bluetoothSerial.isConnected().then((res) => {
                    console.log(res);
                    console.log(_list);
                    _list.forEach(item => {
                        console.log(item);
                        if (item.id == me.connectedToDeviceID) {
                            item.ysnConnected = 'true';
                        }
                        me.pairedDevices.push(item);
                    });
                    resolve(me.pairedDevices);
                }, (err) => {
                    console.log(err);
                    me.pairedDevices = _list;
                    resolve(me.pairedDevices);
                });
            }, (err) => {
                console.log(err);
                reject(err);
            });
        });
    }
    scanDevices() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.unpairedDevices = [];
            me.gettingDevices = true;
            me.bluetoothSerial.discoverUnpaired().then((res) => {
                me.gettingDevices = false;
                res.forEach(item => {
                    console.log(item);
                    if (item.name)
                        me.unpairedDevices.push(item);
                });
                resolve(me.unpairedDevices);
            }, (err) => {
                console.log(err);
                reject(err);
            });
        });
    }
    sendToDevice(data) {
        var me = this;
        console.log(data.buffer);
        return new Promise((resolve, reject) => {
            me.bluetoothSerial.clear().then(() => {
                console.log('clear');
                me.bluetoothSerial.write(data.buffer).then((data) => {
                    console.log(data);
                    me.processToDevice().then((res) => {
                        console.log(res);
                        resolve(res);
                    }, (error) => {
                        console.log(error);
                        reject(error);
                    });
                }, (error) => {
                    console.log(error);
                    reject(error);
                });
            }, (error) => {
                console.log(error);
                reject(error);
            });
        });
    }
    processToDevice() {
        var me = this;
        var _byteArray = [];
        return new Promise((resolve, reject) => {
            me.msgTotalLen = 0; //reset every call
            me.ReturnMsg = '';
            var msgPreBytes = new Uint8Array(6);
            me.bluetoothSerial.subscribeRawData().subscribe((data) => {
                console.log(data);
                var bytes = new Uint8Array(data);
                if (me.msgTotalLen <= 0) {
                    msgPreBytes.set(bytes.slice(0, 6), 0);
                }
                me.msgTotalLen += bytes.length;
                if (me.msgTotalLen < 6) { //skip
                }
                else if ((me.msgTotalLen - 6) < msgPreBytes[5]) { //skip
                }
                else {
                    me.bluetoothSerial.clear();
                    resolve(bytes);
                }
            }, (error) => {
                console.log('Failed: ' + error);
                reject(error);
            }, () => {
                console.log('COMPLETE');
                reject(true);
            });
        });
    }
    startDeviceToListen() {
        var me = this;
        var data = new Uint8Array(9);
        data[0] = 0x7E; //start
        data[1] = 0x7E; //start
        data[2] = 0x01; //to
        data[3] = 0xFF; //from
        data[4] = 0x02; //status
        data[5] = 0x01; //len
        data[6] = 0x00; //data
        data[7] = 0x8C; //CRC
        data[8] = 0x27; //CRC
        me.sendToDevice(data);
    }
};
LCR_bluetooth.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_0__.BluetoothSerial },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.LoadingController },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_1__.Message },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController }
];
LCR_bluetooth = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], LCR_bluetooth);



/***/ }),

/***/ 27201:
/*!********************************************!*\
  !*** ./src/app/providers/LCR_functions.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LCR_functions": () => (/* binding */ LCR_functions)
/* harmony export */ });
class LCR_functions {
    constructor() {
        this.DATA_TO_LCR = [];
        this.DATA_ESC_1 = 126;
        this.DATA_ESC_2 = 126;
        this.DATA_TO = 1;
        this.DATA_FROM = 20;
        this.DATA_STATUS = 2;
        this.DATA_LEN = 0;
        this.DATA_DATA = [];
        this.DATA_DATA_LEN = 0;
        this.DATA_CRC_1 = 0;
        this.DATA_CRC_2 = 0;
        this.METER_1_NAME = '';
        this.METER_1_ADDRESS = '';
        this.METER_1_DEVICE = [];
        this.METER_1_DATA_TO_LCR = [];
        this.METER_1_DATA_ESC_1 = 126;
        this.METER_1_DATA_ESC_2 = 126;
        this.METER_1_DATA_TO = 1;
        this.METER_1_DATA_FROM = 20;
        this.METER_1_DATA_STATUS = 2;
        this.METER_1_DATA_LEN = 0;
        this.METER_1_DATA_DATA = [];
        this.METER_1_DATA_DATA_LEN = 0;
        this.METER_1_DATA_CRC_1 = 0;
        this.METER_1_DATA_CRC_2 = 0;
        this.METER_2_NAME = '';
        this.METER_2_ADDRESS = '';
        this.METER_2_DEVICE = [];
        this.METER_2_DATA_TO_LCR = [];
        this.METER_2_DATA_ESC_1 = 126;
        this.METER_2_DATA_ESC_2 = 126;
        this.METER_2_DATA_TO = 2;
        this.METER_2_DATA_FROM = 20;
        this.METER_2_DATA_STATUS = 2;
        this.METER_2_DATA_LEN = 0;
        this.METER_2_DATA_DATA = [];
        this.METER_2_DATA_DATA_LEN = 0;
        this.METER_2_DATA_CRC_1 = 0;
        this.METER_2_DATA_CRC_2 = 0;
        // Have labeled indicies for each portion of the message.
        // Synchronized Message --> first 2 bytes "~~"
        this.syncMes1 = 0;
        this.syncMes2 = 1;
        // The "to" byte is the node address where the message is being received (0-255)
        this.toByte = 2;
        // The "from" byte is the node address where the message is being sent (0-255)
        this.fromByte = 3;
        // The "status" byte is the status of the message, this message stays in hex, but is useful to see it in binary
        this.statusByte = 4;
        // The "len" byte tells us how many bytes will be in the data portion of the LCP message
        this.lengthByte = 5;
        // This byte is for when we start to determine what the data message is, we will use this as out starting index
        // in our iterations.
        this.startOfDataIndex = this.lengthByte + 1;
        // Store the passed in LCP message
        this.lcpMessage = "";
        //#endregion
    }
    BuildGrossPreset(data) {
        var me = this;
        return new Promise((resolve, reject) => {
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(6));
            me.DATA_TO_LCR.push(me.DecimalToHex(33)); // GROSS PRESET
            me.DATA_TO_LCR.push(me.DecimalToHex(LCR_functions.LCRF_GrossPreset_PL));
            me.DATA_TO_LCR.push(me.DecimalToHex(0));
            me.DATA_TO_LCR.push(me.DecimalToHex(0));
            me.DecimalToHex_Preset(data);
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR);
            console.log(me.DATA_TO_LCR.join(" "));
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            console.log(_data);
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            resolve(LCR_DATA_TO_SEND);
        });
    }
    BuildNetPreset(data) {
        var me = this;
        return new Promise((resolve, reject) => {
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(6));
            me.DATA_TO_LCR.push(me.DecimalToHex(33)); // NET PRESET
            me.DATA_TO_LCR.push(me.DecimalToHex(LCR_functions.LCRF_NetPreset_PL));
            me.DATA_TO_LCR.push(me.DecimalToHex(0));
            me.DATA_TO_LCR.push(me.DecimalToHex(0));
            me.DecimalToHex_Preset(data);
            // -> 7e 7e 01 ff 02 06 21 06 00 00 01 F4 10 68
            // -> 7e 7e 02 ff 02 06 21 06 00 00 01 F4 65 a0
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR);
            console.log(me.DATA_TO_LCR.join(" "));
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            console.log(_data);
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            resolve(LCR_DATA_TO_SEND);
        });
    }
    StartPump(status) {
        var me = this;
        return new Promise((resolve, reject) => {
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA] -- status off
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x00, 0x75, 0xC9] -- status on
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]
            // var data = new Uint8Array(10);
            // if(status) {
            //   data[0] = 0x7E;
            //   data[1] = 0x7E;
            //   data[2] = 0x01;//to
            //   data[3] = 0x14;//from
            //   data[4] = 0x00;//status
            //   data[5] = 0x02;//length
            //   data[6] = 0x24;//data
            //   data[7] = 0x01;//data
            //   data[8] = 0x45;//data
            //   data[9] = 0xFA;//data
            // }
            // else {
            //   data[0] = 0x7E;
            //   data[1] = 0x7E;
            //   data[2] = 0x01;//to
            //   data[3] = 0x14;//from
            //   data[4] = 0x01;//status
            //   data[5] = 0x02;//length
            //   data[6] = 0x24;//data
            //   data[7] = 0x00;//data
            //   data[8] = 0x75;//data
            //   data[9] = 0xC9;//data
            // }      
            console.log('Proces: StartPump');
            var _DATA_TO_LCR = [];
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            _DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            _DATA_TO_LCR.push(me.DecimalToHex(36)); // DATA
            _DATA_TO_LCR.push(me.DecimalToHex(0)); // DATA
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(_DATA_TO_LCR.join(" "));
            me.BuildCRCMessage(_DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            console.log(_data);
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    StopPump(status) {
        var me = this;
        return new Promise((resolve, reject) => {
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA] -- status off
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x00, 0x75, 0xC9] -- status on
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9] -- status off
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x00, 0x75, 0xC9]
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
            // [0x7E, 0x7E, 0x01, 0x14, 0x05, 0x01, 0x7D, 0x5E, 0x9B]
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]
            // [0x7E, 0x7E, 0x01, 0x14, 0x04, 0x01, 0x7D, 0x7F, 0x8B]
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
            // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]
            // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x20, 0x05, 0x41, 0xFE]
            // var data = new Uint8Array(10);
            // if(status) {
            //   data[0] = 0x7E;
            //   data[1] = 0x7E;
            //   data[2] = 0x01;//to
            //   data[3] = 0x14;//from
            //   data[4] = 0x00;//status
            //   data[5] = 0x02;//length
            //   data[6] = 0x24;//data
            //   data[7] = 0x01;//data
            //   data[8] = 0x45;//data
            //   data[9] = 0xFA;//data
            // }
            // else {
            //   data[0] = 0x7E;
            //   data[1] = 0x7E;
            //   data[2] = 0x01;//to
            //   data[3] = 0x14;//from
            //   data[4] = 0x01;//status
            //   data[5] = 0x02;//length
            //   data[6] = 0x24;//data
            //   data[7] = 0x01;//data
            //   data[8] = 0x74;//data
            //   data[9] = 0xC9;//data
            // }      
            console.log('Proces: StopPump');
            var _DATA_TO_LCR = [];
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            _DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            _DATA_TO_LCR.push(me.DecimalToHex(36)); // DATA
            _DATA_TO_LCR.push(me.DecimalToHex(1)); // DATA
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(_DATA_TO_LCR.join(" "));
            me.BuildCRCMessage(_DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            console.log(_data);
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    PrintPump() {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log('Proces: PrintPump');
            var _DATA_TO_LCR = [];
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            _DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            _DATA_TO_LCR.push(me.DecimalToHex(36)); // DATA
            _DATA_TO_LCR.push(me.DecimalToHex(2)); // DATA
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(_DATA_TO_LCR.join(" "));
            me.BuildCRCMessage(_DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            console.log(_data);
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    MeterValue(preset_type) {
        var me = this;
        return new Promise((resolve, reject) => {
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            if (preset_type == 'Gross') {
                me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
                me.DATA_TO_LCR.push(me.DecimalToHex(2)); // FIELD NUMBER
            }
            else {
                me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
                me.DATA_TO_LCR.push(me.DecimalToHex(3)); // FIELD NUMBER
            }
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR.join(" ").toUpperCase());
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    GrossTotalizer() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
            me.DATA_TO_LCR.push(me.DecimalToHex(17)); // FIELD NUMBER
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR.join(" ").toUpperCase());
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    NetTotalizer() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
            me.DATA_TO_LCR.push(me.DecimalToHex(18)); // FIELD NUMBER
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR.join(" ").toUpperCase());
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    SaleNumber() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
            me.DATA_TO_LCR.push(me.DecimalToHex(22)); // FIELD NUMBER
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR.join(" ").toUpperCase());
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    PresetType() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
            me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
            me.DATA_TO_LCR.push(me.DecimalToHex(57)); // FIELD NUMBER
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR.join(" ").toUpperCase());
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    BuildCRCMessage(message) {
        var me = this;
        // Cleanse the text of all spaces or non-LCP characters
        var filteredMessage = message.replace(/[^a-fA-F0-9]/g, "");
        filteredMessage = filteredMessage.toLowerCase();
        me.lcpMessage = filteredMessage;
        // Divide the message into hex bytes (i.e. ff, ef, 0a, etc...)
        var messageHexData = me.dataToHexStrings(filteredMessage);
        // Check the first two header bytes to ensure it's an LCP message
        var headerBytes = me.HexStringToAscii(messageHexData[me.syncMes1]) + me.HexStringToAscii(messageHexData[me.syncMes2]);
        if (headerBytes != "~~") {
            console.log("Invalid LCP Message: No \"~~\"");
            return;
        }
        // Initialize message indices
        me.InitIndices();
        // Check to make sure CRC values are valid
        me.CheckCRC(messageHexData);
    }
    dataToHexStrings(filteredMessage) {
        // Check to make sure that the passed in message is potentially valid by dividing by 2
        // and that the message is at least 8 bytes long due to the LCP Header
        var hexByteArray = [];
        if ((filteredMessage.length % 2 != 0 || filteredMessage.length < 16))
            console.log("Error: Invalid Message, ensure no bytes have been added or are missing.");
        // Because we are incrementing twice each loop, we want to make sure we don't go out of range of the LCP String
        for (var i = 0; i < filteredMessage.length - 1; i++) {
            // For every two characters, we need to create a String and add to the array
            var tempString = "";
            tempString = tempString.concat(filteredMessage.charAt(i));
            tempString = tempString.concat(filteredMessage.charAt(i + 1));
            // Add the hex string to the array and increment the index
            hexByteArray = hexByteArray.concat(tempString);
            // Increment the counter to skip over the character that was already appended
            i++;
        }
        return hexByteArray;
    }
    HexStringToAscii(hexString) {
        var decimal = parseInt(hexString, 16);
        // Change the integer to a char
        var result = String.fromCharCode(decimal);
        return result;
    }
    CheckCRC(messageHexData) {
        var me = this;
        // Convert that data into characters for CRC calculation
        var charData = [];
        for (var i = 0; i < messageHexData.length; i++) {
            var currentByte = parseInt(messageHexData[i], 16);
            charData.push(currentByte);
        }
        var crcStartIndex = 2;
        // LCP CRC Values start with "~~"
        var crcValue = 0x7e7e;
        // Loop through the message to modify the crc value
        for (var i = crcStartIndex; i <= me.dataByteEnd; i++) {
            // Consistently update the crcValue
            crcValue = me.UpdateCRC(crcValue, charData[i]);
        }
        // Check to make sure the CRC value is 4 characters long
        var temp = "";
        var checkCRCLength = crcValue;
        if (checkCRCLength.toString().length < 4) {
            var numToPad = 4 - checkCRCLength.toString().length;
            for (var i = 0; i < numToPad; i++)
                temp += "0";
        }
        // Put the temp string in 2's compliment format
        temp += (crcValue >>> 0).toString(16);
        // Because the CRC value is put into the message low-order --> high-order
        // we need to reverse the position of the bytes
        var lowOrderIndex = temp.length - 2;
        var highOrderIndex = temp.length - 4;
        var lowOrderString = temp.substring(lowOrderIndex, temp.length);
        var highOrderString = temp.substring(highOrderIndex, lowOrderIndex);
        var newCRC = "";
        newCRC += lowOrderString.toUpperCase();
        newCRC += highOrderString.toUpperCase();
        var givenCRC = parseInt((messageHexData[messageHexData.length - 2] + messageHexData[messageHexData.length - 1]), 16);
        var checkCRC = parseInt((lowOrderString.toUpperCase() + highOrderString.toUpperCase()), 16);
        // Check to make sure that the calculated CRC value matches the given CRC Value
        var calculatedCRC = checkCRC.toString(16);
        var givenCRC_new = givenCRC.toString(16);
        me.lcpMessage = me.lcpMessage.substr(0, (me.lcpMessage.length - 4));
        me.lcpMessage = me.lcpMessage.concat(calculatedCRC);
        console.log("Passed in CRC: " + givenCRC_new);
        console.log("Calculated CRC: " + calculatedCRC);
        console.log("LCP Message: " + me.lcpMessage);
        if (givenCRC_new == calculatedCRC)
            return true;
        else
            return false;
    }
    UpdateCRC(currentCRC, newByte) {
        // Update the value of the CRC by looping throuhg each bit of passed in byte
        // starting at the highest order
        for (var i = 7; i >= 0; --i) {
            // Shift the CRC value left by one bit and save the resulting carry flag
            var XORFlag = ((currentCRC & 0x8000) != 0x0000);
            currentCRC = ((currentCRC << 1) << 16) >> 16;
            // Logically OR the current bit into the least significant bit of the CRC
            currentCRC |= ((newByte >> i) & 0x01);
            // Check the XORFlag to see if we need to exclusive-or the CRC with 0x1021
            if (XORFlag)
                currentCRC ^= 0x1021;
        }
        //console.log("Outgoing CRC: " + currentCRC);
        return currentCRC;
    }
    InitIndices() {
        var me = this;
        me.dataByteEnd = (me.lcpMessage.length / 2) - 3;
        me.lowOrderCRC = (me.lcpMessage.length / 2) - 2;
        me.highOrderCRC = (me.lcpMessage.length / 2) - 1;
    }
    DecimalToHex(value) {
        var _temp_hex = parseFloat(value).toString(16);
        if (Math.abs(_temp_hex.length % 2) == 1) {
            _temp_hex = '0' + _temp_hex;
        }
        return _temp_hex;
    }
    DecimalToHex_Preset(value) {
        var me = this;
        var _temp = value + '0';
        var _temp_hex = parseFloat(_temp).toString(16);
        if (Math.abs(_temp_hex.length % 2) == 1) {
            _temp_hex = '0' + _temp_hex;
        }
        var _data = _temp_hex.match(/.{1,2}/g);
        if (_data.length == 1) {
            me.DATA_TO_LCR.push('00');
        }
        _data.forEach(element => {
            me.DATA_TO_LCR.push(element);
        });
        return me.DATA_TO_LCR;
    }
    // STATIC GETTER BUILDER
    RequestBuilder(data) {
        var me = this;
        return new Promise((resolve, reject) => {
            var _length = 2;
            var _message = 32;
            me.DATA_TO_LCR = [];
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
            me.DATA_TO_LCR.push(me.DecimalToHex(_length)); // LENGTH
            me.DATA_TO_LCR.push(me.DecimalToHex(_message)); // MESSAGE ID     
            me.DATA_TO_LCR.push(me.DecimalToHex(data)); // FIELD NUMBER
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
            me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));
            console.log(me.DATA_TO_LCR);
            console.log(me.DATA_TO_LCR.join(" ").toUpperCase());
            me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());
            var _data = me.lcpMessage.match(/.{1,2}/g);
            var _final = [];
            _data.forEach(element => {
                _final.push('0x' + element);
            });
            console.log(_data);
            var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
            for (var x = 0; x < _final.length; x++) {
                LCR_DATA_TO_SEND.fill(_final[x], x, x + 1);
            }
            console.log(LCR_DATA_TO_SEND);
            resolve(LCR_DATA_TO_SEND);
        });
    }
    //#region CONVERSION
    buf2hex(buffer) {
        return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
    }
    hex2a(hexx) {
        var hex = hexx;
        var str = '';
        for (var i = 0; i < hex.length; i += 2)
            str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
        return str;
    }
    GetOutputData(hexString) {
        var binary = new Array();
        for (var i = 0; i < hexString.length / 2; i++) {
            var h = hexString.substr(i * 2, 2);
            binary[i] = parseInt(h, 16);
        }
        //var outputDataOnly = this.hexStringToByte(hexString);
        return binary.slice(6 + 2, 6 + binary[5] - 1);
    }
    GetOutputDataAsString(hexString) {
        var binary = new Array();
        var OutputData = "";
        //-minus 4 for the CRC
        //initital loop = 5 - removing to, from , status, length  
        for (var i = 6; i < (hexString.length - 4) / 2; i++) {
            OutputData += hexString.substr(i * 2, 2);
        }
        return OutputData; //still contains rc, devstatus
    }
    HexToAscii(HexString) {
        var binary = new Array();
        for (var i = 0; i < HexString.length / 2; i++) {
            var h = HexString.substr(i * 2, 2);
            binary[i] = parseInt(h, 16);
        }
        //console.log("Length:" + binary.length);
        var output = binary;
        //6 = prefix
        //2 = Return Code, Device Status
        // -1 = Text field len - 1
        var outputDataOnly = output.slice(6 + 2, 6 + binary[5] - 1);
        console.log(outputDataOnly);
        var convertedString = "";
        for (i = 0; i < outputDataOnly.length; i++) {
            if (outputDataOnly[i] >= 32 && outputDataOnly[i] <= 126) {
                // // // switch(String.fromCharCode(output[i])) {
                // // // case '&': convertedString += "&amp;";
                // // //   break;
                // // // case '<': convertedString += "&lt;";
                // // //   break;
                // // // case '>': convertedString += "&gt;";
                // // //   break;
                // // // case '"': convertedString += "&quot;";
                // // //   break;
                // // // case '\'': convertedString += "&#039;";
                // // //   break;
                // // // default: convertedString += String.fromCharCode(output[i]);
                // // // }
                convertedString += String.fromCharCode(outputDataOnly[i]);
            }
            else {
                convertedString += outputDataOnly[i];
            }
        }
        return convertedString;
    }
    byteToHexString(uint8arr) {
        if (!uint8arr) {
            return '';
        }
        var hexStr = '';
        for (var i = 0; i < uint8arr.length; i++) {
            var hex = (uint8arr[i] & 0xff).toString(16);
            hex = (hex.length === 1) ? '0' + hex : hex;
            hexStr += hex;
        }
        return hexStr.toUpperCase();
    }
    hexStringToByte(str) {
        if (!str) {
            return new Uint8Array(1);
        }
        var a = [];
        for (var i = 0, len = str.length; i < len; i += 2) {
            a.push(parseInt(str.substr(i, 2), 16));
        }
        return new Uint8Array(a);
    }
    hexToDecimal(num) {
        return {
            from: function (baseFrom) {
                return {
                    to: function (baseTo) {
                        return parseInt(num, baseFrom).toString(baseTo);
                    }
                };
            }
        };
    }
    ;
    ab2str(buf) {
        return String.fromCharCode.apply(null, new Uint16Array(buf));
    }
    str2ab(str) {
        var buf = new ArrayBuffer(str.length * 2); // 2 bytes for each char
        var bufView = new Uint16Array(buf);
        for (var i = 0, strLen = str.length; i < strLen; i++) {
            bufView[i] = str.charCodeAt(i);
        }
        return buf;
    }
    read(numBytes) {
    }
}
//Return Codes
LCR_functions.LCPR_OK = 0; // operation was carried out successfully
LCR_functions.LCPR_AlreadyInstalled = 200;
LCR_functions.LCPR_BadNameAndRevision = 201;
LCR_functions.LCPR_BadNodeAddress = 202; // invalid node address of host application
LCR_functions.LCPR_BadBaseAddress = 203; // invalid base communications address
LCR_functions.LCPR_BadIRQ = 204; // invalid IRQ
LCR_functions.LCPR_BadBaudRate = 205; // invalid baud rate
LCR_functions.LCPR_BadTimeout = 206; // invalid timeout
LCR_functions.LCPR_BadTXEnable = 207; // invalid transmit enable
LCR_functions.LCPR_NULLPointer = 208; // a NULL pointer was passed as an address
LCR_functions.LCPR_NoRequestActive = 209; // the slave device reported that no request was active
LCR_functions.LCPR_NoResponse = 210; // the slave device did not respond to the request
LCR_functions.LCPR_RequestAborted = 211; // the slave device aborted the last request
LCR_functions.LCPR_UnsupportedCommand = 212;
LCR_functions.LCPR_BufferOverflow = 213; // the slave device reports its receive buffer overflowed
LCR_functions.LCPR_Busy = 214; // the slave device reports that it is busy but is working on the request
LCR_functions.LCPR_NotInstalled = 215; // the LCP device drivers are not installed
LCR_functions.LCPR_MemoryAllocation = 216; // there is not enough dynamic memory available for the request
LCR_functions.LCPR_MissingMHz = 217; // the MHz environment variable is missing
// LCR A to D code word definitions.
// const LCRA_R100_0 = 0xH1;
// const LCRA_R128_6 = 0xH2;
// const LCRA_RTD_SLOPE = &H4;
// const LCRA_RTD_OFFSET = &H8;
// const LCRA_VOLT_12 = &H10;
// const LCRA_VOLT_16 = &H20;
// const LCRA_VOLT_SLOPE = &H40;
// const LCRA_VOLT_OFFSET = &H80;
LCR_functions.LCRF_ProductNumber_DL = 0;
LCR_functions.LCRF_ProductCode_DL = 1;
LCR_functions.LCRF_GrossQty_NE = 2;
LCR_functions.LCRF_NetQty_NE = 3;
LCR_functions.LCRF_FlowRate_NE = 4;
LCR_functions.LCRF_GrossPreset_PL = 5;
LCR_functions.LCRF_NetPreset_PL = 6;
LCR_functions.LCRF_Temp_NE = 7;
LCR_functions.LCRF_Residual_WM = 8;
LCR_functions.LCRF_PulsesPerDistance_UL = 9;
LCR_functions.LCRF_CalibDistance_UL = 10;
LCR_functions.LCRF_ProductDescriptor_DL = 11;
LCR_functions.LCRF_Odometer_UL = 12;
LCR_functions.LCRF_ShiftGross_NE = 13;
LCR_functions.LCRF_ShiftNet_NE = 14;
LCR_functions.LCRF_ShiftDeliveries_NE = 15;
LCR_functions.LCRF_ClearShift_DL = 16;
LCR_functions.LCRF_GrossTotal_WM = 17;
LCR_functions.LCRF_NetTotal_WM = 18;
LCR_functions.LCRF_DateFormat_UL = 19;
LCR_functions.LCRF_Date_UL = 20;
LCR_functions.LCRF_Time_UL = 21;
LCR_functions.LCRF_SaleNumber_WM = 22;
LCR_functions.LCRF_TicketNumber_WM = 23;
LCR_functions.LCRF_UnitID_UL = 24;
LCR_functions.LCRF_NoFlowTimer_DL = 25;
LCR_functions.LCRF_S1Close_WM = 26;
LCR_functions.LCRF_PresetType_DL = 27;
LCR_functions.LCRF_PulseOutputEdge_UL = 28;
LCR_functions.LCRF_Header_AE = 29;
LCR_functions.LCRF_TicketHeaderLine_UL = 30;
LCR_functions.LCRF_PrintGrossAndParam_WM = 31;
LCR_functions.LCRF_VolCorrectedMsg_WM = 32;
LCR_functions.LCRF_Temp_WM = 33;
LCR_functions.LCRF_TempOffset_WM = 34;
LCR_functions.LCRF_TempScale_WM = 35;
LCR_functions.LCRF_MeterID_WM = 36;
LCR_functions.LCRF_TicketRequired_WM = 37;
LCR_functions.LCRF_QtyUnits_WM = 38;
LCR_functions.LCRF_Decimals_WM = 39;
LCR_functions.LCRF_FlowDirection_WM = 40;
LCR_functions.LCRF_TimeUnit_WM = 41;
LCR_functions.LCRF_CalibrationEvent_NE = 42;
LCR_functions.LCRF_ConfigurationEvent_NE = 43;
LCR_functions.LCRF_GrossCount_NE = 44;
LCR_functions.LCRF_NetCount_NE = 45;
LCR_functions.LCRF_ProverQty_WM = 46;
LCR_functions.LCRF_PulsesPerUnit_WM = 47;
LCR_functions.LCRF_AuxMult_WM = 48;
LCR_functions.LCRF_AuxUnit_WM = 49;
LCR_functions.LCRF_CalibrationNumber_NE = 50;
LCR_functions.LCRF_LinearPoint_AE = 51;
LCR_functions.LCRF_LinearFlowRate_WM = 52;
LCR_functions.LCRF_LinearError_WM = 53;
LCR_functions.LCRF_LinearProverQty_WM = 54;
LCR_functions.LCRF_Linearize_WM = 55;
LCR_functions.LCRF_Printer_WM = 56;
LCR_functions.LCRF_CompensationType_WM = 57;
LCR_functions.LCRF_CompensationParam_WM = 58;
LCR_functions.LCRF_BaseTemp_WM = 59;
LCR_functions.LCRF_Software_NE = 60;
LCR_functions.LCRF_PricePerUnit_DL = 61;
LCR_functions.LCRF_TaxPerUnit_DL = 62;
LCR_functions.LCRF_PercentTax_DL = 63;
LCR_functions.LCRF_DiagnosticMessages_AE = 64;
LCR_functions.LCRF_TotalTaxPerUnit_NE = 65;
LCR_functions.LCRF_TotalPercentTax_NE = 66;
LCR_functions.LCRF_ADCCode_NE = 67;
LCR_functions.LCRF_SupplyVoltage_NE = 68;
LCR_functions.LCRF_PulserReversals_NE = 69;
LCR_functions.LCRF_ShiftStart_NE = 70;
LCR_functions.LCRF_AuxQty_NE = 71;
LCR_functions.LCRF_UserKey_DL = 72;
LCR_functions.LCRF_Security_UL = 73;
LCR_functions.LCRF_FactoryKey_AE = 74;
LCR_functions.LCRF_R100_0_FL = 75;
LCR_functions.LCRF_R128_6_FL = 76;
LCR_functions.LCRF_RawADC_NE = 77;
LCR_functions.LCRF_RTDSlope_FL = 78;
LCR_functions.LCRF_RTDOffset_FL = 79;
LCR_functions.LCRF_SerialID_FL = 80;
LCR_functions.LCRF_UserSetKey_FL = 81;
LCR_functions.LCRF_LCRReset_FL = 82;
LCR_functions.LCRF_CompParamType_NE = 83;
LCR_functions.LCRF_CompTempType_NE = 84;
LCR_functions.LCRF_PresetsAllowed_DL = 85;
LCR_functions.LCRF_Aux1_DL = 86;
LCR_functions.LCRF_Aux2_DL = 87;
LCR_functions.LCRF_DefaultProduct_NE = 88;
LCR_functions.LCRF_DeliveryStart_NE = 89;
LCR_functions.LCRF_DeliveryFinish_NE = 90;
LCR_functions.LCRF_LastCalibrated_NE = 91;
LCR_functions.LCRF_GrossRemaining_NE = 92;
LCR_functions.LCRF_NetRemaining_NE = 93;
LCR_functions.LCRF_ProductType_WM = 94;
LCR_functions.LCRF_SubTotalCost_NE = 95;
LCR_functions.LCRF_TotalTax_NE = 96;
LCR_functions.LCRF_TotalCost_NE = 97;
LCR_functions.LCRF_Ticket_NE = 98;
LCR_functions.LCRF_Language_NE = 99;
LCR_functions.LCRF_ShiftPassword = 105;
LCR_functions.LCRF_CustomerID = 106;
LCR_functions.LCR_NUM_FIELDS = 100;
LCR_functions.LCR_MAX_FIELDS = 256;


/***/ }),

/***/ 79561:
/*!****************************************************!*\
  !*** ./src/app/providers/i21syncdevice.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i21SyncDeviceService": () => (/* binding */ i21SyncDeviceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _ionic_native_zip_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/zip/ngx */ 86410);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ 15855);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../framework/_common/base/service */ 4229);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../framework/brl/implementation/syncdevicedata */ 1447);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_models_syncdevicedata__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../framework/models/syncdevicedata */ 72681);
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/http/ngx */ 68589);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 79765);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 26215);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 38583);








// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';











let i21SyncDeviceService = class i21SyncDeviceService extends _framework_common_base_service__WEBPACK_IMPORTED_MODULE_5__.Service {
    constructor(http, https, loadingCtrl, commonSQL, syncDeviceDataBRL, globalBRL, message, zip, file, 
    // private transfer: FileTransfer,
    fileOpener, sqlitePorter, datePipe, storage) {
        super(http, https);
        this.http = http;
        this.https = https;
        this.loadingCtrl = loadingCtrl;
        this.commonSQL = commonSQL;
        this.syncDeviceDataBRL = syncDeviceDataBRL;
        this.globalBRL = globalBRL;
        this.message = message;
        this.zip = zip;
        this.file = file;
        this.fileOpener = fileOpener;
        this.sqlitePorter = sqlitePorter;
        this.datePipe = datePipe;
        this.storage = storage;
        this.counter = 0;
        this.totalOrderReceived = '0';
        this.allOrders = [];
        this.previousOrders = [];
        this.newOrdersList = [];
        this.data = [];
        this.ordersInLocal = [];
        this.ordersInServer = [];
        this.notDeliveredInServerOrders = [];
        this.Invoice = [];
        this.tmUpdate = [];
        this.tmAlerts = {
            strCustomerNumber: '',
            intSiteNumber: '',
            dtmDateDelivery: '',
            dblQuantity: 0,
            dblPrice: 0,
            dblTotal: 0
        };
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
        this.OrderData = [];
        this.OrderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(this.OrderData);
        this.OrderChanged$ = this.OrderSubject$.asObservable();
        this.isNewOrder = false;
        this.isNewOrderSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.BehaviorSubject(this.isNewOrder);
        this.isNewOrderChanged$ = this.isNewOrderSubject$.asObservable();
    }
    // +++++++++ BULK ZIP PROCESS +++++++++
    getGenerateExport(driverid, tablename, orderIds) {
        let me = this;
        var _filename = "";
        return new Promise((resolve, reject) => {
            console.log('=======> START GENERATE EXPORT');
            console.log(driverid);
            console.log(tablename);
            console.log(orderIds);
            var _tablestogenerate = "";
            if (tablename == "complete_order") {
                _tablestogenerate = tablename;
                // me.commonSQL.executeQuery('DELETE FROM tblMBILOrder WHERE strOrderNumber NOT IN (' + orderIds + ')').then((res) => {
                //   console.log(res);          
                //   console.log('orders deleted');
                // });
            }
            else if (!Array.isArray(tablename)) {
                _tablestogenerate = tablename;
            }
            me.getrawNoRequestPromise('mobilebilling/api/order/getgenerateexport?driverId=' + driverid + '&tablename=' + _tablestogenerate + "&orders=" + orderIds).then((exportResponse) => {
                console.log('generated file: ' + exportResponse);
                if (tablename == "complete_order") {
                    me.commonSQL.executeQuery('DELETE FROM tblMBILOrder WHERE strOrderNumber NOT IN (' + orderIds + ')').then((res) => {
                        console.log(res);
                        console.log('orders deleted');
                    });
                }
                else {
                }
                var _data = JSON.parse(exportResponse);
                console.log(_data);
                _filename = _data['data'];
                console.log(_filename);
                me.file.checkDir(me.file.dataDirectory, 'export_data').then(res => {
                    me.getZipAndExtract(_filename, tablename).then((res) => {
                        console.log('IMPORTING getGenerateExport DONE ==> ', res);
                        resolve(res);
                    }, err => {
                        console.log(err);
                        reject(err);
                    });
                }).catch(err => {
                    console.log(err);
                    me.file.createDir(me.file.dataDirectory, 'i21_files', false).then(res => {
                        console.log('folder created');
                        me.file.createDir(me.file.dataDirectory, 'export_data', false).then(res => {
                            console.log('folder created');
                            me.getZipAndExtract(_filename, tablename).then((res) => {
                                console.log('IMPORTING getGenerateExport DONE ==> ', res);
                                resolve(res);
                            }, err => {
                                console.log(err);
                                reject(err);
                            });
                        });
                    });
                });
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    getZipAndExtract(filename, tablenames) {
        var me = this;
        var _filename = filename;
        return new Promise((resolve, reject) => {
            me.getzipPromise('Export/MobileBilling/' + 'mobile_billing_' + _filename + '.zip').then((response) => {
                console.log('downloaded zip: ' + response);
                me.file.checkDir(me.file.dataDirectory, 'export_data').then(res => {
                    console.log('inside folder');
                    me.file.writeFile(me.file.dataDirectory + 'export_data/', 'mobile_billing_' + _filename + '.zip', response, { replace: true }).then(fileEntry => {
                        console.log('created zip file: ' + fileEntry);
                        me.zip.unzip(me.file.dataDirectory + 'export_data/' + 'mobile_billing_' + _filename + '.zip', me.file.dataDirectory + "i21_files/", (progress) => console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%'))
                            .then((result) => {
                            console.log('unzip result: ' + result);
                            if (result === 0) {
                                console.log('SUCCESS');
                                // var _jsonFiles = [
                                //                     'tblCustomerSpecialPricing',
                                //                     'tblInventoryItem',
                                //                     'tblContractExport',
                                //                     'tblFullTax',
                                //                     'tblCategoryTax',
                                //                     'tblEntityLocation',
                                //                     'tblCustomerTaxExemption',
                                //                     'tblCategoryTaxExemption',
                                //                     'tblARCustomer',
                                //                     'tblTMSite',
                                //                     'tblSMTruck',
                                //                     'tblTMDeliveryHistory',
                                //                     'tblTMSiteDevice',
                                //                     'tblSMTerm',
                                //                     'tblSMLocation',
                                //                     'tblMBILCompanyPreference',
                                //                     'tblMBILOrder',
                                //                     'tblMBILOrderItem',
                                //                     'tblMBILOrderTaxCode'
                                //                     'tblSMCompanySetup'
                                //                 ];         
                                var _jsonFiles = [];
                                if (tablenames == 'all') {
                                    _jsonFiles = [
                                        'tblCustomerSpecialPricing',
                                        'tblCustomerMultiLevelPricing',
                                        'tblInventoryItem',
                                        'tblContractExport',
                                        'tblFullTax',
                                        'tblCategoryTax',
                                        'tblEntityLocation',
                                        'tblCustomerTaxExemption',
                                        'tblCategoryTaxExemption',
                                        'tblARCustomer',
                                        'tblTMSite',
                                        'tblSMTruck',
                                        'tblTMDeliveryHistory',
                                        'tblTMSiteDevice',
                                        'tblSMTerm',
                                        'tblSMLocation',
                                        'tblSMPaymentMethod',
                                        'tblMBILCompanyPreference',
                                        'tblMBILOrder',
                                        'tblMBILOrderItem',
                                        'tblMBILOrderTaxCode',
                                        'tblSMCompanySetup'
                                    ];
                                }
                                else if (!Array.isArray(tablenames)) {
                                    _jsonFiles.push(tablenames);
                                }
                                else {
                                    _jsonFiles = tablenames;
                                }
                                if (tablenames == "complete_order") {
                                    _jsonFiles = [
                                        'tblMBILOrder',
                                        'tblMBILOrderItem',
                                        'tblMBILOrderTaxCode'
                                    ];
                                }
                                const _totalTable = _jsonFiles.length;
                                var _updateFlag = 0;
                                _jsonFiles.forEach(tablename => {
                                    console.log(tablename);
                                    var _file = tablename + _filename;
                                    me.file.readAsBinaryString(me.file.dataDirectory + 'i21_files/', _file + ".json").then(content => {
                                        me.commonSQL.importDataFromServer(content).then(res => {
                                            console.log(tablename + '  IMPORTED SUCCESS ==> ', res);
                                            var _now = new Date();
                                            me.syncDeviceDataBRL.updateByQuery("UPDATE syncdevicedata SET dtmTableLastUpdated = '" + _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString() + "', intTotal = '" + JSON.parse(content).data.inserts[tablename].length + "' WHERE strTableName = '" + tablename + "'").then(res => {
                                                console.log(res);
                                                _updateFlag++;
                                                if (_updateFlag == _totalTable) {
                                                    resolve(res);
                                                }
                                            }).catch(err => {
                                                console.log('ERROR UPDATING ' + tablename + ' ==> ', err);
                                                _updateFlag++;
                                                if (_updateFlag == _totalTable) {
                                                    reject(err);
                                                }
                                            });
                                        }).catch(err => {
                                            console.log('ERROR INSERTING importDataFromServer ' + _file + ' ==> ', err);
                                            _updateFlag++;
                                            if (_updateFlag == _totalTable) {
                                                reject(err);
                                            }
                                        });
                                    })
                                        .catch(err => {
                                        console.log('ERROR => ' + err);
                                        _updateFlag++;
                                        if (_updateFlag == _totalTable) {
                                            reject(err);
                                        }
                                    });
                                });
                            }
                            if (result === -1) {
                                console.log('FAILED');
                                reject(res);
                            }
                            // return result;
                        });
                    });
                });
            });
        });
    }
    processReceiveFulldata(record, data, location, global, callback) {
        return new Promise((resolve, reject) => {
            var me = this;
            me.globalInfo = global;
            console.log('++++++ START FULL DATA +++++++ ');
            debugger;
            var _record = new _framework_models_syncdevicedata__WEBPACK_IMPORTED_MODULE_10__.SyncDeviceData();
            me.syncDeviceDataBRL.get(_record).then(res => {
                console.log('++++++++ SYNC DATA ++++++++');
                console.log(res);
                if (res.length > 1) {
                    const _intDriverNumber = data['intDriverNumber'];
                    const _strFullName = data['strFullName'];
                    var _tablesToGet = [];
                    console.log(data);
                    for (var x = 0; x <= res['length'] - 1; x++) {
                        if (res[x]['ysnIncludeSyncAll'] == 'true' || res[x]['ysnIncludeSyncAll'] == true) {
                            _tablesToGet.push(res[x]['strTableName']);
                        }
                    }
                    console.log('TABLES TO GET ==========>');
                    console.log(_tablesToGet);
                    me.getGenerateExport(_intDriverNumber, _tablesToGet, "").then(res => {
                        console.log('export all: ', res);
                        resolve(res);
                    }).catch(err => {
                        reject(err);
                    });
                }
            });
        });
    }
    getExportFiles() {
        let me = this;
        return new Promise((resolve, reject) => {
            var _url = 'mobilebilling/api/order/getexport';
            me.getrawNoRequestPromise(_url).then((data) => {
                console.log('FILE NAMES' + data);
                resolve(data);
            }, err => {
                console.log(err);
                reject(err);
            });
        });
    }
    // +++++++++ GLOBAL RECIEVE DATA +++++++++
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
    refreshTable() {
        var me = this;
        return new Promise((resolve, reject) => {
            me.commonSQL.DropAndCreate('', true).then(() => {
                console.log('+++++++ TABLE REFRESHED +++++++++');
                resolve(me);
            });
        });
    }
    sqlBufferTime(callback) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "inserting data...", backdropDismiss: true });
            return new Promise((resolve, reject) => {
                loader.present();
                var refreshBuff = function () {
                    loader.dismiss();
                    me.message.showAlertInfoMessage('Data successfully imported!');
                    clearInterval(me.fullDataBufferInterval);
                    resolve(true);
                };
                me.fullDataBufferInterval = setInterval(function () { refreshBuff(); }, 15000);
            });
        });
    }
    // processReceiveOrder(loader, record, data, global) {
    //   var me = this;
    //   me.globalInfo = global;
    //   var refresh = function() {
    //     if (me.counter >= 3) {
    //       if(loader) loader.dismiss();
    //       me.counter = 0;
    //       var _date = new Date();
    //       record['dtmReceivedOrders'] = me.getDateFormat(_date);
    //       data['dtmReceivedOrders'] = record.dtmReceivedOrders;
    //       data['totalOrderReceived'] = me.totalOrderReceived;
    //       data['strTotalOrderReceived'] = me.totalOrderReceived + ' Orders Received';
    //       var _record = new GlobalInfo();
    //       _record.intGlobal = record.intGlobal;
    //       _record.dtmReceivedOrders = record.dtmReceivedOrders;
    //       _record.strTotalOrderReceived = me.totalOrderReceived + ' Orders Received';
    //       me.globalBRL.update(_record);
    //       clearInterval(me.receiveOrderInterval);
    //       console.log('++++++++++++++ FINISH ORDERS IMPORT ++++++++++++++');
    //       me.sqlBufferTime(null);
    //     }
    //   }    
    //   me.receiveOrderInterval = setInterval(function(){ refresh() }, 1000);
    //   var _record = new SyncDeviceData();
    //   var _default = me.syncDeviceDataBRL.defaultRecord(_record);
    //   console.log(_record);
    //   me.syncDeviceDataBRL.createTable(_record).then(res=> {
    //     me.syncDeviceDataBRL.get(_record).then(res => {    
    //       console.log(res);
    //       ;
    //       if(res.length > 1) {
    //         me.syncDeviceDataBRL.get(_record).then(res => {
    //           var _intDriverNumber = data['intDriverNumber'];
    //           var strFullName = data['strFullName'];
    //           data = res;
    //           data['intDriverNumber'] = _intDriverNumber;
    //           data['strFullName'] = strFullName;
    //           for(var x = 0; x <= data['length'] - 1; x++) {
    //             console.log(data[x]['strTableName']);
    //             if(data[x]['strTableName'] == 'orders' || data[x]['strTableName'] == 'orderitem' || data[x]['strTableName'] == 'ordertaxcode') {
    //               me.updateData(data[x], true, me.globalInfo);
    //             }
    //           } 
    //         });
    //       }
    //       else {
    //         me.syncDeviceDataBRL.addBulk(_record,_default).then(res => {    
    //           me.syncDeviceDataBRL.get(_record).then(res => {
    //             const _intDriverNumber = data['intDriverNumber'];
    //             const _strFullName = data['strFullName'];
    //             data = res;
    //             data['intDriverNumber'] = _intDriverNumber;
    //             data['strFullName'] = _strFullName;
    //             for(var x = 0; x <= data['length'] - 1; x++) {
    //               console.log(data[x]['strTableName']);
    //               if(data[x]['strTableName'] == 'orders' || data[x]['strTableName'] == 'orderitem' || data[x]['strTableName'] == 'ordertaxcode') {
    //                 me.updateData(data[x], true, me.globalInfo);
    //               }
    //             } 
    //           })
    //         });
    //       }        
    //     });
    //   });
    // }
    // processReceiveFulldata(record: any, loader: any, data: any, location: any, global: any, callback: any): Promise<any>  {
    //   return new Promise ((resolve, reject) => { 
    //     var me = this;
    //     me.globalInfo = global;
    //     console.log('++++++ START FULL DATA +++++++ ' + me.counter);
    //     var refresh = function() {
    //       console.log('++++++ REFRESH COUNTER +++++++ ' + me.counter);
    //       if (me.counter >= 16) {
    //         console.log('++++++ REFRESH COUNTER +++++++ ' + me.counter);
    //         loader.dismiss();
    //         me.counter = 0;
    //         var _date = new Date();
    //         record.dtmReceivedFullData = me.getDateFormat(_date);
    //         data['dtmReceivedFullData'] = record.dtmReceivedFullData;
    //         data['strTotalOrderReceived'] = me.totalOrderReceived + ' Orders Received';
    //         var _record = new GlobalInfo();
    //         _record.intGlobal = record.intGlobal;
    //         _record.dtmReceivedFullData = record.dtmReceivedFullData;
    //         _record.strTotalOrderReceived = me.totalOrderReceived + ' Orders Received';
    //         console.log('default location');
    //         console.log(location); 
    //         if(location['length'] > 0) {
    //           _record.strLocation = location[0].strLocationName;
    //           _record.intLocation = location[0].intCompanyLocationId;
    //           data['intLocation'] = location[0].intCompanyLocationId;
    //         }                
    //         me.globalBRL.update(_record);                              
    //         clearInterval(me.fullDataInterval);
    //         console.log(data);
    //         console.log('++++++++++++++ FINISH IMPORT ++++++++++++++');
    //         me.sqlBufferTime(callback).then((res)=>{
    //           resolve(res);
    //         })          
    //       }
    //     }    
    //     me.fullDataInterval = setInterval(function(){ refresh() }, 1000);
    //     var _record = new SyncDeviceData();
    //     var _default = me.syncDeviceDataBRL.defaultRecord(_record);
    //     me.syncDeviceDataBRL.get(_record).then(res => {    
    //       console.log('++++++++ SYNC DATA ++++++++');
    //       console.log(res);
    //       if(res.length > 1) {
    //         me.syncDeviceDataBRL.get(_record).then(res => {
    //           const _intDriverNumber = data['intDriverNumber'];
    //           const _strFullName = data['strFullName'];
    //           data = res;
    //           data['intDriverNumber'] = _intDriverNumber;
    //           data['strFullName'] = _strFullName;
    //           console.log(data);
    //           for(var x = 0; x <= data['length'] - 1; x++) {
    //             if(data[x]['ysnIncludeSyncAll'] != 'true') {
    //               me.counter++;
    //             }
    //             else{
    //               me.commonSQL.DropAndCreate(data[x], false).then(table=> { 
    //                 console.log(table); 
    //                 me.updateData(table, false, me.globalInfo); 
    //               });
    //             }
    //           }
    //         });
    //       }
    //       else {
    //         me.syncDeviceDataBRL.addBulk(_record,_default).then(res => {    
    //           console.log(res);
    //           me.syncDeviceDataBRL.get(_record).then(res => {                      
    //             const _intDriverNumber = data['intDriverNumber'];
    //             const _strFullName = data['strFullName'];
    //             data = res;
    //             data['intDriverNumber'] = _intDriverNumber;
    //             data['strFullName'] = _strFullName;
    //             console.log(data);
    //             for(var x = 0; x <= data['length'] - 1; x++) {
    //               if(data[x]['ysnIncludeSyncAll'] != 'true') {
    //                 me.counter++;
    //               }
    //               else{
    //                 me.commonSQL.DropAndCreate(data[x], false).then(table=> { 
    //                   console.log(table); 
    //                   me.updateData(table, false, me.globalInfo); 
    //                 });
    //               }
    //             }
    //           })
    //         });
    //       }        
    //     });
    //   });
    // }
    getShift() {
        let me = this;
        return me.getraw('mobilebilling/api/shift/startshift')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.tap)(response => response));
    }
    // updateDeviceDataList(item: SyncDeviceData, records: any, entity: any, data: any, createTable: boolean): Promise<any> {
    //   var me = this,
    //       _now = new Date();
    //   return new Promise ((resolve, reject) => {
    //     if(createTable == true) {
    //       me.commonSQL.createTable(entity).then(res => {
    //         console.log(item);
    //         console.log(records);
    //         console.log(entity);
    //         console.log(data);
    //         console.log(records.length);
    //         if(records.length < 1 || records['total'] < 1){
    //           console.log(records);
    //           me.counter++;
    //           resolve(res);
    //         }
    //         else {
    //           me.syncDeviceDataBRL.addBulk(entity,data).then(res => {
    //             item.dtmTableLastUpdated = _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString();
    //             var record = new SyncDeviceData();
    //             record.dtmTableLastUpdated = item.dtmTableLastUpdated;
    //             record.intTableStatus = item.intTableStatus;
    //             record.strDisplayName = item.strDisplayName;
    //             record.strTableName = item.strTableName;
    //             record.ysnTableWithErrors = item.ysnTableWithErrors;
    //             record.intTotal = records.total || records.length;
    //             me.syncDeviceDataBRL.update(record).then(res => {
    //               console.log(res);
    //               me.counter++;
    //               resolve(res);
    //             });        
    //           });
    //         }
    //       });
    //     }
    //     else {
    //       if(records.length < 1 || records['total'] < 1){
    //         console.log(records);
    //         me.counter++;
    //         resolve(records);
    //       }
    //       else {
    //         me.syncDeviceDataBRL.addBulk(entity,data).then(res => {
    //           item.dtmTableLastUpdated = _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString();
    //           var record = new SyncDeviceData();
    //           record.dtmTableLastUpdated = item.dtmTableLastUpdated;
    //           record.intTableStatus = item.intTableStatus;
    //           record.strDisplayName = item.strDisplayName;
    //           record.strTableName = item.strTableName;
    //           record.ysnTableWithErrors = item.ysnTableWithErrors;
    //           record.intTotal = records.total || records.length;
    //           me.syncDeviceDataBRL.update(record).then(res => {
    //             console.log(res);
    //             me.counter++;
    //             console.log('+++++++ COUNTER CHECKER ++++++++++ ' + me.counter + ' - ' + item.strTableName);
    //             resolve(res);
    //           });        
    //         });
    //       }        
    //     }
    //   });    
    // }
    // updateData(item, skip, global) {    
    //   var me = this;
    //   console.log(item);
    //   me.globalInfo = global;
    //   if(!item) return; 
    //   switch(item.strTableName) {
    //     case 'orders':
    //         me.getOrder(me.globalInfo.intDriverNumber).subscribe((res)=>{ 
    //           console.log(res);   
    //           if(res.total == 0) { me.counter++; return; }
    //           me.totalOrderReceived = res.total;
    //           let _rawData = res;
    //           let _entity = new Order();          
    //           me.commonSQL.dropTable(_entity).then(res => {              
    //             me.getOrderItemData(me.itemOrderItem);
    //             return me.updateDeviceDataList(item,_rawData, _entity, _rawData, true);         
    //           });
    //         });
    //         break;
    //       case 'orderitem':
    //         // me.i21syncDeviceService.getOrderItem(me.globalInfo.intDriverNumber).subscribe(res=>{
    //         //   console.log(res);   
    //         //   if(res['total'] == 0) { me.counter++; return; }
    //         //   let _rawData = res;
    //         //   let _entity = new OrderItem();
    //         //   me.commonSQL.dropTable(_entity).then(res => {
    //         //     console.log(res);                                
    //         //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
    //         //   });
    //         // });
    //         me.itemOrderItem = item;
    //         break;
    //       case 'ordertaxcode':
    //         // me.i21syncDeviceService.getOrderTaxCode(me.globalInfo.intDriverNumber).subscribe(res=>{
    //         //   console.log(res);   
    //         //   if(res['total'] == 0) { me.counter++; return; }
    //         //   let _rawData = res;
    //         //   let _entity = new OrderTaxCode();
    //         //   me.commonSQL.dropTable(_entity).then(res => {
    //         //     console.log(res);                                
    //         //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
    //         //   });
    //         // });
    //         me.itemOrderItemTaxCode = item;
    //         break;
    //     case 'customer':
    //         me.getCustomer().subscribe(res=>{
    //           console.log(res);   
    //           if(res['total'] == 0) { me.counter++; return; }
    //           let _rawData = res;
    //           let _entity = new Customer();             
    //           return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
    //         });
    //         break;
    //     case 'consumptionsite':
    //         me.getConsumptionSite().subscribe(res=>{
    //           console.log(res);   
    //           if(res['total'] == 0) { me.counter++; return; }
    //           let _rawData = res;
    //           let _entity = new ConsumptionSite();         
    //           return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
    //         });
    //         break;            
    //     case 'tblTMDeliveryHistory':
    //       // me.i21syncDeviceService.getDeliveryHistory().subscribe(res=>{
    //       //   console.log(res);   
    //       //   if(res['total'] == 0) { me.counter++; return; }
    //       //   let _rawData = res;
    //       //   let _entity = new DeliveryHistory();
    //       //   me.commonSQL.dropTable(_entity).then(res => {
    //       //     console.log(res);                                
    //       //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
    //       //   });
    //       // });
    //       me.counter++;
    //       break;  
    //     case 'device':
    //       me.getDevice().subscribe(res=>{
    //         console.log(res);   
    //         if(res['total'] == 0) { me.counter++; return; }
    //         let _rawData = res;
    //         let _entity = new Device();                       
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip); 
    //       });
    //       break;   
    //     case 'item':
    //       // me.i21syncDeviceService.getItem().subscribe(res=>{
    //       //   console.log(res);   
    //       //   if(res['total'] == 0) { me.counter++; return; }
    //       //   let _rawData = res;
    //       //   let _entity = new Item();
    //       //   me.commonSQL.dropTable(_entity).then(res => {
    //       //     console.log(res);                                
    //       //     return me.updateDeviceDataList(item,_rawData, _entity, _rawData);         
    //       //   });
    //       // });
    //       me.counter++;
    //       break;
    //     case 'applicabletaxcode':
    //       me.getApplicableTaxCode().subscribe(res=>{
    //         console.log(res);   
    //         if(res['total'] == 0) { me.counter++; return; }
    //         let _rawData = res;
    //         let _entity = new ApplicableTaxCode();                      
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
    //       });
    //       break;
    //     case 'taxcode':
    //       me.getTaxCode().subscribe(res=>{
    //         console.log(res);   
    //         if(res['total'] == 0) { me.counter++; return; }
    //         var _res = res['data'];          
    //         var _newRes = {data:[],success:true,total:100};
    //         for(var x = 0; x <= _res.length - 1; x++) {
    //           for(var y = 0; y <= _res[x]['tblSMTaxCodeRates'].length - 1; y++) {
    //             var _record = {};                          
    //             _record['intTaxCodeId'] = _res[x].intTaxCodeId;
    //             _record['strTaxCode'] = _res[x].strTaxCode;
    //             _record['dblRate'] = _res[x]['tblSMTaxCodeRates'][y].dblRate;
    //             _record['dtmEffectiveDate'] = _res[x]['tblSMTaxCodeRates'][y].dtmEffectiveDate;
    //             _record['strCalculationMethod'] = _res[x]['tblSMTaxCodeRates'][y].strCalculationMethod;
    //             _record['intTaxCodeRateId'] = _res[x]['tblSMTaxCodeRates'][y].intTaxCodeRateId;
    //             _newRes['data'].push(_record);
    //           }
    //         }
    //         _newRes['total'] = _newRes['data'].length;
    //         console.log(_newRes);
    //         let _rawData = _newRes;
    //         let _entity = new TaxCode();              
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
    //       });
    //       break;
    //     case 'terms':
    //       me.getTerms().subscribe(res=>{
    //         console.log(res);   
    //         if(res['total'] == 0) { me.counter++; return; }
    //         let _rawData = res;
    //         let _entity = new Terms();                            
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip); 
    //       });
    //       break;
    //     case 'location':
    //       me.getLocation(me.globalInfo.ContactParentId).subscribe(res=>{
    //         console.log(res);   
    //         var _res = res;
    //         if(res['total'] == 0 || res['length'] == 0) { me.counter++; return; }
    //         let _rawData = _res;
    //         let _entity = new Location();              
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
    //       });
    //       break;
    //     case 'contractheader':
    //       me.getContractHeader().subscribe(res=>{
    //         console.log(res);   
    //         if(res['total'] == 0) { me.counter++; return; }
    //         let _rawData = res;
    //         let _entity = new ContractHeader();
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);
    //       });
    //       break;
    //     case 'contractdetail':
    //       me.getContractDetail().subscribe(res=>{
    //         console.log(res);   
    //         var _res = res;
    //         if(res['total'] == 0 || res['length'] == 0) { me.counter++; return; }
    //         let _rawData = _res;
    //         let _entity = new ContractDetail();
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);  
    //       });
    //       break;
    //     case 'configuration':
    //       me.getConfiguration().subscribe(res=>{
    //         console.log(res);   
    //         if(res['total'] == 0) { me.counter++; return; }
    //         let _rawData = res;
    //         let _entity = new CompanyPreference();
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip); 
    //       });
    //       break;
    //     case 'truck':
    //       me.getTruck().subscribe(res=>{
    //         console.log(res);   
    //         if(res['total'] == 0) { me.counter++; return; }
    //         let _rawData = res;
    //         let _entity = new Truck();                             
    //         return me.updateDeviceDataList(item,_rawData, _entity, _rawData, skip);         
    //       });
    //       break;
    //     case 'tblCustomerSpecialPricing':
    //       me.getGenerateExport('all').then(res=>{
    //         console.log('export all: ' + res);   
    //         me.counter++; return;
    //       }).catch(err => {
    //         me.counter++; return;
    //       });
    //       break;
    //     default:
    //         console.log(item);
    //   }
    // }
    // getOrderItemData(item) {
    //   var me = this;
    //   me.getOrderItem(me.globalInfo.intDriverNumber).subscribe(res=>{
    //     console.log(res);   
    //     if(res['total'] == 0) { me.counter++; return; }
    //     let _rawData = res;
    //     let _entity = new OrderItem();
    //     me.commonSQL.dropTable(_entity).then(res => {
    //       me.getOrderItemTaxData(me.itemOrderItemTaxCode);
    //       return me.updateDeviceDataList(item,_rawData, _entity, _rawData, true);         
    //     });
    //   });
    // }
    // getOrderItemTaxData(item) {
    //   var me = this;
    //   me.getOrderTaxCode(me.globalInfo.intDriverNumber).subscribe(res=>{
    //     console.log(res);   
    //     if(res['total'] == 0) { me.counter++; return; }
    //     let _rawData = res;
    //     let _entity = new OrderTaxCode();
    //     me.commonSQL.dropTable(_entity).then(res => {
    //       return me.updateDeviceDataList(item,_rawData, _entity, _rawData, true);         
    //     });
    //   });
    // }
    // +++++++++ API INTEGRATION CALLS +++++++++
    // getCustomer(): Observable<Customer> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('accountsreceivable/api/report/searchcustomerinquiryreport', request)
    //   .pipe(tap(response => <Customer>response));
    // }      
    // getConsumptionSite(): Observable<ConsumptionSite> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('tankmanagement/api/mobilebilling/searchconsumptionsites', request)
    //   .pipe(tap(response => <ConsumptionSite>response));
    // }
    // getDeliveryHistory(): Observable<DeliveryHistory> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('tankmanagement/api/mobilebilling/searchdeliveryhistory', request)
    //   .pipe(tap(response => <DeliveryHistory>response));
    // }
    // getDevice(): Observable<Device> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('tankmanagement/api/mobilebilling/getsitedevices', request)
    //   .pipe(tap(response => <Device>response));
    // }
    // getItem(): Observable<Item> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('inventory/api/item/searchitemlite', request)
    //   .pipe(tap(response => <Item>response)); 
    // }
    // getApplicableTaxCode(): Observable<ApplicableTaxCode> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('tankmanagement/api/mobilebilling/searchconsumptionsites', request)
    //   .pipe(tap(response => <ApplicableTaxCode>response));
    // }
    // getTaxCode(): Observable<TaxCode> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('i21/api/taxcode/get', request)
    //   .pipe(tap(response => <TaxCode>response));
    // }
    // getTerms(): Observable<Terms> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('i21/api/term/search', request)
    //   .pipe(tap(response => <Terms>response));
    // }
    // getLocation(id): Observable<Location> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999,
    //     filter: [{c:"intEntityId",v:id,cj:"or",g:"g0"}]
    //   });
    //   return me.getraw('i21/api/companylocation/search', request)
    //   .pipe(tap(response => <Location>response));
    // }  
    // getContractHeader(): Observable<ContractHeader> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('ContractManagement/api/contractHeader/SearchMBILContractHeader', request)
    //   .pipe(tap(response => <ContractHeader>response));
    // }
    // getContractDetail(): Observable<ContractDetail> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('ContractManagement/api/contractHeader/SearchMBILContractDetail', request)
    //   .pipe(tap(response => <ContractDetail>response));
    // }
    // getOrder(driverId): Observable<any> {
    //   let me = this;
    //   let request = new GetRequest({      
    //     filter: driverId
    //   });
    //   return me.getraw('mobilebilling/api/order/getorder', request)
    //   .pipe(tap(response => {
    //     console.log(response);
    //     return <Order>response;
    //   }));
    // }
    // getOrderItem(driverId): Observable<any> {
    //   let me = this;
    //   let request = new GetRequest({      
    //     filter: driverId
    //   });
    //   return me.getraw('mobilebilling/api/order/getorderitem', request)
    //   .pipe(tap(response => {
    //     ;
    //     <OrderItem>response;
    //   }));
    // }
    // getOrderTaxCode(driverId): Observable<any> {
    //   let me = this;
    //   let request = new GetRequest({      
    //     filter: driverId
    //   });
    //   return me.getraw('mobilebilling/api/order/getordertaxcode', request)
    //   .pipe(tap(response => <OrderTaxCode>response));
    // }
    // getConfiguration(): Observable<any> {
    //   let me = this;
    //   let request = new GetRequest();
    //   return me.getraw('mobilebilling/api/companypreference/get', request)
    //   .pipe(tap(response => <CompanyPreference>response));
    // }
    // getTruck(): Observable<any> {
    //   let me = this;
    //   let request = new GetRequest({
    //     page: 1,
    //     start: 0,
    //     limit: 99999
    //   });
    //   return me.getraw('i21/api/truck/get',request)
    //   .pipe(tap(response => <Truck>response));
    // }
    //++++++++Changes done by Neha +++++++++++++//// 
    getOrderInterval(driverID, loader) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            //debugger;
            console.log("DRIVERID =======", driverID);
            var me = this;
            if (loader != null) {
                loader.present();
            }
            this.getPreviosOrderList(driverID);
            me.commonSQL.getDataQuery('SELECT strOrderNumber FROM tblMBILOrder WHERE strOrderStatus = \'Delivered\'').then((res) => {
                var _orderIds = "'";
                res.forEach(order => {
                    _orderIds = _orderIds + order['strOrderNumber'] + "', '";
                });
                me.getGenerateExport(driverID || 0, 'complete_order', _orderIds + "0'").then((data) => {
                    console.log(data);
                    if (loader != null) {
                        loader.dismiss();
                    }
                    me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
                        var _date = new Date();
                        console.log(res);
                        me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res => {
                            me.getOrderList(driverID, '', '');
                        });
                    });
                }, err => {
                    console.log(err);
                    if (loader != null) {
                        loader.dismiss();
                    }
                    // loader.dismiss();
                });
            });
        });
    }
    getPreviosOrderList(driverID) {
        var me = this, _query = '';
        this.previousOrders = [];
        var filter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
        // var sort = 
        me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
            console.log("AFTER SEND SHIFT DATA ===", res);
        });
        _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
                   CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
                   tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice,
                   tblMBILOrderItem.intContractDetailId, tblContractExport.strContractNumber,
                   IFNULL(tblContractExport.dblAvailableQty,0) as dblAvailableQty,
                   (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
            FROM tblMBILOrder
            LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
            LEFT JOIN tblTMSite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteID
            LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
            LEFT JOIN tblContractExport ON tblContractExport.intContractDetailId = tblMBILOrderItem.intContractDetailId
            Where tblMBILOrder.intDriverId = '${driverID}'`;
        console.log(_query + ' and ' + filter);
        me.commonSQL.getDataQuery(_query + ' and ' + filter)
            .then(res => {
            //debugger;
            this.previousOrders = res;
            console.log("PREVIOUS ORDERS ===", me.previousOrders);
        }, err => {
            console.log(err);
            // loader.dismiss();
        });
        // return from(
        //   me.commonSQL.getDataQuery(_query).then(
        //     res => {
        //       me.allOrders = res;
        //      console.log(me.allOrders);
        //       return me.allOrders;
        //     }
        //   )
        // ).pipe(map(m => <any>m));
    }
    getOrderList(driverID, filter, currentSort) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            // me.data = [];
            me.allOrders = [];
            me.newOrdersList = [];
            var deliveredOrder = [];
            var dispatchedOrder = [];
            // let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
            // loader.present();
            me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
                console.log("AFTER SEND SHIFT DATA ===", res);
            });
            _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
                   CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
                   tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice,
                   tblMBILOrderItem.intContractDetailId, tblContractExport.strContractNumber,
                   IFNULL(tblContractExport.dblAvailableQty,0) as dblAvailableQty,
                   (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
            FROM tblMBILOrder
            LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
            LEFT JOIN tblTMSite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteID
            LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
            LEFT JOIN tblContractExport ON tblContractExport.intContractDetailId = tblMBILOrderItem.intContractDetailId
            Where tblMBILOrder.intDriverId = '${driverID}'`;
            // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';
            if (filter != '') {
                _query = _query + ' and ' + filter + ' ' + currentSort;
            }
            console.log(_query);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_16__.from)(me.commonSQL.getDataQuery(_query)
                .then(res => {
                me.allOrders = [];
                me.allOrders = res;
                console.log('all orders are here. . .');
                console.log(me.allOrders);
                if (this.previousOrders.length != 0) {
                    console.log("previous order in GetOrderList", this.previousOrders);
                    me.newOrdersList = this.allOrders.filter(({ strOrderNumber: id1 }) => !this.previousOrders.some(({ strOrderNumber: id2 }) => id2 === id1));
                    console.log("DIfference between orders ====", me.newOrdersList);
                }
                var _strOrder = '';
                var _strRoute = '';
                var _hasNoRoute = false;
                me.data = [];
                for (var x = 0; x <= res.length - 1; x++) {
                    if (_strOrder != res[x].strOrderNumber) {
                        if (res[x].strOrderStatus != 'Delivered') {
                            if (res[x].dblQuantity > res[x].dblTankQuantity) {
                                res[x].strOrderStatus = 'fuelnotenough';
                            }
                        }
                        if (res[x].strRouteId == null) {
                            res[x].strRouteId2 = 'NOROUTE';
                            if (_hasNoRoute == false) {
                                res[x].intSequence = 1;
                                _hasNoRoute = true;
                            }
                        }
                        else if (_strRoute != res[x].strRouteId) {
                            res[x].strRouteId2 = 'XXX';
                        }
                        console.log(res[x]);
                        for (var i = 0; i <= me.newOrdersList.length - 1; i++) {
                            if (res[x].strOrderStatus != 'Delivered') {
                                this.isNewOrder = false;
                                if (me.newOrdersList[i].strOrderNumber == res[x].strOrderNumber) {
                                    res[x].strOrderStatus = 'NEW';
                                    this.isNewOrder = true;
                                }
                                this.isNewOrderSubject$.next(this.isNewOrder);
                                //console.log("ORDER NUMER ==",me.newOrdersList[i].strOrderNumber,res[x].strOrderNumber,res[x].strOrderStatus)
                            }
                        }
                        if (res[x].strOrderStatus == 'Delivered') {
                            deliveredOrder.push(res[x]);
                            console.log("DELIVERED= ", deliveredOrder);
                        }
                        else {
                            dispatchedOrder.push(res[x]);
                            console.log("dispatchedOrder= ", dispatchedOrder);
                        }
                        me.data.push(res[x]);
                        // console.log("NEW ORDERS ARARAA ===",me.data)
                    }
                    //loader.dismiss();
                    _strOrder = res[x].strOrderNumber;
                    _strRoute = res[x].strRouteId;
                }
                this.OrderData = dispatchedOrder;
                this.OrderSubject$.next(this.OrderData);
                if (filter == ' tblMBILOrder.strOrderStatus != \'Delivered\' ') {
                    return dispatchedOrder;
                }
                else
                    return deliveredOrder;
                //return this.data
            })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.map)(m => m));
        });
    }
    // async InCompleteOrder() {
    //   // console.log(record);
    //   var me = this;
    //   me.ordersInLocal = []
    //   me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
    //     console.log(res);
    //     this.ordersInLocal = res;
    //     var _orderIds =  "'";
    //     me.getGenerateExport(me.globalInfo.intDriverNumber || 0,'complete_order', _orderIds + "0'").then((data)=>{
    //       console.log(data);
    //       me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
    //         var _date = new Date();
    //         console.log(res);
    //         me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
    //           me.sendIncompleteOrders();
    //         });
    //       });
    //     });
    //   });
    // }
    // async sendIncompleteOrders() {
    //   var me = this,
    //       _query = '';
    //       ;
    //   me.ordersInServer = [];
    //   me.notDeliveredInServerOrders = [];
    //   _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
    //                    CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
    //                    tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice,
    //                    tblMBILOrderItem.intContractDetailId, tblContractExport.strContractNumber,
    //                    IFNULL(tblContractExport.dblAvailableQty,0) as dblAvailableQty,
    //                    (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
    //             FROM tblMBILOrder
    //             LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
    //             LEFT JOIN tblTMSite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteID
    //             LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
    //             LEFT JOIN tblContractExport ON tblContractExport.intContractDetailId = tblMBILOrderItem.intContractDetailId
    //             Where tblMBILOrder.intDriverId = '${ me.globalInfo.intDriverNumber }'`;
    //   // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';
    //   console.log(_query);
    //     me.commonSQL.getDataQuery(_query)
    //     .then(res => {
    //       me.allOrders = res;
    //       me.ordersInServer = res;
    //       console.log('all orders are here. . .')
    //       console.log(me.ordersInServer);
    //       me.notDeliveredInServerOrders = this.ordersInLocal.filter(({ strOrderStatus: id1 }) => !this.ordersInServer.some(({ strOrderStatus: id2 }) => id2 === id1));
    //       debugger;
    //       console.log("DIfference between orders in Server ====",me.notDeliveredInServerOrders);
    //      // this.sendShiftData()
    //       this.getTankDetail()
    //     },
    //     err => {
    //       console.log(err);
    //      // loader.dismiss();
    //     });
    // }
    getTankDetail() {
        // debugger;
        var me = this;
        me.tmUpdate = [];
        var _invoiceitems = [];
        me.commonSQL.getDataQuery("select * from invoice where ysnSendToOffice <> 'true' or ysnSendToOffice IS NULL").then((res) => {
            me.Invoice = res;
            console.log("log 1", res);
        });
        me.commonSQL.getData('invoiceitems').then(res => {
            console.log('INVOICE ITEMS');
            _invoiceitems = res;
            console.log(_invoiceitems);
            for (var x = 0; x <= me.Invoice.length - 1; x++) {
                for (var y = 0; y <= _invoiceitems.length - 1; y++) {
                    if (me.Invoice[x].strInvoiceNo == _invoiceitems[y].strInvoiceNo) {
                        console.log("matching invoice", _invoiceitems[y]);
                        me.tmAlerts = {
                            strCustomerNumber: me.Invoice[x].strCustomerNo,
                            intSiteNumber: _invoiceitems[y].intSiteNumber,
                            dtmDateDelivery: me.datePipe.transform(new Date(), 'yyyy-MM-dd hh:mm:ss a'),
                            // dtmDateDelivery:'',
                            dblQuantity: _invoiceitems[y].dblQuantity,
                            dblPrice: _invoiceitems[y].dblPrice,
                            dblTotal: me.Invoice[x].dblTotal
                        };
                        me.tmUpdate.push(me.tmAlerts);
                    }
                }
            }
        });
        console.log("the TM UPdate", this.tmUpdate);
        this.sendShiftData();
    }
    sendShiftData() {
        var me = this;
        var _shift = [], _invoice = [], _invoiceitems = [], _invoicetaxcodes = [], _outofgass = [], _data = [];
        // debugger;
        // me.commonSQL.getDataQuery('SELECT * FROM invoiceitems').then((res) => {
        //   me.Invoice = res
        //   console.log(me.Invoice);
        //   })
        console.log('SEND SHIFT');
        me.commonSQL.getData('shift').then(res => {
            _shift = res;
            console.log('SHIFT');
            console.log(_shift);
            me.commonSQL.getData('invoice').then(res => {
                console.log('INVOICE');
                console.log(res);
                _invoice = res.filter(x => x.intShiftId == _shift[_shift.length - 1].intShiftId); //res[res.length-1];
                console.log(_invoice);
                me.commonSQL.getData('invoiceitems').then(res => {
                    console.log('INVOICE ITEMS');
                    _invoiceitems = res;
                    console.log(_invoiceitems);
                    me.commonSQL.getData('invoicetaxcodes').then(res => {
                        console.log('TAXES');
                        _invoicetaxcodes = res;
                        console.log(_invoicetaxcodes);
                        _data = _shift[_shift.length - 1];
                        _data['tblMBILInvoices'] = [];
                        console.log('BUILDING INVOICE DATA');
                        for (var x = 0; x <= _invoice.length - 1; x++) {
                            var _temp_invoice = [];
                            _temp_invoice = _invoice[x];
                            if (_temp_invoice['ysnSendToOffice'] != 'true') {
                                console.log(_temp_invoice);
                                for (var y = 0; y <= _invoiceitems.length - 1; y++) {
                                    if (_invoice[x].intOrderId == _invoiceitems[y].intOrderId) {
                                        console.log(_invoiceitems[y]);
                                        // _temp_invoice['tblMBILInvoiceItems'] = [];
                                        if (!_temp_invoice['tblMBILInvoiceItems']) {
                                            _temp_invoice['tblMBILInvoiceItems'] = [];
                                        }
                                        _temp_invoice['tblMBILInvoiceItems'].push(_invoiceitems[y]);
                                        _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
                                        for (var z = 0; z <= _invoicetaxcodes.length - 1; z++) {
                                            if (_invoiceitems[y].intOrderId == _invoicetaxcodes[z].intOrderId) {
                                                if (!_temp_invoice['tblMBILInvoiceItems'][0]) {
                                                    _temp_invoice['tblMBILInvoiceItems'][0] = [];
                                                }
                                                if (_temp_invoice['tblMBILInvoiceItems'][0]) {
                                                    console.log('temp invoice Y');
                                                    console.log(_temp_invoice['tblMBILInvoiceItems'][0]);
                                                    // if(!_temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes']) {
                                                    //   _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
                                                    // }
                                                    _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'].push(_invoicetaxcodes[z]);
                                                    console.log('pushed invoice');
                                                }
                                            }
                                        }
                                    }
                                }
                                console.log(_temp_invoice);
                                _data['tblMBILInvoices'].push(_temp_invoice);
                            }
                        }
                        console.log('before sending entire shift');
                        console.log(_data);
                        var _orderList = '';
                        // for(var x = 0; x <= this.notDeliveredInServerOrders.length-1; x++) {
                        //   _orderList = _orderList + this.notDeliveredInServerOrders[x].strOrderNumber + '\', \'';
                        // }
                        // me.commonSQL.updateDataQuery('UPDATE tblMBILOrder SET strOrderStatus = \'Delivered\' WHERE strOrderNumber IN (\'' + _orderList + '0\')').then(
                        //   res => { console.log(res); console.log('update orders');
                        //   // this.getPreviosOrderList();
                        //   // this.getOrderList();
                        // });
                        for (var x = 0; x <= _invoice.length - 1; x++) {
                            _orderList = _orderList + _invoice[x].intOrderId + '\', \'';
                        }
                        me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => {
                            console.log('syncentireshift');
                            console.log(res);
                            me.commonSQL.updateDataQuery('UPDATE invoice SET ysnSendToOffice = \'true\' WHERE intOrderId IN (\'' + _orderList + '0\')').then(res => { console.log(res); console.log('update invoice'); });
                            // update status
                            console.log('TMUPDATE = ', me.tmUpdate);
                            me.putraw('tankmanagement/api/consumptionsite/updatedispatchordernew', this.tmUpdate).subscribe(res => {
                                console.log('updatedispatchorders');
                                console.log(res);
                            });
                            //email notification
                            me.postraw('tankmanagement/api/consumptionsite/emaildeliveries', this.tmUpdate).subscribe(res => {
                                console.log('emaildeliveries');
                                console.log(res);
                            });
                        });
                    });
                });
            });
        });
    }
};
i21SyncDeviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__.HttpClient },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_11__.HTTP },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.LoadingController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_7__.CommonSQL },
    { type: _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_8__.SyncDeviceDataBRL },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_9__.GlobalInfoBRL },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message },
    { type: _ionic_native_zip_ngx__WEBPACK_IMPORTED_MODULE_0__.Zip },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_1__.File },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_2__.FileOpener },
    { type: _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__.SQLitePorter },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_20__.DatePipe },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_6__.Storage }
];
i21SyncDeviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_21__.Injectable)({
        providedIn: 'root'
    })
], i21SyncDeviceService);



/***/ }),

/***/ 96465:
/*!********************************************!*\
  !*** ./src/app/providers/login.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginService": () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 69412);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 68307);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_common_data_providers_base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../framework/_common/data/providers/base-service */ 47143);
/* harmony import */ var _framework_common_base_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../framework/_common/base/api */ 83949);





 //import { tap, switchMap, catchError, finalize, concatMap } from 'rxjs/operators';



let LoginService = class LoginService extends _framework_common_data_providers_base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService {
    constructor(http, local) {
        super(http);
        this.http = http;
        this.local = local;
        this.serialize = function (obj) {
            var str = [];
            for (var p in obj)
                if (obj.hasOwnProperty(p)) {
                    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                }
            return str.join("&");
        };
    }
    doSignIn(username, password) {
        let me = this;
        return me.postraw('i21/api/usersecurity/signinentity', {
            // grant_type: 'password',
            // usertype: 'Driver',
            username: btoa(username),
            password: btoa(password)
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
            ;
            if (data.LoginMessage == 'Login Successful!') {
                console.log(data);
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.EntityId = data.EntityId;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.FullName = data.strFullName;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.IsAdmin = data.ysnAdmin;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.Rank = data.intRank;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.DefaultLocation = data.intCompanyLocationId;
            }
        }));
    }
    getAuthToken(username, password, company) {
        let me = this;
        var data = me.serialize({ grant_type: 'password', username: username, password: password });
        return me.postrawAuth('Token', data)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(data => {
            ;
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.AuthToken = data.access_token;
            me.addToken(data.access_token);
        }));
    }
    loadCompany() {
        var me = this;
        console.log('LOAD COMPANY');
        let request = new _framework_common_base_api__WEBPACK_IMPORTED_MODULE_3__.GetRequest({
            page: 1,
            start: 0,
            limit: 10
        });
        return me.customget("i21/api/integration/searchcompanylist", request);
    }
    getConnection() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.local.get('connection')
            .then((cred) => {
            console.log(cred);
            let credential = JSON.parse(cred);
            if (!credential) {
                credential = (JSON.parse('{"strLink":"","strCompany":""}'));
            }
            return credential;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(m => m));
    }
    getCredential() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.from)(this.local.get('credential')
            .then((cred) => {
            let credential = JSON.parse(cred);
            return credential;
        })).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(m => m));
    }
    getToken() {
        return this.local.get('token')
            .then((token) => {
            console.log(token);
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_1__.Configuration.AuthToken = token;
            return token;
        });
    }
    addToken(token) {
        this.local.set('token', token);
    }
    addConnection(connection) {
        this.local.set('_servername_' + connection.strLink + '_company_' + connection.strCompany, JSON.parse('{"strLink":"' + connection.strCompany + '","strCompany":"' + connection.strLink + '"}'));
        this.local.set('connection', JSON.stringify(connection));
    }
    addCredential(credential) {
        this.local.set('credential', JSON.stringify(credential));
    }
    deleteCredential() {
        this.local.remove('credential');
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ 57051:
/*!***************************************************************!*\
  !*** ./src/app/providers/refresh-interval-service.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RefreshIntervalServiceService": () => (/* binding */ RefreshIntervalServiceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _i21syncdevice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i21syncdevice.service */ 79561);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 66682);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 22759);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 69165);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);







let RefreshIntervalServiceService = class RefreshIntervalServiceService {
    constructor(i21syncDeviceService, commonSQL, datePipe) {
        this.i21syncDeviceService = i21syncDeviceService;
        this.commonSQL = commonSQL;
        this.datePipe = datePipe;
    }
    clearRefreshInterval() {
        var me = this;
        console.log("clearRefreeshInterval", me.refreshInterval);
        if (me.refreshInterval && me.refreshInterval != null) {
            console.log("clearRefreeshInterval123", me.refreshInterval);
            window.clearInterval(me.refreshInterval);
        }
    }
    createOnline$() {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.merge)((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'offline').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => false)), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.fromEvent)(window, 'online').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(() => true)), new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable((sub) => {
            sub.next(navigator.onLine);
            sub.complete();
        }));
    }
    setRefreshInterval() {
        var me = this;
        me.commonSQL.getDataQuery('select * from globalinfo ').then(res => {
            console.log('global info . . .', res);
            if (res[0]) {
                me.globalInfo = res[0];
            }
        });
        me.refreshInterval = window.setInterval(function () {
            me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber, null);
        }, 60000);
        console.log("SetRefreeshInterval", me.refreshInterval);
        this.createOnline$().subscribe(isOnline => {
            console.log("ONLINE STATUS======", isOnline);
            if (isOnline == true) {
                me.i21syncDeviceService.getTankDetail();
            }
        });
    }
};
RefreshIntervalServiceService.ctorParameters = () => [
    { type: _i21syncdevice_service__WEBPACK_IMPORTED_MODULE_0__.i21SyncDeviceService },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__.CommonSQL },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe }
];
RefreshIntervalServiceService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
        providedIn: 'root'
    })
], RefreshIntervalServiceService);



/***/ }),

/***/ 67119:
/*!*********************************************!*\
  !*** ./src/app/providers/report.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportService": () => (/* binding */ ReportService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pdfmake/build/pdfmake */ 40496);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 33098);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/printer/ngx */ 17008);



// import "rxjs/add/operator/do";
// import { map } from 'rxjs/operators';


(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_1__.pdfMake.vfs;



let ReportService = class ReportService {
    constructor(plt, file, fileOpener, printer) {
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.printer = printer;
    }
    create(docs, filename, toPrint = false, toOpen = false) {
        var me = this;
        var pdfObj = pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_0___default().createPdf(docs);
        console.log('printing');
        if (me.plt.is('cordova')) {
            pdfObj.getBuffer((buffer) => {
                var utf8 = new Uint8Array(buffer), binaryArray = utf8.buffer, _filename = filename;
                me.file.checkDir(me.file.dataDirectory, 'reports').then(res => {
                    me.file.writeFile(me.file.dataDirectory + 'reports/', _filename + '.pdf', binaryArray, { replace: true }).then(fileEntry => {
                        // OPEN PDF
                        if (toOpen) {
                            me.fileOpener.open(me.file.dataDirectory + 'reports/' + _filename + '.pdf', 'application/pdf');
                        }
                        // DIRECT PRINTING
                        if (toPrint) {
                            me.print(pdfObj);
                            // me.printAlter(me.file.dataDirectory + 'reports/' + _filename + '.pdf');
                        }
                    });
                }).catch(err => {
                    me.file.createDir(me.file.dataDirectory, 'reports', false).then(res => {
                        me.file.writeFile(me.file.dataDirectory + 'reports/', _filename + '.pdf', binaryArray, { replace: true }).then(fileEntry => {
                            // OPEN PDF
                            if (toOpen) {
                                me.fileOpener.open(me.file.dataDirectory + 'reports/' + _filename + '.pdf', 'application/pdf');
                            }
                            // DIRECT PRINTING
                            if (toPrint) {
                                me.print(pdfObj);
                                // me.printAlter(me.file.dataDirectory + 'reports/' + _filename + '.pdf');
                            }
                        });
                    });
                });
            });
        }
        else {
            pdfObj.download();
        }
    }
    print(pdfObj) {
        var me = this;
        pdfObj.getBase64((buffer) => {
            console.log(buffer);
            window['plugins'].PrintPDF.print({
                data: buffer,
                type: 'Data',
                success: function (data) {
                    console.log('success');
                    return data;
                },
                error: function (data) {
                    console.log('failed: ' + data);
                    return data;
                }
            });
        });
    }
    printAlter(filename) {
        var me = this;
        let options = {
            name: 'Brother DCP-7030',
            printer: '',
            duplex: true,
            orientation: "landscape"
        };
        // this.printer.print(filename, options).then(function(e){console.log(e)}, function(e){console.log(e)});
        console.log(options);
        me.printer.isAvailable().then(function () {
            me.printer.print("http://www.irely.com/company", options).then(function () {
                alert("printing done successfully !");
            }, function () {
                alert("Error while printing !");
            });
        }, function () {
            alert('Error : printing is unavailable on your device ');
        });
    }
};
ReportService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__.FileOpener },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__.Printer }
];
ReportService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], ReportService);



/***/ }),

/***/ 76401:
/*!****************************************!*\
  !*** ./src/app/providers/user-data.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserData": () => (/* binding */ UserData)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/storage */ 61628);



let UserData = class UserData {
    constructor(storage) {
        this.storage = storage;
        this.favorites = [];
        this.HAS_LOGGED_IN = 'driver';
        this.HAS_SEEN_TUTORIAL = '';
    }
    hasFavorite(sessionName) {
        return (this.favorites.indexOf(sessionName) > -1);
    }
    addFavorite(sessionName) {
        this.favorites.push(sessionName);
    }
    removeFavorite(sessionName) {
        const index = this.favorites.indexOf(sessionName);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
    }
    login(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return window.dispatchEvent(new CustomEvent('user:login'));
        });
    }
    signup(username) {
        return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
            this.setUsername(username);
            return window.dispatchEvent(new CustomEvent('user:signup'));
        });
    }
    logout() {
        return this.storage.remove(this.HAS_LOGGED_IN).then(() => {
            return this.storage.remove('username');
        }).then(() => {
            window.dispatchEvent(new CustomEvent('user:logout'));
        });
    }
    setUsername(username) {
        return this.storage.set('username', username);
    }
    getUsername() {
        return this.storage.get('username').then((value) => {
            return value;
        });
    }
    isLoggedIn() {
        return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
            console.log('isLoggedIn');
            console.log(value);
            return value === true;
        });
    }
    checkHasSeenTutorial() {
        return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
            return value;
        });
    }
    clearStorage() {
        return this.storage.clear().then((value) => {
            return true;
        });
    }
};
UserData.ctorParameters = () => [
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_0__.Storage }
];
UserData = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], UserData);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 24608);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 50863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-action-sheet.entry.js": [
		47321,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		36108,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		31489,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		10305,
		"common",
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		15830,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		37757,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-button_2.entry.js": [
		30392,
		"common",
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		66911,
		"common",
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		30937,
		"common",
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		78695,
		"common",
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		16034,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		68837,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		34195,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		41709,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		33087,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		84513,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		58056,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		10862,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		7509,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		76272,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		71855,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		38708,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-popover.entry.js": [
		23527,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		24694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		19222,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		25277,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		39921,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		83122,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		51602,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		45174,
		"common",
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		7895,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		76164,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		20592,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		27162,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		81374,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		97896,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		25043,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		77802,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		29072,
		"common",
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		32191,
		"common",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		40801,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		67110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		10431,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 50863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 43069:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-menu ion-content {\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\n/* Remove background transitions for switching themes */\n\nion-menu ion-item {\n  --transition: none;\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n\n/*\n * Material Design Menu\n*/\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-list-header {\n  padding-left: 18px;\n  padding-right: 18px;\n  text-transform: uppercase;\n  letter-spacing: 0.1em;\n  font-weight: 450;\n}\n\nion-menu.md ion-item {\n  --padding-start: 18px;\n  margin-right: 10px;\n  border-radius: 0 50px 50px 0;\n  font-weight: 500;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-item ion-icon {\n  color: var(--ion-color-step-650, #5f6368);\n}\n\nion-menu.md ion-list:not(:last-of-type) {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\n/*\n * iOS Menu\n*/\n\nion-menu.ios ion-list-header {\n  padding-left: 16px;\n  padding-right: 16px;\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFFQSwyRUFBQTtBQUFGOztBQUdBLHVEQUFBOztBQUNBO0VBQ0Usa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlDQUFBO0FBQUY7O0FBR0E7O0NBQUE7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUVBLGtCQUFBO0VBRUEsNEJBQUE7RUFFQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0Usc0RBQUE7QUFKRjs7QUFPQTtFQUNFLCtCQUFBO0FBSkY7O0FBT0E7O0VBRUUseUNBQUE7QUFKRjs7QUFPQTtFQUNFLDJEQUFBO0FBSkY7O0FBUUE7O0NBQUE7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBRUEsa0JBQUE7QUFORjs7QUFTQTtFQUNFLGlCQUFBO0FBTkY7O0FBU0E7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVNBO0VBQ0UsK0JBQUE7QUFORiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG5cbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG4vKiBSZW1vdmUgYmFja2dyb3VuZCB0cmFuc2l0aW9ucyBmb3Igc3dpdGNoaW5nIHRoZW1lcyAqL1xuaW9uLW1lbnUgaW9uLWl0ZW0ge1xuICAtLXRyYW5zaXRpb246IG5vbmU7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4vKlxuICogTWF0ZXJpYWwgRGVzaWduIE1lbnVcbiovXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxOHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxOHB4O1xuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAuMWVtO1xuICBmb250LXdlaWdodDogNDUwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMThweDtcblxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcblxuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3RlcC02NTAsICM1ZjYzNjgpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdDpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuXG4vKlxuICogaU9TIE1lbnVcbiovXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuIl19 */");

/***/ }),

/***/ 67671:
/*!***************************************************************************!*\
  !*** ./src/app/pages/invoice-add-contract/invoice-add-contract.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLWFkZC1jb250cmFjdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 13038:
/*!*********************************************************!*\
  !*** ./src/app/pages/invoice-tax/invoice-tax.page.scss ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLXRheC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 91106:
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-app [class.dark-theme]=\"dark\">\n  <ion-split-pane contentId=\"main-content\" style=\"--side-width: 200px\">\n\n    <ion-menu contentId=\"main-content\">\n      <ion-content>\n        <ion-list lines=\"none\">\n          <ion-list-header>\n            Activities\n          </ion-list-header>\n          <ion-menu-toggle autoHide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item [routerLink]=\"p.url\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" [name]=\"p.icon + '-outline'\"></ion-icon>\n              <ion-label>\n                {{p.title}}\n              </ion-label>\n            </ion-item>\n\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list lines=\"none\">\n          <ion-list-header>\n            Maintenance\n          </ion-list-header>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/tankwagon-inventory\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"speedometer-outline\"></ion-icon>\n              <ion-label>\n                Tankwagon Inventory\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/invoice-completed\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"cash-outline\"></ion-icon>\n              <ion-label>\n                Invoice\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/payment-list\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"calendar-outline\"></ion-icon>\n              <ion-label>\n                Payment\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item routerLink=\"/pdf-list\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"document-outline\"></ion-icon>\n              <ion-label>\n                View PDF\n              </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n        </ion-list>\n\n        <ion-list lines=\"none\">\n          <ion-list-header>\n            Preferences\n          </ion-list-header>\n          <ion-menu-toggle autoHide=\"false\">\n            <ion-item button (click)=\"openConfiguration()\" routerLinkActive=\"selected\" routerDirection=\"root\" detail=\"false\">\n              <ion-icon slot=\"start\" name=\"settings-outline\"></ion-icon>\n              <ion-label>Settings</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-item>\n            <ion-icon slot=\"start\" name=\"moon-outline\"></ion-icon>\n            <ion-label>\n              Dark Mode\n            </ion-label>\n            <ion-toggle [(ngModel)]=\"dark\"></ion-toggle>\n          </ion-item>\n\n          <ion-item button (click)=\"logout()\">\n            <ion-icon slot=\"start\" name=\"log-out-outline\"></ion-icon>\n            <ion-label>\n              Logout\n            </ion-label>\n          </ion-item>\n\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n\n  </ion-split-pane>\n\n</ion-app>\n");

/***/ }),

/***/ 29437:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-add-contract/invoice-add-contract.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\">{{customerName}}</ion-title>\n    <ion-button slot=\"end\" primary (click)=\"closeContract()\">Ok</ion-button>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row style=\"font-weight: bold; margin-bottom: 10px; margin-top: 5px;\">\n    <ion-col size=\"3\">\n      Contract Number\n    </ion-col>\n    <ion-col size=\"2\">\n      CT Price\n    </ion-col>\n    <ion-col size=\"2\">\n      Contract Date\n    </ion-col>\n    <ion-col size=\"2\">\n      Item No\n    </ion-col>\n    <ion-col size=\"3\">\n      Available Qty\n    </ion-col>    \n  </ion-row>\n  <ion-row *ngFor=\"let contract of contracts\">\n    <ion-col size=\"3\">\n      <ion-checkbox color=\"primary\" [(ngModel)]=\"contract['ysnSelected']\" (click)=\"selectContract(contract)\"></ion-checkbox> &nbsp;&nbsp;\n      {{contract.strContractNumber}}\n    </ion-col>\n    <ion-col size=\"2\">\n      {{contract.dblCashPrice}}\n    </ion-col>\n    <ion-col size=\"2\">\n      {{contract.dtmStartDate |  date:'MM/dd/yyyy'}}\n    </ion-col>\n    <ion-col size=\"2\">\n      {{contract.strItemNo}}\n    </ion-col>\n    <ion-col size=\"3\">\n      {{contract.dblAvailableQty | number : '1.2-2'}}\n    </ion-col>    \n  </ion-row>\n</ion-grid>\n</ion-content>");

/***/ }),

/***/ 87120:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/invoice-tax/invoice-tax.page.html ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title slot=\"start\">Item Taxes - {{itemNo}}</ion-title>\n    <ion-button slot=\"end\" primary (click)=\"deleteTax()\">Delete</ion-button>          \n    <ion-button slot=\"end\" primary (click)=\"closeTax()\">Ok</ion-button>    \n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row style=\"font-weight: bold; margin-bottom: 10px; margin-top: 5px;\">\n    <ion-col size=\"2\">\n      Tax Group\n    </ion-col>\n    <ion-col size=\"2.5\">\n      Tax Code\n    </ion-col>\n    <ion-col size=\"1.5\">\n      Rate\n    </ion-col>\n    <ion-col size=\"1\">\n      Qty\n    </ion-col>\n    <ion-col size=\"1.5\">\n      Price\n    </ion-col>\n    <ion-col size=\"1.5\">\n      Total\n    </ion-col>\n    <ion-col size=\"2\">\n      Tax Amount\n    </ion-col>\n  </ion-row>\n  <ion-row *ngFor=\"let tax of taxes\">\n    <ion-col size=\"2\">\n      <ion-checkbox color=\"primary\" [(ngModel)]=\"tax['ysnSelected']\"></ion-checkbox>\n      {{tax.strTaxCode}}\n    </ion-col>\n    <ion-col size=\"2.5\">\n      {{tax.strTaxCode}}\n    </ion-col>\n    <ion-col size=\"1.5\" *ngIf=\"tax.strCalculationMethod === 'Unit'\">\n      {{tax.dblRate}}\n    </ion-col>\n    <ion-col size=\"1.5\" *ngIf=\"tax.strCalculationMethod === 'Percentage'\">\n      {{tax.dblRate}}%\n    </ion-col>\n    <ion-col size=\"1\">\n      {{qty}}\n    </ion-col>\n    <ion-col size=\"1.5\">\n      {{price}}\n    </ion-col>\n    <ion-col size=\"1.5\">\n      {{(qty * price).toFixed(2)}}\n    </ion-col>\n    <ion-col *ngIf=\"tax.strCalculationMethod === 'Unit'\" size=\"2\">\n      {{tax.dblTotalTax}}\n    </ion-col>\n    <ion-col *ngIf=\"tax.strCalculationMethod === 'Percentage'\" size=\"2\">\n      {{tax.dblTotalTax}}\n    </ion-col>\n  </ion-row>\n</ion-grid>\n</ion-content>\n\n<ion-footer padding>\n  <ion-button slot=\"end\" primary (click)=\"closeTax()\">Ok</ion-button>    \n</ion-footer>\n");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map