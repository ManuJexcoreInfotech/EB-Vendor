webpackJsonp([0],{

/***/ 704:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderSummaryModule", function() { return OrderSummaryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_summary__ = __webpack_require__(724);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__ = __webpack_require__(711);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OrderSummaryModule = (function () {
    function OrderSummaryModule() {
    }
    OrderSummaryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummary */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummary */]),
                __WEBPACK_IMPORTED_MODULE_3__pipes_pipe_module__["a" /* KeysPipeModule */],
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__order_summary__["a" /* OrderSummary */]
            ]
        })
    ], OrderSummaryModule);
    return OrderSummaryModule;
}());

//# sourceMappingURL=order-summary.module.js.map

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

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderSummary; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__ = __webpack_require__(354);
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






var OrderSummary = (function () {
    function OrderSummary(nav, service, params, functions, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.params = params;
        this.functions = functions;
        this.values = values;
        this.id = params.data;
        this.service.getOrderSummary(this.id)
            .then(function (results) { return _this.orderSummary = results; });
    }
    OrderSummary.prototype.Continue = function () {
        this.values.count = 0;
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* Home */]);
    };
    OrderSummary = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\checkout\order-summary\order-summary.html"*/'<ion-header no-border>\n  <ion-navbar color="header" hideBackButton>\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-wrap text-center>{{"Order Summary" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content text-wrap class="order-summary">\n  <ion-spinner *ngIf="!orderSummary" name="crescent">\n  </ion-spinner>\n  <div *ngIf="orderSummary" class="margin">\n      <div class="thank-you-message">\n        <ion-item>\n          <h2>{{"Order Received" | translate}} \n          </h2>\n          <h3>{{"Thank you. Your order has been received" | translate}}\n          </h3>\n        </ion-item>\n      </div>\n      <div *ngIf="orderSummary" class="summary">\n        <ion-item no-lines>\n          <h2>{{"Order Number" | translate}} : {{orderSummary.number}}\n          </h2>\n          <h2>{{"Order date" | translate}} : {{orderSummary.date_created | date:\'medium\'}}\n          </h2>\n          <h2>{{"Total" | translate}} :  {{1*orderSummary.total | currency:values.currency:true:\'1.2-2\'}}\n          </h2>\n          <h2>{{"Payment Method" | translate}} :  {{orderSummary.payment_method_title}}\n          </h2>\n          <div *ngFor="let item of orderSummary.shipping_lines | keys">\n          <h2>{{"Shipping" | translate}} : {{item.value.method_title}}\n          </h2>\n          </div>\n        </ion-item>\n      </div>\n      <div class="order-details">\n        <ion-item no-lines>\n          <ion-label class="side-header">{{"Order Details" | translate}}\n          </ion-label>\n        </ion-item>\n        <div *ngFor="let item of orderSummary.line_items | keys">\n          <ion-row >\n            <ion-col width-75>\n              <ion-label no-margin>{{item.value.name}} - ({{item.value.quantity}})\n              </ion-label>\n            </ion-col>\n            <ion-col width-25 text-right>\n              <ion-label no-margin>{{1*item.value.subtotal | currency:values.currency:true:\'1.2-2\' }}\n              </ion-label>\n            </ion-col>\n          </ion-row>\n        </div>\n        <ion-row *ngIf="orderSummary.coupon_lines.length != 0" > \n          <ion-col width-75>\n            <ion-label no-margin>{{"coupon" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*orderSummary.discount_total | currency:values.currency:true:\'1.2-2\' }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row > \n          <ion-col width-75>\n            <ion-label no-margin>{{"Shipping Total" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*orderSummary.shipping_total | currency:values.currency:true:\'1.2-2\' }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="!orderSummary.shipping_tax == 0"> \n          <ion-col width-75>\n            <ion-label no-margin>{{"Shipping Tax" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*orderSummary.shipping_tax | currency:values.currency:true:\'1.2-2\' }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row > \n          <ion-col width-75>\n            <ion-label no-margin>{{"Total Tax" | translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label no-margin>{{1*orderSummary.total_tax | currency:values.currency:true:\'1.2-2\' }}\n            </ion-label>\n          </ion-col>\n        </ion-row>\n\n        <ion-row class="order-total"> \n          <ion-col width-75>\n            <ion-label class="side-header">{{"Total" |translate}}\n            </ion-label>\n          </ion-col>\n          <ion-col width-25 text-right>\n            <ion-label>\n              <b>{{1*orderSummary.total | currency:values.currency:true:\'1.2-2\' }}\n              </b>\n            </ion-label>\n          </ion-col>\n        </ion-row>\n      </div>\n  </div>\n</ion-content>\n<ion-footer *ngIf="orderSummary">\n  <button ion-button full color="button-color" no-padding no-margin text-uppercase (click)="Continue()">\n    {{"Continue" | translate}}\n  </button>\n</ion-footer>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\checkout\order-summary\order-summary.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_checkout_service__["a" /* CheckoutService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_functions__["a" /* Functions */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */]])
    ], OrderSummary);
    return OrderSummary;
}());

//# sourceMappingURL=order-summary.js.map

/***/ })

});
//# sourceMappingURL=0.js.map