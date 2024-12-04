import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginForgotpasswordPage } from './login-forgotpassword.page';

const routes: Routes = [
  {
    path: '',
    component: LoginForgotpasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginForgotpasswordPageRoutingModule {}
