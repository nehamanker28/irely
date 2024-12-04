import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceAddSignaturePageRoutingModule } from './invoice-add-signature-routing.module';

import { InvoiceAddSignaturePage } from './invoice-add-signature.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceAddSignaturePageRoutingModule
  ],
  declarations: [InvoiceAddSignaturePage]
})
export class InvoiceAddSignaturePageModule {}
