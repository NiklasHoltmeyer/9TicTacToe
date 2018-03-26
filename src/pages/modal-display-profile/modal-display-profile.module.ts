import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalDisplayProfilePage } from './modal-display-profile';

@NgModule({
  declarations: [
    ModalDisplayProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ModalDisplayProfilePage),
  ],
  exports: [
    ModalDisplayProfilePage
  ]
})
export class ModalDisplayProfilePageModule {}
