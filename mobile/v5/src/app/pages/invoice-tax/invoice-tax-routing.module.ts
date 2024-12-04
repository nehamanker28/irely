import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceTaxPage } from './invoice-tax.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceTaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceTaxPageRoutingModule {}
