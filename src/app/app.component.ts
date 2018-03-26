import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BotProvider } from '../providers/bot/bot';
import { GameServiceProvider } from '../providers/game-service/game-service';
import { ProfileProvider } from '../providers/profile/profile';
// import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html',
  providers: [GameServiceProvider, BotProvider,ProfileProvider]
})
export class MyApp {
  rootPage: any = "LoginPage";

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

