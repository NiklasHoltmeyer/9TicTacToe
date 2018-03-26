import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the PlayerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class PlayerProvider {
  public name: string = null;
  public uid: any = null;
  public bot: boolean = false;
  public localSecondPlayer: boolean = false;
  constructor() { }
  reset(){
    this.bot = false;
    this.localSecondPlayer = false;
  }
  getUid():any{
    if(this.bot || this.localSecondPlayer) return null;
    return this.uid;
  }
  getCurrentUID():any{
    return null;
  }
}
