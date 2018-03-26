webpackJsonp([1],{

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamePageModule", function() { return GamePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__game__ = __webpack_require__(660);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(657);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var GamePageModule = (function () {
    function GamePageModule() {
    }
    return GamePageModule;
}());
GamePageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */]), __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__game__["a" /* GamePage */]]
    })
], GamePageModule);

//# sourceMappingURL=game.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_tictactoe_tictactoe__ = __webpack_require__(658);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_time_left_bar_time_left_bar__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(155);
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

/***/ 658:
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
        console.log(this.fieldClass);
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
        selector: 'tictactoe',template:/*ion-inline-start:"C:\9tictactoe\src\components\tictactoe\tictactoe.html"*/'<!-- Generated template for the TictactoeComponent component -->\n\n <ion-row *ngFor="let row of field; let i = index" [attr.data-index]="i" [ngClass]="{\'borderVertical\': i==1,\'selected\': fieldClass==0,\'player1_won\': fieldClass==1,\'player2_won\': fieldClass==2,\'\': fieldClass==-1}" class="row noPadding">\n\n  <ion-col *ngFor="let tile of row; let j = index" [attr.data-index]="j" [ngClass]="{\'borderHorizontal\': j==1}" class="center"\n\n    (click)="playerClick(Index,i,j)">\n\n    <span class="ctr text noPadding" [ngClass]="{\'player1\':tile==1,\'player2\': tile==2}">{{(tile==0)? \' \': ((tile==1)? \'x\' : \'o\')}}</span>\n\n    <!--  -->\n\n  </ion-col>\n\n</ion-row> \n\n\n\n\n\n\n\n\n\n  <!-- getClassValue(v: number): number {\n\n\n\n    if(this.gameStatus.won_fields[v]==1) return 1;//"";\n\n    if(this.gameStatus.won_fields[v]==2) return 2;//"";\n\n    return -1;// "noPadding";\n\n  } -->'/*ion-inline-end:"C:\9tictactoe\src\components\tictactoe\tictactoe.html"*/
    }),
    __metadata("design:paramtypes", [])
], TictactoeComponent);

//# sourceMappingURL=tictactoe.js.map

/***/ }),

/***/ 659:
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

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_game_service_game_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_gamestatus_gamestatus__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GamePage = (function () {
    function GamePage(navCtrl, navParams, gameService, gameStatus, auth, zone, db) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.gameService = gameService;
        this.gameStatus = gameStatus;
        this.auth = auth;
        this.zone = zone;
        this.db = db;
        this.index = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]; // feld zeichen hilfe
        this.index2 = [0, 1, 2];
        this.chat = [];
        this.timeLeft = 30;
        gameStatus.resett();
        gameService.gamePage = this;
        if (typeof this.navParams.get('type') != 'undefined')
            gameStatus.gameType = this.navParams.get('type');
        else
            gameStatus.gameType = 2;
        if (gameStatus.gameType == 0)
            gameStatus.players[1].name = "Bot";
        if (gameStatus.gameType == 1)
            gameStatus.players[1].name = "Guest2";
        if (gameStatus.gameType == 2)
            this.initChat();
    }
    GamePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.gameStatus.startTimer(30, function () {
            if (_this.gameStatus.timeLeft == 0) {
                _this.gameStatus.stopTimer();
                if (!_this.gameService.isGameOver()) {
                    var pos = _this.gameService.getRandomTile();
                    _this.playerClick(pos[0], pos[1], pos[2]);
                }
            }
        });
    };
    GamePage.prototype.ionViewWillLeave = function () {
        if (this.gameStatus.gameType == 2)
            this.db.stopListenToMessages(this.gameStatus.key);
        this.gameStatus.stopTimer();
    };
    GamePage.prototype.initChat = function () {
        var _this = this;
        this.db.newMessages.subscribe(function (snap) {
            _this.zone.run(function () {
                _this.chat.push(snap.val());
            });
        }, function (err) {
            alert('initChat: ' + err);
        });
        this.db.startListenToMessages(this.gameStatus.key);
    };
    GamePage.prototype.isPossibleField = function (v) {
        /* wenn alle felder möglich nichts makieren */
        if (this.gameStatus.nextfield.sort().join(',') === [0, 1, 2, 3, 4, 5, 6, 7, 8].sort().join(','))
            return false;
        for (var _i = 0, _a = this.gameStatus.nextfield; _i < _a.length; _i++) {
            var entry = _a[_i];
            if (entry == v)
                return true;
        }
        return false;
    };
    GamePage.prototype.getClassValue = function (v) {
        if (this.isPossibleField(v))
            return 0; //"selected noPadding";
        if (this.gameStatus.won_fields[v] == 1)
            return 1; //"player1_won noPadding";
        if (this.gameStatus.won_fields[v] == 2)
            return 2; //"player2_won noPadding";
        return -1; // "noPadding";
    };
    GamePage.prototype.getPlayerTurnClass = function () {
        if (this.gameStatus.turn)
            return "player1_border";
        return "player2_border";
    };
    GamePage.prototype.ionViewDidLoad = function () { };
    GamePage.prototype.playerClicked = function (event) {
        this.gameService.playerClick(event[0], event[1], event[2]);
    };
    GamePage.prototype.playerClick = function (x, y, z) {
        this.gameService.playerClick(x, y, z);
    };
    GamePage.prototype.btnRestartGame = function () {
        if (this.gameStatus.gameType == 0 || this.gameStatus.gameType == 1)
            this.gameStatus.resett();
        //else iwas wegen mit mp online
    };
    GamePage.prototype.btnReturn = function () {
        if (this.gameStatus.gameType == 0 || this.gameStatus.gameType == 1)
            this.gameStatus.resett();
        //else iwas wegen mit mp online
        this.navCtrl.push("HomePage");
    };
    GamePage.prototype.getScore = function (symbol) {
        return this.gameStatus.getScore(symbol);
    };
    GamePage.prototype.sendMessage = function (event) {
        var _this = this;
        var enter = 13;
        if (event.keyCode == enter && this.newMessage) {
            var messageInfos = { name: this.auth.getdisplayName(), message: this.newMessage };
            var key = this.gameStatus.key;
            this.db.pushMessage(key, messageInfos);
            this.zone.run(function () {
                _this.newMessage = "";
            });
        }
    };
    return GamePage;
}());
GamePage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])({
        name: 'GamePage'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-game',template:/*ion-inline-start:"C:\9tictactoe\src\pages\game\game.html"*/'<!-- if (this.isPossibleField(v)) return "selected noPadding";\n\n    if(this.gameStatus.won_fields[v]==1) return "player1_won noPadding";\n\n    if(this.gameStatus.won_fields[v]==2) return "player2_won noPadding";\n\n    return "noPadding"; -->\n\n<ion-content padding class="bg">\n\n\n\n    <ion-row>\n\n        <ion-col col-6>\n\n            <span class="text_smaller" style="float:left;"><strong>{{gameStatus.players[0].name}}</strong>:</span><span class="player1 text_smaller">&nbsp;{{getScore(1)}}</span>\n\n        </ion-col>\n\n        <ion-col col-6>\n\n            <div style="float:right;"><span class="text_smaller" ><strong>{{gameStatus.players[1].name}}</strong>:</span><span class="player2 text_smaller">&nbsp;{{getScore(2)}}</span></div>\n\n        </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col col-12 col-md-6 class="ctr">\n\n            <ion-grid [ngClass]="getPlayerTurnClass()" class="ctr">\n\n                <ion-row *ngFor="let tetrisIndex of index">\n\n                    <ion-col *ngFor="let fieldIndex of tetrisIndex" class="ctr">\n\n                        <tictactoe [fieldClass]="getClassValue(fieldIndex)" [Index]=fieldIndex [field]="gameStatus.fields[fieldIndex]" (playerClicked)="playerClicked($event)"></tictactoe>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </ion-grid>\n\n            <br>\n\n            <time-left-bar [percentLeft]="gameStatus.timeLeftPercentage" [text]="gameStatus.timeLeft" [innerColor]="gameStatus.timerColor"\n\n                style="width: 100%; height: 50%"></time-left-bar>\n\n            <div *ngIf="!gameService.isGameOver()&&gameStatus.gameType&&gameStatus.symbol==gameStatus.turn" class="ctr text"><br><strong>Your turn!</strong><br></div>\n\n            <div *ngIf="!gameService.isGameOver()&&gameStatus.gameType!=2" class="ctr text" [ngClass]="{\'player1\': gameStatus.turn,\'player2\': !gameStatus.turn}"><br><strong>{{gameStatus.turn? gameStatus.players[0].name : gameStatus.players[1].name}}\'s turn!</strong><br></div>\n\n        </ion-col>\n\n        <ion-col col-sm-12 col-md-6>\n\n            <!-- CHAT -->\n\n            <ion-row *ngIf="gameStatus.gameType==2">\n\n                <form (keyup)="sendMessage($event)">\n\n                    <ion-row>\n\n                        <ul class="noPadding">\n\n                            <div *ngFor="let msg of chat" class="msg">\n\n                                <li><strong>{{msg.name}}</strong>: {{msg.message}}</li>\n\n                            </div>\n\n                        </ul>\n\n                    </ion-row>\n\n                    <ion-row class="fullwidth bordertop">\n\n                        <ion-textarea placeholder="Enter a message" value="" name="msgBox" [(ngModel)]="newMessage"></ion-textarea>\n\n                    </ion-row>\n\n                </form>\n\n            </ion-row>\n\n        </ion-col>\n\n    </ion-row>\n\n    <div *ngIf="gameService.isGameOver()">\n\n        <br>\n\n        <button ion-button (click)="btnRestartGame()" full block>Restart Game</button>\n\n        <button ion-button (click)="btnReturn()" full block>Return</button>\n\n    </div>\n\n</ion-content>\n\n\n\n<!-- feld zeichnen v1 -->\n\n<!-- <ion-grid [ngClass]="getPlayerTurnClass()" class="noPadding">\n\n    <ion-row *ngFor="let tetrisIndex of index; let r = index; trackBy: trackByFn" class="noPadding">\n\n        <ion-col *ngFor="let x of tetrisIndex; let x = index; trackBy: trackByFn" [ngClass]="getClassValue(x)" class="noPadding">\n\n            <div [ngClass]="{\'player1_won\':gameStatus.won_fields[x]==1,\'player2_won\':gameStatus.won_fields[x]==2,\'bordern\':x%2==0,\'bordernplus1\':x%2!=0}"\n\n                class="noPadding">\n\n                <ion-row class="ctr fc noPadding" *ngFor="let y of index2; let y = index; trackBy: trackByFn">\n\n                    <ion-col class="noPadding" *ngFor="let z of index2; let z = index; trackBy: trackByFn" (click)="playerClick(x,y,z)">\n\n                        <div class="tile fc noPadding">\n\n                            <span class="ctr text noPadding" [ngClass]="{\'player1\':gameStatus.fields[x][y][z]==1,\'player2\': gameStatus.fields[x][y][z]==2}">{{(gameStatus.fields[x][y][z]==0)? \' \': ((gameStatus.fields[x][y][z]==1)? \'x\' : \'o\')}}</span>\n\n                        </div>\n\n                    </ion-col>\n\n                </ion-row>\n\n            </div>\n\n        </ion-col>\n\n    </ion-row>\n\n</ion-grid> -->'/*ion-inline-end:"C:\9tictactoe\src\pages\game\game.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_game_service_game_service__["a" /* GameServiceProvider */],
        __WEBPACK_IMPORTED_MODULE_5__providers_gamestatus_gamestatus__["a" /* GamestatusProvider */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* NgZone */],
        __WEBPACK_IMPORTED_MODULE_3__providers_firebase_firebase__["a" /* FirebaseProvider */]])
], GamePage);

//# sourceMappingURL=game.js.map

/***/ })

});
//# sourceMappingURL=1.main.js.map