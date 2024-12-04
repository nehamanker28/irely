import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInvoiceOrderInfoPage } from './customer-invoice-order-info';

@NgModule({
  declarations: [
    CustomerInvoiceOrderInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInvoiceOrderInfoPage),
  ],
})
export class CustomerInvoiceOrderInfoPageModule {}
