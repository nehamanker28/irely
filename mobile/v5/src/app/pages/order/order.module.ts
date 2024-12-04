import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderPageRoutingModule } from './order-routing.module';

import { OrderPage } from './order.page';

import { OrderBRL } from '../../framework/brl/implementation/order';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderPageRoutingModule
  ],
  declarations: [OrderPage],
  providers: [
    OrderBRL,
    GlobalInfoBRL,
    GlobalInfo,
    CommonSQL
  ]
})
export class OrderPageModule {}
