import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { LoginXPage } from './loginX';
import { LoginXPageRoutingModule } from './loginX-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginXPageRoutingModule
  ],
  declarations: [
    LoginXPage,
  ]
})
export class LoginModule { }
