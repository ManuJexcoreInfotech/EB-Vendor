webpackJsonp([13],{

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountLoginModule", function() { return AccountLoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AccountLoginModule = (function () {
    function AccountLoginModule() {
    }
    AccountLoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* AccountLogin */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* AccountLogin */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* AccountLogin */]
            ]
        })
    ], AccountLoginModule);
    return AccountLoginModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountLogin; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountLogin = (function () {
    function AccountLogin(nav, service, functions, Loading, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.Loading = Loading;
        this.values = values;
        this.disableSubmit = false;
        this.loginData = [];
        this.LogIn = "LogIn";
        this.service.getNonce()
            .then(function (results) { return _this.nonce = results; });
    }
    AccountLogin.prototype.login = function (a) {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.LogIn = "Logging In";
            this.service.login(a, this.nonce.checkout_login)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    AccountLogin.prototype.validateForm = function () {
        if (this.loginData.username == undefined || this.loginData.username == "") {
            return false;
        }
        if (this.loginData.password == undefined || this.loginData.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    AccountLogin.prototype.handleResults = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.LogIn = "LogIn";
        console.log(results);
        if (!results.errors) {
            if (!this.values.isVendor) {
                this.functions.showAlert('error', 'only vendor user can allow to login here.');
                this.service.logout();
                this.loading = this.Loading.create();
                this.loading.present();
                setTimeout(function () {
                    _this.loading.dismiss();
                    _this.nav.setRoot("AccountLogin");
                }, 2000);
            }
            this.functions.showAlert('success', 'You have successfully logged in');
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
        else if (results.errors) {
            this.functions.showAlert('error', 'invalid username/password');
        }
    };
    AccountLogin.prototype.forgotten = function (loginData) {
        this.nav.push('AccountForgotten');
    };
    AccountLogin.prototype.signup = function () {
        this.nav.push('AccountRegister');
    };
    AccountLogin = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\login\login.html"*/'<ion-header no-border class="login-header">\n\n  <ion-navbar>\n\n    <button ion-button menuToggle *ngIf="values.isLoggedIn">\n\n		<ion-icon name="menu">  \n\n		</ion-icon>\n\n    </button>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content class="account-login">\n\n    <div>\n\n      <img src="assets/image/menu-logo.png">\n\n    </div>\n\n\n\n  <div class="margin">\n\n    <form #f="ngForm" class="login">\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-input required type="email" [(ngModel)]="loginData.username" name="firstname" placeholder="{{\'Username\' | translate}}">\n\n          </ion-input><ion-icon name="md-mail" item-left></ion-icon>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-input required type="password" [(ngModel)]="loginData.password" name="password" placeholder="{{\'Password\' | translate}}">\n\n          </ion-input><ion-icon name="md-key" item-left></ion-icon>\n\n        </ion-item>\n\n\n\n        <h2 tappable (click)="forgotten(loginData)">{{"Forgot Password" | translate}}?</h2>\n\n\n\n      </ion-list>\n\n\n\n      <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="login(loginData)">{{LogIn | translate}}\n\n      </button>\n\n\n\n\n\n\n\n  <ion-row style="margin-top:16px">\n\n    <!-- <ion-col>\n\n            <button ion-button block style="background-color: #3B5998; color: #fff" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="#C72D46Login()">\n\n            <ion-icon item-left style="color:#fff; padding-right: 5px;" ios="logo-#C72D46" md="logo-#C72D46"></ion-icon>\n\n             #C72D46\n\n        </button>\n\n\n\n    </ion-col>\n\n    <ion-col>\n\n            <button ion-button block style="background-color: #d34836; color: #fff" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="gmailLogin()">\n\n            <ion-icon style="color:#fff; padding-right: 5px;" ios="logo-google" md="logo-google"></ion-icon>\n\n             Google\n\n        </button>\n\n\n\n    </ion-col> -->\n\n</ion-row>\n\n\n\n      <br>\n\n      <br>\n\n      <hr>\n\n      <br>\n\n\n\n      <!-- <button ion-button block clear type="submit" class="button button-block button-default or-button" text-uppercase style="color: #999;">{{"Or" | translate}}\n\n      </button>\n\n\n\n      <h3 tappable>{{"New User" | translate}}? <span tappable style="color: red" (click)="signup()">{{"Register" | translate}}</span> {{"Here" | translate}}</h3> -->\n\n\n\n      <br>\n\n\n\n    </form>\n\n    <br>\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountLogin);
    return AccountLogin;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=13.js.map