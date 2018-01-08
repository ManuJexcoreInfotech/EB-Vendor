webpackJsonp([3],{

/***/ 701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductModule", function() { return AddProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product__ = __webpack_require__(721);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipe_module__ = __webpack_require__(711);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AddProductModule = (function () {
    function AddProductModule() {
    }
    AddProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProduct */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProduct */]),
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipe_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProduct */]
            ]
        })
    ], AddProductModule);
    return AddProductModule;
}());

//# sourceMappingURL=add-product.module.js.map

/***/ }),

/***/ 711:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pipe__ = __webpack_require__(712);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__pipe__["a" /* KeysPipe */]]
        })
    ], KeysPipeModule);
    return KeysPipeModule;
}());

//# sourceMappingURL=pipe.module.js.map

/***/ }),

/***/ 712:
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'keys'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], KeysPipe);
    return KeysPipe;
}());

//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProduct; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProduct = (function () {
    function AddProduct(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.editAddress = [];
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        this.editAddress = params.data;
        this.service.load();
        setTimeout(function () {
            _this.categories = _this.service.mainCategories;
            console.log(_this.categories);
        }, 2500);
    }
    AddProduct.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        console.log(this.editAddress);
        var cat;
        // for(let data of this.editAddress.category) {
        // this.regions.push({'id':data});
        // }
        this.editAddress.type = 'simple';
        //this.editAddress.category = this.regions;
        console.log(this.editAddress);
        /*  if (this.editAddress.shipping_true) {
             this.editAddress.shipping.first_name = this.editAddress.billing.first_name;
             this.editAddress.shipping.last_name = this.editAddress.billing.last_name;
             this.editAddress.shipping.company = this.editAddress.billing.company;
             this.editAddress.shipping.address_1 = this.editAddress.billing.address_1;
             this.editAddress.shipping.address_2 = this.editAddress.billing.address_2;
             this.editAddress.shipping.city = this.editAddress.billing.city;
             this.editAddress.shipping.country = this.editAddress.billing.country;
             this.editAddress.shipping.state = this.editAddress.billing.state;
             this.editAddress.shipping.postcode = this.editAddress.billing.postcode;
         } */
        this.service.addProduct(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    AddProduct.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot('ProductsPage');
    };
    AddProduct = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\add-product\add-product.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>Add New Product\n    </ion-title>\n	<ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" style="min-width: 6vw;">   \n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="edit-address-form">\n	<div>\n    <ion-list>     \n		<ion-item>\n			<ion-label floating>{{"Product Name" | translate}}\n			</ion-label>\n			<ion-input required type="text"  [(ngModel)]="editAddress[\'name\']" name="title">\n			</ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>{{"Description" | translate}}\n			</ion-label>\n			<ion-textarea #ionTxtArea placeholder=\'{{placeholder}}\' [(ngModel)]="editAddress[\'description\']" ></ion-textarea>\n		</ion-item>	\n		<ion-item>\n			<ion-label>Category</ion-label> \n			<ion-select [(ngModel)]="editAddress[\'category\']" multiple="true"> \n				<ion-option *ngFor="let item of categories" value="{{item.id}}" >{{item.name}}</ion-option>			\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>{{"Product Price" | translate}}\n			</ion-label>\n			<ion-input required type="text" [(ngModel)]="editAddress[\'regular_price\']" name="price">\n			</ion-input> \n		</ion-item>\n		<ion-item>\n			<ion-label floating>{{"Product Image" | translate}}\n			</ion-label>			\n		</ion-item>\n    </ion-list>\n	</div> \n	<div class="margin">\n		<button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n		</button>\n	</div>\n	</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\add-product\add-product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], AddProduct);
    return AddProduct;
}());

//# sourceMappingURL=add-product.js.map

/***/ })

});
//# sourceMappingURL=3.js.map