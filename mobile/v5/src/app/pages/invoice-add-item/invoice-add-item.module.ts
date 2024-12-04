import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceAddItemPageRoutingModule } from './invoice-add-item-routing.module';

import { InvoiceAddItemPage } from './invoice-add-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceAddItemPageRoutingModule
  ],
  declarations: [InvoiceAddItemPage],
  providers: [
  ]
})
export class InvoiceAddItemPageModule {}
