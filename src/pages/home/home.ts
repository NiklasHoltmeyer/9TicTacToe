import { Component } from '@angular/core';
import { IonicPage,NavController } from 'ionic-angular';
// import { GamePage } from '../game/game';
// import { LobbyPage } from '../lobby/lobby';
// import { RulesPage } from '../rules/rules';
import { GameServiceProvider } from '../../providers/game-service/game-service';
import { GamestatusProvider } from '../../providers/gamestatus/gamestatus';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage({
  name: 'HomePage'
})

@Component({
	selector: 'page-home',
	templateUrl: 'home.html',
	// providers: [GameServiceProvider,GamestatusProvider]
})
export class HomePage {
	gamePage = "GamePage";
	lobbyPage = "LobbyPage";
	rulesPage = "RulesPage";
	user;
	constructor(public navCtrl: NavController, public gs: GameServiceProvider, public gameStatus: GamestatusProvider, public db: FirebaseProvider, public auth: AuthProvider) {
		this.user = this.gameStatus.players[0].name;
	}
	ionViewDidLoad(){
		if(!this.auth.getdisplayName()) this.db.updateName('Unknown');
	}
}