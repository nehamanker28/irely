import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInvoiceAddTaxPage } from './customer-invoice-add-tax';

@NgModule({
  declarations: [
    CustomerInvoiceAddTaxPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInvoiceAddTaxPage),
  ],
})
export class CustomerInvoiceAddTaxPageModule {}
