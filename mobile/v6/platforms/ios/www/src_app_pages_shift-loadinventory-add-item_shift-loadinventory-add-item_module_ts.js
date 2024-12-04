(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_shift-loadinventory-add-item_shift-loadinventory-add-item_module_ts"],{

/***/ 77554:
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory-add-item/shift-loadinventory-add-item-routing.module.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftLoadinventoryAddItemPageRoutingModule": () => (/* binding */ ShiftLoadinventoryAddItemPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shift_loadinventory_add_item_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-loadinventory-add-item.page */ 12393);




const routes = [
    {
        path: '',
        component: _shift_loadinventory_add_item_page__WEBPACK_IMPORTED_MODULE_0__.ShiftLoadinventoryAddItemPage
    }
];
let ShiftLoadinventoryAddItemPageRoutingModule = class ShiftLoadinventoryAddItemPageRoutingModule {
};
ShiftLoadinventoryAddItemPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShiftLoadinventoryAddItemPageRoutingModule);



/***/ }),

/***/ 96839:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory-add-item/shift-loadinventory-add-item.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftLoadinventoryAddItemPageModule": () => (/* binding */ ShiftLoadinventoryAddItemPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shift_loadinventory_add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-loadinventory-add-item-routing.module */ 77554);
/* harmony import */ var _shift_loadinventory_add_item_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-loadinventory-add-item.page */ 12393);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);










let ShiftLoadinventoryAddItemPageModule = class ShiftLoadinventoryAddItemPageModule {
};
ShiftLoadinventoryAddItemPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _shift_loadinventory_add_item_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShiftLoadinventoryAddItemPageRoutingModule
        ],
        declarations: [_shift_loadinventory_add_item_page__WEBPACK_IMPORTED_MODULE_1__.ShiftLoadinventoryAddItemPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL,
        ]
    })
], ShiftLoadinventoryAddItemPageModule);



/***/ }),

/***/ 12393:
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory-add-item/shift-loadinventory-add-item.page.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftLoadinventoryAddItemPage": () => (/* binding */ ShiftLoadinventoryAddItemPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_shift_loadinventory_add_item_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shift-loadinventory-add-item.page.html */ 79682);
/* harmony import */ var _shift_loadinventory_add_item_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-loadinventory-add-item.page.scss */ 37489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _providers_global_events_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/global-events.service */ 99288);








let ShiftLoadinventoryAddItemPage = class ShiftLoadinventoryAddItemPage {
    constructor(navCtrl, loadingCtrl, globalEventsService, commonSQL) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.globalEventsService = globalEventsService;
        this.commonSQL = commonSQL;
        this.currentLocation = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var me = this;
        this.locationSetup();
        console.log('ShiftLoadinventoryAddItemPage');
        this.globalInfo();
        me.locationId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.intLocation;
        me.currentLocation = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.navParams.intCompanyLocationId;
        me.setup(this.locationId);
    }
    globalInfo() {
        var me = this;
        ;
        me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
            console.log(res);
            if (res[0]) {
                me.data = res[0];
                me.currentLocation = (me.data['intLocation'] || '').toString();
            }
        });
    }
    setup(locationId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var _rows = Array.from(document.getElementsByClassName('searchbar-input'));
            _rows.forEach(element => {
                element.setAttribute("style", "height: 50px !important;");
            });
            // me.currentLocation = Configuration.navParams.intCompanyLocationId; 
            // me.locationId = Configuration.navParams.intLocation;        
            // console.log('Locations: ' + this.currentLocation);
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId = \'' + locationId + '\' order by strItemNo LIMIT 30').then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log(me.data);
                // me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId <> \'' + me.locationId + '\' order by strLocationName, strItemNo LIMIT 30').then(res => {
                //   var _other = JSON.parse(JSON.stringify(res));
                //   console.log(_other);
                //   _other.forEach(element => {
                //     me.data.push(element);
                //   });
                // });
                loader.dismiss();
            });
        });
    }
    loadItemQuery() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Filtering data...", backdropDismiss: true });
            loader.present();
            console.log(me.searchValue);
            var refresh = function () {
                var _txtSearch = me.searchInput.el;
                _txtSearch.getElementsByTagName('input')[0].focus();
                clearInterval(me.focusEvent);
            };
            me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId = \'' + me.locationId + '\' and (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\' or strLocationName like \'%' + me.searchValue + '%\') order by strItemNo LIMIT 30').then(res => {
                me.data = JSON.parse(JSON.stringify(res));
                console.log(me.data);
                me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where tblSMLocation.intCompanyLocationId <> \'' + me.locationId + '\' and (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\' or strLocationName like \'%' + me.searchValue + '%\') order by strLocationName, strItemNo LIMIT 30').then(res => {
                    var _other = JSON.parse(JSON.stringify(res));
                    console.log(_other);
                    _other.forEach(element => {
                        me.data.push(element);
                    });
                    me.focusEvent = setInterval(function () { refresh(); }, 1000);
                });
                loader.dismiss();
            });
            // me.commonSQL.getDataQuery('select tblInventoryItem.*, tblSMLocation.strLocationName, false as ysnSelected  from tblInventoryItem left join tblSMLocation on tblInventoryItem.strLocationNumber = tblSMLocation.strLocationNumber where (strItemNo like \'%' + me.searchValue + '%\' or strDescription like \'%' + me.searchValue + '%\' or dblSalePrice like \'%' + me.searchValue + '%\' or strLocationName like \'%' + me.searchValue + '%\') order by strItemNo LIMIT 30').then(res => {
            //   me.data = JSON.parse(JSON.stringify(res));
            //   console.log(me.data);
            //   loader.dismiss();
            //   me.focusEvent = setInterval(function(){ refresh() }, 1000);
            // });
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
        this.navCtrl.pop().then(() => {
            me.globalEventsService.publishEventsLoadInventory(me.currentSelected);
        });
    }
    locationSetup() {
        var me = this;
        me.commonSQL.getDataQuery('select * from tblSMLocation order by strLocationName').then(res => {
            console.log("LOCATION NAME ===", res);
            this.location = res;
        });
    }
    onChange($event) {
        console.log('ONchange', $event);
        this.setup($event);
    }
};
ShiftLoadinventoryAddItemPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _providers_global_events_service__WEBPACK_IMPORTED_MODULE_4__.GlobalEventsService },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL }
];
ShiftLoadinventoryAddItemPage.propDecorators = {
    searchInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['txtSearch', { static: false },] }]
};
ShiftLoadinventoryAddItemPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-shift-loadinventory-add-item',
        template: _raw_loader_shift_loadinventory_add_item_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shift_loadinventory_add_item_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShiftLoadinventoryAddItemPage);



/***/ }),

/***/ 37489:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/shift-loadinventory-add-item/shift-loadinventory-add-item.page.scss ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC1sb2FkaW52ZW50b3J5LWFkZC1pdGVtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 79682:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shift-loadinventory-add-item/shift-loadinventory-add-item.page.html ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-grid no-padding>\n      <ion-row>\n        <ion-col size=\"8.5\" style=\"margin-right: 5px;\">\n          <ion-searchbar #txtSearch [(ngModel)]=\"searchValue\" (ionChange)=\"loadItemQuery()\" [debounce]=\"2000\"></ion-searchbar>\n        </ion-col>\n        <ion-col col-auto></ion-col>\n        <ion-col size=\"3\" style=\"margin-right: 5px;\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"addItem()\" class=\"button-global\">Ok</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-grid>\n    <!-- <ion-item> -->\n      \n      <ion-item>\n        <ion-icon name=\"location\" item-start color=\"primary\"></ion-icon>\n        <span style=\"margin-right: 20px;\">Location: </span>\n        <ion-select  clearInput interface=\"popover\" [(ngModel)]=\"currentLocation\" (ngModelChange)=\"onChange($event)\" > \n          <ion-select-option *ngFor=\"let item of location; let i = index;\" [value]=\"item.intCompanyLocationId\">\n            <span>{{item.strLocationName}}</span>\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-row>\n        <ion-col size=\"3\">\n          <ion-item>\n            <b>Item #</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <b>Item Description</b>\n        </ion-item>\n        </ion-col>\n        <ion-col size=\"1.5\">\n          <ion-item>\n            <b>Price</b>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3.5\">\n          <ion-item>\n            <b>Location</b>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngFor=\"let item of data; let i=index\" radio-group >\n        <ion-col size=\"3\">\n          <ion-item>\n            <ion-checkbox style=\"margin: 0px !important;\" color=\"primary\" [(ngModel)]=\"item['ysnSelected']\" (click)=\"selectItem(item)\"></ion-checkbox>\n            <ion-label style=\"padding-left: 5px;\">{{item.strItemNo}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-item>\n            <ion-label>{{item.strDescription}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"1.5\">\n          <ion-item>\n            <ion-label>{{item.dblSalePrice}}</ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"3.5\">\n          <ion-item>\n            <ion-label>{{item.strLocationName}}</ion-label>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    <!-- </ion-item> -->\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shift-loadinventory-add-item_shift-loadinventory-add-item_module_ts.js.map