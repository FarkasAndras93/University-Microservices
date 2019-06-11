webpackJsonp([1],{

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_page__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__register_page__["a" /* RegisterPage */]
            ]
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.page.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SimpleAppHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__simple_app_header_component__ = __webpack_require__(214);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_backend_user_user__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_HeaderModel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_tehnical_toast_toast_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_global_utils__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_user_user_provider__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, toast, userProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toast = toast;
        this.userProvider = userProvider;
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_HeaderModel__["b" /* HeaderModel */]("Register page", __WEBPACK_IMPORTED_MODULE_3__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE);
        this.user = new __WEBPACK_IMPORTED_MODULE_2__model_backend_user_user__["a" /* User */]("", "", "");
    }
    /**
     * Registers a new user
     *
     * @param {User} user
     * @memberof RegisterPage
     */
    RegisterPage.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.validate()) {
                    try {
                        this.userProvider.register(this.user.name, this.user.username, this.user.password).then(function (result) {
                            if (result) {
                                _this.toast.showSuccessMessage("You have registered successfully!", undefined, false);
                                _this.navCtrl.popTo("LoginPage");
                            }
                            else {
                                _this.toast.showSuccessMessage("Registration failed!", undefined, false);
                            }
                        });
                    }
                    catch (e) {
                        this.toast.showErrorMessage("Could not register!");
                        console.error("Error in register", e);
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Method to validate register
     *
     * @returns {boolean}
     * @memberof RegisterPage
     */
    RegisterPage.prototype.validate = function () {
        var valid = false;
        if (__WEBPACK_IMPORTED_MODULE_5__utils_global_utils__["a" /* GlobalUtils */].isEmpty(this.user.name)) {
            this.toast.showErrorMessage("Name cannot be empty!");
        }
        else if (__WEBPACK_IMPORTED_MODULE_5__utils_global_utils__["a" /* GlobalUtils */].isEmpty(this.user.username)) {
            this.toast.showErrorMessage("Username cannot be empty!");
        }
        else if (__WEBPACK_IMPORTED_MODULE_5__utils_global_utils__["a" /* GlobalUtils */].isEmpty(this.user.password)) {
            this.toast.showErrorMessage("Password cannot be empty!");
        }
        else if (this.confirmPassword != this.user.password) {
            this.toast.showErrorMessage("Password and confirm password is not the same!");
        }
        else {
            valid = true;
        }
        return valid;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"E:\dev\University-Microservices\University-Microservices\src\pages\register\register.page.html"*/'<simple-app-header [header]="headerModel"></simple-app-header>\n\n\n\n<ion-content padding>\n\n  <form name="registerForm" #f="ngForm">\n\n    <ion-list>\n\n      <ion-item>\n\n        <ion-input placeholder="Name" id="login_name" type="text" required [(ngModel)]="user.name"\n\n          name="login_name" #name="ngModel" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"\n\n          class="user-input"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Username" id="login_username" type="text" required [(ngModel)]="user.username"\n\n          name="login_username" #name="ngModel" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"\n\n          class="user-input"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Passwort" id="login_password" type="password" [(ngModel)]="user.password" name="login_password"\n\n          #name="ngModel" class="password-input"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-input placeholder="Confirm passwort" type="password" [(ngModel)]="confirmPassword" name="register_confrim_password"\n\n          #name="ngModel" class="password-input"></ion-input>\n\n      </ion-item>\n\n\n\n    </ion-list>\n\n\n\n    <button color="light" id="register_registerSaveButton" (click)="register()"  ion-button full i18n>Register</button>\n\n  </form>\n\n</ion-content>'/*ion-inline-end:"E:\dev\University-Microservices\University-Microservices\src\pages\register\register.page.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_user_user_provider__["a" /* UserProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.page.js.map

/***/ })

});
//# sourceMappingURL=1.js.map