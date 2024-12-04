import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationTableUpdatePageRoutingModule } from './configuration-table-update-routing.module';

import { ConfigurationTableUpdatePage } from './configuration-table-update.page';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Message } from '../../framework/_common/base/message';
import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationTableUpdatePageRoutingModule
  ],
  declarations: [ConfigurationTableUpdatePage],
  providers: [
    Message,
    CommonSQL,
    i21SyncDeviceService
  ]
})
export class ConfigurationTableUpdatePageModule {}
