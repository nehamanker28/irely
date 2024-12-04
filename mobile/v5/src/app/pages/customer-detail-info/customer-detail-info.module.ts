import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerDetailInfoPageRoutingModule } from './customer-detail-info-routing.module';

import { CustomerDetailInfoPage } from './customer-detail-info.page';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { Message } from '../../framework/_common/base/message';
import { OrderBRL } from '../../framework/brl/implementation/order';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerDetailInfoPageRoutingModule
  ],
  declarations: [CustomerDetailInfoPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
    OrderBRL,
  ]
})
export class CustomerDetailInfoPageModule {}
