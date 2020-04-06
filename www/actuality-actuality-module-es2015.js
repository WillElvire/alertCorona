(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["actuality-actuality-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/actuality/actuality.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/actuality/actuality.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>actuality</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n     <ion-card>\n        <img src=\"./madison.jpg\" />\n        <ion-card-header>\n          <ion-card-subtitle>Destination</ion-card-subtitle>\n          <ion-card-title>Madison, WI</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/actuality/actuality-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/actuality/actuality-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: ActualityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualityPageRoutingModule", function() { return ActualityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _actuality_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actuality.page */ "./src/app/actuality/actuality.page.ts");




const routes = [
    {
        path: '',
        component: _actuality_page__WEBPACK_IMPORTED_MODULE_3__["ActualityPage"]
    }
];
let ActualityPageRoutingModule = class ActualityPageRoutingModule {
};
ActualityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ActualityPageRoutingModule);



/***/ }),

/***/ "./src/app/actuality/actuality.module.ts":
/*!***********************************************!*\
  !*** ./src/app/actuality/actuality.module.ts ***!
  \***********************************************/
/*! exports provided: ActualityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualityPageModule", function() { return ActualityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _actuality_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./actuality-routing.module */ "./src/app/actuality/actuality-routing.module.ts");
/* harmony import */ var _actuality_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./actuality.page */ "./src/app/actuality/actuality.page.ts");







let ActualityPageModule = class ActualityPageModule {
};
ActualityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _actuality_routing_module__WEBPACK_IMPORTED_MODULE_5__["ActualityPageRoutingModule"]
        ],
        declarations: [_actuality_page__WEBPACK_IMPORTED_MODULE_6__["ActualityPage"]]
    })
], ActualityPageModule);



/***/ }),

/***/ "./src/app/actuality/actuality.page.scss":
/*!***********************************************!*\
  !*** ./src/app/actuality/actuality.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjdHVhbGl0eS9hY3R1YWxpdHkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/actuality/actuality.page.ts":
/*!*********************************************!*\
  !*** ./src/app/actuality/actuality.page.ts ***!
  \*********************************************/
/*! exports provided: ActualityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActualityPage", function() { return ActualityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ActualityPage = class ActualityPage {
    constructor() { }
    ngOnInit() {
    }
};
ActualityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-actuality',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./actuality.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/actuality/actuality.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./actuality.page.scss */ "./src/app/actuality/actuality.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ActualityPage);



/***/ })

}]);
//# sourceMappingURL=actuality-actuality-module-es2015.js.map