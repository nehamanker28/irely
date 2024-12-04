import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginMainPage } from './login-main';

import { MessageUtil } from '../../core/framework/message/message-util';

@NgModule({
  declarations: [
    LoginMainPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginMainPage),
  ],
  providers: [
    MessageUtil
  ]
})
export class LoginMainPageModule {}
