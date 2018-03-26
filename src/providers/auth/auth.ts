import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';
import { GooglePlus } from '@ionic-native/google-plus';
import { webClientIdGooglePlusApi } from '../../environment';
import { GamestatusProvider } from '../../providers/gamestatus/gamestatus';

@Injectable()
export class AuthProvider {
  constructor(public googleplus: GooglePlus, public gameStatus: GamestatusProvider) { }
  signInAnonym():void{
    firebase.auth().signInAnonymously();
  }
  signInGoogle():void{
    this.googleplus.login({
      'webClientId': webClientIdGooglePlusApi,
      'offline': true
    })
      .then((res) => {
        const firecreds = firebase.auth.GoogleAuthProvider.credential(res.idToken);
        firebase.auth().signInWithCredential(firecreds).then((success) => {
          return;
        }).catch((err) => {
          alert('Firebase auth failed ' + err);
        })
      }).catch((err) => {
        alert('Error:' + err);
      });
  }

  signOut(){
    return new Promise((resolve,reject)=>{
      firebase.auth().signOut().then(()=>{
        resolve(true);
      }).catch(()=>{
        reject(false);
      });
    });    
  }

  getcurrentUser():any{
    return firebase.auth().currentUser;
  }
  getdisplayName():string{    
    // return (firebase.auth().currentUser.isAnonymous) ? "Guest" : firebase.auth().currentUser.displayName;
    return firebase.auth().currentUser.displayName;
  }

  getUserUid():string{
    return this.getcurrentUser().uid;
  } 
}
