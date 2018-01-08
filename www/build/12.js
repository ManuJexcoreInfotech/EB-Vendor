webpackJsonp([12],{

/***/ 697:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsModule", function() { return OrderDetailsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details__ = __webpack_require__(717);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderDetailsModule = (function () {
    function OrderDetailsModule() {
    }
    OrderDetailsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetails */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetails */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetails */]
            ]
        })
    ], OrderDetailsModule);
    return OrderDetailsModule;
}());

//# sourceMappingURL=order-details.module.js.map

/***/ }),

/***/ 717:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetails; });
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




var OrderDetails = (function () {
    function OrderDetails(nav, service, params, values) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.id = params.data;
        this.service.getOrder(this.id)
            .then(function (results) { return _this.orderDetails = results; });
    }
    OrderDetails = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\order-details\order-details.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Order Info" | translate}}\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content class="order-details">\n  <ion-spinner *ngIf="!orderDetails" name="crescent">\n  </ion-spinner>\n  <div *ngIf="orderDetails">\n    <ion-item-group>\n\n      <ion-item class="top-details">\n        <ion-row>\n          <ion-col class="dull">{{"Order Number" | translate }}\n          </ion-col>\n          <ion-col text-right>{{orderDetails.number}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="dull">{{"Date" | translate}}\n          </ion-col>\n          <ion-col text-right>{{orderDetails.date_created | date:\'medium\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="dull">{{"Payment Method" | translate}}\n          </ion-col>\n          <ion-col text-right>{{orderDetails.payment_method_title}}\n          </ion-col>\n        </ion-row>\n        <!--ion-row>\n          <ion-col class="dull">{{"Shipping Method" | translate}}\n          </ion-col>\n          <ion-col text-right>{{shipping_lines.method_title}}\n          </ion-col>\n        </ion-row-->\n      </ion-item>\n\n      <ion-item-divider>{{"Product Details" | translate}}\n      </ion-item-divider>\n      <ion-item *ngFor="let item of orderDetails.line_items">\n      <h2><span class="dull">{{"Product Name" | translate}} :</span> {{item.name}}\n      </h2>\n      <h2><span class="dull">{{"Price" | translate}} :</span> {{item.price | currency:values.currency:true:\'1.2-2\'}}\n      </h2>\n      <h2><span class="dull">{{"Quantity" | translate}} :</span> {{item.quantity}}\n      </h2>     \n      <h2><span class="dull">{{"SubTotal" | translate}} :</span> {{1*item.subtotal | currency:values.currency:true:\'1.2-2\'}}\n      </h2>\n      </ion-item>\n\n      <ion-item-divider>{{"Billing Address" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        {{orderDetails.billing.first_name}}\n        {{orderDetails.billing.last_name}},\n        <br>\n        {{orderDetails.billing.email}}\n        <br>\n        {{orderDetails.billing.phone}}\n        <br>\n        {{orderDetails.billing.address_1}},\n        <br>\n        {{orderDetails.billing.address_2}},\n        <br>\n        {{orderDetails.billing.city}}, \n        {{orderDetails.billing.state}}\n        <br>\n        {{orderDetails.billing.postcode}}\n      </ion-item>\n      <ion-item-divider>{{"Shipping Address" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        {{orderDetails.shipping.first_name}}\n        {{orderDetails.shipping.last_name}},\n        <br>\n        {{orderDetails.shipping.company}}\n        <br>\n        {{orderDetails.shipping.address_1}},\n        <br>\n        {{orderDetails.shipping.address_2}},\n        <br>\n        {{orderDetails.shipping.city}}, \n        {{orderDetails.shipping.state}}\n        <br>\n        {{orderDetails.shipping.country}}\n        <br>\n        {{orderDetails.shipping.postcode}}\n      </ion-item>\n      <ion-item-divider>{{"Total" | translate}}\n      </ion-item-divider>\n      <ion-item>\n        <ion-row>\n          <ion-col class="dull">{{"SubTotal" | translate}}\n          </ion-col>\n          <ion-col text-right>{{(1*orderDetails.total - 1*orderDetails.shipping_total - 1*orderDetails.total_tax) | currency:values.currency:true:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="dull"> {{"Shipping Total" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.shipping_total | currency:values.currency:true:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col class="dull">{{"Tax Total" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.total_tax | currency:values.currency:true:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n        <ion-row text-uppercase>\n          <ion-col class="dull">{{"Grand Total" | translate}}\n          </ion-col>\n          <ion-col text-right>{{1*orderDetails.total | currency:values.currency:true:\'1.2-2\'}}\n          </ion-col>\n        </ion-row>\n      </ion-item>\n    </ion-item-group>\n  </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\account\order-details\order-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], OrderDetails);
    return OrderDetails;
}());

//# sourceMappingURL=order-details.js.map

/***/ })

});
//# sourceMappingURL=12.js.map