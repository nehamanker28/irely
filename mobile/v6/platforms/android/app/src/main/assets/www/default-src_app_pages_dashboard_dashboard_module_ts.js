(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["default-src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 68774:
/*!******************************************************!*\
  !*** ./src/app/framework/brl/implementation/user.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserBRL": () => (/* binding */ UserBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _interface_iuser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../interface/iuser */ 17571);
/* harmony import */ var _models_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/globalinfo */ 68439);






let UserBRL = class UserBRL extends _interface_iuser__WEBPACK_IMPORTED_MODULE_2__.IUserBRL {
    constructor(common, db) {
        super(common, db);
        this.common = common;
        this.db = db;
    }
    loginOffline(username, password) {
        var me = this;
        try {
            return me.getByQuery("SELECT * FROM user WHERE strUserName='" + username + "' and strPassword='" + password + "'");
        }
        catch (e) {
            return new Promise((resolve, reject) => {
                resolve("failed");
            });
        }
    }
    defaultRecord(record) {
        var _global = new _models_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfo();
        _global.intUserMobileId = record.intUserMobileId;
        _global.intUserId = record.intUserId;
        _global.intLocation = record.intLocation;
        _global.intDriverNumber = record.intDriverNumber;
        _global.strFullName = record.strFullName;
        _global.strLocation = record.strLocation;
        _global.strPassword = record.strPassword;
        _global.strUserName = record.strUserName;
        _global.ysnShiftOnGoing = false;
        _global.intShiftCounter = null;
        _global.strTruckNumber = '';
        _global.ContactParentId = record.ContactParentId;
        _global.CompanyName = record.CompanyName;
        _global.ysnLogged = true;
        return _global;
    }
};
UserBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_1__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
UserBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)()
], UserBRL);



/***/ }),

/***/ 17571:
/*!**************************************************!*\
  !*** ./src/app/framework/brl/interface/iuser.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IUserBRL": () => (/* binding */ IUserBRL)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_common/sqlite/implementation/base */ 58296);
/* harmony import */ var _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_common/sqlite/implementation/common-sql */ 56443);





let IUserBRL = class IUserBRL extends _common_sqlite_implementation_base__WEBPACK_IMPORTED_MODULE_1__.Base {
    constructor(common, db) {
        super(common, db);
        this.common = common;
        this.db = db;
    }
};
IUserBRL.ctorParameters = () => [
    { type: _common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_0__.SQLite }
];
IUserBRL = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()
], IUserBRL);



/***/ }),

/***/ 99366:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageRoutingModule": () => (/* binding */ DashboardPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.page */ 76446);




const routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_0__.DashboardPage
    }
];
let DashboardPageRoutingModule = class DashboardPageRoutingModule {
};
DashboardPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DashboardPageRoutingModule);



/***/ }),

/***/ 71659:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPageModule": () => (/* binding */ DashboardPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 99366);
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page */ 76446);
/* harmony import */ var _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/brl/implementation/user */ 68774);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);









let DashboardPageModule = class DashboardPageModule {
};
DashboardPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardPageRoutingModule
        ],
        declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_1__.DashboardPage],
        providers: [
            _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_2__.UserBRL,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL
        ],
    })
], DashboardPageModule);



/***/ }),

/***/ 76446:
/*!***************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardPage": () => (/* binding */ DashboardPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./dashboard.page.html */ 60419);
/* harmony import */ var _dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.page.scss */ 24494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_models_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/models/user */ 7490);
/* harmony import */ var _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/user */ 68774);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/location-accuracy/ngx */ 16030);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 79315);
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ 87152);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../providers/i21syncdevice.service */ 79561);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);


















let DashboardPage = class DashboardPage {
    constructor(menu, userBRL, loadingCtrl, router, alertCtrl, commonSQL, locationAccuracy, androidPermissions, geolocation, globalBRL, globalValue, platform, zone, i21syncDeviceService, sqlite) {
        this.menu = menu;
        this.userBRL = userBRL;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.commonSQL = commonSQL;
        this.locationAccuracy = locationAccuracy;
        this.androidPermissions = androidPermissions;
        this.geolocation = geolocation;
        this.globalBRL = globalBRL;
        this.globalValue = globalValue;
        this.platform = platform;
        this.zone = zone;
        this.i21syncDeviceService = i21syncDeviceService;
        this.sqlite = sqlite;
        this.order_status = 'pending';
        this.currentSort = '';
        this.currentFilter = '';
        this.currentSort2 = '';
        this.dataLoadInventory = [];
        this.previousOrders = [];
        this.newOrdersList = [];
        this.data = [];
        this.detail = [];
        this.allOrders = [];
        this.counter = 0;
        //
        var me = this;
        me.time = new Date();
        platform.resume.subscribe((result) => {
            me.lastTimeDiffrence = "";
            console.log('Platform Resume Event' + me.time);
            console.log(this.timeDifference(new Date(), me.time));
            var gettimediffrence = this.timeDifference(new Date(), me.time);
            this.zone.run(() => {
                this.lastTimeDiffrence = 'last synced ' + gettimediffrence;
            });
            me.lastTimeDiffrence = 'last synced ' + gettimediffrence;
        });
    }
    ngOnInit() {
        console.log('dashboard');
        this.menu.enable(true);
        this.locationCoords = {
            latitude: "",
            longitude: "",
            accuracy: "",
            timestamp: ""
        };
        this.timetest = Date.now();
        this.newOrderSubscription = this.i21syncDeviceService.isNewOrderSubject$.subscribe((res) => {
            console.log("NEW ORDER LOG", res);
            this.isNewOrder = res;
        });
        this.orderDataChangedSubscription = this.i21syncDeviceService.OrderSubject$.subscribe((res) => {
            console.log("ORDER DATA CHANGED LOG DASHBOARD", res);
            this.data = res;
        });
        //this.checkGPSPermission();
    }
    ngOnDestroy() {
        if (this.rateTimer) {
            console.log("DESTRY TIMER");
            clearInterval(this.rateTimer);
        }
    }
    ionViewDidEnter() {
        this.menu.enable(true);
        // this.sample();
        var me = this;
        me.currentFilter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
        me.currentSort = ' order by tblMBILOrder.strRouteId, cast(tblMBILOrder.intSequence as int) asc,tblMBILOrder.dtmRequestedDate'; // order by tblMBILOrder.strRouteId, tblMBILOrder.intSequence, tblMBILOrder.dtmRequestedDate
        console.log('ionViewDidLoad OrderMainPage');
        ///cureent date ////
        //  me.currentSort = 'order by tblMBILOrder.strRouteId, cast(tblMBILOrder.intSequence as int) asc,Where tblMBILOrder.dtmRequestedDate = cast(now() as date)';
        //  console.log('Sorting using current date',this.currentSort);
        me.userGlobalInfo();
        me.getLoadInventoryList();
        me.menu.enable(true);
        me.order_status = 'pending';
    }
    timeDifference(current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }
        else if (elapsed < msPerMonth) {
            return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
        }
        else if (elapsed < msPerYear) {
            return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
        }
        else {
            return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
        }
    }
    getLoadInventoryList() {
        debugger;
        var me = this;
        me.max = 0;
        me.min = 0;
        me.selectedTruckMaxQuantity = 0;
        me.dataLoadInventory = [];
        me.commonSQL.getDataQuery('SELECT *, (select strUnitMeasure from loadinventory where intItemNumber = tankwagon.intItemId LIMIT 1) as strUnitMeasure FROM tankwagon where intItemId IN (select intItemNumber from loadinventory) order by intItemId').then(res => {
            var _records = JSON.parse(JSON.stringify(res));
            console.log(_records);
            var _previous = { 'intItemId': 0, 'strItemNo': '', 'strDescription': '', 'dblQuantity': 0, 'strUnitMeasure': 0, 'dblBalance': 0 };
            var _inventoryMinMaxQuantity = { 'maxQuantity': 0, 'deliveredQuantity': 0 };
            var inventorydetail = [];
            _records.forEach(element => {
                if (_previous.intItemId != element.intItemId) {
                    me.min = 0;
                    console.log("DBL ==== ", element.dblBalance);
                    if (_previous.intItemId != 0) {
                        me.dataLoadInventory.push(_previous);
                        _previous = element;
                        if (element.dblBalance == '') {
                            _previous.dblBalance = _previous.dblQuantity;
                        }
                    }
                    else if (element.strTransactionType != 'Line Flush') {
                        _previous = element;
                        if (element.dblBalance == '') {
                            _previous.dblBalance = element.dblQuantity;
                        }
                    }
                }
                else if (element.strTransactionType != 'Line Flush') {
                    if (element.strTransactionReference == 'Increases Inventory of Product') {
                        _previous.dblQuantity = (_previous.dblQuantity * 1) + (element.dblQuantity * 1);
                        console.log("DBLQUANTITY +======", _previous.dblQuantity);
                    }
                    else if (element.strTransactionReference == 'Decreases Inventory of Product') {
                        var minval = Math.abs(element.dblQuantity);
                        me.min = me.min + minval;
                    }
                    _previous.dblBalance = _previous.dblQuantity - me.min;
                }
                // me.selectedTruckMaxQuantity=me.selectedTruckMaxQuantity + _previous.dblQuantity;
                // console.log('Max Dbl Quantity:'+me.selectedTruckMaxQuantity+','+_previous.dblQuantity);
            });
            if (_previous.intItemId != 0) {
                me.dataLoadInventory.push(_previous);
                console.log(me.dataLoadInventory);
            }
            // me.buttonStatus();
        })
            .catch(e => {
            console.log(e);
        });
    }
    receiveOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(record);
            var me = this;
            me.counter = 0;
            me.time = new Date();
            let loader = yield me.loadingCtrl.create({ message: "Fetching tables...", backdropDismiss: true });
            let confirm = yield me.alertCtrl.create({
                message: 'Are you sure you want to continue?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            loader.present();
                            // me.commonSQL.getDataQuery('SELECT strOrderNumber FROM tblMBILOrder').then((res) => {
                            //   console.log(res);
                            //   var _orderIds = "'";
                            //   res.forEach(order => {
                            //     _orderIds = _orderIds + order['strOrderNumber'] + "', '"
                            //   });
                            //   me.i21syncDeviceService.getGenerateExport(me.globalInfo.intDriverNumber || 0,'complete_order', _orderIds + "0'").then((data)=>{
                            //     console.log(data);
                            //     console.log('NEW ORDERS ==> ', data);
                            //     me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
                            //       var _date = new Date();
                            //       console.log(res);
                            //       me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
                            //         me.getOrderList();
                            //         loader.dismiss();
                            //       });
                            //     });
                            //   });
                            // });
                            me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber, loader);
                            // loader.dismiss();
                            // me.userGlobalInfo();
                            me.getLoadInventoryList();
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
    //Function to get dbQunatity 
    // truckSetup(trucknumber) {
    //   var me = this;
    //   me.commonSQL.getDataQuery('select * from tblSMTruck order by strTruckNumber').then(res => {
    //    // me.truck = res;
    //     console.log(' ++++ TRUCK SETUP Dashboard ',  res);
    //     for(var i=0;i<=res.length;i++)
    //     {
    //         if(res[i].strTruckNumber=trucknumber)
    //         {
    //           me.selectedTruckMaxQuantity='';
    //           me.selectedTruckMaxQuantity=res[i].dblCapacity;
    //           console.log('Max Quantity:'+me.selectedTruckMaxQuantity);
    //           me.getLoadInventoryList();
    //           break;
    //         }
    //     }
    //    // me.shiftSetup();
    //   });
    // }
    userGlobalInfo() {
        var me = this;
        me.isNewOrder = false;
        me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res);
            if (res[0]) {
                me.globalInfo = res[0];
                let loader = yield me.loadingCtrl.create({ message: "Loading...", backdropDismiss: true });
                console.log('truck number:' + res[0].strTruckNumber);
                (yield me.i21syncDeviceService.getOrderList(me.globalInfo.intDriverNumber, this.currentFilter, this.currentSort)).subscribe((res) => {
                    //debugger;
                    console.log("Response ======", res);
                    me.data = res;
                    if (me.data.length == 0) {
                        //me.getOrderList();
                        me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber, loader);
                    }
                });
            }
        }));
    }
    formatDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
    showOrderDetails(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log('order details ===> ', item);
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_10__.Configuration.navParams = { orderDetail: item };
            me.router.navigateByUrl('/order-detail');
        });
    }
    showDeliveries() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            me.router.navigateByUrl('/order');
        });
    }
    getOrderList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            ;
            //debugger;
            // me.createInvoiceButton = true;
            me.detail = [];
            me.data = [];
            me.allOrders = [];
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            var todayDate = new Date().toISOString().slice(0, 10);
            // await me.commonSQL.getDataQuery('SELECT intSiteNumber from tblMBILOrder ').then(res => {
            //   console.log("dtmRequestedDate=========",res);
            // })
            //me.currentSort2 = ' Select tblMBILOrder.dtmRequestedDate from tblMBILOrder '
            console.log("TODAY++++++++++++++", todayDate);
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
              Where tblMBILOrder.intDriverId = '${me.globalInfo.intDriverNumber}' `;
            // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';
            //and date(tblMBILOrder.dtmRequestedDate) ='${todayDate}' ///----if only ,  today's order needed
            console.log(_query);
            //else {
            console.log(_query + ' and ' + me.currentFilter + ' ' + me.currentSort);
            me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
                .then(res => {
                me.detail = [];
                me.data = [];
                me.allOrders = [];
                me.allOrders = res;
                console.log('all orders are here. . .');
                console.log(me.allOrders);
                //debugger;
                me.newOrdersList = this.allOrders.filter(({ strOrderNumber: id1 }) => !this.previousOrders.some(({ strOrderNumber: id2 }) => id2 === id1));
                console.log("DIfference between orders ====", me.newOrdersList);
                var _strOrder = '';
                var _strRoute = '';
                var _hasNoRoute = false;
                for (var x = 0; x <= res.length - 1; x++) {
                    if (_strOrder != res[x].strOrderNumber) {
                        if (res[x].dblQuantity > res[x].dblTankQuantity) {
                            res[x].strOrderStatus = 'fuelnotenough';
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
                        me.data.push(res[x]);
                    }
                    _strOrder = res[x].strOrderNumber;
                    _strRoute = res[x].strRouteId;
                }
                loader.dismiss();
            }, err => {
                console.log(err);
                loader.dismiss();
            });
            //}
        });
    }
    checkGPSPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(result => {
            if (result.hasPermission) {
                //If having permission show 'Turn On GPS' dialogue
                this.askToTurnOnGPS();
            }
            else {
                //If not having permission ask for permission
                this.requestGPSPermission();
            }
        }, err => {
            alert(err);
        });
    }
    requestGPSPermission() {
        this.locationAccuracy.canRequest().then((canRequest) => {
            if (canRequest) {
                console.log("4");
            }
            else {
                //Show 'GPS Permission Request' dialogue
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
                    .then(() => {
                    // call method to turn on GPS
                    this.askToTurnOnGPS();
                }, error => {
                    //Show alert if user click on 'No Thanks'
                    alert('requestPermission Error requesting location permissions ' + error);
                });
            }
        });
    }
    askToTurnOnGPS() {
        this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(() => {
            // When GPS Turned ON call method to get Accurate location coordinates
            this.getLocationCoordinates();
        }, error => alert('Error requesting location permissions ' + JSON.stringify(error)));
    }
    getLocationCoordinates() {
        this.geolocation.getCurrentPosition().then((resp) => {
            this.locationCoords.latitude = resp.coords.latitude;
            this.locationCoords.longitude = resp.coords.longitude;
            this.locationCoords.accuracy = resp.coords.accuracy;
            this.locationCoords.timestamp = resp.timestamp;
        }).catch((error) => {
            alert('Error getting location' + error);
        });
    }
    sample() {
        var me = this;
        console.log('TESTING HERE!!');
        var _record = new _framework_models_user__WEBPACK_IMPORTED_MODULE_2__.User();
        _record.intUserId = 1;
        _record.strFullName = 'sample';
        _record.strUserName = 'sample';
        _record.strPassword = 'sample';
        _record.intDriverNumber = 1;
        _record.ContactParentId = 1;
        _record.CompanyName = '01';
        _record.Sample = 'sample';
        console.log(_record);
        me.userBRL.add(_record).then(result => {
            console.log('ADD SUCESS');
            console.log(result);
        }, (error) => {
            console.log('ADD FAILED');
            console.log(error);
        });
    }
};
DashboardPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.MenuController },
    { type: _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_3__.UserBRL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__.CommonSQL },
    { type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_6__.LocationAccuracy },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions },
    { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_8__.Geolocation },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_9__.GlobalInfoBRL },
    { type: _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_12__.GlobalInfo },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.NgZone },
    { type: _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_11__.i21SyncDeviceService },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__.SQLite }
];
DashboardPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'page-dashboard',
        template: _raw_loader_dashboard_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_dashboard_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], DashboardPage);



/***/ }),

/***/ 24494:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.page.scss ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".NoOrderMessageContainer {\n  height: 260px;\n  margin: auto;\n  display: table;\n}\n\n.NoOrderMessageContainer ion-icon {\n  font-size: 50px;\n  color: #969696;\n  margin: auto;\n  margin-top: 45%;\n}\n\n.NoOrderMessageContainer span {\n  font-weight: bold;\n  color: #969696;\n  margin-top: 10px;\n}\n\n.lastSyncLabel {\n  padding-bottom: 10px;\n}\n\n.lastSyncLabel ion-label {\n  float: right;\n  color: gray;\n}\n\n.NoOrderMessageContainer1 {\n  height: 340px;\n  margin: auto;\n  display: table;\n}\n\n.NoOrderMessageContainer1 ion-icon {\n  font-size: 50px;\n  color: #969696;\n  margin: auto;\n  margin-top: 70px;\n}\n\n.NoOrderMessageContainer1 span {\n  font-weight: bold;\n  color: #969696;\n  margin-top: 10px;\n}\n\n.containerDiv {\n  background: #f8fcff;\n  height: 100%;\n  width: 100%;\n}\n\nion-grid {\n  height: 100%;\n}\n\n.dashboardParentRow .parentCol {\n  height: 500px;\n  width: 100%;\n}\n\n.dashboardParentRow .parentCol .innerCol {\n  background-color: white;\n  border-radius: 10px;\n  margin: 10px;\n  padding: 20px;\n  box-shadow: 0 0 5px 2px #f5f5f5;\n}\n\n.dashboardParentRow {\n  height: 50%;\n}\n\n.nextRouteLabel {\n  margin-left: 15px;\n}\n\n.nextOnRouteDiv ion-card-header {\n  padding-inline-start: unset;\n}\n\n.deliveriesCount ion-label {\n  font-size: 22px;\n}\n\n.deliveriesCount ion-item:hover {\n  transition: all 0.2s ease-out;\n  box-shadow: 1px 4px 8px rgba(38, 38, 38, 0.2);\n}\n\n.deliveriesCount h3 {\n  margin-top: 5px;\n}\n\n.nextOnRouteDiv {\n  margin-top: 7px;\n}\n\n.nextOnRouteDiv ion-col {\n  height: 100%;\n}\n\n.nextOnRouteDiv ion-card {\n  min-height: 230px;\n}\n\n.nextOnRouteDiv ion-card:hover {\n  transition: all 0.2s ease-out;\n  box-shadow: 1px 4px 8px rgba(38, 38, 38, 0.2);\n}\n\n.nextOnRouteDiv ion-card-subtitle {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n  font-size: 17px;\n}\n\n.nextOnRouteDiv .routeDescName {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 1;\n  /* number of lines to show */\n  line-clamp: 1;\n  -webkit-box-orient: vertical;\n}\n\n.routeDescCard ion-label {\n  margin-bottom: 5px;\n  font-size: 15px;\n  color: #686c71;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n#banner .top {\n  width: 40px;\n  height: 20px;\n  white-space: break-spaces;\n  display: inline-block;\n  text-align: center;\n  color: #000;\n  margin-left: 4px;\n  position: absolute;\n  top: 80px;\n}\n\n#banner .inventoryCylinder1 {\n  background-image: linear-gradient(to right, #0c5d7f, #17b9f8);\n}\n\n#banner .inventoryCylinder2 {\n  background-image: linear-gradient(to right, #d14f1f, #fd6c36);\n}\n\n#banner .inventoryCylinder3 {\n  background-image: linear-gradient(to right, #380e65, #6a1bbf);\n}\n\n#banner .inventoryCylinder4 {\n  background-image: linear-gradient(to right, #bc1944, #f01919);\n}\n\n.quantityContainer span {\n  color: crimson;\n  font-weight: bold;\n  display: block;\n  font-size: 14px;\n  text-align: center;\n}\n\n.inventoryDescContainer {\n  height: 72px;\n}\n\n.inventoryDescContainer span,\nion-icon {\n  font-weight: bold;\n  font-size: 18px;\n  display: block;\n  margin-right: 5px;\n}\n\n.container1 ion-icon,\n.container1 span {\n  color: #0c5d7f;\n}\n\n.container2 ion-icon,\n.container2 span {\n  color: #d14f1f;\n}\n\n.container3 ion-icon,\n.container3 span {\n  color: #380e65;\n}\n\n.container4 ion-icon,\n.container4 span {\n  color: #bc1944;\n}\n\n.inventoryDescContainer span {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  /* number of lines to show */\n  line-clamp: 2;\n  -webkit-box-orient: vertical;\n}\n\n#banner .middle {\n  width: 30px;\n  height: 20px;\n  white-space: break-spaces;\n  display: inline-block;\n  color: #fff9f9;\n  margin-left: 2px;\n}\n\n#banner {\n  margin: auto;\n  padding-top: 10px;\n  width: 50px;\n  justify-content: center;\n  height: 230px;\n  overflow: hidden;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transform: translate3d(0, 0, 0);\n}\n\n.container {\n  margin-top: 10px;\n}\n\n.progress-bar-vertical {\n  width: 40px;\n  height: 200px;\n  display: flex;\n  background-image: linear-gradient(to right, #d8dadb, #f9fafa, #d8dadb);\n  align-items: flex-end;\n  margin-right: 20px;\n  float: left;\n  box-shadow: 2px 1px 4px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(4, 4, 4, 0.19);\n  border-radius: 8px;\n  text-align: center;\n  position: relative;\n}\n\n.progress-bar-vertical .progress-bar {\n  width: 100%;\n  height: 0;\n  transition: height 0.6s ease;\n  flex-direction: inherit !important;\n  border-radius: 6px;\n}\n\n.square {\n  height: 10px;\n  width: 10px;\n  background-color: #555;\n}\n/*# sourceMappingURL=data:application/json;base64,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QUFBO0FBMEJGOztBQXZCQTtFQUNFLGdCQUFBO0FBMEJGOztBQXZCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNFQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSw2RUFBQTtFQUdBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQTBCRjs7QUF0QkE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUdBLDRCQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtBQXlCRjs7QUF0QkE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBeUJGIiwiZmlsZSI6ImRhc2hib2FyZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8vLy8vLy8vLy8vRGFzaGJvYXJkIENTUy8vLy8vLy8vLy8vLy8vL1xuLk5vT3JkZXJNZXNzYWdlQ29udGFpbmVyIHtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cblxuLk5vT3JkZXJNZXNzYWdlQ29udGFpbmVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBjb2xvcjogcmdiKDE1MCwgMTUwLCAxNTApO1xuICBtYXJnaW46IGF1dG87XG4gIC8vZGlzcGxheTogdGFibGU7XG4gIG1hcmdpbi10b3A6IDQ1JTtcbn1cbi5Ob09yZGVyTWVzc2FnZUNvbnRhaW5lciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjOTY5Njk2O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmxhc3RTeW5jTGFiZWwge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cbi5sYXN0U3luY0xhYmVsIGlvbi1sYWJlbCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbi5Ob09yZGVyTWVzc2FnZUNvbnRhaW5lcjEge1xuICBoZWlnaHQ6IDM0MHB4O1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuLk5vT3JkZXJNZXNzYWdlQ29udGFpbmVyMSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNTBweDtcbiAgY29sb3I6IHJnYigxNTAsIDE1MCwgMTUwKTtcbiAgbWFyZ2luOmF1dG87XG4gIG1hcmdpbi10b3A6IDcwcHg7XG59XG4uTm9PcmRlck1lc3NhZ2VDb250YWluZXIxIHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICM5Njk2OTY7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5jb250YWluZXJEaXYge1xuICBiYWNrZ3JvdW5kOiAjZjhmY2ZmO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5pb24tZ3JpZCB7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5kYXNoYm9hcmRQYXJlbnRSb3cgLnBhcmVudENvbCB7XG4gIC8vYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIGhlaWdodDogNTAwcHg7XG5cbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXNoYm9hcmRQYXJlbnRSb3cgLnBhcmVudENvbCAuaW5uZXJDb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMnB4ICNmNWY1ZjU7XG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAycHggI2Y1ZjVmNTtcbiAgYm94LXNoYWRvdzogMCAwIDVweCAycHggI2Y1ZjVmNTtcbn1cbi5kYXNoYm9hcmRQYXJlbnRSb3cge1xuICBoZWlnaHQ6IDUwJTtcbn1cblxuLm5leHRSb3V0ZUxhYmVsIHtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4ubmV4dE9uUm91dGVEaXYgaW9uLWNhcmQtaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IHVuc2V0O1xufVxuLy8vLy8vLy8vLy8vLy8vLyBEZXZpdmVyaWVzIENTUy8vLy8vLy8vLy9cbi5kZWxpdmVyaWVzQ291bnQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuLmRlbGl2ZXJpZXNDb3VudCBpb24taXRlbTpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDhweCByZ2JhKDM4LCAzOCwgMzgsIDAuMik7XG59XG4uZGVsaXZlcmllc0NvdW50IGgzIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuLm5leHRPblJvdXRlRGl2IHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLm5leHRPblJvdXRlRGl2IGlvbi1jb2wge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubmV4dE9uUm91dGVEaXYgaW9uLWNhcmQge1xuICBtaW4taGVpZ2h0OiAyMzBweDtcbn1cbi5uZXh0T25Sb3V0ZURpdiBpb24tY2FyZDpob3ZlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2Utb3V0O1xuICBib3gtc2hhZG93OiAxcHggNHB4IDhweCByZ2JhKDM4LCAzOCwgMzgsIDAuMik7XG59XG4ubmV4dE9uUm91dGVEaXYgaW9uLWNhcmQtc3VidGl0bGUge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogMjsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbiAgbGluZS1jbGFtcDogMjtcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgZm9udC1zaXplOiAxN3B4O1xufVxuLm5leHRPblJvdXRlRGl2IC5yb3V0ZURlc2NOYW1lIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIGxpbmUtY2xhbXA6IDE7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5yb3V0ZURlc2NDYXJkIGlvbi1sYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogIzY4NmM3MTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7IC8qIG51bWJlciBvZiBsaW5lcyB0byBzaG93ICovXG4gIGxpbmUtY2xhbXA6IDI7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi8vIC8vLy8vLy8vLy8vL0N1cnJlbnQgaW52ZW50b3J5IENTUy8vLy8vLy8vLy8vQGF0LXJvb3RcblxuI2Jhbm5lciAudG9wIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogODBweDtcbn1cbiNiYW5uZXIgLmludmVudG9yeUN5bGluZGVyMSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzBjNWQ3ZiwgIzE3YjlmOCk7XG59XG4jYmFubmVyIC5pbnZlbnRvcnlDeWxpbmRlcjIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkMTRmMWYsICNmZDZjMzYpO1xufVxuI2Jhbm5lciAuaW52ZW50b3J5Q3lsaW5kZXIzIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMzgwZTY1LCAjNmExYmJmKTtcbn1cbiNiYW5uZXIgLmludmVudG9yeUN5bGluZGVyNCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2JjMTk0NCwgI2YwMTkxOSk7XG59XG4ucXVhbnRpdHlDb250YWluZXIgc3BhbiB7XG4gIGNvbG9yOmNyaW1zb247XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uaW52ZW50b3J5RGVzY0NvbnRhaW5lciB7XG4gIGhlaWdodDogNzJweDtcbn1cbi5pbnZlbnRvcnlEZXNjQ29udGFpbmVyIHNwYW4sXG5pb24taWNvbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5jb250YWluZXIxIGlvbi1pY29uLFxuLmNvbnRhaW5lcjEgc3BhbiB7XG4gIGNvbG9yOiAjMGM1ZDdmO1xufVxuLmNvbnRhaW5lcjIgaW9uLWljb24sXG4uY29udGFpbmVyMiBzcGFuIHtcbiAgY29sb3I6ICNkMTRmMWY7XG59XG4uY29udGFpbmVyMyBpb24taWNvbixcbi5jb250YWluZXIzIHNwYW4ge1xuICBjb2xvcjogIzM4MGU2NTtcbn1cbi5jb250YWluZXI0IGlvbi1pY29uLFxuLmNvbnRhaW5lcjQgc3BhbiB7XG4gIGNvbG9yOiAjYmMxOTQ0O1xufVxuLmludmVudG9yeURlc2NDb250YWluZXIgc3BhbiB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICBsaW5lLWNsYW1wOiAyO1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4jYmFubmVyIC5taWRkbGUge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbG9yOiByZ2IoMjU1LCAyNDksIDI0OSk7XG5cbiAgbWFyZ2luLWxlZnQ6IDJweDtcbn1cblxuI2Jhbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMzBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLnByb2dyZXNzLWJhci12ZXJ0aWNhbCB7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNkOGRhZGIsICNmOWZhZmEsICNkOGRhZGIpO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJveC1zaGFkb3c6IDJweCAxcHggNHB4IDAgcmdiKDAgMCAwIC8gMjAlKSwgMCAycHggMnB4IDAgcmdiKDQgNCA0IC8gMTklKTtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHRleHQtYWxpZ246Y2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIC8vIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XG59XG5cbi5wcm9ncmVzcy1iYXItdmVydGljYWwgLnByb2dyZXNzLWJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogaGVpZ2h0IDAuNnMgZWFzZTtcbiAgLW8tdHJhbnNpdGlvbjogaGVpZ2h0IDAuNnMgZWFzZTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDAuNnMgZWFzZTtcbiAgZmxleC1kaXJlY3Rpb246IGluaGVyaXQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBcbn1cbi5zcXVhcmUge1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTU1O1xufVxuIl19 */");

/***/ }),

/***/ 60419:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dashboard/dashboard.page.html ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/* eslint-disable @angular-eslint/template/eqeqeq */\n/* eslint-disable @angular-eslint/template/eqeqeq */\n\n<link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n<script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js\"></script>\n\n<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Dashboard</ion-title>\n    <ion-button color=\"primary\" (click)=\"receiveOrder()\" fill=\"outline\" slot=\"end\" style=\"padding-right: 10px;\">Refresh\n    </ion-button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"\">\n  <div class=\"containerDiv\">\n    <ion-grid>\n      <ion-row class=\"dashboardParentRow\">\n        <ion-col class=\"parentCol\" size-lg=\"6\" size-xs=\"12\">\n          <ion-text color=\"primary\">\n            <h4>Deliveries <ion-badge *ngIf = isNewOrder color=\"warning\">New</ion-badge></h4>\n          </ion-text>\n\n          <div class=\"innerCol\">\n            <div class=\"deliveriesCount\">\n              <ion-item (click)=\"showDeliveries()\">\n                <!-- <ion-icon name=\"pin\" slot=\"start\"></ion-icon> -->\n                <ion-label>Number of Deliveries</ion-label>\n               \n                <!-- <ion-label>Number of Deliveries <ion-badge *ngIf = isNewOrder color=\"warning\">New</ion-badge></ion-label> -->\n                <h3><u>{{data.length}}</u></h3>\n               \n                <ion-icon name=\"chevron-forward-outline\" slot=\"end\" size=\"large\" color=\"primary\"> </ion-icon>\n                \n              </ion-item>\n            </div>\n            <div class=\"NoOrderMessageContainer\" *ngIf=\"!data?.length\">\n              \n                <ion-icon name=\"bag-remove-outline\" text-center></ion-icon>\n                <span>No Orders for Today</span>\n             \n\n            </div>\n\n            <div class=\"nextOnRouteDiv\" *ngIf=\"data?.length\">\n              <ion-label class=\"nextRouteLabel\"><u><b>Next on Route:</b></u></ion-label>\n              <ion-row>\n                <ion-col *ngFor=\"let item of data | slice:0:2 ; let i=index\">\n                  <ion-card #slidingItem [attr.track]=\"item.strOrderStatus | lowercase\"\n                    (click)=\"showOrderDetails(item)\">\n                    <ion-item style=\"margin-right:10px;\" class=\"item.strOrderStatus | lowercase\">\n                      <ion-card-header>\n                        <ion-card-subtitle>\n                          <b>{{item.strOrderNumber}} &mdash; {{item.strCustomerName}} &mdash;\n                            {{item.strCustomerNumber}}</b>\n                        </ion-card-subtitle>\n                      </ion-card-header>\n                    </ion-item>\n                    <ion-card-content class=\"routeDescCard\">\n                      <ion-label class=\"routeDescName\">Site Description : {{item.strOrderNumber}}</ion-label>\n                      <ion-label>Site Address : {{item.strSiteAddress}}, {{item.strCity}}, {{item.strState}},\n                        {{item.strZipCode}}</ion-label>\n                      <ion-label>Item:{{item.strItemNo}} - Quantity:{{item.dblQuantity}}</ion-label>\n                    </ion-card-content>\n                  </ion-card>\n                </ion-col>\n              </ion-row>\n            </div>\n            <div class=\"lastSyncLabel\">\n              <ion-label>{{lastTimeDiffrence}}</ion-label>\n            </div>\n          </div>\n        </ion-col>\n        <ion-col class=\"parentCol\" size-lg=\"6\" size-xs=\"12\">\n          <ion-text color=\"primary\">\n            <h4>Current Inventory</h4>\n          </ion-text>\n          <div class=\"innerCol\">\n            <div class=\"NoOrderMessageContainer1\" *ngIf=\"!dataLoadInventory?.length\">\n              <br><br>\n              \n                <ion-icon name=\"trash-bin-outline\" text-center></ion-icon>\n                <span>Inventory is Empty</span>\n              \n            </div>\n            \n            <ion-row *ngIf=\"dataLoadInventory?.length\">\n              <ion-col *ngFor=\"let item of dataLoadInventory; let i=index;\">\n                \n                  <div class=\"quantityContainer\"><span>{{item.dblQuantity}}</span><span>Gal</span></div>\n                 \n                <div id=\"banner\">\n                  <div class=\"progress progress-bar-vertical\">\n                   \n                    <div class=\"progress-bar inventoryCylinder{{i+1}}\" role=\"progressbar\" aria-valuenow=\"30\"  \n                      aria-valuemin=\"0\" aria-valuemax=\"100\"\n                      [ngStyle]=\"{'height':item.dblBalance/item.dblQuantity*100+ '%'}\"> \n                      <span style=\"transform: rotate(-90deg); color: chartreuse; position: absolute; bottom: 50%; font-weight: bold;\">{{item.dblBalance}} gal</span>\n                    </div>\n                    \n                  </div>\n                </div>\n                <div class=\"inventoryDescContainer container{{i+1}}\" style=\"margin: auto;display: table;\">\n                 \n                    <ion-icon name=\"radio-button-on-outline\" style=\"margin: auto;\"></ion-icon>\n                    <span class=\"Desc\">{{item.strDescription}}</span>\n                 \n                </div>\n              </ion-col>\n            </ion-row>\n           \n            <div *ngIf=\"dataLoadInventory?.length\">\n              <ion-row style=\"margin-top: 20px;\">\n                <ion-row>\n                <ion-icon name=\"radio-button-on-outline\" style=\"color: crimson;margin-top: 2px;\"></ion-icon>\n                <span class=\"Desc\" style=\"margin-right: 30px;\">Starting Inventory</span>\n                </ion-row>\n                <ion-row>\n                <ion-icon name=\"radio-button-on-outline\" style=\"margin-top: 2px;color: chartreuse;\"></ion-icon>\n                <span class=\"Desc\">Current Inventory</span>\n               </ion-row>\n              </ion-row>\n            </div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n      </ion-row>\n\n\n    </ion-grid>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_dashboard_dashboard_module_ts.js.map