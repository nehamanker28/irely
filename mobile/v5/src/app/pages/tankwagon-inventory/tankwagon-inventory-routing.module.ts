import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankwagonInventoryPage } from './tankwagon-inventory.page';

const routes: Routes = [
  {
    path: '',
    component: TankwagonInventoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankwagonInventoryPageRoutingModule {}
