import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { ReportService } from '../../providers/report.service';

import { GlobalEventsService } from '../../providers/global-events.service';

@Component({
  selector: 'app-tankwagon-inventory-details',
  templateUrl: './tankwagon-inventory-details.page.html',
  styleUrls: ['./tankwagon-inventory-details.page.scss'],
})
export class TankwagonInventoryDetailsPage implements OnInit {

  data = [];
  grandTotal = 0;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private router: Router,
              private globalEventsService: GlobalEventsService,
              public commonSQL: CommonSQL,
              private reportService: ReportService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ShiftLoadinventoryPage');
    
    this.getTankWagon();
  }

  async getTankWagon() {
    var me = this;

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    me.commonSQL.getDataQuery('SELECT * FROM tankwagon order by intItemId').then(res => {
      me.data = JSON.parse(JSON.stringify(res));      
      console.log(me.data);

      // me.data.forEach(element => {
      //   if(element.strTransactionType == 'Line Flush') {
      //     // do nothing
      //   }
      //   else {
      //     me.grandTotal = me.grandTotal + element.dblQuantity;
      //   }
        
      //   console.log(me.grandTotal);
      // });

      loader.dismiss();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

}
