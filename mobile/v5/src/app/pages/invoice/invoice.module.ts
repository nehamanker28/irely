import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoicePageRoutingModule } from './invoice-routing.module';

import { InvoicePage } from './invoice.page';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { Message } from '../../framework/_common/base/message';

import { OrderBRL } from '../../framework/brl/implementation/order';
// import { InvoiceTaxPage } from '../invoice-tax/invoice-tax.page';
// import { InvoiceAddContractPage } from '../invoice-add-contract/invoice-add-contract.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoicePageRoutingModule
  ],
  declarations: [InvoicePage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
    OrderBRL,
  ],
  // entryComponents: [InvoiceTaxPage, InvoiceAddContractPage]
})
export class InvoicePageModule {}
