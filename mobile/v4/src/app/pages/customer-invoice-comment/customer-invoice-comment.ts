import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-customer-invoice-comment',
  templateUrl: 'customer-invoice-comment.html',
})
export class CustomerInvoiceCommentPage {
  comment: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidLoad() {
    var me = this;
    console.log('ionViewDidLoad CustomerInvoiceCommentPage');

    me.comment = me.navParams.get('strComment');        
    console.log(me.comment);
  }

  Okay(){
    var me = this;
    console.log(me.comment);

    this.navCtrl.pop().then(() => {
        this.events.publish('addComment', me.comment);
    });
  }

}
