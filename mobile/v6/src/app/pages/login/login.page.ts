import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController, NavController, LoadingController, AlertController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Router } from '@angular/router';

import { Message } from '../../framework/_common/base/message';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { LoginService } from '../../providers/login.service';
import { NetworkService } from '../../providers/network.service';
import { User } from '../../framework/models/user';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { UserBRL } from '../../framework/brl/implementation/user';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { UserData } from '../../providers/user-data';
import { Storage } from '@ionic/storage';
import { SyncDeviceDataBRL } from '../../framework/brl/implementation/syncdevicedata';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';
import { File } from '@ionic-native/file/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  submitAttempt: boolean;
  connection: string = Configuration.BaseAddress;
  currentserver: string;
  serverList: any[];

  expenses: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

  version: any;
  version_number: number;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              private messageUtil: Message,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private networkconnectionService: NetworkService,
              public globalInfoBRL: GlobalInfoBRL,
              private userBRL: UserBRL,
              private commonSQL: CommonSQL,
              private menu: MenuController,
              private appVersion: AppVersion,
              public sqlite: SQLite,
              public userData: UserData,
              public alertCtrl: AlertController,
              public router: Router,
              private syncDeviceDataBRL: SyncDeviceDataBRL,
              public storage: Storage,
              public file:File
            )
  {
    let me = this;
    me.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        servername: ['']
    });

    this.menu.enable(false);    
  }

  ngOnInit() {
    this.setupInit();
  }

  setupInit() {
    this.menu.enable(false);

    console.log('ionViewDidLoad LoginMainPage');
    console.log(this.appVersion.getPackageName());
    console.log(this.appVersion.getVersionCode());
    console.log(this.appVersion.getVersionNumber());

    this.getVersionNumber();
    this.newInstalled();
  }

  async getVersionNumber() {
    const versionNumber = await this.appVersion.getVersionNumber();
    this.version = versionNumber;
    this.version_number = parseInt(this.version.replace(/\./g,'').toString());

    console.log(versionNumber);
    console.log(this.version_number);

    this.appVersion.getVersionNumber().then(result=>{
      this.version = result;
    });    
  }

  async newInstalled(){
    var me = this;

    const creatingDialog = await this.loadingCtrl.create({
      message: 'Creating tables...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });

    const validatingDialog = await this.loadingCtrl.create({
      message: 'Validating tables...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });

    validatingDialog.present();
    me.storage.get('current_version').then(res=>{
      console.log(res);
      if(res == null || res == undefined) {
        me.storage.set('current_version', me.version_number);
        me.commonSQL.getDataQuery('select * from syncdevicedata').then((data)=>{
          console.log(data);
          if(data.length < 1) {
            me.syncDeviceDataBRL.defaultRecord().then(()=>{
              console.log(res);
              validatingDialog.dismiss();
            });
          }
          else {
            validatingDialog.dismiss();
          }
        },(data)=>{
          me.commonSQL.getDataQuery('select * from shift').then((data)=>{
            validatingDialog.dismiss();
            creatingDialog.present();
          },(data)=>{
            validatingDialog.dismiss();
            creatingDialog.present();
            me.commonSQL.DropAndCreate(null, true).then(res => {
              me.syncDeviceDataBRL.defaultRecord().then((res)=>{
                console.log(res);
                creatingDialog.dismiss();
              });
            });
          });          
        });       
      }
      else if(me.version_number > res) {
        // me.updateDatabase(res);
        me.storage.set('current_version', me.version_number);
        validatingDialog.dismiss();
      }
      else {
        validatingDialog.dismiss();
      }
    });

  }

  updateDatabase(current_version: number): Promise<any> {
    var me = this;

    return new Promise ((resolve, reject) => {
      console.log('++++++++++++++++ EXEC UPDATE SCRIPT - START ++++++++++++++++');

      // current version - 2011109
      // script version - 2011110

      if(2011222 > current_version) {
        me.commonSQL.executeQuery('ALTER TABLE globalinfo ADD COLUMN ysnLogged boolean').then(result=>{
          console.log(result);
          console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
          // resolve(result);
        });
        // me.commonSQL.executeQuery('ALTER TABLE globalinfo ADD COLUMN strHosePipingCheckPDF string').then(result=>{
        //   console.log(result);
        //   console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
        //   // resolve(result);
        // });
        // me.commonSQL.executeQuery('ALTER TABLE globalinfo ADD COLUMN strReviewShiftPDF string').then(result=>{
        //   console.log(result);
        //   console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
        //   resolve(result);
        // });
      }

      resolve(true);

    });
  }

  showForgotPassword() {
    // let forgotLoginModal = this.modalCtrl.create("LoginForgotpasswordPage");
    // forgotLoginModal.present();
  }

  async doSignIn(value, valid) {
    // let me = this,
    //     username = 'bobsmith@irely.com', //axel.casauran@irely.com', // value.username, //bobsmith@irely.com
    //     password = 'markie33221', //'12345678', //value.password; //markie33221
    //     company = '01'; //value.company

    let me = this,
        username = value.username,
        password = value.password,
        company = '01'; //value.company;

    me.submitAttempt = true;

    // if (!valid) {
    //   return;
    // }

    ;

    if(me.networkconnectionService.isOnline()) {
      let loader = await me.loadingCtrl.create({message: "Authenticating..."});
      var loader2 = await me.loadingCtrl.create({message: "Syncing user data..."});
      loader.present();

      ;

      me.loginService.getAuthToken(username, password, company)
      .subscribe(
        (result) => {
          console.log('getAuthToken');
          console.log(result);
          me.loginService.doSignIn(username, password)
          .subscribe(
            (result) => {

            console.log('doSignIn');
            console.log(result);

            loader.dismiss();

            if (result.LoginMessage.indexOf("Success") != -1) {
              loader2.present();

              me.storage.set('current_version', me.version_number);
              me.userData.signup(username);

              // ADD MORE FIELDS HERE - TODO
              var _record = new User();
              _record.intUserId = result.EntityId;
              _record.strFullName = result.strFullName;
              _record.strUserName = username;
              _record.strPassword = password;
              _record.intDriverNumber = result.ContactParentId;
              _record.ContactParentId = result.ContactParentId;
              _record.CompanyName = result.CompanyName;

              console.log(_record);

              me.globalInfoBRL.getByQuery('select * from globalinfo where intUserId = \'' + _record.intUserId + '\'').then(result => {
                console.log(result);
                if(result.length > 0) {
                  me.globalInfoBRL.updateByQuery('UPDATE globalinfo SET ysnLogged = \'true\' WHERE intUserId = \'' + _record.intUserId + '\'').then(result=> {
                    loader2.dismiss();
                    console.log('++++++++ UPDATE ysnLogged ++++++++');
                    me.router.navigateByUrl('/shift');
                  });
                }
                else {
                  me.userBRL.add(_record);
                  var _globalinfo = new GlobalInfo();
                  _globalinfo = me.userBRL.defaultRecord(_record);
                  me.globalInfoBRL.add(_globalinfo).then(result=> {
                    loader2.dismiss();
                    console.log('++++++++ UPDATE ysnLogged ++++++++');
                    me.router.navigateByUrl('/shift');
                  });
                }
              },
              (error) => {
                me.userBRL.add(_record);
                var _globalinfo = new GlobalInfo();
                _globalinfo = me.userBRL.defaultRecord(_record);
                me.globalInfoBRL.add(_globalinfo).then(result=> {
                  loader2.dismiss();
                  console.log('++++++++ UPDATE ysnLogged ++++++++');
                  me.router.navigateByUrl('/shift');
                });
              });
              me.file.readAsText(me.file.externalDataDirectory,"tblMBILPDF.json").then(result=>{
                console.log('pdf data to insert . . .')
                console.log(JSON.parse(result));
                me.commonSQL.addBulkData("tblMBILPDF",new tblMBILPDF(),JSON.parse(result)).then(res=>{
                  me.commonSQL.getData("tblMBILPDF").then(res=>{
                    me.file.removeFile(me.file.externalDataDirectory,"tblMBILPDF.json").then(res=>{
                      console.log(res);
                    });
                  });
                })
              })
              // // me.commonSQL.createTable(_record).then(result => {
              //   me.userBRL.add(_record).then(result => {

              //     var _globalinfo = new GlobalInfo();
              //     me.commonSQL.createTable(_globalinfo).then(result => {
              //       _globalinfo = me.userBRL.defaultRecord(_record);

              //       _globalinfo.ysnLogged = true;
              //       me.globalInfoBRL.add(_globalinfo).then(result=> {
              //         loader2.dismiss();
              //         ;
              //         me.router.navigateByUrl('/app/tabs/dashboard');
              //       });

              //     },
              //     (error) => {
              //       ;
              //       _globalinfo = me.userBRL.defaultRecord(_record);
              //       _globalinfo.ysnLogged = true;

              //       me.globalInfoBRL.getByQuery('select * from globalinfo where intUserId = ' + _record.intUserId).then(result => {
              //         if(result) {
              //           me.globalInfoBRL.updateByQuery('UPDATE globalinfo SET ysnLogged = true WHERE intUserId = ' + _record.intUserId).add(_globalinfo).then(result=> {
              //             loader2.dismiss();
              //             ;
              //             me.router.navigateByUrl('/app/tabs/dashboard');
              //           });
              //         }
              //         else {
              //           me.globalInfoBRL.add(_globalinfo).then(result=> {
              //             loader2.dismiss();
              //             ;
              //             me.router.navigateByUrl('/app/tabs/dashboard');
              //           });
              //         }
              //       });
              //     });
              //   },
              //   (error) => {
              //     loader2.dismiss();
              //     console.log(error);
              //     me.messageUtil.showAlertInfoMessage("Failed to sync user data.");
              //   });
              // },
              // (error) => {
              //   loader2.dismiss();
              //   console.log(error);
              //   me.messageUtil.showAlertInfoMessage("Failed to create user data.");
              // });
            } else {
              me.messageUtil.showAlertInfoMessage("Invalid username or password.");
            }
          },
          (error) => {
            loader.dismiss();
            me.messageUtil.showAlertInfoMessage("Invalid username or password.");
          });
        },
        (error) => {
          loader.dismiss();
          me.messageUtil.showAlertInfoMessage("Invalid username or password.");
        }
      );
    }
    else {
      let loader = await me.loadingCtrl.create({message: "Authenticating via offline mode..."});
      loader.present();

      me.userBRL.loginOffline(username, password).then(res => {
        if(res['length'] > 0) {
          loader.dismiss();
          me.router.navigateByUrl('/shift');
        }
        else {
          loader.dismiss();
          me.messageUtil.showAlertInfoMessage("Invalid username or password.");
        }
      });
    }
  }

  pushRegister(){
    // if (me.platform.is('cordova')) {
    //   me.push.register().then((t: PushToken) => {
    //     return me.push.saveToken(t);
    //   }).then((t: PushToken) => {
    //     let token = new DeviceToken();
    //     token.intEntityId = result.EntityId;
    //     token.strDeviceToken = t.token;
    //     token.intLoginDeviceTokenId = 1;
    //     token.strPlatform = "";

    //     me.pushService.create(token).subscribe((response) => {
    //       let data = response.data[0],
    //           cred = new Credential('5c4380ee-e537-4d5f-a0ec-4d454fbb54e6', username, password, data.intLoginDeviceTokenId);

    //       me.credentialService.addCredential(cred);
    //     });
    //   });
    // } else {
    //   let cred = new Credential('5c4380ee-e537-4d5f-a0ec-4d454fbb54e6', username, password, 0);
    //   me.credentialService.addCredential(cred);
    //}
  }

  async showConnection() {
    let me = this;
    me.router.navigateByUrl('/login-connection');
    // let connectionModal = await me.modalCtrl.create({
    //   component: LoginConnectionPage
    // });
    // return await connectionModal.present();
  }

}
