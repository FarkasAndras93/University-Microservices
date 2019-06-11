webpackJsonp([0],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__contact_page__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_module__ = __webpack_require__(316);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__contact_page__["a" /* ContactPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__contact_page__["a" /* ContactPage */]),
                __WEBPACK_IMPORTED_MODULE_4__components_simple_app_header_simple_app_header_module__["a" /* SimpleAppHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_0__ngx_translate_core__["b" /* TranslateModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__contact_page__["a" /* ContactPage */]
            ]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());

//# sourceMappingURL=contact.page.module.js.map

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

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_user_user_provider__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_message_message_provider__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_component__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_backend_message_message__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_HeaderModel__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__model_frontend_common_ButtonModel__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_simple_app_header_simple_app_header_component__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_tehnical_toast_toast_provider__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_tehnical_storage_storage_provider__ = __webpack_require__(34);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, messageProvider, modalCtrl, toast, alertCtrl, storage, userProvider) {
        this.navCtrl = navCtrl;
        this.messageProvider = messageProvider;
        this.modalCtrl = modalCtrl;
        this.toast = toast;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.userProvider = userProvider;
        this.headerModel = new __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_HeaderModel__["b" /* HeaderModel */](__WEBPACK_IMPORTED_MODULE_2__app_app_component__["a" /* MENU_TITLE */].CONTACT, __WEBPACK_IMPORTED_MODULE_6__model_frontend_common_HeaderModel__["a" /* HEADER_COLORS */].BASE, true, new __WEBPACK_IMPORTED_MODULE_7__model_frontend_common_ButtonModel__["a" /* ButtonModel */](undefined, undefined, undefined, undefined, __WEBPACK_IMPORTED_MODULE_8__components_simple_app_header_simple_app_header_component__["a" /* HEADER_BUTTON_TYPE */].MENU_TOGGLE.toString()));
        this.message = new __WEBPACK_IMPORTED_MODULE_3__model_backend_message_message__["a" /* MessageModel */]("", "", "", "", "", "");
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.userProvider.getAllUsers().then(function (users) {
            _this.users = users;
        });
    };
    /**
     * Method to create new message.
     *
     * @memberof MyFridgePage
     */
    ContactPage.prototype.sendMessage = function () {
        var _this = this;
        this.messageProvider.createMessage(this.message).then(function (newMessage) {
            _this.toast.showSuccessMessage("Message was sent.");
            _this.message = new __WEBPACK_IMPORTED_MODULE_3__model_backend_message_message__["a" /* MessageModel */]("", "", "", "", "", "");
        }).catch(function (err) {
            console.error("Failed to send message!", err);
            _this.toast.showErrorMessage("Message send was failed!");
        });
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["m" /* Component */])({
            selector: 'contact',template:/*ion-inline-start:"E:\dev\University-Microservices\University-Microservices\src\pages\contact\contact.page.html"*/'<simple-app-header [header]="headerModel"></simple-app-header>\n\n\n\n<ion-content padding>\n\n\n\n  <ion-list>\n\n    <ion-item-group>\n\n      <ion-list-header>{{\'contact.header.message\' | translate}}</ion-list-header>\n\n      <ion-item>\n\n        <ion-label class="label-auto">Company:</ion-label>\n\n        <ion-select [(ngModel)]="message.userId" multiple="false" cancelText="Cancel" okText="Save">\n\n          <ion-option value="{{user.userId}}" *ngFor="let user of users">{{user.name}}</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'contact.name\' | translate}}:</ion-label>\n\n        <ion-input [(ngModel)]="message.name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'contact.email\' | translate}}:</ion-label>\n\n        <ion-input [(ngModel)]="message.email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'contact.phone\' | translate}}:</ion-label>\n\n        <ion-input [(ngModel)]="message.phone"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'contact.subject\' | translate}}:</ion-label>\n\n        <ion-input [(ngModel)]="message.subject"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>{{\'contact.message\' | translate}}:</ion-label>\n\n        <ion-textarea rows="5" [(ngModel)]="message.message" class="task-description-area"></ion-textarea>\n\n      </ion-item>\n\n      <button ion-button full (click)="sendMessage()" expand="block">{{\'button.send\' | translate}}</button>\n\n    </ion-item-group>\n\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\dev\University-Microservices\University-Microservices\src\pages\contact\contact.page.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_message_message_provider__["a" /* MessageProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__providers_tehnical_toast_toast_provider__["a" /* ToastProvider */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_10__providers_tehnical_storage_storage_provider__["a" /* StorageProvider */], __WEBPACK_IMPORTED_MODULE_0__providers_user_user_provider__["a" /* UserProvider */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.page.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_global_utils__ = __webpack_require__(112);

var MessageModel = /** @class */ (function () {
    function MessageModel(name, phone, subject, message, email, userId) {
        this.name = name;
        this.phone = phone;
        this.subject = subject;
        this.message = message;
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(email)) {
            this.email = email;
        }
        if (!__WEBPACK_IMPORTED_MODULE_0__utils_global_utils__["a" /* GlobalUtils */].isUndefinedOrNull(userId)) {
            this.userId = userId;
        }
    }
    return MessageModel;
}());

//# sourceMappingURL=message.js.map

/***/ })

});
//# sourceMappingURL=0.js.map