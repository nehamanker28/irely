import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentReceivePageRoutingModule } from './payment-receive-routing.module';

import { PaymentReceivePage } from './payment-receive.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentReceivePageRoutingModule
  ],
  declarations: [PaymentReceivePage]
})
export class PaymentReceivePageModule {}
