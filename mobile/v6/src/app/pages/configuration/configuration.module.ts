import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigurationPageRoutingModule } from './configuration-routing.module';

import { ConfigurationPage } from './configuration.page';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Message } from '../../framework/_common/base/message';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigurationPageRoutingModule
  ],
  declarations: [ConfigurationPage],
  providers: [
    Message,
    CommonSQL,
  ]
})
export class ConfigurationPageModule {}
