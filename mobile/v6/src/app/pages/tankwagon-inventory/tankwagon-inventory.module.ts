import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankwagonInventoryPageRoutingModule } from './tankwagon-inventory-routing.module';

import { TankwagonInventoryPage } from './tankwagon-inventory.page';

import { Message } from '../../framework/_common/base/message';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankwagonInventoryPageRoutingModule
  ],
  declarations: [TankwagonInventoryPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL
  ]
})
export class TankwagonInventoryPageModule {}
