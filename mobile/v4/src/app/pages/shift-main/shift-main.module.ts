import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShiftMainPage } from './shift-main';

import { SharedModule } from '../../core/framework/ngmodules/shared/shared.module';
import { MessageUtil } from '../../core/framework/message/message-util';

@NgModule({
  declarations: [
    ShiftMainPage,
  ],
  imports: [
    SharedModule,
    IonicPageModule.forChild(ShiftMainPage),
  ],
  providers: [
    MessageUtil
  ]
})
export class ShiftMainPageModule {}