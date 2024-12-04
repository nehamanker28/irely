import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TankwagonInventoryDetailsPage } from './tankwagon-inventory-details.page';

const routes: Routes = [
  {
    path: '',
    component: TankwagonInventoryDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TankwagonInventoryDetailsPageRoutingModule {}
