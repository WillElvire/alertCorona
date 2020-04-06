(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n\r\n<div class=\"svg\">\r\n    <br>\r\n    <ion-title padding color=\"light\"> Anti</ion-title>\r\n    <ion-title padding  color=\"light\"> <b>Covid-19</b> </ion-title>\r\n    <br>\r\n     <ion-buttons slot=\"end\">\r\n\r\n           <ion-menu-button color=\"light\"></ion-menu-button>\r\n    </ion-buttons>\r\n</div>\r\n \r\n \r\n  <br>\r\n  <h1 size=\"large\"  style=\"margin-left: 25%\"><b>World Statistics</b></h1>\r\n\r\n\r\n\r\n  <canvas #mychart width=\"400\" height=\"400\">  </canvas>\r\n  \r\n\r\n      <ion-text padding color=\"primary\"  >\r\n\r\n          <h1  style=\"margin-left: 5%\" > <b> Cas confirmés </b> </h1>\r\n          <h5  style=\"margin-left: 5%\">{{info?.cases | number}}  Personnes</h5>\r\n        \r\n      </ion-text>\r\n\r\n\r\n\r\n      <ion-text padding color=\"danger\"  style=\"margin-left: 5%\" >\r\n\r\n          <h1  style=\"margin-left: 5%\"> <b> Nombre de Morts </b> </h1>\r\n          <h5   style=\"margin-left: 5%\">{{info?.deaths | number}}  personnes </h5>\r\n        \r\n      </ion-text>\r\n \r\n\r\n \r\n   \r\n\r\n    <ion-text padding color=\"success\"  style=\"margin-left: 10%\" >\r\n\r\n          <h1  style=\"margin-left: 5%\" > <b>Nombre de guerrisons </b> </h1>\r\n          <h5  style=\"margin-left: 5%\">{{info?.recovered | number}} personnes</h5> \r\n        \r\n      </ion-text>\r\n\r\n\r\n  \r\n</ion-content>");

/***/ }),

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .svg {\n  width: 50%;\n  heigth: 10vh;\n  border-bottom-right-radius: 2000px;\n  background-color: forestgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcVXNlcnNcXFBDLVdJTExZXFxpb25pY193YXlcXENPVklELTE5LWFwcC9zcmNcXGFwcFxcdGFiMVxcdGFiMS5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFFRyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUNIUCIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICBcclxuIFxyXG4gICAgLnN2Z3tcclxuXHJcbiAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICBoZWlndGg6MTB2aDtcclxuICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjIwMDBweDtcclxuICAgICAgIGJhY2tncm91bmQtY29sb3I6Zm9yZXN0Z3JlZW47XHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbn0iLCJpb24tY29udGVudCAuc3ZnIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ3RoOiAxMHZoO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjAwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../covid.service */ "./src/app/covid.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let Tab1Page = class Tab1Page {
    constructor(covidService, toast) {
        this.covidService = covidService;
        this.toast = toast;
        this.info = null;
        this.covidService.getAll().subscribe((data) => {
            this.info = data;
            this.createBarChart();
            console.log(this.info);
        }, (error) => {
            this.presentMyToast();
        });
    }
    presentMyToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const toasts = yield this.toast.create({
                message: 'Veuillez verifier votre connection',
                duration: 10000,
            });
            toasts.present();
        });
    }
    createBarChart() {
        this.bars = new chart_js__WEBPACK_IMPORTED_MODULE_3__["Chart"](this.mychart.nativeElement, {
            type: 'pie',
            data: {
                labels: ['cas', 'mort', 'guerrison'],
                datasets: [{
                        label: 'world',
                        data: [this.info.cases, this.info.deaths, this.info.recovered],
                        backgroundColor: ['dodgerblue', 'red', 'forestgreen'],
                        borderColor: ['rgba(0,0,0,0.9)'],
                        borderWidth: 1
                    },
                ]
            },
            options: {
                scales: {}
            }
        });
    }
};
Tab1Page.ctorParameters = () => [
    { type: _covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mychart', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], Tab1Page.prototype, "mychart", void 0);
Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab1/tab1.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])
], Tab1Page);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map