import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginConnectionPage } from './login-connection.page';

const routes: Routes = [
  {
    path: '',
    component: LoginConnectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginConnectionPageRoutingModule {}
