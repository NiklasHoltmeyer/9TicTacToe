import { Injectable, NgZone } from '@angular/core';
import { PlayerProvider } from '../player/player';
import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';

@Injectable()
export class GamestatusProvider {
	gamePage;
	players: PlayerProvider[] = [new PlayerProvider, new PlayerProvider]; // players[0] = local players[1] = wenn multiplayer spieler
	turn: boolean = true;
	symbol: boolean; /* hilfs Var für MP */
	key: string; /* hilfsVar für MP /Firebase*/
	gameType: number; /* 0 Bot, 1 MP Local, 2 MP Online*/
	won_fields: any = this.initWon_Fields(); /* false, 1, 2, 3 = feld voll kein sieger*/
	fields: any = this.initField();
	nextfield: any = [0, 1, 2, 3, 4, 5, 6, 7, 8];

	timerColor: string = "green";
	timeLeftPercentage: number = 100;
	timeLeftTimer: number = 30;//30;
	timeLeft;
	public time;
	private timer;
	private sub: Subscription;
	callBack;

	constructor(public player: PlayerProvider, public zone: NgZone) {}
	resett(): void {
		this.players[0].reset();this.players[1].reset();
		if(this.gameType==0||this.gameType==1) this.players[0].uid = this.player.getCurrentUID();
		this.won_fields = this.initWon_Fields();
		this.fields = this.initField();
		this.nextfield = [0, 1, 2, 3, 4, 5, 6, 7, 8];
	}
	updateTurn(turn): void {
		if (typeof (turn) != "undefined" && this.turn != turn) this.turn = turn; // sonst ist turn immer true weil if(false) direkt returnen würde
	}
	updatewon_Fields(wFs): void {
		if (!wFs) return;
		let iAr: any = [0, 1, 2, 3, 4, 5, 6, 7, 8];
		for (let i of iAr) { // ist das selbe wie for(let i = 0; i < 9; ++i)
			if (wFs[i] != this.won_fields[i]) this.won_fields[i] = wFs[i];
		}
	}
	updateFields(fields): void {
		if (!fields) return;
		let xAr: any = [0, 1, 2, 3, 4, 5, 6, 7, 8];
		let yzAr: any = [0, 1, 2];
		for (let x of xAr) {
			for (let y of yzAr) {
				for (let z of yzAr) {
					if (fields[x][y][z] != this.fields[x][y][z]) this.fields[x][y][z] = fields[x][y][z];
				}
			}
		}
	}
	updateNextField(nf): void {
		if (!nf) return;
		let iAr: any = [0, 1, 2, 3, 4, 5, 6, 7, 8];
		for (let i of iAr) {
			if (this.nextfield[i] != nf[i]) this.nextfield[i] = nf[i];
		}
	}
	updateSpeedUpTimer(nT) : void{
		if(nT!=this.time){
			this.time=nT;
		}
	}
	initMultiplayer(key): void {
		this.key = key;
		this.resett();
		this.checkForUpdates(key);
	}
	checkForUpdates(key) {
		const query = firebase.database().ref("/games").child(key);
		query.on('value', snap => {
			this.zone.run(() => {
				this.updateTurn(snap.val().turn);
				this.updatewon_Fields(snap.val().won_fields);
				this.updateFields(snap.val().fields);
				this.updateNextField(snap.val().nextField);
				this.updateSpeedUpTimer(snap.val().speedUpTimer);
				this.startTimer_();
			});
		});
	}

	update(): void {
		if (!this.key) {
			alert("!update");
			return;
		}
		const query = firebase.database().ref("/games").child(this.key);
		query.once('value', snap => {
			if (!snap.val() || snap.val().state == "DONE") return; // todo iwas wenn game zuende / gelöscht
			query.update({
				turn: !this.symbol,
				won_fields: this.won_fields,
				fields: this.fields,
				nextField: this.nextfield,
				speedUpTimer: this.time
			});
		});	
	}
	initField(): any {
		// return [[[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1, 1, 1], [1, 1, 1], [1, 1, 1]], [[1,0, 0], [2, 2, 1], [2, 2, 1]]];	
		return [[[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]], [[0, 0, 0], [0, 0, 0], [0, 0, 0]]];	
	}
	initWon_Fields(): any {
		return [false, false, false, false, false, false, false, false, false];
		/* zum testen */
		// return [1,1,1,1,1,1,1,1,false];
		// return [2,2,2,2,2,2,2,2,false];		
		// return [3,3,3,3,3,3,3,3,false];
	}
	getScore(symbol): number {
		let counter: number = 0;
		for (let field of this.won_fields) {
			if (field == symbol)++counter;
		}
		/* bonus punkte wenn feld in reihe gewonnen */
		/* vertikal */
		for(let i =0; i<3; ++i){
			if(	this.won_fields[i]==symbol&&
				this.won_fields[i]==this.won_fields[i+1]&&
				this.won_fields[i+2]==symbol) ++counter;
		}
		/*horizontal*/
		for(let i=0; i<3; ++i){
			if(	this.won_fields[i]==symbol&&
			   	this.won_fields[i] == this.won_fields[i+3]&&
				this.won_fields[i+3] ==  this.won_fields[i+6]) ++counter;
		}
		/* diagonal */
		if(	symbol == this.won_fields[0]&&
			this.won_fields[0] == this.won_fields[4] && 
			this.won_fields[4] == this.won_fields[8]) ++counter
		if(	symbol == this.won_fields[2]&&
			this.won_fields[2] == this.won_fields[4] && 
			this.won_fields[4] == this.won_fields[6]) ++counter
		
		return counter;
	}
	startTimer(time, callback) {
		this.time = time;
		this.callBack = callback;
		this.startTimer_();
	}
	startTimer_() {
		this.stopTimer();
		this.timeLeft = this.time;
		this.timer = Observable.timer(1000, 1000);
		this.timerColor = (this.time > 10) ? "green" : "red"; // wenn ich timer und % nicht hier direkt setzte wirkt es als ob der timer beim wechsel laggt
		this.timeLeftPercentage = 100;
		this.sub = this.timer.subscribe(() => {
			this.zone.run(() => {
				--this.timeLeft;
				if (!this.timeLeft) {
					this.stopTimer();
					let tmp: boolean = (this.gameType == 2) && (this.turn == this.symbol);
					if ((this.gameType != 2) || tmp) {
						this.callBack();
					}
				} else {
					this.timeLeftPercentage = 100 - ((this.timeLeft - this.time) * (-100) / this.time);
					if (this.timeLeft < 11) this.timerColor = "red";
				}
			});
		});
	}
	stopTimer() {
		if (this.sub) this.sub.unsubscribe();
	}
	getWinner() {
		let x:number = this.getScore(1);
		let o:number = this.getScore(2);
		let symbol = (this.gameType==2)? this.symbol : 1;
		let winlooseddraw; // -1 draw 0 verloren 1 gewonnen

		if(x==o) winlooseddraw = -1;
		else if(x > o) winlooseddraw = (symbol==1);
		else winlooseddraw = (symbol==2);

		if(winlooseddraw == -1) return "Draw!";
		if(winlooseddraw) return "You won!";
		return "You loose!";
	}

}

