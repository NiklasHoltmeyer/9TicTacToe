import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { PlayerProvider } from '../../providers/player/player';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-modal-display-profile',
  templateUrl: 'modal-display-profile.html',
})
export class ModalDisplayProfilePage {

  profilePic;
  Displayname;
  wins: number = 0;
  looses: number = 0;
  draws: number = 0;
  player: PlayerProvider; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public profile: ProfileProvider,
    public loadingCtrl: LoadingController, public zone: NgZone, private auth: AuthProvider) {
      this.player = this.navParams.get('player');      
      if(!this.player.bot&&!this.player.localSecondPlayer&&!this.player.uid) this.player.uid = this.auth.getUserUid();
  }
  ionViewDidEnter() {
    this.Displayname = this.player.uid; //name
    this.getProfilePicture();
    this.profile.getOtherProfile(this.player.uid)
      .then((snap) => {
        this.zone.run(() => {
          this.wins = snap['win'] | 0;
          this.draws = snap['draw'] | 0;
          this.looses = snap['loose'] | 0;
        });
      })
      .catch(() => { ; }); // Default werte sind schon 0
  }
  getProfilePicture() {
    this.profile.getProfilePicture(this.player.uid).then((url) => this.zone.run(() => this.profilePic = url))
      .catch((err) => {});
  }
  goBackToPrevPage(){
    this.navCtrl.pop();
  }
}


















