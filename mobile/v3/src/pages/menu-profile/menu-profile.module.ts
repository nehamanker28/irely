import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuProfilePage } from './menu-profile';

@NgModule({
  declarations: [
    MenuProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(MenuProfilePage),
  ],
})
export class MenuProfilePageModule {}
