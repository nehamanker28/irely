import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerInvoiceOrderInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer-invoice-order-info',
  templateUrl: 'customer-invoice-order-info.html',
})
export class CustomerInvoiceOrderInfoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerInvoiceOrderInfoPage');
  }

}
