import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PdfListPageRoutingModule } from './pdf-list-routing.module';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { PdfListPage } from './pdf-list.page';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PdfListPageRoutingModule,
  ],
  declarations: [PdfListPage],
  providers: [
    File,
    FileOpener,
    CommonSQL,
    GlobalInfoBRL,
  ]
})
export class PdfListPageModule {}
