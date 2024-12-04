import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceAddSitePage } from './invoice-add-site.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceAddSitePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceAddSitePageRoutingModule {}
