import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { CredentialService } from '../../providers/irely/credential-service';
import { LoginService } from '../../providers/irely/login-service';

@IonicPage()
@Component({
  selector: 'page-login-loading',
  templateUrl: 'login-loading.html',
})
export class LoginLoadingPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              private credentialService: CredentialService,
              private loginService: LoginService) {
  }

  ionViewDidLoad() {
    this.navCtrl.setRoot("LoginMainPage", { authenticated: false }); //MenuMainPage //LoginMainPage //CustomerInvoicePage
    
    // var me = this;
    // me.credentialService.getConnection().subscribe((connection) => {
    //   if (connection.strLink && connection.strLink != "") {
    //     Configuration.Company = connection.strCompany
    //     Configuration.BaseAddress = connection.strLink
    //   }
    //   else if (connection && !connection.strLink) {
    //     var _connection = JSON.stringify(connection);
    //     try
    //     {
    //       var _newConnection = JSON.parse(_connection);
    //       _newConnection = JSON.parse(_newConnection);
          
    //       Configuration.BaseAddress = _newConnection.strLink || Configuration.BaseAddress;
    //       Configuration.Company = _newConnection.strCompany || Configuration.Company;
    //     }
    //     catch(e)
    //     {
    //       Configuration.BaseAddress = connection.strLink || Configuration.BaseAddress;
    //       Configuration.Company = connection.strCompany || Configuration.Company;
    //     }
    //   } else {
    //     let newCon = new Connection();
    //     newCon.strCompany = Configuration.Company;
    //     newCon.strLink = Configuration.BaseAddress;
    //     me.credentialService.addConnection(newCon);  
    //   }

    //   me.verifyCredential();
    // });
  }

  verifyCredential() {
    var me = this;
    me.credentialService.getCredential().subscribe(
      (cred) => {
          if (cred) {
            let loader = me.loadingCtrl.create({
              content: "Loading..."
            });
            loader.present();

            me.loginService.doSignIn(cred.username, cred.password)
            .subscribe(
              (result) => {
                loader.dismiss();

                if (result.LoginMessage.indexOf("Success") != -1) {
                  // me.navCtrl.setRoot("MenuPage", {
                  //   authenticated: true
                  // });
                  console.log('to go main page');
                } else {
                  me.navCtrl.setRoot("LoginMainPage");
                }
              },
              (error) => {
                loader.dismiss();
                me.navCtrl.setRoot("LoginMainPage");
              }
            );
          } else {
            me.navCtrl.setRoot("LoginMainPage");
          }
      },
      (error) => {
        me.navCtrl.setRoot("LoginMainPage");
      });
  }

}
