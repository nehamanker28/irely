import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';

import { UserBRL } from '../../framework/brl/implementation/user';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

import { Message } from '../../framework/_common/base/message';
// import { LoginConnectionPageModule } from '../login-connection/login-connection.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    // LoginConnectionPageModule
  ],
  declarations: [LoginPage],
  providers: [
    Message,
    FormBuilder,
    UserBRL,
    CommonSQL,
    GlobalInfoBRL
  ],
  exports: [
    LoginPage
  ]
})
export class LoginPageModule {}
