webpackJsonp([2],{

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/contact/contact.page.module": [
		293,
		1
	],
	"../pages/login/login.page.module": [
		294,
		0
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
webpackAsyncContext.id = 161;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_global_utils__ = __webpack_require__(56);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], ToastProvider);
    return ToastProvider;
}());

//# sourceMappingURL=toast.provider.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MENU_TITLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(106);
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
    function MyApp(platform, statusBar, splashScreen, event, config, storage, translate) {
        var _this = this;
        this.event = event;
        this.config = config;
        this.storage = storage;
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
            _this.pages = _this.userPages;
            _this.storage.saveLocal(_this.config.loginConfig.hasLoggedIn, false);
            _this.storage.clearConfig(_this.config.loginConfig.loggedInUser);
        };
        translate.setDefaultLang('en');
        this.selectedLanguage = { key: 'en', name: 'English' };
        this.languages.push(this.selectedLanguage);
        this.languages.push({ key: 'ro', name: 'Română' });
        this.languages.push({ key: 'hu', name: 'Magyar' });
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
            this.nav.setRoot(page.component);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\dev\University-Microservices\University-Microservices\src\app\app.html"*/'<ion-split-pane>\n\n    <ion-menu [content]="content" *ngIf="pages?.length > 0">\n\n        <ion-content padding>\n\n            <ion-list>\n\n                <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n                    <ion-icon name="{{p.icon}}" item-start></ion-icon>\n\n                    <ion-badge *ngIf="p.badgeRight" color="{{p.badgeColor}}" item-end>{{p.badgeValue}}</ion-badge>\n\n                    {{\'menu.\' + p.title | translate}}\n\n                </button>\n\n\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n\n\n    <ion-nav id="nav" [root]="rootPage" main #content swipeBackEnabled="false"></ion-nav>\n\n</ion-split-pane>'/*ion-inline-end:"E:\dev\University-Microservices\University-Microservices\src\app\app.html"*/
        }),
        __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */], Object, __WEBPACK_IMPORTED_MODULE_5__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(25);
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

var ProductProvider = /** @class */ (function () {
    function ProductProvider(http, storage, config) {
        this.http = http;
        this.storage = storage;
        this.config = config;
    }
    /**
     * Method to return all product from the fridge.
     * @returns {Promise<MyProduct[]>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.getProductsInFrigider = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append('Content-Type', 'application/json');
                        _this.http.get(_this.config.basePath + "/myproducts/" + _this.storage.getLoggedUser().id, { headers: headers }).subscribe(function (myProducts) {
                            return resolve(myProducts);
                        }, function (error) {
                            console.error("Error while getting my products", error);
                            return reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Method to get product for name.
     *
     * @param {string} productName
     * @returns {Promise<Product>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.getProductForName = function (productName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // return this.http.get(this.apiUrl + "/name/product").toPromise();
                return [2 /*return*/, undefined];
            });
        });
    };
    /**
     * Method to return product weight on sensor.
     *
     * @returns {Promise<number>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.getProductWeightOnSensor = function () {
        // return new Promise((resolve, reject) => {
        //   let url = this.storage.getConfig(this.appConfig.fridgeUrl);
        //   this.http.get(url + "/weight").subscribe((result: any) => {
        //     resolve(Math.round(result.weight));
        //   }, error => {
        //     console.error("Error while getting the value from sensor", error);
        //   });
        // });
        return Promise.resolve(5);
    };
    /**
     * Method to return all product from database.
     *
     * @returns {Promise<Product[]>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.getAllProducts = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.get(_this.config.basePath + "/products", { headers: headers }).subscribe(function (products) {
                return resolve(products);
            }, function (error) {
                console.error("Error while getting products", error);
                return reject(error);
            });
        });
    };
    /**
     * Method to remove product from the fridge.
     *
     * @param {number} id
     * @returns {Promise<boolean>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.removeProductFromFridge = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_this.config.basePath + "/myproduct/delete/" + product.id, { headers: headers }).subscribe(function (result) {
                return resolve(result);
            }, function (error) {
                console.error("Error while deleting product", error);
                return reject(error);
            });
        });
    };
    /**
     * Method to edit product in the fridge.
     *
     * @param {number} id
     * @returns {Promise<boolean>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.editProductInTheFridge = function (myProd, weight) {
        // return this.http.get(this.apiUrl + "edit/product").toPromise();
        return Promise.resolve(true);
    };
    /**
     * Method to check product in grocery list.
     *
     * @param {number} id
     * @param {boolean} state
     * @memberof ProductProvider
     */
    ProductProvider.prototype.checkProductInGrocery = function (groceryList) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // let headers = new HttpHeaders();
            // headers.append('Content-Type', 'application/json');
            _this.http.post(_this.config.basePath + "/grocery/product/check", groceryList).subscribe(function (result) {
                return resolve(result);
            }, function (error) {
                console.error("Error while checking product", error);
                return reject(error);
            });
        });
    };
    /**
     * Method to add product in fridge.
     *
     * @param {number} userId
     * @param {MyProduct} product
     * @memberof ProductProvider
     */
    ProductProvider.prototype.addProductInFridge = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.config.basePath + "/myproduct/add", product).subscribe(function (myProduct) {
                return resolve(myProduct);
            }, function (error) {
                console.error("Error while creating my product", error);
                return reject(error);
            });
        });
    };
    /**
     * Method to create grocery products.
     *
     * @param {GroceryProduct[]} groceryProd
     * @returns {Promise<GroceryProduct[]>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.createGroceryProducts = function (grocerylist) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.config.basePath + "/grocery/product/add", grocerylist).subscribe(function (editedGroceryList) {
                return resolve(editedGroceryList);
            }, function (error) {
                console.error("Error while adding products in grocery list", error);
                return reject(error);
            });
        });
    };
    /**
     * Method to create product in database.
     *
     * @param {Product} groceryProd
     * @returns {Promise<Product>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.createProductInDatabase = function (product) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.config.basePath + "/product/add", product).subscribe(function (newProduct) {
                return resolve(newProduct);
            }, function (error) {
                console.error("Error while creating product", error);
                return reject(error);
            });
        });
        // return Promise.resolve(product);
    };
    /**
     * Remove product from database.
     *
     * @param {Product} groceryProd
     * @returns {Promise<boolean>}
     * @memberof ProductProvider
     */
    ProductProvider.prototype.removeProductFromDatabase = function (product) {
        return Promise.resolve(true);
    };
    ProductProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__tehnical_storage_storage_provider__["a" /* StorageProvider */], Object])
    ], ProductProvider);
    return ProductProvider;
}());

//# sourceMappingURL=product.provider.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_global_utils__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tehnical_storage_storage_provider__ = __webpack_require__(29);
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






var UserProvider = /** @class */ (function () {
    function UserProvider(http, event, config, storage) {
        this.http = http;
        this.event = event;
        this.config = config;
        this.storage = storage;
        console.log('Hello RestProvider Provider');
    }
    UserProvider.prototype.login = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.config.basePath + "/login", { "username": username, "password": password }, { headers: headers }).subscribe(function (loggedUser) {
                _this.event.publish(_this.config.loginConfig.loggedInCompleteEventKey);
                _this.storage.saveLocal(_this.config.loginConfig.hasLoggedIn, true);
                _this.storage.saveLocal(_this.config.loginConfig.loggedInUser, loggedUser);
                return resolve(loggedUser);
            }, function (error) {
                console.error("Error while loggin in application", error);
                return reject(error);
            });
        });
    };
    UserProvider.prototype.register = function (username, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.post(_this.config.basePath + "/register", { "username": username, "password": password }, { headers: headers }).subscribe(function (loggedUser) {
                _this.event.publish(_this.config.loginConfig.loggedInCompleteEventKey);
                _this.storage.saveLocal(_this.config.loginConfig.hasLoggedIn, true);
                _this.storage.saveLocal(_this.config.loginConfig.loggedInUser, loggedUser);
                return resolve(loggedUser);
            }, function (error) {
                console.error("Error while loggin in application", error);
                return reject(error);
            });
        });
    };
    /**
     * Get all recipe for user.
     *
     * @param {number} userId
     * @returns {Promise<Recipe[]>}
     * @memberof RecipeProvider
     */
    UserProvider.prototype.getFromBackend2 = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append('Content-Type', 'application/json');
                        headers.append("responseType", "text");
                        // this.http.get("http://localhost:8081/app2/wellcome", { headers: headers }).subscribe((result: String) => {
                        _this.http.get("http://ec2-3-14-66-141.us-east-2.compute.amazonaws.com:8081/app2/wellcome", { headers: headers }).subscribe(function (result) {
                            return resolve(result);
                        }, function (error) {
                            console.error("Error while getting recipe list", error);
                            return reject(error);
                        });
                    })];
            });
        });
    };
    UserProvider.prototype.getProductWeightOnSensor = function () {
        // return this.http.get(this.apiUrl + "sensor/product").toPromise();
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_2__utils_global_utils__["a" /* GlobalUtils */].getRandomNumberBetween(0, 2));
    };
    UserProvider.prototype.getAllProducts = function () {
        // return this.http.get(this.apiUrl + "sensor/product").toPromise();
        var products = [];
        //   new Product(1, "Salami", PRODUCT_TYPES.MEATS),
        //   new Product(2, "Milk", PRODUCT_TYPES.DAIRY_PRODUCT),
        //   new Product(3, "Butter", PRODUCT_TYPES.DAIRY_PRODUCT),
        //   new Product(4, "Bread", PRODUCT_TYPES.GRAIN_PARTIES)
        // ]
        // products[0].id = 1;
        // products[1].id = 2;
        // products[2].id = 3;
        // products[3].id = 4;
        return Promise.resolve(products);
    };
    UserProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* Events */], Object, __WEBPACK_IMPORTED_MODULE_5__tehnical_storage_storage_provider__["a" /* StorageProvider */]])
    ], UserProvider);
    return UserProvider;
}());

//# sourceMappingURL=user.provider.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* unused harmony export HttpLoaderFactory */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_product_product_provider__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tehnical_toast_toast_provider__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_recipe_recipe_provider__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_user_user_provider__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_config__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_plan_plan_provider__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__ = __webpack_require__(292);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/contact/contact.page.module#ContactPageModule', name: 'ContactPage', segment: 'contact.page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.page.module#LoginPageModule', name: 'LoginPage', segment: 'login.page', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_14__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["b" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_7__providers_product_product_provider__["a" /* ProductProvider */],
                __WEBPACK_IMPORTED_MODULE_8__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */],
                // GroceryListProvider,
                __WEBPACK_IMPORTED_MODULE_9__providers_recipe_recipe_provider__["a" /* RecipeProvider */],
                __WEBPACK_IMPORTED_MODULE_10__providers_user_user_provider__["a" /* UserProvider */],
                __WEBPACK_IMPORTED_MODULE_13__providers_plan_plan_provider__["a" /* PlanProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_11__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */], useClass: __WEBPACK_IMPORTED_MODULE_11__providers_tehnical_storage_storage_provider__["b" /* StorageProviderLocal */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__app_config__["a" /* APP_CONFIG_TOKEN */], useValue: __WEBPACK_IMPORTED_MODULE_12__app_config__["b" /* CONFIG_DEFAULT */] },
                { provide: __WEBPACK_IMPORTED_MODULE_12__app_config__["d" /* prefixLocalstorage */], useFactory: __WEBPACK_IMPORTED_MODULE_12__app_config__["c" /* prefixLocalStorageFactory */] },
            ]
        })
    ], AppModule);
    return AppModule;
}());

function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_15__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http);
}
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DEFAULT_LOGIN_CONFIG */
/* unused harmony export DEFAULT_STATISTIC_CONFIG */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CONFIG_DEFAULT; });
/* unused harmony export dynamicConfig */
/* harmony export (immutable) */ __webpack_exports__["c"] = prefixLocalStorageFactory;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return prefixLocalstorage; });
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
    basePath: 'http://ec2-3-14-66-141.us-east-2.compute.amazonaws.com:8080/app',
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

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StorageProviderLocal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_config__ = __webpack_require__(25);
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
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["a" /* APP_CONFIG_TOKEN */])), __param(2, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_2__app_app_config__["d" /* prefixLocalstorage */])),
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

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_global_utils__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_config__ = __webpack_require__(25);
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





var RecipeProvider = /** @class */ (function () {
    function RecipeProvider(http, storage, config) {
        this.http = http;
        this.storage = storage;
        this.config = config;
        console.log('Hello Recipe Provider');
    }
    /**
     * Get all recipe for user.
     *
     * @param {number} userId
     * @returns {Promise<Recipe[]>}
     * @memberof RecipeProvider
     */
    RecipeProvider.prototype.getRecipeList = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append('Content-Type', 'application/json');
                        _this.http.get(_this.config.basePath + "/recipe/list/" + _this.storage.getLoggedUser().id, { headers: headers }).subscribe(function (recipeList) {
                            recipeList.forEach(function (recipe) {
                                if (__WEBPACK_IMPORTED_MODULE_2__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(recipe.notes)) {
                                    recipe.notes = [];
                                }
                                if (__WEBPACK_IMPORTED_MODULE_2__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(recipe.products)) {
                                    recipe.products = [];
                                }
                            });
                            return resolve(recipeList);
                        }, function (error) {
                            console.error("Error while getting recipe list", error);
                            return reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Create recipe for user.
     *
     * @param {Recipe} recipe
     * @returns {Promise<boolean>}
     * @memberof RecipeProvider
     */
    RecipeProvider.prototype.createRecipe = function (recipe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.config.basePath + "/recipe/add", recipe).subscribe(function (newRecipe) {
                return resolve(newRecipe);
            }, function (error) {
                console.error("Error while creating my product", error);
                return reject(error);
            });
        });
    };
    /**
     * Method to update existent recipe.
     *
     * @param {Recipe} recipe
     * @returns {Promise<Recipe>}
     * @memberof RecipeProvider
     */
    RecipeProvider.prototype.updateRecipe = function (recipe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.put(_this.config.basePath + "/recipe/edit", recipe).subscribe(function (newRecipe) {
                if (__WEBPACK_IMPORTED_MODULE_2__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(newRecipe)) {
                    reject("Null");
                }
                else {
                    return resolve(newRecipe);
                }
            }, function (error) {
                console.error("Error while creating my product", error);
                return reject(error);
            });
        });
    };
    /**
     * Method to delete recipe.
     *
     * @param {Recipe} recipe
     * @returns {Promise<Recipe>}
     * @memberof RecipeProvider
     */
    RecipeProvider.prototype.deleteRecipe = function (recipe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_this.config.basePath + "/recipe/delete/" + recipe.id, { headers: headers }).subscribe(function (result) {
                return resolve(result);
            }, function (error) {
                console.error("Error while deleting recipe", error);
                return reject(error);
            });
        });
    };
    /**
     * Get random recipe for user.
     *
     * @param {number} userId
     * @returns {Promise<Recipe[]>}
     * @memberof RecipeProvider
     */
    RecipeProvider.prototype.getRandomRecipe = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append('Content-Type', 'application/json');
                        _this.http.get(_this.config.basePath + "/recipe/random/" + _this.storage.getLoggedUser().id, { headers: headers }).subscribe(function (recipe) {
                            if (__WEBPACK_IMPORTED_MODULE_2__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(recipe.notes)) {
                                recipe.notes = [];
                            }
                            if (__WEBPACK_IMPORTED_MODULE_2__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(recipe.products)) {
                                recipe.products = [];
                            }
                            return resolve(recipe);
                        }, function (error) {
                            console.error("Error while getting recipe list", error);
                            return reject(error);
                        });
                    })];
            });
        });
    };
    RecipeProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_4__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__tehnical_storage_storage_provider__["a" /* StorageProvider */], Object])
    ], RecipeProvider);
    return RecipeProvider;
}());

//# sourceMappingURL=recipe.provider.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tehnical_storage_storage_provider__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_config__ = __webpack_require__(25);
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




var PlanProvider = /** @class */ (function () {
    function PlanProvider(http, storage, config) {
        this.http = http;
        this.storage = storage;
        this.config = config;
        console.log('Hello Plan Provider');
    }
    /**
     * Get plans.
     *
     * @param {string} startDate
     * @param {string} endDate
     * @returns {Promise<Recipe[]>}
     * @memberof PlanProvider
     */
    PlanProvider.prototype.getPlans = function (startDate, endDate) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
                        headers.append('Content-Type', 'application/json');
                        _this.http.get(_this.config.basePath + "/plan/" + _this.storage.getLoggedUser().id + "/" +
                            startDate + "/" + endDate, { headers: headers }).subscribe(function (planList) {
                            return resolve(planList);
                        }, function (error) {
                            console.error("Error while getting plan list", error);
                            return reject(error);
                        });
                    })];
            });
        });
    };
    /**
     * Create plan for user.
     *
     * @param {Plan} recipe
     * @returns {Promise<Plan>}
     * @memberof RecipeProvider
     */
    PlanProvider.prototype.createPlan = function (plan) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.put(_this.config.basePath + "/plan/add", plan).subscribe(function (newPlan) {
                return resolve(newPlan);
            }, function (error) {
                console.error("Error while creating plan", error);
                return reject(error);
            });
        });
    };
    // /**
    //  * Method to update existent recipe.
    //  *
    //  * @param {Recipe} recipe
    //  * @returns {Promise<Recipe>}
    //  * @memberof RecipeProvider
    //  */
    // updateRecipe(recipe: Recipe): Promise<Recipe> {
    //   return new Promise((resolve, reject) => {
    //     this.http.put(this.config.basePath + "/recipe/edit", recipe).subscribe((newRecipe: Recipe) => {
    //       if (GlobalUtils.isUndefinedOrNull(newRecipe)) {
    //         reject("Null");
    //       } else {
    //         return resolve(newRecipe);
    //       }
    //     }, error => {
    //       console.error("Error while creating my product", error);
    //       return reject(error);
    //     });
    //   });
    // }
    /**
     * Method to delete recipe.
     *
     * @param {id} planId
     * @returns {Promise<boolean>}
     * @memberof PlanProvider
     */
    PlanProvider.prototype.deletePlan = function (planId) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
            headers.append('Content-Type', 'application/json');
            _this.http.delete(_this.config.basePath + "/plan/delete/" + planId, { headers: headers }).subscribe(function (result) {
                return resolve(result);
            }, function (error) {
                console.error("Error while deleting recipe", error);
                return reject(error);
            });
        });
    };
    PlanProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__app_app_config__["a" /* APP_CONFIG_TOKEN */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__tehnical_storage_storage_provider__["a" /* StorageProvider */], Object])
    ], PlanProvider);
    return PlanProvider;
}());

//# sourceMappingURL=plan.provider.js.map

/***/ }),

/***/ 56:
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

/***/ })

},[211]);
//# sourceMappingURL=main.js.map