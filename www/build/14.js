webpackJsonp([14],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeNewPageModule", function() { return RecipeNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_simple_app_header_simple_app_header_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recipe_new_page__ = __webpack_require__(337);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecipeNewPageModule = /** @class */ (function () {
    function RecipeNewPageModule() {
    }
    RecipeNewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__recipe_new_page__["a" /* RecipeNewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__recipe_new_page__["a" /* RecipeNewPage */]),
                __WEBPACK_IMPORTED_MODULE_2__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__recipe_new_page__["a" /* RecipeNewPage */]
            ]
        })
    ], RecipeNewPageModule);
    return RecipeNewPageModule;
}());

//# sourceMappingURL=recipe-new.page.module.js.map

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

/***/ 337:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_tehnical_toast_toast_provider__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_global_utils__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_backend_recipe_recipe__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_product_product_provider__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_config__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var RecipeNewPage = /** @class */ (function () {
    /**
     * Label of the ingredients
     *
     * @type {string}
     * @memberof RecipeNewPage
     */
    // public ingredientsLabel: string = "";
    function RecipeNewPage(toast, viewCtrl, navCtrl, storage, productProvider, modalCtrl, event, config, navParams) {
        this.toast = toast;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.productProvider = productProvider;
        this.modalCtrl = modalCtrl;
        this.event = event;
        this.config = config;
        this.navParams = navParams;
        if (__WEBPACK_IMPORTED_MODULE_4__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(navParams.get("recipe"))) {
            this.headerModel = new __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["b" /* HeaderModel */]("New recipe", __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE);
            this.recipe = new __WEBPACK_IMPORTED_MODULE_6__model_backend_recipe_recipe__["a" /* Recipe */](undefined, "", [], "", [], this.storage.getLoggedUser());
        }
        else {
            this.headerModel = new __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["b" /* HeaderModel */]("Edit recipe", __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE);
            this.recipe = navParams.get("recipe");
            // this.setIngredientsLabel();
        }
    }
    /**
     * Method to dismiss modal.
     *
     * @memberof GroceryNewPage
     */
    RecipeNewPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    /**
     * Method to load ingredients select popup.
     *
     * @memberof RecipeNewPage
     */
    RecipeNewPage.prototype.loadIngredientsSelect = function () {
        var _this = this;
        var modal = this.modalCtrl.create('RecipeProductPage', { "products": this.recipe.products });
        modal.present();
        modal.onDidDismiss(function (result) {
            if (!__WEBPACK_IMPORTED_MODULE_4__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(result)) {
                if (result.length > 0) {
                    _this.recipe.products = [];
                    result.forEach(function (product) {
                        //TODO - correct his
                        // if (product.checked) {
                        _this.recipe.products.push(product.myProduct);
                        // }
                        //  else {
                        //   this.recipe.products = this.recipe.products.filter(obj => obj.product.name != product.myProduct.product.name);
                        // }
                    });
                    // this.setIngredientsLabel();
                }
            }
        });
    };
    /**
     * Create new recipe.
     *
     * @memberof RecipeNewPage
     */
    RecipeNewPage.prototype.editRecipe = function () {
        if (__WEBPACK_IMPORTED_MODULE_4__utils_global_utils__["a" /* GlobalUtils */].isEmpty(this.recipe.name)) {
            this.toast.showErrorMessage("Recipe title cannot be empty!");
        }
        else if (this.recipe.products.length == 0) {
            this.toast.showErrorMessage("Recipe needs to have ingredients!");
        }
        else {
            if (__WEBPACK_IMPORTED_MODULE_4__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(this.recipe.id)) {
                this.event.publish(this.config.newRecipeCreated, this.recipe);
            }
            else {
                this.event.publish(this.config.recipeEdited, this.recipe);
            }
            this.navCtrl.pop();
        }
    };
    RecipeNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recipe-new',template:/*ion-inline-start:"E:\dev\MechanicApp\MechanicApp\src\pages\recipe\recipe-new\recipe-new.page.html"*/'<simple-app-header [header]="headerModel" (onCloseBtnClick)="dismissModal()"></simple-app-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Title:</ion-label>\n    <ion-input [(ngModel)]="recipe.name"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Description:</ion-label>\n    <ion-textarea [(ngModel)]="recipe.description" rows="4"></ion-textarea>\n  </ion-item>\n  <ion-list>\n    <ion-label class="label-auto">Ingredients:</ion-label>\n    <ion-item *ngFor="let p of recipe.products">\n      <p>{{p.product.name}}</p>\n      <p>{{p.weight}}g</p>\n    </ion-item>\n  </ion-list>\n\n  <ion-row>\n    <ion-col class="center">\n      <button ion-button (click)="loadIngredientsSelect()">Edit Ingredients</button>\n    </ion-col>\n    <ion-col class="center">\n      <button ion-button (click)="editRecipe()">Save</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"E:\dev\MechanicApp\MechanicApp\src\pages\recipe\recipe-new\recipe-new.page.html"*/
        }),
        __param(7, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_product_product_provider__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], Object, __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], RecipeNewPage);
    return RecipeNewPage;
}());

//# sourceMappingURL=recipe-new.page.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_global_utils__ = __webpack_require__(56);

/**
 * Recipe class
 *
 * @export
 * @class Recipe
 */
var Recipe = /** @class */ (function () {
    function Recipe(id, name, products, description, notes, user) {
        this.id = id;
        this.name = name;
        // this.key = key;
        this.products = products;
        this.description = description;
        this.notes = __WEBPACK_IMPORTED_MODULE_0__utils_global_utils__["a" /* GlobalUtils */].isArrayNotNull(notes);
        this.user = user;
    }
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ })

});
//# sourceMappingURL=14.js.map