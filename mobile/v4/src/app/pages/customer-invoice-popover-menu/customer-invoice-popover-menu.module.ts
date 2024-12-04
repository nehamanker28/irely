import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerInvoicePopoverMenuPage } from './customer-invoice-popover-menu';

@NgModule({
  declarations: [
    CustomerInvoicePopoverMenuPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerInvoicePopoverMenuPage),
  ],
})
export class CustomerInvoicePopoverMenuPageModule {}
