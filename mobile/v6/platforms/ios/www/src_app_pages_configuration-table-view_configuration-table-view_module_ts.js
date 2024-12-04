(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_configuration-table-view_configuration-table-view_module_ts"],{

/***/ 73720:
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/configuration-table-view/configuration-table-view-routing.module.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationTableViewPageRoutingModule": () => (/* binding */ ConfigurationTableViewPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _configuration_table_view_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-table-view.page */ 42241);




const routes = [
    {
        path: '',
        component: _configuration_table_view_page__WEBPACK_IMPORTED_MODULE_0__.ConfigurationTableViewPage
    }
];
let ConfigurationTableViewPageRoutingModule = class ConfigurationTableViewPageRoutingModule {
};
ConfigurationTableViewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigurationTableViewPageRoutingModule);



/***/ }),

/***/ 39781:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/configuration-table-view/configuration-table-view.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationTableViewPageModule": () => (/* binding */ ConfigurationTableViewPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _configuration_table_view_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-table-view-routing.module */ 73720);
/* harmony import */ var _configuration_table_view_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-table-view.page */ 42241);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/syncdevicedata */ 1447);










let ConfigurationTableViewPageModule = class ConfigurationTableViewPageModule {
};
ConfigurationTableViewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _configuration_table_view_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationTableViewPageRoutingModule
        ],
        declarations: [_configuration_table_view_page__WEBPACK_IMPORTED_MODULE_1__.ConfigurationTableViewPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL,
            _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_4__.SyncDeviceDataBRL
        ]
    })
], ConfigurationTableViewPageModule);



/***/ }),

/***/ 42241:
/*!*********************************************************************************!*\
  !*** ./src/app/pages/configuration-table-view/configuration-table-view.page.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationTableViewPage": () => (/* binding */ ConfigurationTableViewPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_configuration_table_view_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuration-table-view.page.html */ 76445);
/* harmony import */ var _configuration_table_view_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-table-view.page.scss */ 11499);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);






let ConfigurationTableViewPage = class ConfigurationTableViewPage {
    constructor(navCtrl, commonSQL, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.commonSQL = commonSQL;
        this.loadingCtrl = loadingCtrl;
        this.data = [];
        this.currentTable = "";
        this.lastId = 0;
        this.lastField = "";
        this.dynamicScrollHeight = "500px";
        this.dynamicScrollWidth = "5000px";
        this.dynamicColor = "green";
    }
    ngOnInit() {
        var me = this;
        console.log('ConfigurationTableViewPage');
        me.getTableList();
    }
    loadData(infiniteScroll) {
        var me = this;
        if (me.currentTable == "")
            infiniteScroll.complete();
        setTimeout(() => {
            me.getTableData();
            infiniteScroll.complete();
        }, 500);
    }
    getTableList() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            const loader = yield this.loadingCtrl.create({
                message: 'Loading data...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            loader.present();
            me.commonSQL.getData('syncdevicedata').then(res => {
                me.table = res;
                console.log(me.table);
                loader.dismiss();
            });
        });
    }
    setCurrentTable(item) {
        var me = this;
        me.currentTable = item;
        me.lastId = 0;
        me.lastField = '';
        me.data = [];
        me.getTableData();
    }
    getTableData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var item = me.currentTable;
            var _queryString = "";
            console.log(item);
            if (!item)
                return;
            if (me.lastField == "") {
                _queryString = "SELECT * FROM " + item['strTableName'] + " LIMIT 20";
            }
            else {
                _queryString = "SELECT * FROM " + item['strTableName'] + " WHERE " + me.lastField + " > " + me.lastId + " LIMIT 20";
            }
            me.commonSQL.getDataQuery(_queryString).then(res => {
                console.log(res);
                if (res['length'] < 1) {
                    return;
                }
                ;
                var _fields = Object.keys(res[0]);
                me.dataTemp = res;
                var _AField = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'f', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'ag', 'af', 'ai', 'aj', 'ak', 'al', 'am', 'an', 'ao', 'ap', 'aq', 'ar', 'as', 'at', 'au', 'av', 'aw', 'ax', 'ay', 'az'];
                for (var key1 in me.dataTemp) {
                    var _item = '{';
                    for (var _rec in _fields) {
                        var _value = me.dataTemp[key1][_fields[_rec]];
                        if (_value == undefined || _value == null)
                            _value = "";
                        _value = _value.toString().replace(/'/g, "").replace(/['"]+/g, "");
                        _item = _item + '"' + _AField[_rec] + '":"' + _value + '",';
                    }
                    _item = _item.substr(0, _item.length - 1) + '}';
                    me.data.push(JSON.parse(_item.replace(/(\r\n\t|\n|\r\t)/gm, "")));
                }
                _item = '{';
                for (var key2 in _fields) {
                    _item = _item + '"' + _AField[key2] + '":"' + _fields[key2] + '",';
                }
                if (me.lastField == '') {
                    _item = _item.substr(0, _item.length - 1) + '}';
                    me.data.unshift(JSON.parse(_item.replace(/(\r\n\t|\n|\r\t)/gm, "")));
                }
                console.log(me.data);
                if (me.lastField == '') {
                    me.lastField = _fields[0];
                    me.lastId = me.data[me.data.length - 1].a;
                }
                else {
                    me.lastId = me.data[me.data.length - 1].a;
                }
                me.dynamicScrollHeight = ((30 * me.data.length) + 550).toString() + 'px';
                me.dynamicScrollWidth = (370 * _fields.length).toString() + 'px';
                console.log(me.data);
                console.log(me.dynamicScrollHeight);
                console.log(me.dynamicScrollWidth);
                // loader.dismiss();
            }, (error) => {
                // loader.dismiss(); 
                console.log(error);
            });
        });
    }
};
ConfigurationTableViewPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController }
];
ConfigurationTableViewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-configuration-table-view',
        template: _raw_loader_configuration_table_view_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuration_table_view_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigurationTableViewPage);



/***/ }),

/***/ 11499:
/*!***********************************************************************************!*\
  !*** ./src/app/pages/configuration-table-view/configuration-table-view.page.scss ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb25maWd1cmF0aW9uLXRhYmxlLXZpZXcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 76445:
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuration-table-view/configuration-table-view.page.html ***!
  \*************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>View Table</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<!-- <ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col size=\"3\">    \n        <ion-content>\n          <ion-list>\n            <div *ngFor=\"let item of table; let i=index\" >\n              <ion-button ion-item (click)=\"setCurrentTable(item)\" *ngIf=\"item.ysnVisible === 'true'\" >\n                  {{ item.strDisplayName }}  ({{item.intTotal}})\n              </ion-button>                                                 \n            </div>\n          </ion-list>          \n        </ion-content>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content> -->\n\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col>\n        <!-- <ion-content> -->\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"4.5\">    \n                <!-- <ion-content> -->\n                  <ion-list>\n                    <div *ngFor=\"let item of table; let i=index\" >\n                      <ion-button ion-item (click)=\"setCurrentTable(item)\" >\n                          {{ item.strDisplayName }}  ({{item.intTotal}})\n                      </ion-button>                                                 \n                    </div>\n                  </ion-list>          \n                <!-- </ion-content> -->\n              </ion-col>\n              <ion-col size=\"7.5\">\n  \n                <ion-content scrollX=\"true\" [ngStyle]=\"{'height':dynamicScrollHeight}\">\n                  <!-- [ngStyle]=\"{'height':dynamicScrollHeight}\" -->\n                  <!-- <ion-scroll scrollX=\"true\" > -->\n                    <!-- [ngStyle]=\"{'width':dynamicScrollWidth}\"  -->\n                    <ion-list [ngStyle]=\"{'width':dynamicScrollWidth}\">\n                      <ion-item *ngFor=\"let item of data; let i=index\" >\n                        <!-- <ion-row *ngFor=\"let item of data; let i=index\" style=\"height: 30px !important;\" > -->\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.a}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.b}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.c}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.d}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.e}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.f}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.g}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.h}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.i}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.j}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.k}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.l}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.m}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.n}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.o}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.p}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.q}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.r}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.s}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.t}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.u}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.v}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.w}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.x}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.y}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.z}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.aa}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ab}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ac}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ad}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ae}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.af}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ag}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ah}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ai}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.aj}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ak}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.al}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.am}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.an}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ao}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ap}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.aq}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ar}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.as}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.at}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.au}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.av}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.aw}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ax}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.ay}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                          <ion-col>\n                            <ion-item style=\"width: 300px !important;\">\n                              <ion-label>{{item.az}}</ion-label>\n                            </ion-item>\n                          </ion-col>\n                        <!-- </ion-row> -->\n                      </ion-item>\n                    </ion-list>\n                  <!-- </ion-scroll> -->\n\n                  <!-- <ion-infinite-scroll (ionInfinite)=\"loadData($event)\">\n                    <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading data...\">                        \n                    </ion-infinite-scroll-content>\n                  </ion-infinite-scroll> -->\n\n                </ion-content>\n\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        <!-- </ion-content>  -->\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_configuration-table-view_configuration-table-view_module_ts.js.map