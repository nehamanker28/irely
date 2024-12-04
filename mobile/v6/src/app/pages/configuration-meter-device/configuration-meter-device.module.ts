import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationMeterDevicePageRoutingModule } from './configuration-meter-device-routing.module';

import { ConfigurationMeterDevicePage } from './configuration-meter-device.page';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationMeterDevicePageRoutingModule
  ],
  declarations: [ConfigurationMeterDevicePage],
  providers: [
    BluetoothSerial
  ]
})
export class ConfigurationMeterDevicePageModule {}
