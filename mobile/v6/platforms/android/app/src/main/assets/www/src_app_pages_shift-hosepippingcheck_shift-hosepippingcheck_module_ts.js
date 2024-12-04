(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_shift-hosepippingcheck_shift-hosepippingcheck_module_ts"],{

/***/ 48763:
/*!***************************************************************************************!*\
  !*** ./src/app/pages/shift-hosepippingcheck/shift-hosepippingcheck-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftHosepippingcheckPageRoutingModule": () => (/* binding */ ShiftHosepippingcheckPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shift_hosepippingcheck_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-hosepippingcheck.page */ 54905);




const routes = [
    {
        path: '',
        component: _shift_hosepippingcheck_page__WEBPACK_IMPORTED_MODULE_0__.ShiftHosepippingcheckPage
    }
];
let ShiftHosepippingcheckPageRoutingModule = class ShiftHosepippingcheckPageRoutingModule {
};
ShiftHosepippingcheckPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ShiftHosepippingcheckPageRoutingModule);



/***/ }),

/***/ 67368:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shift-hosepippingcheck/shift-hosepippingcheck.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftHosepippingcheckPageModule": () => (/* binding */ ShiftHosepippingcheckPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _shift_hosepippingcheck_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shift-hosepippingcheck-routing.module */ 48763);
/* harmony import */ var _shift_hosepippingcheck_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-hosepippingcheck.page */ 54905);
/* harmony import */ var _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/_common/base/message */ 40807);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);










let ShiftHosepippingcheckPageModule = class ShiftHosepippingcheckPageModule {
};
ShiftHosepippingcheckPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _shift_hosepippingcheck_routing_module__WEBPACK_IMPORTED_MODULE_0__.ShiftHosepippingcheckPageRoutingModule
        ],
        declarations: [_shift_hosepippingcheck_page__WEBPACK_IMPORTED_MODULE_1__.ShiftHosepippingcheckPage],
        providers: [
            _framework_common_base_message__WEBPACK_IMPORTED_MODULE_2__.Message,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_3__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL,
        ]
    })
], ShiftHosepippingcheckPageModule);



/***/ }),

/***/ 54905:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/shift-hosepippingcheck/shift-hosepippingcheck.page.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShiftHosepippingcheckPage": () => (/* binding */ ShiftHosepippingcheckPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_shift_hosepippingcheck_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./shift-hosepippingcheck.page.html */ 48859);
/* harmony import */ var _shift_hosepippingcheck_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shift-hosepippingcheck.page.scss */ 1902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _providers_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../providers/report.service */ 67119);
/* harmony import */ var _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../framework/models/globalinfo */ 68439);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _framework_models_hosepipingcheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/models/hosepipingcheck */ 57249);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);
/* harmony import */ var _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../framework/_common/configuration/configuration */ 35217);
/* harmony import */ var _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../framework/models/tblMBILPDF */ 12750);












let ShiftHosepippingcheckPage = class ShiftHosepippingcheckPage {
    constructor(navCtrl, loadingCtrl, commonSQL, globalInfoBRL, reportService) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.commonSQL = commonSQL;
        this.globalInfoBRL = globalInfoBRL;
        this.reportService = reportService;
        this.data = [];
        this.pdfObj = null;
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        var me = this;
        console.log('ShiftHosepippingcheckPage');
        me.setup();
    }
    setup() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            let loader = yield me.loadingCtrl.create({ message: "Loading data...", backdropDismiss: true });
            loader.present();
            me.globalinfo = new _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfo();
            me.globalinfo.intUserMobileId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.navParams.intUserMobileId;
            me.globalinfo.intGlobal = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.navParams.intGlobal;
            me.globalinfo.intUserId = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.navParams.intUserId;
            me.globalinfo.strFullName = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.navParams.strFullName;
            me.globalinfo.intDriverNumber = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.navParams.intDriverNumber;
            me.globalinfo.intShiftCounter = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.navParams.intShiftCounter;
            me.globalinfo.strTruckNumber = _framework_common_configuration_configuration__WEBPACK_IMPORTED_MODULE_7__.Configuration.navParams.strTruckNumber || "";
            var _hosepiping = new _framework_models_hosepipingcheck__WEBPACK_IMPORTED_MODULE_5__.HosepipingCheck();
            me.commonSQL.getData(_hosepiping.tablename).then(res => {
                console.log(res);
                if (res.length > 0) {
                    me.data = res[0];
                    me.data['mapping'] = _hosepiping.mapping;
                    me.data['tablename'] = _hosepiping.tablename;
                    me.data['strTruckNumber'] = me.globalinfo.strTruckNumber;
                    loader.dismiss();
                }
                else {
                    me.commonSQL.addData(_hosepiping.tablename, _hosepiping).then(res => {
                        me.commonSQL.getRecord(_hosepiping.tablename).then(res => {
                            console.log(res);
                            me.data = res;
                            me.data['mapping'] = _hosepiping.mapping;
                            me.data['tablename'] = _hosepiping.tablename;
                            me.data['strTruckNumber'] = me.globalinfo.strTruckNumber;
                            loader.dismiss();
                        });
                    });
                }
            });
        });
    }
    getDateFormat(value) {
        var options = {
            year: "numeric", month: "short",
            day: "numeric", hour: "2-digit", minute: "2-digit"
        };
        return value.toLocaleTimeString("en-US", options);
    }
    save(record) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            var _date = new Date();
            var _update = new _framework_models_globalinfo__WEBPACK_IMPORTED_MODULE_3__.GlobalInfo();
            let loader = yield me.loadingCtrl.create({ message: "Saving...", backdropDismiss: true });
            loader.present();
            me.commonSQL.updateData(record.tablename, record).then(res => {
                var _filename = me.createPdf(record);
                me.doInsertPDFInfo(_filename + '.pdf');
                // UPDATE SHIFT
                _update.intGlobal = me.globalinfo.intGlobal;
                _update.dtmHosePipingCheck = me.getDateFormat(_date);
                _update.strHosePipingCheckPDF = _filename + '.pdf';
                me.globalInfoBRL.update(_update).then(res => {
                    loader.dismiss();
                    me.navCtrl.pop().then(() => {
                        //  me.events.publish('hosepipingcheck', _update);
                    });
                });
            });
        });
    }
    uncheck(data, field, value) {
        console.log(data[field]);
        data[field] = value;
    }
    logo() {
        return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
    }
    createPdf(record) {
        console.log(record);
        var me = this;
        var irelyImage = me.logo();
        var check1ok = '', check1defect = '', check2ok = '', check2defect = '', check3ok = '', check3defect = '', check4ok = '', check4defect = '', check5ok = '', check5defect = '', check6ok = '', check6defect = '', check7ok = '', check7defect = '', check8ok = '', check8defect = '', check9ok = '', check9defect = '', check10ok = '', check10defect = '', check11ok = '', check11defect = '', check12ok = '', check12defect = '', check13ok = '', check13defect = '', check14ok = '', check14defect = '', check15ok = '', check15defect = '', check16ok = '', check16defect = '', check17ok = '', check17defect = '', check18ok = '', check18defect = '', check19ok = '', check19defect = '', check20ok = '', check20defect = '', check21ok = '', check21defect = '', check22ok = '', check22defect = '';
        if (record.ysnCheck1) {
            check1defect = 'X';
        }
        else {
            check1ok = 'X';
        }
        if (record.ysnCheck2) {
            check2defect = 'X';
        }
        else {
            check2ok = 'X';
        }
        if (record.ysnCheck3) {
            check3defect = 'X';
        }
        else {
            check3ok = 'X';
        }
        if (record.ysnCheck4) {
            check4defect = 'X';
        }
        else {
            check4ok = 'X';
        }
        if (record.ysnCheck5) {
            check5defect = 'X';
        }
        else {
            check5ok = 'X';
        }
        if (record.ysnCheck6) {
            check6defect = 'X';
        }
        else {
            check6ok = 'X';
        }
        if (record.ysnCheck7) {
            check7defect = 'X';
        }
        else {
            check7ok = 'X';
        }
        if (record.ysnCheck8) {
            check8defect = 'X';
        }
        else {
            check8ok = 'X';
        }
        if (record.ysnCheck9) {
            check9defect = 'X';
        }
        else {
            check9ok = 'X';
        }
        if (record.ysnCheck10) {
            check10defect = 'X';
        }
        else {
            check10ok = 'X';
        }
        if (record.ysnCheck11) {
            check11defect = 'X';
        }
        else {
            check11ok = 'X';
        }
        if (record.ysnCheck12) {
            check12defect = 'X';
        }
        else {
            check12ok = 'X';
        }
        if (record.ysnCheck13) {
            check13defect = 'X';
        }
        else {
            check13ok = 'X';
        }
        if (record.ysnCheck14) {
            check14defect = 'X';
        }
        else {
            check14ok = 'X';
        }
        if (record.ysnCheck15) {
            check15defect = 'X';
        }
        else {
            check15ok = 'X';
        }
        if (record.ysnCheck16) {
            check16defect = 'X';
        }
        else {
            check16ok = 'X';
        }
        if (record.ysnCheck17) {
            check17defect = 'X';
        }
        else {
            check17ok = 'X';
        }
        if (record.ysnCheck18) {
            check18defect = 'X';
        }
        else {
            check18ok = 'X';
        }
        if (record.ysnCheck19) {
            check19defect = 'X';
        }
        else {
            check19ok = 'X';
        }
        if (record.ysnCheck20) {
            check20defect = 'X';
        }
        else {
            check20ok = 'X';
        }
        if (record.ysnCheck21) {
            check21defect = 'X';
        }
        else {
            check21ok = 'X';
        }
        if (record.ysnCheck22) {
            check22defect = 'X';
        }
        else {
            check22ok = 'X';
        }
        var docDefinition = {
            content: [
                {
                    table: {
                        widths: [155, '*', 175],
                        body: [
                            [
                                { image: irelyImage, width: 150 },
                                {},
                                [
                                    {
                                        table: {
                                            body: [
                                                ['Date:', new Date().toLocaleString()],
                                                ['Shift:', me.globalinfo.intShiftCounter],
                                                ['Driver:', me.globalinfo.intDriverNumber + ' - ' + me.globalinfo.strFullName],
                                                ['Truck:', me.globalinfo.strTruckNumber],
                                                ['Hose:', record['strHoseAssemblyNumber'] || '']
                                            ]
                                        },
                                        layout: 'noBorders'
                                    }
                                ]
                            ]
                        ]
                    },
                    layout: 'noBorders'
                },
                { text: 'LP Gas Cargo Tank Hose/Piping System Check', style: 'header' },
                {
                    table: {
                        headerRows: 1,
                        widths: ['*', 50, 50],
                        body: [
                            ['', { text: 'Ok', alignment: 'center' }, { text: 'Defect', alignment: 'center' }],
                            ['', '', ''],
                            ['', '', ''],
                            [{ text: 'CONDUCT VISUAL INSPECTION OF DELIVERY HOSE AND DELIVERY HOSE ASSEMBLY:', colSpan: 3, alignment: 'center' }, {}, {}],
                            ['', '', ''],
                            ['', '', ''],
                            ['Damage to the hose cover that exposes the reinforcement', { text: check1ok, alignment: 'center' }, { text: check1defect, alignment: 'center' }],
                            ['Wire braid reinforcement that has been kinked or flattened', { text: check2ok, alignment: 'center' }, { text: check2defect, alignment: 'center' }],
                            ['Soft spots when under pressure', { text: check3ok, alignment: 'center' }, { text: check3defect, alignment: 'center' }],
                            ['Bulging spots when under pressure', { text: check4ok, alignment: 'center' }, { text: check4defect, alignment: 'center' }],
                            ['Loose outer covering', { text: check5ok, alignment: 'center' }, { text: check5defect, alignment: 'center' }],
                            ['Damaged, Slipping or excessively worn hose couplings', { text: check6ok, alignment: 'center' }, { text: check6defect, alignment: 'center' }],
                            ['Loose, serverly corroded or missing bolts or fastening on bolted hose coupling assemblies', { text: check7ok, alignment: 'center' }, { text: check7defect, alignment: 'center' }],
                            ['Weather cracks on hose', { text: check8ok, alignment: 'center' }, { text: check8defect, alignment: 'center' }],
                            ['Cracks or severe damage on liquid hose end delivery nozzle coupler', { text: check9ok, alignment: 'center' }, { text: check9defect, alignment: 'center' }],
                            ['', '', ''],
                            ['', '', ''],
                            [{ text: 'CONDUCT VISUAL INSPECTION OF PIPING AND DISCHARGE SYSTEM:', colSpan: 3, alignment: 'center' }, {}, {}],
                            ['', '', ''],
                            ['', '', ''],
                            ['Piping or joints that are severely corroded', { text: check10ok, alignment: 'center' }, { text: check10defect, alignment: 'center' }],
                            ['Any external leak indentifiable without the use of instruments (value, seal, connection failure)', { text: check11ok, alignment: 'center' }, { text: check11defect, alignment: 'center' }],
                            ['Bolts loose, missing, or severely corroded', { text: check12ok, alignment: 'center' }, { text: check12defect, alignment: 'center' }],
                            ['Rubber hose flexible connectors with any condition as outlined above for hose assemblies', { text: check13ok, alignment: 'center' }, { text: check13defect, alignment: 'center' }],
                            ['Stainless steel flexible connectors with damaged reinforced braid', { text: check14ok, alignment: 'center' }, { text: check14defect, alignment: 'center' }],
                            ['Manual stop valves (ESV-Emergency Shutoff Valves) that will not actuate', { text: check15ok, alignment: 'center' }, { text: check15defect, alignment: 'center' }],
                            ['Failure to close, or leakage through the internal self-closing stop valve. Detectable without the use of instruments', { text: check16ok, alignment: 'center' }, { text: check16defect, alignment: 'center' }],
                            ['Fusible elements missing or damaged', { text: check17ok, alignment: 'center' }, { text: check17defect, alignment: 'center' }],
                            ['Test all emergency discharge control devices designed to close the internal self-closing stop valve, to assure that all linkages to the valve operate as intended', { text: check18ok, alignment: 'center' }, { text: check18defect, alignment: 'center' }],
                            ['', '', ''],
                            ['', '', ''],
                            [{ text: 'OTHER CARGO TANK MAINTENANCE CHECKS:', colSpan: 3, alignment: 'center' }, {}, {}],
                            ['', '', ''],
                            ['', '', ''],
                            ['Tank tie down bolts to chassis secured and not rusted', { text: check19ok, alignment: 'center' }, { text: check19defect, alignment: 'center' }],
                            ['While truck is shut off, lubricate PTO drive line', { text: check20ok, alignment: 'center' }, { text: check20defect, alignment: 'center' }],
                            ['Product decals and placards clean and visible on all 4 sides', { text: check21ok, alignment: 'center' }, { text: check21defect, alignment: 'center' }],
                            ['Liquid and Vapor lines and valves clearly marked', { text: check22ok, alignment: 'center' }, { text: check22defect, alignment: 'center' }],
                        ]
                    },
                    layout: 'noBorders'
                },
                { text: 'Sinature of Person Performing Inspection: __________________________________', margin: [0, 10, 0, 0] },
                { text: 'Above Defects Corrected: Yes or No' },
                { text: 'Above Defects Need Not Be corrected For Safe Operation of Vehicle: Yes or No' },
            ],
            styles: {
                header: {
                    fontSize: 13,
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
        //HoseCheck_TruckNumber_HoseAssemblyNumber_YYYYMMDDHHMM
        var _now = new Date(), _filename = "HoseCheck_" + me.data['strTruckNumber'].toString().replace('/', '') + "_" + me.data['strHoseAssemblyNumber'] + "_" + _now.getFullYear() + ("0" + (_now.getMonth() + 1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours() + 1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
        _filename = _filename.replace(/[/\\?%*:|"<>]/g, '');
        console.log(docDefinition);
        console.log(_filename);
        me.reportService.create(docDefinition, _filename, true);
        return _filename;
    }
    doInsertPDFInfo(_filename) {
        console.log('start doInsertPDFInfo');
        let me = this, pdfinfo = new _framework_models_tblMBILPDF__WEBPACK_IMPORTED_MODULE_8__.tblMBILPDF();
        me.commonSQL.getData("shift").then(res => {
            console.log('data get from shift');
            let shiftdata = res[res.length - 1];
            pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
            pdfinfo.intShiftId = me.globalinfo.intShiftCounter;
            pdfinfo.intDriverId = me.globalinfo.intDriverNumber;
            pdfinfo.strFileName = _filename;
            pdfinfo.strFileType = "HOSE_PIPPING";
            me.commonSQL.addData('tblMBILPDF', pdfinfo).then(res => {
                console.log('successfully inserted to tblMBILPDF');
                me.commonSQL.getData('tblMBILPDF').then(result => console.log(result));
            });
        });
    }
};
ShiftHosepippingcheckPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.LoadingController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_6__.CommonSQL },
    { type: _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_4__.GlobalInfoBRL },
    { type: _providers_report_service__WEBPACK_IMPORTED_MODULE_2__.ReportService }
];
ShiftHosepippingcheckPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-shift-hosepippingcheck',
        template: _raw_loader_shift_hosepippingcheck_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_shift_hosepippingcheck_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ShiftHosepippingcheckPage);



/***/ }),

/***/ 1902:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/shift-hosepippingcheck/shift-hosepippingcheck.page.scss ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaGlmdC1ob3NlcGlwcGluZ2NoZWNrLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 48859:
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/shift-hosepippingcheck/shift-hosepippingcheck.page.html ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>  \n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    \n    <ion-grid no-padding>\n      <ion-row justify-content-start>\n        <ion-col size=\"6\" style=\"margin-right: 5px; color: black\">\n          <ion-item>\n            <b>Hose Assembly #: &nbsp; </b> <ion-input type=\"text\" style=\"border-color: black; border-style: dashed;\" [(ngModel)]=\"data['strHoseAssemblyNumber']\"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col size=\"2.5\" style=\"color: black\">\n            <ion-item>\n              <b>Truck / Tank #: &nbsp; {{data['strTruckNumber']}}</b>\n            </ion-item>\n          </ion-col>\n        <ion-col col-auto></ion-col>\n        <ion-col size=\"3\" style=\"margin-right: 5px;\">\n          <ion-button ion-button expand=\"block\" size=\"large\"primary (click)=\"save(data)\" class=\"button-global\">Save</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-grid no-padding>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Damage to the hose cover that exposes the reinforcement</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck1']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Wire braid reinforcement that has been kinked or flattened</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck2']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Soft spots when under pressure</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck3']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Bulging spots when under pressure</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck4']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Loose outer covering</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck5']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Damaged, Slipping or excessively worn hose couplings</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck6']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Loose, serverly corroded or missing bolts or fastening on bolted hose coupling assemblies</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck7']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Weather cracks on hose</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck8']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Cracks or severe damage on liquid hose end delivery nozzle coupler</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck9']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Piping or joints that are severely corroded</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck10']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Any external leak indentifiable without the use of instruments (value, seal, connection failure)</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck11']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Bolts loose, missing, or severely corroded</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck12']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Rubber hose flexible connectors with any condition as outlined above for hose assemblies</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck13']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Stainless steel flexible connectors with damaged reinforced braid</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck14']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Manual stop valves (ESV-Emergency Shutoff Valves) that will not actuate</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck15']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Failure to close, or leakage through the internal self-closing stop valve. Detectable without the use of instruments</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck16']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Fusible elements missing or damaged</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck17']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Test all emergency discharge control devices designed to close the internal self-closing stop valve, to assure that all linkages <br> to the valve operate as intended</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item style=\"height: 100%;\">\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck18']\" ></ion-checkbox>\n          <br>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Tank tie down bolts to chassis secured and not rusted</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck19']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>While truck is shut off, lubricate PTO drive line</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck20']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Product decals and placards clean and visible on all 4 sides</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck21']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>Liquid and Vapor lines and valves clearly marked</ion-label>              \n        </ion-item>                                        \n      </ion-col>        \n      <ion-col size=\"2\">\n        <ion-item>\n          <ion-label>Defects</ion-label>\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"data['ysnCheck22']\" ></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col style=\"height: 0px;\">\n        <ion-item>\n          <ion-label stacked>Comments: </ion-label>\n          <ion-input type=\"text\" style=\"border-color: black; border-style: dashed;\" [(ngModel)]=\"data['strComments']\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>       \n    <ion-row>\n      <br><br><br><br>\n    </ion-row>\n    <ion-row>\n      <br><br><br><br>\n    </ion-row>\n  </ion-grid>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_shift-hosepippingcheck_shift-hosepippingcheck_module_ts.js.map