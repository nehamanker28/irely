import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentReceivePage } from './payment-receive.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentReceivePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentReceivePageRoutingModule {}
