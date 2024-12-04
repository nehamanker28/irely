import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

@IonicPage()
@Component({
  selector: 'page-transactions-inspection',
  templateUrl: 'transactions-inspection.html',
})
export class TransactionsInspectionPage {
  data: object = [];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private plt: Platform, 
              private file: File, 
              private fileOpener: FileOpener) {
  }

  ionViewDidLoad() {
    var me = this,        
        _objs = [];
    if (this.plt.is('cordova')) {
      this.file.checkDir(this.file.externalApplicationStorageDirectory, 'vehicle.inspection').then(res => {
          console.log(this.file.externalApplicationStorageDirectory);

          me.file.listDir(this.file.externalApplicationStorageDirectory,'vehicle.inspection').then(res => {
            console.log(res);
            res.forEach(element => {
              var date = element.name.replace('VehicleInspection_', '')
              date = date.substring(0,8);
              var _new_date = date.substr(4,2) + '/' + date.substr(6,2) + '/' + date.substr(0,4);

              var _obj = [];
              _obj['name'] = element.name;
              _obj['path'] = element.fullPath;
              _obj['url'] = element.nativeURL;              
              _obj['date'] = _new_date;
              _objs.push(_obj);              
            });
          });
          me.data = _objs.reverse();
          console.log(me.data);
        }
      ).catch(err => console.log('Directory doesnt exist'));
    }
  }

  openFile(item) {
    if (this.plt.is('cordova')) {
      console.log(this.file.externalApplicationStorageDirectory);
      console.log(item);
      // this.fileOpener.open(item.url, 'application/pdf'); //this.file.externalApplicationStorageDirectory + 'vehicle.inspection/' + 'Vehicle_Inspection.pdf'
    }
  }

}
