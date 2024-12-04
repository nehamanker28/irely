import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShiftDownloadExportDataPageRoutingModule } from './shift-download-export-data-routing.module';

import { ShiftDownloadExportDataPage } from './shift-download-export-data.page';

import { Message } from '../../framework/_common/base/message';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShiftDownloadExportDataPageRoutingModule
  ],
  declarations: [ShiftDownloadExportDataPage],
  providers: [
    Message,
    CommonSQL,
    GlobalInfoBRL,
  ]
})
export class ShiftDownloadExportDataPageModule {}
