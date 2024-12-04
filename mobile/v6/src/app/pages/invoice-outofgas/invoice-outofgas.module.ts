import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceOutofgasPageRoutingModule } from './invoice-outofgas-routing.module';

import { InvoiceOutofgasPage } from './invoice-outofgas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceOutofgasPageRoutingModule
  ],
  declarations: [InvoiceOutofgasPage]
})
export class InvoiceOutofgasPageModule {}
