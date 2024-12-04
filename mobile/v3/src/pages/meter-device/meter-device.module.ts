import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MeterDevicePage } from './meter-device';

@NgModule({
  declarations: [
    MeterDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(MeterDevicePage),
  ],
})
export class MeterDevicePageModule {}
