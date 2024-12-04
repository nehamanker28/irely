import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { DashboardPageModule } from '../dashboard/dashboard.module';
import { ShiftPageModule } from '../shift/shift.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    TabsPageRoutingModule,
    DashboardPageModule,
    ShiftPageModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
