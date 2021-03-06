webpackJsonp([5],{

/***/ 110:
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

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_global_utils__ = __webpack_require__(112);
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
 * ToastProvider
 *
 * Shows toast information on the syste
 *
 * @export
 * @class ToastProvider
 */
var ToastProvider = /** @class */ (function () {
    /**
     * Creates an instance of ToastProvider.
     *
     * @param {ToastController} toastCtrl
     *
     * @memberOf ToastProvider
     */
    function ToastProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    /**
     * Shows an error message, which disappears automatically
     *
     * @param {string} message message to show
     *
     * @memberOf ToastProvider
     */
    ToastProvider.prototype.showErrorMessage = function (message, duration, dismissOnPageChange) {
        duration = duration ? duration : message.length < 50 ? 3000 : message.length > 100 ? 5000 : 4000;
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'middle',
            dismissOnPageChange: __WEBPACK_IMPORTED_MODULE_2__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(dismissOnPageChange) ? true : dismissOnPageChange,
            cssClass: 'error-toast'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    /**
     * Shows a success message, which disappears automatically
     * @param message message
     */
    ToastProvider.prototype.showSuccessMessage = function (message, duration, dismissOnPageChange) {
        duration = duration ? duration : message.length < 50 ? 3000 : message.length > 100 ? 5000 : 4000;
        var toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'middle',
            dismissOnPageChange: dismissOnPageChange,
            cssClass: 'success-toast'
        });
        var p = new Promise(function (resolve, reject) {
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
                resolve();
            });
        });
        toast.present();
        return p;
    };
    ToastProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.provider.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalUtils; });
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
/**
 * Global Utils, contains util method for the whole aplication.
 *
 * @export
 * @class GlobalUtils
 */
var GlobalUtils = /** @class */ (function () {
    function GlobalUtils() {
    }
    GlobalUtils.isEmptyObject = function (obj) {
        return Object.keys(obj).length === 0;
    };
    /**
     * Checks if value is undefined or null
     *
     * @static
     * @param {any} val
     * @returns true if value is undefined or null, otherwise false
     * @memberof GlobalUtils
     */
    GlobalUtils.isUndefinedOrNull = function (value) {
        return value === undefined || value === null;
    };
    /**
     * Checks if string value is undefined or null or empty
     *
     * @static
     * @param {string} val
     * @returns true if value is undefined or null or empty, otherwise false
     * @memberof GlobalUtils
     */
    GlobalUtils.isEmpty = function (value) {
        return value === undefined || value === null || value === "";
    };
    /**
     * Returns true if the given array has all the values equals to 0
     *
     * @static
     * @param {any[]} array
     * @returns {boolean}
     * @memberof GlobalUtils
     */
    GlobalUtils.isArrayFilledWithValue = function (array) {
        var targetValue = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            targetValue[_i - 1] = arguments[_i];
        }
        return array.every(function (value) {
            return (typeof targetValue === "number" || typeof targetValue === "string"
                ? targetValue == Number(value)
                : typeof targetValue === "object" ? targetValue.indexOf(value) != -1
                    : targetValue == value);
        });
    };
    /**
     * Search in map by value and retrun key.
     *
     * @static
     * @param {Map<any, any>} map
     * @param {*} value
     * @memberof GlobalUtils
     */
    GlobalUtils.getMapKeyByValue = function (map, value) {
        var key = null;
        map.forEach(function (entryVal, entryKey) {
            if (entryVal == value) {
                key = entryKey;
            }
        });
        return key;
    };
    /**
     * Method to use async/await with forEach. If this function is used for iteration and there are promises with await inside of iteration then promises are executed
     * first. After the await methods are executed inside of the forEach the execution continues with next lines outside of the forEach.
     *
     * @static
     * @param {any} array
     * @param {any} callback
     * @memberof GlobalUtils
     */
    GlobalUtils.asyncForEach = function (array, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var index;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        index = 0;
                        _a.label = 1;
                    case 1:
                        if (!(index < array.length)) return [3 /*break*/, 4];
                        return [4 /*yield*/, callback(array[index], index, array)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        index++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Method to get parameter value from url.
     *
     * @static
     * @param {*} parameterName
     * @returns
     * @memberof GlobalUtils
     */
    GlobalUtils.getUrlParameter = function (parameterName) {
        var result = null, tmp = [];
        location.search.substr(1).split("&").forEach(function (item) {
            tmp = item.split("=");
            if (tmp[0] === parameterName) {
                result = decodeURIComponent(tmp[1]);
            }
            ;
        });
        return result;
    };
    /**
     * Generate a random string with the given length.
     * @param len
     */
    GlobalUtils.generateRandomString = function (len) {
        var outStr = "", newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(36).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr.toUpperCase();
    };
    /**
     * Return object if it is not null or a new empty array if it is
     *
     * @param object
     */
    GlobalUtils.isArrayNotNull = function (object) {
        return object != undefined && object != null ? object : [];
    };
    /**
     * UUID Generator
     *
     * @private
     * @returns
     * @memberof GlobalUtils
     */
    GlobalUtils.getUUID = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    /**
     * Method to convert html text to normal text. Replace specifig html tags and decode.
     *
     * @static
     * @param {*} text
     * @returns
     * @memberof GlobalUtils
     */
    GlobalUtils.htmlToNormalText = function (text) {
        var parser = new DOMParser;
        var dom = parser.parseFromString('<!doctype html><body>' + text, 'text/html');
        var decodedString = dom.body.textContent;
        return text ? decodedString : '';
    };
    /**
     * Method to create a JID for XMPP usage.
     * @param tenant
     * @param username
     */
    GlobalUtils.createJidForUser = function (tenant, username) {
        // create a valid JID for xmpp login from the username and tenant.
        var jid;
        jid = tenant + '_' + username.toLowerCase().replace(/ /g, '') + '@communication.awinta.net';
        return jid;
    };
    /**
     * Method to get color for string.
     *
     * @static
     * @param {*} str
     * @returns
     * @memberof GlobalUtils
     */
    GlobalUtils.stringToColour = function (str) {
        var hash = 0;
        for (var i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        var colour = '#';
        for (var i = 0; i < 3; i++) {
            var value = (hash >> (i * 8)) & 0xFF;
            colour += ('00' + value.toString(16)).substr(-2);
        }
        return colour;
    };
    /**
     * Method to get random numbers between min and max value.
     *
     * @static
     * @param {number} min
     * @param {number} max
     * @returns
     * @memberof GlobalUtils
     */
    GlobalUtils.getRandomNumberBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    GlobalUtils.convertProductObjectToList = function (products) {
        return Object.keys(products).map(function (i) { return products[i]; });
    };
    return GlobalUtils;
}());

//# sourceMappingURL=global-utils.js.map

/***/ }),

/***/ 123:
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
webpackEmptyAsyncContext.id = 123;

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.page.module": [
		312,
		0
	],
	"../pages/home/home.page.module": [
		314,
		3
	],
	"../pages/login/login.page.module": [
		311,
		4
	],
	"../pages/messages/messages.page.module": [
		313,
		2
	],
	"../pages/register/register.page.module": [
		315,
		1
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
webpackAsyncContext.id = 168;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HEADER_BUTTON_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SimpleAppHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_frontend_common_HeaderModel__ = __webpack_require__(110);
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
            selector: "simple-app-header",template:/*ion-inline-start:"E:\dev\University-Microservices\University-Microservices\src\components\simple-app-header\simple-app-header.component.html"*/'<ion-header>\n\n  <ion-navbar [color]="header.navbarColor" [hideBackButton]="header.hideDefaultBackBtn">\n\n    <ion-buttons left>\n\n      <button ion-button menuToggle icon-only *ngIf="header.leftButton?.type == headerButtonType.MENU_TOGGLE">\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <button class="back-button" (click)="onBackButtonClick()" *ngIf="header.leftButton?.type == headerButtonType.BACK">\n\n        <ion-icon name="arrow-back"></ion-icon>\n\n        <span>{{header.leftButton?.text}}</span>\n\n      </button>\n\n    </ion-buttons>\n\n    <ion-title *ngIf="!showSearch">{{header.pageTitle}}</ion-title>\n\n    <div *ngIf="showSearch">\n\n      <ion-input class="search-input" placeholder="Suchen" [(ngModel)]="search" (input)="searchType()" autofocus #searchInput></ion-input>\n\n        <button ion-button (click)="clearSearch(true)" *ngIf="search != \'\'" class="clear-btn">\n\n          <ion-icon name="close" class="clear-icon"></ion-icon>\n\n        </button>\n\n    </div>\n\n\n\n    <ion-buttons right>\n\n      <button ion-button category="bar-button" (click)="toggleSearch()" *ngIf="header.rightButton?.type == headerButtonType.SEARCH">\n\n        <ion-icon ios="ios-search" md="ios-search"></ion-icon>\n\n      </button>\n\n      <button class="save-button" (click)="onSaveButtonClick()" *ngIf="header.rightButton?.type == headerButtonType.SAVE">\n\n        <ion-icon name="checkmark"></ion-icon>\n\n        <span>{{header.rightButton?.text}}</span>\n\n      </button>\n\n      <button class="close-button" (click)="onCloseButtonClick()" *ngIf="header.rightButton?.type == headerButtonType.CLOSE">\n\n        <ion-icon name="close"></ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>'/*ion-inline-end:"E:\dev\University-Microservices\University-Microservices\src\components\simple-app-header\simple-app-header.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */]])
    ], SimpleAppHeaderComponent);
    return SimpleAppHeaderComponent;
}());

//# sourceMappingURL=simple-app-header.component.js.map

/***/ }),

/***/ 215:
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

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tehnical_storage_storage_provider__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(29);
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




// import { GroceryList } from '../../model/backend/grocery-list/message';

var MessageProvider = /** @class */ (function () {
    function MessageProvider(http, storage, config, userProvider) {
        this.http = http;
        this.storage = storage;
        this.config = config;
        this.userProvider = userProvider;
    }
    /**
     * Method to return messages for logged user.
     * @returns {Promise<MyProduct[]>}
     * @memberof ProductProvider
     */
    MessageProvider.prototype.getMessagesForUser = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // let messages: MessageModel[] = [];
                // messages.push(new MessageModel("Name1", "Phone1", "Subject1", "Message1 Message1 Message1Message1Message1Message1 Message1Message1Message1Message1", "Email1", "1"));
                // messages.push(new MessageModel("Name2", "Phone2", "Subject2", "Message2", "Email2", "1"));
                // messages.push(new MessageModel("Name3", "Phone3", "Subject3", "Message3", "Email3", "1"));
                // messages.push(new MessageModel("Name4", "Phone4", "Subject4", "Message4", "Email4", "1"));
                // messages.push(new MessageModel("Name5", "Phone5", "Subject5", "Message5", "Email5", "1"));
                // return Promise.resolve(messages);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]();
                        headers.append('Content-Type', 'application/json');
                        _this.http.get(_this.config.basePath + "/messages/get/", { headers: headers }).subscribe(function (messages) {
                            return resolve(messages);
                        }, function (error) {
                            console.error("Error while getting my messages", error);
                            return reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Method to creamte message for user.
     *
     * @param {number} userId
     * @param {MyProduct} product
     * @memberof ProductProvider
     */
    MessageProvider.prototype.createMessage = function (message) {
        // message.id = "1";
        // return Promise.resolve(message);
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.config.basePath + "/message/add", message).subscribe(function (message) {
                return resolve(message);
            }, function (error) {
                console.error("Error while creating my product", error);
                return reject(error);
            });
        });
    };
    MessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__tehnical_storage_storage_provider__["a" /* StorageProvider */], Object, __WEBPACK_IMPORTED_MODULE_0__user_user_provider__["a" /* UserProvider */]])
    ], MessageProvider);
    return MessageProvider;
}());

//# sourceMappingURL=message.provider.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login_page__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_user_user_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_storage_storage_provider__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__(109);
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









/**
 * Enums for menu titles.
 *
 * @export
 * @enum {number}
 */
var MENU_TITLE;
(function (MENU_TITLE) {
    MENU_TITLE["LOGIN"] = "LOGIN";
    MENU_TITLE["HOME"] = "HOME";
    MENU_TITLE["BOOK_A_TIME"] = "BOOK_A_TIME";
    MENU_TITLE["BOOKED_TIMES"] = "BOOKED_TIMES";
    MENU_TITLE["ABOUT_US"] = "ABOUT_US";
    MENU_TITLE["CONTACT"] = "CONTACT";
    MENU_TITLE["MESSAGES"] = "MESSAGES";
    MENU_TITLE["LOGOUT"] = "LOGOUT";
})(MENU_TITLE || (MENU_TITLE = {}));
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, event, config, storage, userProvider, translate) {
        var _this = this;
        this.event = event;
        this.config = config;
        this.storage = storage;
        this.userProvider = userProvider;
        this.translate = translate;
        /**
         * Root page
         *
         * @type {*}
         * @memberof MyApp
         */
        this.rootPage = 'LoginPage';
        /**
        * List of pages in logged in state
        *
        * @private
        * @type {Array<SideMenuItem>}
        * @memberof MyApp
        */
        this.userPages = [
            { title: MENU_TITLE.LOGIN, component: 'LoginPage', icon: 'log-in' },
            { title: MENU_TITLE.CONTACT, component: 'ContactPage', icon: 'phone-portrait' }
        ];
        /**
          * List of pages in logged in state
          *
          * @private
          * @type {Array<SideMenuItem>}
          * @memberof MyApp
          */
        this.adminPages = [
            { title: MENU_TITLE.MESSAGES, component: 'MessagesPage', icon: 'mail' },
            { title: MENU_TITLE.HOME, component: 'HomePage', icon: 'home' },
            { title: MENU_TITLE.LOGOUT, component: 'LoginPage', icon: 'log-out' }
        ];
        /**
         * Possible languages to select.
         *
         * @type {[LanguageModel]}
         * @memberof MyApp
         */
        this.languages = [];
        /**
         * State of pharmacy select dropdown.
         *
         * @type {boolean}
         * @memberof MyApp
         */
        this.dropdownOpened = false;
        /**
         * Methods after login was completed.
         *
         * @private
         * @memberof MyApp
         */
        this.loginEventComplete = function () {
            _this.pages = _this.adminPages.map(function (x) { return Object.assign({}, x); });
            // if (this.storage.getLoggedUser().admin) {
            // this.pages.pop();
            // this.pages.push(this.adminPages[0]);
            // this.pages.push(this.loggedInPages[this.loggedInPages.length - 1]);
            // }
        };
        /**
         * Methods after logout was completed.
         *
         * @private
         * @memberof MyApp
         */
        this.logoutEventComplete = function () {
            _this.nav.setRoot("LoginPage");
            _this.pages = _this.userPages;
            _this.storage.saveLocal(_this.config.loginConfig.hasLoggedIn, false);
            _this.storage.clearConfig(_this.config.loginConfig.loggedInUser);
        };
        translate.setDefaultLang('en');
        this.selectedLanguage = { key: 'en', name: 'English' };
        this.languages.push(this.selectedLanguage);
        platform.ready().then(function () {
            _this.pages = _this.userPages;
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //Subscribing to login and logout events
            _this.event.subscribe(_this.config.loginConfig.logoutEventKey, _this.logoutEventComplete);
            _this.event.subscribe(_this.config.loginConfig.loggedInCompleteEventKey, _this.loginEventComplete);
        });
    }
    /**
   * Lifecycle Event ngAfterViewInit used to subscribe to view changes in the navigation.
   * This is used to react on a possible logout caused by a page refresh (F5) in the browser.
   * On every view reload we check if we are still logged in, if not we proceed to the login page
   * to start fresh. If AutoLogin was enabled then the user will automatically be logged in.
   */
    MyApp.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.nav.viewDidLoad.subscribe(function (view) { return __awaiter(_this, void 0, void 0, function () {
            var hasLoggedIn;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.getLocal(this.config.loginConfig.hasLoggedIn)];
                    case 1:
                        hasLoggedIn = _a.sent();
                        if (hasLoggedIn) {
                            if (this.userProvider.isLoggedIn()) {
                                // no need to do anything
                            }
                            else {
                                // something has gone wrong, we should be logged in, but due to page refresh or similar
                                // a logout has taken place => Go to LoginPage for login or perform autologin
                                this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, false);
                                // Only need to react if we are not on the login page anyway
                                if (!(view.instance instanceof __WEBPACK_IMPORTED_MODULE_0__pages_login_login_page__["a" /* LoginPage */])) {
                                    this.nav.setRoot('LoginPage');
                                }
                            }
                        }
                        else {
                            // We have not officially logged in, but gone to one of the pages in the url
                            // this means we need to be redirected to the login page
                            // if (!(view.instance instanceof LoginPage || view.instance instanceof ConfigurationPage || view.instance instanceof ContactPage)) {
                            //   // we are not allowed to be here, so go to login page, if the systemkey is empty then go to configuration page (this happens automatically)
                            //   this.nav.setRoot('LoginPage');
                            // }
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    };
    /**
     *  Visibilitychange event is removed on destroy.
     *
     * @memberof ChatPage
     */
    MyApp.prototype.ngOnDestroy = function () {
        //Unsubscribing to login and logout events
        this.event.unsubscribe(this.config.loginConfig.logoutEventKey, this.logoutEventComplete);
        this.event.unsubscribe(this.config.loginConfig.loggedInCompleteEventKey, this.loginEventComplete);
    };
    /**
     * Opens a page as root page
     *
     * @param {any} page
     * @memberof MyApp
     */
    MyApp.prototype.openPage = function (page) {
        if (page.component != this.nav.getActive().name) {
            console.log('open page ', page);
            if (page.title == MENU_TITLE.LOGOUT) {
                this.event.publish(this.config.loginConfig.logoutEventKey);
            }
            else {
                this.nav.setRoot(page.component);
            }
        }
    };
    /**
     * Method to use selected language.
     *
     * @param {*} language
     * @memberof MyApp
     */
    MyApp.prototype.useLanguage = function (language) {
        this.translate.use(language.key);
        this.selectedLanguage = language;
        this.dropdownOpened = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\dev\University-Microservices\University-Microservices\src\app\app.html"*/'<ion-split-pane>\n\n    <ion-menu [content]="content" *ngIf="pages?.length > 0">\n\n        <ion-content padding>\n\n            <ion-list>\n\n                <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                    <ion-icon name="{{p.icon}}" item-start></ion-icon>\n\n                    <ion-badge *ngIf="p.badgeRight" color="{{p.badgeColor}}" item-end>{{p.badgeValue}}</ion-badge>\n\n                    {{\'menu.\' + p.title | translate}}\n\n                </button>\n\n\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n\n\n    <ion-nav id="nav" [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"E:\dev\University-Microservices\University-Microservices\src\app\app.html"*/
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__app_config__["AppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__app_config__["AppConfig"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__providers_user_user_provider__["a" /* UserProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__providers_user_user_provider__["a" /* UserProvider */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["c" /* TranslateService */]) === "function" && _j || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_global_utils__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_backend_user_user__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_HeaderModel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_frontend_common_ButtonModel__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_simple_app_header_simple_app_header_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_toast_toast_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_user_user_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_tehnical_storage_storage_provider__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_app_config__ = __webpack_require__(29);
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











var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toast, userProvider, event, storage, config) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.userProvider = userProvider;
        this.event = event;
        this.storage = storage;
        this.config = config;
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_HeaderModel__["b" /* HeaderModel */]("Login page", __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE, true, new __WEBPACK_IMPORTED_MODULE_5__model_frontend_common_ButtonModel__["a" /* ButtonModel */](undefined, undefined, undefined, undefined, __WEBPACK_IMPORTED_MODULE_6__components_simple_app_header_simple_app_header_component__["a" /* HEADER_BUTTON_TYPE */].MENU_TOGGLE.toString()));
        this.user = new __WEBPACK_IMPORTED_MODULE_3__model_backend_user_user__["a" /* User */]("", "", "");
    }
    /**
     * On Enter action
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_global_utils__["a" /* GlobalUtils */].isEmpty(this.storage.getLocal(this.config.loginConfig.refreshToken))) {
            this.autologin = true;
            this.userProvider.autoLogin(false).then(function () {
                console.log("autologin successful");
                _this.navCtrl.setRoot("MessagesPage");
            }, function () {
                console.log("Autologin failed");
            });
        }
        ;
    };
    /**
     * Performs a login
     *
     * @returns {Promise<LoginResponseDTO>}
     * @memberof LoginPage
     */
    LoginPage.prototype.login = function () {
        var _this = this;
        return this.userProvider.login(this.user.username, this.user.password)
            .then(function (response) {
            _this.navCtrl.setRoot("MessagesPage");
            return response;
        }, function (error) {
            console.log("Error on login: " + error);
            if (error.status === 401) {
                _this.toast.showErrorMessage("Login data is not valid!");
            }
            else {
                _this.toast.showErrorMessage("Unkown error on login!");
            }
            return error;
        });
    };
    /**
     * Load register page.
     *
     * @memberof LoginPage
     */
    LoginPage.prototype.register = function () {
        this.navCtrl.push("RegisterPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'login',template:/*ion-inline-start:"E:\dev\University-Microservices\University-Microservices\src\pages\login\login.page.html"*/'<simple-app-header [header]="headerModel"></simple-app-header>\n\n\n\n<ion-content padding>\n\n  <form name="loginForm" #f="ngForm">\n\n    <ion-list>\n\n      <ion-item>\n\n        <img item-start src="assets/imgs/login-icon-user.svg" width="24" height="24" />\n\n        <ion-input placeholder="Username" id="login_username" type="text" required [(ngModel)]="user.username"\n\n          name="login_username" #name="ngModel" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"\n\n          class="user-input"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <img item-start src="assets/imgs/login-icon-password.svg" width="24" height="24" />\n\n        <ion-input placeholder="Password" id="login_password" type="password" [(ngModel)]="user.password" name="login_password"\n\n          #name="ngModel" class="password-input"></ion-input>\n\n      </ion-item>\n\n      <ion-item class="remember-me">\n\n        <ion-label i18n>Auto login</ion-label>\n\n        <ion-toggle id="login_enableAutoLogin" [(ngModel)]="autologin" name="login_enableAutoLogin"\n\n          #name="ngModel"></ion-toggle>\n\n      </ion-item>\n\n      \n\n    </ion-list>\n\n\n\n    <button id="login_loginButton" (click)="login()" [disabled]="!f.form.valid" ion-button full i18n>Login</button>\n\n    <button color="light" id="register_registerButton" (click)="register()"  ion-button full i18n>Register</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"E:\dev\University-Microservices\University-Microservices\src\pages\login\login.page.html"*/
        }),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_10__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_8__providers_user_user_provider__["a" /* UserProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */], __WEBPACK_IMPORTED_MODULE_9__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */], Object])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.page.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_tehnical_interceptors_add_auth_provider__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message_provider__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_tehnical_toast_toast_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_tehnical_storage_storage_provider__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/login/login.page.module#LoginPageModule', name: 'LoginPage', segment: 'login.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact/contact.page.module#ContactPageModule', name: 'ContactPage', segment: 'contact.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messages/messages.page.module#MessagesPageModule', name: 'MessagesPage', segment: 'messages.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.page.module#HomePageModule', name: 'HomePage', segment: 'home.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.page.module#RegisterPageModule', name: 'RegisterPage', segment: 'register.page', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_13__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["b" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */],
                // GroceryListProvider,
                __WEBPACK_IMPORTED_MODULE_10__providers_user_user_provider__["a" /* UserProvider */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_0__providers_tehnical_interceptors_add_auth_provider__["a" /* AddAuthInterceptor */],
                    multi: true,
                },
                __WEBPACK_IMPORTED_MODULE_1__providers_message_message_provider__["a" /* MessageProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */], useClass: __WEBPACK_IMPORTED_MODULE_11__providers_tehnical_storage_storage_provider__["b" /* StorageProviderLocal */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* APP_CONFIG_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_12__app_config__["c" /* CONFIG_DEFAULT */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__app_config__["e" /* prefixLocalstorage */], useFactory: __WEBPACK_IMPORTED_MODULE_12__app_config__["d" /* prefixLocalStorageFactory */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_14__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_user_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
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




/**
 * Interceptor to add the access token for cache backend.
 *
 * @export
 * @class AddAuthInterceptor
 * @implements {HttpInterceptor}
 */
var AddAuthInterceptor = /** @class */ (function () {
    function AddAuthInterceptor(events, config, userProvider) {
        this.events = events;
        this.config = config;
        this.userProvider = userProvider;
        this.subscribeToUpdatedTokensAvailableEvent();
        this.subscribeToLogoutEvent();
    }
    /**
     * Adds the Bearer to request header for if the the cache backend will be requested.
     *
     * @param {HttpRequest<any>} req
     * @param {HttpHandler} next
     * @returns {Observable<HttpEvent<any>>}
     * @memberof AddAuthInterceptor
     */
    AddAuthInterceptor.prototype.intercept = function (req, next) {
        console.log("Intercepting:", req);
        if (req.url.startsWith(this.config.basePath)) {
            req = req.clone({
                setHeaders: {
                    Authorization: "Bearer " + this._accessToken
                }
            });
            return next.handle(req);
        }
        else {
            return next.handle(req);
        }
    };
    /**
     * Subscribe to the LoggedInEvent.
     * If it is fired the accessToken will be adopted.
     * @private
     *
     * @memberOf AddAuthInterceptor
     */
    AddAuthInterceptor.prototype.subscribeToUpdatedTokensAvailableEvent = function () {
        var _this = this;
        this.events.subscribe(this.config.loginConfig.updatedTokensAvailableEventKey, function (newTokens) {
            _this._accessToken = newTokens.accessToken;
        });
    };
    /**
     * Removes the access token if user logged out.
     *
     * @private
     *
     * @memberof AddAuthInterceptor
     */
    AddAuthInterceptor.prototype.subscribeToLogoutEvent = function () {
        var _this = this;
        this.events.subscribe(this.config.loginConfig.logoutEventKey, function () {
            _this._accessToken = null;
        });
    };
    AddAuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */], Object, __WEBPACK_IMPORTED_MODULE_0__user_user_provider__["a" /* UserProvider */]])
    ], AddAuthInterceptor);
    return AddAuthInterceptor;
}());

//# sourceMappingURL=add-auth.provider.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_LOGIN_CONFIG */
/* unused harmony export DEFAULT_STATISTIC_CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CONFIG_DEFAULT; });
/* unused harmony export dynamicConfig */
/* harmony export (immutable) */ __webpack_exports__["d"] = prefixLocalStorageFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return prefixLocalstorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APP_CONFIG_TOKEN; });
/* unused harmony export BACKEND_RES_LOGIN */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);

var DEFAULT_LOGIN_CONFIG = {
    systemKey: 'test',
    loginDataKey: 'loginData',
    loggedInUser: 'loggedInUser',
    accessToken: 'accessToken',
    refreshToken: 'refreshToken',
    updatedTokensAvailableEventKey: 'user:loggedIn',
    loggedInCompleteEventKey: 'user:loggedInComplete',
    logoutEventKey: 'system:logout',
    hasLoggedIn: 'hasLoggedIn'
};
var DEFAULT_STATISTIC_CONFIG = {
    statisticSaveEvent: "statistic:saved",
    statisticFilterReadyEvent: "statistic:filterReady",
    statisticMaxResultsNumber: 1464,
};
var CONFIG_DEFAULT = {
    loginConfig: DEFAULT_LOGIN_CONFIG,
    offlineEventKey: 'system:offline',
    onlineEventKey: 'system:online',
    basePath: 'http://messagesapp-env.xr4325pfap.us-east-2.elasticbeanstalk.com',
    basePath2: 'http://userauthenticationservice-env.viwbvxtbrz.us-east-2.elasticbeanstalk.com',
    configChangedEvent: 'config:changed',
    openOrdersStorageKey: "OpenOrders",
    statisticConfig: DEFAULT_STATISTIC_CONFIG,
    latestInfoGetTime: "latestInfoGetTime",
    latestInfoDialogShowEvent: "latestInfoDialogShow",
    latestInfoDialogCloseEvent: "latestInfoDialogClose",
    appName: "MyApp",
    userAlias: "userAlias",
    newRecipeCreated: "newRecipeCreated",
    recipeEdited: "recipeEdited",
    fridgeUrl: "fridgeUrl"
};
/**
 * Determines the used configuration.
 * Returns the user defined configuration from storage if exists.
 * Otherwise the default configuration is returned
 *
 * @export
 * @param {ConfigKey} key
 * @returns {*}
 */
function dynamicConfig(key, prefix) {
    console.log("Getting config value for key:", key);
    var result;
    if (localStorage.getItem(prefix + key.storage) == null) {
        result = key.defVal;
    }
    else if (key.primitive == 'number') {
        result = Number(localStorage.getItem(prefix + key.storage));
    }
    else if (key.primitive == 'string') {
        result = localStorage.getItem(prefix + key.storage);
    }
    else {
        result = JSON.parse(localStorage.getItem(prefix + key.storage));
    }
    console.log("Value of ", key, " is ", result);
    return result;
}
/**
 * Function, which determines the request context using the url of the current site. Ignores basepath only adds all additional paths.
 * @returns {string} prefix in the form of e.g. {chefApp-AppPath/SubDirectory/} {chefApp-AppPath/} {chefApp-/}
 */
function prefixLocalStorageFactory() {
    var prefix;
    prefix = CONFIG_DEFAULT.appName + "-" + window.location.pathname;
    return prefix;
}
var prefixLocalstorage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('prefixLocalstorage');
var APP_CONFIG_TOKEN = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* InjectionToken */]('app.config');
var BACKEND_RES_LOGIN = 'user/login';
//# sourceMappingURL=app.config.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageProviderLocal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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



/**
 * Interface for all available use cases regarding to store the login data.
 *
 * @export
 * @abstract
 * @class StorageProvider
 */
var StorageProvider = /** @class */ (function () {
    function StorageProvider() {
    }
    return StorageProvider;
}());

/**
 * Handles the storage in LocalStorage.
 *
 * @class StorageProviderLocal
 * @implements {StorageProvider}
 */
var StorageProviderLocal = /** @class */ (function (_super) {
    __extends(StorageProviderLocal, _super);
    function StorageProviderLocal(config, events, prefix) {
        var _this = _super.call(this) || this;
        _this.config = config;
        _this.events = events;
        _this.prefix = prefix;
        _this.events.subscribe(_this.config.loginConfig.logoutEventKey, function () {
            Object.keys(localStorage).forEach(function (key) {
                if (key.startsWith(prefix)
                    && !key.startsWith(prefix + 'config-')) {
                    localStorage.removeItem(key);
                }
            });
        });
        return _this;
    }
    /**
     * Saves the value at the given key
     *
     *
     * @param {string} key key
     * @param {*} value value
     * @returns {Promise<any>} result
     *
     * @memberOf StorageProviderLocal
     */
    StorageProviderLocal.prototype.saveLocal = function (key, value) {
        localStorage.setItem(this.prefix + key, JSON.stringify(value));
        return Promise.resolve(value);
    };
    /**
     * Gets the local value identified by the given key
     *
     *
     * @param {string} key key
     * @returns {Promise<any>} result
     *
     * @memberOf StorageProviderLocal
     */
    StorageProviderLocal.prototype.getLocal = function (key) {
        return JSON.parse(localStorage.getItem(this.prefix + key));
    };
    /**
     * Removes the value at the given key
     *
     * @param {string} key key
     * @returns {Promise<any>} result
     *
     * @memberOf StorageProviderLocal
  
     */
    StorageProviderLocal.prototype.deleteLocal = function (key) {
        return Promise.resolve(localStorage.removeItem(this.prefix + key));
    };
    StorageProviderLocal.prototype.saveConfig = function (key, value) {
        if (typeof value == 'object') {
            this.saveLocal('config-' + key, JSON.stringify(value));
        }
        else {
            this.saveLocal('config-' + key, value);
        }
        return Promise.resolve(value);
    };
    StorageProviderLocal.prototype.getConfig = function (key) {
        try {
            return JSON.parse(localStorage.getItem(this.prefix + 'config-' + key));
        }
        catch (e) {
            return localStorage.getItem(this.prefix + 'config' + key);
        }
    };
    StorageProviderLocal.prototype.clearConfig = function (key) {
        localStorage.removeItem(this.prefix + 'config-' + key);
        return key;
    };
    /**
     * Method to get logged user from local storage.
     *
     * @memberof StorageProviderLocal
     */
    StorageProviderLocal.prototype.getLoggedUser = function () {
        return this.getLocal(this.config.loginConfig.loggedInUser);
    };
    StorageProviderLocal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* APP_CONFIG_TOKEN */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["e" /* prefixLocalstorage */])),
        __metadata("design:paramtypes", [Object, __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["b" /* Events */], String])
    ], StorageProviderLocal);
    return StorageProviderLocal;
}(StorageProvider));

/**
 * Handles the storage to the SecureStorage.
 *
 * @class StorageProviderSecure
 * @implements {StorageProvider}
//  */
// @Injectable()
// export class StorageProviderSecure extends StorageProvider {
//   private currentStorage;
//   constructor( @Inject(APP_CONFIG_TOKEN) private config: AppConfig, private storage: Storage, private secureStorage: SecureStorage) {
//     super();
//   }
//   private init(): Promise<SecureStorageObject> {
//     if (this.currentStorage == undefined) {
//       return this.secureStorage.create('patientenapp_sec_storage');
//     }
//     else {
//       return Promise.resolve(this.currentStorage);
//     }
//   }
//   /**
//    * The instance used to store the data.
//    *
//    * @memberOf StorageProviderSecure
//    */
//   /**
//    * Saves the given logindata and token to storage.
//    *
//    * @param {LoginData} loginData
//    * @param {string} token
//    * @returns {Promise<boolean>} with value true if login is successfully saved.
//    * In other cases the promise is rejected.
//    *
//    * @memberOf StorageProviderSecure
//    */
//   public saveLogin(loginData: LoginData, token: LoginResponseDTO): Promise<boolean> {
//     return new Promise((resolve, reject) => {
//       console.log("Save login in secureStorage");
//       this.init()
//         .then((obj) => {
//           console.log('Storage is ready!');
//           return obj;
//         })
//         .then((obj) => {
//           console.log('RefreshToken saved!');
//           return obj.set(this.config.loginDataKey, JSON.stringify(loginData));
//         })
//         .catch(error => { console.error("Error during save login in secureStorage", error); reject(error); })
//     });
//   }
//   saveConfig(key: string, value: string): Promise<any> {
//     throw new Error("Method not implemented.");
//   }
//   getConfig(key: string): string {
//     throw new Error("Method not implemented.");
//   }
//   clearConfig(key: string): string {
//     throw new Error("Method not implemented.");
//   }
//   /**
//    * Gets the saved logindata from storage.
//    *
//    * @returns {Promise<LoginData>} resolved if the LoginData could be loaded
//    *
//    * @memberOf StorageProviderSecure
//    */
//   public determineLogin(): Promise<LoginData> {
//     return new Promise((resolve, reject) => {
//       this.init().then((obj) => {
//         obj.get(this.config.loginDataKey)
//           .then((result) => {
//             try {
//               let storedLoginData: LoginData = JSON.parse(result);
//               resolve(storedLoginData);
//             } catch (error) {
//               console.error("Error loading login data. Cause:", error);
//               reject(error);
//             }
//           })
//           .catch((result) => { console.error(result); reject(result); })
//       })
//     });
//   }
//   /**
//      * Gets the saved refresh token from storage.
//      *
//      * @returns {Promise<string>} resolved if the refresh token could be loaded
//      *
//      * @memberOf StorageProviderSecure
//      */
//   determineRefreshToken(): Promise<string> {
//     return new Promise((resolve, reject) => {
//       this.init().then((obj) => {
//         obj.get(this.config.refreshToken)
//           .then((result) => resolve(result))
//           .catch((result) => { console.error(result); reject(result); })
//       });
//     });
//   }
//   /**
//    * Saves the value at the given key
//    *
//    *
//    * @param {string} key key
//    * @param {*} value value
//    * @returns {Promise<any>} result
//    *
//    * @memberOf StorageProviderLocal
//    */
//   saveLocal(key: string, value: any): Promise<any> {
//     return this.storage.set(key, value);
//   }
//   /**
//    * Gets the local value identified by the given key
//    *
//    *
//    * @param {string} key key
//    * @returns {Promise<any>} result
//    *
//    * @memberOf StorageProviderLocal
//    */
//   getLocal(key: string): Promise<any> {
//     return this.storage.get(key);
//   }
//   /**
//    * Removes the value at the given key
//    *
//    * @param {string} key key
//    * @returns {Promise<any>} result
//    *
//    * @memberOf StorageProviderLocal
//    */
//   deleteLocal(key: string): Promise<any> {
//     return this.storage.remove(key);
//   }
// }
//# sourceMappingURL=storage.provider.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ACCESS_TOKEN_KEYS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tehnical_storage_storage_provider__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__ = __webpack_require__(299);
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






var ACCESS_TOKEN_KEYS;
(function (ACCESS_TOKEN_KEYS) {
    ACCESS_TOKEN_KEYS["USER_ID"] = "jti";
    ACCESS_TOKEN_KEYS["EXPIRATION_TIME"] = "exp";
})(ACCESS_TOKEN_KEYS || (ACCESS_TOKEN_KEYS = {}));
var UserProvider = /** @class */ (function () {
    function UserProvider(http, event, config, storage) {
        var _this = this;
        this.http = http;
        this.event = event;
        this.config = config;
        this.storage = storage;
        this.refreshUpdateStarted = false;
        /**
        * Methods after logout was completed.
        *
        * @private
        * @memberof MyApp
        */
        this.logoutEventComplete = function () {
            _this._accessToken = undefined;
            if (_this.refreshTokenUpdater) {
                clearTimeout(_this.refreshTokenUpdater);
            }
        };
        console.log('Hello RestProvider Provider');
        this.event.subscribe(this.config.loginConfig.logoutEventKey, this.logoutEventComplete);
    }
    //TODO - encode in md5 the password
    UserProvider.prototype.login = function (username, password) {
        // let hash = Md5.hashStr("password");
        // this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
        // this.event.publish(this.config.loginConfig.updatedTokensAvailableEventKey, { accessToken: "asd" });
        // return Promise.resolve(new User("Name1", "Username2", ""));
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.config.basePath2 + "/login", { "username": username, "password": password }, { headers: headers }).subscribe(function (token) {
                _this._accessToken = token.accessToken;
                _this.refreshTokenBeforeExpire(token.accessToken);
                _this.event.publish(_this.config.loginConfig.loggedInCompleteEventKey);
                _this.event.publish(_this.config.loginConfig.updatedTokensAvailableEventKey, token);
                _this.storage.saveLocal(_this.config.loginConfig.hasLoggedIn, true);
                _this.storage.saveLocal(_this.config.loginConfig.refreshToken, token.refreshToken);
                // this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
                return resolve(token);
            }, function (error) {
                console.error("Error while loggin in application", error);
                return reject(error);
            });
        });
    };
    //TODO - encode in md5 the password
    UserProvider.prototype.register = function (name, username, password) {
        // let hash = Md5.hashStr("password");
        // return Promise.resolve(new User("Name1", "Username1", hash.toString()));
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.config.basePath2 + "/register", { "name": name, "username": username, "password": password }, { headers: headers }).subscribe(function (result) {
                // this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
                // this.storage.saveLocal(this.config.loginConfig.hasLoggedIn, true);
                // this.storage.saveLocal(this.config.loginConfig.loggedInUser, loggedUser);
                return resolve(result);
            }, function (error) {
                console.error("Error while loggin in application", error);
                return reject(error);
            });
        });
    };
    /**
   * Method to return messages for logged user.
   * @returns {Promise<MyProduct[]>}
   * @memberof ProductProvider
   */
    UserProvider.prototype.getAllUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // let users: User[] = [];
                // users.push(new User("Name1", undefined, undefined));
                // users.push(new User("Name2", undefined, undefined));
                // users.push(new User("Name3", undefined, undefined));
                // users.push(new User("Name4", undefined, undefined));
                // users.push(new User("Name5", undefined, undefined));
                // users[0].id = "1";
                // users[1].id = "2";
                // users[2].id = "3";
                // users[3].id = "4";
                // users[4].id = "5";
                // return Promise.resolve(users);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
                        headers.append('Content-Type', 'application/json');
                        _this.http.get(_this.config.basePath2 + "/users/get", { headers: headers }).subscribe(function (users) {
                            return resolve(users);
                        }, function (error) {
                            console.error("Error while getting users", error);
                            return reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Performs an auto login
     *
     * @returns {Promise<boolean>} Token response
     * @memberof LoginProvider
     */
    UserProvider.prototype.autoLogin = function (logout) {
        if (logout === void 0) { logout = true; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                // this.event.publish(this.config.loginConfig.loggedInCompleteEventKey);
                // return Promise.resolve(true);
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var token = _this.storage.getLocal(_this.config.loginConfig.refreshToken); //.then(
                        //  token => {
                        console.log("refresher token stored", token);
                        if (token != undefined && token != null && new Date(_this.getValueFromToken(token, ACCESS_TOKEN_KEYS.EXPIRATION_TIME)) > new Date()) {
                            console.log("Asking for new refresher token");
                            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
                            headers.append('Content-Type', 'application/json');
                            _this.http.post(_this.config.basePath2 + "/renew", token, { headers: headers }).subscribe(function (token) {
                                _this.storage.saveLocal(_this.config.loginConfig.accessToken, token.accessToken); //lazy loaded modules can't wait till next refresh event
                                _this.storage.saveLocal(_this.config.loginConfig.hasLoggedIn, true);
                                // this.storage.saveLocal(this.config.loginConfig.refreshToken, token.refreshToken);//.then(
                                // () => {
                                _this.event.publish(_this.config.loginConfig.updatedTokensAvailableEventKey, token);
                                _this._accessToken = token.accessToken;
                                _this.event.publish(_this.config.loginConfig.loggedInCompleteEventKey);
                                _this.refreshTokenBeforeExpire(token.accessToken);
                                resolve(true);
                            }, function () {
                                reject(false);
                            });
                            // },
                            //   () => {
                            //     reject();
                            //   }
                            // );
                        }
                        else {
                            if (logout) {
                                _this.event.publish(_this.config.loginConfig.logoutEventKey);
                            }
                        }
                        //},
                        // () => {
                        //   reject();
                        // }
                        //);
                    })];
            });
        });
    };
    /**
     * Method to get values from access token based on parameter value
     *
     * @param {ACCESS_TOKEN_KEYS} key - property of access token
     * @returns {*}
     * @memberof LoginProvider
     */
    UserProvider.prototype.getValueFromAccessToken = function (key) {
        if (!this._accessToken) {
            return null;
        }
        var helper = new __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */]();
        var payload = helper.decodeToken(this._accessToken);
        if (key == ACCESS_TOKEN_KEYS.EXPIRATION_TIME) {
            return payload[key] * 1000;
        }
        else {
            return payload[key];
        }
    };
    /**
   * Method to get values from access token based on parameter value
   *
   * @param {ACCESS_TOKEN_KEYS} key - property of access token
   * @returns {*}
   * @memberof LoginProvider
   */
    UserProvider.prototype.getValueFromToken = function (token, key) {
        if (!token) {
            return null;
        }
        var helper = new __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */]();
        var payload = helper.decodeToken(token);
        if (key == ACCESS_TOKEN_KEYS.EXPIRATION_TIME) {
            return payload[key] * 1000;
        }
        else {
            return payload[key];
        }
        // return token.expiration;
    };
    UserProvider.prototype.refreshTokenBeforeExpire = function (token) {
        var _this = this;
        var jwtHelper = new __WEBPACK_IMPORTED_MODULE_5__auth0_angular_jwt__["a" /* JwtHelperService */]();
        var expTime = jwtHelper.getTokenExpirationDate(token);
        // let expTime = new Date(token.expiration);
        var diff = expTime.getTime() - new Date().getTime() - 60 * 1000;
        console.log("Refresh starts in ", diff);
        if (!this.refreshUpdateStarted) {
            this.refreshUpdateStarted = true;
            this.refreshTokenUpdater = setTimeout(function () {
                _this.refreshUpdateStarted = false;
                _this.autoLogin().catch(function (error) {
                    _this.event.publish(_this.config.loginConfig.logoutEventKey);
                });
            }, diff);
        }
    };
    /**
     * Tells if the user is logged in.
     *
     * @returns {boolean}
     *
     * @memberof LoginProvider
     */
    UserProvider.prototype.isLoggedIn = function () {
        return this._accessToken != null;
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* Events */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__app_app_config__["AppConfig"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__app_app_config__["AppConfig"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__tehnical_storage_storage_provider__["a" /* StorageProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__tehnical_storage_storage_provider__["a" /* StorageProvider */]) === "function" && _d || Object])
    ], UserProvider);
    return UserProvider;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=user.provider.js.map

/***/ })

},[220]);
//# sourceMappingURL=main.js.map