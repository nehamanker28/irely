import { Component } from '@angular/core';
import { ModalController, NavController, LoadingController, IonicPage, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SQLite } from '@ionic-native/sqlite';

import { MessageUtil } from '../../core/framework/message/message-util';
import { Configuration } from '../../core/framework/common/configuration';
import { LoginService } from '../../providers/irely/login-service';
import { NetworkConnectionService } from '../../core/framework/network-connection/providers/network-connection-service';
import { User } from '../../core/models/user';
import { GlobalInfo } from '../../core/models/globalinfo';
import { AppVersion } from '@ionic-native/app-version';

import { UserBRL } from '../../core/brl/implementation/user';
import { CommonSQL } from '../../core/framework/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';

@IonicPage()
@Component({
  selector: 'page-login-main',
  templateUrl: 'login-main.html'
})
export class LoginMainPage {

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

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private messageUtil: MessageUtil,
              private loginService: LoginService,
              private formBuilder: FormBuilder,
              private modalCtrl: ModalController,
              private networkconnectionService: NetworkConnectionService,
              public globalInfoBRL: GlobalInfoBRL,
              private userBRL: UserBRL,
              private commonSQL: CommonSQL,
              private appVersion: AppVersion,
              public sqlite: SQLite
            )
  {
    let me = this;
    me.loginForm = formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
        servername: ['']
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginMainPage');
    console.log(this.appVersion.getPackageName());
    console.log(this.appVersion.getVersionCode());
    console.log(this.appVersion.getVersionNumber());

    this.getVersionNumber();
  }

  async getVersionNumber() {
    const versionNumber = await this.appVersion.getVersionNumber();
    console.log(versionNumber);
    this.version = versionNumber;
  }

  showForgotPassword() {
    let forgotLoginModal = this.modalCtrl.create("LoginForgotpasswordPage");
    forgotLoginModal.present();    
  }

  doSignIn(value, valid) {
    let me = this,
        username = 'bobsmith@irely.com', // value.username, //greg.marcom@gmail.com
        password = 'markie33221', //value.password;
        company = '01'; //value.company

        // username = "irelyadmin";
        // password = "i21By2015";

    // let me = this,
    //     username = value.username,
    //     password = value.password,
    //     company = value.company;

    me.submitAttempt = true;

    // if (!valid) {
    //   return;
    // }    

    if(this.networkconnectionService.isOnline()) {      
      let loader = this.loadingCtrl.create({content: "Authenticating..."});
      loader.present();

      me.loginService.getAuthToken(username, password, company)
      .subscribe(
        (result) => {
          console.log(result);
          me.loginService.doSignIn(username, password)
          .subscribe({ next:
            (result) => {

            console.log(result);

            loader.dismiss();

            if (result.LoginMessage.indexOf("Success") != -1) {
              loader = this.loadingCtrl.create({content: "Syncing user data..."});
              loader.present();              

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

              me.commonSQL.createTable(_record).then(res => {
                me.userBRL.add(_record).then(res => {

                  var _globalinfo = new GlobalInfo();
                  me.commonSQL.createTable(_globalinfo).then(res => {
                    _globalinfo = me.userBRL.defaultRecord(_record);
                    me.globalInfoBRL.add(_globalinfo).then(res=> {
                      me.pushRegister();
                      me.navCtrl.setRoot("MenuMainPage", { authenticated: true });
                      loader.dismiss();
                    })
                  });                  
                },
                err => {
                  loader.dismiss();
                  me.messageUtil.showAlertInfoMessage("Failed to sync user data.");
                })
              },
              err => {
                loader.dismiss();
                me.messageUtil.showAlertInfoMessage("Failed to create user data.");
              });              
            } else {
              me.messageUtil.showAlertInfoMessage("Invalid username or password.");
            }
          },
          error: (error) => {
            loader.dismiss();
            me.messageUtil.showAlertInfoMessage("Invalid username or password.");
          }
          })
        },
        (error) => {
          loader.dismiss();
          me.messageUtil.showAlertInfoMessage("Invalid username or password.");
        }
      );
    }
    else {
      let loader = this.loadingCtrl.create({content: "Authenticating via offline mode..."});
      loader.present();

      me.userBRL.loginOffline(username, password).then(res => {
        if(res['length'] > 0) {
          me.navCtrl.setRoot("MenuMainPage", { authenticated: true });
          loader.dismiss();
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

  showConnection() {
    let me = this;
    let connectionModal = this.modalCtrl.create("LoginConnectionPage");
    connectionModal.onDidDismiss(() => {
         //me.getCurrentServer();
  });
    connectionModal.present();
  }

}
