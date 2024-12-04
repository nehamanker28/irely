import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentListPageRoutingModule } from './payment-list-routing.module';

import { PaymentListPage } from './payment-list.page';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { Message } from '../../framework/_common/base/message';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentListPageRoutingModule
  ],
  declarations: [PaymentListPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
  ]
})
export class PaymentListPageModule {}
