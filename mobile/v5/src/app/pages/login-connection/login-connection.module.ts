import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginConnectionPageRoutingModule } from './login-connection-routing.module';

import { LoginConnectionPage } from './login-connection.page';

import { UserBRL } from '../../framework/brl/implementation/user';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

import { Message } from '../../framework/_common/base/message';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginConnectionPageRoutingModule
  ],
  declarations: [LoginConnectionPage],
  providers: [
    Message,
    FormBuilder,
    UserBRL,
    CommonSQL,
    GlobalInfoBRL
  ]
})
export class LoginConnectionPageModule {}
