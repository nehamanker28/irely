import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, ModalController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { Message } from '../../framework/_common/base/message';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-configuration-settings',
  templateUrl: './configuration-settings.page.html',
  styleUrls: ['./configuration-settings.page.scss'],
})
export class ConfigurationSettingsPage implements OnInit {
  data: any[] = [];
  companyPref: any[] = [];
  counter: number = 0;
  startDateInterval: any;
  LocationStatus: boolean = false;
  location: any[];
  currentLocation: any = '';
  currentConnection: any = '';
  currentVersion: any = '';

  constructor(public navCtrl: NavController,
    public commonSQL: CommonSQL,
    private menu: MenuController,
    public loadingCtrl: LoadingController,
    public router: Router,
    private modalCtrl: ModalController,
    private messageUtil: Message,
    private appVersion: AppVersion,
    public alertCtrl: AlertController) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('configuration here');
    
    this.locationSetup();
    this.loadConfig();
    this.globalInfo();

    this.currentConnection = localStorage.getItem('connection');
    this.appVersion.getVersionNumber().then(result=>{
      this.currentVersion = result;
    });
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
        me.companyPref = JSON.parse(JSON.stringify(res[0]));
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
      if(strLocationName[0].strUseLocationAddress == "Yes") {
        localStorage.setItem('company_uselocationaddress',strLocationName[0].strUseLocationAddress || '');
        localStorage.setItem('company_address',strLocationName[0].strAddress || '');
        localStorage.setItem('company_city',strLocationName[0].strCity || '');
        localStorage.setItem('company_state',strLocationName[0].strStateProvince || '');
        localStorage.setItem('company_zip',strLocationName[0].strZipPostalCode || '');
        localStorage.setItem('company_country',strLocationName[0].strCountry || '');
        localStorage.setItem('company_county', '');
      }
      else {
        localStorage.setItem('company_uselocationaddress','No');
        
        me.commonSQL.getDataQuery('SELECT * FROM tblSMCompanySetup').then(data => {
          console.log('SM COMPANY SETUP');
          localStorage.setItem('company_logo',atob(data[0].imgCompanyLogo) || '');
          localStorage.setItem('company_name',data[0].strCompanyName || '');

          if(localStorage.getItem('company_uselocationaddress') != "Yes") {
            console.log('SM LOCATION');
            localStorage.setItem('company_address',data[0].strAddress || '');
            localStorage.setItem('company_county',data[0].strCounty || '');
            localStorage.setItem('company_city',data[0].strCity || '');
            localStorage.setItem('company_state',data[0].strState || '');
            localStorage.setItem('company_zip',data[0].strZip || '');
            localStorage.setItem('company_country',data[0].strCountry || '');
          }
        },err=>{
          console.log(err);
        });
      }

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
