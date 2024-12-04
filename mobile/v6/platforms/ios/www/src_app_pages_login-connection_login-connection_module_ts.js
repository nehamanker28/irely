(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_login-connection_login-connection_module_ts"],{

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

/***/ 45387:
/*!***************************************************************************!*\
  !*** ./src/app/pages/login-connection/login-connection-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginConnectionPageRoutingModule": () => (/* binding */ LoginConnectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_connection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-connection.page */ 7128);




const routes = [
    {
        path: '',
        component: _login_connection_page__WEBPACK_IMPORTED_MODULE_0__.LoginConnectionPage
    }
];
let LoginConnectionPageRoutingModule = class LoginConnectionPageRoutingModule {
};
LoginConnectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginConnectionPageRoutingModule);



/***/ }),

/***/ 21748:
/*!*******************************************************************!*\
  !*** ./src/app/pages/login-connection/login-connection.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginConnectionPageModule": () => (/* binding */ LoginConnectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_connection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-connection-routing.module */ 45387);
/* harmony import */ var _login_connection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-connection.page */ 7128);
/* harmony import */ var _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/brl/implementation/user */ 68774);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);











let LoginConnectionPageModule = class LoginConnectionPageModule {
};
LoginConnectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _login_connection_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginConnectionPageRoutingModule
        ],
        declarations: [_login_connection_page__WEBPACK_IMPORTED_MODULE_1__.LoginConnectionPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_5__.Message,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder,
            _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_2__.UserBRL,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL
        ]
    })
], LoginConnectionPageModule);



/***/ }),

/***/ 7128:
/*!*****************************************************************!*\
  !*** ./src/app/pages/login-connection/login-connection.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginConnectionPage": () => (/* binding */ LoginConnectionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_connection_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login-connection.page.html */ 37307);
/* harmony import */ var _login_connection_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-connection.page.scss */ 35996);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _providers_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/login.service */ 96465);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);












let LoginConnectionPage = class LoginConnectionPage {
    constructor(navCtrl, 
    // public navParams: NavParams, 
    // private service: ConnectionService, 
    loginService, formBuilder, messageUtil, 
    // private viewCtrl: ViewController,
    loadingCtrl, modalCtrl, 
    // private zone: NgZone,
    local, router, platform) {
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.messageUtil = messageUtil;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.local = local;
        this.router = router;
        this.platform = platform;
        let me = this;
        // me.fromSettings = navParams.get("fromSettings");
        let isLinkValid = (control) => {
            if (control.value) {
                if (control.value.lastIndexOf('/') != control.value.length - 1) {
                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress = control.value + '/';
                    me.resetValues();
                    return (new Promise(resolve => {
                        me.loadData().subscribe((result) => {
                            resolve(true);
                        }, err => {
                            resolve(false);
                        });
                    })).then(result => result ? {} : { "is_invalid": true });
                }
                else {
                    var _link = control.value.toString();
                    _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress = _link; //.substring(0,_link.length-1);
                    me.resetValues();
                    return (new Promise(resolve => {
                        me.loadData().subscribe((result) => {
                            resolve(true);
                        }, err => {
                            resolve(false);
                        });
                    })).then(result => result ? {} : { "is_invalid": true });
                    // return (new Promise(resolve => {
                    //   resolve(false);
                    // })).then(result => result ? {} : {"is_invalid": true}); 
                }
            }
        };
        me.connectionForm = me.formBuilder.group({
            strLink: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, isLinkValid],
            strCompany: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]
        });
    }
    ngOnInit() {
        this.setupInit();
    }
    setupInit() {
        var me = this;
        console.log('connection');
        me.resetValues();
        me.loginService.getConnection().subscribe((connection) => {
            ;
            var _connection = JSON.stringify(connection);
            try {
                var _newConnection = JSON.parse(_connection);
                _newConnection = JSON.parse(_newConnection);
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress = _newConnection.strLink || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company = _newConnection.strCompany || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company;
                me.connectionForm.setValue({
                    strLink: connection.strLink || _newConnection.strLink,
                    strCompany: connection.strCompany || _newConnection.strCompany
                });
            }
            catch (e) {
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress = connection.strLink || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress;
                _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company = connection.strCompany || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company;
                me.connectionForm.setValue({
                    strLink: connection.strLink || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress,
                    strCompany: connection.strCompany || _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company
                });
            }
        });
        me.getCurrentServer();
    }
    resetValues() {
        this.companies = [];
    }
    loadData() {
        var me = this;
        me.resetValues();
        return me.loginService.loadCompany()
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)((result) => {
            me.resetValues();
            result.data.forEach((d) => {
                me.companies.push(d);
            });
        }));
    }
    save(value, valid) {
        var me = this;
        me.submitAttempt = true;
        if (valid) {
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company = value.strCompany;
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress = value.strLink + "/";
            me.loginService.addConnection(value);
            me.messageUtil.showToastMessage("Connection has been successfully saved.", function () {
                //me.viewCtrl.dismiss();
                me.modalCtrl.dismiss({
                    'dismissed': true
                });
                // if (me.fromSettings) {
                //me.router.navigateByUrl('/login');
                // }
            }, 1000);
        }
    }
    getCurrentServer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            me.platform.ready().then(() => {
                me.local.keys().then(function (val) {
                    console.log(val);
                    me.serverList = [];
                    for (var x = 0; x <= val.length - 1; x++) {
                        if (val[x].indexOf('servername_') != -1) {
                            var _server = val[x].replace('_servername_', '').replace('_company_', '  -  ');
                            var _splitServer = _server.split('  -  ');
                            var server = {
                                display: _server,
                                name: _splitServer[0],
                                company: _splitServer[1]
                            };
                            me.serverList.push(server);
                            localStorage.setItem('connection', server.display);
                        }
                    }
                });
            });
        });
    }
    add(value, valid) {
        var me = this;
        me.submitAttempt = true;
        if (valid) {
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company = value.strCompany;
            _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress = value.strLink;
            me.loginService.addConnection(value);
            me.getCurrentServer();
        }
    }
    selectedConnection(item) {
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.Company = item.company;
        _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_3__.Configuration.BaseAddress = item.name + "/";
        var connection = { "strLink": item.name, "strCompany": item.company };
        this.local.set('_servername_' + connection.strLink + '_company_' + connection.strCompany, JSON.parse('{"strLink":"' + connection.strCompany + '","strCompany":"' + connection.strLink + '"}'));
        this.local.set('connection', JSON.stringify(connection));
        localStorage.setItem('connection', item.display);
    }
};
LoginConnectionPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController },
    { type: _providers_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_5__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform }
];
LoginConnectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-login-connection',
        template: _raw_loader_login_connection_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_connection_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
    // export class LoginConnectionPage implements OnInit {
], LoginConnectionPage);



/***/ }),

/***/ 35996:
/*!*******************************************************************!*\
  !*** ./src/app/pages/login-connection/login-connection.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi1jb25uZWN0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 37307:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login-connection/login-connection.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title> Connection </ion-title>\n    <ion-buttons slot=\"end\" style=\"padding-right: 15px;\">\n      <ion-button ion-button (click)=\"save(connectionForm.value, connectionForm.valid)\" [disabled]=\"!this.connectionForm.dirty || !this.connectionForm.valid\">Save</ion-button>\n    </ion-buttons>\n  </ion-toolbar>  \n</ion-header>\n\n<ion-content padding>\n  <form (ngSubmit)=\"save(connectionForm.value, connectionForm.valid)\" [formGroup]=\"connectionForm\">\n    <div >\n      <p class=\"connection-label\">Enter the i21 link and company <br> you want to connect</p>\n    </div>\n    <ion-list>\n      <ion-item>\n        <ion-label class=\"connectionlabel\">Link</ion-label>\n        <ion-input type=\"text\" formControlName=\"strLink\" clearInput></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf=\"!connectionForm.controls.strLink.valid && connectionForm.controls.strLink.dirty\" no-lines>\n        <p class=\"validationmessage\">Invalid link.</p>\n      </ion-item>\n\n      <ion-item>\n        <ion-label class=\"connectionlabel\">Company</ion-label>\n        <ion-select formControlName=\"strCompany\" [disabled]=\"!connectionForm.controls.strLink.valid\" [value]=\"connectionForm.controls.strLink\" clearInput> \n          <ion-select-option *ngFor=\"let company of companies\" [value]=\"company.strCompany\">\n            <span>{{ company.strCompany }}</span>\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <ion-item *ngIf=\"!connectionForm.controls.strCompany.valid && connectionForm.controls.strCompany.dirty\" no-lines>\n        <p class=\"validationmessage\">This field is required.</p>\n      </ion-item>\n\n      <div style=\"text-align: right; margin-right: 10px;\">\n        <ion-button ion-button end (click)=\"add(connectionForm.value, connectionForm.valid)\">Add Connection</ion-button>\n      </div>      \n       \n      <div >\n        <p class=\"connection-label\">Select Server Name to connect:</p>\n      </div>\n      <ion-list>\n        <ion-radio-group>\n          <ion-item *ngFor=\"let item of serverList\" (click)=\"selectedConnection(item)\">\n            <ion-label>{{item.display}}</ion-label>\n            <ion-radio checked=\"false\"></ion-radio>\n          </ion-item>\n        </ion-radio-group>\n      </ion-list>\n\n    </ion-list> \n  </form>\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-connection_login-connection_module_ts.js.map