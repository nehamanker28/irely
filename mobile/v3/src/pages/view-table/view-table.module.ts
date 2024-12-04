import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewTablePage } from './view-table';

@NgModule({
  declarations: [
    ViewTablePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewTablePage),
  ],
})
export class ViewTablePageModule {}
