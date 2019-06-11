webpackJsonp([2],{

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesPageModule", function() { return MessagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_page__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_module__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MessagesPageModule = /** @class */ (function () {
    function MessagesPageModule() {
    }
    MessagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__messages_page__["a" /* MessagesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__messages_page__["a" /* MessagesPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__messages_page__["a" /* MessagesPage */]
            ]
        })
    ], MessagesPageModule);
    return MessagesPageModule;
}());

//# sourceMappingURL=messages.page.module.js.map

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

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_message_message_provider__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_HeaderModel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_frontend_common_ButtonModel__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_simple_app_header_simple_app_header_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_toast_toast_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_tehnical_storage_storage_provider__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MessagesPage = /** @class */ (function () {
    function MessagesPage(navCtrl, messageProvider, modalCtrl, toast, alertCtrl, storage) {
        this.navCtrl = navCtrl;
        this.messageProvider = messageProvider;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        /**
         * Message model
         *
         * @type {MessageModel}
         * @memberof ContactPage
         */
        this.messages = [];
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_HeaderModel__["b" /* HeaderModel */](__WEBPACK_IMPORTED_MODULE_1__app_app_component__["a" /* MENU_TITLE */].MESSAGES, __WEBPACK_IMPORTED_MODULE_4__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE, true, new __WEBPACK_IMPORTED_MODULE_5__model_frontend_common_ButtonModel__["a" /* ButtonModel */](undefined, undefined, undefined, undefined, __WEBPACK_IMPORTED_MODULE_6__components_simple_app_header_simple_app_header_component__["a" /* HEADER_BUTTON_TYPE */].MENU_TOGGLE.toString()));
    }
    MessagesPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.messageProvider.getMessagesForUser().then(function (message) {
            _this.messages = message;
        }).catch(function (error) {
            console.error(error);
            _this.toast.showErrorMessage("Error while geting messages for the logged user.");
        });
    };
    MessagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'messages',template:/*ion-inline-start:"E:\dev\University-Microservices\University-Microservices\src\pages\messages\messages.page.html"*/'<simple-app-header [header]="headerModel"></simple-app-header>\n\n\n\n<ion-content padding>\n\n  <div class="table-container" style="padding-top:15px">\n\n    <table>\n\n      <tr class="table-row table-title">\n\n        <th class="table-header pzn-col">\n\n          Name\n\n        </th>\n\n        <th class="table-header name-col">\n\n          Email\n\n        </th>\n\n        <th class="table-header stock-col">\n\n          Phone\n\n        </th>\n\n        <th class="table-header stock-number-col">\n\n          Subject\n\n        </th>\n\n        <th class="table-header stock-number-col">\n\n          Message\n\n        </th>    \n\n      </tr>\n\n      <tr class="table-row" *ngFor="let message of messages">\n\n        <td class="table-data pzn-col">\n\n          <!-- <span class="table-mobile-label">Name</span> -->\n\n          <span class="table-product-data">{{message.name}}</span>\n\n        </td>\n\n        <td class="table-data name-col">\n\n          <!-- <span class="table-mobile-label">Email</span> -->\n\n          <span class="table-product-data">{{message.email}}</span>\n\n        </td>\n\n        <td class="table-data stock-col">\n\n          <!-- <span class="table-mobile-label">Phone</span> -->\n\n          <span class="table-product-data">{{message.phone}}</span>\n\n        </td>\n\n        <td class="table-data stock-number-col">\n\n          <!-- <span class="table-mobile-label">Subject</span> -->\n\n          <span class="table-product-data">{{message.subject}}</span>\n\n        </td>\n\n        <td class="table-data stock-number-col">\n\n          <!-- <span class="table-mobile-label">Message</span> -->\n\n          <span class="table-product-data">{{message.message}}</span>\n\n        </td>\n\n      </tr>\n\n    </table>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\dev\University-Microservices\University-Microservices\src\pages\messages\messages.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_0__providers_message_message_provider__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_7__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */]])
    ], MessagesPage);
    return MessagesPage;
}());

//# sourceMappingURL=messages.page.js.map

/***/ })

});
//# sourceMappingURL=2.js.map