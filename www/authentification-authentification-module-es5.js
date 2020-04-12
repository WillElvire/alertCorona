(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentification-authentification-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAuthentificationAuthentificationPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n<ion-content>\n\n    \n\n\n     <form [formGroup]=\"myform\" style=\"margin-top: 40%\">\n       \n\n            <ion-card>\n                   <input type=\"email\" placeholder=\"votre email\" required formControlName=\"email\">\n             </ion-card>\n          <br>\n\n          <ion-card>\n                <input type=\"password\" placeholder=\"votre mot de passe\" required formControlName=\"password\">\n          </ion-card>\n         <br>\n        <ion-button size=\"large\" expand=\"full\" fill=\"solid\" color=\"success\" shape=\"round\" (click)=\"onSubmit()\" [disabled]=\"!myform.valid\"> Se connecter</ion-button>\n\n         <br>\n\n        <ion-button size=\"large\" expand=\"full\" fill=\"solid\" shape=\"round\" color=\"danger\" routerLink=\"/inscription\">Creez un compte </ion-button>\n\n\n     </form>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/authentification/authentification-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/authentification/authentification-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: AuthentificationPageRoutingModule */

  /***/
  function srcAppAuthentificationAuthentificationRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationPageRoutingModule", function () {
      return AuthentificationPageRoutingModule;
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


    var _authentification_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./authentification.page */
    "./src/app/authentification/authentification.page.ts");

    const routes = [{
      path: '',
      component: _authentification_page__WEBPACK_IMPORTED_MODULE_3__["AuthentificationPage"]
    }];
    let AuthentificationPageRoutingModule = class AuthentificationPageRoutingModule {};
    AuthentificationPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AuthentificationPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/authentification/authentification.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/authentification/authentification.module.ts ***!
    \*************************************************************/

  /*! exports provided: AuthentificationPageModule */

  /***/
  function srcAppAuthentificationAuthentificationModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationPageModule", function () {
      return AuthentificationPageModule;
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


    var _authentification_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./authentification-routing.module */
    "./src/app/authentification/authentification-routing.module.ts");
    /* harmony import */


    var _authentification_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./authentification.page */
    "./src/app/authentification/authentification.page.ts");

    let AuthentificationPageModule = class AuthentificationPageModule {};
    AuthentificationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _authentification_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthentificationPageRoutingModule"]],
      declarations: [_authentification_page__WEBPACK_IMPORTED_MODULE_6__["AuthentificationPage"]]
    })], AuthentificationPageModule);
    /***/
  },

  /***/
  "./src/app/authentification/authentification.page.scss":
  /*!*************************************************************!*\
    !*** ./src/app/authentification/authentification.page.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppAuthentificationAuthentificationPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background:forestgreen;\n}\nion-content ion-card {\n  --background:white;\n}\nion-content ion-card input {\n  color: forestgreen;\n  background: white;\n  font-weight: bold;\n  border: none;\n  width: 100%;\n  height: 40px;\n  outline: none;\n  overflow: none;\n  border-bottom: 3px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9DOlxcVXNlcnNcXFBDLVdJTExZXFxpb25pY193YXlcXENPVklELTE5LWFwcC9zcmNcXGFwcFxcYXV0aGVudGlmaWNhdGlvblxcYXV0aGVudGlmaWNhdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2F1dGhlbnRpZmljYXRpb24vYXV0aGVudGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFQyx3QkFBQTtBQ0FEO0FERUU7RUFFRyxrQkFBQTtBQ0RMO0FER0s7RUFBTSxrQkFBQTtFQUFrQixpQkFBQTtFQUFpQixpQkFBQTtFQUFpQixZQUFBO0VBQVksV0FBQTtFQUFXLFlBQUE7RUFBWSxhQUFBO0VBQWEsY0FBQTtFQUFjLDhCQUFBO0FDUTdIIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGlmaWNhdGlvbi9hdXRoZW50aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG5cdFxyXG5cdC0tYmFja2dyb3VuZDpmb3Jlc3RncmVlbjtcclxuXHRcclxuICBpb24tY2FyZHtcclxuXHJcbiAgICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG5cclxuICAgICBpbnB1dHtjb2xvcjpmb3Jlc3RncmVlbjtiYWNrZ3JvdW5kOndoaXRlO2ZvbnQtd2VpZ2h0OmJvbGQ7Ym9yZGVyOm5vbmU7d2lkdGg6MTAwJTtoZWlnaHQ6NDBweDtvdXRsaW5lOm5vbmU7b3ZlcmZsb3c6bm9uZTtib3JkZXItYm90dG9tOjNweCBzb2xpZCB3aGl0ZX1cclxuICB9XHJcbiBcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOmZvcmVzdGdyZWVuO1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCBpbnB1dCB7XG4gIGNvbG9yOiBmb3Jlc3RncmVlbjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBib3JkZXI6IG5vbmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG92ZXJmbG93OiBub25lO1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/authentification/authentification.page.ts":
  /*!***********************************************************!*\
    !*** ./src/app/authentification/authentification.page.ts ***!
    \***********************************************************/

  /*! exports provided: AuthentificationPage */

  /***/
  function srcAppAuthentificationAuthentificationPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthentificationPage", function () {
      return AuthentificationPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _service_authentification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/authentification.service */
    "./src/app/service/authentification.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    let AuthentificationPage = class AuthentificationPage {
      constructor(builder, auth, toast) {
        this.builder = builder;
        this.auth = auth;
        this.toast = toast;
      }

      ngOnInit() {
        this.myform = this.builder.group({
          email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      onSubmit() {
        this.verifyMydata(this.myform.get("email").value, this.myform.get("password").value);
      }

      verifyMydata(email, password) {
        return new Promise((resolve, reject) => {
          this.auth.ConnecteUser(email, password).then(user => {
            resolve(user);
          }, error => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toast.create({
              message: error,
              duration: 5000,
              color: 'danger'
            }).then(value => {
              value.present();
            }, error => {
              console.log(error);
            });
          }));
        });
      }

    };

    AuthentificationPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _service_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }];

    AuthentificationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-authentification',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./authentification.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/authentification/authentification.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./authentification.page.scss */
      "./src/app/authentification/authentification.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]])], AuthentificationPage);
    /***/
  }
}]);
//# sourceMappingURL=authentification-authentification-module-es5.js.map