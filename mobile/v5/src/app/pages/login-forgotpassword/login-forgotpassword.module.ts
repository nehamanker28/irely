import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginForgotpasswordPageRoutingModule } from './login-forgotpassword-routing.module';

import { LoginForgotpasswordPage } from './login-forgotpassword.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginForgotpasswordPageRoutingModule
  ],
  declarations: [LoginForgotpasswordPage]
})
export class LoginForgotpasswordPageModule {}
