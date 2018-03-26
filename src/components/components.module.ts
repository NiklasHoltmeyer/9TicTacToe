import { NgModule } from '@angular/core';
import { TictactoeComponent } from '../components/tictactoe/tictactoe' ;
import { TimeLeftBarComponent } from  '../components/time-left-bar/time-left-bar' ;
import { IonicModule } from 'ionic-angular';
@NgModule({
  imports: [IonicModule],
  exports: [TictactoeComponent,TimeLeftBarComponent],
  declarations:[TictactoeComponent,TimeLeftBarComponent],
  providers:[]  
})
export class ComponentsModule { }
