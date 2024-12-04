import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-customer-invoice-popover-menu',
  template: `
    <ion-list>      
      <ion-item (click)="openComment()">
        <ion-label>Contract</ion-label>
      </ion-item>
      <ion-item>
        <ion-label>Comment</ion-label>
      </ion-item>
    </ion-list>
  `
 //templateUrl: 'customer-invoice-popover-menu.html',
})
export class CustomerInvoicePopoverMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerInvoicePopoverMenuPage');
  }

}
