webpackJsonp([9],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductModule", function() { return EditProductModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_product__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EditProductModule = (function () {
    function EditProductModule() {
    }
    EditProductModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_product__["a" /* EditProductP */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_product__["a" /* EditProductP */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__edit_product__["a" /* EditProductP */]
            ]
        })
    ], EditProductModule);
    return EditProductModule;
}());

//# sourceMappingURL=edit-product.module.js.map

/***/ }),

/***/ 726:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductP; });
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




var EditProductP = (function () {
    function EditProductP(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.values = values;
        this.editAddress = [];
        this.regions = [];
        this.disableSubmit = false;
        this.Save = "Save";
        if (!this.values.productDiD) {
            this.nav.setRoot('ProductsPage');
        }
        this.id = this.values.productDiD;
        console.log("product id =======>" + this.values.productDiD);
        //this.editAddress = params.data;
        this.service.load();
        this.service.getProductDetail(this.id)
            .then(function (results) { return _this.handleProduct(results); });
        setTimeout(function () {
            _this.categories = _this.service.mainCategories;
            console.log(_this.categories);
        }, 2500);
    }
    EditProductP.prototype.saveAddress = function () {
        var _this = this;
        this.Save = "Save";
        this.disableSubmit = true;
        console.log(this.editAddress);
        var cat;
        this.editAddress.id = this.values.productDiD;
        this.editAddress.type = 'simple';
        console.log(this.editAddress);
        this.service.editProduct(this.editAddress)
            .then(function (results) { return _this.handleSaveAddress(results); });
    };
    EditProductP.prototype.handleProduct = function (results) {
        this.editAddress['name'] = results.name;
        this.editAddress['description'] = results.description.replace(/<[^>]+>/gm, '');
        for (var _i = 0, _a = results.categories; _i < _a.length; _i++) {
            var data = _a[_i];
            this.editAddress['category'].push(data.id);
        }
        this.editAddress['regular_price'] = results.regular_price;
        this.Save = "Saving";
        //this.nav.setRoot('ProductsPage');
    };
    EditProductP.prototype.handleSaveAddress = function (results) {
        this.disableSubmit = false;
        this.Save = "Saving";
        this.nav.setRoot('ProductsPage');
    };
    EditProductP = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\edit-product\edit-product.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>Edit Product\n    </ion-title>\n	<ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" style="min-width: 6vw;">   \n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="edit-address-form">\n	<div>\n    <ion-list>     \n		<ion-item>\n			<ion-label floating>{{"Product Name" | translate}}\n			</ion-label>\n			<ion-input required type="text"  [(ngModel)]="editAddress[\'name\']" name="title">\n			</ion-input>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>{{"Description" | translate}}\n			</ion-label>\n			<ion-textarea #ionTxtArea placeholder=\'{{placeholder}}\' [(ngModel)]="editAddress[\'description\']" ></ion-textarea>\n		</ion-item>	\n		<ion-item>\n			<ion-label>Category</ion-label> \n			<ion-select [(ngModel)]="editAddress[\'category\']" multiple="true"> \n				<ion-option *ngFor="let item of categories" value="{{item.id}}" >{{item.name}}</ion-option>			\n			</ion-select>\n		</ion-item>\n		<ion-item>\n			<ion-label floating>{{"Product Price" | translate}}\n			</ion-label>\n			<ion-input required type="text" [(ngModel)]="editAddress[\'regular_price\']" name="price">\n			</ion-input> \n		</ion-item>\n		<ion-item>\n			<ion-label floating>{{"Product Image" | translate}}\n			</ion-label>			\n		</ion-item>\n    </ion-list>\n	</div> \n	<div class="margin">\n		<button ion-button block color="button-color" type="submit" [disabled]="disableSubmit" class="button button-block button-default" text-uppercase (click)="saveAddress()">{{Save | translate}}\n		</button>\n	</div>\n	</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\edit-product\edit-product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], EditProductP);
    return EditProductP;
}());

//# sourceMappingURL=edit-product.js.map

/***/ })

});
//# sourceMappingURL=9.js.map