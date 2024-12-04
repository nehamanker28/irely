import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationTableUpdatePage } from './configuration-table-update.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationTableUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationTableUpdatePageRoutingModule {}
