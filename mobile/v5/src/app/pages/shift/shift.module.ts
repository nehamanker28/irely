import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftPageRoutingModule } from './shift-routing.module';

import { ShiftPage } from './shift.page';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { Message } from '../../framework/_common/base/message';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftPageRoutingModule
  ],
  declarations: [ShiftPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
    File,
    FileOpener
  ]
})
export class ShiftPageModule {}
