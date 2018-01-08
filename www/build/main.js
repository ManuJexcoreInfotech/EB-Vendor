webpackJsonp([18],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Home = (function () {
    function Home(nav, service, values, functions) {
        var _this = this;
        this.nav = nav;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.items = [];
        this.options = [];
        this.filter = {};
        this.filter.page = 1;
        this.total_product = 10;
        this.total_order = 10;
        this.service.getOrders('')
            .then(function (results) { return _this.handleMore1(results); });
        if (!values.isLoggedIn || !values.isVendor) {
            //this.nav.setRoot('AccountLogin');  
        }
    }
    Home.prototype.handleMore1 = function (results) {
        this.total_order = results.length;
    };
    Home.prototype.ngOnInit = function () {
        var _this = this;
        console.log("data home");
        this.service.load()
            .then(function (results) { return _this.handleService(results); });
    };
    Home.prototype.handleService = function (results) {
        var _this = this;
        this.service.getProducts()
            .then(function (results) { return _this.products = results; });
    };
    Home.prototype.getProduct = function (id) {
        this.nav.push('ProductPage', id);
    };
    Home.prototype.getId = function () {
        var i;
        if (this.options.length >= 1)
            var resa = this.options[0].split(":");
        if (this.options.length >= 2)
            var resb = this.options[1].split(":");
        if (this.options.length >= 1)
            for (i = 0; i < this.product.product.variations.length; i++) {
                if (this.product.product.variations[i].attributes[0].option == resa[1]) {
                    if (this.options.length == 1) {
                        break;
                    }
                    else if (this.product.product.variations[i].attributes[1].option == resb[1]) {
                        break;
                    }
                }
            }
    };
    Home.prototype.addToWishlist = function (id) {
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
    Home.prototype.update = function (results, id) {
        if (results.success == "Success") {
            this.values.wishlistId[id] = true;
        }
        else {
        }
    };
    Home.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    Home.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    Home.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.loadMore(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    Home.prototype.handleMore = function (results, infiniteScroll) {
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
    Home.prototype.tabs = function (tabs) {
        if (tabs == "total_order") {
            this.nav.setRoot('Orders');
        }
        else {
            this.nav.setRoot('ProductsPage');
        }
    };
    Home = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\home\home.html"*/'<ion-header no-border class="home-header">\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-title text-center>{{"Home" | translate}}\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only light class="has-icon icon-only has-badge" style="min-width: 10vw;">   \n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n<ion-content class="home"> \n                           \n    <ion-spinner *ngIf="!service?.banners" name="crescent">\n    </ion-spinner>\n \n\n  <div *ngIf="service?.categories" class="category-class">\n    <div class="shop-name">\n      <ion-item no-lines>\n        <b color="side-heading-color" text-uppercase>{{"Dashboard"| translate}}\n        </b>\n      </ion-item>\n    </div>\n    <div  class="main-categories">\n      <ion-row class="row unlimited-items">\n        <ion-col class="col widget bg-blue-600">\n          <a (click)="tabs(\'total_product\')">\n            <ion-card  class="widget bg-blue-600">\n				<ion-card-content >\n					<div class="counter-label margin-bottom-20"> \n						<div class="white">Total Products</div>\n						<div class="blue-200"></div>\n                    </div>\n					<div class="counter-number-group margin-bottom-15">\n						<span class="counter-number-related"></span>\n						<span class="counter-number white" >{{total_product}}</span>\n                    </div>\n				</ion-card-content>\n              <div text-center>\n                <ion-label text-uppercase [innerHTML]="">\n                </ion-label>\n              </div>\n            </ion-card>\n          </a>\n        </ion-col>\n		<ion-col class="col widget bg-red-600">\n          <a (click)="tabs(\'total_order\')">\n            <ion-card class="widget  bg-red-600">\n				<ion-card-content>\n					<div class="counter-label margin-bottom-20">\n						<div class="white">Total Orders</div>\n						<div class="blue-200"></div>\n                    </div>\n					<div class="counter-number-group margin-bottom-15">\n						<span class="counter-number-related"></span>\n						<span class="counter-number white" >{{total_order}}</span>\n                    </div>\n				</ion-card-content>\n              <div text-center>\n                <ion-label text-uppercase [innerHTML]="">\n                </ion-label>\n              </div>\n            </ion-card>\n          </a>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n    <ion-spinner *ngIf="!products && service?.banners" name="crescent">\n    </ion-spinner>\n\n\n      <!-- <div *ngIf="products" class="products-listing"> -->\n      <!-- <ion-item no-lines class="item-name"> -->\n        <!-- <ion-label>{{"Latest Products" | translate}} -->\n        <!-- </ion-label> -->\n      <!-- </ion-item> -->\n      <!-- <div class="grid"> -->\n        <!-- <ion-row class="row unlimited-items"> -->\n          <!-- <ion-col class="col" *ngFor="let item of products"> -->\n            <!-- <ion-card> -->\n              <!-- <ion-card-content class="stock"> -->\n\n                  <!-- <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)"> -->\n                  <!-- <button ion-button color="danger" *ngIf="!item.in_stock">{{"No Stock" | translate}} -->\n                  <!-- </button> -->\n\n              \n              <!-- <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon> -->\n              <!-- <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon> -->\n\n              \n              <!-- </ion-card-content> -->\n\n              <!-- <div tappable (click)="getProduct(item.id)" class="card-name"> -->\n              <!-- <ion-label *ngIf="item.title">{{item.title}} -->\n              <!-- </ion-label> -->\n              <!-- <ion-label *ngIf="item.name">{{item.name}} -->\n              <!-- </ion-label> -->\n              <!-- </div> -->\n\n              <!-- <ion-label> -->\n                 \n                <!-- <span class="price-delete" *ngIf="item.sale_price"> -->\n                <!-- <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}} -->\n                <!-- </del> -->\n                <!-- </span> -->\n                <!-- <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}} -->\n                <!-- </span> -->\n                <!-- <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}} -->\n                <!-- </span> -->\n              <!-- </ion-label> -->\n\n            <!-- </ion-card> -->\n          <!-- </ion-col> -->\n        <!-- </ion-row> -->\n      <!-- </div> -->\n\n      <!-- <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items"> -->\n        <!-- <ion-infinite-scroll-content -->\n         <!-- loadingSpinner="crescent" -->\n         <!-- loadingText={{values.lan.GettingMoreElements}}> -->\n        <!-- </ion-infinite-scroll-content> -->\n      <!-- </ion-infinite-scroll> -->\n\n        <!-- </div> -->\n\n\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], Home);
    return Home;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/address/address.module": [
		693,
		15
	],
	"../pages/account/edit-address-form/edit-address-form.module": [
		694,
		6
	],
	"../pages/account/forgotten/forgotten.module": [
		695,
		14
	],
	"../pages/account/login/login.module": [
		696,
		13
	],
	"../pages/account/order-details/order-details.module": [
		697,
		12
	],
	"../pages/account/orders/orders.module": [
		698,
		11
	],
	"../pages/account/register/register.module": [
		699,
		5
	],
	"../pages/account/wishlist/wishlist.module": [
		700,
		4
	],
	"../pages/add-product/add-product.module": [
		701,
		3
	],
	"../pages/cart/cart.module": [
		703,
		2
	],
	"../pages/checkout/billing-address-form/billing-address-form.module": [
		702,
		1
	],
	"../pages/checkout/order-summary/order-summary.module": [
		704,
		0
	],
	"../pages/checkout/terms-condition/terms-condition.module": [
		705,
		10
	],
	"../pages/edit-product/edit-product.module": [
		706,
		9
	],
	"../pages/home/home.module": [
		707,
		17
	],
	"../pages/product/product.module": [
		708,
		7
	],
	"../pages/products/products.module": [
		709,
		8
	],
	"../pages/search/search.module": [
		710,
		16
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 217;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Values; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Values = (function () {
    function Values() {
        this.count = 0;
        this.filter = 10;
        this.isVendor = false;
        this.isLoggedIn = false;
        this.customerName = "";
        this.customerEmail = "";
        this.customerFName = "";
        this.customerLName = "";
        this.customerId = null;
        this.productDiD = null;
        this.listview = false;
        this.cart = [];
        this.filterUpdate = false;
        this.currency = "USD";
        this.dir = 'left';
        this.wishlistId = [];
        this.quantity = 2;
        this.attributeTerms = [];
        this.setNavigation = false;
        this.filter = {};
        this.data = {};
        this.logoutUrl = "";
        this.avatar = "assets/image/shop-icon.jpg";
        this.lan = { "About": "About", "Account": "Account", "AccountInfo": "Account Information", "AccountMyDownloadableProducts": "My Downloadable Products", "AccountMyDownloadableProductsDate": "Date", "AccountMyDownloadableProductsOpen": "Open", "AccountMyDownloadableProductsOrder": "Order", "AccountMyDownloadableProductsRemainingDownloads": "Remaining downloads", "AccountMyDownloadableProductsStatus": "Status", "AccountSettings": "Account Settings", "AccountSettingsCancel": "Home", "Add": "Add", "AddAddressFromContacts": "Add Address from Contacts", "AddBillingAddressText": "Add a billing address", "AddCustomText": "Add Custom", "AddFilterTitle": "Filter", "AddNewAddress": "Add New Address", "AddNewEntry": "Add", "AddShippingAddressText": "Add a shipping address", "AddToCart": "Add to Cart", "AddToCartTitle": "Add to Cart", "AddToWishlistTitle": "Add to Wishlist", "AddingProductToCartProgressTitle": "Adding Product to Cart...", "AddingProductToWishListProgressTitle": "Adding Product to WishList...", "AdditionalInfo": "Additional Info", "AddressBook": "Address Book", "AddressBookIsEmpty": "Address book is empty", "AddressBookUpdatedMessage": "Address Book Updated", "AddressInfo": "Address Info", "AgreementsButtonTitle": "Read the Terms and Conditions", "AgreementsCheckboxTitle": "I agree to the Terms and Conditions", "AgreementsDescription": "You must read and agree to the Terms and Conditions before placing your order.", "AllImages": "All Images", "AlsoLikeLbl": "You may also like", "Amount": "Amount", "AmountIn": "Amount in %@", "Amounts": "Amounts", "AppIdNotActivated": "The application is currently inactive.\\nPlease try again later.", "ApplicationCode": "App code", "AppliedFiltersLabel": "FILTERS APPLIED", "Apply": "Apply", "ApplyingCouponProgressTitle": "Applying Coupon Code", "ApplyingGiftCartProgressTitle": "Applying Gift Card %@", "AsGuestText": "as Guest", "AsLowAsExcludingTaxLabel": "As low as excl. tax", "AsLowAsIncludingTaxLabel": "As low as incl. tax", "AsLowAsLabel": "As low as", "AuthenticationToSocialClientFailedAlertMessage": "Authentication to %@ did failed...", "AverageRating": "Average Rating", "Back": "Back", "BackFromInfo": "Back", "BiggerThanMaxMessage": "The value should not be greater than %.2f!", "BillingAddressTitle": "Billing address", "BillingCheckout": "Billing", "BundleProductsSectionTitle": "Bundle Products", "BuyMoreAndSave": "Buy More & Save", "Cancel": "Cancel", "CancelButtonTitle": "Cancel", "CancelingPayPalMECLProgressTitle": "Canceling PayPal ...", "Cart": "Shopping Cart", "CartBtn": "Cart", "CartIsEmpty": "The cart is empty", "CartRegisteredMessage": "Offline cart stored on server", "CartRegisteredTitle": "", "CartRegistrationFailedMessage": "Storage of offline cart on server failed. Please retry later", "CartRegistrationFailedTitle": "Error", "CartUpdatedMessageTitle": "Cart Updated", "CheckGiftCardLabel": "Check Gift Card", "CheckingCartProgressTitle": "Checking Gift Card %@", "CheckoutAsGuestButtonTitle": "Checkout as Guest", "CheckoutButtonFullTitle": "Proceed to Checkout", "CheckoutButtonTitle": "Checkout", "CheckoutInitializationProgressTitle": "Checkout initialization...", "CheckoutInitializedText": "Checkout initialized!", "CheckoutTitle": "Checkout", "ChooseAmount": "Choose amount", "City": "City", "Clear": "Clear", "Close": "Close", "CommitCartChangesAlertText": "You have uncommitted actions. Commit?", "CommittingUpdatesProgressTitle": "Commiting updates...", "ConfigurationLoadingError": "There is an error in loading an app's configuration", "ConfigureTitle": "Select Options", "Connecting": "Connecting", "ConnectionErrorMessage": "Connection Error\\nWe're sorry. The app is experiencing connection problems. The app requires a network connection to operate.", "ConnectionLostMessage": "Connection Error\\nWe're sorry. The app is experiencing connection problems. The app requires a network connection to operate.", "ContactsAreEmpty": "ContactsAreEmpty", "Continue": "Continue", "Copyright": "Copyright: Magento (c) 2010", "Country": "Country", "CountrySelect": "Countries", "CreateAccount": "Create an Account", "CreateAccountButtonTitle": "Create Account", "CreateAccountLabel": "Create Account", "CreateAccountSectionHeader": "New to Our Store?", "CreateAnAccountLabel": "Create an Account", "CrossSellsText": "Cross Sells", "CrossellTitle": "You may also like", "CustomAmount": "Custom amount", "DateText": "Date", "DateTitle": "Date:", "Delete": "Delete", "DeleteItemMessage": "Are you sure you want to remove this item?", "DeleteRecordButtonTitle": "Delete", "Description": "Description", "DiscountButtonTitle": "Apply", "DiscountLabel": "Discount:", "DiscountTextFieldPlaceholder": "Enter discount code if any", "DiscoutnButtonTitle": "Apply", "DoneTitle": "Done", "DownloadableProductLinkSample": "Sample", "DownloadableProductsUpdatedMessage": "Downloadable Products Updated", "DownloadsLimitTitle": "Downloads limit:", "Edit": "Edit", "EditAccountButtonTitle": "Save", "EditAddressBookRecord": "Edit Address", "EditFilterTitle": "Edit filter", "EditMailList": "Edit Mail List", "EditNote": "Edit note", "Email": "E-mail", "EmailCopyLabel": "Cc:", "EmailCountMaxExceed": "Too many recipients have been set.  Max amount of recipients is:", "EmailLabel": "To:", "EmailThemeLabel": "Subject:", "EmptyCategoryMessage": "Sorry, there are no items in this category.", "EmptyDiscount": "Enter discount code first.", "EmptyDiscountCodeAlertMessage": "Discount code is empty", "EmptyEmails": "Please enter at least one email recipient", "EmptyGalleryMessage": "This product has no images.", "EmptyGiftCardValueMessage": "Please, specify gift card amount!", "EmptyMyDownloadableViewMessage": "List of downloadable products is empty", "EmptyStoreCreditHistoryMessage": "There is no store credit history!", "EmptyViewMessage": "There are no items here", "EmptyWishlistViewMessage": "Wishlist is empty.", "EnterEmailText": "Enter e-mail", "EnterGiftCardPromo": "Enter giftcard promo code here", "EnterNameText": "Enter Name", "EnterText": "Enter text", "Error": "Error", "ErrorEmailMessage1": "Email is not specified", "ErrorEmailMessage2": "Email is not correct", "ErrorLoadingConfigurationFormat": "Error Loading Configuration Format", "ErrorPasswordMessage1": "Password is not specified", "ErrorRetrievingData": "There is an error in retrieving the data. Please try again later", "ExcludingTaxLabel": "", "#C72D46": "#C72D46", "#C72D46PostFailedMessage": "#C72D46 post failed...", "#C72D46PostSuccess": "Successfully posted to #C72D46", "FieldRequiredToBeFilledDialogMessage": "The %s field should be filled.", "Filters": "Filters", "FixedAmounts": "Fixed amounts", "ForgotPassword": "Forgot Password", "ForgotPasswordButtonTitle": "Forgot Password?", "ForgotPasswordSectionHeader": "Forgot your password?", "Form": "Form", "FormCellTitle": "Form", "FromExcludingTaxLabel": "From excl. tax", "FromIncludingTaxLabel": "From incl. tax", "FullDescription": "Full Description", "FunctionalityIsDisabledInOfflineModeAlertMessage": "This functionality disabled in offline mode", "Gallery": "Gallery", "GetMoreElements": "Load more items", "GettingMoreElements": "Loading more items...", "GiftCardCodeCheck": "Check", "GiftCardCodeRedeem": "Redeem", "GiftCardPromo": "Giftcard promo code", "GiftCartRedeemedMessageText": "Check Gift Card Promo Redeemed", "Giftcards": "Enter the gift card code", "GuestLogInMessage": "Checkout as Guest or Register", "Home": "Home", "IAgree": "I Agree", "InStock": "In Stock", "IncludingTaxLabel": "Incl. tax", "IncorrectDecimalValueDialogMessage": "You have entered an incorrect decimal value in the custom amount field. Provide a valid value.", "InitializationPayPalMECLFailedMessage": "Initialization of the PayPal checkout failed!", "InitializationPayPalMECLProgressTitle": "Initialization PayPal ...", "InvalidEmailDialogMessage": "Email address you provided is not valid. Please provide a valid one.", "InvalidResponse": "The server responded with invalid data.", "Item": "Item", "ItemOptionsSectionTitle": "Item Options", "LastOrders": "My Orders", "LastUpdatePullDownText": "Last update: %@", "LessThatMinMessage": "The value should not be less than %.2f!", "LindedIn": "LindedIn", "LinkTitle": "Link:", "LinkedIn": "LinkedIn", "LinkedInAuthorization": "LinkedIn Authorization", "LinkedInAutorization": "LinkedIn Autorization", "LinkedInPostSuccess": "Successfully posted to Linkedin", "LinkedInTitle": "LinkedIn", "LinkedinPostFailedMessage": "Linkedin post failed...", "LoadingAccountFormProgressTitle": "Loading Account Form...", "LoadingAddressBookProgressTitle": "Loading Address Book...", "LoadingAddressFormProgressTitle": "Loading Address Form...", "LoadingCMSPageProgtessTitle": "Loading CMS page ...", "LoadingCartProgressTitle": "Loading Cart...", "LoadingCategoryProgressTitle": "Loading category ...", "LoadingDownloadableProductsProgressTitle": "Loading My Downloadable Products...", "LoadingGalleryProgressTitle": "Loading Gallery...", "LoadingLoginFormProgressTitle": "Loading Login Form...", "LoadingMoreItems": "", "LoadingOrderDetailsProgressTitle": "Loading Order Details", "LoadingOrdersListProgressTitle": "Loading Orders List...", "LoadingProductOptionsProgressTitle": "Loading Product Options...", "LoadingProductProgressTitle": "Loading product ...", "LoadingProductsProgressTitle": "Loading Products...", "LoadingProgressTitle": "Loading %@...", "LoadingRegistrationFormProgressTitle": "Loading Registration Form...", "LoadingRestorePasswordFormProgressTitle": "Loading Restore Password Form...", "LoadingShippindPayPalMECLProgressTitle": "Loading shipping methods ...", "LoadingStoreCreditProgressTitle": "Loading Store Credit...", "LoadingText": "Loading...", "LoadingWishListProgressTitle": "Loading WishList...", "LoadingWriteReviewFormProgressTitle": "Loading Write Review Form...", "LogIn": "Log In", "LogInButtonTitle": "Log into Account", "LogInEmailLabel": "Email", "LogInMessage": "You must login first", "LogInMessageTitle": "LogInMessageTitle", "LogInPasswordLabel": "Password", "LogInSectionHeader": "Log into your account", "LogOut": "Log Out", "LogOutButtonTitle": "Log out Account", "MailToText": "To:", "MaxLengthMessage": "The max length of the field \"%@\" is %d!", "Maximum": "Maximum: %.2f", "MergeButtonTitle": "Merge", "MessageText": "Message", "MessageTwitterTooLong": "Message too long, please use 140 symbols", "Minimize": "Minimize", "Minimum": "Minimum: %.2f", "MoreInfo": "More Info", "MyAccount": "My Account", "NameText": "Name", "NewAddressBookRecord": "Add New Address", "No": "No", "NoInternetConnectionAlertTitle": "No internet connection. Retry later ...", "NoLastOrders": "You have placed no orders.", "NoProductsFoundAlertTitle": "No products found. Please retry with other term", "NoProductsMatchingSelection": "", "NoSupportForOrderDetails": "Currently, the system does not support the viewing of the order detail.", "NotCorrectField": "%@ is not correct", "NotEmail": "The following email(s) are either mistyped or have incorrect format. Check them and try again:\\n", "NotLoggedInAlertMessage": "You are not logged in", "NotZeroCustomValueDialogMessage": "The custom amount value should be higher than 0.", "NothingSelected": "At least one option should be selected", "Notice": "Notice", "OK": "OK", "OpenAmountPriceBoundariesText": "Minimum %@, maximum %@", "Options": "Options", "OptionsTitle": "Options", "OrderCanceledAlertMessage": "You canceled your order. Touch \"Pay with PayPal\" to try again.", "OrderCanceledPayPalMECLMessage": "Order canceled", "OrderDetailsUpdatedMessage": "Order Details Updated", "OrderFailedAlertMessage": "Your order failed. Touch \"Pay with PayPal\" to try again.", "OrderFailedMessage": "Order failed", "OrderHeader": "Order #", "OrderIDTitle": "Order ID:", "OrderInfoTitle": "Order Info", "OrderListUpdatedMessage": "Order List Updated", "OrderNumberText": "Order Number", "OrderReviewCheckout": "Order Review", "OrderReviewScreenTitle": "Order Review", "OrderedItemsText": "Ordered Items", "OtherAmount": "Other amount", "OutOfStock": "Out of Stock", "ParsingError": "Error while reading remote data", "PasswordLength": "The minimum password length is 6", "PayPalCheckout": "PayPal Checkout", "PayPalText": "PayPal", "PaymentBridgeServiceErrorMessage": "Unknown Payment Bridge Error", "PaymentMethodSectionTitle": "Payment Method", "PaymentMethodSelectionWarning": "Please select payment method to cover a quote", "PaymentMethodTitle": "Payment method", "PaymentMethodsCheckout": "Payment Information", "PlaceOrder": "Place Order", "PlacingOrderProgressTitle": "Placing order ...", "PostToLinkedIn": "Share on LinkedIn", "PostToTwitter": "Share on Twitter", "PostToWallProduct": "Post this product to your wall", "PostingEmailProgressTitle": "Posting to e-mails", "Price": "Price", "PriceExcludingTax": "Price excluding tax", "PriceIncludingTax": "Price including tax", "Product": "Product", "ProductAddedAlertMessage": "Product succesfully added to cart", "ProductAddedAlertTitle": "Product added", "ProductAddedToCartLabelTitle": "Product Added to Cart", "ProductAddedToWishlistLabelTitle": "Product Added to Wishlist", "ProductGalleryUpdatedMessage": "Product Gallery Updated", "ProductOptionsUpdatedMessage": "Product Options Updated", "ProductOutOfStockAlertMessage": "Product is out of stock", "ProductOutOfStockAlertTitle": "", "ProductPaymentCompleteLabelTitle": "Success", "ProductPaymentCompleteleLabelTitle": "Success", "ProductRemovedFromWishlistLabelTitle": "Product Removed From Wishlist", "ProductReviewsUpdatedMessage": "Product Reviews Updated", "ProductUpdatedMessage": "Product Updated", "ProductsText": "Products", "PullDownToUpdatePullDownText": "Pull Down To Update..", "Qty": "Qty", "Quantity": "Quantity", "QuantityTitle": "Qty:", "RatingReviewsNone": "No Ratings", "RatingReviewsTitle": "Ratings and Reviews", "RecoverPasswordButtonTitle": "Recover", "RedemingGiftCartProgressTitle": "Redeeming Gift Card %@", "RegionFieldLabel": "State/Province", "RegionSelect": "Regions", "RegisterText": "Register", "RegisteringOfflineCartProgressTitle": "Registering cart ...", "RegisteringUserProgressTitle": "Registering user ...", "RegularLabel": "Regular", "RegularPriceLabel": "Unit Price:", "RelatedProductLabel": "You may also like", "ReleaseToUpdatePullDownText": "Release To Update...", "RemoveFromWishlistTitle": "Remove", "RemoveGiftCardLabel": "Remove", "RemoveText": "Remove", "RemovingAddressProgressTitle": "Remove Address...", "RemovingCouponProgressTitle": "Removing Coupon...", "RemovingGiftCartProgressTitle": "Removing Gift Card...", "RemovingProductFromWishListProgressTitle": "Removing Product from WishList...", "RemovingProgressTitle": "Removing %@...", "RemovingStoreCreditProgressTitle": "Removing Store Credit...", "RequiredFieldMessage": "field is required", "RequiredFieldTitle": "required", "RequiredLabel": "* - field is required", "Revert": "Revert", "RevertDiscountButtonTitle": "Revert Discount", "SamplesButtonTitle": "Samples", "Save": "Save", "SavingAddressProgressTitle": "Saving Address...", "SavingChangesProgressTitle": "Saving changes ...", "SavingMethodsProgressTitle": "Saving shipping methods ...", "SavingShippingAddressProgressTitle": "Saving shipping address ...", "Search": "Search", "SearchUpdatedMessage": "Search Updated", "SearchingProgressTitle": "Searching for %@...", "SeeAllText": "See all", "SelectA": "Select a", "SelectBillingAddressTitle": "Select a Billing Address", "SelectBillingMethodTitle": "Select a Billing Address", "SelectBillingMethodTitleNoAddress": "", "SelectBoxFormat": "Select %@", "SelectFromAddressBook": "Select from Address Book", "SelectLinks": "Select Links", "SelectOptions": "Select Options", "SelectPaymentMethod": "Select Payment Method", "SelectShippingAddressTitle": "Select a Shipping Address", "SelectShippingMethod": "Select shipping method", "SelectShippingMethodTitle": "Select a Shipping Address", "Send": "Send", "SendEmail": "Send", "SendEmailTitle": "Tell a Friend", "SendTitle": "Send", "SendingEmailFailedMessage": "Sending e-mail failed...", "SetEmailMessage": "Please set email", "SettedText": "Set", "ShakeToResetFilters": "Shake device to reset the filter", "Share": "Share", "ShareTitle": "Share", "ShippingAddressTitle": "Shipping address", "ShippingCheckout": "Shipping", "ShippingMethodTitle": "Shipping method", "ShippingMethodsCheckout": "Ship method", "Shop": "Shop", "ShopAll": "Shop All", "ShopUpdatedMessageTitle": "Shop Updated", "ShorteningUrlClientSideError": "The shortening service returned status code %d indicating a client side error.", "ShorteningUrlError": "Error during shortening url", "ShorteningUrlServerSideError": "The shortening service returned status code %d indicating a server side error.", "ShowPasswordLabelTitle": "Show Password", "SignIn": "Sign In", "SignOutProgressTitle": "Signing Out ...", "SigningInProgressTitle": "Signing In...", "Sku": "Product SKU", "SortByLabel": "SORT BY:", "SpecialExcludingTaxLabel": "Special", "SpecialIncludingTaxLabel": "Incl. tax", "SpecifyPaymentMethod": "Please specify payment method", "SpecifyShippingMethod": "Please specify shipping method", "StandardCheckout": "Standard Checkout", "StartingAtExcludingTaxLabel": "Starting at excl. tax", "StartingAtIncludingTaxLabel": "Starting at incl. tax", "StatusText": "Status", "StoreCredit": "Store credit", "StoreCreditBalanceHeader": "Balance", "StoreCreditInfoUpdatedMessage": "Store Credit Info Updated", "StrAddress": "Address", "SubmitReview": "Submit Review", "SubmittingReviewProgressTitle": "Submitting Review...", "Subtotal": "Subtotal", "SubtotalExcludingTax": "Subtotal excluding tax", "SubtotalExcludingTaxLabel": "Subtotal:", "SubtotalIncludingTax": "Subtotal including tax", "SubtotalIncludingTaxLabel": "Subtotal incl. tax:", "SubtotalRegularPriceLabel": "Subtotal:", "SuccessOrderID": "Order ID", "SwipeToRevealOptions": "Swipe a product to reveal more options", "Telephone": "Telephone", "TellAFriendButtonTitle": "Tell a Friend", "TellAFriendTitle": "Tell a Friend", "TermsAndConditions": "Terms And Conditions", "ThereAreNoItemsInYourCart": "There are no items in your cart", "ThereIsNoAddressesForThisContact": "There is no addresses for this contact", "ToExcludingTaxLabel": "To excl. tax", "ToHighCustomValueDialogMessage": "The custom amount value should not be higher than %s.", "ToIncludingTaxLabel": "To incl. tax", "ToLowCustomValueDialogMessage": "The custom amount value should not be lower than %s.", "TooBigValueMessage": "The value is too big!", "TooLongTextDialogMessage": "The length of the text in the %s field is too big. Please shorten the text.", "TotalsText": "Totals", "TouchAndHoldToDeleteProduct": "Touch and hold a product to delete from shopping cart", "TouchAndHoldToRevealOptions": "Touch and hold a product to reveal more options", "TryAgain": "Try Again", "Twitter": "Twitter", "TwitterAuthorization": "Twitter Authorization", "TwitterAutorization": "Twitter Autorization", "TwitterPostFailedMessage": "Twitter post failed...", "TwitterPostSuccess": "Your tweet has been sent. Thanks for sharing this product on Twitter", "TypeTitle": "Type", "URLOrCodeNotSet": "Either remote URL or application code was not set. Please make sure you filled all the values and try again.", "UnknownException": "Unknown error ocured. Please retry later", "UpdateCommentErrorMessage": "Update Comment Error", "UpdatingCartProgressTitle": "Updating Cart...", "UpdatingPullDownText": "Updating ...", "UseBillingAddress": "Use Billing Address", "UseBillingAddressForShipping": "Use billing address for shipping", "Version": "Version", "ViewCartButtonTitle": "View Cart", "ViewDetailsTitle": "View Details", "ViewGalleryTitle": "View Gallery", "ViewWishlistButtonTitle": "View Wishlist", "WaitTitle": "Please wait...", "WebStoreAvailableOnly": "Product only available on the website.", "WebsiteRestrictionEnabledMessage": "Website is offline", "WishListUpdatedMessage": "WishList Updated", "Wishlist": "My Wishlist", "WishlistPopupTitle": "Add To Wishlist", "WriteAReview": "Write a review", "WriteReviewTitle": "Write a Review", "WrongEmailFormat": "Wrong email format", "XMLConnectURL": "URL", "Yes": "Yes", "iPhoneAddressBookNavigationBarTitle": "Address Book", "labelPayWithCheckoutTitle": "OR, Pay with Standard Checkout", "qtyLabelTitle": "Quantity:", "buyNow": "Buy Now", "Categories": "Categories" };
    }
    Values.prototype.updateCart = function (crt) {
        this.cartItem = crt.cart_contents;
        this.cart = [];
        this.count = 0;
        for (var item in crt.cart_contents) {
            this.cart[crt.cart_contents[item].product_id] = parseInt(crt.cart_contents[item].quantity);
            this.count += parseInt(crt.cart_contents[item].quantity);
        }
    };
    Values.prototype.updateCartTwo = function (crt) {
        this.cart = [];
        this.count = 0;
        this.cartItem = crt;
        for (var item in crt) {
            this.cart[crt[item].product_id] = parseInt(crt[item].quantity);
            this.count += parseInt(crt[item].quantity);
        }
    };
    Values = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Values);
    return Values;
}());

//# sourceMappingURL=values.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var SearchService = (function () {
    function SearchService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.url = this.config.url;
    }
    /*load() {
        if (this.search) {
            return Promise.resolve(this.search);
        }
        return new Promise(resolve => {
            var params = new URLSearchParams();
            params.append("term", "ele");
            this.http.get(this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-json_search_products', params).map(res => res.json())
                .subscribe(data => {
                    this.search = data;
                    resolve(this.search);
                });
        });
    }*/
    SearchService.prototype.getSearch = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', filter)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    SearchService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    SearchService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    SearchService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]])
    ], SearchService);
    return SearchService;
}());

//# sourceMappingURL=search-service.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var CheckoutService = (function () {
    function CheckoutService(http, config) {
        this.http = http;
        this.config = config;
        this.url = this.config.url;
    }
    CheckoutService.prototype.updateOrderReview = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("security", form.nonce.update_order_review_nonce);
        params.append("payment_method", form.payment_method);
        params.append("address", form.billing_address_1);
        params.append("address_2", form.billing_address_2);
        params.append("city", form.billing_city);
        params.append("postcode", form.billing_postcode);
        params.append("country", form.billing_country);
        params.append("state", form.billing_state);
        params.append("s_address", form.billing_address_1);
        params.append("s_address_2", form.billing_address_2);
        params.append("s_city", form.billing_city);
        params.append("s_postcode", form.billing_postcode);
        params.append("s_country", form.billing_country);
        params.append("s_state", form.billing_state);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkout = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/checkout?wc-ajax=checkout', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.checkouttest = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", "Name hajsk");
        params.append("billing_last_name", "Name hajsk");
        params.append("billing_company", "Name hajsk");
        params.append("billing_email", "test@gmail.com");
        params.append("billing_phone", "237648372");
        params.append("billing_address_1", "form billing_address_1");
        params.append("billing_address_2", "dsjfh sdjfhsdkj");
        params.append("billing_city", "fsdfdjgif");
        params.append("billing_postcode", "560048");
        params.append("billing_country", "IN");
        params.append("billing_state", "KA");
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        params.append("_wp_http_referer", this.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/checkout?wc-ajax=checkout', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveBillingAddress = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.nonce.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("createaccount", form.billing_address_1);
        params.append("account_password", form.billing_address_2);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", "544bcd0d1d");
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/checkout?wc-ajax=checkout', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.saveShippingAddress = function (shipping) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping[firstname]", shipping.firstname);
        params.append("shipping[lastname]", shipping.lastname);
        params.append("shipping[company]", shipping.company);
        params.append("shipping[street][0]", shipping.street1);
        params.append("shipping[street][1]", shipping.street2);
        params.append("shipping[city]", shipping.city);
        params.append("shipping[postcode]", shipping.postcode);
        params.append("shipping[country_id]", shipping.country_id);
        params.append("shipping[state_id]", shipping.state_id);
        if (shipping.entity_id) {
            params.append("shipping_address_id", shipping.entity_id);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getShippingPayment = function () {
        var _this = this;
        if (this.shippingMethods && this.paymentMethods) {
            return Promise.resolve(this.shippingMethods);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment').map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingMethods = data[0];
                _this.paymentMethods = data[1];
                resolve(_this.shippingMethods);
            });
        });
    };
    CheckoutService.prototype.saveMethods = function (shippingMethod, payment) {
        var _this = this;
        var shipping = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        shipping.append("shipping_method", shippingMethod);
        for (var param in payment) {
            params.set("payment[" + param + "]", payment[param]);
        }
        return new Promise(function (resolve) {
            __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["Observable"].forkJoin(_this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-payment', params).map(function (res) { return res.json(); })).subscribe(function (data) {
                _this.shippingStatus = data[0];
                _this.paymentStatus = data[1];
                resolve(_this.shippingStatus);
            });
        });
    };
    CheckoutService.prototype.getTime = function (date) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_slots_on_date");
        params.append("date", date);
        console.log(params);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getDate = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("action", "iconic_wds_get_upcoming_bookable_dates");
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                console.log(data);
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.login = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", form.username);
        params.append("password", form.password);
        params.append("_wpnonce", form.checkout_login);
        params.append("login", "Login");
        params.append("_wp_http_referer", "/checkout/");
        params.append("redirect", this.config.url + "/wp-admin/admin-ajax.php?action=mstoreapp-userdata");
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/checkout/', params)
                .subscribe(function (data) {
                _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form').map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.status = data;
                    resolve(_this.status);
                });
            });
        });
    };
    CheckoutService.prototype.submitCoupon = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", form.coupon_code);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getStripeToken = function (form) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("key", form.payment.stripe.publishable_key);
        params.append("payment_user_agent", 'stripe.js/6ea8d55');
        params.append("card[number]", form.stripe_number);
        params.append("card[cvc]", form.stripe_code);
        params.append("card[exp_month]", form.stripe_exp_month);
        params.append("card[exp_year]", form.stripe_exp_year);
        params.append("card[name]", form.billing_first_name + form.billing_last_name);
        params.append("card[address_line1]", form.billing_address_1);
        params.append("card[address_line2]", form.billing_address_2);
        params.append("card[address_state]", form.billing_state);
        params.append("card[address_city]", form.billing_city);
        params.append("card[address_zip]", form.billing_postcode);
        params.append("card[address_country]", form.billing_country);
        return new Promise(function (resolve) {
            _this.http.post('https://api.stripe.com/v1/tokens', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            }, function (err) { return resolve(err.json()); });
        });
    };
    CheckoutService.prototype.stripePlaceOrder = function (form, token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("billing_first_name", form.billing_first_name);
        params.append("billing_last_name", form.billing_last_name);
        params.append("billing_company", form.billing_company);
        params.append("billing_email", form.billing_email);
        params.append("billing_phone", form.billing_phone);
        params.append("billing_address_1", form.billing_address_1);
        params.append("billing_address_2", form.billing_address_2);
        params.append("billing_city", form.billing_city);
        params.append("billing_postcode", form.billing_postcode);
        params.append("billing_country", form.billing_country);
        params.append("billing_state", form.billing_state);
        params.append("shipping_first_name", form.shipping_first_name);
        params.append("shipping_last_name", form.shipping_last_name);
        params.append("shipping_company", form.shipping_company);
        params.append("shipping_email", form.shipping_email);
        params.append("shipping_phone", form.shipping_phone);
        params.append("shipping_address_1", form.shipping_address_1);
        params.append("shipping_address_2", form.shipping_address_2);
        params.append("shipping_city", form.shipping_city);
        params.append("shipping_postcode", form.shipping_postcode);
        params.append("shipping_country", form.shipping_country);
        params.append("shipping_state", form.shipping_state);
        params.append("payment_method", form.payment_method);
        params.append("_wpnonce", form.checkout_nonce);
        if (form.terms) {
            params.append("terms", 'on');
            params.append("terms-field", '1');
        }
        params.append("wc-stripe-payment-token", 'new');
        params.append("stripe_token", token.id);
        params.append("_wp_http_referer", this.url + '/checkout?wc-ajax=update_order_review');
        if (form.password) {
            params.append("createaccount", form.register);
            params.append("account_password", form.password);
        }
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/checkout?wc-ajax=checkout', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CheckoutService.prototype.getOrderSummary = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/orders/' + id + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orderSummary = data;
                resolve(_this.orderSummary);
            });
        });
    };
    CheckoutService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */]])
    ], CheckoutService);
    return CheckoutService;
}());

//# sourceMappingURL=checkout-service.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WishlistService = (function () {
    function WishlistService(http, config, values) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.url = this.config.url;
    }
    WishlistService.prototype.loadWishlist = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.wishlist = data;
                resolve(_this.wishlist);
            });
        });
    };
    WishlistService.prototype.addToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("quantity", "1");
        params.append("product_id", id);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cartData = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(data.cart);
                resolve(_this.cartData);
            });
        });
    };
    WishlistService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */]])
    ], WishlistService);
    return WishlistService;
}());

//# sourceMappingURL=wishlist-service.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CartService = (function () {
    function CartService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
        this.url = this.config.url;
    }
    CartService.prototype.loadCart = function () {
        var _this = this;
        //this.presentLoading(this.values.lan.WaitTitle);
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                // this.dismissLoading();
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteItem = function (item_key) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_cart_item&item_key=' + item_key).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.checkout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_checkout_form').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.billing = data;
                _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_order_review').map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    resolve(data);
                });
                resolve(_this.billing);
            });
        });
    };
    CartService.prototype.addToCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity += 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] += 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/cart/', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.deleteFromCart = function (id, key) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
            this.values.cartItem[key].quantity = 0;
        }
        else {
            this.values.cartItem[key].quantity -= 1;
        }
        ;
        if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
            this.values.cart[id] = 0;
        }
        else {
            this.values.cart[id] -= 1;
        }
        ;
        params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
        params.set('_wpnonce', this.values.cartNonce);
        params.set('_wp_http_referer', this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart');
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/cart/', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.submitCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon_code", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-apply_coupon', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.removeCoupon = function (coupon) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("coupon", coupon);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_coupon', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CartService.prototype.updateShipping = function (method) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("shipping_method[0]", method);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-update_shipping_method', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.cart = data;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCart(_this.cart);
                resolve(_this.cart);
            });
        });
    };
    CartService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CartService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CartService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]])
    ], CartService);
    return CartService;
}());

//# sourceMappingURL=cart-service.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var ProductService = (function () {
    function ProductService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
        this.url = this.config.url;
    }
    ProductService.prototype.getProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products/' + id + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.product = data;
                resolve(_this.product);
            });
        });
    };
    ProductService.prototype.getReviews = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products/' + id + '/reviews/' + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.reviews = data;
                resolve(_this.reviews);
            });
        });
    };
    ProductService.prototype.getRelatedProducts = function (relatedProducts) {
        var _this = this;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        searchParams.set('related_ids', relatedProducts);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-related_products', searchParams).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.related = data;
                resolve(_this.related);
            });
        });
    };
    ProductService.prototype.getUpsellProducts = function (upsellProducts) {
        var _this = this;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        searchParams.set('upsell_ids', upsellProducts);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-upsell_products', searchParams).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.upsell = data;
                resolve(_this.upsell);
            });
        });
    };
    ProductService.prototype.getCrossSellProducts = function (crossSellProducts) {
        var _this = this;
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        searchParams.set('cross_sell_ids', crossSellProducts);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cross_sell_products', searchParams).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.crossSell = data;
                resolve(_this.crossSell);
            });
        });
    };
    ProductService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
                console.log(param);
                console.log(params[param]);
            }
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    ProductService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    ProductService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    ProductService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */]])
    ], ProductService);
    return ProductService;
}());

//# sourceMappingURL=product-service.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(31);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var CategoryService = (function () {
    function CategoryService(http, config, values, loadingController) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingController = loadingController;
        this.url = this.config.url;
    }
    CategoryService.prototype.load = function (params) {
        var _this = this;
        //this.presentLoading(this.values.lan.WaitTitle);
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', params)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                //this.dismissLoading();
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', filter)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToCart = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (var param in params) {
                searchParams.set(param, params[param]);
            }
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_to_cart', searchParams, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data.cart;
                _this.values.cartNonce = data.cart_nonce;
                _this.values.updateCartTwo(_this.status);
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteFromCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count -= 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity -= 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] -= 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.updateToCart = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        for (var key in this.values.cartItem) {
            if (this.values.cartItem[key].product_id == id) {
                this.values.count += 1;
                if (this.values.cartItem[key].quantity != undefined && this.values.cartItem[key].quantity == 0) {
                    this.values.cartItem[key].quantity = 0;
                }
                else {
                    this.values.cartItem[key].quantity += 1;
                }
                ;
                if (this.values.cart[id] != undefined && this.values.cart[id] == 0) {
                    this.values.cart[id] = 0;
                }
                else {
                    this.values.cart[id] += 1;
                }
                ;
                params.set('cart[' + key + '][qty]', this.values.cartItem[key].quantity);
            }
        }
        params.set('_wpnonce', this.values.cartNonce);
        params.set('update_cart', 'Update Cart');
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/cart/', params)
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.presentLoading = function (text) {
        this.loader = this.loadingController.create({
            content: text,
        });
        this.loader.present();
    };
    CategoryService.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    CategoryService.prototype.search = function (params) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products?', params)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    CategoryService.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    CategoryService.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    CategoryService.prototype.getAttributes = function () {
        var _this = this;
        if (this.values.attributes) {
            return Promise.resolve(this.values.attributes);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/attributes?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.values.attributes = data;
                resolve(_this.values.attributes);
            });
        });
    };
    CategoryService.prototype.attributeTerms = function (id) {
        var _this = this;
        if (this.values.attributeTerms[id]) {
            return Promise.resolve(this.values.attributeTerms[id]);
        }
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/attributes/' + id + '/terms?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.values.attributeTerms[id] = data;
                resolve(_this.values.attributeTerms[id]);
            });
        });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__config__["a" /* Config */], __WEBPACK_IMPORTED_MODULE_3__values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */]])
    ], CategoryService);
    return CategoryService;
}());

//# sourceMappingURL=category-service.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPopover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPopover = (function () {
    function MyPopover(viewCtrl, params, values) {
        this.viewCtrl = viewCtrl;
        this.values = values;
        this.select = [];
        this.filters = params.data.filters;
    }
    MyPopover.prototype.close = function () {
        this.values.filterUpdate = false;
        this.viewCtrl.dismiss();
    };
    MyPopover.prototype.apply = function () {
        this.values.filterUpdate = true;
        var text = '{';
        var i;
        var j;
        for (i = 0; i < this.filters.item.length; i++) {
            if (this.filters.item[i].values.value.length)
                for (j = 0; j < this.filters.item[i].values.value.length; j++) {
                    if (this.filters.item[i].values.value[j].selected)
                        text += '"' + this.filters.item[i].code + '":"' + this.filters.item[i].values.value[j].id + '",';
                }
            if (!this.filters.item[i].values.value.length) {
                if (this.filters.item[i].values.value.selected)
                    text += '"' + this.filters.item[i].code + '":"' + this.filters.item[i].values.value.id + '",';
            }
        }
        if (!this.filters.item.length) {
            if (this.filters.item.values.value.length)
                for (j = 0; j < this.filters.item.values.value.length; j++) {
                    if (this.filters.item.values.value[j].selected)
                        text += '"' + this.filters.item.code + '":"' + this.filters.item.values.value[j].id + '",';
                }
            if (!this.filters.item.values.value.length) {
                if (this.filters.item.values.value.selected)
                    text += '"' + this.filters.item.code + '":"' + this.filters.item.values.value.id + '",';
            }
        }
        text += '"dd":"' + 'dd"}';
        this.values.filter = text;
        this.values.filter = JSON.parse(text);
        this.viewCtrl.dismiss();
    };
    MyPopover.prototype.clearAll = function () {
        this.values.filterUpdate = true;
        var i;
        var j;
        for (i = 0; i < this.filters.item.length; i++) {
            if (this.filters.item[i].values.value.length)
                for (j = 0; j < this.filters.item[i].values.value.length; j++) {
                    if (this.filters.item[i].values.value[j].selected)
                        this.filters.item[i].values.value[j].selected = false;
                }
            if (!this.filters.item[i].values.value.length) {
                if (this.filters.item[i].values.value.selected)
                    this.filters.item[i].values.value.selected = false;
            }
        }
        if (!this.filters.item.length) {
            if (this.filters.item.values.value.length)
                for (j = 0; j < this.filters.item.values.value.length; j++) {
                    if (this.filters.item.values.value[j].selected)
                        this.filters.item.values.value[j].selected = false;
                }
            if (!this.filters.item.values.value.length) {
                if (this.filters.item.values.value.selected)
                    this.filters.item.values.value.selected = false;
            }
        }
        this.values.filter = {};
        this.viewCtrl.dismiss();
    };
    MyPopover = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: "<ion-header><ion-toolbar color=\"shadow\"> <ion-title text-center>Filter</ion-title> <ion-buttons end> <button ion-button ligth class=\"has-icon icon-only has-badge\" (click)=\"close()\"> <ion-icon name=\"close\"></ion-icon> </button> </ion-buttons></ion-toolbar></ion-header><ion-content><div *ngIf=\"filters\"><div *ngIf=\"filters.item.length\"><div *ngFor=\"let item of filters.item; let i=index\"> <ion-item>{{item.name}}</ion-item> <div *ngIf=\"item.values.value.length\"> <ion-item *ngFor=\"let value of item.values.value; let j=index\"> <ion-label>{{value.label}}({{value.count}})</ion-label> <ion-checkbox [(ngModel)]=\"filters.item[i].values.value[j].selected\"></ion-checkbox> </ion-item> </div><ion-item *ngIf=\"!item.values.value.length\"> <ion-label>{{item.values.value.label}}({{item.values.value.count}})</ion-label> <ion-checkbox [(ngModel)]=\"filters.item[i].values.value.selected\"></ion-checkbox> </ion-item></div></div><div *ngIf=\"!filters.item.length\"> <ion-item>{{filters.item.name}}</ion-item> <div *ngIf=\"filters.item.values.value.length\"> <ion-item *ngFor=\"let value of filters.item.values.value; let j=index\"> <ion-label>{{value.label}}({{value.count}})</ion-label> <ion-checkbox [(ngModel)]=\"filters.item.values.value[j].selected\"></ion-checkbox> </ion-item> </div><ion-item *ngIf=\"!filters.item.values.value.length\"> <ion-label>{{filters.item.values.value.label}}({{filters.item.values.value.count}})</ion-label> <ion-checkbox [(ngModel)]=\"filters.item.values.value.selected\"></ion-checkbox> </ion-item></div></div></ion-content><ion-footer primary *ngIf=\"filters\"><ion-grid no-padding> <ion-row no-padding> <ion-col primary width-50 no-padding> <button ion-button full clear no-padding no-margin (click)=\"clearAll()\"> Clear </button> </ion-col> <ion-col royal width-50 no-padding> <button ion-button full clear color=\"shadow\" no-padding no-margin (click)=\"apply()\"> Apply </button> </ion-col> </ion-row></ion-grid></ion-footer>",
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */]])
    ], MyPopover);
    return MyPopover;
}());

var SearchPage = (function () {
    function SearchPage(nav, popoverCtrl, service, values, params, functions) {
        this.nav = nav;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.values = values;
        this.functions = functions;
        this.has_more_items = true;
        this.page = 1;
        this.shouldShowCancel = true;
        this.loading = false;
        this.filter = {};
        this.count = 10;
        this.offset = 0;
        this.values.filter = {};
        this.options = [];
        this.quantity = "1";
        this.myInput = "";
        this.filter.page = 1;
    }
    SearchPage.prototype.getCart = function () {
        this.nav.push('CartPage');
    };
    SearchPage.prototype.onInput = function ($event) {
        var _this = this;
        this.loading = true;
        this.filter.search = $event.srcElement.value;
        this.values.filter = {};
        this.service.getSearch(this.filter)
            .then(function (results) { _this.loading = false; _this.products = results; });
    };
    SearchPage.prototype.onCancel = function ($event) {
        console.log('cancelled');
    };
    SearchPage.prototype.getProduct = function (id) {
        this.nav.push('ProductPage', id);
    };
    SearchPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        this.filter.page += 1;
        this.service.getSearch(this.filter)
            .then(function (results) { return _this.handleMore(results, infiniteScroll); });
    };
    SearchPage.prototype.handleMore = function (results, infiniteScroll) {
        if (results != undefined) {
            for (var i = 0; i < results.length; i++) {
                this.products.push(results[i]);
            }
            ;
        }
        if (results == 0) {
            this.has_more_items = false;
        }
        infiniteScroll.complete();
    };
    SearchPage.prototype.deleteFromCart = function (id) {
        var _this = this;
        this.service.deleteFromCart(id)
            .then(function (results) { return _this.status = results; });
    };
    SearchPage.prototype.addToCart = function (id, type) {
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
    SearchPage.prototype.updateCart = function (a) {
    };
    SearchPage.prototype.setListView = function () {
        this.values.listview = true;
    };
    SearchPage.prototype.setGridView = function () {
        this.values.listview = false;
    };
    SearchPage.prototype.addToWishlist = function (id) {
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
    SearchPage.prototype.update = function (results, id) {
        if (results.success == "Success") {
            //this.functions.showAlert(a.success, a.message);
            this.values.wishlistId[id] = true;
        }
        else {
        }
    };
    SearchPage.prototype.removeFromWishlist = function (id) {
        var _this = this;
        this.values.wishlistId[id] = false;
        this.service.deleteItem(id)
            .then(function (results) { return _this.updateWish(results, id); });
    };
    SearchPage.prototype.updateWish = function (results, id) {
        if (results.status == "success") {
            this.values.wishlistId[id] = false;
        }
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\pages\search\search.html"*/'<ion-header no-border>\n  <ion-navbar color="header">\n    <button ion-button menuToggle>\n      <ion-icon name="menu">\n      </ion-icon>\n    </button>\n    <ion-searchbar\n     [(ngModel)]="myInput"\n     [showCancelButton]="shouldShowCancel"\n     (ionInput)="onInput($event)"\n     (ionCancel)="onCancel($event)">\n    </ion-searchbar>\n  </ion-navbar>\n</ion-header>\n<ion-content class="search-page">\n\n    <ion-spinner *ngIf="loading" name="crescent">\n    </ion-spinner>\n\n    <div *ngIf="products" class="products-listing">\n\n    <div *ngIf="!products.length" class="no-products">\n    <h2>{{"No products found!" | translate}}</h2>\n    </div>\n\n      <div *ngIf="products.length">\n        <div *ngIf="values.listview">\n          <ion-item no-lines class="item-name">\n            <ion-label>{{"Search Results" | translate}}\n            </ion-label>\n            <button ion-button icon-only item-right clear color="button-color" (click)="setGridView()">\n              <ion-icon ios="ios-grid" md="md-grid">\n              </ion-icon>\n            </button>\n          </ion-item>\n\n            <div class="item-list" *ngFor="let item of products">\n              <ion-item class="left-padding" no-lines>\n                  <ion-thumbnail item-left class="stock-list">\n                    <img tappable (click)="getProduct(item.id)" src="{{item.images[0].src}}">\n                    <button class="no-stock-button" ion-button *ngIf="!item.in_stock">{{"No Stock" | translate}}\n                    </button>             \n                  </ion-thumbnail> \n\n                  <div class="product-name-top">                                 \n                  <div class="product-label">\n                  <div tappable (click)="getProduct(item.id)" class="max-lines">\n                      <h2 *ngIf="item.title">{{item.title}}\n                      </h2>\n                      <h2 *ngIf="item.name">{{item.name}}\n                      </h2>\n                  </div>\n                  </div>\n                  </div> \n\n                  <div>\n                    <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                    </span>\n                    <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                  </div>\n\n                   <h3 style="font-size:11px; margin: 3px 0">\n                   <span class="rating review-star">\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span>\n                   </span>\n                   </h3>\n\n\n                <div class="bottom-right-button">\n                  <button ion-button [disabled]=\'!item.in_stock\' text-uppercase color="button-color"  item-right outline style="margin-right: 20px; border: 0; font-size: 14px" *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                    {{"Add"  | translate}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                    <ion-icon name="md-remove">\n                    </ion-icon>\n                  </button>\n                  <button ion-button item-right color="button-color" clear style="border: 0;" *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                  </button>\n                  <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                    <ion-icon name="md-add">\n                    </ion-icon>\n                  </button>\n                </div>\n\n                  <div width-20 class="bottom-left-button">\n                  <ion-icon name="md-heart" class="wishlist-button-fill" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                  <ion-icon name="md-heart-outline" class="wishlist-button" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n                  </div>\n\n              </ion-item>\n            </div>\n        </div>\n\n\n        <div *ngIf="!values.listview">\n          <ion-item no-lines class="item-name">\n            <ion-label>{{"Search Results" | translate}}\n            </ion-label>\n            <button ion-button icon-only item-right clear color="button-color" (click)="setListView()">\n              <ion-icon ios="ios-list-box" md="ios-list-box">\n              </ion-icon>\n            </button>\n          </ion-item>\n          <div class="grid">\n            <ion-row class="row unlimited-items">\n              <ion-col class="col" *ngFor="let item of products">\n                <ion-card>\n                  <ion-card-content class="stock">\n\n                      <img tappable src="{{item.images[0].src}}" (click)="getProduct(item.id)">\n                      <button ion-button color="danger" *ngIf="!item.in_stock">{{"No stock" | translate}}\n                      </button>\n\n                  \n                  <ion-icon name="md-heart" class="wishlist-button-grid1" *ngIf="values.wishlistId[item.id]" (click)="removeFromWishlist(item.id)"></ion-icon>\n                  <ion-icon name="md-heart-outline" class="wishlist-button-grid2" *ngIf="!values.wishlistId[item.id]" (click)="addToWishlist(item.id)"></ion-icon>\n\n                  \n                  </ion-card-content>\n\n                  <div tappable (click)="getProduct(item.id)" class="card-name">\n                  <ion-label *ngIf="item.title">{{item.title}}\n                  </ion-label>\n                  <ion-label *ngIf="item.name">{{item.name}}\n                  </ion-label>\n                  </div>\n\n\n                   <h3 style="font-size:11px; margin: 3px 0">\n                   <span class="rating review-star">\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 1, half: item.average_rating == 0.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 2, half: item.average_rating == 1.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 3, half: item.average_rating == 2.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 4, half: item.average_rating == 3.5}">&#x2605;</span>\n                   <span class="star-icon" [ngClass]="{full: item.average_rating >= 5, half: item.average_rating == 4.5}">&#x2605;</span>\n                   </span>\n                   </h3>\n\n\n                  <ion-label>\n                     \n                    <span class="price-delete" *ngIf="item.sale_price">\n                    <del>{{1*item.regular_price | currency:values.currency:true:\'1.2-2\'}}\n                    </del>\n                    </span>\n                    <span class="price-regular" *ngIf="!item.sale_price">{{1*item.price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                    <span class="price-regular" *ngIf="item.sale_price">{{1*item.sale_price | currency:values.currency:true:\'1.2-2\'}}\n                    </span>\n                  </ion-label>\n                      \n\n                    <div class="add-remove-button">\n                    <button ion-button [disabled]=\'!item.in_stock\' text-uppercase color="button-color" item-right clear style="border: 0;" *ngIf="values.cart[item.id] == undefined || values.cart[item.id] == 0" (click)="addToCart(item.id, item.type)">\n                      {{"Add"  | translate}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="deleteFromCart(item.id)">\n                      <ion-icon name="md-remove">\n                      </ion-icon>\n                    </button>\n                    <button ion-button item-right color="button-color" style="border: 0; margin: 0 10px;" clear *ngIf="values.cart[item.id] >= 1">{{values.cart[item.id]}}\n                    </button>\n                    <button ion-button icon-only item-right clear color="button-color" *ngIf="values.cart[item.id] >= 1" (click)="updateToCart(item.id)">\n                      <ion-icon name="md-add">\n                      </ion-icon>\n                    </button>\n                    </div>\n                    \n\n                </ion-card>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n      <ion-infinite-scroll (ionInfinite)="doInfinite($event)" *ngIf="has_more_items">\n        <ion-infinite-scroll-content\n         loadingSpinner="crescent"\n         loadingText={{values.lan.GettingMoreElements}}>\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div>\n</ion-content>\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\pages\search\search.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__providers_service_search_service__["a" /* SearchService */], __WEBPACK_IMPORTED_MODULE_3__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_functions__["a" /* Functions */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(366);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(686);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_search_search__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_imageupload__ = __webpack_require__(687);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_imageupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_imageupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_service_cart_service__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_service_wishlist_service__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_service_category_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_service_checkout_service__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_service_config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_service_functions__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_service_product_service__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_service_search_service__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_http__ = __webpack_require__(690);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__ = __webpack_require__(691);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





/*------------------------Providers----------------------------------*/




















// import { Facebook } from '@ionic-native/facebook';
// import { GooglePlus } from '@ionic-native/google-plus';
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_24__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_search_search__["a" /* MyPopover */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng2_imageupload__["ImageUploadModule"],
                __WEBPACK_IMPORTED_MODULE_21__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_22__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/address/address.module#AddressModule', name: 'Address', segment: 'address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/edit-address-form/edit-address-form.module#EditAddressFormsModule', name: 'EditAddressForm', segment: 'edit-address-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/forgotten/forgotten.module#AccountForgottenModule', name: 'AccountForgotten', segment: 'forgotten', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/login/login.module#AccountLoginModule', name: 'AccountLogin', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/order-details/order-details.module#OrderDetailsModule', name: 'OrderDetails', segment: 'order-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/orders/orders.module#OrdersModule', name: 'Orders', segment: 'orders', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/register/register.module#AccountRegisterModule', name: 'AccountRegister', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/account/wishlist/wishlist.module#WishlistPageModule', name: 'WishlistPage', segment: 'wishlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/add-product/add-product.module#AddProductModule', name: 'AddProduct', segment: 'add-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/billing-address-form/billing-address-form.module#BillingAddressFormModule', name: 'BillingAddressForm', segment: 'billing-address-form', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/order-summary/order-summary.module#OrderSummaryModule', name: 'OrderSummary', segment: 'order-summary', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/terms-condition/terms-condition.module#TermsConditionModule', name: 'TermsCondition', segment: 'terms-condition', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-product/edit-product.module#EditProductModule', name: 'EditProductP', segment: 'edit-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomeModule', name: 'Home', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/product/product.module#ProductPageModule', name: 'ProductPage', segment: 'product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_23__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_21__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* Home */],
                __WEBPACK_IMPORTED_MODULE_4__pages_search_search__["a" /* MyPopover */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__providers_service_cart_service__["a" /* CartService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_service_wishlist_service__["a" /* WishlistService */],
                __WEBPACK_IMPORTED_MODULE_13__providers_service_category_service__["a" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_service_checkout_service__["a" /* CheckoutService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_service_config__["a" /* Config */],
                __WEBPACK_IMPORTED_MODULE_16__providers_service_functions__["a" /* Functions */],
                __WEBPACK_IMPORTED_MODULE_17__providers_service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_service_search_service__["a" /* SearchService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_service_service__["a" /* Service */],
                __WEBPACK_IMPORTED_MODULE_20__providers_service_values__["a" /* Values */],
                // Facebook,
                // GooglePlus,
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Config = (function () {
    function Config() {
        //this.url = 'http://localhost/wordpress';
        // this.url = 'http://130.211.141.170/wordpress';
        this.url = 'http://callabhi.com/boomdome';
        this.oauth = oauthSignature;
        this.oauth_signature_method = 'HMAC-SHA1';
        this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        this.params = {};
        this.params.oauth_consumer_key = this.consumerKey;
        this.params.oauth_signature_method = 'HMAC-SHA1';
        this.params.oauth_version = '1.0';
    }
    Config.prototype.setOauthNonce = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.round(Math.random() * (chars.length - 1))];
        return result;
    };
    Config.prototype.setUrl = function (method, endpoint, filter) {
        var key;
        var unordered = {};
        var ordered = {};
        if (this.url.indexOf('https') >= 0) {
            unordered = {};
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            unordered['consumer_key'] = this.consumerKey;
            unordered['consumer_secret'] = this.consumerSecret;
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            return this.url + endpoint + this.searchParams.toString();
        }
        else {
            var url = this.url + endpoint;
            this.params['oauth_consumer_key'] = this.consumerKey;
            this.params['oauth_nonce'] = this.setOauthNonce(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
            this.params['oauth_timestamp'] = new Date().getTime() / 1000;
            for (key in this.params) {
                unordered[key] = this.params[key];
            }
            if (filter) {
                for (key in filter) {
                    unordered[key] = filter[key];
                }
            }
            Object.keys(unordered).sort().forEach(function (key) {
                ordered[key] = unordered[key];
            });
            this.searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            for (key in ordered) {
                this.searchParams.set(key, ordered[key]);
            }
            this.encodedSignature = this.oauth.generate(method, url, this.searchParams.toString(), this.consumerSecret);
            return this.url + endpoint + this.searchParams.toString() + '&oauth_signature=' + this.encodedSignature;
        }
    };
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Config);
    return Config;
}());

//# sourceMappingURL=config.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_service_values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Push, PushObject, PushOptions } from '@ionic-native/push';
var MyApp = (function () {
    function MyApp(statusBar, splashScreen, alertCtrl, platform, service, values, Loading, translateService) {
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.service = service;
        this.values = values;
        this.Loading = Loading;
        this.translateService = translateService;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */];
        this.buttonLanguagesSettings = false;
        this.showCategories = false;
        platform.ready().then(function () {
            statusBar.styleDefault();
            splashScreen.hide();
            // this.pushsetup();
        });
        this.translateService.setDefaultLang('english');
        //this.platform.setDir('rtl', true);
        //this.values.dir = 'right';
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page);
    };
    MyApp.prototype.logout = function () {
        var _this = this;
        this.loading1 = this.Loading.create();
        this.loading1.present();
        this.service.logout();
        setTimeout(function () {
            _this.loading1.dismiss();
            _this.nav.setRoot('AccountLogin');
        }, 3000);
    };
    MyApp.prototype.login = function () {
        this.nav.setRoot('AccountLogin');
    };
    MyApp.prototype.register = function () {
        this.nav.setRoot('AccountRegister');
    };
    MyApp.prototype.account = function () {
        this.nav.setRoot('EditAddressForm');
    };
    MyApp.prototype.change_password = function () {
        this.nav.setRoot('ChangePassword');
    };
    MyApp.prototype.products = function () {
        this.nav.setRoot('ProductsPage');
    };
    MyApp.prototype.order = function () {
        this.nav.setRoot('Orders');
    };
    MyApp.prototype.shop = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* Home */]);
    };
    MyApp.prototype.addProduct = function () {
        this.nav.setRoot('AddProduct');
    };
    MyApp.prototype.dropDown = function () {
        this.showCategories = true;
    };
    MyApp.prototype.dropup = function () {
        this.showCategories = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\ionic\boomDome\src\app\app.html"*/'<ion-menu [content]="content" *ngIf="values.dir == \'right\'" side="right" type="reveal">\n\n\n\n<div class="menu-toolbar">\n\n  <ion-toolbar color="header">\n\n    <div class="profile-image">\n\n      <img src="{{values.avatar}}">\n\n    </div>\n\n    \n\n    <button ion-button full menuClose clear class="button-customername" *ngIf="values.isLoggedIn">\n\n      {{values.customerName}}\n\n    </button>\n\n      \n\n    <button ion-button full menuClose clear class="button-welcome" *ngIf="!values.isLoggedIn">\n\n      {{"Welcome" | translate}}\n\n    </button>  \n\n  </ion-toolbar>\n\n  </div>\n\n\n\n  <ion-content class="sidemenugrad">\n\n\n\n      <ion-item-divider tappable menuClose (click)="shop()">\n\n          <ion-icon item-left ios="ios-home" md="md-home"></ion-icon>\n\n          {{"Home" | translate}}\n\n      </ion-item-divider>\n\n\n\n\n\n    <!-- <ion-list no-margin> -->\n\n<!-- <div class="list-item-divider"> -->\n\n      <!-- <ion-item-divider tappable *ngIf="!showCategories" (click)="dropDown()"> -->\n\n          <!-- <ion-icon item-left name="logo-buffer" style="margin-top: 12px"></ion-icon> -->\n\n          <!-- {{"Categories" | translate}} -->\n\n          <!-- <ion-icon name="md-arrow-dropdown" class="drop-icon" (click)="dropDown()"></ion-icon> -->\n\n      <!-- </ion-item-divider> -->\n\n      <!-- <ion-item-divider tappable *ngIf="showCategories" (click)="dropup()"> -->\n\n          <!-- <ion-icon item-left name="logo-buffer" style="margin-top: 12px"></ion-icon> -->\n\n          <!-- {{"Categories" | translate}} -->\n\n          <!-- <ion-icon name="md-arrow-dropup" class="drop-icon" (click)="dropup()"></ion-icon> -->\n\n      <!-- </ion-item-divider> -->\n\n<!-- </div>  -->\n\n      \n\n      <!-- <div *ngIf="showCategories">       -->\n\n      <!-- <div *ngIf="service.categories" class="category-name"> -->\n\n        <!-- <ion-item tappable full menuClose *ngFor="let item of service.mainCategories" (click)="getCategory(item.id, item.slug, item.name)"> -->\n\n          <!-- <ion-icon item-right hideWhen="ios" class="ion-ios-arrow-forward item-icon"> -->\n\n          <!-- </ion-icon> -->\n\n          <!-- {{item.name}}          -->\n\n        <!-- </ion-item> -->\n\n      <!-- </div> -->\n\n      <!-- </div> -->\n\n    <!-- </ion-list> -->\n\n\n\n    \n\n    <ion-list>\n\n		  <ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n\n			  <ion-icon name="md-log-in" item-left></ion-icon>{{"LogIn" | translate}}\n\n		  </ion-item>\n\n		  <ion-item tappable menuClose (click)="address()" *ngIf="!values.isLoggedIn">\n\n			  <ion-icon item-left ios="md-locate" md="md-locate">\n\n			  </ion-icon>{{"Product List" | translate}}\n\n		  </ion-item>\n\n		  <ion-item tappable menuClose (click)="order()" *ngIf="!values.isLoggedIn">\n\n			  <ion-icon item-left ios="md-reorder" md="md-reorder">\n\n			  </ion-icon>{{"Orders" | translate}}\n\n		  </ion-item>\n\n		<ion-item tappable menuClose (click)="wishlist()" *ngIf="!values.isLoggedIn">\n\n			  <ion-icon name="md-heart" item-left></ion-icon>{{"Wishlist | translate"}}\n\n		</ion-item>		\n\n		<ion-item tappable menuClose (click)="logout()" *ngIf="values.isLoggedIn">\n\n			<ion-icon item-left name="md-log-out">\n\n			</ion-icon>{{"Logout" | translate}}\n\n		</ion-item>\n\n    </ion-list>\n\n \n\n    <br>\n\n  </ion-content>\n\n</ion-menu>\n\n\n\n\n\n\n\n\n\n\n\n<ion-menu [content]="content" *ngIf="values.dir == \'left\'" side="left" type="reveal">\n\n\n\n<div class="menu-toolbar">\n\n  <ion-toolbar color="header">\n\n    <div class="profile-image">\n\n      <img src="{{values.avatar}}">\n\n    </div>\n\n    \n\n    <button ion-button full menuClose clear class="button-customername" *ngIf="values.isLoggedIn">\n\n      {{values.customerName}}\n\n    </button>\n\n      \n\n    <button ion-button full menuClose clear class="button-welcome" *ngIf="!values.isLoggedIn">\n\n      {{"Welcome" | translate}}\n\n    </button>  \n\n  </ion-toolbar>\n\n  </div>\n\n\n\n  <ion-content class="sidemenugrad">\n\n\n\n    <ion-item-divider tappable menuClose (click)="shop()">\n\n        <ion-icon item-left ios="ios-home" md="md-home"></ion-icon>\n\n		{{"Home" | translate}}\n\n    </ion-item-divider>\n\n    <ion-list>\n\n		\n\n		<ion-item tappable menuClose (click)="login()" *ngIf="!values.isLoggedIn">\n\n			<ion-icon name="md-log-in" item-left></ion-icon>{{"LogIn" | translate}}\n\n		</ion-item>\n\n		<ion-item tappable menuClose (click)="account()" *ngIf="!values.isLoggedIn">\n\n			<ion-icon item-left ios="ios-contacts" md="md-contacts">\n\n			</ion-icon>{{"Profile" | translate}}\n\n		</ion-item>\n\n		<ion-item tappable menuClose (click)="order()" *ngIf="!values.isLoggedIn">\n\n			<ion-icon item-left ios="md-reorder" md="md-reorder">\n\n			</ion-icon>{{"Orders" | translate}}\n\n		</ion-item>\n\n		<div class="list-item-divider" *ngIf="!values.isLoggedIn">\n\n			  <ion-item-divider tappable *ngIf="!showCategories" (click)="dropDown()">\n\n				  <ion-icon item-left  ios="ios-construct" md="md-construct" style="margin-top: 12px"></ion-icon>\n\n				  {{"Manage Products" | translate}}\n\n				  <ion-icon name="md-arrow-dropdown" class="drop-icon" (click)="dropDown()"></ion-icon>\n\n			  </ion-item-divider>\n\n			  <ion-item-divider tappable *ngIf="showCategories" (click)="dropup()">\n\n				  <ion-icon item-left ios="ios-construct" md="md-construct" style="margin-top: 12px"></ion-icon>\n\n				  {{"Manage Products" | translate}}\n\n				  <ion-icon name="md-arrow-dropup" class="drop-icon" (click)="dropup()"></ion-icon>\n\n			  </ion-item-divider>\n\n		</div> \n\n		<div *ngIf="showCategories && !values.isLoggedIn" >       \n\n			<div  class="category-name">\n\n				<ion-item tappable full menuClose (click)="products()">\n\n					<ion-icon item-right hideWhen="ios" class="ion-ios-arrow-forward item-icon"></ion-icon>Product List         \n\n				</ion-item>\n\n				<ion-item tappable full menuClose (click)="addProduct()">\n\n					<ion-icon item-right hideWhen="ios" class="ion-ios-arrow-forward item-icon"></ion-icon>Add New Product         \n\n				</ion-item>\n\n			</div>\n\n		</div>\n\n		<ion-item tappable menuClose (click)="logout()" *ngIf="!values.isLoggedIn">\n\n			<ion-icon item-left name="md-log-out">\n\n			</ion-icon>{{"Logout" | translate}}\n\n		</ion-item>\n\n   \n\n    </ion-list>  \n\n	\n\n \n\n    <br>\n\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false">\n\n</ion-nav>\n\n'/*ion-inline-end:"C:\xampp\htdocs\ionic\boomDome\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* Service */], __WEBPACK_IMPORTED_MODULE_6__providers_service_values__["a" /* Values */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Functions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__values__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Functions = (function () {
    function Functions(alert, loadingController, values) {
        this.alert = alert;
        this.loadingController = loadingController;
        this.values = values;
    }
    Functions.prototype.showAlert = function (title, text) {
        var alert = this.alert.create({
            title: title,
            subTitle: text,
            buttons: ['OK']
        });
        alert.present();
    };
    Functions.prototype.presentLoading = function () {
        this.loader = this.loadingController.create({
            content: this.values.lan.WaitTitle
        });
        this.loader.present();
    };
    Functions.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Functions = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2__values__["a" /* Values */]])
    ], Functions);
    return Functions;
}());

//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__values__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
headers.append('Content-Type', 'application/x-www-form-urlencoded');
var Service = (function () {
    function Service(http, config, values, loadingCtrl, nativeStorage) {
        this.http = http;
        this.config = config;
        this.values = values;
        this.loadingCtrl = loadingCtrl;
        this.nativeStorage = nativeStorage;
        this.dir = 'left';
        this.url = this.config.url;
        this.mainCategories = [];
    }
    Service.prototype.load = function () {
        var _this = this;
        //this.presentLoading(this.values.lan.WaitTitle);
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-keys').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.config.consumerKey = data.keys.consumerKey;
                _this.config.consumerSecret = data.keys.consumerSecret;
                _this.values.currency = data.currency;
                _this.login_nonce = data.login_nonce;
                _this.banners = data.banners;
                _this.values.max_price = data.max_price;
                if (data.user.data != undefined) {
                    _this.values.isLoggedIn = data.user.data.status;
                    _this.values.customerId = data.user.data.ID;
                    _this.values.customerName = data.user.data.display_name;
                    _this.values.logoutUrl = _this.encodeUrl(data.user.data.url);
                }
                _this.http.get(_this.config.setUrl('GET', '/wc-api/v3/products/categories?', false)).map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    //this.dismissLoading();
                    _this.categories = data;
                    console.log(data);
                    _this.mainCategories = [];
                    for (var i = 0; i < _this.categories.product_categories.length; i++) {
                        if (_this.categories.product_categories[i].parent == '0') {
                            _this.mainCategories.push(_this.categories.product_categories[i]);
                        }
                    }
                    _this.nativeStorage.getItem('loginData')
                        .then(function (data) { return _this.login(data, _this.login_nonce); }, function (error) { return console.error(error); });
                    _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart').map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        _this.cart = data;
                        _this.values.updateCart(_this.cart);
                    });
                    if (_this.values.isLoggedIn) {
                        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                        params.append("customer_id", _this.values.customerId.toString());
                        _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params).map(function (res) { return res.json(); })
                            .subscribe(function (data) {
                            for (var item in data) {
                                _this.values.wishlistId[data[item].id] = data[item].id;
                            }
                        });
                    }
                    resolve(_this.categories);
                });
            });
        });
    };
    Service.prototype.getNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-nonce').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.login = function (a, nonce) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("username", a.username);
        params.append("password", a.password);
        params.append("_wpnonce", nonce);
        params.append("login", 'Login');
        params.append("redirect", this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata');
        var sentData = this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-login&username=' + a.username + '&password=' + a.password + '&_wpnonce=' + nonce + '&login=Login&redirect=' + this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-userdata';
        return new Promise(function (resolve) {
            _this.http.post(sentData, params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                if (!data.errors) {
                    if (data.caps.wc_product_vendors_admin_vendor || data.caps.wc_product_vendors_manager_vendor) {
                        _this.values.isVendor = true;
                    }
                    _this.values.isLoggedIn = data.data.status;
                    _this.values.customerName = data.data.display_name;
                    _this.values.customerId = data.data.ID;
                    _this.values.logoutUrl = _this.encodeUrl(data.data.url);
                    params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
                    params.append("customer_id", _this.values.customerId.toString());
                    _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_wishlist', params).map(function (res) { return res.json(); })
                        .subscribe(function (data) {
                        for (var item in data) {
                            _this.values.wishlistId[data[item].id] = data[item].id;
                        }
                    });
                    //this.values.avatar = data.data.avatar;
                    _this.nativeStorage.setItem('loginData', {
                        username: a.username,
                        password: a.password
                    })
                        .then(function (data) { return console.log('Login Details Stored'); }, function (error) { return console.error(error); });
                }
                resolve(data);
            }, function (err) { resolve(JSON.parse(err._body)); console.log(err._body); });
        });
    };
    Service.prototype.encodeUrl = function (href) {
        return href.replace(/&amp;/g, '&');
    };
    Service.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.encodeUrl(_this.values.logoutUrl))
                .subscribe(function (data) {
                _this.values.isLoggedIn = false;
                _this.values.customerName = "";
                _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-cart').map(function (res) { return res.json(); })
                    .subscribe(function (data) {
                    _this.cart = data;
                    _this.values.updateCart(_this.cart);
                });
                resolve(_this.cart);
            });
        });
    };
    Service.prototype.passwordreset = function (email, nonce, url) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("user_login", email);
        params.append("wc_reset_password", "true");
        params.append("_wpnonce", nonce);
        params.append("_wp_http_referer", '/my-account/lost-password/');
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/my-account/lost-password/', params)
                .subscribe(function (status) {
                resolve(status);
            });
        });
    };
    Service.prototype.passwordResetNonce = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-passwordreset').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getAddress = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/customers/' + _this.values.customerId + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.getUserProfile = function () {
        var _this = this;
        var customerId = 19;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/customers/' + customerId + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.address = data;
                resolve(_this.address);
            });
        });
    };
    Service.prototype.saveAddress = function (address) {
        var _this = this;
        var params = address;
        return new Promise(function (resolve) {
            _this.http.put(_this.config.setUrl('PUT', '/wp-json/wc/v2/customers/' + _this.values.customerId + '?', false), params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    Service.prototype.pushNotification = function (notification) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", notification.device_id);
        params.append("platform", notification.platform);
        params.append("email", notification.email);
        params.append("city", notification.city);
        params.append("state", notification.state);
        params.append("country", notification.country);
        params.append("pincode", notification.pincode);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.pushNotify = function (deviceId, platform) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("device_id", deviceId);
        params.append("platform", platform);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-user-subcribe-notify', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.getOrder = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/orders/' + id + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.order = data;
                resolve(_this.order);
            });
        });
    };
    Service.prototype.getCountry = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-get_country').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.country = data;
                resolve(_this.country);
            });
        });
    };
    Service.prototype.registerCustomer = function (customer) {
        var _this = this;
        var params = customer;
        return new Promise(function (resolve) {
            _this.http.post(_this.config.setUrl('POST', '/wp-json/wc/v2/customers?', false), params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.user = data;
                resolve(_this.user);
            }, function (err) { resolve(JSON.parse(err._body)); console.log(err._body); });
        });
    };
    Service.prototype.getOrders = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/orders?', filter)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.orders = data;
                resolve(_this.orders);
            });
        });
    };
    Service.prototype.updateOrder = function (data, id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.put(_this.config.setUrl('PUT', '/wp-json/wc/v2/orders/' + id + '?', false), data).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.addProduct = function (data) {
        var _this = this;
        // return new Promise(resolve => {
        // this.http.post(this.config.setUrl('POST', '/wp-json/wc/v2/products?', false), data).map(res => res.json())
        // .subscribe(data => {
        // this.status = data;
        // resolve(this.status);
        // });
        // });
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        // params.append("device_id", deviceId);
        // params.append("platform", platform);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add-new-product', params, {
                headers: headers
            }).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.presentLoading = function (text) {
        this.loader = this.loadingCtrl.create({
            content: text,
        });
        this.loader.present();
    };
    Service.prototype.dismissLoading = function () {
        this.loader.dismiss();
    };
    Service.prototype.addToWishlist = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
            params.append("product_id", id);
            params.append("customer_id", _this.values.customerId.toString());
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-add_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.status = data;
                resolve(_this.status);
            });
        });
    };
    Service.prototype.deleteItem = function (id) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("product_id", id);
        params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-remove_wishlist', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getVendorOrders = function (filter) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        //params.append("product_id", id);
        // params.append("customer_id", this.values.customerId.toString());
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-vendor_order_list').map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getVendorProducts = function (filter) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        //params.append("product_id", id);
        // params.append("customer_id", this.values.customerId.toString());
        //params.append("customer_id", 19);
        var id = 19; //this.values.customerId.toString();
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-getAllVendorProduct&customerId=' + id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.getUserData = function () {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        //params.append("product_id", id);
        // params.append("customer_id", this.values.customerId.toString());
        //params.append("customer_id", 19);
        var id = this.values.customerId;
        return new Promise(function (resolve) {
            _this.http.get(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-getUserData&c_id=' + id).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                resolve(data);
            });
        });
    };
    Service.prototype.updateProfile = function (profile) {
        var _this = this;
        var params = profile;
        return new Promise(function (resolve) {
            _this.http.put(_this.config.setUrl('PUT', '/wp-json/wc/v2/customers/' + _this.values.customerId + '?', false), params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    Service.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    Service.prototype.getProductDetail = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/' + id + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    Service.prototype.editProduct = function (data) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    Service.prototype.deleteProduct = function (id) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.delete(_this.config.setUrl('DELETE', '/wp-json/wc/v2/products/' + id + '?', false)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    Service.prototype.loadMore = function (filter) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.config.setUrl('GET', '/wp-json/wc/v2/products/?', filter)).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                _this.products = data;
                resolve(_this.products);
            });
        });
    };
    Service.prototype.sendToken = function (token) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", token);
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-#C72D46_connect', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    _this.values.isLoggedIn = true;
                    _this.values.setNavigation = true;
                    _this.values.customerName = data.last_name;
                    _this.values.customerId = data.user_id;
                    _this.values.avatar = data.avatar;
                    _this.nativeStorage.setItem('avatar', data.avatar)
                        .then(function (data) { return console.log('Avatar Stored'); }, function (error) { return console.error(error); });
                    resolve(data);
                }
            });
        });
    };
    Service.prototype.googleLogin = function (res) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* URLSearchParams */]();
        params.append("access_token", res.userId);
        params.append("email", res.email);
        params.append("first_name", res.displayName);
        params.append("last_name", res.displayName);
        this.nativeStorage.setItem('avatar', res.imageurl)
            .then(function (data) { return console.log('Avatar Stored'); }, function (error) { return console.error(error); });
        return new Promise(function (resolve) {
            _this.http.post(_this.url + '/wp-admin/admin-ajax.php?action=mstoreapp-google_connect', params).map(function (res) { return res.json(); })
                .subscribe(function (data) {
                console.log(data);
                _this.googleResponse = data;
                if (data.status) {
                    _this.values.isLoggedIn = true;
                    _this.values.setNavigation = true;
                    _this.values.customerEmail = data.email;
                    _this.values.customerFName = data.first_name;
                    _this.values.customerLName = data.last_name;
                    _this.values.customerName = data.last_name;
                    _this.values.customerId = data.user_id;
                    resolve(data);
                }
                //this.status = data;
            });
        });
    };
    Service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__values__["a" /* Values */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_native_storage__["a" /* NativeStorage */]) === "function" && _e || Object])
    ], Service);
    return Service;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=service.js.map

/***/ })

},[361]);
//# sourceMappingURL=main.js.map