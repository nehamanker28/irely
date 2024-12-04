import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleDashboardPage } from './single-dashboard';
import { SharedModule } from '../../core/framework/ngmodules/shared/shared.module';

@NgModule({
  declarations: [
    SingleDashboardPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(SingleDashboardPage),
  ],
})
export class SingleDashboardPageModule {}