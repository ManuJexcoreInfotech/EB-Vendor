webpackJsonp([5],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRegisterModule", function() { return AccountRegisterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(716);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipe_module__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AccountRegisterModule = (function () {
    function AccountRegisterModule() {
    }
    AccountRegisterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* AccountRegister */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipe_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* AccountRegister */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* AccountRegister */]
            ]
        })
    ], AccountRegisterModule);
    return AccountRegisterModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 708:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe__ = __webpack_require__(709);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var KeysPipeModule = (function () {
    function KeysPipeModule() {
    }
    KeysPipeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]]
        })
    ], KeysPipeModule);
    return KeysPipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push({ key: key, value: value[key] });
        }
        return keys;
    };
    KeysPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 716:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountRegister; });
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






var AccountRegister = (function () {
    function AccountRegister(nav, service, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.disableSubmit = false;
        this.Register = "Register Account";
        this.registerData = {};
        this.countries = {};
        this.registerData.billing = {};
        this.registerData.shipping = {};
        this.service.getNonce()
            .then(function (results) { return _this.handleResults(results); });
    }
    AccountRegister.prototype.handleResults = function (results) {
        this.countries = results;
    };
    AccountRegister.prototype.getBillingRegion = function (countryId) {
        this.registerData.billing_state = "";
        this.billing_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.getShippingRegion = function (countryId) {
        this.shipping_states = this.countries.state[countryId];
    };
    AccountRegister.prototype.validateForm = function () {
        if (this.registerData.first_name == undefined || this.registerData.firstname == "") {
            this.functions.showAlert("ERROR", "Please Enter First Name");
            return false;
        }
        if (this.registerData.last_name == undefined || this.registerData.lastname == "") {
            this.functions.showAlert("ERROR", "Please Enter Last Name ");
            return false;
        }
        if (this.registerData.email == undefined || this.registerData.email == "") {
            this.functions.showAlert("ERROR", "Please Enter Email ID");
            return false;
        }
        if (this.registerData.password == undefined || this.registerData.password == "") {
            this.functions.showAlert("ERROR", "Please Enter Password");
            return false;
        }
        this.registerData.username = this.registerData.email;
        this.registerData.billing.email = this.registerData.email;
        this.registerData.billing.first_name = this.registerData.first_name;
        this.registerData.billing.last_name = this.registerData.last_name;
        this.registerData.shipping.first_name = this.registerData.first_name;
        this.registerData.shipping.last_name = this.registerData.last_name;
        this.registerData.shipping.company = this.registerData.billing.company;
        this.registerData.shipping.address_1 = this.registerData.billing.address_1;
        this.registerData.shipping.address_2 = this.registerData.billing.address_2;
        this.registerData.shipping.city = this.registerData.billing.city;
        this.registerData.shipping.state = this.registerData.billing.state;
        this.registerData.shipping.postcode = this.registerData.billing.postcode;
        this.registerData.shipping.country = this.registerData.billing.country;
        return true;
    };
    AccountRegister.prototype.registerCustomer = function () {
        var _this = this;
        if (this.validateForm()) {
            this.disableSubmit = true;
            this.Register = "Registering";
            this.service.registerCustomer(this.registerData)
                .then(function (results) { return _this.handleRegister(results); });
        }
    };
    AccountRegister.prototype.handleRegister = function (results) {
        var _this = this;
        this.disableSubmit = false;
        this.Register = "Register Account";
        if (results.code) {
            this.errors = results;
        }
        else if (!results.code) {
            this.countries.checkout_login;
            this.service.login(this.registerData, this.countries.checkout_login)
                .then(function (results) { return _this.loginStatus = results; });
            this.registerData.device_id = this.values.deviceId;
            this.registerData.platform = this.values.platform;
            this.registerData.email = this.registerData.email;
            this.registerData.city = this.registerData.billing.city;
            this.registerData.state = this.registerData.billing.state;
            this.registerData.country = this.registerData.billing.country;
            this.registerData.pincode = this.registerData.billing.postcode;
            this.service.pushNotification(this.registerData)
                .then(function (results) { return _this.status = results; });
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
        }
    };
    AccountRegister = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\register\register.html"*/'<ion-header class="register-header" no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Register Account" | translate}}\n    </ion-title> \n  </ion-navbar>\n</ion-header>\n<ion-content class="account-register">\n  <div>\n    <form #f="ngForm">\n      <ion-list>\n        <ion-item>\n          <ion-label floating>{{"First Name" | translate}}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="registerData.first_name" name="firstname">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Last Name" | translate}}\n          </ion-label>\n          <ion-input type="text" [(ngModel)]="registerData.last_name" name="lastname">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Email" | translate}}\n          </ion-label>\n          <ion-input type="email" [(ngModel)]="registerData.email" name="Email">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Password" | translate}}\n          </ion-label>\n          <ion-input type="password" [(ngModel)]="registerData.password" name="password">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Phone" | translate}}\n          </ion-label>\n          <ion-input required type="number" [(ngModel)]="registerData.billing.phone" name="billing_phone">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Street Address" | translate}} 1\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.address_1" name="billing_1">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Street Address" | translate}} 2\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.address_2" name="billing_2">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"City" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.city" name="billing_city">\n          </ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label floating>{{"Postcode" | translate}}\n          </ion-label>\n          <ion-input required type="number" [(ngModel)]="registerData.billing.postcode" name="postcode">\n          </ion-input>\n        </ion-item>\n        <ion-item *ngIf="countries.country">     \n          <ion-label>  \n            {{"Country" | translate}}\n          </ion-label>   \n          <ion-select [(ngModel)]="registerData.billing.country" (ngModelChange)="getBillingRegion(registerData.billing.country)" name="country">\n            <div *ngFor="let field of countries.country.countries | keys">\n              <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n              </ion-option>\n            </div>\n          </ion-select>      \n        </ion-item>\n        <ion-item *ngIf="billing_states">  \n          <ion-label>  \n            {{"State" | translate}}\n          </ion-label>   \n          <ion-select [(ngModel)]="registerData.billing.state" name="state">\n            <div *ngFor="let field of billing_states | keys">\n              <ion-option value="{{field.key}}">{{field.value}}\n              </ion-option>\n            </div>\n          </ion-select>\n        </ion-item>\n        <ion-item *ngIf="!billing_states">\n          <ion-label floating>{{"State" | translate}}\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="registerData.billing.state" name="state">\n          </ion-input>\n        </ion-item>\n      </ion-list>\n\n        <div *ngIf="errors" class="margin">\n            <h2 style="text-align: center;">{{errors.message}}\n            </h2>\n        </div>\n\n      <div class="margin"> \n        <button ion-button block color="button-color" type="submit" class="button button-block button-default" text-uppercase [disabled]="disableSubmit" (click)="registerCustomer()">{{Register | translate}}\n        </button>\n      </div>\n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\register\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], AccountRegister);
    return AccountRegister;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=5.js.map