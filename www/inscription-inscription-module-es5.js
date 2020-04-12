(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inscription-inscription-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInscriptionInscriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n\n  <div class=\"clean\">\n    \n\n\n  </div>\n\n        \n        <b class=\"ion-padding\" color=\"danger\" *ngIf=\"contact!=''\" style=\"margin-left:1%;color: red\"> {{contact}}</b>\n        <br>\n        <b class=\"ion-padding\" color=\"danger\" *ngIf=\"message!=''\" style=\"margin-left: 2%;color: red\"> {{message}}</b>\n        \n\n  <form [formGroup]=\"myform\">\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          \n          <div padding>\n            <ion-item>\n              <input  formControlName=\"name\"  type=\"text\" placeholder=\"Nom\"  >\n            </ion-item>\n            <ion-item>\n              <input  formControlName=\"prenom\" type=\"email\" placeholder=\"Prenom\"  >\n            </ion-item>\n\n             <ion-item>\n              <input  formControlName=\"email\" type=\"email\" placeholder=\"@gmail.com\"  >\n            </ion-item>\n\n\n             <ion-item>\n              <input  formControlName=\"localisation\" type=\"email\" placeholder=\"Localisation\"  >\n            </ion-item>\n\n\n             <ion-item>\n\n              <input  formControlName=\"password\" type=\"password\" placeholder=\"mot de passe\"  >\n\n            </ion-item>\n\n\n\n            <ion-grid>\n              \n\n              <ion-row>\n                \n                   <ion-col size=\"4\">\n                     \n                      <ion-item>\n                      \n                      <ion-select placeholder=\"ci\" interface=\"action-sheet\" required>\n\n                        <ion-select-option value=\"+225\">ci</ion-select-option>\n                        <ion-select-option value=\"---\">other</ion-select-option>\n                      </ion-select>\n                    </ion-item>\n\n                   </ion-col>\n                   <ion-col size=\"8\">\n\n\n                         <ion-item>\n\n                                <ion-input  type=\"text\" formControlName=\"phone\"  placeholder=\"telephone\" required></ion-input>\n                          \n                          </ion-item>\n                     \n\n                   </ion-col>\n              </ion-row>\n\n            </ion-grid>\n            \n            \n          </div>\n          <div padding>\n            <ion-button  size=\"large\" (click)=\"onSubmit()\" [disabled]=\"!myform.valid\" color=\"success\" expand=\"block\" shape=\"round\">s'inscrire</ion-button>\n          </div>\n          <br>\n          <div padding>\n            <ion-button  size=\"large\"   color=\"danger\" expand=\"block\" shape=\"round\" routerLink=\"/authentification\">se connecter</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n\n       \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/inscription/inscription-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/inscription/inscription-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: InscriptionPageRoutingModule */

  /***/
  function srcAppInscriptionInscriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPageRoutingModule", function () {
      return InscriptionPageRoutingModule;
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


    var _inscription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inscription.page */
    "./src/app/inscription/inscription.page.ts");

    const routes = [{
      path: '',
      component: _inscription_page__WEBPACK_IMPORTED_MODULE_3__["InscriptionPage"]
    }];
    let InscriptionPageRoutingModule = class InscriptionPageRoutingModule {};
    InscriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InscriptionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/inscription/inscription.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/inscription/inscription.module.ts ***!
    \***************************************************/

  /*! exports provided: InscriptionPageModule */

  /***/
  function srcAppInscriptionInscriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPageModule", function () {
      return InscriptionPageModule;
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


    var _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inscription-routing.module */
    "./src/app/inscription/inscription-routing.module.ts");
    /* harmony import */


    var _inscription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inscription.page */
    "./src/app/inscription/inscription.page.ts");

    let InscriptionPageModule = class InscriptionPageModule {};
    InscriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _inscription_routing_module__WEBPACK_IMPORTED_MODULE_5__["InscriptionPageRoutingModule"]],
      declarations: [_inscription_page__WEBPACK_IMPORTED_MODULE_6__["InscriptionPage"]]
    })], InscriptionPageModule);
    /***/
  },

  /***/
  "./src/app/inscription/inscription.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/inscription/inscription.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppInscriptionInscriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background:white;\n}\nion-content .clean {\n  background-color: white;\n  height: 2vh;\n}\nion-content ion-item {\n  border-bottom: 2px forestgreen solid;\n}\nion-content ion-item input {\n  color: forestgreen;\n  font-weight: bold;\n  border: none;\n  width: 100%;\n  height: 35px;\n  outline: none;\n  overflow: none;\n}\nion-content ion-item {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5zY3JpcHRpb24vQzpcXFVzZXJzXFxQQy1XSUxMWVxcaW9uaWNfd2F5XFxDT1ZJRC0xOS1hcHAvc3JjXFxhcHBcXGluc2NyaXB0aW9uXFxpbnNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVLLGtCQUFBO0FDQUw7QURFQTtFQUdNLHVCQUFBO0VBRUEsV0FBQTtBQ0hOO0FET0E7RUFHTSxvQ0FBQTtBQ1BOO0FETU07RUFBTSxrQkFBQTtFQUFrQixpQkFBQTtFQUFpQixZQUFBO0VBQVksV0FBQTtFQUFXLFlBQUE7RUFBWSxhQUFBO0VBQWEsY0FBQTtBQ0cvRjtBRENBO0VBRUksdUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2luc2NyaXB0aW9uL2luc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xyXG4gICAgXHJcbiAgICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG5cclxuLmNsZWFue1xyXG5cclxuXHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblxyXG4gICAgICBoZWlnaHQ6MnZoO1xyXG5cclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgICAgXHJcbiAgICAgIGlucHV0e2NvbG9yOmZvcmVzdGdyZWVuO2ZvbnQtd2VpZ2h0OmJvbGQ7Ym9yZGVyOm5vbmU7d2lkdGg6MTAwJTtoZWlnaHQ6MzVweDtvdXRsaW5lOm5vbmU7b3ZlcmZsb3c6bm9uZTt9XHJcbiAgICAgIGJvcmRlci1ib3R0b206MnB4IGZvcmVzdGdyZWVuIHNvbGlkO1xyXG59XHJcblxyXG5pb24taXRlbXtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6d2hpdGU7XG59XG5pb24tY29udGVudCAuY2xlYW4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgaGVpZ2h0OiAydmg7XG59XG5pb24tY29udGVudCBpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDJweCBmb3Jlc3RncmVlbiBzb2xpZDtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGlucHV0IHtcbiAgY29sb3I6IGZvcmVzdGdyZWVuO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBvdmVyZmxvdzogbm9uZTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/inscription/inscription.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/inscription/inscription.page.ts ***!
    \*************************************************/

  /*! exports provided: InscriptionPage */

  /***/
  function srcAppInscriptionInscriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InscriptionPage", function () {
      return InscriptionPage;
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
    /* harmony import */


    var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/geolocation/ngx */
    "./node_modules/@ionic-native/geolocation/ngx/index.js");
    /* harmony import */


    var _service_datafinder_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../service/datafinder.service */
    "./src/app/service/datafinder.service.ts");

    let InscriptionPage = class InscriptionPage {
      constructor(builder, datasaver, auth, toast, geolocation) {
        this.builder = builder;
        this.datasaver = datasaver;
        this.auth = auth;
        this.toast = toast;
        this.geolocation = geolocation; //on recupere la localisation de l'utilisateur

        this.geolocation.getCurrentPosition().then(resp => {
          this.longitude = resp.coords.longitude;
          this.latitude = resp.coords.latitude;
        }).catch(error => {
          this.toastShower(error, 5000);
        });
      }

      ngOnInit() {
        //le data de l'utilisateur
        this.myform = this.builder.group({
          name: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          prenom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          phone: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          email: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          password: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          localisation: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      onSubmit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.data = {
            nom: this.myform.get("name").value,
            prenom: this.myform.get("prenom").value,
            email: this.myform.get("email").value,
            location: this.myform.get("localisation").value,
            phone: this.myform.get("phone").value,
            longitude: this.longitude,
            latitude: this.latitude,
            password: this.myform.get("password").value
          };

          if (this.myform.get("phone").value.length != 8) {
            this.contact = "numero de téléphone invalide ";
          } else {
            this.createUser(this.myform.get("email").value, this.myform.get("password").value);
          }
        });
      }

      createUser(email, password) {
        return new Promise((resolve, reject) => {
          this.auth.CreateUser(email, password).then(user => {
            resolve(user);
            this.SaveDataOnDatabase(this.data);
            this.datasaver.putData(this.data).then(value => {}, error => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
              this.toastShower("probleme de stockage", 5000).then(v => v.present());
            }));
          }, error => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.toastShower(error, 5000).then(v => v.present());
            console.log("error \t" + this.message);
          }));
        });
      }

      SaveDataOnDatabase(data) {
        return new Promise((resolve, reject) => {
          this.auth.SaveData(data).then(data => {
            resolve(data);
          }, error => {
            reject(error);
          });
        });
      }

      toastShower(message, duration) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          return this.toast.create({
            message: message,
            duration: duration,
            color: 'danger'
          });
        });
      }

    };

    InscriptionPage.ctorParameters = () => [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _service_datafinder_service__WEBPACK_IMPORTED_MODULE_6__["DatafinderService"]
    }, {
      type: _service_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"]
    }, {
      type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
    }, {
      type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]
    }];

    InscriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inscription',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inscription.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inscription/inscription.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inscription.page.scss */
      "./src/app/inscription/inscription.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _service_datafinder_service__WEBPACK_IMPORTED_MODULE_6__["DatafinderService"], _service_authentification_service__WEBPACK_IMPORTED_MODULE_3__["AuthentificationService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"], _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__["Geolocation"]])], InscriptionPage);
    /***/
  },

  /***/
  "./src/app/service/datafinder.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/service/datafinder.service.ts ***!
    \***********************************************/

  /*! exports provided: DatafinderService */

  /***/
  function srcAppServiceDatafinderServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DatafinderService", function () {
      return DatafinderService;
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


    var _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic-native/native-storage/ngx */
    "./node_modules/@ionic-native/native-storage/ngx/index.js");

    let DatafinderService = class DatafinderService {
      constructor(sotrage) {
        this.sotrage = sotrage;
      } //putData on native storage


      putData(value) {
        return this.sotrage.setItem("data", value);
      } //getNative sotrage data


      getData() {
        return this.sotrage.getItem("data");
      }

    };

    DatafinderService.ctorParameters = () => [{
      type: _ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]
    }];

    DatafinderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_native_storage_ngx__WEBPACK_IMPORTED_MODULE_2__["NativeStorage"]])], DatafinderService);
    /***/
  }
}]);
//# sourceMappingURL=inscription-inscription-module-es5.js.map