webpackJsonp([4],{

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPageModule", function() { return RulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RulesPageModule = (function () {
    function RulesPageModule() {
    }
    return RulesPageModule;
}());
RulesPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__rules__["a" /* RulesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rules__["a" /* RulesPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__rules__["a" /* RulesPage */]
        ]
    })
], RulesPageModule);

//# sourceMappingURL=rules.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
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
 * Generated class for the RulesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var RulesPage = (function () {
    function RulesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RulesPage.prototype.ionViewDidLoad = function () { };
    return RulesPage;
}());
RulesPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'RulesPage'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-rules',template:/*ion-inline-start:"C:\9tictactoe\src\pages\rules\rules.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Game Rules</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding> \n	<div id="back"></div>\n	<div id="textrules">\n		<ol>\n			<li>Each turn, you mark one of the small squares.</li>\n			<li>When you get three in a row on a small board, you’ve won that board.</li>\n			<li>To win the game, you need to win more boards than your opponent.</li>\n			<li>You don’t get to pick which of the nine boards to play on.\n				<ul>\n					<li>- That’s determined by your opponent’s previous move.</li>\n					<li>- Whichever square he picks, that’s the board you must play in next. (And whichever square you pick will determine which board he plays on next.)</li>\n				</ul>\n			</li>\n			<li>What if my opponent sends me to a board that’s already been won?\n				<ul>\n					<li>- In that case, congratulations you get to go anywhere you like, on any of the other boards.</li>\n				</ul>\n			</li>\n			<li>What if one of the small boards results in a tie?\n				<ul>\n					<li>- Each player get a point</li>\n				</ul>				\n			</li>\n		</ol>\n	</div>\n</ion-content>\n'/*ion-inline-end:"C:\9tictactoe\src\pages\rules\rules.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RulesPage);

//# sourceMappingURL=rules.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map