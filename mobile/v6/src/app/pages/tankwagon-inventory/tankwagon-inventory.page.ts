import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { ReportService } from '../../providers/report.service';

import { GlobalEventsService } from '../../providers/global-events.service';

@Component({
  selector: 'app-tankwagon-inventory',
  templateUrl: './tankwagon-inventory.page.html',
  styleUrls: ['./tankwagon-inventory.page.scss'],
})
export class TankwagonInventoryPage implements OnInit {

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
    me.data = [];

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    me.commonSQL.getDataQuery('SELECT * FROM tankwagon order by intItemId').then(res => {
      var _records = JSON.parse(JSON.stringify(res));      
      console.log(_records);

      var _previous = {'intItemId': 0, 'strItemNo': '', 'strDescription': '', 'dblQuantity': 0};
      _records.forEach(element => {
        if(_previous.intItemId != element.intItemId) {
          if(_previous.intItemId != 0) {
            me.data.push(_previous);
            _previous = element;
          }
          else if(element.strTransactionType != 'Line Flush') {
            _previous = element;
          }          
        }
        else if(element.strTransactionType != 'Line Flush') {
          _previous.dblQuantity = _previous.dblQuantity + parseFloat(element.dblQuantity || 0);
        }
        
        console.log(me.data);
      });
      me.data.push(_previous);

      loader.dismiss();
    })
    .catch(e => {
      loader.dismiss();
    });
  }

  async tankDetails() {
    var me = this;
    me.router.navigateByUrl('/tankwagon-inventory-details');
  }

}
