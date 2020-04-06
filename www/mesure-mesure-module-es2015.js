(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mesure-mesure-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/mesure/mesure.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/mesure/mesure.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-content>\n\n\n  <div class=\"svg\">\n        <br>\n        <ion-title padding color=\"light\" style=\"margin-left: 2%\"> Les </ion-title>\n        <ion-title padding  color=\"light\" style=\"margin-left: 2%\"> <b>Mesures</b> </ion-title>\n       \n       \n           <ion-buttons slot=\"end\">\n           <ion-menu-button color=\"light\"></ion-menu-button>\n           </ion-buttons>\n   \n \n     </div>\n\n\n  <ion-grid>\n    \n     <ion-row>\n       \n           <ion-col size=\"4\">\n             \n\n               <img src=\"https://www.cdc.gov/coronavirus/2019-ncov/images/protect-wash-hands.png\"> \n\n\n           </ion-col>\n\n           <ion-col size=\"8\">\n             \n \n               <h2>Clean your hands often</h2>\n               <p>\n\n                   Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.\n                    If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.\n                    Avoid touching your eyes, nose, and mouth with unwashed hands.\n                 \n\n               </p>\n\n           </ion-col>\n\n     </ion-row>\n\n\n      <ion-row>\n       \n           <ion-col size=\"4\">\n             \n\n               <img src=\"https://www.cdc.gov/coronavirus/2019-ncov/images/protect-quarantine.png\"> \n\n\n           </ion-col>\n\n           <ion-col size=\"8\">\n             \n \n               <h2>Avoid close contact</h2>\n               <p>\n                  Avoid close contact with people who are sick\n                  Stay home as much as possible.pdf iconexternal icon\n                  Put distance between yourself and other people.\n                  Remember that some people without symptoms may be able to spread virus.\n                  Keeping distance from others is especially important for people who are at higher risk of getting very sick.\n               </p>\n\n           </ion-col>\n\n     </ion-row>\n\n\n\n      <ion-row>\n       \n           <ion-col size=\"4\">\n             \n\n               <img src=\"https://www.cdc.gov/coronavirus/2019-ncov/images/prevent-getting-sick/cloth-face-cover.png\"> \n\n\n           </ion-col>\n\n           <ion-col size=\"8\">\n             \n \n               <h2>\n                 Cover your mouth and nose with a cloth face cover when around others\n               </h2>\n\n               <p>\n\n\n                 You could spread COVID-19 to others even if you do not feel sick.\n                Everyone should wear a cloth face cover when they have to go out in public, for example to the grocery store or to pick up other necessities.\n                Cloth face coverings should not be placed on young children under age 2, anyone who has trouble breathing, or is unconscious, incapacitated or otherwise unable to remove the mask without assistance.\n                The cloth face cover is meant to protect other people in case you are infected.\n                Do NOT use a facemask meant for a healthcare worker.\n                Continue to keep about 6 feet between yourself and others. The cloth face cover is not a substitute for social distancing.\n                                 \n\n               </p>\n\n           </ion-col>\n\n\n     </ion-row>\n\n\n\n\n      <ion-row>\n       \n           <ion-col size=\"4\">\n             \n\n               <img src=\"https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_06_coverCough.png\"> \n\n\n           </ion-col>\n\n           <ion-col size=\"8\">\n             \n \n               <h2>Cover coughs and sneezes</h2>\n               <p>\n                              If you are in a private setting and do not have on your cloth face covering, remember to always cover your mouth and nose with a tissue when you cough or sneeze or use the inside of your elbow.\n                              Throw used tissues in the trash.\n                              Immediately wash your hands with soap and water for at least 20 seconds. If soap and water are not readily available, clean your hands with a hand sanitizer that contains at least 60% alcohol.\n               </p>\n\n           </ion-col>\n\n     </ion-row>\n\n\n\n     <ion-row>\n       \n           <ion-col size=\"4\">\n             \n\n               <img src=\"https://www.cdc.gov/coronavirus/2019-ncov/images/COVIDweb_09_clean.png\"> \n\n\n           </ion-col>\n\n           <ion-col size=\"8\">\n             \n \n               <h2>Clean and disinfect</h2>\n               <p>\n                              Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.\n                              If surfaces are dirty, clean them: Use detergent or soap and water prior to disinfection.\n               </p>\n\n           </ion-col>\n\n     </ion-row>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  </ion-grid>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/mesure/mesure-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mesure/mesure-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MesurePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesurePageRoutingModule", function() { return MesurePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _mesure_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mesure.page */ "./src/app/mesure/mesure.page.ts");




const routes = [
    {
        path: '',
        component: _mesure_page__WEBPACK_IMPORTED_MODULE_3__["MesurePage"]
    }
];
let MesurePageRoutingModule = class MesurePageRoutingModule {
};
MesurePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MesurePageRoutingModule);



/***/ }),

/***/ "./src/app/mesure/mesure.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mesure/mesure.module.ts ***!
  \*****************************************/
/*! exports provided: MesurePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesurePageModule", function() { return MesurePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _mesure_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mesure-routing.module */ "./src/app/mesure/mesure-routing.module.ts");
/* harmony import */ var _mesure_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mesure.page */ "./src/app/mesure/mesure.page.ts");







let MesurePageModule = class MesurePageModule {
};
MesurePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _mesure_routing_module__WEBPACK_IMPORTED_MODULE_5__["MesurePageRoutingModule"]
        ],
        declarations: [_mesure_page__WEBPACK_IMPORTED_MODULE_6__["MesurePage"]]
    })
], MesurePageModule);



/***/ }),

/***/ "./src/app/mesure/mesure.page.scss":
/*!*****************************************!*\
  !*** ./src/app/mesure/mesure.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .svg {\n  width: 50%;\n  heigth: 10vh;\n  border-bottom-right-radius: 2000px;\n  background-color: forestgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzdXJlL0M6XFxVc2Vyc1xcUEMtV0lMTFlcXGlvbmljX3dheVxcQ09WSUQtMTktYXBwL3NyY1xcYXBwXFxtZXN1cmVcXG1lc3VyZS5wYWdlLnNjc3MiLCJzcmMvYXBwL21lc3VyZS9tZXN1cmUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBRVMsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FDSGIiLCJmaWxlIjoic3JjL2FwcC9tZXN1cmUvbWVzdXJlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgXHJcblxyXG4gICAgLnN2Z3tcclxuXHJcbiAgICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgICBoZWlndGg6MTB2aDtcclxuICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjIwMDBweDtcclxuICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6Zm9yZXN0Z3JlZW47XHJcblxyXG4gICAgICAgICAgICAgXHJcblxyXG5cclxuXHJcbiAgICAgIH1cclxuXHJcbn0iLCJpb24tY29udGVudCAuc3ZnIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ3RoOiAxMHZoO1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjAwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBmb3Jlc3RncmVlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/mesure/mesure.page.ts":
/*!***************************************!*\
  !*** ./src/app/mesure/mesure.page.ts ***!
  \***************************************/
/*! exports provided: MesurePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MesurePage", function() { return MesurePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MesurePage = class MesurePage {
    constructor() { }
    ngOnInit() {
    }
};
MesurePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-mesure',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mesure.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/mesure/mesure.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mesure.page.scss */ "./src/app/mesure/mesure.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], MesurePage);



/***/ })

}]);
//# sourceMappingURL=mesure-mesure-module-es2015.js.map