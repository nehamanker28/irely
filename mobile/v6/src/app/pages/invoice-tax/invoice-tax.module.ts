import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceTaxPageRoutingModule } from './invoice-tax-routing.module';

import { InvoiceTaxPage } from './invoice-tax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceTaxPageRoutingModule
  ],
  // declarations: [InvoiceTaxPage]
})
export class InvoiceTaxPageModule {}
