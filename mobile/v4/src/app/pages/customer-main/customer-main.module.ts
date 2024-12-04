import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerMainPage } from './customer-main';

@NgModule({
  declarations: [
    CustomerMainPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerMainPage),
  ],
})
export class CustomerMainPageModule {}
