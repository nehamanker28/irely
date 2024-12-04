import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerDetailInfoPage } from './customer-detail-info.page';

const routes: Routes = [
  {
    path: '',
    component: CustomerDetailInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerDetailInfoPageRoutingModule {}
