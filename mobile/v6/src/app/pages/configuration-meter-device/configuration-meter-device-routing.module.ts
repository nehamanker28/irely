import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigurationMeterDevicePage } from './configuration-meter-device.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationMeterDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigurationMeterDevicePageRoutingModule {}
