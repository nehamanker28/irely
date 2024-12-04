import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { async } from '@angular/core/testing';
import { UserData } from '../../providers/user-data';
import { Message } from '../../framework/_common/base/message';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';

import { ReportService } from '../../providers/report.service';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
  data: any[];
  counter: number = 0;
  startDateInterval: any;
  fileTransfer: FileTransferObject = this.transfer.create();

  constructor(public navCtrl: NavController,
    public commonSQL: CommonSQL,
    private menu: MenuController,
    public loadingCtrl: LoadingController,
    private sqlitePorter: SQLitePorter,
    public router: Router,
    public file: File,
    private transfer: FileTransfer,
    private userData: UserData,
    private message: Message,
    public http: HttpClient,
    public androidPermissions:AndroidPermissions,
    private reportService: ReportService,
    private emailComposer: EmailComposer,
    public alertCtrl: AlertController) { }

  ngOnInit() {
    this.checkFilePermission();
  }

  checkFilePermission() {
    var me = this;
    me.androidPermissions.checkPermission(me.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE).then(result => {
        if (!result.hasPermission) {
          // Asking permission to the user
          me.androidPermissions.requestPermissions([
            me.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
            me.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE]);
        }
      },
      err => {
        alert(err);
      }
    );
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(result => {
      if (!result.hasPermission) {
        // Asking permission to the user
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
        // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE);
      }
    },
    err => {
      alert(err);
    }
  );
  }

  ionViewDidEnter() {
    console.log('configuration here');
    this.loadConfig();
  }

  loadConfig() {
    var me = this;
    me.commonSQL.getDataQuery("select * from tblMBILCompanyPreference").then(res => {
      if (res.length > 0) {
        me.data = JSON.parse(JSON.stringify(res[0]));
      }
    });
  }

  openPage(menu) {
    console.log(menu);
    this.navCtrl.navigateForward(menu);
  }

  async refreshTable() {
    var me = this;
    me.counter = 0;

    const loading = await this.loadingCtrl.create({
      message: 'Refreshing tables...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });

    const alert = await this.alertCtrl.create({
      message: 'This will require the application to restart. Do you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loading.present();
            me.backuptblMBILPDF(); //added 06.24.2021 (Kenneth)
            me.commonSQL.wipeDB().then(() => {
              me.commonSQL.DropAndCreate(null, true).then(res => {
                console.log(res);


                loading.dismiss();
                me.userData.clearStorage().then(() => {

                  me.menu.enable(false);
                  clearInterval(me.startDateInterval);
                  return me.router.navigateByUrl('login');
                });
              });
            });
          }
        },
        {
          text: 'No',
          handler: () => { }
        }
      ]
    });

    await alert.present();
  }

  download() {
    var me = this;
    var _newPath = me.file.externalDataDirectory +"/download/test.json";

    // Download a file:
    me.fileTransfer.download(me.file.externalDataDirectory+"iRelyDB.json",_newPath).then((entry) => {
      console.log(entry);
    }, (error) => {
      console.log(error);
    });    
  }

  async backupTable() {
    var me = this;
    me.counter = 0;

    const loading = await this.loadingCtrl.create({
      message: 'Processing...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });

    const alert_saved = await this.alertCtrl.create({
      message: 'Back-up successfully saved.',
      buttons: [
        {
          text: 'Okay',
          handler: () => {     
          }
        }
      ]
    });

    const _alert = await this.alertCtrl.create({
      message: 'Are you sure you want to back-up database?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loading.present();

            // var _newPath = me.file.externalDataDirectory +"iRelyDB.json";
            // me.http.get(_newPath).subscribe(x=> {
            //   console.log(x);
            // },error=>{
            //   console.log(error);
            // });

            // let email = {
            //   to: 'max@mustermann.de',
            //   cc: 'erika@mustermann.de',
            //   bcc: ['john@doe.com', 'jane@doe.com'],
            //   attachments: [
            //     _newPath
            //   ],
            //   subject: 'Cordova Icons',
            //   body: 'How are you? Nice greetings from Leipzig',
            //   isHtml: true
            // }
            
            // // Send a text message using default options
            // this.emailComposer.open(email);


            // me.androidPermissions.checkPermission(me.androidPermissions.PERMISSION.MANAGE_EXTERNAL_STORAGE).then(result => {
            //   if (!result.hasPermission) {
            //     me.androidPermissions.requestPermission(me.androidPermissions.PERMISSION.MANAGE_EXTERNAL_STORAGE).then(result=>{
            //       me.download();
            //     });
            //   }
            //   else {
            //     me.download();
            //   }
            // },
            // err => {
            //   alert(err);
            // });

                         


            // me.file.copyFile(me.file.externalDataDirectory,"iRelyDB.json",_newPath,'iRelyDB.json').then((result)=>{
            //   console.log(result);
            //   loading.dismiss();
            //   alert_saved.present();
            // },(result)=>{
            //   console.log(result);
            //   loading.dismiss();
            //   alert('failed');
            // });


            me.commonSQL.backupDB().then((data) => {
              console.log(data);
              var _DATA_FILE = data;
              var _FINAL = new Blob([JSON.stringify(_DATA_FILE)], {type: 'application/json'});

              me.file.createFile(me.file.externalDataDirectory,"iRelyDB.json",true).then(r=>{
                console.log('iRelyDB.txt file created');
                me.file.writeFile(me.file.externalDataDirectory,"iRelyDB.json",_FINAL,{replace:true}).then(result=>{
                  console.log('Data successfully saved to iRelyDB.txt');
                  loading.dismiss();
                  alert_saved.present();

                  // me.file.moveFile(me.file.externalDataDirectory,"iRelyDB.json",me.file.dataDirectory +"download/",'iRelyDB.json').then((result)=>{
                  //   console.log(result);
                  //   alert_saved.present();
                  // },(result)=>{
                  //   console.log(result);
                  //   alert('failed');
                  // });
                  
                  // // Download a file:
                  // me.fileTransfer.download(me.file.externalDataDirectory+"iRelyDB.json",me.file.externalRootDirectory +"download/").then((entry) => {
                  //   console.log('download complete: ' + entry.toURL());
                  //   alert_saved.present();
                  // }, (error) => {
                  //   // handle error
                  //   console.log(error);
                  // });                  
                },(result)=>{
                  console.log(result);
                  loading.dismiss();
                });
              },(result)=>{
                console.log(result);
                loading.dismiss();
              });
              
            });
          }
        },
        {
          text: 'No',
          handler: () => { }
        }
      ]
    });

    await _alert.present();
  }

  async restoreTable() {
    var me = this;

    const loading = await this.loadingCtrl.create({
      message: 'Restoring...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });

    const alert_restored = await this.alertCtrl.create({
      message: 'Back-up successfully restored.',
      buttons: [
        {
          text: 'Okay',
          handler: () => {     
          }
        }
      ]
    });

    const _alert = await this.alertCtrl.create({
      message: 'Are you sure you want to restore database?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loading.present();            
            me.file.readAsBinaryString(me.file.externalDataDirectory,"iRelyDB.json").then(content => {
              me.commonSQL.importDataFromServer(content).then(res => {
                loading.dismiss();
                alert_restored.present();
              }).catch(err => {        
                console.log('ERROR => ' + err);
                loading.dismiss();
              });
            })
            .catch(err => {
              console.log('ERROR => ' + err);
              loading.dismiss();
            });              
          }
        },
        {
          text: 'No',
          handler: () => { }
        }
      ]
    });

    await _alert.present();    
  }

  //added 06.24.2021 (Kenneth)
  backuptblMBILPDF(){
    console.log('Creating json file . . .')
    let me = this;
    me.commonSQL.getData("tblMBILPDF").then(data=>{

      if(data.length > 0){
      console.log('json data here . . .');
      console.log(JSON.stringify(data));
      console.log('path . . ')
      console.log(this.file.externalDataDirectory);
      me.file.checkFile(this.file.externalDataDirectory,"tblMBILPDF.json").then(result=>{
        console.log('File already exists! Trying to overwrite data.');
        me.file.writeExistingFile(me.file.externalDataDirectory,"tblMBILPDF.json",data).then(result=>{
          console.log('Data successfully saved to tblMBILPDF.json!');
          console.log(result);

          console.log('Trying to read the data from json file. . .');

          me.file.readAsText(me.file.externalDataDirectory,"tblMBILPDF.json").then(result=>{
            console.log(JSON.parse(result));
            console.log('Successfully retrieve data from json file. . .');
          })
        });

      }).catch(err=>{
        console.log('file doesnt exists! Trying to create tblMBILPDF.json');
        me.file.createFile(me.file.externalDataDirectory,"tblMBILPDF.json",false).then(r=>{
          console.log('tblMBILPDF.json file successfully created.');
          console.log('Trying to save data to tblMBILPDF.json. . .');
          me.file.writeExistingFile(me.file.externalDataDirectory,"tblMBILPDF.json",data).then(result=>{
            console.log('Data successfully saved to tblMBILPDF.json!');
            console.log(result);

            console.log('Trying to read the data from json file. . .');

            me.file.readAsText(me.file.externalDataDirectory,"tblMBILPDF.json").then(result=>{
              console.log(JSON.parse(result));
              console.log('Successfully retrieve data from json file. . .');
            })
          });
        })
      })
      }

    })

    console.log('creating json file ended here. . .')
  }
}
