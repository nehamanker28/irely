import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInvoicePage } from './customer-invoice';

@NgModule({
  declarations: [
    CustomerInvoicePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInvoicePage),
  ],
})
export class CustomerInvoicePageModule {}
