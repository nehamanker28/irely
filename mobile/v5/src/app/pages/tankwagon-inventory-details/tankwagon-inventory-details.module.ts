import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TankwagonInventoryDetailsPageRoutingModule } from './tankwagon-inventory-details-routing.module';

import { TankwagonInventoryDetailsPage } from './tankwagon-inventory-details.page';
import { Message } from '../../framework/_common/base/message';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TankwagonInventoryDetailsPageRoutingModule
  ],
  declarations: [TankwagonInventoryDetailsPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL
  ]
})
export class TankwagonInventoryDetailsPageModule {}
