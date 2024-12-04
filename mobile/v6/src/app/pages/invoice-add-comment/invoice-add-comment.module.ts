import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InvoiceAddCommentPageRoutingModule } from './invoice-add-comment-routing.module';

import { InvoiceAddCommentPage } from './invoice-add-comment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InvoiceAddCommentPageRoutingModule
  ],
  declarations: [InvoiceAddCommentPage]
})
export class InvoiceAddCommentPageModule {}
