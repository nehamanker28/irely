import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationSettingsPageRoutingModule } from './configuration-settings-routing.module';

import { ConfigurationSettingsPage } from './configuration-settings.page';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Message } from '../../framework/_common/base/message';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationSettingsPageRoutingModule
  ],
  declarations: [ConfigurationSettingsPage],
  providers: [
    Message,
    CommonSQL
  ]
})
export class ConfigurationSettingsPageModule {}
