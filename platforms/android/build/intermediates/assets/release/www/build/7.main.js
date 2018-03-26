webpackJsonp([7],{

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LobbyPageModule", function() { return LobbyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lobby__ = __webpack_require__(663);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LobbyPageModule = (function () {
    function LobbyPageModule() {
    }
    return LobbyPageModule;
}());
LobbyPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__lobby__["a" /* LobbyPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__lobby__["a" /* LobbyPage */]),
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__lobby__["a" /* LobbyPage */]
        ]
    })
], LobbyPageModule);

//# sourceMappingURL=lobby.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LobbyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_gamestatus_gamestatus__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__ = __webpack_require__(157);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { GamePage } from '../game/game';



/**
 * Generated class for the LobbyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var LobbyPage = (function () {
    function LobbyPage(navCtrl, navParams, db, auth, gameStatus, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.auth = auth;
        this.gameStatus = gameStatus;
        this.zone = zone;
        this.created = false;
        this.lobbys = [];
        this.gameType = this.navParams.get('type');
    }
    LobbyPage.prototype.ionViewDidLoad = function () { };
    LobbyPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.db.listenToOpenLobbys();
        this.db.openLobbys.subscribe(function (snap) {
            _this.zone.run(function () {
                _this.lobbys.push({ key: snap.getKey(), name: snap.val().creator_displayName });
            });
        }, function (err) {
            alert("Lobby - ionViewWillEnter(): " + err);
        });
    };
    LobbyPage.prototype.ionViewWillLeave = function () {
        this.db.stopListenToOpenLobbys();
    };
    LobbyPage.prototype.enterGame = function (playerturn, key) {
        var _this = this;
        /* playerturn  true == (Lobby)ersteller, joiner == false */
        var setupInfos = (playerturn) ? {
            turn: true,
            won_fields: this.gameStatus.won_fields,
            fields: this.gameStatus.fields,
            nextField: this.gameStatus.nextfield,
            speedUpTimer: 30
        } : false;
        this.db.setUpLobby(key, setupInfos)
            .then(function (snap) {
            _this.gameStatus.initMultiplayer(key);
            _this.gameStatus.gameType = 2;
            _this.gameStatus.players[0].name = snap.val().creator_displayName;
            _this.gameStatus.players[0].uid = snap.val().creator_uid;
            _this.gameStatus.players[1].name = snap.val().joiner_displayName;
            _this.gameStatus.players[1].uid = snap.val().joiner_uid;
            _this.gameStatus.symbol = playerturn;
            _this.navCtrl.push("GamePage");
        })
            .catch(function (err) {
            alert("Lobby enterGame: " + err);
        });
    };
    LobbyPage.prototype.createLobby = function () {
        var _this = this;
        var lobbyInfos = {
            creator_uid: this.auth.getUserUid(),
            creator_displayName: this.auth.getdisplayName(),
            state: 1,
            state_creator_uid: "1_" + this.auth.getUserUid() //für uniqueLobby || quelle: https://www.youtube.com/watch?v=sKFLI5FOOHs&feature=youtu.be})
        };
        this.db.createLobby(lobbyInfos).then(function (key) {
            _this.db.joinedLobby.subscribe(function (snap) {
                if (snap)
                    _this.enterGame(true, key); // wird aufgerufen wenn jemand der lobby beitritt 
            }, function (err) {
                console.log("createLobby: " + err);
            });
            _this.db.waitLobby(key); // listener starten ^ 
        });
    };
    LobbyPage.prototype.createGame = function () {
        var _this = this;
        this.db.isUniqueLobby().then(function (snap) {
            _this.createLobby();
        }).catch(function (err) {
            alert("Just one Lobby per Person");
        });
    };
    LobbyPage.prototype.joinGame = function (key) {
        var _this = this;
        this.db.joinLobby(key)
            .then(function () { return _this.enterGame(false, key); })
            .catch(function (err) { return alert(err); });
    };
    return LobbyPage;
}());
LobbyPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["e" /* IonicPage */])({
        name: 'LobbyPage'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* Component */])({
        selector: 'page-lobby',template:/*ion-inline-start:"C:\9tictactoe\src\pages\lobby\lobby.html"*/'<!--\n  Generated template for the LobbyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>Multiplayer-Lobby</ion-title>\n    </ion-navbar>\n</ion-header>\n<ion-content padding>\n    <button ion-button (click)="createGame()" full block outline>Create Lobby</button>\n    <button *ngFor="let lobby of lobbys" ion-button (click)="joinGame(lobby.key)" full block>Join {{lobby.name}}\'s Lobby</button>\n</ion-content>\n'/*ion-inline-end:"C:\9tictactoe\src\pages\lobby\lobby.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_firebase_firebase__["a" /* FirebaseProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_gamestatus_gamestatus__["a" /* GamestatusProvider */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["e" /* NgZone */]])
], LobbyPage);

//# sourceMappingURL=lobby.js.map

/***/ })

});
//# sourceMappingURL=7.main.js.map