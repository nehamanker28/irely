import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenuitemComponent } from './menuitem';

@NgModule({
  declarations: [
    MenuitemComponent,
  ],
  imports: [
    IonicPageModule.forChild(MenuitemComponent)
  ],
  exports: [
    MenuitemComponent
  ]
})
export class MenuitemComponentModule {}
