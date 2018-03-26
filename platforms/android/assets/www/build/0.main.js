webpackJsonp([0],{

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsPageModule", function() { return StatsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stats__ = __webpack_require__(667);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(658);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { ChartsModule } from 'ng2-charts';

var StatsPageModule = (function () {
    function StatsPageModule() {
    }
    return StatsPageModule;
}());
StatsPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__stats__["a" /* StatsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stats__["a" /* StatsPage */]),
            // ChartsModule,
            __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__stats__["a" /* StatsPage */]
        ]
        //,
        // providers: [
        //   StatusBar,
        //   SplashScreen,
        //   GooglePlus,
        //   { provide: ErrorHandler, useClass: IonicErrorHandler },
        //   BotProvider,
        //   GameServiceProvider,
        //   GamestatusProvider,
        //   PlayerProvider,
        //   AuthProvider,
        //   FirebaseProvider,
        //   ProfileProvider,
        //   Camera
        // ]
    })
], StatsPageModule);

//# sourceMappingURL=stats.module.js.map

/***/ }),

/***/ 658:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tictactoe_tictactoe__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_time_left_bar_time_left_bar__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__components_tictactoe_tictactoe__["a" /* TictactoeComponent */], __WEBPACK_IMPORTED_MODULE_2__components_time_left_bar_time_left_bar__["a" /* TimeLeftBarComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__components_tictactoe_tictactoe__["a" /* TictactoeComponent */], __WEBPACK_IMPORTED_MODULE_2__components_time_left_bar_time_left_bar__["a" /* TimeLeftBarComponent */]],
        providers: []
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TictactoeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the TictactoeComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TictactoeComponent = (function () {
    function TictactoeComponent() {
        this.playerClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* EventEmitter */]();
    }
    TictactoeComponent.prototype.playerClick = function (x, y, z) {
        this.playerClicked.emit([x, y, z]);
    };
    return TictactoeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('Index'),
    __metadata("design:type", Number)
], TictactoeComponent.prototype, "Index", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('field'),
    __metadata("design:type", Object)
], TictactoeComponent.prototype, "field", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('fieldClass'),
    __metadata("design:type", Object)
], TictactoeComponent.prototype, "fieldClass", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Output */])(),
    __metadata("design:type", Object)
], TictactoeComponent.prototype, "playerClicked", void 0);
TictactoeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'tictactoe',template:/*ion-inline-start:"C:\9tictactoe\src\components\tictactoe\tictactoe.html"*/'<!-- Generated template for the TictactoeComponent component -->\n\n <ion-row *ngFor="let row of field; let i = index" class="selected" [attr.data-index]="i" [ngClass]="{\'borderVertical\': i==1,\'selected\': fieldClass==0,\'player1_won\': fieldClass==1,\'player2_won\': fieldClass==2,\'\': fieldClass==-1}" class="row noPadding">\n\n  <ion-col *ngFor="let tile of row; let j = index" [attr.data-index]="j" [ngClass]="{\'borderHorizontal\': j==1}" class="center"\n\n    (click)="playerClick(Index,i,j)">\n\n    <span class="ctr text noPadding" [ngClass]="{\'player1\':tile==1,\'player2\': tile==2}">{{(tile==0)? \' \': ((tile==1)? \'x\' : \'o\')}}</span>\n\n  </ion-col>\n\n</ion-row> \n\n\n\n\n\n\n\n\n\n  <!-- getClassValue(v: number): number {\n\n\n\n    if(this.gameStatus.won_fields[v]==1) return 1;//"";\n\n    if(this.gameStatus.won_fields[v]==2) return 2;//"";\n\n    return -1;// "noPadding";\n\n  } -->'/*ion-inline-end:"C:\9tictactoe\src\components\tictactoe\tictactoe.html"*/
    }),
    __metadata("design:paramtypes", [])
], TictactoeComponent);

//# sourceMappingURL=tictactoe.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeLeftBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
 * Generated class for the TimeLeftBarComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var TimeLeftBarComponent = (function () {
    function TimeLeftBarComponent() {
    }
    return TimeLeftBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('text'),
    __metadata("design:type", String)
], TimeLeftBarComponent.prototype, "text", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('percentLeft'),
    __metadata("design:type", Number)
], TimeLeftBarComponent.prototype, "percentLeft", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Input */])('innerColor'),
    __metadata("design:type", String)
], TimeLeftBarComponent.prototype, "innerColor", void 0);
TimeLeftBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'time-left-bar',template:/*ion-inline-start:"C:\9tictactoe\src\components\time-left-bar\time-left-bar.html"*/'<table>\n\n  <tr>\n\n    <td><ion-icon ios="ios-timer" md="md-timer" class="symbol"></ion-icon></td>\n\n    <td style="width: 100%;"><div class="outer">\n\n        <div class="inner" [style.width]="percentLeft + \'%\'" [style.background-color]="innerColor">\n\n          {{text}}\n\n        </div>\n\n      </div></td>\n\n  </tr>\n\n</table>\n\n      \n\n<!-- mit dem gridsystem wollte es nicht ganz so wie ich es wollte ^  -->\n\n'/*ion-inline-end:"C:\9tictactoe\src\components\time-left-bar\time-left-bar.html"*/
    }),
    __metadata("design:paramtypes", [])
], TimeLeftBarComponent);

//# sourceMappingURL=time-left-bar.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StatsPage; });
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





/**
 * Generated class for the StatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var StatsPage = (function () {
    function StatsPage(navCtrl, navParams, profile, loadingCtrl, zone, alertCtrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = profile;
        this.loadingCtrl = loadingCtrl;
        this.zone = zone;
        this.alertCtrl = alertCtrl;
        this.auth = auth;
        this.wins = 0;
        this.looses = 0;
        this.draws = 0;
    }
    StatsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.Displayname = this.profile.getProfileName();
        this.getProfilePicture();
        this.profile.getProfile()
            .then(function (snap) {
            _this.zone.run(function () {
                _this.wins = snap['win'] | 0;
                _this.draws = snap['draw'] | 0;
                _this.looses = snap['loose'] | 0;
            });
        })
            .catch(function () { ; }); // Default werte sind schon 0
    };
    StatsPage.prototype.changePicture = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Profile Picture',
            subTitle: 'Do you want to update your Profile Picture?',
            buttons: [
                {
                    text: 'Agree',
                    handler: function () {
                        _this.takePicture();
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        _this.deleteProfilePicture();
                    }
                },
                {
                    text: 'Disagree',
                    handler: function () { }
                }
            ]
        });
        alert.present();
    };
    StatsPage.prototype.deleteProfilePicture = function () {
        this.profile.deleteProfilePicture();
        this.getProfilePicture();
    };
    StatsPage.prototype.takePicture = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            spinner: 'crescent',
            content: 'Uploading Picture...'
        });
        loading.present();
        this.profile.updateProfilePicture().then(function () {
            _this.getProfilePicture();
            loading.dismiss();
        }).catch(function (err) {
            loading.dismiss();
        });
    };
    StatsPage.prototype.getProfilePicture = function () {
        var _this = this;
        this.profile.getThisProfilePicture().then(function (url) { return _this.zone.run(function () { return _this.profilePic = url; }); })
            .catch(function (err) {
        });
    };
    StatsPage.prototype.editName = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Displaying Name',
            inputs: [{
                    name: 'Name',
                    placeholder: this.Displayname
                }],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        _this.newName(data.Name);
                    }
                },
                {
                    text: 'Cancel'
                }
            ]
        });
        alert.present();
    };
    StatsPage.prototype.newName = function (name) {
        var _this = this;
        this.zone.run(function () { return _this.Displayname = name; });
        this.profile.updateName(name);
    };
    StatsPage.prototype.logout = function () {
        var _this = this;
        this.auth.signOut().then(function () {
            _this.navCtrl.setRoot("LoginPage");
        });
    };
    return StatsPage;
}());
StatsPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'StatsPage'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-stats',template:/*ion-inline-start:"C:\9tictactoe\src\pages\stats\stats.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title (click)="editName()">\n\n      {{Displayname}}<ion-icon name="md-create"></ion-icon>\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content no-padding>\n\n  <div class="profilePic" (click)="changePicture()">\n\n    <span *ngIf="!profilePic">Loading..</span>  \n\n    <ion-icon name="md-create" *ngIf="profilePic"></ion-icon>\n\n    <img [src]="profilePic" *ngIf="profilePic" />\n\n    <!-- <img [src]="profilePic" *ngIf="profilePic" /></ion-icon> -->\n\n  </div>\n\n  <div class="stats">\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-4>\n\n          <ion-row col-12>\n\n            <span>\n\n              <strong>{{wins}}</strong>\n\n            </span>\n\n          </ion-row>\n\n          <ion-row col-12>\n\n            <span>Wins</span>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-row col-12>\n\n            <span>\n\n              <strong>{{looses}}</strong>\n\n            </span>\n\n          </ion-row>\n\n          <ion-row col-12>\n\n            <span>Looses</span>\n\n          </ion-row>\n\n        </ion-col>\n\n        <ion-col col-4>\n\n          <ion-row col-12>\n\n            <span>\n\n              <strong>{{draws}}</strong>\n\n            </span>\n\n          </ion-row>\n\n          <ion-row col-12>\n\n            <span>Draws</span>\n\n          </ion-row>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </div>\n\n\n\n  <!-- <div class="pieChart">\n\n    <canvas baseChart [data]="doughnutChartData" [labels]="doughnutChartLabels" [chartType]="doughnutChartType" (chartHover)="chartHovered($event)"></canvas>\n\n  </div> -->\n\n\n\n  <!-- <br><br><br>\n\n  <div style="display:flex; flex-direction:column;justify-content:center">\n\n    --<button ion-button (click)="takePicture()">Lets take a picture!</button>--\n\n    ----\n\n  </div> -->\n\n</ion-content>'/*ion-inline-end:"C:\9tictactoe\src\pages\stats\stats.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_profile_profile__["a" /* ProfileProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */]])
], StatsPage);

//# sourceMappingURL=stats.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map