import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InvoiceAddCommentPage } from './invoice-add-comment.page';

const routes: Routes = [
  {
    path: '',
    component: InvoiceAddCommentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceAddCommentPageRoutingModule {}
