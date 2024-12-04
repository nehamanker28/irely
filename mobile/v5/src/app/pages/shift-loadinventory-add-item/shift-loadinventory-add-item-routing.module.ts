import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftLoadinventoryAddItemPage } from './shift-loadinventory-add-item.page';

const routes: Routes = [
  {
    path: '',
    component: ShiftLoadinventoryAddItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftLoadinventoryAddItemPageRoutingModule {}
