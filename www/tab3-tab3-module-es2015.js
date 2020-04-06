(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n\r\n       \r\n\r\n   \r\n   <div class=\"content\">\r\n     \r\n      <div class=\"svg\">\r\n        <br>\r\n        <ion-title padding color=\"light\"> Anti</ion-title>\r\n        <ion-title padding  color=\"light\"> <b>Covid-19</b> </ion-title>\r\n        <br>\r\n       \r\n           <ion-buttons slot=\"end\">\r\n           <ion-menu-button color=\"light\"></ion-menu-button>\r\n           </ion-buttons>\r\n   \r\n \r\n     </div>\r\n \r\n    \r\n\r\n      <ion-card class=\"description\" >\r\n        \r\n\r\n      \r\n           \r\n\r\n              \r\n                 \r\n                     \r\n\r\n                     <ion-grid>\r\n                       \r\n                       <ion-row>\r\n                            <ion-col size=\"10\">\r\n\r\n                                <h5 style=\"margin-left: 2%\"> <b> Symptomes </b> </h5>\r\n                              \r\n                            </ion-col>\r\n\r\n                            <ion-col size=\"2\">\r\n\r\n                                 <ion-icon name=\"pulse\" size=\"large\" color=\"success\"></ion-icon>\r\n                              \r\n                            </ion-col>\r\n\r\n                      </ion-row>\r\n\r\n                     </ion-grid>\r\n\r\n\r\n              \r\n\r\n            \r\n      </ion-card>\r\n\r\n\r\n\r\n      <ion-card class=\"description\" [routerLink]=\"['/mesure']\">\r\n        \r\n\r\n      \r\n           \r\n\r\n              \r\n                 \r\n                     \r\n\r\n                     <ion-grid>\r\n                       \r\n                       <ion-row>\r\n                            <ion-col size=\"10\">\r\n\r\n                                <h5 style=\"margin-left: 2%\"> <b> Mesures de  Prévention </b> </h5>\r\n                              \r\n                            </ion-col>\r\n\r\n                            <ion-col size=\"2\">\r\n\r\n                                 <ion-icon name=\"help-circle\" size=\"large\" color=\"success\"></ion-icon>\r\n                              \r\n                            </ion-col>\r\n\r\n                      </ion-row>\r\n\r\n                     </ion-grid>\r\n\r\n\r\n              \r\n\r\n            \r\n      </ion-card>\r\n\r\n\r\n       <ion-card class=\"description\" [routerLink]=\"['/tabs/actuality']\">\r\n        \r\n\r\n      \r\n           \r\n\r\n              \r\n                 \r\n                     \r\n\r\n                     <ion-grid>\r\n                       \r\n                       <ion-row>\r\n                            <ion-col size=\"10\">\r\n\r\n                                <h5 style=\"margin-left: 2%\"> <b> Actualités </b> </h5>\r\n                              \r\n                            </ion-col>\r\n\r\n                            <ion-col size=\"2\">\r\n\r\n                                 <ion-icon name=\"globe\" size=\"large\" color=\"success\"></ion-icon>\r\n                              \r\n                            </ion-col>\r\n\r\n                      </ion-row>\r\n\r\n                     </ion-grid>\r\n\r\n\r\n              \r\n\r\n            \r\n      </ion-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      \r\n\r\n     \r\n     \r\n  </div>\r\n\r\n</ion-content>");

/***/ }),

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .content {\n  background: white;\n  width: 100%;\n  height: 100vh;\n}\nion-content .content .svg {\n  width: 50%;\n  heigth: 10vh;\n  border-bottom-right-radius: 2000px;\n  background-color: forestgreen;\n}\nion-content .content ion-title {\n  font-size: 20px;\n}\nion-content .content .description {\n  border-radius: 10px;\n  width: 95%;\n}\nion-content .content .description h5 {\n  color: black;\n}\nion-content .content .description ion-icon {\n  color: forestgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMy9DOlxcVXNlcnNcXFBDLVdJTExZXFxpb25pY193YXlcXENPVklELTE5LWFwcC9zcmNcXGFwcFxcdGFiM1xcdGFiMy5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0k7RUFjSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDakJSO0FESVE7RUFFSyxVQUFBO0VBQ0EsWUFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUNIYjtBRFlRO0VBRUksZUFBQTtBQ1haO0FEY1E7RUFHSSxtQkFBQTtFQUNBLFVBQUE7QUNkWjtBRGdCWTtFQUVJLFlBQUE7QUNmaEI7QURtQlk7RUFHRyxrQkFBQTtBQ25CZiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCAge1xyXG5cclxuXHJcblxyXG4gIFxyXG4gICAgLmNvbnRlbnR7XHJcblxyXG5cclxuICAgICAgICAuc3Zne1xyXG5cclxuICAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgIGhlaWd0aDoxMHZoO1xyXG4gICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MjAwMHB4O1xyXG4gICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjpmb3Jlc3RncmVlbjtcclxuXHJcblxyXG5cclxuICAgICAgfVxyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgIGlvbi10aXRsZXtcclxuXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2NyaXB0aW9ue1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTBweDtcclxuICAgICAgICAgICAgd2lkdGg6OTUlO1xyXG5cclxuICAgICAgICAgICAgaDV7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6YmxhY2s7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuIFxyXG5cclxuICAgICAgICAgICAgICAgY29sb3I6Zm9yZXN0Z3JlZW47XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgLmNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG59XG5pb24tY29udGVudCAuY29udGVudCAuc3ZnIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ3RoOiAxMHZoO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjAwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IGlvbi10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50IC5kZXNjcmlwdGlvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiA5NSU7XG59XG5pb24tY29udGVudCAuY29udGVudCAuZGVzY3JpcHRpb24gaDUge1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCAuY29udGVudCAuZGVzY3JpcHRpb24gaW9uLWljb24ge1xuICBjb2xvcjogZm9yZXN0Z3JlZW47XG59Il19 */");

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Tab3Page = class Tab3Page {
    constructor() { }
};
Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab3',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tab3.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], Tab3Page);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map