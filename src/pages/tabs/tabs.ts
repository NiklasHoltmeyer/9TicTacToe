import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
// import { HomePage } from '../home/home';
// import { StatsPage } from '../stats/stats';
// import { RulesPage } from '../rules/rules';
/**
 * Generated class for the TabsPage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */
@IonicPage({
  name: 'TabsPage'
})
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  homeRoot = "HomePage";
  statsRoot = "StatsPage";
  rulesRoot = "RulesPage";
  loginRoot = "LoginPage";

  constructor(public navCtrl: NavController) {}
  logout(){
    alert("yeah");
  }

}
