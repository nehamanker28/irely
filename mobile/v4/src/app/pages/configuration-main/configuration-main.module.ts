import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfigurationMainPage } from './configuration-main';

@NgModule({
  declarations: [
    ConfigurationMainPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfigurationMainPage),
  ],
})
export class ConfigurationMainPageModule {}
