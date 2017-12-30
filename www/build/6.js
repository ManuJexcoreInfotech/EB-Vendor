webpackJsonp([6],{

/***/ 692:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressFormsModule", function() { return EditAddressFormsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_address_form__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipe_module__ = __webpack_require__(708);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditAddressFormsModule = (function () {
    function EditAddressFormsModule() {
    }
    EditAddressFormsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_address_form__["a" /* EditAddressForm */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_address_form__["a" /* EditAddressForm */]),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipe_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_address_form__["a" /* EditAddressForm */]
            ]
        })
    ], EditAddressFormsModule);
    return EditAddressFormsModule;
}());

//# sourceMappingURL=edit-address-form.module.js.map

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

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditAddressForm = (function () {
    function EditAddressForm(nav, service, params, values, formBuilder) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.formBuilder = formBuilder;
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        this.editAddress.shipping_true = true;
        this.service.getUserProfile()
            .then(function (results) { return _this.handleProfile(results); });
        this.myForm = formBuilder.group({
            firstName: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastName: [null, __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            email: [null, [__WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]]
        });
        setTimeout(function () {
            _this.editAddress.first_name = _this.values.customerFName;
            _this.editAddress.last_name = _this.values.customerLName;
            _this.editAddress.email = _this.values.customerEmail;
        }, 2000);
    }
    EditAddressForm.prototype.updateProfile = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        if (this.editAddress) {
            this.editAddress.first_name = this.editAddress.first_name;
            this.editAddress.last_name = this.editAddress.last_name;
            this.editAddress.email = this.editAddress.email;
        }
        this.service.updateProfile(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditAddressForm.prototype.handleProfile = function (results) {
        console.log(results);
    };
    EditAddressForm.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot('Address');
    };
    EditAddressForm.prototype.onSubmit = function () {
        console.log('submitting form');
    };
    EditAddressForm.prototype.isValid = function (field) {
        var formField = this.myForm.find(field);
        return formField.valid || formField.pristine;
    };
    EditAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\edit-address-form\edit-address-form.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Edit Profile" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="edit-address-form"> \n	<form [formGroup]="myForm" ng-init="">\n	<div>\n    <ion-list>     \n      <ion-item>  \n        <ion-label floating>{{"First Name" | translate}}\n        </ion-label>\n        <ion-input required type="text" formControlName="firstName" [(ngModel)]="editAddress.first_name" name="first_name">\n        </ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label floating>{{"Last Name"| translate}}\n        </ion-label>\n        <ion-input required type="text" formControlName="lastName" [(ngModel)]="editAddress.last_name" name="last_name">\n        </ion-input>\n      </ion-item>         \n      <ion-item>\n        <ion-label floating>{{"Email" | translate}}\n        </ion-label>\n        <ion-input required type="email" formControlName="email" [(ngModel)]="editAddress.email" name="email">\n        </ion-input>\n      </ion-item>\n      \n    </ion-list>\n  </div>\n  \n  <div class="margin">\n    <button ion-button block color="button-color" type="submit"  [disabled]="!myForm.valid" class="button button-block button-default" text-uppercase (click)="updateProfile()" >{{Save | translate}}\n    </button>\n  </div>  \n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\edit-address-form\edit-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], EditAddressForm);
    return EditAddressForm;
}());

//# sourceMappingURL=edit-address-form.js.map

/***/ })

});
//# sourceMappingURL=6.js.map