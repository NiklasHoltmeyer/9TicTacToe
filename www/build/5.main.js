webpackJsonp([5],{

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDisplayProfilePageModule", function() { return ModalDisplayProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_display_profile__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalDisplayProfilePageModule = (function () {
    function ModalDisplayProfilePageModule() {
    }
    return ModalDisplayProfilePageModule;
}());
ModalDisplayProfilePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal_display_profile__["a" /* ModalDisplayProfilePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_display_profile__["a" /* ModalDisplayProfilePage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal_display_profile__["a" /* ModalDisplayProfilePage */]
        ]
    })
], ModalDisplayProfilePageModule);

//# sourceMappingURL=modal-display-profile.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalDisplayProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalDisplayProfilePage = (function () {
    function ModalDisplayProfilePage(navCtrl, navParams, profile, loadingCtrl, zone, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = profile;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.auth = auth;
        this.wins = 0;
        this.looses = 0;
        this.draws = 0;
        this.player = this.navParams.get('player');
        if (!this.player.bot && !this.player.localSecondPlayer && !this.player.uid)
            this.player.uid = this.auth.getUserUid();
    }
    ModalDisplayProfilePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.Displayname = this.player.uid; //name
        this.getProfilePicture();
        this.profile.getOtherProfile(this.player.uid)
            .then(function (snap) {
            _this.zone.run(function () {
                _this.wins = snap['win'] | 0;
                _this.draws = snap['draw'] | 0;
                _this.looses = snap['loose'] | 0;
            });
        })
            .catch(function () { ; }); // Default werte sind schon 0
    };
    ModalDisplayProfilePage.prototype.getProfilePicture = function () {
        var _this = this;
        this.profile.getProfilePicture(this.player.uid).then(function (url) { return _this.zone.run(function () { return _this.profilePic = url; }); })
            .catch(function (err) { });
    };
    ModalDisplayProfilePage.prototype.goBackToPrevPage = function () {
        this.navCtrl.pop();
    };
    return ModalDisplayProfilePage;
}());
ModalDisplayProfilePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-modal-display-profile',template:/*ion-inline-start:"C:\9tictactoe\src\pages\modal-display-profile\modal-display-profile.html"*/'<ion-header (click)="goBackToPrevPage()">\n  <ion-navbar>\n    <ion-title>-{{Displayname}}-</ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content no-padding (click)="goBackToPrevPage()">\n  <div class="profilePic">\n    <span *ngIf="!profilePic">Loading..</span>  \n    <img [src]="profilePic" *ngIf="profilePic" />\n  </div>\n  <div class="stats">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-4>\n          <ion-row col-12>\n            <span>\n              <strong>{{wins}}</strong>\n            </span>\n          </ion-row>\n          <ion-row col-12>\n            <span>Wins</span>\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <ion-row col-12>\n            <span>\n              <strong>{{looses}}</strong>\n            </span>\n          </ion-row>\n          <ion-row col-12>\n            <span>Looses</span>\n          </ion-row>\n        </ion-col>\n        <ion-col col-4>\n          <ion-row col-12>\n            <span>\n              <strong>{{draws}}</strong>\n            </span>\n          </ion-row>\n          <ion-row col-12>\n            <span>Draws</span>\n          </ion-row>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>  \n</ion-content>\n<ion-footer (click)="goBackToPrevPage()">\n<button ion-button full color="dark" class="test" >Return</button>\n</ion-footer>\n'/*ion-inline-end:"C:\9tictactoe\src\pages\modal-display-profile\modal-display-profile.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], ModalDisplayProfilePage);

//# sourceMappingURL=modal-display-profile.js.map

/***/ })

});
//# sourceMappingURL=5.main.js.map