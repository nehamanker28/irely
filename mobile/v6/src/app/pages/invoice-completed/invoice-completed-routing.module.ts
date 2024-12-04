import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceCompletedPage } from './invoice-completed.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceCompletedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceCompletedPageRoutingModule {}
