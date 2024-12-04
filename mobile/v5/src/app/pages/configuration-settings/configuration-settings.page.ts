import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { Message } from '../../framework/_common/base/message';

@Component({
  selector: 'app-configuration-settings',
  templateUrl: './configuration-settings.page.html',
  styleUrls: ['./configuration-settings.page.scss'],
})
export class ConfigurationSettingsPage implements OnInit {
  data: object = [];
  counter: number = 0;
  startDateInterval: any;
  LocationStatus: boolean = false;
  location: object = [];
  currentLocation: any = '';
  currentConnection: any = '';

  constructor(public navCtrl: NavController,
    public commonSQL: CommonSQL,
    private menu: MenuController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private modalCtrl: ModalController,
    private messageUtil: Message,
    public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('configuration here');
    
    this.locationSetup();
    this.loadConfig();
    this.globalInfo();

    this.currentConnection = localStorage.getItem('connection');
  }

  globalInfo() {
    var me = this;
    ;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {      
      console.log(res);
      if(res[0]) {
        me.data = res[0];
        me.currentLocation = (me.data['intLocation'] || '').toString();
      }
    });
  }

  loadConfig() {
    var me = this;
    me.commonSQL.getDataQuery("select * from tblMBILCompanyPreference").then(res => {
      if(res.length > 0) {
        me.data = JSON.parse(JSON.stringify(res[0]));
      }
    });
  }

  locationSetup() {
    var me = this;    
    me.commonSQL.getDataQuery('select * from tblSMLocation order by strLocationName').then(res => {
      console.log(res);
      this.location = res;
    });
  }

  save(record) {
    var me = this;
    var _hasChanges = false;

    var location = JSON.stringify(me.location);
    var strLocationName = JSON.parse(location).filter(function (item) {
      if(item.intCompanyLocationId == me.currentLocation){
        return item.strLocationName;
      }
    });

    console.log(strLocationName);

    if(strLocationName.length > 0) {
      me.data['strLocation'] = strLocationName[0].strLocationName;
      me.data['strLocationNumber'] = strLocationName[0].strLocationNumber;
      me.data['intLocation'] = strLocationName[0].intCompanyLocationId;
      _hasChanges = true;
    }

    console.log(me.data);

    if(_hasChanges == true) {
      var updateRecord = new GlobalInfo();
      updateRecord.intLocation = record.intLocation;
      updateRecord.strLocation = me.data['strLocation'];
      updateRecord.strLocationNumber = me.data['strLocationNumber'];
      me.commonSQL.updateData(updateRecord['tablename'], updateRecord);
    }

    me.messageUtil.showToastMessage("Settings successfully saved.", function() {
      me.modalCtrl.dismiss({
        'dismissed': true
      });
    }, 1000);
  }

}
