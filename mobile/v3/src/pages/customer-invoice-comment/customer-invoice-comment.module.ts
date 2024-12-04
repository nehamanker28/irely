import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInvoiceCommentPage } from './customer-invoice-comment';

@NgModule({
  declarations: [
    CustomerInvoiceCommentPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInvoiceCommentPage),
  ],
})
export class CustomerInvoiceCommentPageModule {}
