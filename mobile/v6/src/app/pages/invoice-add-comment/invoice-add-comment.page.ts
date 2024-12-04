import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Router } from '@angular/router';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-invoice-add-comment',
  templateUrl: './invoice-add-comment.page.html',
  styleUrls: ['./invoice-add-comment.page.scss'],
})
export class InvoiceAddCommentPage implements OnInit {
  comment: string;

  constructor(public navCtrl: NavController, private globalEventsService: GlobalEventsService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var me = this;
    console.log('ionViewDidLoad CustomerInvoiceCommentPage');

    me.comment = Configuration.navParams['strComment'];        
    console.log(me.comment);
  }

  Okay(){
    var me = this;
    console.log(me.comment);

    me.navCtrl.pop().then(() => {
      me.globalEventsService.publishEventsComment(me.comment);
    });
  }

}
