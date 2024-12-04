import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuMainPage } from './menu-main';

import { MessageUtil } from '../../core/framework/message/message-util';

@NgModule({
  declarations: [
    MenuMainPage,
  ],
  imports: [
    IonicPageModule.forChild(MenuMainPage),
  ],
  entryComponents: [
    MenuMainPage
  ],
  providers: [
    MessageUtil
  ]
})
export class MenuMainPageModule {}
