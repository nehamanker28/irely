import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CustomerListPageRoutingModule } from './customer-list-routing.module';

import { CustomerListPage } from './customer-list.page';

import { Configuration } from '../../framework/_common/configuration/configuration';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomerListPageRoutingModule
  ],
  declarations: [CustomerListPage],
  providers: [
    Configuration,
  ]
})
export class CustomerListPageModule {}
