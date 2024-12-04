import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderDetailPageRoutingModule } from './order-detail-routing.module';

import { OrderDetailPage } from './order-detail.page';

import { OrderBRL } from '../../framework/brl/implementation/order';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderDetailPageRoutingModule
  ],
  declarations: [OrderDetailPage],
  providers: [
    OrderBRL,
    GlobalInfoBRL,
    GlobalInfo,
    CommonSQL
  ]
})
export class OrderDetailPageModule {}
