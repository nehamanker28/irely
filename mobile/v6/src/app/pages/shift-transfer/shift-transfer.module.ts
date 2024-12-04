import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftTransferPageRoutingModule } from './shift-transfer-routing.module';

import { ShiftTransferPage } from './shift-transfer.page';

import { Message } from '../../framework/_common/base/message';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftTransferPageRoutingModule
  ],
  declarations: [ShiftTransferPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
  ]
})
export class ShiftTransferPageModule {}
