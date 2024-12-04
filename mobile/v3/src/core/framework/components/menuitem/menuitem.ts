import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CommonMethod } from '../../common/common-method';

@Component({
  selector: 'menuitem',
  templateUrl: 'menuitem.html'
})
export class MenuitemComponent {
  // @ViewChild(Nav) nav: Nav;

  // @Output() itemClick = new EventEmitter();

  @Input('active') active: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello MenuitemComponent Component');
  }

  openPage(menu) {
    this.navCtrl.setRoot(menu);
    setTimeout(function(){ CommonMethod.highlightButton(menu); }, 300); 
  }

}
