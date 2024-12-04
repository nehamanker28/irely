import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceOutofgasPage } from './invoice-outofgas.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceOutofgasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceOutofgasPageRoutingModule {}
