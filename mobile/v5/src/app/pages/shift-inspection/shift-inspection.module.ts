import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftInspectionPageRoutingModule } from './shift-inspection-routing.module';

import { ShiftInspectionPage } from './shift-inspection.page';

import { Message } from '../../framework/_common/base/message';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftInspectionPageRoutingModule
  ],
  declarations: [ShiftInspectionPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
  ]
})
export class ShiftInspectionPageModule {}
