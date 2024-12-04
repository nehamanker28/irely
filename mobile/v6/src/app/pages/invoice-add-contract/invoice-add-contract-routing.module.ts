import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceAddContractPage } from './invoice-add-contract.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceAddContractPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceAddContractPageRoutingModule {}
