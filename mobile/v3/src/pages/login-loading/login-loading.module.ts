import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginLoadingPage } from './login-loading';

@NgModule({
  declarations: [
    LoginLoadingPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginLoadingPage),
  ]
})
export class LoginLoadingPageModule {}
