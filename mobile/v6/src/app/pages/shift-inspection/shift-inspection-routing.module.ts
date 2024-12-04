import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftInspectionPage } from './shift-inspection.page';

const routes: Routes = [
  {
    path: '',
    component: ShiftInspectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftInspectionPageRoutingModule {}
