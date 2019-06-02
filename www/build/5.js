webpackJsonp([5],{

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_page__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_iconed_menu_item_iconed_menu_item_component_module__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_iconed_menu_item_iconed_menu_item_component_module__["a" /* IconedMenuItemModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__home_page__["a" /* HomePage */]
            ]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.page.module.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEADER_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return HeaderModel; });
/**
 * Enum which defines possible header colors.
 *
 * @export
 * @enum {number}
 */
var HEADER_COLORS;
(function (HEADER_COLORS) {
    HEADER_COLORS["BASE"] = "dark";
})(HEADER_COLORS || (HEADER_COLORS = {}));
var HeaderModel = /** @class */ (function () {
    function HeaderModel(pageTitle, navbarColor, hideDefaultBackBtn, leftButton, rightButton) {
        this.pageTitle = pageTitle;
        if (navbarColor) {
            this.navbarColor = navbarColor;
        }
        if (hideDefaultBackBtn != undefined) {
            this.hideDefaultBackBtn = hideDefaultBackBtn;
        }
        if (leftButton) {
            this.leftButton = leftButton;
        }
        if (rightButton) {
            this.rightButton = rightButton;
        }
    }
    return HeaderModel;
}());

//# sourceMappingURL=HeaderModel.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEADER_BUTTON_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SimpleAppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Header button types.
 *
 * @export
 * @enum {number}
 */
var HEADER_BUTTON_TYPE;
(function (HEADER_BUTTON_TYPE) {
    HEADER_BUTTON_TYPE[HEADER_BUTTON_TYPE["BACK"] = "back"] = "BACK";
    HEADER_BUTTON_TYPE[HEADER_BUTTON_TYPE["MENU_TOGGLE"] = "menuToggle"] = "MENU_TOGGLE";
    HEADER_BUTTON_TYPE[HEADER_BUTTON_TYPE["SAVE"] = "save"] = "SAVE";
    HEADER_BUTTON_TYPE[HEADER_BUTTON_TYPE["SEARCH"] = "search"] = "SEARCH";
    HEADER_BUTTON_TYPE[HEADER_BUTTON_TYPE["CLOSE"] = "close"] = "CLOSE";
})(HEADER_BUTTON_TYPE || (HEADER_BUTTON_TYPE = {}));
/**
 * Simple application header component
 *
 * @export
 * @class SimpleAppHeaderComponent
 */
var SimpleAppHeaderComponent = /** @class */ (function () {
    function SimpleAppHeaderComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
        /**
         * Output parameter to know in statistic which tab was clicked.
         *
         * @type {EventEmitter<any>}
         * @memberof SimpleAppHeaderComponent
         */
        this.onBackBtnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Output parameter to know in statistic which tab was clicked.
         *
         * @type {EventEmitter<any>}
         * @memberof SimpleAppHeaderComponent
         */
        this.onSaveBtnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Output parameter to emit search input value on change.
         *
         * @type {EventEmitter<any>}
         * @memberof SimpleAppHeaderComponent
         */
        this.searchChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Output parameter to emit close button click.
         *
         * @type {EventEmitter<any>}
         * @memberof SimpleAppHeaderComponent
         */
        this.onCloseBtnClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        /**
         * Boolean condition to show search input.
         *
         * @type {boolean}
         * @memberof StatisticMenuPage
         */
        this.showSearch = false;
        /**
         * Search input
         *
         * @type {string}
         * @memberof SimpleAppHeaderComponent
         */
        this.search = "";
        this.headerButtonType = HEADER_BUTTON_TYPE;
    }
    /**
     * Method to handle back button click.
     *
     * @private
     * @memberof SimpleAppHeaderComponent
     */
    SimpleAppHeaderComponent.prototype.onBackButtonClick = function () {
        this.onBackBtnClick.emit();
    };
    /**
     * Method to handle save button click.
     *
     * @private
     * @memberof SimpleAppHeaderComponent
     */
    SimpleAppHeaderComponent.prototype.onSaveButtonClick = function () {
        this.onSaveBtnClick.emit();
    };
    /**
     * Method to handle close button click.
     *
     * @private
     * @memberof SimpleAppHeaderComponent
     */
    SimpleAppHeaderComponent.prototype.onCloseButtonClick = function () {
        this.onCloseBtnClick.emit();
    };
    /**
     * Toggle search input to show or hide.
     *
     * @memberof StatisticMenuPage
     */
    SimpleAppHeaderComponent.prototype.toggleSearch = function () {
        this.showSearch = !this.showSearch;
        if (!this.showSearch) {
            this.clearSearch(false);
        }
    };
    /**
     * Method to emit typed value in search input.
     *
     * @memberof SimpleAppHeaderComponent
     */
    SimpleAppHeaderComponent.prototype.searchType = function () {
        this.searchChange.emit(this.search);
    };
    /**
     * Method to clear search and if param is true then focus the input
     *
     * @param {boolean} focus - param to know if input needs to be focused
     * @memberof SimpleAppHeaderComponent
     */
    SimpleAppHeaderComponent.prototype.clearSearch = function (focus) {
        this.search = "";
        this.searchType();
        if (focus) {
            this.searchInput.setFocus();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('header'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["b" /* HeaderModel */])
    ], SimpleAppHeaderComponent.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SimpleAppHeaderComponent.prototype, "onBackBtnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SimpleAppHeaderComponent.prototype, "onSaveBtnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SimpleAppHeaderComponent.prototype, "searchChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SimpleAppHeaderComponent.prototype, "onCloseBtnClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("searchInput"),
        __metadata("design:type", Object)
    ], SimpleAppHeaderComponent.prototype, "searchInput", void 0);
    SimpleAppHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "simple-app-header",template:/*ion-inline-start:"E:\dev\MechanicApp\MechanicApp\src\components\simple-app-header\simple-app-header.component.html"*/'<ion-header>\n  <ion-navbar [color]="header.navbarColor" [hideBackButton]="header.hideDefaultBackBtn">\n    <ion-buttons left>\n      <button ion-button menuToggle icon-only *ngIf="header.leftButton?.type == headerButtonType.MENU_TOGGLE">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <button class="back-button" (click)="onBackButtonClick()" *ngIf="header.leftButton?.type == headerButtonType.BACK">\n        <ion-icon name="arrow-back"></ion-icon>\n        <span>{{header.leftButton?.text}}</span>\n      </button>\n    </ion-buttons>\n    <ion-title *ngIf="!showSearch">{{(\'menu.\' + header.pageTitle) | translate}}</ion-title>\n    <div *ngIf="showSearch">\n      <ion-input class="search-input" placeholder="Suchen" [(ngModel)]="search" (input)="searchType()" autofocus #searchInput></ion-input>\n        <button ion-button (click)="clearSearch(true)" *ngIf="search != \'\'" class="clear-btn">\n          <ion-icon name="close" class="clear-icon"></ion-icon>\n        </button>\n    </div>\n\n    <ion-buttons right>\n      <button ion-button category="bar-button" (click)="toggleSearch()" *ngIf="header.rightButton?.type == headerButtonType.SEARCH">\n        <ion-icon ios="ios-search" md="ios-search"></ion-icon>\n      </button>\n      <button class="save-button" (click)="onSaveButtonClick()" *ngIf="header.rightButton?.type == headerButtonType.SAVE">\n        <ion-icon name="checkmark"></ion-icon>\n        <span>{{header.rightButton?.text}}</span>\n      </button>\n      <button class="close-button" (click)="onCloseButtonClick()" *ngIf="header.rightButton?.type == headerButtonType.CLOSE">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>'/*ion-inline-end:"E:\dev\MechanicApp\MechanicApp\src\components\simple-app-header\simple-app-header.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SimpleAppHeaderComponent);
    return SimpleAppHeaderComponent;
}());

//# sourceMappingURL=simple-app-header.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleAppHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simple_app_header_component__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SimpleAppHeaderModule = /** @class */ (function () {
    function SimpleAppHeaderModule() {
    }
    SimpleAppHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__simple_app_header_component__["b" /* SimpleAppHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__simple_app_header_component__["b" /* SimpleAppHeaderComponent */]
            ]
        })
    ], SimpleAppHeaderModule);
    return SimpleAppHeaderModule;
}());

//# sourceMappingURL=simple-app-header.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonModel; });
var ButtonModel = /** @class */ (function () {
    function ButtonModel(text, value, bgColor, inactive, type) {
        this.text = text;
        if (value) {
            this.value = value;
        }
        if (bgColor) {
            this.bgColor = bgColor;
        }
        if (inactive != undefined) {
            this.inactive = inactive;
        }
        if (type) {
            this.type = type;
        }
    }
    return ButtonModel;
}());

//# sourceMappingURL=ButtonModel.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconedMenuItem; });
/**
 * Iconed Menu Item Data Model.
 *
 * @export
 * @class IconedMenuItem
 */
var IconedMenuItem = /** @class */ (function () {
    function IconedMenuItem(title, pageToOpen, icon, parameter, enabled) {
        if (enabled === void 0) { enabled = true; }
        /**
         * Item is enabled or not
         *
         * @type {boolean}
         * @memberof IconedMenuItem
         */
        this.enabled = true;
        this.title = title;
        if (icon) {
            this.icon = icon;
        }
        if (parameter != undefined) {
            this.parameter = parameter;
        }
        this.enabled = enabled;
        this.pageToOpen = pageToOpen;
    }
    return IconedMenuItem;
}());

//# sourceMappingURL=IconedMenuItem.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconedMenuItemModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__iconed_menu_item_component__ = __webpack_require__(318);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var IconedMenuItemModule = /** @class */ (function () {
    function IconedMenuItemModule() {
    }
    IconedMenuItemModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__iconed_menu_item_component__["a" /* IconedMenuItemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */],
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__iconed_menu_item_component__["a" /* IconedMenuItemComponent */]
            ]
        })
    ], IconedMenuItemModule);
    return IconedMenuItemModule;
}());

//# sourceMappingURL=iconed-menu-item.component.module.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconedMenuItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__model_frontend_common_IconedMenuItem__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Iconed Menu Item Component
 *
 * @export
 * @class IconedMenuItemComponent
 */
var IconedMenuItemComponent = /** @class */ (function () {
    function IconedMenuItemComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__model_frontend_common_IconedMenuItem__["a" /* IconedMenuItem */])
    ], IconedMenuItemComponent.prototype, "item", void 0);
    IconedMenuItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "iconed-menu-item",template:/*ion-inline-start:"E:\dev\MechanicApp\MechanicApp\src\components\iconed-menu-item\iconed-menu-item.component.html"*/'<ion-card>\n  <ion-card-content>\n    <figure>\n      <img src="assets/imgs/{{item.icon}}" />\n    </figure>\n    <h2>{{(\'menu.\' + item.title) | translate}}</h2>\n  </ion-card-content>\n</ion-card>'/*ion-inline-end:"E:\dev\MechanicApp\MechanicApp\src\components\iconed-menu-item\iconed-menu-item.component.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], IconedMenuItemComponent);
    return IconedMenuItemComponent;
}());

//# sourceMappingURL=iconed-menu-item.component.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_global_utils__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_HeaderModel__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_ButtonModel__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_simple_app_header_simple_app_header_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_IconedMenuItem__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tehnical_storage_storage_provider__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, storage) {
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_HeaderModel__["b" /* HeaderModel */](__WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MENU_TITLE */].HOME, __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE, true, new __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_ButtonModel__["a" /* ButtonModel */](undefined, undefined, undefined, undefined, __WEBPACK_IMPORTED_MODULE_5__components_simple_app_header_simple_app_header_component__["a" /* HEADER_BUTTON_TYPE */].MENU_TOGGLE.toString()));
        this.menuItems = new Array();
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(storage.getLoggedUser())) {
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_IconedMenuItem__["a" /* IconedMenuItem */](__WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MENU_TITLE */].BOOKED_TIMES, "BookedTimesPage", "home-product-editor.png"));
        }
        else {
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_IconedMenuItem__["a" /* IconedMenuItem */](__WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MENU_TITLE */].BOOK_A_TIME, "BookATimePage", "home-fridge.png"));
        }
        this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_IconedMenuItem__["a" /* IconedMenuItem */](__WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MENU_TITLE */].ABOUT_US, "AboutUsPage", "home-grocery-list.png"));
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(storage.getLoggedUser())) {
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_IconedMenuItem__["a" /* IconedMenuItem */](__WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MENU_TITLE */].MESSAGES, "MessagesPage", "home-product-editor.png"));
        }
        else {
            this.menuItems.push(new __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_IconedMenuItem__["a" /* IconedMenuItem */](__WEBPACK_IMPORTED_MODULE_7__app_app_component__["a" /* MENU_TITLE */].CONTACT, "ContactPage", "home-recipe.png"));
        }
    }
    /**
     * Navigate to page
     *
     * @param {IconedMenuItem} page
     * @memberof HomePage
     */
    HomePage.prototype.goToPage = function (page) {
        console.log("Go to page: ", page.pageToOpen);
        if (page.pageToOpen != this.navCtrl.getActive().name) {
            this.navCtrl.setRoot(page.pageToOpen);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\dev\MechanicApp\MechanicApp\src\pages\home\home.page.html"*/'<simple-app-header [header]="headerModel"></simple-app-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row class="iconed-col-xs-6 iconed-col-xs-custom iconed-col-sm-4 iconed-col-md-3">\n      <iconed-menu-item *ngFor="let item of menuItems" [item]="item" (click)="goToPage(item)">\n      </iconed-menu-item>\n    </ion-row>\n  </ion-grid>\n</ion-content>'/*ion-inline-end:"E:\dev\MechanicApp\MechanicApp\src\pages\home\home.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.page.js.map

/***/ })

});
//# sourceMappingURL=5.js.map