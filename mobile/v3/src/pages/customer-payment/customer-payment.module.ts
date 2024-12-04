import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerPaymentPage } from './customer-payment';

@NgModule({
  declarations: [
    CustomerPaymentPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerPaymentPage),
  ],
})
export class CustomerPaymentPageModule {}
