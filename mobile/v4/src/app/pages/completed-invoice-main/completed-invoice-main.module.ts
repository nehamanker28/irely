import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletedInvoiceMainPage } from './completed-invoice-main';

@NgModule({
  declarations: [
    CompletedInvoiceMainPage,
  ],
  imports: [
    IonicPageModule.forChild(CompletedInvoiceMainPage),
  ],
})
export class CompletedInvoiceMainPageModule {}
