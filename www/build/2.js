webpackJsonp([2],{

/***/ 299:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlanNewPageModule", function() { return PlanNewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__plan_new_page__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__ = __webpack_require__(310);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__ = __webpack_require__(312);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var PlanNewPageModule = /** @class */ (function () {
    function PlanNewPageModule() {
    }
    PlanNewPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__plan_new_page__["a" /* PlanNewPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__plan_new_page__["a" /* PlanNewPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__pipes_pipes_module__["a" /* PipesModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__plan_new_page__["a" /* PlanNewPage */]
            ]
        })
    ], PlanNewPageModule);
    return PlanNewPageModule;
}());

//# sourceMappingURL=plan-new.page.module.js.map

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

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PipesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_transformator_map_transformator_pipe__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_text_search_full_text_search_pipe__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__grocery_products_order_grocery_products_order_pipe__ = __webpack_require__(315);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PipesModule = /** @class */ (function () {
    function PipesModule() {
    }
    PipesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__map_transformator_map_transformator_pipe__["a" /* MapTransformatorPipe */],
                __WEBPACK_IMPORTED_MODULE_2__full_text_search_full_text_search_pipe__["a" /* FullTextSearchPipe */],
                __WEBPACK_IMPORTED_MODULE_3__grocery_products_order_grocery_products_order_pipe__["a" /* GroceryProductsOrderPipe */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__map_transformator_map_transformator_pipe__["a" /* MapTransformatorPipe */],
                __WEBPACK_IMPORTED_MODULE_2__full_text_search_full_text_search_pipe__["a" /* FullTextSearchPipe */],
                __WEBPACK_IMPORTED_MODULE_3__grocery_products_order_grocery_products_order_pipe__["a" /* GroceryProductsOrderPipe */]
            ]
        })
    ], PipesModule);
    return PipesModule;
}());

//# sourceMappingURL=pipes.module.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapTransformatorPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapTransformatorPipe = /** @class */ (function () {
    function MapTransformatorPipe() {
    }
    /**
     * Transforms a map list to an object list. Usefull on map iteration with ngFor.
     *
     * @param {*} value
     * @param {any[]} [args]
     * @returns {Object[]}
     * @memberof MapTransformatorPipe
     */
    MapTransformatorPipe.prototype.transform = function (value, args) {
        var result = [];
        value.forEach(function (entryVal, entryKey) {
            result.push({
                key: entryKey,
                val: entryVal
            });
        });
        return result;
    };
    MapTransformatorPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'mapTransformator' })
    ], MapTransformatorPipe);
    return MapTransformatorPipe;
}());

//# sourceMappingURL=map-transformator.pipe.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullTextSearchPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_global_utils__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FullTextSearchPipe = /** @class */ (function () {
    function FullTextSearchPipe() {
    }
    /**
     * Method to search in a list of objects for object property value. Also works if porperty is an array of object and the query need to match
     * one object property from array.
     *
     * @param {*} value - array of object
     * @param {string} query - searched string
     * @param {string} field - object property name
     * @param {string} [subField] - subfield name
     * @param {string} [ownJid] - not the id of object filtered
     * @returns {*} - whole array or the filtered array
     * @memberof FullTextSearchPipe
     */
    FullTextSearchPipe.prototype.transform = function (value, query, field, subFields, ownJid) {
        var _this = this;
        return query ? value.reduce(function (prev, next) {
            if (!__WEBPACK_IMPORTED_MODULE_1__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(subFields)) {
                var attrValue = !__WEBPACK_IMPORTED_MODULE_1__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(ownJid) ? _this.attrValue(subFields, next[field].filter(function (user) { return user.jid != ownJid; })[0]) : _this.attrValue(subFields, next[field]);
                if (attrValue.toLowerCase().includes(query.toLowerCase())) {
                    prev.push(next);
                }
            }
            else if (__WEBPACK_IMPORTED_MODULE_1__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(subFields) && next[field].toLowerCase().includes(query.toLowerCase())) {
                prev.push(next);
            }
            return prev;
        }, []) : value;
    };
    FullTextSearchPipe.prototype.attrValue = function (dotSeparateField, value) {
        var fields = dotSeparateField.split('.');
        var cnt = 0;
        while (!__WEBPACK_IMPORTED_MODULE_1__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(value[fields[cnt]]) && cnt < fields.length) {
            value = value[fields[cnt++]];
        }
        if (fields.length === cnt) {
            return value;
        }
        return "";
    };
    FullTextSearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'fullTextSearch',
            pure: false
        })
    ], FullTextSearchPipe);
    return FullTextSearchPipe;
}());

//# sourceMappingURL=full-text-search.pipe.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroceryProductsOrderPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_global_utils__ = __webpack_require__(56);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var GroceryProductsOrderPipe = /** @class */ (function () {
    function GroceryProductsOrderPipe() {
    }
    /**
     * Orders grocery products by their check state.
     *
     * @param {*} value
     * @param {GroceryProduct[]} [args]
     * @returns {GroceryProduct[]}
     * @memberof GroceryProductsOrderPipe
     */
    GroceryProductsOrderPipe.prototype.transform = function (groceryList, args) {
        if (!__WEBPACK_IMPORTED_MODULE_1__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(groceryList)) {
            groceryList.sort(function (grocery1, grocery2) {
                if (grocery1.checked && !grocery2.checked) {
                    return 1;
                }
                else if (!grocery1.checked && grocery2.checked) {
                    return -1;
                }
                else {
                    return 0;
                }
            });
        }
        return groceryList;
    };
    GroceryProductsOrderPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'groceryProductsOrder',
            pure: false
        })
    ], GroceryProductsOrderPipe);
    return GroceryProductsOrderPipe;
}());

//# sourceMappingURL=grocery-products-order.pipe.js.map

/***/ }),

/***/ 330:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanNewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_ButtonModel__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tehnical_toast_toast_provider__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_plan_plan_provider__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_recipe_recipe_provider__ = __webpack_require__(210);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { format } from 'date-fns';
var PlanNewPage = /** @class */ (function () {
    function PlanNewPage(navCtrl, modalCtrl, planProvider, toast, storage, recipeProvider, viewCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.planProvider = planProvider;
        this.toast = toast;
        this.storage = storage;
        this.recipeProvider = recipeProvider;
        this.viewCtrl = viewCtrl;
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__["b" /* HeaderModel */]("New Plan", undefined, true, undefined, new __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_ButtonModel__["a" /* ButtonModel */](undefined, undefined, undefined, undefined, __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_component__["a" /* HEADER_BUTTON_TYPE */].CLOSE.toString()));
    }
    PlanNewPage.prototype.ngOnInit = function () {
        this.recipeProvider.getRandomRecipe(this.storage.getLoggedUser().id).then(function (recipe) {
            // this.plan = new Plan(undefined, format(new Date(), "YYYY-MM-DD"), recipe, this.storage.getLoggedUser());
        });
    };
    /**
     * Get new random recipe
     *
     * @memberof PlanNewPage
     */
    PlanNewPage.prototype.newRandomRecipe = function () {
        var _this = this;
        this.recipeProvider.getRandomRecipe(this.storage.getLoggedUser().id).then(function (recipe) {
            _this.plan.recipe = recipe;
        });
    };
    /**
     * Method to save plan.
     *
     * @memberof PlanNewPage
     */
    PlanNewPage.prototype.savePlan = function () {
        this.viewCtrl.dismiss(this.plan);
    };
    /**
     * Method to dismiss modal.
     *
     * @memberof TaskQuestionPage
     */
    PlanNewPage.prototype.dismissModal = function () {
        this.viewCtrl.dismiss();
    };
    PlanNewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'plan-new',template:/*ion-inline-start:"E:\dev\MechanicApp\MechanicApp\src\pages\plan\plan-new\plan-new.page.html"*/'<simple-app-header [header]="headerModel" (onCloseBtnClick)="dismissModal()"></simple-app-header>\n\n<ion-content padding *ngIf="plan">\n  <ion-item>\n    <ion-label>Date:</ion-label>\n    <ion-datetime displayFormat="YYYY-MM-DD" pickerFormat="YYYY-MM-DD" [(ngModel)]="plan.date" placeholder="Select Date"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>{{plan.recipe.name}}</ion-label>\n    <ion-buttons item-right>\n      <button ion-fab clear (click)="newRandomRecipe()" color="red" class="list-item-button new-random">\n        <ion-icon name="refresh"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-item>\n\n  <ion-row>\n    <ion-col class="center">\n      <button ion-button (click)="savePlan()">Save</button>\n    </ion-col>\n  </ion-row>\n</ion-content>'/*ion-inline-end:"E:\dev\MechanicApp\MechanicApp\src\pages\plan\plan-new\plan-new.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_plan_plan_provider__["a" /* PlanProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_recipe_recipe_provider__["a" /* RecipeProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], PlanNewPage);
    return PlanNewPage;
}());

//# sourceMappingURL=plan-new.page.js.map

/***/ })

});
//# sourceMappingURL=2.js.map