import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { async } from '@angular/core/testing';
import { UserData } from '../../providers/user-data';
import { Message } from '../../framework/_common/base/message';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';


@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
  data: object = [];
  counter: number = 0;
  startDateInterval: any;

  constructor(public navCtrl: NavController,
    public commonSQL: CommonSQL,
    private menu: MenuController,
    public loadingCtrl: LoadingController,
    private sqlitePorter: SQLitePorter,
    public router: Router,
    public file: File,
    private userData: UserData,
    private message: Message,
    public alertCtrl: AlertController) { }

  ngOnInit() {
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
