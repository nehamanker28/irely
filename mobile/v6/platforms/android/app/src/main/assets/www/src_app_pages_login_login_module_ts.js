(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_login_login_module_ts"],{

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

/***/ 73403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 21053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 73403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);
/* harmony import */ var _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/brl/implementation/user */ 68774);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);











// import { LoginConnectionPageModule } from '../login-connection/login-connection.module';
let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule,
            // LoginConnectionPageModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_5__.Message,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder,
            _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_2__.UserBRL,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL
        ],
        exports: [
            _login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage
        ]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./login.page.html */ 31021);
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss */ 28781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ 70283);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _providers_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/login.service */ 96465);
/* harmony import */ var _providers_network_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/network.service */ 31005);
/* harmony import */ var _framework_models_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/models/user */ 7490);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);
/* harmony import */ var _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/app-version/ngx */ 7354);
/* harmony import */ var _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../framework/brl/implementation/user */ 68774);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _providers_user_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../providers/user-data */ 76401);
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/storage */ 61628);
/* harmony import */ var _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../framework/brl/implementation/syncdevicedata */ 1447);
/* harmony import */ var _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../framework/models/tblMBILPDF */ 12750);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);























let LoginPage = class LoginPage {
    constructor(navCtrl, loadingCtrl, messageUtil, loginService, formBuilder, modalCtrl, networkconnectionService, globalInfoBRL, userBRL, commonSQL, menu, appVersion, sqlite, userData, alertCtrl, router, syncDeviceDataBRL, storage, file) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.messageUtil = messageUtil;
        this.loginService = loginService;
        this.formBuilder = formBuilder;
        this.modalCtrl = modalCtrl;
        this.networkconnectionService = networkconnectionService;
        this.globalInfoBRL = globalInfoBRL;
        this.userBRL = userBRL;
        this.commonSQL = commonSQL;
        this.menu = menu;
        this.appVersion = appVersion;
        this.sqlite = sqlite;
        this.userData = userData;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.syncDeviceDataBRL = syncDeviceDataBRL;
        this.storage = storage;
        this.file = file;
        this.connection = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_4__.Configuration.BaseAddress;
        this.expenses = [];
        this.totalIncome = 0;
        this.totalExpense = 0;
        this.balance = 0;
        let me = this;
        me.loginForm = formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_18__.Validators.required],
            servername: ['']
        });
        this.menu.enable(false);
    }
    ngOnInit() {
        this.setupInit();
    }
    setupInit() {
        this.menu.enable(false);
        console.log('ionViewDidLoad LoginMainPage');
        console.log(this.appVersion.getPackageName());
        console.log(this.appVersion.getVersionCode());
        console.log(this.appVersion.getVersionNumber());
        this.getVersionNumber();
        this.newInstalled();
    }
    getVersionNumber() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            const versionNumber = yield this.appVersion.getVersionNumber();
            this.version = versionNumber;
            this.version_number = parseInt(this.version.replace(/\./g, '').toString());
            console.log(versionNumber);
            console.log(this.version_number);
            this.appVersion.getVersionNumber().then(result => {
                this.version = result;
            });
        });
    }
    newInstalled() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            const creatingDialog = yield this.loadingCtrl.create({
                message: 'Creating tables...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            const validatingDialog = yield this.loadingCtrl.create({
                message: 'Validating tables...',
                duration: 0,
                spinner: 'circles',
                backdropDismiss: true
            });
            validatingDialog.present();
            me.storage.get('current_version').then(res => {
                console.log(res);
                if (res == null || res == undefined) {
                    me.storage.set('current_version', me.version_number);
                    me.commonSQL.getDataQuery('select * from syncdevicedata').then((data) => {
                        console.log(data);
                        if (data.length < 1) {
                            me.syncDeviceDataBRL.defaultRecord().then(() => {
                                console.log(res);
                                validatingDialog.dismiss();
                            });
                        }
                        else {
                            validatingDialog.dismiss();
                        }
                    }, (data) => {
                        me.commonSQL.getDataQuery('select * from shift').then((data) => {
                            validatingDialog.dismiss();
                            creatingDialog.present();
                        }, (data) => {
                            validatingDialog.dismiss();
                            creatingDialog.present();
                            me.commonSQL.DropAndCreate(null, true).then(res => {
                                me.syncDeviceDataBRL.defaultRecord().then((res) => {
                                    console.log(res);
                                    creatingDialog.dismiss();
                                });
                            });
                        });
                    });
                }
                else if (me.version_number > res) {
                    // me.updateDatabase(res);
                    me.storage.set('current_version', me.version_number);
                    validatingDialog.dismiss();
                }
                else {
                    validatingDialog.dismiss();
                }
            });
        });
    }
    updateDatabase(current_version) {
        var me = this;
        return new Promise((resolve, reject) => {
            console.log('++++++++++++++++ EXEC UPDATE SCRIPT - START ++++++++++++++++');
            // current version - 2011109
            // script version - 2011110
            if (2011222 > current_version) {
                me.commonSQL.executeQuery('ALTER TABLE globalinfo ADD COLUMN ysnLogged boolean').then(result => {
                    console.log(result);
                    console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
                    // resolve(result);
                });
                // me.commonSQL.executeQuery('ALTER TABLE globalinfo ADD COLUMN strHosePipingCheckPDF string').then(result=>{
                //   console.log(result);
                //   console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
                //   // resolve(result);
                // });
                // me.commonSQL.executeQuery('ALTER TABLE globalinfo ADD COLUMN strReviewShiftPDF string').then(result=>{
                //   console.log(result);
                //   console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
                //   resolve(result);
                // });
            }
            resolve(true);
        });
    }
    showForgotPassword() {
        // let forgotLoginModal = this.modalCtrl.create("LoginForgotpasswordPage");
        // forgotLoginModal.present();
    }
    doSignIn(value, valid) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            // let me = this,
            //     username = 'bobsmith@irely.com', //axel.casauran@irely.com', // value.username, //bobsmith@irely.com
            //     password = 'markie33221', //'12345678', //value.password; //markie33221
            //     company = '01'; //value.company
            let me = this, username = value.username, password = value.password, company = '01'; //value.company;
            me.submitAttempt = true;
            // if (!valid) {
            //   return;
            // }
            ;
            if (me.networkconnectionService.isOnline()) {
                let loader = yield me.loadingCtrl.create({ message: "Authenticating..." });
                var loader2 = yield me.loadingCtrl.create({ message: "Syncing user data..." });
                loader.present();
                ;
                me.loginService.getAuthToken(username, password, company)
                    .subscribe((result) => {
                    console.log('getAuthToken');
                    console.log(result);
                    me.loginService.doSignIn(username, password)
                        .subscribe((result) => {
                        console.log('doSignIn');
                        console.log(result);
                        loader.dismiss();
                        if (result.LoginMessage.indexOf("Success") != -1) {
                            loader2.present();
                            me.storage.set('current_version', me.version_number);
                            me.userData.signup(username);
                            // ADD MORE FIELDS HERE - TODO
                            var _record = new _framework_models_user__WEBPACK_IMPORTED_MODULE_7__.User();
                            _record.intUserId = result.EntityId;
                            _record.strFullName = result.strFullName;
                            _record.strUserName = username;
                            _record.strPassword = password;
                            _record.intDriverNumber = result.ContactParentId;
                            _record.ContactParentId = result.ContactParentId;
                            _record.CompanyName = result.CompanyName;
                            console.log(_record);
                            me.globalInfoBRL.getByQuery('select * from globalinfo where intUserId = \'' + _record.intUserId + '\'').then(result => {
                                console.log(result);
                                if (result.length > 0) {
                                    me.globalInfoBRL.updateByQuery('UPDATE globalinfo SET ysnLogged = \'true\' WHERE intUserId = \'' + _record.intUserId + '\'').then(result => {
                                        loader2.dismiss();
                                        console.log('++++++++ UPDATE ysnLogged ++++++++');
                                        me.router.navigateByUrl('/shift');
                                    });
                                }
                                else {
                                    me.userBRL.add(_record);
                                    var _globalinfo = new _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_8__.GlobalInfo();
                                    _globalinfo = me.userBRL.defaultRecord(_record);
                                    me.globalInfoBRL.add(_globalinfo).then(result => {
                                        loader2.dismiss();
                                        console.log('++++++++ UPDATE ysnLogged ++++++++');
                                        me.router.navigateByUrl('/shift');
                                    });
                                }
                            }, (error) => {
                                me.userBRL.add(_record);
                                var _globalinfo = new _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_8__.GlobalInfo();
                                _globalinfo = me.userBRL.defaultRecord(_record);
                                me.globalInfoBRL.add(_globalinfo).then(result => {
                                    loader2.dismiss();
                                    console.log('++++++++ UPDATE ysnLogged ++++++++');
                                    me.router.navigateByUrl('/shift');
                                });
                            });
                            me.file.readAsText(me.file.externalDataDirectory, "tblMBILPDF.json").then(result => {
                                console.log('pdf data to insert . . .');
                                console.log(JSON.parse(result));
                                me.commonSQL.addBulkData("tblMBILPDF", new _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_16__.tblMBILPDF(), JSON.parse(result)).then(res => {
                                    me.commonSQL.getData("tblMBILPDF").then(res => {
                                        me.file.removeFile(me.file.externalDataDirectory, "tblMBILPDF.json").then(res => {
                                            console.log(res);
                                        });
                                    });
                                });
                            });
                            // // me.commonSQL.createTable(_record).then(result => {
                            //   me.userBRL.add(_record).then(result => {
                            //     var _globalinfo = new GlobalInfo();
                            //     me.commonSQL.createTable(_globalinfo).then(result => {
                            //       _globalinfo = me.userBRL.defaultRecord(_record);
                            //       _globalinfo.ysnLogged = true;
                            //       me.globalInfoBRL.add(_globalinfo).then(result=> {
                            //         loader2.dismiss();
                            //         ;
                            //         me.router.navigateByUrl('/app/tabs/dashboard');
                            //       });
                            //     },
                            //     (error) => {
                            //       ;
                            //       _globalinfo = me.userBRL.defaultRecord(_record);
                            //       _globalinfo.ysnLogged = true;
                            //       me.globalInfoBRL.getByQuery('select * from globalinfo where intUserId = ' + _record.intUserId).then(result => {
                            //         if(result) {
                            //           me.globalInfoBRL.updateByQuery('UPDATE globalinfo SET ysnLogged = true WHERE intUserId = ' + _record.intUserId).add(_globalinfo).then(result=> {
                            //             loader2.dismiss();
                            //             ;
                            //             me.router.navigateByUrl('/app/tabs/dashboard');
                            //           });
                            //         }
                            //         else {
                            //           me.globalInfoBRL.add(_globalinfo).then(result=> {
                            //             loader2.dismiss();
                            //             ;
                            //             me.router.navigateByUrl('/app/tabs/dashboard');
                            //           });
                            //         }
                            //       });
                            //     });
                            //   },
                            //   (error) => {
                            //     loader2.dismiss();
                            //     console.log(error);
                            //     me.messageUtil.showAlertInfoMessage("Failed to sync user data.");
                            //   });
                            // },
                            // (error) => {
                            //   loader2.dismiss();
                            //   console.log(error);
                            //   me.messageUtil.showAlertInfoMessage("Failed to create user data.");
                            // });
                        }
                        else {
                            me.messageUtil.showAlertInfoMessage("Invalid username or password.");
                        }
                    }, (error) => {
                        loader.dismiss();
                        me.messageUtil.showAlertInfoMessage("Invalid username or password.");
                    });
                }, (error) => {
                    loader.dismiss();
                    me.messageUtil.showAlertInfoMessage("Invalid username or password.");
                });
            }
            else {
                let loader = yield me.loadingCtrl.create({ message: "Authenticating via offline mode..." });
                loader.present();
                me.userBRL.loginOffline(username, password).then(res => {
                    if (res['length'] > 0) {
                        loader.dismiss();
                        me.router.navigateByUrl('/shift');
                    }
                    else {
                        loader.dismiss();
                        me.messageUtil.showAlertInfoMessage("Invalid username or password.");
                    }
                });
            }
        });
    }
    pushRegister() {
        // if (me.platform.is('cordova')) {
        //   me.push.register().then((t: PushToken) => {
        //     return me.push.saveToken(t);
        //   }).then((t: PushToken) => {
        //     let token = new DeviceToken();
        //     token.intEntityId = result.EntityId;
        //     token.strDeviceToken = t.token;
        //     token.intLoginDeviceTokenId = 1;
        //     token.strPlatform = "";
        //     me.pushService.create(token).subscribe((response) => {
        //       let data = response.data[0],
        //           cred = new Credential('5c4380ee-e537-4d5f-a0ec-4d454fbb54e6', username, password, data.intLoginDeviceTokenId);
        //       me.credentialService.addCredential(cred);
        //     });
        //   });
        // } else {
        //   let cred = new Credential('5c4380ee-e537-4d5f-a0ec-4d454fbb54e6', username, password, 0);
        //   me.credentialService.addCredential(cred);
        //}
    }
    showConnection() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__awaiter)(this, void 0, void 0, function* () {
            let me = this;
            me.router.navigateByUrl('/login-connection');
            // let connectionModal = await me.modalCtrl.create({
            //   component: LoginConnectionPage
            // });
            // return await connectionModal.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.LoadingController },
    { type: _framework_common_base_message__WEBPACK_IMPORTED_MODULE_3__.Message },
    { type: _providers_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.ModalController },
    { type: _providers_network_service__WEBPACK_IMPORTED_MODULE_6__.NetworkService },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_12__.GlobalInfoBRL },
    { type: _framework_brl_implementation_user__WEBPACK_IMPORTED_MODULE_10__.UserBRL },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_11__.CommonSQL },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.MenuController },
    { type: _ionic_native_app_version_ngx__WEBPACK_IMPORTED_MODULE_9__.AppVersion },
    { type: _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__.SQLite },
    { type: _providers_user_data__WEBPACK_IMPORTED_MODULE_13__.UserData },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_20__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_21__.Router },
    { type: _framework_brl_implementation_syncdevicedata__WEBPACK_IMPORTED_MODULE_15__.SyncDeviceDataBRL },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_14__.Storage },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_17__.File }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_22__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], LoginPage);



/***/ }),

/***/ 31005:
/*!**********************************************!*\
  !*** ./src/app/providers/network.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NetworkService": () => (/* binding */ NetworkService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/network/ngx */ 75592);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);




let NetworkService = class NetworkService {
    constructor(platform, network) {
        this.platform = platform;
        this.network = network;
        this.onDevice = this.platform.is('cordova');
    }
    isOnline() {
        if (this.onDevice && this.network.type) {
            return this.network.type !== 'NONE';
        }
        else {
            return navigator.onLine;
        }
        // let connectSubscription = this.network.onConnect().subscribe(() => {
        //   console.log('network connected!');
        //   // We just got a connection but we need to wait briefly
        //    // before we determine the connection type. Might need to wait.
        //   // prior to doing any api requests as well.
        //   setTimeout(() => {
        //     if (this.network.type === 'wifi') {
        //       console.log('we got a wifi connection, woohoo!');
        //     }
        //   }, 3000);
        // });
        // // stop connect watch
        // connectSubscription.unsubscribe();
    }
    isOffline() {
        if (this.onDevice && this.network.type) {
            return this.network.type === 'NONE';
        }
        else {
            return !navigator.onLine;
        }
    }
};
NetworkService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.Platform },
    { type: _ionic_native_network_ngx__WEBPACK_IMPORTED_MODULE_0__.Network }
];
NetworkService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], NetworkService);



/***/ }),

/***/ 28781:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("img {\n  margin: auto;\n  display: block;\n}\n\n.loginlabel {\n  flex: 0 0 20px !important;\n  width: 20px !important;\n  min-width: 20px !important;\n  max-width: 20px !important;\n}\n\n.image-div {\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n\n.connection-label {\n  text-align: center;\n  margin-top: 35px;\n}\n\n.clear-button {\n  font-size: 13px;\n}\n\n.forgot-login-button {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.change-connection-button {\n  text-align: center;\n}\n\n.outer-content .item {\n  color: black;\n  background-color: #fff;\n}\n\n.list-ios > .item-block:first-child {\n  border-top: none;\n  border-bottom: 0.55px solid gray;\n}\n\n.list-ios > .item-block:last-child {\n  border-bottom: 0.55px solid gray;\n}\n\n.page-login .item-inner {\n  border-bottom: 0.55px solid gray !important;\n}\n\n.page-login .text-input {\n  color: black;\n}\n\n.page-login .select-text {\n  color: black;\n}\n\n.scroll-content {\n  background-color: white;\n}\n\nion-content {\n  background-size: cover;\n  background-repeat: no-repeat;\n  border-color: transparent;\n}\n\n.scroll-content {\n  margin-top: 0 !important;\n}\n\n.logo {\n  height: auto;\n  padding-top: 2vh;\n  margin-bottom: 5vh;\n}\n\n.submit-box {\n  margin-top: 10px;\n  text-align: center;\n}\n\n.error-message .item-inner {\n  border-bottom-color: transparent !important;\n  box-shadow: inset 0 -1px 0 0 transparent !important;\n}\n\n.error-message p {\n  text-align: right;\n  color: black;\n}\n\nion-item {\n  color: black !important;\n  padding-left: 0px !important;\n  background-color: transparent !important;\n  font-size: 0.9em;\n}\n\n.item-inner {\n  border-bottom: 1px solid black !important;\n  box-shadow: inset 0 -1px 0 transparent;\n}\n\n::-webkit-input-placeholder {\n  color: black !important;\n}\n\n.login-container {\n  color: black;\n  position: absolute;\n  top: 0;\n  padding: 10vw;\n  text-align: center;\n  width: 100%;\n  margin: 0 auto;\n  z-index: 2;\n}\n\nion-button {\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBSTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUk7RUFHQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSwwQkFBQTtBQUNKOztBQUVJO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVJO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVJO0VBQ0EsZUFBQTtBQUNKOztBQUVJO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVJO0VBQ0Esa0JBQUE7QUFDSjs7QUFFSTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVJO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQUNKOztBQUVJO0VBQ0EsZ0NBQUE7QUFDSjs7QUFFSTtFQUNBLDJDQUFBO0FBQ0o7O0FBRUk7RUFDQSxZQUFBO0FBQ0o7O0FBRUk7RUFDQSxZQUFBO0FBQ0o7O0FBRUk7RUFDQSx1QkFBQTtBQUNKOztBQU9JO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBSko7O0FBTUk7RUFDQSx3QkFBQTtBQUhKOztBQU1JO0VBRUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFTSTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFOSjs7QUFTSTtFQUNBLDJDQUFBO0VBQ0EsbURBQUE7QUFOSjs7QUFRSTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQU9JO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUVBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFMSjs7QUFPSTtFQUNBLHlDQUFBO0VBQ0Esc0NBQUE7QUFKSjs7QUFNSTtFQUNBLHVCQUFBO0FBSEo7O0FBS0k7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FBRko7O0FBSUk7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGltZyB7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIC5sb2dpbmxhYmVsIHtcbiAgICAtd2Via2l0LWZsZXg6IDAgMCAyMHB4O1xuICAgIC1tcy1mbGV4OiAwIDAgMjBweDtcbiAgICBmbGV4OiAwIDAgMjBweCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWluLXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgbWF4LXdpZHRoOiAyMHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmltYWdlLWRpdiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH1cblxuICAgIC5jb25uZWN0aW9uLWxhYmVsIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMzVweDtcbiAgICB9XG5cbiAgICAuY2xlYXItYnV0dG9uIHtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgfVxuXG4gICAgLmZvcmdvdC1sb2dpbi1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5jaGFuZ2UtY29ubmVjdGlvbi1idXR0b24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAub3V0ZXItY29udGVudCAuaXRlbSB7XG4gICAgY29sb3I6IGJsYWNrOyAvL2dyYXlcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyAgICAvLzIzMzY0NVxuICAgIH1cblxuICAgIC5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmZpcnN0LWNoaWxkIHtcbiAgICBib3JkZXItdG9wOiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDAuNTVweCBzb2xpZCBncmF5OyAvL2VkZjFmMlxuICAgIH1cblxuICAgIC5saXN0LWlvcyA+IC5pdGVtLWJsb2NrOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDAuNTVweCBzb2xpZCBncmF5OyAvLzVhNWE1ZFxuICAgIH1cblxuICAgIC5wYWdlLWxvZ2luIC5pdGVtLWlubmVyIHtcbiAgICBib3JkZXItYm90dG9tOiAwLjU1cHggc29saWQgZ3JheSAhaW1wb3J0YW50OyAvLzVhNWE1ZFxuICAgIH1cblxuICAgIC5wYWdlLWxvZ2luIC50ZXh0LWlucHV0IHtcbiAgICBjb2xvcjogYmxhY2s7IC8vd2hpdGVcbiAgICB9XG5cbiAgICAucGFnZS1sb2dpbiAuc2VsZWN0LXRleHQge1xuICAgIGNvbG9yOiBibGFjazsgLy93aGl0ZVxuICAgIH1cblxuICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IC8vMjMzNjQ1XG4gICAgfVxuXG4gICAgXG4gICAgXG5cblxuXG4gICAgaW9uLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgIG1hcmdpbi10b3A6IDAgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgLy8gd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZy10b3A6IDJ2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gICAgfVxuICAgIC8vIHNwYW4ge1xuICAgIC8vICAgY29sb3I6IGJsYWNrOyAvL3doaXRlXG4gICAgLy8gfVxuICAgIC5zdWJtaXQtYm94e1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5lcnJvci1tZXNzYWdlIC5pdGVtLWlubmVye1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTFweCAwIDAgIHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5lcnJvci1tZXNzYWdlIHB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6YmxhY2s7IC8vd2hpdGVcbiAgICB9XG4gICAgaW9uLWl0ZW0ge1xuICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50OyAvL3doaXRlXG4gICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudDtcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICB9XG4gICAgLml0ZW0taW5uZXJ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrICFpbXBvcnRhbnQ7IC8vd2hpdGVcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCB0cmFuc3BhcmVudDsgXG4gICAgfVxuICAgIDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7IC8vd2hpdGVcbiAgICB9XG4gICAgLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgY29sb3I6IGJsYWNrOyAvL3doaXRlXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBwYWRkaW5nOiAxMHZ3O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB6LWluZGV4OiAyO1xuICAgIH1cbiAgICBpb24tYnV0dG9uIHtcbiAgICBvcGFjaXR5OiAwLjg7XG4gICAgfVxuIl19 */");

/***/ }),

/***/ 31021:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>login</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n\n<ion-content class=\"outer-content\" fullscreen=\"true\">\n  <div class=\"login-container\">\n    <div padding class=\"image-div\">\n      <img src=\"assets/irely/irely_new.png\"/>      \n    </div>\n\n    <form (ngSubmit)=\"doSignIn(loginForm.value, loginForm.valid)\" [formGroup]=\"loginForm\">\n      <ion-list>     \n        <ion-item>\n          <ion-label color=\"primary\" floating>Username</ion-label>\n          <ion-input color=\"primary\" tappable autocapitalize='off' formControlName=\"username\" clearInput>\n          </ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!loginForm.controls.username.valid && submitAttempt\" no-lines>\n          <p class=\"validationmessage\"><ion-text color=\"primary\">This field is required.</ion-text></p>\n        </ion-item>\n\n        <ion-item>\n          <ion-label color=\"primary\" floating>Password</ion-label>\n          <ion-input color=\"primary\" tappable type=\"password\" formControlName=\"password\" clearInput>\n          </ion-input>\n        </ion-item>\n        <ion-item *ngIf=\"!loginForm.controls.password.valid && submitAttempt\" no-lines>\n          <p class=\"validationmessage\"><ion-text color=\"primary\">This field is required.</ion-text></p>\n        </ion-item>\n\n      </ion-list>  \n\n      <div class=\"submit-box\">\n        <ion-button ion-button expand=\"block\" type=\"submit\" color=\"primary\">Sign In</ion-button>        \n        <ion-button ion-button type=\"button\" expand=\"block\" icon-left color=\"primary\" fill=\"outline\" (click)=\"showConnection()\" margin-top>\n          <ion-icon name=\"create-outline\"></ion-icon> Server Configuration\n        </ion-button>\n      </div>\n\n      <!-- <div class=\"forgot-login-button\">\n        <ion-button ion-button class=\"clear-button\" center color=\"primary\" (click)=\"showForgotPassword()\" type=\"button\" clear>\n          Forgot username / password?\n        </ion-button>\n      </div> -->\n\n      <div>\n        <label style=\"color: #919191; font-size: x-small;\">Version : {{version}}</label>\n      </div>\n\n    </form>\n  \n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map