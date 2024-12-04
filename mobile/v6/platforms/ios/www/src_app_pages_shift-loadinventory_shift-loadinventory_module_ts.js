(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_shift-loadinventory_shift-loadinventory_module_ts"],{

/***/ 35364:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory/shift-loadinventory-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftLoadinventoryPageRoutingModule": () => (/* binding */ ShiftLoadinventoryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shift_loadinventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-loadinventory.page */ 91134);




const routes = [
    {
        path: '',
        component: _shift_loadinventory_page__WEBPACK_IMPORTED_MODULE_0__.ShiftLoadinventoryPage
    }
];
let ShiftLoadinventoryPageRoutingModule = class ShiftLoadinventoryPageRoutingModule {
};
ShiftLoadinventoryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShiftLoadinventoryPageRoutingModule);



/***/ }),

/***/ 73671:
/*!*************************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory/shift-loadinventory.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftLoadinventoryPageModule": () => (/* binding */ ShiftLoadinventoryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shift_loadinventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-loadinventory-routing.module */ 35364);
/* harmony import */ var _shift_loadinventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-loadinventory.page */ 91134);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);










let ShiftLoadinventoryPageModule = class ShiftLoadinventoryPageModule {
};
ShiftLoadinventoryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _shift_loadinventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShiftLoadinventoryPageRoutingModule
        ],
        declarations: [_shift_loadinventory_page__WEBPACK_IMPORTED_MODULE_1__.ShiftLoadinventoryPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL,
        ]
    })
], ShiftLoadinventoryPageModule);



/***/ }),

/***/ 91134:
/*!***********************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory/shift-loadinventory.page.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftLoadinventoryPage": () => (/* binding */ ShiftLoadinventoryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_shift_loadinventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shift-loadinventory.page.html */ 23297);
/* harmony import */ var _shift_loadinventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-loadinventory.page.scss */ 23317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);
/* harmony import */ var _framework_models_loadinventory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/models/loadinventory */ 72369);
/* harmony import */ var _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/models/tankwagon */ 65516);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../providers/report.service */ 67119);
/* harmony import */ var _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../framework/models/tblMBILPDF */ 12750);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);

















let ShiftLoadinventoryPage = class ShiftLoadinventoryPage {
    constructor(navCtrl, loadingCtrl, alertCtrl, router, commonSQL, messageUtil, modalCtrl, reportService, fileOpener, file, globalEventsService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.commonSQL = commonSQL;
        this.messageUtil = messageUtil;
        this.modalCtrl = modalCtrl;
        this.reportService = reportService;
        this.fileOpener = fileOpener;
        this.file = file;
        this.globalEventsService = globalEventsService;
        this.tankwagon = [];
        this.data = [];
        this.removeData = [];
        this.editData = [];
        this.ysnAdded = false;
        this.ysnRemoved = false;
        this.ysnEdited = false;
        this.currentLocation = '';
        this.dynamicScrollHeight = "500px";
        this.dynamicScrollWidth = "1200px";
        this.companyPref = [];
    }
    ngOnInit() {
        console.log('setObservables');
        this.setObservables();
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad ShiftLoadinventoryPage');
        if (this.ysnAdded == false) {
            this.getLoadInventoryList();
            this.loadConfig();
            this.userGlobalInfo();
            this.locationSetup();
        }
    }
    setObservables() {
        var me = this;
        me.globalEventsService.getObservableLoadInventory().subscribe((data) => {
            console.log('Data Received ', data);
            if (data && me.ysnAdded == false) {
                me.commonSQL.getDataQuery('SELECT SUM(dblQuantity) as dblQuantity FROM tankwagon where intItemId = ' + data.intItemId).then(res => {
                    var _data = JSON.parse(JSON.stringify(res));
                    console.log("Tangwagaon data ====", _data);
                    var item = new _framework_models_loadinventory__WEBPACK_IMPORTED_MODULE_3__.LoadInventory;
                    item.intItemNumber = data.intItemId;
                    item.strItemNumber = data.strItemNo;
                    item.strItemDescription = data.strDescription;
                    item.strUnitMeasure = data.strUnitMeasure;
                    item.dblEnding = 0;
                    item.dblQuantityAfter = 0;
                    item.dblQuantityBefore = 0;
                    item.dblQuantityLoaded = 0;
                    item.dblQuantityReturned = 0;
                    item.strLocation = data.strLocationName;
                    item.intLocation = data.strLocationNumber;
                    //item.ysnHazMat = data.ysnHazMat
                    if (_data[0].dblQuantity) {
                        item.dblQuantityBefore = _data[0].dblQuantity;
                        item['isNew'] = false;
                    }
                    else {
                        item['isNew'] = true;
                    }
                    if ((data.ysnAvailableTM == true || data.ysnAvailableTM == 'true') && data.strType == "Inventory") {
                        item._showEnding = true;
                    }
                    me.data.push(item);
                    me.ysnAdded = true;
                    me.ysnEdited = false;
                })
                    .catch(e => {
                    console.log(e);
                });
            }
        });
    }
    clearInputValue(elem) {
        elem.target.children[0].select();
    }
    locationSetup() {
        var me = this;
        me.commonSQL.getDataQuery('select * from tblSMLocation order by strLocationName').then(res => {
            console.log(res);
            this.location = res;
            console.log(this.location);
        });
    }
    getLoadInventoryList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var me = this, _query = '';
            me.ysnEdited = true;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            me.commonSQL.getDataQuery('SELECT loadinventory.intItemNumber,loadinventory.strLocation ,loadinventory.intLocation, loadinventory.strItemNumber, loadinventory.strItemDescription, loadinventory.strUnitMeasure, 0 as dblEnding, 0 as dblQuantityLoaded, 0 as dblQuantityReturned, (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where intItemId = loadinventory.intItemNumber) as dblQuantityBefore, false as isNew FROM loadinventory GROUP BY intItemNumber').then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log('LOAD INVENTORY => ', me.data);
                loader.dismiss();
            })
                .catch(e => {
                loader.dismiss();
            });
        });
    }
    userGlobalInfo() {
        var me = this;
        me.globalinfo = new _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_2__.GlobalInfo();
        me.globalinfo.intLocation = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.intLocation;
        me.globalinfo.strLocation = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.strLocation;
        me.globalinfo.strLocationNumber = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.strLocationNumber;
        me.globalinfo.intGlobal = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.intGlobal;
        me.strLocation = me.globalinfo.strLocation;
        me.strLocationNumber = me.globalinfo.strLocationNumber;
        me.driverName = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.strFullName;
        me.driverID = (_framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.intDriverNumber || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.intDriverId);
        me.currentLocation = (me.globalinfo['intLocation'] || '').toString();
        console.log("Current Location == ", _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams.strLocationNumber);
        // var location = JSON.stringify(me.location);
        // var strLocationName = JSON.parse(location).filter(function (item) {
        //   if(item.intCompanyLocationId == me.currentLocation){
        //     return item.strLocationName;
        //   }
        // });
    }
    removeSelection() {
        var me = this;
        me.data.forEach(item => {
            if (item.ysnSelected == true) {
                me.removeData.push(item);
            }
        });
        me.data = me.data.filter(val => val.ysnSelected != true);
        me.ysnRemoved = true;
        me.currentSelected = null;
        me.previousSelected = null;
    }
    openAddItem() {
        var me = this;
        me.ysnAdded = false;
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_5__.Configuration.navParams = me.globalinfo;
        me.router.navigateByUrl('/shift-loadinventory-add-item');
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
    calculate(item) {
        var me = this;
        console.log("ITEM calculate ===", item);
        if (item['dblOriginalQuantityAfter'] == null) {
            item['dblOriginalQuantityAfter'] = item.dblQuantityAfter;
            item['edited'] = false;
            // me.ysnEdited = false;
        }
        else if (item['dblOriginalQuantityAfter'] == item.dblQuantityAfter) {
            item['edited'] = false;
            // me.ysnEdited = false;
        }
        else {
            item['dblOriginalQuantityAfter'] = item.dblQuantityAfter;
            item['edited'] = true;
            // me.ysnEdited = true;
            // me.ysnAdded = false;
        }
        me.ysnEdited = true;
        var previousdblQuantityAfter = item.dblQuantityAfter;
        //Quantity Before + Loaded - Returned    
        item.dblQuantityAfter = (parseFloat(item.dblQuantityBefore || 0) + parseFloat(item.dblQuantityLoaded || 0)) - parseFloat(item.dblQuantityReturned || 0);
        // (Quantity Before Loading + Quantity Loaded - Quantity Returned) / Truck Capacity
        // item.dblEnding = (parseFloat(item.dblQuantityBefore || 0) + parseFloat(item.dblQuantityLoaded || 0)) - parseFloat(item.dblQuantityReturned || 0);
        // if(previousdblQuantityAfter == item.dblQuantityAfter){
        //   me.ysnEdited = false;
        // }
        // else{
        //   me.ysnEdited = true;
        // }
        console.log("CALCULARTE", me.ysnEdited);
        console.log(item);
    }
    getDateFormat(value) {
        var options = {
            year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };
        return value.toLocaleTimeString("en-US", options);
    }
    done(print) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var _date = new Date();
            var _update = new _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_2__.GlobalInfo();
            var _add = new _framework_models_loadinventory__WEBPACK_IMPORTED_MODULE_3__.LoadInventory();
            var BoLContent = [];
            var HaZContent = [];
            console.log("PRINTBOL =====", print);
            let loader = yield me.loadingCtrl.create({ message: "Saving...", backdropDismiss: true });
            loader.present();
            // me.buildBoL();
            BoLContent = me.buildBoL();
            HaZContent = me.BuildHazMatData();
            console.log("me.ysnAdded content =====>", me.ysnAdded);
            console.log("me.ysnEdited content =====>", me.ysnEdited);
            if (me.ysnAdded == true) {
                console.log("me.ysnAdded");
                // +++++ TANK WAGON INSERT +++++
                var _tankwagon = [];
                var _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__.Tankwagon;
                var _addLoadInventory = [];
                me.data.forEach(item => {
                    console.log("ITEM BOl ", item);
                    if ((item.dblQuantityLoaded >= 0 || item['isNew'] != false) && item.dblQuantityLoaded != null && item.dblQuantityLoaded != undefined) {
                        _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__.Tankwagon;
                        _line.intItemId = item.intItemNumber;
                        _line.strItemNo = item.strItemNumber;
                        _line.strDescription = item.strItemDescription;
                        _line.dblQuantity = item.dblQuantityAfter;
                        if (item['isNew'] == false) {
                            _line.dblQuantity = item.dblQuantityLoaded; //dblQuantityAfter
                        }
                        _line.strTransactionReference = 'Increases Inventory of Product';
                        _line.strTransactionType = 'Load Inventory';
                        _tankwagon.push(_line);
                    }
                    _addLoadInventory.push(item);
                });
                me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res => { console.log('TANKWAGON UPDATED'); });
                // +++++ TANK WAGON INSERT +++++
                me.commonSQL.deleteDataQuery(_add.tablename).then(res => {
                    me.commonSQL.addBulkData(_add.tablename, _add, _addLoadInventory).then(res => {
                        // UPDATE SHIFT
                        _update.intGlobal = me.globalinfo.intGlobal;
                        _update.dtmLoadInventory = me.getDateFormat(_date);
                        me.commonSQL.updateData(_update.tablename, _update).then(res => {
                            loader.dismiss();
                            me.messageUtil.showToastMessage("Load Inventory has been successfully saved.", function () {
                                me.modalCtrl.dismiss({
                                    'dismissed': true
                                });
                            }, 2000);
                            if (print == 'printBol') {
                                loader.dismiss();
                                var _filename = this.createPdf(BoLContent, HaZContent);
                                //me.doInsertPDFInfo( _filename + '.pdf');
                                //this.openPDF(_filename)
                            }
                            else
                                me.navCtrl.pop();
                        });
                    });
                });
            }
            else if (me.ysnEdited == true) {
                console.log("me.ysnEdited");
                this.editData = this.data.filter(val => val.edited == true);
                // +++++ TANK WAGON INSERT +++++
                var _tankwagon = [];
                var _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__.Tankwagon;
                var _addLoadInventory = [];
                if (me.editData.length > 0) {
                    me.editData.forEach(item => {
                        console.log("ITEM BOl ======", item);
                        if (item.dblQuantityLoaded != null && item.dblQuantityLoaded != undefined && item['isNew'] != true) {
                            _line = new _framework_models_tankwagon__WEBPACK_IMPORTED_MODULE_4__.Tankwagon;
                            _line.intItemId = item.intItemNumber;
                            _line.strItemNo = item.strItemNumber;
                            _line.strDescription = item.strItemDescription;
                            _line.dblQuantity = item.dblQuantityAfter;
                            _line.dblQuantity = item.dblQuantityLoaded;
                            _line.strTransactionReference = 'Increases Inventory of Product';
                            _line.strTransactionType = 'Load Inventory';
                            _tankwagon.push(_line);
                        }
                    });
                    me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res => { console.log('TANKWAGON UPDATED'); });
                    // +++++ TANK WAGON INSERT +++++
                }
                // +++++ UPDATE INVENTORY +++++
                if (me.data.length > 0) {
                    me.data.forEach(item => {
                        _addLoadInventory.push(item);
                    });
                    me.commonSQL.deleteDataQuery(_add.tablename).then(res => {
                        me.commonSQL.addBulkData(_add.tablename, _add, _addLoadInventory).then(res => {
                            // UPDATE SHIFT
                            _update.intGlobal = me.globalinfo.intGlobal;
                            _update.dtmLoadInventory = me.getDateFormat(_date);
                            me.commonSQL.updateData(_update.tablename, _update).then(res => {
                                loader.dismiss();
                                me.messageUtil.showToastMessage("Load Inventory has been successfully saved.", function () {
                                    me.modalCtrl.dismiss({
                                        'dismissed': true
                                    });
                                }, 2000);
                                if (print == 'printBol') {
                                    var _filename = this.createPdf(BoLContent, HaZContent);
                                    //me.doInsertPDFInfo( _filename + '.pdf');
                                    //this.openPDF(_filename)
                                }
                                else
                                    me.navCtrl.pop();
                            });
                        });
                    });
                }
                else {
                    loader.dismiss();
                }
                // +++++ UPDATE INVENTORY +++++
            }
            if (me.ysnRemoved == true) {
                console.log("ysnEdited");
                var _string = "";
                for (var x = 0; x <= me.removeData.length - 1; x++) {
                    if (x == 0) {
                        _string = me.removeData[0].intItemNumber;
                    }
                    else {
                        _string = _string + ', ' + me.removeData[x].intItemNumber;
                    }
                }
                me.commonSQL.executeQuery("DELETE FROM tankwagon where intItemId IN (" + _string + ")").then(res => {
                    me.commonSQL.executeQuery("DELETE FROM loadinventory where intItemNumber IN (" + _string + ")").then(res => {
                        me.messageUtil.showToastMessage("Load Inventory has been successfully saved.", function () {
                            me.modalCtrl.dismiss({
                                'dismissed': true
                            });
                        }, 2000);
                        loader.dismiss();
                        if (print == 'printBol') {
                            var _filename = this.createPdf(BoLContent, HaZContent);
                            // me.doInsertPDFInfo( _filename + '.pdf');
                            // this.openPDF(_filename)
                        }
                        else
                            me.navCtrl.pop();
                    });
                });
            }
            //this.createPdf(BoLContent,HaZContent);
        });
    }
    loadConfig() {
        var me = this;
        me.commonSQL.getDataQuery("select * from tblMBILCompanyPreference").then(res => {
            if (res.length > 0) {
                me.companyPref = JSON.parse(JSON.stringify(res[0]));
            }
        });
    }
    createPdf(BoLContent, HaZContent) {
        //debugger;
        var me = this;
        var _companyname = localStorage.getItem('company_name') || '';
        var _address = localStorage.getItem('company_address') || '';
        var _county = localStorage.getItem('company_county') || '';
        var _city = localStorage.getItem('company_city') || '';
        var _state = localStorage.getItem('company_state') || '';
        var _zip = localStorage.getItem('company_zip') || '';
        var strHazardousSpillCompanyPhoneNumber = me.companyPref['strHazardousSpillCompanyPhoneNumber'] || '';
        var strDefaultCustomerNo = me.companyPref['strDefaultCustomerNo'] || '';
        var driverName = this.driverName || '';
        var driverID = this.driverID || 0;
        var shipingOrigin = this.strLocation || '';
        console.log("driversss ===", driverName, shipingOrigin);
        var _date = new Date();
        var datestring = _date.getFullYear().toString().substring(2, 4) + "" + ("0" + (_date.getMonth() + 1)).slice(-2) + "" + ("0" + _date.getDate()).slice(-2) + "" + ("0" + _date.getHours()).slice(-2) + "" + ("0" + _date.getMinutes()).slice(-2) + "" + _date.getSeconds();
        var docDefinition = {
            content: [
                {
                    table: {
                        widths: [155],
                        body: [
                            [
                                [
                                    {
                                        table: {
                                            body: [
                                                [{ text: _companyname, bold: true }, '', ''],
                                                [_address + ' ' + _county, '', ''],
                                                [_city + ', ' + _state + ' ' + _zip, '', ''],
                                                ['', '', ''],
                                                ['', '', '']
                                            ]
                                        },
                                        layout: 'noBorders'
                                    }
                                ],
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },
                { text: 'BILL OF LADING/LOADING INVOICE', style: 'header' },
                {
                    columns: [
                        { width: '*', text: '' },
                        {
                            width: 'auto',
                            table: {
                                body: [
                                    ['Ticket# :' + 'BOL-' + driverID + '-' + datestring, '', ''],
                                    ['Date# :' + new Date().toLocaleString('en-US', { hour12: true, year: 'numeric', month: 'numeric', day: 'numeric' }), '', ''],
                                    ['Time :' + new Date().toLocaleString('en-US', { hour12: true, hour: "numeric", minute: "numeric" }), '', ''],
                                    ['', '', ''],
                                    ['', '', '']
                                ]
                            },
                            layout: 'noBorders'
                        }
                    ]
                },
                { text: 'Shiping Origin: ' + this.strLocation, margin: [0, 10, 0, 10] },
                { text: 'Driver : ' + this.driverName, margin: [0, 10, 0, 10] },
                {
                    table: {
                        widths: ['auto'],
                        body: [
                            [
                                [
                                    {
                                        table: {
                                            body: [
                                                [{ text: 'For CHEMICAL EMERGENCY' }, '', ''],
                                                [{ text: 'Spill, Leak, Fire, Exposure or Accident' }, '', ''],
                                                [{ text: 'CALL CHEMTRED DAY or NIGHT' }, '', ''],
                                                [strHazardousSpillCompanyPhoneNumber, '', ''],
                                                ['Customer# :' + strDefaultCustomerNo, '', ''],
                                                ['', '', ''],
                                                ['', '', '']
                                            ]
                                        },
                                        layout: 'noBorders'
                                    }
                                ],
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },
                { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
                {
                    style: 'tableExample',
                    color: '#444',
                    table: {
                        widths: ['*', '*'],
                        headerRows: 1,
                        body: [
                            [
                                { text: 'Hazardouse Material Class', alignment: 'left', style: 'tableHeader' },
                                { text: 'Total Quantity(Gals)', alignment: 'center', style: 'tableHeader' },
                            ],
                        ]
                    },
                    layout: 'noBorders'
                },
                { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
                {
                    style: 'tableExample',
                    color: '#444',
                    table: {
                        widths: [180, 60, 60, 60, 60, 60],
                        headerRows: 1,
                        body: [
                            [
                                { text: 'Products', alignment: 'left', style: 'tableHeader' },
                                { text: 'Before Loading', alignment: 'left', style: 'tableHeader' },
                                { text: 'Loaded', alignment: 'left', style: 'tableHeader' },
                                //  { text: 'On Hand', alignment: 'right', style: 'tableHeader' }, 
                                { text: 'Returned', alignment: 'left', style: 'tableHeader' },
                                //  { text: 'On Hand', alignment: 'right', style: 'tableHeader' }, 
                                { text: 'Total', alignment: 'left', style: 'tableHeader' },
                                { text: 'Location', alignment: 'left', style: 'tableHeader' }
                            ],
                        ]
                    },
                    layout: 'noBorders'
                },
                { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
                { text: 'Driver Signature: ______________________________ ', margin: [0, 20, 0, 30] },
                { text: 'This fuel loaded on one(1) cargo tank.', alignment: 'left', margin: [0, 20, 0, 20] },
                { text: 'This is certify that the above material is properly classified,described,packaged,marked and labeled and are in proper condition for transportation according to the applicable regulations of the Department of Transportation.', margin: [0, 10, 0, 10] },
                { text: '*BY INITIALING OR SIGNING , CARRIER ATTESTS THAT :', margin: [0, 10, 0, 10] },
                { text: 'CARRIED HAS IN POSSESSION CURRENT D.O.T. EMERGENCY RESPONSE GUIDEBOOK', margin: [0, 10, 0, 10] },
                { text: 'PRODUCT LOADED IS THE SAME AS PRODUCT IMPRINTED ON THIS MANIFEST', margin: [0, 10, 0, 10] },
            ],
            styles: {
                header: {
                    fontSize: 14,
                    bold: true,
                    alignment: 'center',
                    margin: [0, 10, 0, 10],
                    fontfamily: 'Wingdings'
                },
                subheader: {
                    fontSize: 14,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                tableHeader: {
                    bold: true,
                    fontSize: 13,
                    color: 'black'
                },
                story: {
                    italic: true,
                    alignment: 'center',
                    width: '50%'
                },
                body: {
                    fontSize: 12
                }
            },
            defaultStyle: {
                fontSize: 11.5
            }
        };
        console.log("BOL Data ===", BoLContent[0]);
        console.log("HaZContent data ==", HaZContent);
        // STARTING AT #9
        var _positionStart = 8;
        if (HaZContent.length > 0) {
            if (HaZContent[0].table.body.length > 0) {
                for (var x = 0; x <= HaZContent.length - 1; x++) {
                    docDefinition['content'].splice(_positionStart, 0, HaZContent[x]);
                    _positionStart = _positionStart + 1;
                }
            }
        }
        _positionStart = _positionStart + 2;
        if (BoLContent.length > 0) {
            if (BoLContent[0].table.body.length > 0) {
                for (var x = 0; x <= BoLContent.length - 1; x++) {
                    docDefinition['content'].splice(_positionStart, 0, BoLContent[x]);
                    _positionStart = _positionStart + 1;
                }
            }
        }
        var _now = new Date(), _filename = "BoL" + "_"
            + _now.getFullYear()
            + ("0" + (_now.getMonth() + 1)).slice(-2)
            + ("0" + _now.getDate()).slice(-2)
            + ("0" + _now.getHours() + 1).slice(-2)
            + ("0" + _now.getMinutes()).slice(-2)
            + '_';
        _filename = _filename.replace(/[/\\?%*:|"<>]/g, '');
        console.log("DOC DEFINATION", docDefinition);
        me.reportService.create(docDefinition, _filename); //.replace(/\//g,'').replace(/\\/g,'').replace(/:/g,'').replace(/\?/g,'').replace(/"/g,'').replace(/</g,'').replace(/>/g,'').replace(/\|/g,''));
        me.doInsertPDFInfo(_filename + '.pdf');
        this.openPDF(_filename);
        return _filename;
    }
    openPDF(_filename) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let confirm = yield me.alertCtrl.create({
                message: 'Do you want to open the created BoL report?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            confirm.dismiss();
                            me.file.listDir(me.file.dataDirectory, 'reports').then((result) => {
                                console.log(result);
                                for (let file of result) {
                                    var _file = { type: '', filename: '', fullpath: '', datecreated: '', visible: 'false' };
                                    if (file.isFile == true) {
                                        console.log(file);
                                        _file.type = file.name.substr(0, file.name.indexOf('_')).replace(/-/g, ' ');
                                        _file.filename = file.name;
                                        _file.fullpath = file.nativeURL;
                                        if (_filename + ".pdf" == _file.filename) {
                                            // me.navCtrl.pop();
                                            me.fileOpener.open(_file.fullpath, 'application/pdf');
                                            // me.router.navigateByUrl('/shift');
                                            return;
                                        }
                                    }
                                }
                            });
                        }
                    },
                    {
                        text: 'No',
                        handler: () => {
                            confirm.dismiss();
                            //me.router.navigateByUrl('/shift');
                        }
                    }
                ]
            });
            confirm.present();
        });
    }
    doInsertPDFInfo(_filename) {
        console.log('start doInsertPDFInfo');
        let me = this, pdfinfo = new _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_10__.tblMBILPDF();
        console.log(me.globalinfo);
        me.commonSQL.getData("shift").then(res => {
            console.log('data get from shift');
            let shiftdata = res[res.length - 1];
            pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
            pdfinfo.intShiftId = me.globalinfo.intShiftCounter;
            pdfinfo.intDriverId = me.globalinfo.intDriverNumber;
            pdfinfo.strFileName = _filename;
            pdfinfo.strFileType = "BoL";
            me.commonSQL.addData('tblMBILPDF', pdfinfo).then(res => {
                console.log('successfully inserted to tblMBILPDF');
                me.commonSQL.getData('tblMBILPDF').then(result => console.log(result));
            });
        });
    }
    buildBoL() {
        // debugger;
        var me = this;
        var _itemContent = [];
        var _itemInventoryContent = [];
        var _bolContent = [];
        var InventoryContent = [];
        var Content = [];
        var _body = { style: '', color: '', table: { widths: [], headerRows: 0, body: [{}] }, layout: '' };
        // debugger;
        me.commonSQL.getDataQuery('SELECT * FROM tblInventoryItem').then(res => {
            console.log("Duplicate Data === ", this.data);
            InventoryContent = JSON.parse(JSON.stringify(res));
            console.log("Inventory content == ", InventoryContent);
            _itemInventoryContent = InventoryContent.filter(({ strItemNo: id1 }) => this.data.some(({ strItemNumber: id2 }) => id2 === id1));
            _itemContent = this.data.filter(({ strItemNumber: id1 }) => InventoryContent.some(({ strItemNo: id2 }) => id2 === id1));
            console.log("DIfference between Data ====", _itemContent);
            console.log("DIfference between InventoryContent ====", _itemInventoryContent);
            // _body = { style: 'tableExample', color: '#444', table: { widths: ['*','*'], headerRows: 0, body: [] }, layout: 'noBorders' };
            _body = { style: 'tableExample', color: '#444', table: { widths: [180, 60, 60, 60, 60, 60], headerRows: 0, body: [] }, layout: 'noBorders' };
            for (var x = 0; x <= _itemInventoryContent['length'] - 1; x++) {
                var dblOriginalQuantityAfter = 0;
                var dblQuantityBefore = 0;
                var dblQuantityLoaded = 0;
                var dblQuantityReturned = 0;
                var item = _itemInventoryContent[x];
                if (item.ysnHazMat == "false" || item.ysnHazMat == null) {
                    for (var y = 0; y <= _itemContent['length'] - 1; y++) {
                        console.log("_itemContent[y].", _itemContent[y].intLocation);
                        console.log("item.strLocationNumber", item.strLocationNumber);
                        if (item.strItemNo == _itemContent[y].strItemNumber && item.strLocationNumber == _itemContent[y].intLocation) {
                            // console.log("_itemContent[y].",_itemContent[y].intLocation)
                            // console.log("item.strLocationNumber",item.strLocationNumber)
                            dblOriginalQuantityAfter = _itemContent[y].dblOriginalQuantityAfter;
                            dblQuantityBefore = _itemContent[y].dblQuantityBefore;
                            dblQuantityLoaded = _itemContent[y].dblQuantityLoaded;
                            dblQuantityReturned = _itemContent[y].dblQuantityReturned;
                            _body.table.body.push([
                                { text: item.strDescription, alignment: 'left' },
                                { text: dblQuantityBefore, alignment: 'center' },
                                { text: dblQuantityLoaded, alignment: 'center' },
                                { text: dblQuantityReturned, alignment: 'center' },
                                { text: _itemContent[y].dblQuantityAfter, alignment: 'left' },
                                { text: _itemContent[y].strLocation, alignment: 'left' },
                                // { text: _itemTotalWithoutTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }
                            ]);
                            console.log("bol value = ", _body);
                            // _itemContent.push(_total);
                        }
                    }
                }
            }
            Content.push(_body);
            _bolContent.push(_body);
        });
        return _bolContent;
    }
    BuildHazMatData() {
        var me = this;
        var _itemContent = [];
        var _hazContent = [];
        var InventoryContent = [];
        var Content = [];
        var _body = { style: '', color: '', table: { widths: [], headerRows: 0, body: [{}] }, layout: '' };
        me.commonSQL.getDataQuery('SELECT * FROM tblInventoryItem ').then(res => {
            InventoryContent = JSON.parse(JSON.stringify(res));
            _itemContent = InventoryContent.filter(({ strItemNo: id1 }) => this.data.some(({ strItemNumber: id2 }) => id2 === id1));
            console.log("DIfference between InventoryContent ====", _itemContent);
            //debugger;
            _body = { style: 'tableExample', color: '#444', table: { widths: ['*', '*'], headerRows: 0, body: [] }, layout: 'noBorders' };
            debugger;
            for (var x = 0; x <= _itemContent['length'] - 1; x++) {
                var dblOriginalQuantityAfter = 0;
                var item = _itemContent[x];
                if (item.ysnHazMat == "true") {
                    for (var y = 0; y <= this.data['length'] - 1; y++) {
                        console.log("this.data[y].intLocation", this.data[y].intLocation);
                        console.log("item.strLocationNumber ", item.strLocationNumber);
                        if (item.strItemNo == this.data[y].strItemNumber && item.strLocationNumber == this.data[y].intLocation) {
                            dblOriginalQuantityAfter = this.data[y].dblQuantityAfter;
                            _body.table.body.push([
                                { text: item.strDescription, alignment: 'left' },
                                { text: dblOriginalQuantityAfter, alignment: 'center' }
                                // { text: _itemTotalWithoutTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }
                            ]);
                        }
                    }
                    console.log("HazMat value = ", item.strItemNo);
                }
            }
            Content.push(_body);
            // _itemContent.push(_total);
            _hazContent.push(_body);
        });
        return _hazContent;
    }
};
ShiftLoadinventoryPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_15__.Router },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__.CommonSQL },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_8__.Message },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: _providers_report_service__WEBPACK_IMPORTED_MODULE_9__.ReportService },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_12__.FileOpener },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_11__.File },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_7__.GlobalEventsService }
];
ShiftLoadinventoryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
        selector: 'app-shift-loadinventory',
        template: _raw_loader_shift_loadinventory_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shift_loadinventory_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShiftLoadinventoryPage);



/***/ }),

/***/ 23317:
/*!*************************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory/shift-loadinventory.page.scss ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC1sb2FkaW52ZW50b3J5LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 23297:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shift-loadinventory/shift-loadinventory.page.html ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"2.5\" start style=\"margin-right: 5px;\">\n          <ion-button start ion-button expand=\"block\" primary size=\"large\"(click)=\"removeSelection()\" class=\"button-global\">Remove Item</ion-button>\n        </ion-col>\n        <ion-col size=\"2.5\" start>\n          <ion-button start ion-button expand=\"block\" primary size=\"large\"(click)=\"openAddItem()\" class=\"button-global\">Add Item</ion-button>\n        </ion-col>\n        <ion-col size=\"1.5\"></ion-col>\n        <ion-col size=\"2.5\" end>\n          <ion-button end ion-button expand=\"block\" primary size= \"large\"(click)=\"done('printBol')\" class=\"button-global\" >Print BOL</ion-button>\n        </ion-col>\n        <ion-col size=\"2.5\" end>\n          <ion-button end ion-button expand=\"block\" primary size=\"large\"(click)=\"done('done')\" class=\"button-global\" >Done</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding scrollX=\"true\">       \n  <br>\n  <ion-label style=\"padding-left: 15px; padding-top: 5px; font-size: large;\"><b>Location:</b> {{strLocation}}</ion-label>\n  <ion-list [ngStyle]=\"{'width':dynamicScrollWidth}\" >\n    <ion-grid >\n      <ion-row>\n        <ion-col size=\"1.5\">\n          <ion-item>\n            <b>Item #</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-item>\n            <b>Description</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-item>\n          <b>Before Loading</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.2\">\n          <ion-item>\n            <b>Loaded</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.2\">\n          <ion-item>\n            <b>Returned</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.2\">\n          <ion-item>\n            <b>After Loading</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.3\">\n          <ion-item>\n            <b>Ending %</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-item>\n            <b>Location</b>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data; let i=index\">\n        <ion-col size=\"1.5\">\n          <ion-item>\n            <ion-checkbox style=\"margin: 0px !important;\" color=\"primary\" [(ngModel)]=\"item['ysnSelected']\" (click)=\"selectItem(item)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">{{item.strItemNumber}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-item>\n            <ion-label>{{item.strItemDescription}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1\">\n          <ion-item>\n            <ion-input type=\"number\" class=\"input-border-styles\" [(ngModel)]=\"item['dblQuantityBefore']\" (ionChange)=\"calculate(item)\" (ionFocus)=\"clearInputValue($event)\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.2\">\n          <ion-item>\n            <ion-input type=\"number\" class=\"input-border-styles\" [(ngModel)]=\"item['dblQuantityLoaded']\" (ionChange)=\"calculate(item)\" (ionFocus)=\"clearInputValue($event)\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.2\">\n          <ion-item>\n            <ion-input type=\"number\" class=\"input-border-styles\" [(ngModel)]=\"item['dblQuantityReturned']\" (ionChange)=\"calculate(item)\" (ionFocus)=\"clearInputValue($event)\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.2\">\n          <ion-item>\n            <ion-label>{{item.dblQuantityAfter}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.3\">\n          <ion-item>\n            <ion-label>{{item.dblEnding}}</ion-label>\n            <!-- <ion-input type=\"number\" class=\"input-border-styles\" *ngIf=\"item._showEnding\" [(ngModel)]=\"item['dblEnding']\" (ionChange)=\"calculate(item)\" (ionFocus)=\"clearInputValue($event)\"></ion-input> -->\n          </ion-item>\n        </ion-col>\n          <ion-col size=\"2\">\n          <ion-item>\n            <ion-label>{{item.strLocation}}</ion-label>\n            <!-- <ion-input type=\"number\" class=\"input-border-styles\" *ngIf=\"item._showEnding\" [(ngModel)]=\"item['dblEnding']\" (ionChange)=\"calculate(item)\" (ionFocus)=\"clearInputValue($event)\"></ion-input> -->\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-list>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shift-loadinventory_shift-loadinventory_module_ts.js.map