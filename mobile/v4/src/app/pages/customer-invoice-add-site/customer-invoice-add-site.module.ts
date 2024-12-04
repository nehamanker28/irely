import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInvoiceAddSitePage } from './customer-invoice-add-site';

@NgModule({
  declarations: [
    CustomerInvoiceAddSitePage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInvoiceAddSitePage),
  ],
})
export class CustomerInvoiceAddSitePageModule {}
