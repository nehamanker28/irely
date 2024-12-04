import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LineFlushTransferPage } from './line-flush-transfer.page';

const routes: Routes = [
  {
    path: '',
    component: LineFlushTransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LineFlushTransferPageRoutingModule {}
