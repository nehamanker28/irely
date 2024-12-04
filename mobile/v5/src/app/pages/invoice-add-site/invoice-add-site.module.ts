import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceAddSitePageRoutingModule } from './invoice-add-site-routing.module';

import { InvoiceAddSitePage } from './invoice-add-site.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceAddSitePageRoutingModule
  ],
  declarations: [InvoiceAddSitePage],
  providers: [
  ]
})
export class InvoiceAddSitePageModule {}
