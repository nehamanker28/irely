import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransactionsInspectionPage } from './transactions-inspection';

@NgModule({
  declarations: [
    TransactionsInspectionPage,
  ],
  imports: [
    IonicPageModule.forChild(TransactionsInspectionPage),
  ],
})
export class TransactionsInspectionPageModule {}
