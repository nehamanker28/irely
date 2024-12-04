import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, LoadingController } from '@ionic/angular';

import { User } from '../../framework/models/user';
import { UserBRL } from '../../framework/brl/implementation/user';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  locationCoords: any;
  timetest: any;

  constructor(private menu: MenuController,
              public userBRL: UserBRL,
              private commonSQL: CommonSQL,
              public locationAccuracy: LocationAccuracy,
              public androidPermissions:AndroidPermissions,
              private geolocation: Geolocation,
              public sqlite: SQLite,) { }

  ngOnInit() {
    console.log('dashboard');

    this.menu.enable(true);    

    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
    this.timetest = Date.now();
    this.checkGPSPermission();
  }

  ionViewDidEnter() {
    this.menu.enable(true);
    // this.sample();
  }

  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

  sample() {
    var me = this;
    
    console.log('TESTING HERE!!');

    var _record = new User();
    _record.intUserId = 1;
    _record.strFullName = 'sample';
    _record.strUserName = 'sample';
    _record.strPassword = 'sample';
    _record.intDriverNumber = 1;
    _record.ContactParentId = 1;
    _record.CompanyName = '01';
    _record.Sample = 'sample';

    console.log(_record);

    me.userBRL.add(_record).then(result => {
      console.log('ADD SUCESS');
      console.log(result);                 
    },
    (error) => {
      console.log('ADD FAILED');
      console.log(error);
    });

  }

  // updateDatabase(): Promise<any> {
  //   var me = this;
  //   return new Promise ((resolve, reject) => {  
  //     console.log('++++++++++++++++ EXEC UPDATE SCRIPT - START ++++++++++++++++');
  //     me.commonSQL.executeQuery('ALTER TABLE user ADD COLUMN Sample string').then(result=>{
  //       console.log(result);
  //       console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
  //       resolve(result);
  //     })
  //   }); 
  // }

}
