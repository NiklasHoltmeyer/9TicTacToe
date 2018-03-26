import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatsPage } from './stats';
// import { ChartsModule } from 'ng2-charts';
import { ComponentsModule } from '../../components/components.module'

@NgModule({
  declarations: [
    StatsPage,
  ],
  imports: [
    IonicPageModule.forChild(StatsPage),  
    // ChartsModule,
    ComponentsModule
  ],
  exports: [
    StatsPage
  ]
  //,
  // providers: [
  //   StatusBar,
  //   SplashScreen,
  //   GooglePlus,
  //   { provide: ErrorHandler, useClass: IonicErrorHandler },
  //   BotProvider,
  //   GameServiceProvider,
  //   GamestatusProvider,
  //   PlayerProvider,
  //   AuthProvider,
  //   FirebaseProvider,
  //   ProfileProvider,
  //   Camera
  // ]
})
export class StatsPageModule {}



  