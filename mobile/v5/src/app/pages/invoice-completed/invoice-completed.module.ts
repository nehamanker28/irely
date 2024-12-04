import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceCompletedPageRoutingModule } from './invoice-completed-routing.module';

import { InvoiceCompletedPage } from './invoice-completed.page';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceCompletedPageRoutingModule
  ],
  declarations: [InvoiceCompletedPage],
  providers: [
    CommonSQL
  ]

})
export class InvoiceCompletedPageModule {}
