(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"], {
  /***/
  "./node_modules/ng2-search-filter/ng2-search-filter.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-search-filter/ng2-search-filter.js ***!
    \*************************************************************/

  /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

  /***/
  function node_modulesNg2SearchFilterNg2SearchFilterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
      return Ng2SearchPipeModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
      return Ng2SearchPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    class Ng2SearchPipe {
      /**
       * @param {?} items object from array
       * @param {?} term term's search
       * @return {?}
       */
      transform(items, term) {
        if (!term || !items) return items;
        return Ng2SearchPipe.filter(items, term);
      }
      /**
       *
       * @param {?} items List of items to filter
       * @param {?} term  a string term to compare with every property of the list
       *
       * @return {?}
       */


      static filter(items, term) {
        const
        /** @type {?} */
        toCompare = term.toLowerCase();
        /**
         * @param {?} item
         * @param {?} term
         * @return {?}
         */

        function checkInside(item, term) {
          for (let
          /** @type {?} */
          property in item) {
            if (item[property] === null || item[property] == undefined) {
              continue;
            }

            if (typeof item[property] === 'object') {
              if (checkInside(item[property], term)) {
                return true;
              }
            }

            if (item[property].toString().toLowerCase().includes(toCompare)) {
              return true;
            }
          }

          return false;
        }

        return items.filter(function (item) {
          return checkInside(item, term);
        });
      }

    }

    Ng2SearchPipe.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
      args: [{
        name: 'filter',
        pure: false
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @nocollapse
     */

    Ng2SearchPipe.ctorParameters = () => [];

    class Ng2SearchPipeModule {}

    Ng2SearchPipeModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [Ng2SearchPipe],
        exports: [Ng2SearchPipe]
      }]
    }];
    /**
     * @nocollapse
     */

    Ng2SearchPipeModule.ctorParameters = () => [];
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-search-filter.js.map

    /***/

  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTab2Tab2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n<ion-content [fullscreen]=\"true\">\r\n\r\n   <ion-refresher slot=\"fixed\" disabled=\"false\" (ionRefresh)=\"doRefresh($event)\">  \r\n            <ion-refresher-content  \r\n            pullingIcon=\"arrow-dropdown\"  \r\n            pullingText=\"Pull to refresh\"  \r\n            refreshingSpinner=\"dots\"  \r\n           ></ion-refresher-content> \r\n\r\n  </ion-refresher> \r\n\r\n  \r\n  <div class=\"search\">\r\n    \r\n       <ion-searchbar [(ngModel)]=\"searchCountry\" autocomplete=\"off\"></ion-searchbar>\r\n  </div>\r\n<div *ngIf=\"countries\">\r\n      <ion-list *ngFor=\"let country of countries | filter:searchCountry\">\r\n        <ion-item>\r\n          <ion-label>\r\n            <h1>{{country.country}}</h1>\r\n            <h4>\r\n              Cases: {{country.cases | number}} | Today: {{country.todayCases | number}} \r\n            </h4>\r\n            <ion-button  padding (click)=\"goToCountry(country.country)\" shape=\"round\" color=\"success\" fill=\"outline\">Voir plus </ion-button>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n</div>\r\n\r\n<div *ngIf=\"!countries\">\r\n<ion-list >\r\n        <ion-list-header>\r\n          <ion-skeleton-text animated style=\"width: 80px\"></ion-skeleton-text>\r\n        </ion-list-header>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n        <ion-item>\r\n          <ion-thumbnail slot=\"start\">\r\n            <ion-skeleton-text></ion-skeleton-text>\r\n          </ion-thumbnail>\r\n          <ion-label>\r\n            <h3>\r\n              <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\r\n            </h3>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\r\n            </p>\r\n            <p>\r\n              <ion-skeleton-text animated style=\"width: 30%\"></ion-skeleton-text>\r\n            </p>\r\n          </ion-label>\r\n        </ion-item>\r\n\r\n      </ion-list>\r\n    </div>\r\n\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/covid.service.ts":
  /*!**********************************!*\
    !*** ./src/app/covid.service.ts ***!
    \**********************************/

  /*! exports provided: CovidService */

  /***/
  function srcAppCovidServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CovidService", function () {
      return CovidService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let CovidService = class CovidService {
      constructor(http) {
        this.http = http;
        this.apiUrl = 'https://coronavirus-19-api.herokuapp.com/';
        this.apiUrl2 = "";
      }

      getAll() {
        return this.http.get("".concat(this.apiUrl, "all"));
      }

      getCountries() {
        return this.http.get("".concat(this.apiUrl, "countries"));
      }

      getTheCountry(country) {
        return this.http.get("".concat(this.apiUrl, "countries/").concat(country));
      }

      getCountryData(country) {
        return this.http.get("https://api.covid19api.com/dayone/country/".concat(country, "/status/confirmed"));
      }

    };

    CovidService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    CovidService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CovidService);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.module.ts ***!
    \*************************************/

  /*! exports provided: Tab2PageModule */

  /***/
  function srcAppTab2Tab2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function () {
      return Tab2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var _tab2_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./tab2.page */
    "./src/app/tab2/tab2.page.ts");

    let Tab2PageModule = class Tab2PageModule {};
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_7__["Tab2Page"]
      }])],
      declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_7__["Tab2Page"]]
    })], Tab2PageModule);
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tab2/tab2.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTab2Tab2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .search {\n  width: 100%;\n  height: 15vh;\n  background: forestgreen;\n  border-bottom-right-radius: 50px;\n  border-bottom-left-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMi9DOlxcVXNlcnNcXFBDLVdJTExZXFxpb25pY193YXlcXENPVklELTE5LWFwcC9zcmNcXGFwcFxcdGFiMlxcdGFiMi5wYWdlLnNjc3MiLCJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0c7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtBQ0hQIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50ICB7XHJcbiAgXHJcblxyXG4gICAuc2VhcmNoe1xyXG5cclxuICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICBoZWlnaHQ6MTV2aDtcclxuICAgICAgIGJhY2tncm91bmQ6Zm9yZXN0Z3JlZW47XHJcbiAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1MHB4O1xyXG4gICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1MHB4O1xyXG5cclxuXHJcbiAgIH1cclxufSIsImlvbi1jb250ZW50IC5zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNXZoO1xuICBiYWNrZ3JvdW5kOiBmb3Jlc3RncmVlbjtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDUwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/tab2/tab2.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tab2/tab2.page.ts ***!
    \***********************************/

  /*! exports provided: Tab2Page */

  /***/
  function srcAppTab2Tab2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Tab2Page", function () {
      return Tab2Page;
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


    var _covid_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../covid.service */
    "./src/app/covid.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let Tab2Page = class Tab2Page {
      constructor(covidService, Routage, toast) {
        this.covidService = covidService;
        this.Routage = Routage;
        this.toast = toast;
        this.countries = null;
        this.covidService.getCountries().subscribe(data => {
          this.countries = data;
        }, error => {
          this.presentMyToast();
        });
      }

      goToCountry(mycountry) {
        this.Routage.navigate(['information', {
          pays: mycountry
        }]);
      }

      presentMyToast() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          const toasts = yield this.toast.create({
            message: 'Veuillez verifier votre connection',
            duration: 10000
          });
          toasts.present();
        });
      }

      doRefresh(evenement) {
        setTimeout(() => {
          evenement.target.complete();
          this.covidService.getCountries().subscribe(data => {
            this.countries = data;
          }, error => {
            this.presentMyToast();
          });
        }, 2000);
      }

    };

    Tab2Page.ctorParameters = () => [{
      type: _covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }];

    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tab2',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tab2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tab2.page.scss */
      "./src/app/tab2/tab2.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_covid_service__WEBPACK_IMPORTED_MODULE_2__["CovidService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], Tab2Page);
    /***/
  }
}]);
//# sourceMappingURL=tab2-tab2-module-es5.js.map