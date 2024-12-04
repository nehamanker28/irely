import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderMainPage } from './order-main';

@NgModule({
  declarations: [
    OrderMainPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderMainPage),
  ],
})
export class OrderMainPageModule {}
