import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShiftDownloadExportDataPage } from './shift-download-export-data.page';

const routes: Routes = [
  {
    path: '',
    component: ShiftDownloadExportDataPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShiftDownloadExportDataPageRoutingModule {}
