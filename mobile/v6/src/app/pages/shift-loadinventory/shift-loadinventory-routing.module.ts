import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftLoadinventoryPage } from './shift-loadinventory.page';

const routes: Routes = [
  {
    path: '',
    component: ShiftLoadinventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftLoadinventoryPageRoutingModule {}
