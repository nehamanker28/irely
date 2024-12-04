import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginConnectionPage } from './login-connection';

@NgModule({
  declarations: [
    LoginConnectionPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginConnectionPage),
  ],
})
export class LoginConnectionPageModule {}
