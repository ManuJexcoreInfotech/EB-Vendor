webpackJsonp([2],{

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(723);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CartPageModule = (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ]
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

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

/***/ 723:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(91);
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






var CartPage = (function () {
    function CartPage(nav, service, values, params, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.params = params;
        this.functions = functions;
        this.addProduct = true;
        this.disableSubmit = false;
        this.buttonCoupon = false;
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.Checkout = "Checkout";
        this.quantity = 1;
        this.options = [];
        this.obj = params.data;
        this.service.loadCart()
            .then(function (results) { return _this.handleCartInit(results); });
    }
    CartPage.prototype.handleCartInit = function (results) {
        console.log(results);
        this.cart = results;
        this.shipping = results.zone_shipping;
        this.chosen_shipping = results.chosen_shipping;
    };
    CartPage.prototype.handleCart = function (results) {
        this.cart = results;
    };
    CartPage.prototype.delete = function (key) {
        var _this = this;
        this.service.deleteItem(key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.checkout = function () {
        var _this = this;
        this.disableSubmit = true;
        this.Checkout = "Please Wait";
        this.service.checkout()
            .then(function (results) { return _this.handleBilling(results); });
    };
    CartPage.prototype.handleBilling = function (results) {
        this.disableSubmit = false;
        this.Checkout = "Checkout";
        this.nav.push('BillingAddressForm', results);
    };
    CartPage.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        this.service.deleteFromCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.addToCart = function (id, key) {
        var _this = this;
        this.service.addToCart(id, key)
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.updateCart = function (results) {
        var _this = this;
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.submitCoupon = function () {
        var _this = this;
        if (this.cart.coupon != undefined) {
            this.disableSubmitCoupon = true;
            this.Apply = "Apply";
            this.service.submitCoupon(this.cart.coupon)
                .then(function (results) { return _this.handleCoupon(results); });
        }
    };
    CartPage.prototype.handleCoupon = function (results) {
        var _this = this;
        console.log(results);
        this.disableSubmitCoupon = false;
        this.Apply = "Apply";
        this.cart.coupon = "";
        this.functions.showAlert("STATUS", results._body);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.removeCoupon = function () {
        var _this = this;
        this.service.removeCoupon(this.cart.applied_coupons)
            .then(function (results) { return _this.handleRemoveCoupon(results); });
    };
    CartPage.prototype.handleRemoveCoupon = function (results) {
        var _this = this;
        this.functions.showAlert(results.status, results.message);
        this.service.loadCart()
            .then(function (results) { return _this.handleCart(results); });
    };
    CartPage.prototype.handleResults = function (a) {
        if (a.message.status == 'success') {
            this.functions.showAlert(a.message.status, a.message.text);
        }
        else {
            this.functions.showAlert(a.message.status, a.message.text);
        }
    };
    CartPage.prototype.updateShipping = function (method) {
        var _this = this;
        this.chosen_shipping = method;
        this.service.updateShipping(method)
            .then(function (results) { return _this.handleShipping(results); });
    };
    CartPage.prototype.handleShipping = function (results) {
        this.cart = results;
    };
    CartPage.prototype.gohome = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    CartPage.prototype.getProduct = function (id) {
        this.nav.push('ProductPage', id);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\cart\cart.html"*/'<ion-header no-border class="cart-header">\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Cart"| translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge">\n        <ion-icon class="ion-md-cart item-icon">\n        </ion-icon>\n        <ion-badge class="badge badge-light" *ngIf="values.count">{{values.count}}\n        </ion-badge>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="cart">\n  <ion-spinner *ngIf="!cart" name="crescent">\n  </ion-spinner>\n  <div *ngIf="cart">\n\n   <div class="empty" *ngIf="cart.cart_contents.length == 0">\n      <img src="assets/image/empty-cart.png">\n      <h4 color="side-heading-color" text-center no-lines>{{"Your cart is empty!" | translate}}</h4>\n      <h5 text-center no-lines>{{"Add some products available in our menu to checkout" | translate}}</h5>\n      <button ion-button class="butt" item-center medium color="button-color" text-uppercase (click)="gohome()">{{"Continue Shopping" | translate}}</button>\n   </div>\n   \n    <div *ngIf="cart?.cart_contents">\n\n      <div class="cart-items">\n\n        <div class="cart-list" *ngFor="let item of cart.cart_contents | keys">\n          <ion-item no-lines>\n            <ion-thumbnail item-left (click)="getProduct(item.value.product_id)">\n              <img src="{{item.value.thumb}}">\n            </ion-thumbnail>\n            <h2 wrap-text class="item-name">{{item.value.name}}\n            </h2>\n            <h3 wrap-text> {{"Price" | translate}}: {{item.value.price | currency:values.currency:true:\'1.2-2\'}}\n            </h3>\n            <h3 wrap-text> {{"Total" | translate}}: {{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}}\n            </h3>\n            <a (click)="delete( item.key )">\n              <ion-icon name="md-trash" style="font-size: 18px;color: #607D8B;">\n              </ion-icon>\n            </a>\n            <div class="add-remove-button">\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="deleteFromCart(item.value.product_id, item.key)">\n              <ion-icon name="md-remove">\n              </ion-icon>\n            </button>\n            <button ion-button item-right color="button-color" clear style="border: 0; margin: 0 5px;">{{item.value.quantity}}\n            </button>\n            <button ion-button icon-only class="has-icon icon-only" no-margin item-right clear color="button-color" (click)="addToCart(item.value.product_id, item.key)">\n              <ion-icon name="md-add">\n              </ion-icon>\n            </button>\n            </div>\n          </ion-item>\n        </div>\n\n      </div>\n\n      <div *ngIf="cart.cart_contents.length != 0">\n        <ion-list *ngIf="shipping" no-margin text-wrap radio-group [(ngModel)]="chosen_shipping" (ngModelChange)="updateShipping(chosen_shipping)" class="shipping-methods">\n          <ion-item-divider>\n            <h2>{{"Select a shipping method" | translate}}\n            </h2>\n          </ion-item-divider>\n          <ion-item *ngFor="let method of shipping | keys" >\n            <ion-label>{{method.value.method_title}} \n              <span *ngIf="method.value.cost">{{ 1*method.value.cost | currency:values.currency:true:\'1.2-2\'}}\n              </span> \n            </ion-label>\n            <ion-radio value="{{method.value.id + \':\' + method.value.instance_id}}" >\n            </ion-radio>\n          </ion-item>\n        </ion-list>\n\n        <form #f="ngForm" class="coupon">\n          <ion-item>\n            <ion-label>{{"Coupon Code" | translate}}</ion-label>\n            <ion-input type="text" [(ngModel)]="cart.coupon" name="coupon">\n            </ion-input>\n            <h2 item-right>\n              <button ion-button color="button-color" block type="submit" text-uppercase [disabled]=\'disableSubmitCoupon\' (click)="submitCoupon()"> {{Apply | translate}}\n              </button>\n            </h2>\n          </ion-item>\n        </form>\n\n        <ion-list class="totals" *ngIf="cart.cart_totals">\n          <!--ion-item-divider>\n            <h2>{{"Totals" | translate}}\n            </h2>\n          </ion-item-divider-->\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>{{"SubTotal" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>  \n\n          <ion-row *ngIf="cart.cart_totals.cart_contents_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Subtotal_ex_tax" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>  \n\n          <ion-row *ngIf="cart.cart_totals.tax_total != 0">\n            <ion-col width-75>\n              <ion-label>{{"Tax_total" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.discount_total && cart.cart_totals.discount_total != 0"> \n            <ion-col width-75 class="remove-coupon">\n              <ion-label>{{"Coupons" | translate}} - {{cart.applied_coupons}} \n                <a (click)="removeCoupon()"> (Remove)\n                </a>\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label>- {{1*cart.cart_totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row *ngIf="cart.cart_totals.shipping_total != 0"> \n            <ion-col width-75>\n              <ion-label>{{"Shipping" | translate}}\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label >{{1*cart.cart_totals.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col width-75>\n              <ion-label>\n                <b> {{"Grand Total" | translate}}\n                </b>\n              </ion-label>\n            </ion-col >\n            <ion-col width-25 text-right>\n              <ion-label>{{1*cart.cart_totals.total | currency:values.currency:true:\'1.2-2\'}}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n\n        </ion-list>\n\n      </div>\n    </div>\n  </div>\n</ion-content>\n<div *ngIf="cart">\n  <ion-footer *ngIf="cart.cart_contents.length != 0">\n    <button ion-button full color="button-color" no-padding no-margin text-uppercase [disabled]=\'disableSubmit\' (click)="checkout()"> {{Checkout | translate}}\n    </button>\n  </ion-footer>\n</div>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\cart\cart.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_cart_service__["a" /* CartService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=2.js.map