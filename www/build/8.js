webpackJsonp([8],{

/***/ 706:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(725);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProductsPageModule = (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
                __WEBPACK_IMPORTED_MODULE_3__ngx_translate_core__["b" /* TranslateModule */].forChild()
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]
            ]
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ProductsPage = (function () {
    function ProductsPage(nav, popoverCtrl, serv, service, params, values, functions) {
        var _this = this;
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.serv = serv;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.listview = false;
        this.noProducts = false;
        this.shouldShowCancel = true;
        this.showFilters = false;
        this.showSortFilters = false;
        this.sort = 0;
        this.price = { lower: 1, upper: this.values.max_price };
        this.attributeTerms = [];
        this.selectedFilter = {};
        this.data = {};
        this.termsOption = {};
        this.filter = {};
        //this.price = {lower: 1, upper: 150};
        this.categoryName = params.data.name;
        this.q = "";
        this.filter.category = params.data.id;
        this.filter.page = 1;
        this.categories = params.data.categories;
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.subCategories = [];
        this.items = [];
        this.quantity = "1";
        this.serv.getVendorProducts(this.filter).then(function (results) { return _this.handleProducts(results); });
    }
    ProductsPage.prototype.handleProducts = function (results) {
        console.log(results);
        this.products = results;
    };
    ProductsPage.prototype.chooseTab = function (filterTitle) {
        this.filter.attribute = filterTitle.slug;
        console.log(this.filter.attribute);
        this.getAttributeTerms(filterTitle.id);
        this.attributes.forEach(function (item) {
            item.selected = false;
        });
        filterTitle.selected = true;
        this.selectedFilter = filterTitle;
    };
    ProductsPage.prototype.updateTerms = function (id) {
        this.filter.attribute_term = id;
    };
    ProductsPage.prototype.getCategory = function (id, slug, name) {
        this.items.id = id;
        this.items.slug = slug;
        this.items.name = name;
        this.items.categories = this.categories;
        this.nav.push('ProductsPage', this.items);
    };
    ProductsPage.prototype.parseText = function (id, count, offset, obj2) {
        var text = '{';
        text += '"category' + '":"' + id + '"}';
        var obj1 = JSON.parse(text);
        var obj3 = {};
        for (var attrname in obj1) {
            obj3[attrname] = obj1[attrname];
        }
        for (attrname in obj2) {
            obj3[attrname] = obj2[attrname];
        }
        return obj3;
    };
    ProductsPage.prototype.getProducts = function (id) {
        this.nav.push('ProductsPage', id);
    };
    ProductsPage.prototype.getProduct = function (id) {
        this.nav.push('ProductPage', id);
    };
    ProductsPage.prototype.getCart = function () {
        this.nav.push('CartPage');
    };
    ProductsPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.loadMore(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    ProductsPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results.length == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    ProductsPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    ProductsPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    ProductsPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id)
            .then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.updateToCart = function (id) {
        var _this = this;
        this.service.updateToCart(id)
            .then(function (results) { return _this.status = results; });
    };
    ProductsPage.prototype.addToCart = function (id, type) {
        var _this = this;
        if (type == 'variable') {
            this.nav.push('ProductPage', id);
        }
        else {
            var text = '{';
            var i;
            for (i = 0; i < this.options.length; i++) {
                var res = this.options[i].split(":");
                text += '"' + res[0] + '":"' + res[1] + '",';
            }
            text += '"product_id":"' + id + '",';
            text += '"quantity":"' + this.quantity + '"}';
            var obj = JSON.parse(text);
            this.service.addToCart(obj)
                .then(function (results) { return _this.updateCart(results); });
        }
    };
    ProductsPage.prototype.updateCart = function (a) {
    };
    ProductsPage.prototype.onInput = function ($event) {
        var _this = this;
        this.filter = "";
        this.filter = {};
        this.filter.page = 1;
        this.filter.search = $event.srcElement.value;
        //this.filter.order = "DESC";
        this.service.search(this.filter)
            .then(function (results) { return _this.handleSearchResults(results); });
    };
    ProductsPage.prototype.handleSearchResults = function (results) {
        this.products = results;
    };
    ProductsPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    ProductsPage.prototype.getFilter = function () {
        this.showFilters = true;
        this.has_more_items = false;
    };
    ProductsPage.prototype.cancel = function () {
        this.showFilters = false;
        this.has_more_items = true;
    };
    ProductsPage.prototype.clearAll = function () {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.min_price = undefined;
        this.filter.max_price = undefined;
        this.filter.name = undefined;
        this.filter.attribute = undefined;
        this.filter.attribute_term = undefined;
        this.service.load(this.filter)
            .then(function (results) { return _this.handleProducts(results); });
    };
    ProductsPage.prototype.cancelSort = function () {
        this.showSortFilters = false;
        this.has_more_items = true;
    };
    ProductsPage.prototype.getSortFilter = function () {
        this.showSortFilters = true;
        this.has_more_items = false;
    };
    ProductsPage.prototype.changeFilter = function (sort) {
        var _this = this;
        this.showSortFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        if (sort == 0) {
            this.filter.order = "asc";
            this.filter.orderby = "date";
        }
        if (sort == 1) {
            this.filter.order = "asc";
            this.filter.orderby = "title";
        }
        else if (sort == 2) {
            this.filter.order = "desc";
            this.filter.orderby = "title";
        }
        /*else if (sort == 3) {
            this.filter.order = "asc";
            this.filter.orderby= "_price";
        }
        else if (sort == 4) {
            this.filter.order = "desc";
            this.filter.orderby = "price";
        }*/
        this.service.load(this.filter)
            .then(function (results) { return _this.products = results; });
    };
    ProductsPage.prototype.applyFilter = function () {
        var _this = this;
        this.showFilters = false;
        this.has_more_items = true;
        this.filter.page = 1;
        this.filter.min_price = this.price.lower;
        this.filter.max_price = this.price.upper;
        this.products = null;
        this.service.load(this.filter)
            .then(function (results) { return _this.handleFilterResults(results); });
    };
    ProductsPage.prototype.handleFilterResults = function (results) {
        console.log(results);
        this.products = results;
    };
    ProductsPage.prototype.addToWishlist = function (id) {
        var _this = this;
        if (this.values.isLoggedIn) {
            this.values.wishlistId[id] = true;
            this.service.addToWishlist(id)
                .then(function (results) { return _this.update(results, id); });
        }
        else {
            this.functions.showAlert("Warning", "You must login to add product to wishlist");
        }
    };
    ProductsPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else {
        }
    };
    ProductsPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    ProductsPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    ProductsPage.prototype.getAttributeTerms = function (id) {
        var _this = this;
        if (!this.attributeTerms[id]) {
            this.service.attributeTerms(id)
                .then(function (results) { return _this.attributeTerms[id] = results; });
        }
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\products\products.html"*/'<ion-header no-border class="products-header">\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Product List" | translate}}\n    </ion-title>\n	<ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" style="min-width: 6vw;">   \n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="products"> \n\n\n    <ion-spinner *ngIf="!products" name="crescent">\n    </ion-spinner>\n\n    <div *ngIf="products" class="products-listing">\n\n\n    <div *ngIf="!products.length" class="no-products">\n    <h2>{{"No products found!" | translate}}</h2>\n    </div>\n\n      <div *ngIf="products.length">\n        <div *ngIf="values.listview">\n            <div class="item-list" *ngFor="let item of products">\n              <ion-item class="left-padding" no-lines>\n                  <ion-thumbnail item-left class="stock-list">\n                    <img tappable (click)="getProduct(item.id)" src="{{item.images[0].src}}">\n                    <button class="no-stock-button" ion-button *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                    </button>             \n                  </ion-thumbnail> \n\n                  <div class="product-name-top">                                 \n                  <div class="product-label">\n                  <div tappable (click)="getProduct(item.id)" class="max-lines">\n                      <h2 *ngIf="item.title">{{item.title}}\n                      </h2>\n                      <h2 *ngIf="item.name">{{item.name}}\n                      </h2>\n                  </div>\n                  </div>\n                  </div> \n\n                  <div>\n                    <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                    </span>\n                    <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n\n                  </div>\n                 \n              </ion-item>\n            </div>\n        </div>\n\n\n        <div *ngIf="!values.listview">\n          <div class="grid">\n            <ion-row class="row unlimited-items">\n              <ion-col class="col" *ngFor="let item of products">\n                <ion-card>\n                  <ion-card-content class="stock">\n\n                      <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)">\n                      <button ion-button color="danger" *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                      </button>\n\n                 \n\n                  \n                  </ion-card-content>\n\n                  <div tappable (click)="getProduct(item.id)" class="card-name">\n                  <ion-label *ngIf="item.title">{{item.title}}\n                  </ion-label>\n                  <ion-label *ngIf="item.name">{{item.name}}\n                  </ion-label>\n                  </div>\n                  <ion-label>\n                    <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                    </span>\n                    <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n\n                  </ion-label>\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n			<ion-infinite-scroll-content\n			 loadingSpinner="crescent"\n			 loadingText={{values.lan.GettingMoreElements}}>\n			</ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n  \n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\products\products.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_2__providers_service_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5__providers_service_functions__["a" /* Functions */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ })

});
//# sourceMappingURL=8.js.map