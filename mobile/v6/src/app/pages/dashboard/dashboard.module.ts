import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { UserBRL } from '../../framework/brl/implementation/user';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage],
  providers: [
    UserBRL,
    CommonSQL
  ],
})
export class DashboardPageModule {}
