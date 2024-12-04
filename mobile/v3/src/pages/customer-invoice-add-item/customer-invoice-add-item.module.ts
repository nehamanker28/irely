import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInvoiceAddItemPage } from './customer-invoice-add-item';

@NgModule({
  declarations: [
    CustomerInvoiceAddItemPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInvoiceAddItemPage),
  ],
})
export class CustomerInvoiceAddItemPageModule {}
