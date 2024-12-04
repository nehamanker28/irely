import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpdateTablePage } from './update-table';

import { MessageUtil } from '../../core/framework/message/message-util';

@NgModule({
  declarations: [
    UpdateTablePage,
  ],
  imports: [
    IonicPageModule.forChild(UpdateTablePage),
  ],
  providers: [
    MessageUtil
  ]
})
export class UpdateTablePageModule {}
