import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceAddTaxPage } from './invoice-add-tax.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceAddTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceAddTaxPageRoutingModule {}
