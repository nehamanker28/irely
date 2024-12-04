(self["webpackChunkMobileBilling"] = self["webpackChunkMobileBilling"] || []).push([["src_app_pages_pdf-list_pdf-list_module_ts"],{

/***/ 88839:
/*!***********************************************************!*\
  !*** ./src/app/pages/pdf-list/pdf-list-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfListPageRoutingModule": () => (/* binding */ PdfListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _pdf_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf-list.page */ 21375);




const routes = [
    {
        path: '',
        component: _pdf_list_page__WEBPACK_IMPORTED_MODULE_0__.PdfListPage
    }
];
let PdfListPageRoutingModule = class PdfListPageRoutingModule {
};
PdfListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PdfListPageRoutingModule);



/***/ }),

/***/ 66242:
/*!***************************************************!*\
  !*** ./src/app/pages/pdf-list/pdf-list.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfListPageModule": () => (/* binding */ PdfListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _pdf_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pdf-list-routing.module */ 88839);
/* harmony import */ var _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../framework/brl/implementation/globalinfo */ 10487);
/* harmony import */ var _pdf_list_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pdf-list.page */ 21375);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);











let PdfListPageModule = class PdfListPageModule {
};
PdfListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule,
            _pdf_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.PdfListPageRoutingModule,
        ],
        declarations: [_pdf_list_page__WEBPACK_IMPORTED_MODULE_2__.PdfListPage],
        providers: [
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_3__.File,
            _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_4__.FileOpener,
            _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_5__.CommonSQL,
            _framework_brl_implementation_globalinfo__WEBPACK_IMPORTED_MODULE_1__.GlobalInfoBRL,
        ]
    })
], PdfListPageModule);



/***/ }),

/***/ 21375:
/*!*************************************************!*\
  !*** ./src/app/pages/pdf-list/pdf-list.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PdfListPage": () => (/* binding */ PdfListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_pdf_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pdf-list.page.html */ 84744);
/* harmony import */ var _pdf_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pdf-list.page.scss */ 89556);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx */ 20138);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ 18752);
/* harmony import */ var _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/_common/sqlite/implementation/common-sql */ 56443);








let PdfListPage = class PdfListPage {
    constructor(navCtrl, file, fileOpener, alertCtrl, commonSQL) {
        this.navCtrl = navCtrl;
        this.file = file;
        this.fileOpener = fileOpener;
        this.alertCtrl = alertCtrl;
        this.commonSQL = commonSQL;
        this.shiftNo = 0;
        this.searchString = "";
    }
    ngOnInit() {
    }
    ionViewDidEnter() {
        console.log('ionViewDidLoad ViewPdfPage');
        // this.getPDFList();
        this.getPDFTable();
    }
    getPDFList() {
        var me = this;
        me.file.listDir(me.file.dataDirectory, 'reports').then((result) => {
            console.log(result);
            var _files = [];
            for (let file of result) {
                var _file = { type: '', filename: '', fullpath: '', datecreated: '', visible: 'false' };
                if (file.isFile == true) {
                    console.log(file);
                    _file.type = file.name.substr(0, file.name.indexOf('_')).replace(/-/g, ' ');
                    _file.filename = file.name;
                    _file.fullpath = file.nativeURL;
                    if (_file.type === 'Delivery Out Of Gas') {
                        _file.visible = 'true';
                    }
                    _files.push(_file);
                }
            }
            me.data = _files;
            console.log(me.data);
        });
    }
    getSearchPDFList() {
    }
    openPDF(item) {
        console.log(item);
        this.fileOpener.open(item.fullpath, 'application/pdf');
    }
    openPDF2(filename) {
        let me = this, filepath = me.file.dataDirectory + "reports/";
        me.fileOpener.open(filepath + filename, 'application/pdf');
    }
    deleteReport(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            var me = this;
            console.log(item);
            let confirm = yield me.alertCtrl.create({
                message: 'Are you sure you want to delete this?',
                buttons: [
                    {
                        text: 'Yes',
                        handler: () => {
                            me.file.removeFile(item.fullpath.replace('/' + item.filename, ''), item.filename);
                            me.getPDFList();
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
    getPDFTable() {
        let me = this;
        me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
            let globalinfo = res[0];
            me.commonSQL.getDataQuery("Select * from tblMBILPDF where intDriverId = " + globalinfo.intDriverNumber + " order by intPDFId desc").then(result => {
                console.log('data from tblMBILPDF');
                me.pdflist = result;
                console.log(me.pdflist);
            });
            // me.commonSQL.getData('tblMBILPDF').then(res=>{
            //   console.log('data from tblMBILPDF');
            //   me.pdflist = res.filter(x=> x.intDriverId == globalinfo.intDriverNumber);
            //   console.log(me.pdflist);
            // })
        });
    }
};
PdfListPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_2__.File },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_3__.FileOpener },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController },
    { type: _framework_common_sqlite_implementation_common_sql__WEBPACK_IMPORTED_MODULE_4__.CommonSQL }
];
PdfListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-pdf-list',
        template: _raw_loader_pdf_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pdf_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PdfListPage);



/***/ }),

/***/ 89556:
/*!***************************************************!*\
  !*** ./src/app/pages/pdf-list/pdf-list.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwZGYtbGlzdC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 84744:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/pdf-list/pdf-list.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar class=\"my-toolbar box-shadow\" >\n    <ion-grid no-padding>\n      <ion-row large>\n        <ion-col size=\"10\" style=\"padding: 5px 0px 5px 0px\">\n          <ion-item>\n            <ion-label><b>File Name</b></ion-label>\n          </ion-item>\n        </ion-col>\n        <ion-col></ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <!-- <ion-list >\n    <ion-row *ngFor=\"let item of data\" >\n      <ion-col size=\"10\" style=\"padding: 5px 0px 5px 0px\" (click)='openPDF(item)'>\n        <ion-item>\n          <ion-label>{{item.filename}}</ion-label>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"2\" >\n        <ion-item>\n          <ion-button ion-button expand=\"block\" outline item-end icon-left style=\"padding: 5px 0px 5px 0px\" (click)=\"deleteReport(item)\" *ngIf=\"item.visible === 'true'\">\n            <ion-icon name=\"ios-close\"></ion-icon>\n            Delete\n          </ion-button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </ion-list> -->\n\n  <ion-list *ngFor=\"let item of pdflist; index as i\">\n      <ion-list-header lines=\"inset\" *ngIf=\"i == 0 || (i > 0 && pdflist[i-1].intShiftId != item.intShiftId)\" color=\"primary\">\n        <ion-label>\n          <h2>{{item.dtShiftDate | date:'fullDate'}} (Shift No. {{item.intShiftId}})</h2>\n        </ion-label>\n      </ion-list-header>\n      <ion-item (click)='openPDF2(item.strFileName)'>\n        <ion-label>\n          <p>{{item.strFileName}}</p>\n        </ion-label>\n      </ion-item>\n  </ion-list>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_pdf-list_pdf-list_module_ts.js.map