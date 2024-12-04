import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginXPage } from './loginX';

const routes: Routes = [
  {
    path: '',
    component: LoginXPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginXPageRoutingModule { }
