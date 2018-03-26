import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { GameServiceProvider } from '../../providers/game-service/game-service';
import { GamestatusProvider } from '../../providers/gamestatus/gamestatus';

@IonicPage({
  name: 'GamePage'
})


@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})

export class GamePage {
  index = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]; // feld zeichen hilfe
  index2 = [0, 1, 2];
  speedUpMessage = {message: 'Write !speedup to Start a Speedup Voting.',
                    name: '9TicTacToe',
                    color: 'black'};
  chat = [this.speedUpMessage];
  newMessage;
  timeLeft = 30;
  profilePic0;
  profilePic1;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public gameService: GameServiceProvider,
    public gameStatus: GamestatusProvider,
    public auth: AuthProvider,
    public zone: NgZone,
    public db: FirebaseProvider,
    public profile: ProfileProvider,
    public modal: ModalController) {
    gameStatus.resett();
    gameService.gamePage = this;
    if (typeof this.navParams.get('type') != 'undefined') gameStatus.gameType = this.navParams.get('type');
    else gameStatus.gameType = 2;
    if (gameStatus.gameType == 0) {
      gameStatus.players[1].name = "Bot";
      gameStatus.players[1].bot = true;
    }
    if (gameStatus.gameType == 1) {
      gameStatus.players[1].name = "Guest2";
      gameStatus.players[1].localSecondPlayer = true;
    }
    if (gameStatus.gameType == 2) this.initChat();
  }

  ionViewWillEnter() {
    this.initPictures();
    this.gameStatus.startTimer(30, () => {
      if (this.gameStatus.timeLeft == 0) {
        this.gameStatus.stopTimer();
        if (!this.gameService.isGameOver()) {
          let pos: any = this.gameService.getRandomTile();
          this.playerClick(pos[0], pos[1], pos[2]);
        }
      }
    });
  }

  ionViewWillLeave() {
    if (this.gameStatus.gameType == 2) this.db.stopListenToMessages(this.gameStatus.key);
    this.gameStatus.stopTimer();
  }
  initPictures() {
    for (let i = 0; i < 2; ++i) {
      const uid = this.gameStatus.players[i].uid;
      this.profile.getProfilePicture(uid).then((url) => {
        if (i == 0) this.profilePic0 = url;
        if (i == 1) this.profilePic1 = url;
      })
        .catch((err) => { alert('initPictures Error'); alert(err); });
    }
  }
  initChat() {
    this.db.newMessages.subscribe((snap) => {
      this.zone.run(() => {// sonst updated die seite nicht immer richtig
        this.chat.push(snap.val());
      });
    }, (err) => {
      alert('initChat: ' + err);
    });
    this.db.startListenToMessages(this.gameStatus.key);
  }

  isPossibleField(v: number): boolean {
    /* wenn alle felder möglich nichts makieren */
    if (this.gameStatus.nextfield.sort().join(',') === [0, 1, 2, 3, 4, 5, 6, 7, 8].sort().join(',')) return false;
    for (let entry of this.gameStatus.nextfield) {
      if (entry == v) return true
    }
    return false;
  }

  getClassValue(v: number): number {
    if (this.isPossibleField(v)) return 0;//"selected noPadding";
    if (this.gameStatus.won_fields[v] == 1) return 1;//"player1_won noPadding";
    if (this.gameStatus.won_fields[v] == 2) return 2;//"player2_won noPadding";
    return -1;// "noPadding";
  }

  getPlayerTurnClass(): string {
    if (this.gameStatus.turn) return "player1_border"
    return "player2_border";
  }

  ionViewDidLoad(): void { }
  playerClicked(event): void {
    this.gameService.playerClick(event[0], event[1], event[2]);
  }
  playerClick(x, y, z): void {
    this.gameService.playerClick(x, y, z);
  }
  btnRestartGame(): void {
    if (this.gameStatus.gameType == 0 || this.gameStatus.gameType == 1) this.gameStatus.resett();
    //else iwas wegen mit mp online
  }

  btnReturn(): void {
    if (this.gameStatus.gameType == 0 || this.gameStatus.gameType == 1) this.gameStatus.resett();
    //else iwas wegen mit mp online
    this.navCtrl.push("HomePage");
  }
  getScore(symbol): number {
    return this.gameStatus.getScore(symbol);
  }
  sendMessage(event): void {
    let enter: number = 13;
    if (event.keyCode == enter && this.newMessage) {
      let regex = new RegExp('(.*)!speedup(.*)'); // einfacher vergleich wollte nicht
      if(regex.test(this.newMessage)){
        const uid = this.auth.getUserUid();
        const key = this.gameStatus.key;
        this.db.voteSpeedUp(key,uid);
      }else{
        let messageInfos: any = { name: this.auth.getdisplayName(), message: this.newMessage, color: (this.gameStatus.symbol)? 'blue':'red'};
        let key: string = this.gameStatus.key;
        this.db.pushMessage(key, messageInfos);
      }
      this.zone.run(() => { // sonst wird das input feld nicht immer richtig gecleared
        this.newMessage = "";
      });

    }
  }
  getPicture(player) {
    // const uid = this.gameStatus.players[playerIndex].uid;
    return "https://firebasestorage.googleapis.com/v0/b/tictactoe-440b3.appspot.com/o/profiles%2FdefaultPicture.jpg?alt=media&token=b861c7de-1bc6-4adc-9f19-bd71b1b9037a";
  }
  displayProfile(playerIndex) {
    this.modal.create('ModalDisplayProfilePage', { player: this.gameStatus.players[playerIndex] }).present();
  }

}
