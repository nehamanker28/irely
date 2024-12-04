import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceAddSignaturePage } from './invoice-add-signature.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceAddSignaturePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceAddSignaturePageRoutingModule {}
