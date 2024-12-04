import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceAddItemPage } from './invoice-add-item.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceAddItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceAddItemPageRoutingModule {}
