webpackJsonp([1],{

/***/ 702:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingAddressFormModule", function() { return BillingAddressFormModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billing_address_form__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BillingAddressFormModule = (function () {
    function BillingAddressFormModule() {
    }
    BillingAddressFormModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__billing_address_form__["a" /* BillingAddressForm */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__billing_address_form__["a" /* BillingAddressForm */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__billing_address_form__["a" /* BillingAddressForm */]
            ]
        })
    ], BillingAddressFormModule);
    return BillingAddressFormModule;
}());

//# sourceMappingURL=billing-address-form.module.js.map

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

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillingAddressForm; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_values__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BillingAddressForm = (function () {
    function BillingAddressForm(iab, nav, service, params, functions, values) {
        var _this = this;
        this.iab = iab;
        this.nav = nav;
        this.service = service;
        this.functions = functions;
        this.values = values;
        this.showCreateAccont = false;
        this.buttonSubmit = false;
        this.buttonSubmitLogin = false;
        this.buttonSubmitCoupon = false;
        this.PlaceOrder = "Place Order";
        this.buttonText1 = "Apply";
        this.LogIn = "LogIn";
        this.loginData = [];
        this.form = params.data;
        this.billing = {};
        //this.billing.shipping = true;
        this.billing.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.getRegion(this.form.shipping_country);
        this.form.shipping = true;
        this.shipping = {};
        this.shipping.save_in_address_book = true;
        this.getRegion(this.form.billing_country);
        this.service.getDate()
            .then(function (results) { if (results['success'])
            _this.mydate = results['bookable_dates']; });
    }
    BillingAddressForm.prototype.getRegion = function (countryId) {
        var _this = this;
        //this.form.billing_state = "";
        this.states = this.form.state[countryId];
        this.service.updateOrderReview(this.form)
            .then(function (results) { return _this.OrderReview = results; });
    };
    BillingAddressForm.prototype.checkout = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";
        if (this.form.shipping) {
            this.form.shipping_first_name = this.form.billing_first_name;
            this.form.shipping_last_name = this.form.billing_last_name;
            this.form.shipping_company = this.form.billing_company;
            this.form.shipping_address_1 = this.form.billing_address_1;
            this.form.shipping_address_2 = this.form.billing_address_2;
            this.form.shipping_city = this.form.billing_city;
            this.form.shipping_country = this.form.billing_country;
            this.form.shipping_state = this.form.billing_state;
            this.form.shipping_postcode = this.form.billing_postcode;
        }
        if (this.form.payment_method == 'bacs' || this.form.payment_method == 'cheque' || this.form.payment_method == 'cod') {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handleBilling(results); });
        }
        else if (this.form.payment_method == 'stripe') {
            this.service.getStripeToken(this.form)
                .then(function (results) { return _this.handleStripeToken(results); });
        }
        else {
            this.service.checkout(this.form)
                .then(function (results) { return _this.handlePayment(results); });
        }
    };
    BillingAddressForm.prototype.handlePayment = function (results) {
        var _this = this;
        if (results.result == 'success') {
            var browser_1 = this.iab.create(results.redirect, '_blank', 'location=yes');
            browser_1.show();
            this.values.cart = [];
            this.values.count = 0;
            var str = results.redirect;
            var pos1 = str.lastIndexOf("/order-pay/");
            var pos2 = str.lastIndexOf("?key=wc_order");
            var pos3 = pos2 - (pos1 + 11);
            var order_id = str.substr(pos1 + 11, pos3);
            console.log(order_id);
            var theLoop_1 = function (i) {
                setTimeout(function () {
                    _this.service.getOrderSummary(order_id)
                        .then(function (results) {
                        _this.order = results;
                        if (_this.order.order.status == "processing") {
                            browser_1.close();
                            _this.nav.push('OrderSummary', order_id);
                        }
                        else if (_this.order.order.status == "pending") {
                            --i;
                            theLoop_1(i);
                        }
                    });
                }, 15000);
            };
            theLoop_1(10);
        }
        else if (results.result == 'failure') {
            this.functions.showAlert("STATUS", results.messages);
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.checkoutStripe = function () {
        var _this = this;
        this.buttonSubmit = true;
        this.PlaceOrder = "Placing Order";
        this.service.getStripeToken(this.form)
            .then(function (results) { return _this.handleStripeToken(results); });
    };
    BillingAddressForm.prototype.handleStripeToken = function (results) {
        var _this = this;
        if (results.error) {
            this.buttonSubmit = false;
            this.PlaceOrder = "Place Order";
            this.functions.showAlert("ERROR", results.error.message);
        }
        else {
            this.service.stripePlaceOrder(this.form, results)
                .then(function (results) { return _this.handleBilling(results); });
            this.buttonSubmit = false;
        }
    };
    BillingAddressForm.prototype.handleBilling = function (results) {
        if (results.result == "success") {
            var str = results.redirect;
            var pos1 = str.lastIndexOf("order-received/");
            var pos2 = str.lastIndexOf("?key=wc_order");
            var pos3 = pos2 - (pos1 + 15);
            var order_id = str.substr(pos1 + 15, pos3);
            this.nav.push('OrderSummary', order_id);
        }
        else if (results.result == "failure") {
            this.functions.showAlert("ERROR", results.messages);
        }
        this.buttonSubmit = false;
        this.PlaceOrder = "Place Order";
    };
    BillingAddressForm.prototype.login = function () {
        var _this = this;
        if (this.validateForm()) {
            this.buttonSubmitLogin = true;
            this.LogIn = "Please Wait";
            this.service.login(this.form)
                .then(function (results) { return _this.handleResults(results); });
        }
    };
    BillingAddressForm.prototype.validateForm = function () {
        if (this.form.username == undefined || this.form.username == "") {
            return false;
        }
        if (this.form.password == undefined || this.form.password == "") {
            return false;
        }
        else {
            return true;
        }
    };
    BillingAddressForm.prototype.handleResults = function (a) {
        this.buttonSubmitLogin = false;
        this.LogIn = "LogIn";
        //this.form.shipping = true;
        if (a.user_logged) {
            this.form = a;
            this.states = this.form.state[this.form.billing_country];
            this.values.isLoggedIn = a.user_logged;
            this.values.customerName = a.billing_first_name;
            this.values.customerId = a.user_id;
            this.values.logoutUrl = a.logout_url;
        }
        else {
            this.functions.showAlert("Error", 'Login unsuccessful. try again');
        }
    };
    BillingAddressForm.prototype.createAccount = function () {
        this.showCreateAccont = true;
    };
    BillingAddressForm.prototype.changePayment = function () {
        this.form.payment_instructions = this.form.payment[this.form.payment_method].description;
        this.buttonSubmit = false;
        this.buttonText = "Continue to " + this.form.payment[this.form.payment_method].method_title;
    };
    BillingAddressForm.prototype.terms = function () {
        this.nav.push('TermsCondition', this.form.terms_content);
    };
    BillingAddressForm = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\checkout\billing-address-form\billing-address-form.html"*/'<ion-header no-border class="billing-header">\n  <ion-navbar color="header"> \n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-wrap text-center>{{"Checkout" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="billing-address-form">\n <div>\n    <ion-item *ngIf="!values.isLoggedIn" class="side-heading-background Returningcustomer" no-lines>\n      <ion-label color="side-heading-color">{{"Returning customer? Login here" | translate}}\n        <ion-icon ios="ios-log-in" md="md-log-in">\n        </ion-icon>\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.islogin" name="subscribe">\n      </ion-toggle>\n    </ion-item>\n    <div *ngIf="form.islogin" class="login-form">\n      <form #f="ngForm">\n        <ion-list>\n          <ion-item>\n            <ion-label floating>{{"Username" | translate}}\n            </ion-label>\n            <ion-input required type="email" [(ngModel)]="form.username" name="firstname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Password" | translate}}\n            </ion-label>\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n            </ion-input>\n          </ion-item>\n        </ion-list> \n        <div class="login-button">\n          <button ion-button block color="button-color" type="submit" text-uppercase [disabled]="buttonSubmitLogin" (click)="login(loginData)">{{LogIn | translate}}\n          </button> \n        </div>\n      </form>\n    </div>\n    <div *ngIf="form.iscoupon" class="coupon">\n      <form #f="ngForm">\n        <ion-item>\n          <ion-label floating>coupon\n          </ion-label>\n          <ion-input required type="text" [(ngModel)]="form.coupon_code" name="coupon">\n          </ion-input>\n        </ion-item> \n        <button ion-button color="button-color" block type="submit" [disabled]="buttonSubmitCoupon" (click)="submitCoupon()"> {{buttonText1}}\n        </button> \n      </form>\n    </div>\n    <div *ngIf="form">\n      <form #f="ngForm" class="form">\n        <ion-list no-margin>\n          <ion-item class="side-heading-background">\n            <ion-label color="side-heading-color">{{"Billing Address" | translate}}\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"First Name" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_first_name" name="firstname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Last Name"| translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_last_name" name="lastname">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Phone" | translate}}\n            </ion-label>\n            <ion-input required type="number" [(ngModel)]="form.billing_phone" name="telephone">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Street Address" | translate}} 1\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_address_1" name="street1">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Licence / GST" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_address_2" name="street2">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Email" | translate}}\n            </ion-label>\n            <ion-input required type="email" [(ngModel)]="form.billing_email" name="email">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"City" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_city" name="city">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Postcode" | translate}}\n            </ion-label>\n            <ion-input required type="number" [(ngModel)]="form.billing_postcode" name="postcode">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label> {{"Country" | translate}}\n            </ion-label>\n            <ion-select [(ngModel)]="form.billing_country" (ngModelChange)="getRegion(form.billing_country)" name="billing_country">\n              <div *ngFor="let field of form.country.countries | keys">\n                <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n                </ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="states">\n            <ion-label> {{"State" | translate}} \n            </ion-label>\n            <ion-select [(ngModel)]="form.billing_state" name="billing_state">\n              <div *ngFor="let field of states | keys">\n                <ion-option value="{{field.key}}">{{field.value}}\n                </ion-option>\n              </div>\n            </ion-select>\n          </ion-item>\n          <ion-item *ngIf="!states">\n            <ion-label floating> {{"State" | translate}} \n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.billing_state" name="billing_state">\n            </ion-input>\n          </ion-item>\n          <!--ion-item *ngIf="mydate">\n           <ion-label>  \n              {{"deliveryDate" | translate}}\n           </ion-label>   \n              <ion-select [(ngModel)]="selectedDate" (ngModelChange)="getTimeSlot(selectedDate)" name="date">\n                 <div *ngFor="let field of mydate">\n                 <ion-option value="{{field}}">{{field}}</ion-option>\n                 </div>\n              </ion-select>\n           </ion-item>\n\n          <ion-item *ngIf="time?.slots">\n               <ion-label>  \n                  {{"deliveryTime" | translate}}\n               </ion-label>   \n                  <ion-select [(ngModel)]="form.jckwds_delivery_time" name="time">\n                     <div *ngFor="let field of time.slots">\n                     <ion-option value="{{field.value}}">{{field.formatted}}</ion-option>\n                     </div>\n                  </ion-select>\n          </ion-item-->\n\n        </ion-list>\n        <div class="same-for-shipping">\n          <ion-item class="side-heading-background">\n            <ion-label color="side-heading-color">{{"Same For Shipping" | translate}}\n            </ion-label>\n            <ion-toggle checked="true" [(ngModel)]="form.shipping" name="shipping">\n            </ion-toggle>\n          </ion-item>\n        </div>\n        <div *ngIf="!form.shipping" class="same-for-shipping-form">\n          <ion-list class="shipping-address-list">\n            <ion-item class="side-heading-background">\n              <ion-label color="side-heading-color">{{"Shipping Address" | translate}}\n              </ion-label>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"First Name" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_first_name" name="first_name">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Last Name"| translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_last_name" name="last_name">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Street Address" | translate}} 1\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_1" name="address_1">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Licence / GST" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_address_2" name="address_2">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"City" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_city" name="shipping_city">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label> {{"Country" | translate}}\n              </ion-label>\n              <ion-select [(ngModel)]="form.shipping_country" (ngModelChange)="getRegion(form.shipping_country)" name="shipping_country">\n                <div *ngFor="let field of form.country.countries | keys">\n                  <ion-option value="{{field.key}}"><span [innerHTML]="field.value"></span>\n                  </ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n            <ion-item *ngIf="states">\n              <ion-label> {{"State" | translate}} \n              </ion-label>\n              <ion-select [(ngModel)]="form.shipping_state" name="form.shipping_state">\n                <div *ngFor="let field of states | keys">\n                  <ion-option value="{{field.key}}">{{field.value}}\n                  </ion-option>\n                </div>\n              </ion-select>\n            </ion-item>\n            <ion-item *ngIf="!states">\n              <ion-label floating>{{form.checkout_fields?.shipping?.shipping_state?.label}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_state" name="form.shipping_state">\n              </ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label floating>{{"Postcode" | translate}}\n              </ion-label>\n              <ion-input required type="text" [(ngModel)]="form.shipping_postcode" name="shipping_postcode">\n              </ion-input>\n            </ion-item>\n          </ion-list>\n        </div>\n      </form>\n    </div>\n    <ion-item *ngIf="!values.isLoggedIn" no-lines class="side-heading-background create-account">\n      <ion-label color="side-heading-color">{{"Create Account" | translate}}\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.register" name="subscribe">\n      </ion-toggle>\n    </ion-item>\n    <div *ngIf="form.register" class="create-account-form">\n      <form #f="ngForm">\n        <ion-list>\n          <ion-label class="create-account-label"> {{"Create an account by entering the information below. If you are a returning customer please login at the top of the page" | translate}} \n          </ion-label>\n          <ion-item>\n            <ion-label floating>{{"Password" | translate}}\n            </ion-label>\n            <ion-input required type="password" [(ngModel)]="form.password" name="password">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </form>\n    </div>\n    <ion-list *ngIf="OrderReview?.cart">\n      <ion-item class="side-heading-background order-review-header" no-lines>\n        <ion-label color="side-heading-color">{{"Your Orders" | translate}}\n        </ion-label>\n      </ion-item>\n      <div *ngFor="let item of OrderReview.cart.cart_contents | keys">\n        <ion-row>\n          <ion-col width-75>\n            <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*item.value.line_subtotal | currency:values.currency:true:\'1.2-2\'}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n      <div *ngIf="OrderReview.totals.discount_total && OrderReview.totals.discount_total != 0">\n        <ion-row>\n          <ion-col width-75>\n            <ion-label no-margin>{{"Coupon" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin> - {{1*OrderReview.totals.discount_total | currency:values.currency:true:\'1.2-2\'}}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n      <ion-row>\n        <ion-col width-75>\n          <ion-label no-margin>{{"SubTotal" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label no-margin>{{1*OrderReview.totals.subtotal | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n\n      <ion-row *ngIf="OrderReview.totals.cart_contents_total != 0">\n        <ion-col width-75>\n          <ion-label>{{"Subtotal_ex_tax" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.cart_contents_total | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>  \n\n      <ion-row *ngIf="OrderReview.totals.total_tax != 0">\n        <ion-col width-75>\n          <ion-label>{{"Tax_total" | translate}}\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label>{{1*OrderReview.totals.total_tax | currency:values.currency:true:\'1.2-2\'}}\n          </ion-label>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col width-75>\n          <ion-label no-margin>\n            <b>{{"Total" | translate}}\n            </b>\n          </ion-label>\n        </ion-col>\n        <ion-col width-25 text-right>\n          <ion-label no-margin>\n            <b>{{1*OrderReview.totals.total | currency:values.currency:true:\'1.2-2\'}}\n            </b>\n          </ion-label>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n    <ion-item class="side-heading-background payment-method-header" no-lines>\n      <ion-label color="side-heading-color">{{"Select Payment Method" | translate}}\n      </ion-label>\n    </ion-item>\n    <div *ngIf="form.payment">\n      <ion-list no-margin text-wrap radio-group [(ngModel)]="form.payment_method" (ngModelChange)="changePayment()">\n        <ion-item *ngFor="let method of form.payment | keys">\n          <ion-label class="payment-method-title">{{method.value.title}}\n          </ion-label>\n          <ion-radio value="{{method.value.id}}">\n          </ion-radio>\n        </ion-item>\n      </ion-list>\n      <div *ngIf="form.payment_method != \'stripe\'" class="side-heading-background">\n        <ion-label class="payment-instructions">{{form.payment_instructions}}\n        </ion-label> \n      <ion-item no-lines class="side-heading-background" *ngIf="form.show_terms">\n      <ion-label>{{"I Agree" | translate}} <a (click)="terms()">{{"Terms & Conditions" | translate}}</a>\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n      </ion-toggle>\n      </ion-item>\n\n      <div class="button-margin">\n        <button ion-button color="button-color" text-uppercase [disabled]="buttonSubmit" block secondary type="submit" class="button button-block button-default" (click)="checkout()">{{PlaceOrder | translate}}\n        </button> \n      </div>\n        \n      </div>\n    </div>\n    <div *ngIf="form.payment_method ==\'stripe\'" class="side-heading-background stripe-payment">\n      <ion-label [innerHTML]="form.payment.stripe.description">\n      </ion-label>\n      <form #f="ngForm">\n        <ion-list no-margin>\n          <ion-item class="side-heading-background">\n            <ion-label color="side-heading-color">Stripe Card Details\n            </ion-label>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Card Number" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_number" name="stripe_number">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Expiry Month" | translate}} (MM)\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_month" name="stripe_exp_year">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Expiry Year" |translate}} (YYYY)\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_exp_year" name="stripe_exp_year">\n            </ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label floating>{{"Card Code" | translate}}\n            </ion-label>\n            <ion-input required type="text" [(ngModel)]="form.stripe_code" name="stripe_code">\n            </ion-input>\n          </ion-item>\n        </ion-list>\n      </form> \n     <ion-item class="side-heading-background" no-lines>\n      <ion-label>{{"I Agree" | translate}} <a (click)="terms()">{{"Terms & Conditions" | translate}}</a>\n      </ion-label>\n      <ion-toggle checked="true" [(ngModel)]="form.terms" name="terms">\n      </ion-toggle>\n    </ion-item>\n\n      <div class="button-margin">\n      <button ion-button color="button-color" text-uppercase *ngIf="form.payment_method ==\'stripe\'" [disabled]="buttonSubmit" (click)="checkout()" block secondary type="submit" class="button button-block button-default">{{PlaceOrder | translate}}\n      </button>\n      </div>\n    </div>\n    <br>\n    <br>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\checkout\billing-address-form\billing-address-form.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_5__providers_service_values__["a" /* Values */]])
    ], BillingAddressForm);
    return BillingAddressForm;
}());

//# sourceMappingURL=billing-address-form.js.map

/***/ })

});
//# sourceMappingURL=1.js.map