import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceAddTaxPageRoutingModule } from './invoice-add-tax-routing.module';

import { InvoiceAddTaxPage } from './invoice-add-tax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceAddTaxPageRoutingModule
  ],
  declarations: [InvoiceAddTaxPage],
  providers: [
  ]
})
export class InvoiceAddTaxPageModule {}
