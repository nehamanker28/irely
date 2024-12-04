import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShiftReportPage } from './shift-report';

@NgModule({
  declarations: [
    ShiftReportPage,
  ],
  imports: [
    IonicPageModule.forChild(ShiftReportPage),
  ],
})
export class ShiftReportPageModule {}
