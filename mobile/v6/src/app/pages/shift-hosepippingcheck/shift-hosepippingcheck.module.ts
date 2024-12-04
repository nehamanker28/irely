import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftHosepippingcheckPageRoutingModule } from './shift-hosepippingcheck-routing.module';

import { ShiftHosepippingcheckPage } from './shift-hosepippingcheck.page';

import { Message } from '../../framework/_common/base/message';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftHosepippingcheckPageRoutingModule
  ],
  declarations: [ShiftHosepippingcheckPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
  ]
})
export class ShiftHosepippingcheckPageModule {}
