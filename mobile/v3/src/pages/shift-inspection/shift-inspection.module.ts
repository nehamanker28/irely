import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShiftInspectionPage } from './shift-inspection';

@NgModule({
  declarations: [
    ShiftInspectionPage,
  ],
  imports: [
    IonicPageModule.forChild(ShiftInspectionPage),
  ],
})
export class ShiftInspectionPageModule {}
