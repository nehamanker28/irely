(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_configuration-settings_configuration-settings_module_ts"],{

/***/ 91524:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/configuration-settings/configuration-settings-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationSettingsPageRoutingModule": () => (/* binding */ ConfigurationSettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _configuration_settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-settings.page */ 84311);




const routes = [
    {
        path: '',
        component: _configuration_settings_page__WEBPACK_IMPORTED_MODULE_0__.ConfigurationSettingsPage
    }
];
let ConfigurationSettingsPageRoutingModule = class ConfigurationSettingsPageRoutingModule {
};
ConfigurationSettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigurationSettingsPageRoutingModule);



/***/ }),

/***/ 88592:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/configuration-settings/configuration-settings.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationSettingsPageModule": () => (/* binding */ ConfigurationSettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _configuration_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./configuration-settings-routing.module */ 91524);
/* harmony import */ var _configuration_settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-settings.page */ 84311);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);









let ConfigurationSettingsPageModule = class ConfigurationSettingsPageModule {
};
ConfigurationSettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _configuration_settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigurationSettingsPageRoutingModule
        ],
        declarations: [_configuration_settings_page__WEBPACK_IMPORTED_MODULE_1__.ConfigurationSettingsPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL
        ]
    })
], ConfigurationSettingsPageModule);



/***/ }),

/***/ 84311:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/configuration-settings/configuration-settings.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigurationSettingsPage": () => (/* binding */ ConfigurationSettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_configuration_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./configuration-settings.page.html */ 73970);
/* harmony import */ var _configuration_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./configuration-settings.page.scss */ 75278);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);










let ConfigurationSettingsPage = class ConfigurationSettingsPage {
    constructor(navCtrl, commonSQL, menu, loadingCtrl, router, modalCtrl, messageUtil, appVersion, alertCtrl) {
        this.navCtrl = navCtrl;
        this.commonSQL = commonSQL;
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.messageUtil = messageUtil;
        this.appVersion = appVersion;
        this.alertCtrl = alertCtrl;
        this.data = [];
        this.companyPref = [];
        this.counter = 0;
        this.LocationStatus = false;
        this.currentLocation = '';
        this.currentConnection = '';
        this.currentVersion = '';
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('configuration here');
        this.locationSetup();
        this.loadConfig();
        this.globalInfo();
        this.currentConnection = localStorage.getItem('connection');
        this.appVersion.getVersionNumber().then(result => {
            this.currentVersion = result;
        });
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
    loadConfig() {
        var me = this;
        me.commonSQL.getDataQuery("select * from tblMBILCompanyPreference").then(res => {
            if (res.length > 0) {
                me.companyPref = JSON.parse(JSON.stringify(res[0]));
            }
        });
    }
    locationSetup() {
        var me = this;
        me.commonSQL.getDataQuery('select * from tblSMLocation order by strLocationName').then(res => {
            console.log(res);
            this.location = res;
        });
    }
    save(record) {
        var me = this;
        var _hasChanges = false;
        var location = JSON.stringify(me.location);
        var strLocationName = JSON.parse(location).filter(function (item) {
            if (item.intCompanyLocationId == me.currentLocation) {
                return item.strLocationName;
            }
        });
        console.log(strLocationName);
        if (strLocationName.length > 0) {
            me.data['strLocation'] = strLocationName[0].strLocationName;
            me.data['strLocationNumber'] = strLocationName[0].strLocationNumber;
            me.data['intLocation'] = strLocationName[0].intCompanyLocationId;
            _hasChanges = true;
        }
        console.log(me.data);
        if (_hasChanges == true) {
            if (strLocationName[0].strUseLocationAddress == "Yes") {
                localStorage.setItem('company_uselocationaddress', strLocationName[0].strUseLocationAddress || '');
                localStorage.setItem('company_address', strLocationName[0].strAddress || '');
                localStorage.setItem('company_city', strLocationName[0].strCity || '');
                localStorage.setItem('company_state', strLocationName[0].strStateProvince || '');
                localStorage.setItem('company_zip', strLocationName[0].strZipPostalCode || '');
                localStorage.setItem('company_country', strLocationName[0].strCountry || '');
                localStorage.setItem('company_county', '');
            }
            else {
                localStorage.setItem('company_uselocationaddress', 'No');
                me.commonSQL.getDataQuery('SELECT * FROM tblSMCompanySetup').then(data => {
                    console.log('SM COMPANY SETUP');
                    localStorage.setItem('company_logo', atob(data[0].imgCompanyLogo) || '');
                    localStorage.setItem('company_name', data[0].strCompanyName || '');
                    if (localStorage.getItem('company_uselocationaddress') != "Yes") {
                        console.log('SM LOCATION');
                        localStorage.setItem('company_address', data[0].strAddress || '');
                        localStorage.setItem('company_county', data[0].strCounty || '');
                        localStorage.setItem('company_city', data[0].strCity || '');
                        localStorage.setItem('company_state', data[0].strState || '');
                        localStorage.setItem('company_zip', data[0].strZip || '');
                        localStorage.setItem('company_country', data[0].strCountry || '');
                    }
                }, err => {
                    console.log(err);
                });
            }
            var updateRecord = new _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfo();
            updateRecord.intLocation = record.intLocation;
            updateRecord.strLocation = me.data['strLocation'];
            updateRecord.strLocationNumber = me.data['strLocationNumber'];
            me.commonSQL.updateData(updateRecord['tablename'], updateRecord);
        }
        me.messageUtil.showToastMessage("Settings successfully saved.", function () {
            me.modalCtrl.dismiss({
                'dismissed': true
            });
        }, 1000);
    }
};
ConfigurationSettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_2__.CommonSQL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.MenuController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.LoadingController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_4__.Message },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_5__.AppVersion },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController }
];
ConfigurationSettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-configuration-settings',
        template: _raw_loader_configuration_settings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_configuration_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigurationSettingsPage);



/***/ }),

/***/ 75278:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/configuration-settings/configuration-settings.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("::ng-deep .mycomponent-wider-popover {\n  --width: 95%;\n  overflow: scroll;\n  height: 100%;\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZ3VyYXRpb24tc2V0dGluZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUcsWUFBQTtFQUdBLGdCQUFBO0VBQ0MsWUFBQTtFQUNGLFdBQUE7QUFGRiIsImZpbGUiOiJjb25maWd1cmF0aW9uLXNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubXljb21wb25lbnQtd2lkZXItcG9wb3Zlclxue1xuICAgLS13aWR0aDogOTUlO1xuLy8gICAtLW1heC13aWR0aDogNDAwcHg7XG5cbiAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICBjb2xvcjogYmx1ZTtcbiAgLy9vdmVyZmxvdy15IDogc2Nyb2xsO1xuICBcblxufVxuIl19 */");

/***/ }),

/***/ 73970:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/configuration-settings/configuration-settings.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Settings</ion-title>\n    <ion-buttons slot=\"end\" style=\"padding-right: 15px;\">\n      <ion-button ion-button (click)=\"save(data)\" >Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header style=\"font-weight: bolder;\">\n      DEFAULTS \n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"person\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">New Customer No</ion-label>\n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{companyPref['strDefaultCustomerNo']}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"pin\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">New Site No</ion-label>  \n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{companyPref['strDefaultSiteNo']}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"business\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Hazardous Spill Clean-up Company Name</ion-label>  \n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{companyPref['strHazardousSpillCompanyName']}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"call\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Hazardous Spill Clean-up Company Phone Number</ion-label>  \n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{companyPref['strHazardousSpillCompanyPhoneNumber']}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"alert-circle\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Emergency Customer Code</ion-label>  \n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{companyPref['strEmergencyCustomerCode']}}</ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header style=\"font-weight: bolder;\">\n     SETUP\n    </ion-list-header>\n    <ion-item>\n      <ion-icon name=\"information-circle-outline\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Current Version</ion-label>  \n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{currentVersion}}</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"wifi\" item-start color=\"primary\"></ion-icon>\n      <ion-label style=\"padding-left: 10px;\">Current Connection</ion-label>  \n      <ion-label style=\"text-align-last: end; font-weight: bolder;\">{{currentConnection}}</ion-label>\n    </ion-item>\n    <ion-item [ngClass]=\"true===LocationStatus?'control-disabled':'control-enabled'\">\n      <ion-icon name=\"location\" item-start color=\"primary\"></ion-icon>\n      <ion-label stacked >Location: </ion-label>\n      <ion-select [disabled]=\"LocationStatus\" clearInput interface=\"popover\" [(ngModel)]=\"currentLocation\" > \n\n      <!-- <ion-select [disabled]=\"LocationStatus\" clearInput interface=\"popover\" [(ngModel)]=\"currentLocation\" [interfaceOptions]=\"{'cssClass': 'mycomponent-wider-popover'}\">  -->\n        <ion-select-option *ngFor=\"let item of location; let i = index;\" [value]=\"item.intCompanyLocationId\" >\n          <span>{{item.strLocationName}}</span>\n        </ion-select-option>\n      </ion-select>\n      <!-- <ion-select [disabled]=\"LocationStatus\" clearInput  [(ngModel)]=\"currentLocation\"> \n        <ion-select-option *ngFor=\"let item of location; let i = index;\" [value]=\"item.intCompanyLocationId\">\n          <span>{{item.strLocationName}}</span>\n        </ion-select-option>\n      </ion-select> -->\n    </ion-item>\n  </ion-list>  \n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_configuration-settings_configuration-settings_module_ts.js.map