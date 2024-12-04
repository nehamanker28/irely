import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceAddContractPageRoutingModule } from './invoice-add-contract-routing.module';

import { InvoiceAddContractPage } from './invoice-add-contract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceAddContractPageRoutingModule
  ],
  // declarations: [InvoiceAddContractPage],
  providers: [
  ]
})
export class InvoiceAddContractPageModule {}
