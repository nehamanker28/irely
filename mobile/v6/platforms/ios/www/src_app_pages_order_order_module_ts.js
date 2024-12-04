(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_order_order_module_ts"],{

/***/ 94127:
/*!*****************************************************!*\
  !*** ./src/app/pages/order/order-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageRoutingModule": () => (/* binding */ OrderPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order.page */ 37794);




const routes = [
    {
        path: '',
        component: _order_page__WEBPACK_IMPORTED_MODULE_0__.OrderPage
    }
];
let OrderPageRoutingModule = class OrderPageRoutingModule {
};
OrderPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OrderPageRoutingModule);



/***/ }),

/***/ 92866:
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPageModule": () => (/* binding */ OrderPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _order_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-routing.module */ 94127);
/* harmony import */ var _order_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page */ 37794);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);











let OrderPageModule = class OrderPageModule {
};
OrderPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _order_routing_module__WEBPACK_IMPORTED_MODULE_0__.OrderPageRoutingModule
        ],
        declarations: [_order_page__WEBPACK_IMPORTED_MODULE_1__.OrderPage],
        providers: [
            _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_2__.OrderBRL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfoBRL,
            _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfo,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__.CommonSQL
        ]
    })
], OrderPageModule);



/***/ }),

/***/ 37794:
/*!*******************************************!*\
  !*** ./src/app/pages/order/order.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderPage": () => (/* binding */ OrderPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./order.page.html */ 79424);
/* harmony import */ var _order_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order.page.scss */ 56083);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/brl/implementation/order */ 17848);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);
/* harmony import */ var _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/i21syncdevice.service */ 79561);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);













let OrderPage = class OrderPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, globalBRL, globalValue, router, menu, i21syncDeviceService, commonSQL, ngZone, orderBRL) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.globalBRL = globalBRL;
        this.globalValue = globalValue;
        this.router = router;
        this.menu = menu;
        this.i21syncDeviceService = i21syncDeviceService;
        this.commonSQL = commonSQL;
        this.ngZone = ngZone;
        this.orderBRL = orderBRL;
        this.data = [];
        this.detail = [];
        this.currentSort = '';
        this.currentFilter = '';
        this.currentCustomer = '';
        this.currentOrder = [];
        this.invoice = [];
        this.allOrders = [];
        this.createInvoiceButton = true;
        this.showSearchbar = false;
        this.counter = 0;
        this.order_status = 'pending';
    }
    ionViewDidEnter() {
        var me = this;
        me.currentFilter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
        me.currentSort = ' order by tblMBILOrder.strRouteId, cast(tblMBILOrder.intSequence as int) asc,tblMBILOrder.dtmRequestedDate'; // order by tblMBILOrder.strRouteId, tblMBILOrder.intSequence, tblMBILOrder.dtmRequestedDate
        console.log('ionViewDidLoad OrderMainPage');
        me.userGlobalInfo();
        me.menu.enable(true);
        me.order_status = 'pending';
    }
    ngOnInit() {
        var me = this;
        this.orderDataChangedSubscription = this.i21syncDeviceService.OrderSubject$.subscribe((res) => {
            console.log("ORDER DATA CHANGED LOG", res);
            me.data = res;
        });
    }
    userGlobalInfo() {
        var me = this;
        me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            console.log(res);
            if (res[0]) {
                me.globalInfo = res[0];
                let loader = yield me.loadingCtrl.create({ message: "Loading...", backdropDismiss: true });
                // me.getOrderList();
                // me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,loader)
                (yield me.i21syncDeviceService.getOrderList(me.globalInfo.intDriverNumber, this.currentFilter, this.currentSort)).subscribe((res) => {
                    debugger;
                    console.log("Response ======", res);
                    me.data = res;
                    if (me.data.length == 0) {
                        //me.getOrderList();
                        me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber, loader);
                    }
                });
            }
        }));
        console.log(me.globalInfo);
    }
    sortOrder(query) {
        var me = this, _sort = '';
        switch (query) {
            case 'Stop Number':
                _sort = 'intStopNumber';
                break;
            case 'Customer Name':
                _sort = 'strCustomerNumber';
                break;
            case 'Site Description':
                _sort = 'strDescription';
                break;
            case 'Site Address':
                _sort = 'strSiteAddress';
                break;
            case 'Site City':
                _sort = 'strCity';
                break;
            case 'Item Number':
                _sort = 'strItemNo';
                break;
                ;
            case 'Quantity':
                _sort = 'dblQuantity';
                break;
            default:
                _sort = 'intSiteID';
        }
        me.currentSort = ' order by ' + _sort;
        // me.getOrderList();
        let loader = me.loadingCtrl.create({ message: "Fetching tables...", backdropDismiss: true });
        me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber, loader);
    }
    sortFilter(query) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _filter = '';
            switch (query) {
                case 'Delivered':
                    _filter = ' tblMBILOrder.strOrderStatus = \'Delivered\' ';
                    break;
                case 'Open':
                    _filter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
                    break;
                default:
                    _filter = '';
            }
            me.currentFilter = _filter;
            (yield me.i21syncDeviceService.getOrderList(me.globalInfo.intDriverNumber, this.currentFilter, this.currentSort)).subscribe((res) => {
                me.data = res;
            });
            // me.getPreviosOrderList();
            // me.getOrderList();
        });
    }
    // async getPreviosOrderList() {
    //   var me = this,
    //       _query = '';
    //       ;
    //   // me.createInvoiceButton = true;
    //   // me.detail = [];
    //   // me.data = [];
    //   me.allOrders = [];
    //   me.commonSQL.getDataQuery('SELECT * FROM tblMBILOrder').then((res) => {
    //     console.log("AFTER SEND SHIFT DATA ===",res)
    //   })
    //   // let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    //   // loader.present();
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
    //     console.log(_query + ' and ' + me.currentFilter + ' ' + me.currentSort);
    //     me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
    //     .then(res => {
    //       me.detail = [];
    //      // me.data = [];
    //       me.allOrders = [];
    //       me.allOrders = res;
    //       console.log('all orders are here. . .')
    //       console.log(me.allOrders);
    //     },
    //     err => {
    //       console.log(err);
    //      // loader.dismiss();
    //     });
    // }
    getOrderList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            ;
            me.createInvoiceButton = true;
            me.detail = [];
            // me.data = [];
            me.allOrders = [];
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
                     CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
                     TMSite.*, tblARCustomer.*, 
                     (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId) as dblQuantity,
                     (SELECT IFNULL(dblPrice,0) as dblPrice FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId LIMIT 1) as dblPrice,
                     (SELECT intContractDetailId FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId AND intContractDetailId IS NOT NULL LIMIT 1) as intContractDetailId,
                     (SELECT strContractNumber FROM tblContractExport WHERE intContractDetailId = (SELECT intContractDetailId FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId AND intContractDetailId IS NOT NULL LIMIT 1) LIMIT 1) as strContractNumber,
                     IFNULL((SELECT dblAvailableQty FROM tblContractExport WHERE intContractDetailId = (SELECT intContractDetailId FROM tblMBILOrderItem as MBILItem where MBILItem.intOrderId = tblMBILOrder.intOrderId AND intContractDetailId IS NOT NULL LIMIT 1) LIMIT 1),0) as dblAvailableQty,
                     (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
              FROM tblMBILOrder
              LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
              LEFT JOIN (SELECT * FROM tblTMSite WHERE tblTMSite.intSiteID = (SELECT intSiteId FROM tblMBILOrderItem WHERE intOrderId = (SELECT intOrderId FROM tblMBILOrder WHERE intDriverId = '${me.globalInfo.intDriverNumber}') LIMIT 1)) as TMSite
              LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
              Where tblMBILOrder.intDriverId = '${me.globalInfo.intDriverNumber}'`;
            // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';
            console.log(_query);
            if (me.searchValue && me.showSearchbar == true) {
                _query = _query + ' and tblARCustomer.strCustomerName like \'%' + me.searchValue + '%\'';
                me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
                    .then(res => {
                    me.detail = [];
                    me.data = [];
                    me.allOrders = [];
                    me.allOrders = res;
                    console.log('all orders are here. . .');
                    console.log(me.allOrders);
                    var _strOrder = '';
                    var _hasNoRoute = false;
                    for (var x = 0; x <= res.length - 1; x++) {
                        if (_strOrder != res[x].strOrderNumber) {
                            if (res[x].dblQuantity > res[x].dblTankQuantity) {
                                res[x].strOrderStatus = 'fuelnotenough';
                            }
                            if (res[x].strRouteId == null && _hasNoRoute == false) {
                                _hasNoRoute = true;
                                res[x].intSequence = 1;
                            }
                            me.data.push(res[x]);
                        }
                        _strOrder = res[x].strOrderNumber;
                    }
                    loader.dismiss();
                    var _txtSearch = me.searchInput.el;
                    _txtSearch.getElementsByTagName('input')[0].focus();
                }, err => {
                    console.log(err);
                    loader.dismiss();
                });
            }
            else {
                console.log(_query + ' and ' + me.currentFilter + ' ' + me.currentSort);
                me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
                    .then(res => {
                    me.detail = [];
                    me.allOrders = [];
                    me.allOrders = res;
                    console.log('all orders are here. . .');
                    console.log(me.allOrders);
                    var _strOrder = '';
                    var _strRoute = '';
                    var _hasNoRoute = false;
                    me.data = [];
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
            }
        });
    }
    reorderItems(indexes) {
        let element = this.data[indexes.from];
        this.data.splice(indexes.from, 1);
        this.data.splice(indexes.to, 0, element);
    }
    showInvoice() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(me.detail);
            if (me.detail.length != 0) {
                var meteredMsg = yield this.alertCtrl.create({
                    header: 'Create Invoice',
                    message: 'Is this invoice a metered delivery?',
                    cssClass: 'order-msgbox',
                    buttons: [
                        {
                            text: 'Yes',
                            handler: () => {
                                me.buildInvoice(true);
                            }
                        },
                        {
                            text: 'No',
                            handler: () => {
                                me.buildInvoice(false);
                            }
                        }
                    ]
                });
                var shiftMsg = yield me.alertCtrl.create({
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
                                if (me.globalInfo && (me.globalInfo['ysnShiftOnGoing'] == 'true' || me.globalInfo['ysnShiftOnGoing'] == true)) {
                                    meteredMsg.present();
                                }
                                else {
                                    shiftMsg.present();
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
            }
        });
    }
    showOrderDetails(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log('order details ===> ', item);
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.navParams = { orderDetail: item };
            me.router.navigateByUrl('/order-detail');
        });
    }
    buildInvoice(isMeter) {
        var me = this;
        me.orderBRL.buildInvoice(me.detail, false).then(res => {
            console.log(res);
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_2__.Configuration.navParams = { invoice: res, isMeter: isMeter };
            me.router.navigateByUrl('/invoice');
        });
    }
    receiveOrder() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            // console.log(record);
            var me = this;
            me.counter = 0;
            // me.previousOrders = [];
            let loader = yield me.loadingCtrl.create({ message: "Fetching tables...", backdropDismiss: true });
            let confirm = yield me.alertCtrl.create({
                message: 'Are you sure you want to continue?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            loader.present();
                            me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber, loader);
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
};
OrderPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_5__.GlobalInfoBRL },
    { type: _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_6__.GlobalInfo },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController },
    { type: _providers_i21syncdevice_service__WEBPACK_IMPORTED_MODULE_7__.i21SyncDeviceService },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__.CommonSQL },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.NgZone },
    { type: _framework_brl_implementation_order__WEBPACK_IMPORTED_MODULE_3__.OrderBRL }
];
OrderPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild, args: ['txtSearch', { static: false },] }]
};
OrderPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'page-order',
        template: _raw_loader_order_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: [_order_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], OrderPage);



/***/ }),

/***/ 56083:
/*!*********************************************!*\
  !*** ./src/app/pages/order/order.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("div[scrollX=true] {\n  display: flex;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n}\ndiv[scrollX=true]::-webkit-scrollbar {\n  display: none;\n}\ndiv[scrollX=true] .scroll-item {\n  flex: 0 0 auto;\n}\n.fuelnotenough {\n  background-color: rgba(255, 252, 0, 0.2);\n}\nion-item-sliding[track=generated] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\nion-item-sliding[track=fuelnotenough] ion-label {\n  background-color: #fffd002b;\n}\nion-item-sliding[track=new] ion-label {\n  background-color: #caecd2;\n}\nion-item-sliding[track=dispatched] ion-label {\n  border-left: 2px solid var(--ion-color-primary);\n  padding-left: 10px;\n}\nion-item-sliding[track=fuelnotenough] ion-label {\n  background-color: #fffd002b;\n}\nion-item-sliding[track=new] ion-label {\n  background-color: #caecd2;\n}\nion-item-sliding[track=delivered] ion-label {\n  border-left: 2px solid #69bb7b;\n  padding-left: 10px;\n}\nion-item-sliding[track=fuelnotenough] ion-label {\n  background-color: #fffd002b;\n}\nion-item-sliding[track=new] ion-label {\n  background-color: #caecd2;\n}\nion-item-sliding[track=fuelnotenough] ion-label {\n  border-left: 2px solid red;\n  padding-left: 10px;\n}\nion-item-sliding[track=fuelnotenough] ion-label {\n  background-color: #fffd002b;\n}\nion-item-sliding[track=new] ion-label {\n  background-color: #caecd2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9yZGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFBSTtFQUNHLGFBQUE7QUFFUDtBQUFLO0VBQ0UsY0FBQTtBQUVQO0FBRUU7RUFDRSx3Q0FBQTtBQUNKO0FBY0c7RUFDRSwrQ0FBQTtFQUNBLGtCQUFBO0FBWEw7QUFhRztFQUNDLDJCQUFBO0FBVko7QUFZRTtFQUNFLHlCQUFBO0FBVEo7QUFDRztFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7QUFFTDtBQUFHO0VBQ0MsMkJBQUE7QUFHSjtBQURFO0VBQ0UseUJBQUE7QUFJSjtBQVpHO0VBQ0UsOEJBQUE7RUFDQSxrQkFBQTtBQWVMO0FBYkc7RUFDQywyQkFBQTtBQWdCSjtBQWRFO0VBQ0UseUJBQUE7QUFpQko7QUF6Qkc7RUFDRSwwQkFBQTtFQUNBLGtCQUFBO0FBNEJMO0FBMUJHO0VBQ0MsMkJBQUE7QUE2Qko7QUEzQkU7RUFDRSx5QkFBQTtBQThCSiIsImZpbGUiOiJvcmRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXZbc2Nyb2xsWD10cnVlXSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAgLnNjcm9sbC1pdGVtIHtcbiAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICB9XG4gIH1cblxuICAuZnVlbG5vdGVub3VnaCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSAyNTIgMCAvIDIwJSk7XG4gIH0gIFxuXG5cbiAgJGNhdGVnb3JpZXM6IChcbiAgIGdlbmVyYXRlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgZGlzcGF0Y2hlZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpLFxuICAgZGVsaXZlcmVkOiAjNjliYjdiLFxuICAgZnVlbG5vdGVub3VnaDogcmVkLFxuLy8gICBmb29kOiAjM2JjN2M0LFxuLy8gICBkb2N1bWVudGF0aW9uOiAjYjE2YmUzLFxuLy8gICBuYXZpZ2F0aW9uOiAjNjYwMGNjXG4pO1xuXG5AZWFjaCAkdHJhY2ssICR2YWx1ZSBpbiBtYXAtcmVtb3ZlKCRjYXRlZ29yaWVzKSB7XG4gICBpb24taXRlbS1zbGlkaW5nW3RyYWNrPScjeyR0cmFja30nXSBpb24tbGFiZWwge1xuICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICR2YWx1ZTtcbiAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgfVxuICAgaW9uLWl0ZW0tc2xpZGluZ1t0cmFjaz0nZnVlbG5vdGVub3VnaCddIGlvbi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmQwMDJiO1xuICB9XG4gIGlvbi1pdGVtLXNsaWRpbmdbdHJhY2s9J25ldyddIGlvbi1sYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNjYWVjZDI7XG4gIH1cbiB9Il19 */");

/***/ }),

/***/ 79424:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/order/order.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title *ngIf=\"!showSearchbar\">Order List</ion-title>\n    <ion-searchbar #txtSearch  *ngIf=\"showSearchbar\" showCancelButton=\"always\" [(ngModel)]=\"searchValue\" (ionChange)=\"getOrderList()\" (ionCancel)=\"showSearchbar = false\" placeholder=\"Search\" [debounce]=\"2000\"></ion-searchbar>\n\n    <ion-buttons slot=\"end\">\n      <ion-button *ngIf=\"!showSearchbar\" (click)=\"showSearchbar = true\">\n        <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n      </ion-button>\n      <ion-button color=\"primary\" (click)=\"receiveOrder()\" fill=\"outline\">Refresh Order</ion-button> \n    </ion-buttons>\n  </ion-toolbar>\n  <ion-toolbar>\n    <ion-segment [(ngModel)]=\"order_status\">\n      <ion-segment-button (click)=\"sortFilter('Open')\" value=\"pending\">\n        Pending\n      </ion-segment-button>\n      <ion-segment-button (click)=\"sortFilter('Delivered')\" value=\"complete\">\n        Complete\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\">\n  <ion-list #scheduleList>\n\n    <ng-container *ngFor=\"let item of data; let i=index\">\n      <ion-list-header *ngIf=\"item.strRouteId2 == 'XXX'\">\n        <ion-label>\n          <h1>Route #{{item.strRouteId}}</h1>\n        </ion-label>\n      </ion-list-header>\n      <ion-list-header *ngIf=\"item.strRouteId2 == 'NOROUTE' && item.intSequence == 1\">\n        <ion-label>\n          <h1>No Route</h1>\n        </ion-label>\n      </ion-list-header>\n    <ion-item-sliding  #slidingItem [attr.track]=\"item.strOrderStatus | lowercase\">      \n      <ion-item (click)=\"showOrderDetails(item)\">\n        <ion-label class=\"item.strOrderStatus | lowercase\">\n          <h3><b *ngIf=\"item.strRouteId2 != 'NOROUTE'\">Seq #{{item.intSequence}}&nbsp;-&nbsp;</b> <b>{{item.strOrderNumber}} &mdash; {{item.strCustomerName}} &mdash; {{item.strCustomerNumber}}</b><ion-badge *ngIf=\"item.strOrderStatus == 'NEW'\" color=\"warning\">NEW</ion-badge></h3>\n          <p>\n            <b>Site Description:</b> {{item.strDescription}}\n          </p>\n          <p>\n            <b>Site Address:</b> {{item.strSiteAddress}}, {{item.strCity}}, {{item.strState}}, {{item.strZipCode}}\n          </p>\n          <p>\n            <b>Item:</b> {{item.strItemNo}} &mdash; <b>Quantity:</b> {{item.dblQuantity}}\n          </p>\n        </ion-label>\n      </ion-item>\n    </ion-item-sliding>\n  </ng-container>\n\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_order_order_module_ts.js.map