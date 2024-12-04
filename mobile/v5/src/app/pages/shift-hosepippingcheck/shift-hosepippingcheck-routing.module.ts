import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftHosepippingcheckPage } from './shift-hosepippingcheck.page';

const routes: Routes = [
  {
    path: '',
    component: ShiftHosepippingcheckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftHosepippingcheckPageRoutingModule {}
