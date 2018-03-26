import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RulesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({
  name: 'RulesPage'
})
@Component({
  selector: 'page-rules',
  templateUrl: 'rules.html',
})
export class RulesPage {
  constructor(public navCtrl: NavController, public navParams: NavParams) { }
  ionViewDidLoad() { }
}
