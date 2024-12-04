import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationTableViewPage } from './configuration-table-view.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationTableViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationTableViewPageRoutingModule {}
