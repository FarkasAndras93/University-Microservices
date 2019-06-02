webpackJsonp([11],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListPageModule", function() { return RecipeListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recipe_list_page__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RecipeListPageModule = /** @class */ (function () {
    function RecipeListPageModule() {
    }
    RecipeListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__recipe_list_page__["a" /* RecipeListPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__recipe_list_page__["a" /* RecipeListPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__recipe_list_page__["a" /* RecipeListPage */]
            ]
        })
    ], RecipeListPageModule);
    return RecipeListPageModule;
}());

//# sourceMappingURL=recipe-list.page.module.js.map

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

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_ButtonModel__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_recipe_recipe_provider__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tehnical_toast_toast_provider__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_app_config__ = __webpack_require__(25);
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









var RecipeListPage = /** @class */ (function () {
    function RecipeListPage(navCtrl, recipeProvider, toast, modalCtrl, event, config, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.recipeProvider = recipeProvider;
        this.toast = toast;
        this.modalCtrl = modalCtrl;
        this.event = event;
        this.config = config;
        this.storage = storage;
        /**
         * Add new recipe to recipe list.
         *
         * @memberof RecipeListPage
         */
        this.addNewRecipe = function (recipe) {
            _this.recipeProvider.createRecipe(recipe).then(function (newRecipe) {
                _this.recipeList.push(newRecipe);
                _this.toast.showSuccessMessage("Recipe list was created.", undefined, false);
            }).catch(function (error) {
                console.log("Error while creating recipe!");
                _this.toast.showErrorMessage("Failed to create recipe.", undefined, false);
            });
        };
        /**
         * Edit recipe in the recipe list.
         *
         * @memberof RecipeListPage
         */
        this.editRecipeInList = function (recipe) {
            _this.recipeProvider.updateRecipe(recipe).then(function (updatedRecipe) {
                _this.recipeList.filter(function (result) { return result.id == recipe.id; })[0] = recipe;
                _this.toast.showSuccessMessage("Recipe list was edited.", undefined, false);
            }).catch(function (error) {
                console.log("Error while editing recipe!");
                _this.toast.showErrorMessage("Failed to edit recipe.", undefined, false);
            });
        };
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["b" /* HeaderModel */]("Recipe List", __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE, true, new __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_ButtonModel__["a" /* ButtonModel */](undefined, undefined, undefined, undefined, __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_component__["a" /* HEADER_BUTTON_TYPE */].MENU_TOGGLE.toString()));
    }
    RecipeListPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.recipeProvider.getRecipeList(this.storage.getLoggedUser()).then(function (recipeList) {
            _this.recipeList = recipeList;
        }).catch(function (error) {
            console.error("Error while geting recipe list from backend!");
            _this.toast.showErrorMessage("Error while geting recipe list from backend!");
        });
        this.event.subscribe(this.config.newRecipeCreated, this.addNewRecipe);
        this.event.subscribe(this.config.recipeEdited, this.editRecipeInList);
    };
    /**
     * On destroy unsubscribe
     *
     * @memberof RecipeListPage
     */
    RecipeListPage.prototype.ngOnDestroy = function () {
        this.event.unsubscribe(this.config.newRecipeCreated, this.addNewRecipe);
        this.event.unsubscribe(this.config.recipeEdited, this.editRecipeInList);
    };
    RecipeListPage.prototype.removeRecipe = function (event, recipe) {
        var _this = this;
        event.stopPropagation();
        this.recipeProvider.deleteRecipe(recipe).then(function (result) {
            if (result) {
                _this.recipeList = _this.recipeList.filter(function (obj) { return obj.id != recipe.id; });
            }
            else {
                _this.toast.showSuccessMessage("Failed to delete recipe.", undefined, false);
            }
        }).catch(function (error) {
            console.log("Error while deleting recipe!");
            _this.toast.showErrorMessage("Failed to delete recipe.", undefined, false);
        });
    };
    /**
     * Method to open recipe details.
     *
     * @memberof RecipeListPage
     */
    RecipeListPage.prototype.openRecipeDetails = function (recipe) {
        this.navCtrl.push("RecipeDetailPage", { "recipe": recipe });
    };
    /**
     * Method to navigate to edit recipe page.
     *
     * @param {Recipe} recipe
     * @memberof RecipeListPage
     */
    RecipeListPage.prototype.editRecipe = function (event, recipe) {
        event.stopPropagation();
        this.navCtrl.push("RecipeNewPage", { "recipe": recipe });
    };
    /**
     * Method to navigate to new recipe page.
     *
     * @memberof RecipeListPage
     */
    RecipeListPage.prototype.goToNewRecipePage = function () {
        this.navCtrl.push("RecipeNewPage");
    };
    RecipeListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'recipe-list',template:/*ion-inline-start:"E:\dev\MechanicApp\MechanicApp\src\pages\recipe\recipe-list\recipe-list.page.html"*/'<simple-app-header [header]="headerModel"></simple-app-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let recipe of recipeList" (click)="openRecipeDetails(recipe)">\n      <h2>{{recipe.name}}</h2>\n      <p>{{recipe.description}}</p>\n      <ion-buttons item-right>\n        <button ion-fab clear (click)="editRecipe($event, recipe)" color="bluedark" class="list-item-button" style="margin-right:2px">\n          <ion-icon name="md-create"></ion-icon>\n        </button>\n        <button ion-fab clear (click)="removeRecipe($event, recipe)" color="bluedark" class="list-item-button">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-fab right bottom>\n  <button ion-fab (click)="goToNewRecipePage()" color="bluedark">\n    <ion-icon name="add"></ion-icon>\n  </button>\n</ion-fab>'/*ion-inline-end:"E:\dev\MechanicApp\MechanicApp\src\pages\recipe\recipe-list\recipe-list.page.html"*/
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_recipe_recipe_provider__["a" /* RecipeProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], Object, __WEBPACK_IMPORTED_MODULE_8__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */]])
    ], RecipeListPage);
    return RecipeListPage;
}());

//# sourceMappingURL=recipe-list.page.js.map

/***/ })

});
//# sourceMappingURL=11.js.map