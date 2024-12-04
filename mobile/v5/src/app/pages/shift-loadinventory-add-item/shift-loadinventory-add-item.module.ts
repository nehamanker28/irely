import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftLoadinventoryAddItemPageRoutingModule } from './shift-loadinventory-add-item-routing.module';

import { ShiftLoadinventoryAddItemPage } from './shift-loadinventory-add-item.page';

import { Message } from '../../framework/_common/base/message';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftLoadinventoryAddItemPageRoutingModule
  ],
  declarations: [ShiftLoadinventoryAddItemPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
  ]
})
export class ShiftLoadinventoryAddItemPageModule {}
