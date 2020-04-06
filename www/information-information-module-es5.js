(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["information-information-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/information/information.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/information/information.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInformationInformationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content >\n\n\n <div class=\"svg\" >\n    <br>\n    <ion-title padding color=\"light\"> Covid-19</ion-title>\n    <ion-title padding  color=\"light\"> <b>{{nom}}</b> </ion-title>\n    <br>\n    \n</div> \n\n\n \n  \n    <canvas width=\"300\" height=\"300\" #mychart>\n      \n\n\n    </canvas>\n\n\n\n\n  <div *ngIf=\"nom==undefined\">\n\n\n     <h1 style=\"margin-left: 30%;color:forestgreen\"> <b> chargement </b> </h1>\n  \n\n</div>\n\n</ion-content>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/information/information-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/information/information-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: InformationPageRoutingModule */

  /***/
  function srcAppInformationInformationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformationPageRoutingModule", function () {
      return InformationPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _information_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./information.page */
    "./src/app/information/information.page.ts");

    const routes = [{
      path: '',
      component: _information_page__WEBPACK_IMPORTED_MODULE_3__["InformationPage"]
    }];
    let InformationPageRoutingModule = class InformationPageRoutingModule {};
    InformationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InformationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/information/information.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/information/information.module.ts ***!
    \***************************************************/

  /*! exports provided: InformationPageModule */

  /***/
  function srcAppInformationInformationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformationPageModule", function () {
      return InformationPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _information_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./information-routing.module */
    "./src/app/information/information-routing.module.ts");
    /* harmony import */


    var _information_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./information.page */
    "./src/app/information/information.page.ts");

    let InformationPageModule = class InformationPageModule {};
    InformationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _information_routing_module__WEBPACK_IMPORTED_MODULE_5__["InformationPageRoutingModule"]],
      declarations: [_information_page__WEBPACK_IMPORTED_MODULE_6__["InformationPage"]]
    })], InformationPageModule);
    /***/
  },

  /***/
  "./src/app/information/information.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/information/information.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInformationInformationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .svg {\n  width: 50%;\n  heigth: 10vh;\n  border-bottom-right-radius: 2000px;\n  background-color: forestgreen;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5mb3JtYXRpb24vQzpcXFVzZXJzXFxQQy1XSUxMWVxcaW9uaWNfd2F5XFxDT1ZJRC0xOS1hcHAvc3JjXFxhcHBcXGluZm9ybWF0aW9uXFxpbmZvcm1hdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2luZm9ybWF0aW9uL2luZm9ybWF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSztFQUVFLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQ0ZQIiwiZmlsZSI6InNyYy9hcHAvaW5mb3JtYXRpb24vaW5mb3JtYXRpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XHJcbiAgICBcclxuICAgICAuc3Zne1xyXG5cclxuICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgIGhlaWd0aDoxMHZoO1xyXG4gICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MjAwMHB4O1xyXG4gICAgICAgYmFja2dyb3VuZC1jb2xvcjpmb3Jlc3RncmVlbjtcclxuXHJcblxyXG5cclxuICAgICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgLnN2ZyB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWd0aDogMTB2aDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwMDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZm9yZXN0Z3JlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/information/information.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/information/information.page.ts ***!
    \*************************************************/

  /*! exports provided: InformationPage */

  /***/
  function srcAppInformationInformationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InformationPage", function () {
      return InformationPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _covid_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../covid.service */
    "./src/app/covid.service.ts");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let InformationPage = class InformationPage {
      constructor(route, service, toast) {
        this.route = route;
        this.service = service;
        this.toast = toast;
        this.country = this.route.snapshot.paramMap.get('pays');
        this.presentMyToast();
        this.service.getCountryData(this.country).subscribe(data => {
          this.detail = data;
          this.nom = this.detail[0].Country;

          if (this.nom == undefined) {
            this.presentMyToast();
          }

          this.createBarChart();
        }, error => {
          this.presentMyToast();
        });
      }

      ngOnInit() {}

      createBarChart() {
        if (this.nom != undefined) {
          this.graph = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](this.mychart.nativeElement, {
            type: 'bar',
            data: {
              labels: ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'],
              datasets: [{
                label: 'Viewers in millions',
                data: [2.5, 3.8, 5, 6.9, 6.9, 7.5, 10, 17],
                backgroundColor: 'rgb(38, 194, 129)',
                borderColor: 'rgb(38, 194, 129)',
                borderWidth: 1
              }]
            },
            options: {
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }
          });
        }
      }

      presentMyToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toasts = yield this.toast.create({
            message: 'Erreur lors du chargement des données',
            duration: 10000
          });
          toasts.present();
        });
      }

    };

    InformationPage.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mychart', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], InformationPage.prototype, "mychart", void 0);
    InformationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-information',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./information.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/information/information.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./information.page.scss */
      "./src/app/information/information.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _covid_service__WEBPACK_IMPORTED_MODULE_3__["CovidService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]])], InformationPage);
    /***/
  }
}]);
//# sourceMappingURL=information-information-module-es5.js.map