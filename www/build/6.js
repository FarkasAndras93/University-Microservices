webpackJsonp([6],{

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailPageModule", function() { return RecipeDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_detail_page__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecipeDetailPageModule = /** @class */ (function () {
    function RecipeDetailPageModule() {
    }
    RecipeDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recipe_detail_page__["a" /* RecipeDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recipe_detail_page__["a" /* RecipeDetailPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__recipe_detail_page__["a" /* RecipeDetailPage */]
            ]
        })
    ], RecipeDetailPageModule);
    return RecipeDetailPageModule;
}());

//# sourceMappingURL=recipe-detail.page.module.js.map

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

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MYPRODUCT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyProduct; });
var MYPRODUCT_TYPE;
(function (MYPRODUCT_TYPE) {
    MYPRODUCT_TYPE["FRIDGE"] = "FRIDGE";
    MYPRODUCT_TYPE["GROCERY"] = "GROCERY";
    MYPRODUCT_TYPE["RECIPE"] = "RECIPE";
})(MYPRODUCT_TYPE || (MYPRODUCT_TYPE = {}));
/**
 * My products.
 *
 * @export
 * @class MyProduct
 * @extends {Product}
 */
var MyProduct = /** @class */ (function () {
    function MyProduct(id, product, user, recipeId, weight, myProductType) {
        this.id = id;
        this.product = product;
        this.weight = weight;
        this.user = user;
        this.myProductType = myProductType;
        this.recipeId = recipeId;
    }
    return MyProduct;
}());

//# sourceMappingURL=my-product.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_recipe_recipe_provider__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_backend_recipe_recipe_note__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_global_utils__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tehnical_toast_toast_provider__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_app_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_product_product_provider__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__model_backend_product_grocery_product__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__model_backend_product_my_product__ = __webpack_require__(321);
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};










// import { GroceryListProvider } from '../../../providers/grocery-list/grocery-list.provider';
// import { GroceryList } from '../../../model/backend/grocery-list/message';


var RecipeDetailPage = /** @class */ (function () {
    function RecipeDetailPage(navParams, recipeProvider, productProvider, toast, storage, config) {
        this.navParams = navParams;
        this.recipeProvider = recipeProvider;
        this.productProvider = productProvider;
        this.toast = toast;
        this.storage = storage;
        this.config = config;
        this.recipe = this.navParams.get("recipe");
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["b" /* HeaderModel */](this.recipe.name, __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE);
    }
    RecipeDetailPage.prototype.ionViewDidLoad = function () {
        this.scrollDown();
    };
    /**
     * Method to create grocery list for recipe ingredients.
     *
     * @memberof RecipeDetailPage
     */
    RecipeDetailPage.prototype.createGroceryList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var allProducts_1, productsInFridge_1, productsNeeded_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this.productProvider.getAllProducts()];
                    case 1:
                        allProducts_1 = _a.sent();
                        return [4 /*yield*/, this.productProvider.getProductsInFrigider()];
                    case 2:
                        productsInFridge_1 = _a.sent();
                        productsNeeded_1 = [];
                        this.recipe.products.forEach(function (recipeProduct) {
                            var prodInFridge = productsInFridge_1.filter(function (fridgeProd) { return fridgeProd.product.name == recipeProduct.product.name; })[0];
                            if (__WEBPACK_IMPORTED_MODULE_5__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(prodInFridge) || prodInFridge.weight < recipeProduct.weight) {
                                try {
                                    var product = allProducts_1.filter(function (product) { return product.name = recipeProduct.product.name; })[0];
                                    productsNeeded_1.push(new __WEBPACK_IMPORTED_MODULE_10__model_backend_product_grocery_product__["a" /* GroceryProduct */](0, new __WEBPACK_IMPORTED_MODULE_11__model_backend_product_my_product__["b" /* MyProduct */](undefined, product, _this.storage.getLoggedUser(), undefined, __WEBPACK_IMPORTED_MODULE_5__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(prodInFridge) ? recipeProduct.weight : recipeProduct.weight - prodInFridge.weight, __WEBPACK_IMPORTED_MODULE_11__model_backend_product_my_product__["a" /* MYPRODUCT_TYPE */].GROCERY), false));
                                }
                                catch (error) {
                                    console.log("Error while geting product for name!", error);
                                    _this.toast.showErrorMessage("Error not all products are added to grocery list!");
                                }
                                ;
                            }
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log("Error while returning all products in frigider!", error_1);
                        this.toast.showErrorMessage("Failed to create grocery list for recipe!");
                        return [3 /*break*/, 4];
                    case 4:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Method to add my note to task.
     *
     * @memberof TaskDetailsPage
     */
    RecipeDetailPage.prototype.addNote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.storage.getConfig(this.config.userAlias)];
                    case 1:
                        _a.myNote = (_b.sent()) + ":" + this.myNote;
                        this.recipe.notes.push(new __WEBPACK_IMPORTED_MODULE_4__model_backend_recipe_recipe_note__["a" /* RecipeNote */](0, this.myNote, undefined));
                        this.recipeProvider.updateRecipe(this.recipe).then(function (recipe) {
                            _this.recipe = recipe;
                            // if (GlobalUtils.isUndefinedOrNull(this.recipe.notes)) {
                            //   this.recipe.notes = [];
                            // }
                            // this.recipe.notes.push(note);
                            _this.myNote = "";
                            _this.scrollDown();
                        }).catch(function (err) {
                            console.error("Error while creating recipe note!", err);
                            _this.toast.showErrorMessage("Failed to create note!.");
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Scroll down in comments list.
     *
     * @private
     * @memberof TaskDetailsPage
     */
    RecipeDetailPage.prototype.scrollDown = function () {
        setTimeout(function () {
            try {
                var itemList = document.getElementById("note-scroll");
                if (!__WEBPACK_IMPORTED_MODULE_5__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(itemList.getElementsByTagName("ion-item")[0])) {
                    itemList.scrollTop = itemList.scrollHeight + itemList.getElementsByTagName("ion-item")[0].scrollHeight;
                }
            }
            catch (e) { }
            ;
        }, 250);
    };
    RecipeDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recipe-detail',template:/*ion-inline-start:"E:\dev\MechanicApp\MechanicApp\src\pages\recipe\recipe-detail\recipe-detail.page.html"*/'<simple-app-header [header]="headerModel"></simple-app-header>\n\n<ion-content padding>\n  <h2>Description:</h2>\n  <p>{{recipe.description}}</p>\n  <h2>Ingredients:</h2>\n  <ion-list>\n    <ion-item *ngFor="let p of recipe.products">\n      <p>{{p.product.name}}</p>\n      <p>{{p.weight}}g</p>\n    </ion-item>\n  </ion-list>\n  <button ion-button (click)="createGroceryList()">\n    Create grocery list\n  </button>\n  <h2>Notes:</h2>\n  <div id="note-scroll">\n    <ion-item *ngFor="let note of recipe.notes">\n      <p>{{note.text}}</p>\n      <p>{{note.createdTime | date:"MM/dd/yyyy HH:mm"}}</p>\n    </ion-item>\n  </div>\n  <div class="message-form">\n    <ion-textarea rows="1" [(ngModel)]="myNote" placeholder="Add note"></ion-textarea>\n    <button ion-button secondary (click)="addNote()">\n      <ion-icon ios="md-arrow-forward" md="md-arrow-forward"></ion-icon>\n    </button>\n  </div>\n</ion-content>'/*ion-inline-end:"E:\dev\MechanicApp\MechanicApp\src\pages\recipe\recipe-detail\recipe-detail.page.html"*/
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_8__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_recipe_recipe_provider__["a" /* RecipeProvider */], __WEBPACK_IMPORTED_MODULE_9__providers_product_product_provider__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */], Object])
    ], RecipeDetailPage);
    return RecipeDetailPage;
}());

//# sourceMappingURL=recipe-detail.page.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeNote; });
/**
 * Note for the recipe.
 *
 * @export
 * @class RecipeNote
 */
var RecipeNote = /** @class */ (function () {
    function RecipeNote(id, text, createdTime) {
        this.text = text;
        this.createdTime = createdTime;
        this.id = id;
    }
    return RecipeNote;
}());

//# sourceMappingURL=recipe-note.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryProduct; });
/**
 * Product checked.
 *
 * @export
 * @class GroceryProduct
 */
var GroceryProduct = /** @class */ (function () {
    function GroceryProduct(id, product, checked) {
        this.id = id;
        this.myProduct = product;
        this.checked = checked;
    }
    return GroceryProduct;
}());

//# sourceMappingURL=grocery-product.js.map

/***/ })

});
//# sourceMappingURL=6.js.map