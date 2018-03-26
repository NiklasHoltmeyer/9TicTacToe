import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProfileProvider } from '../../providers/profile/profile';
import { AuthProvider } from '../../providers/auth/auth';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the StatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'StatsPage'
})
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
  profilePic;
  Displayname;
  wins: number = 0;
  looses: number = 0;
  draws: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public profile: ProfileProvider,
    public loadingCtrl: LoadingController, public zone: NgZone, private alertCtrl: AlertController, private auth : AuthProvider) {
  }
  ionViewDidEnter() {
    this.Displayname = this.profile.getProfileName();
    this.getProfilePicture();
    this.profile.getProfile()
      .then((snap) => {
        this.zone.run(() => {
          this.wins = snap['win'] | 0;
          this.draws = snap['draw'] | 0;
          this.looses = snap['loose'] | 0;
        });
      })
      .catch(() => { ; }); // Default werte sind schon 0
  }
  changePicture() {
    let alert = this.alertCtrl.create({
      title: 'Profile Picture',
      subTitle: 'Do you want to update your Profile Picture?',
      buttons: [
        {
          text: 'Agree',
          handler: () => {
            this.takePicture();
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteProfilePicture();
          }
        },
        {
          text: 'Disagree',
          handler: () => { }
        }
      ]
    });
    alert.present();
  }

  deleteProfilePicture() {
    this.profile.deleteProfilePicture();
    this.getProfilePicture();
  }
  takePicture() {
    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Uploading Picture...'
    });
    loading.present();
    this.profile.updateProfilePicture().then(() => {
      this.getProfilePicture();
      loading.dismiss();
    }).catch((err) => {
      loading.dismiss();
    });
  }
  getProfilePicture() {
    this.profile.getThisProfilePicture().then((url) => this.zone.run(() => this.profilePic = url))
      .catch((err) => {

      });
  }
  editName() {
    let alert = this.alertCtrl.create({
      title: 'Displaying Name',
      inputs: [{
        name: 'Name',
        placeholder: this.Displayname
      }],
      buttons: [
        {
          text: 'Save',
          handler: data => {
            this.newName(data.Name);
          }
        },
        {
          text: 'Cancel'
        }
      ]
    });
    alert.present();
  }

  newName(name: string) {
    this.zone.run(() => this.Displayname = name);
    this.profile.updateName(name);
  }
  logout() : void{
    this.auth.signOut().then(()=>{
      this.navCtrl.setRoot("LoginPage");
    });
  }
}
