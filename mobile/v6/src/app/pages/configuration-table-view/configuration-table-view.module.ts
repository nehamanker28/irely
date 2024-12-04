import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationTableViewPageRoutingModule } from './configuration-table-view-routing.module';

import { ConfigurationTableViewPage } from './configuration-table-view.page';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Message } from '../../framework/_common/base/message';
import { SyncDeviceDataBRL } from '../../framework/brl/implementation/syncdevicedata';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationTableViewPageRoutingModule
  ],
  declarations: [ConfigurationTableViewPage],
  providers: [
    Message,
    CommonSQL,
    SyncDeviceDataBRL
  ]
})
export class ConfigurationTableViewPageModule {}
