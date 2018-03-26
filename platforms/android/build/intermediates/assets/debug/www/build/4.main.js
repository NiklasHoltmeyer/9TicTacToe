webpackJsonp([4],{

/***/ 653:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesPageModule", function() { return RulesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rules__ = __webpack_require__(664);
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

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RulesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
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
        selector: 'page-rules',template:/*ion-inline-start:"C:\9tictactoe\src\pages\rules\rules.html"*/'<ion-content padding class="back"> \n\n	<div id="textrules">\n\n		<p><u>1.	Each turn, you mark one of the small squares</u></p> \n\n		<p><u>2.	When you get three in a row on a small board, you’ve won that board.</u></p>\n\n		<p><u>3.	To win the game, you need to win more boards than your opponent.</u></p>\n\n\n\n\n\n		<p><u>4.	You don’t get to pick which of the nine boards to play on.</u><br>\n\n		&nbsp;-	That’s determined by your opponent’s previous move.<br>\n\n		&nbsp;-	 Whichever square he picks, that’s the board you must play in next. (And whichever square you pick will determine which board he plays on next.)</p>\n\n\n\n		<p><u>5.	What if my opponent sends me to a board that’s already been won?</u> <br>\n\n		&nbsp; -In that case, congratulations – you get to go anywhere you like, on any of the other boards.</p>\n\n\n\n		<p><u>6.	What if one of the small boards results in a tie?</u><br>\n\n		&nbsp;-	Each player get a point</p>\n\n	</div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\9tictactoe\src\pages\rules\rules.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
], RulesPage);

//# sourceMappingURL=rules.js.map

/***/ })

});
//# sourceMappingURL=4.main.js.map