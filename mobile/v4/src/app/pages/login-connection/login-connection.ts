import { Component, NgZone } from '@angular/core';
import { App, IonicPage, NavController, NavParams, ViewController, LoadingController, Platform } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Connection } from '../../core/models/connection';
import { ConnectionService } from '../../providers/irely/connection-service';
import { CredentialService } from '../../providers/irely/credential-service';
import { Configuration } from '../../core/framework/common/configuration';
import { MessageUtil } from '../../core/framework/message/message-util';
import { Storage } from '@ionic/storage';

@IonicPage()
@Component({
  selector: 'page-login-connection',
  templateUrl: 'login-connection.html',
  providers: [
    ConnectionService,
    CredentialService,
    MessageUtil
  ]
})
export class LoginConnectionPage {
  companies: Connection[];
  connectionForm: FormGroup;
  submitAttempt: boolean;
  fromSettings: boolean;
  serverList: any[];

  constructor(private app: App,
              public navCtrl: NavController, 
              public navParams: NavParams, 
              private service: ConnectionService, 
              private credentialService: CredentialService, 
              public formBuilder: FormBuilder, 
              private messageUtil: MessageUtil,
              private viewCtrl: ViewController,
              private loadingCtrl: LoadingController,
              private zone: NgZone,
              public local: Storage,
              private platform: Platform) {
    let me = this;
    me.fromSettings = navParams.get("fromSettings");

    let isLinkValid = (control: FormControl) => {
      if(control.value){
        if(control.value.lastIndexOf('/') != control.value.length-1){
          Configuration.BaseAddress = control.value + '/';

          me.resetValues();
          
          return (new Promise(resolve => {
            me.loadData().subscribe((result) => {
              resolve(true); 
            }, err => {
              resolve(false);
            });
          })).then(result => result ? {} : {"is_invalid": true}); 
        }
        else{
          var _link = control.value.toString();
          Configuration.BaseAddress = _link; //.substring(0,_link.length-1);

          me.resetValues();

          return (new Promise(resolve => {
            me.loadData().subscribe((result) => {
              resolve(true); 
            }, err => {
              resolve(false);
            });
          })).then(result => result ? {} : {"is_invalid": true}); 

          // return (new Promise(resolve => {
          //   resolve(false);
          // })).then(result => result ? {} : {"is_invalid": true}); 
        }
      }
    };

    me.connectionForm = me.formBuilder.group({
        strLink: ['', Validators.required, isLinkValid],
        strCompany: ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    var me = this;
    me.resetValues();
    me.credentialService.getConnection().subscribe((connection) => {
      var _connection = JSON.stringify(connection);
      try
      {
        var _newConnection = JSON.parse(_connection);
        _newConnection = JSON.parse(_newConnection);
        
        Configuration.BaseAddress = _newConnection.strLink || Configuration.BaseAddress;
        Configuration.Company = _newConnection.strCompany || Configuration.Company;

        me.connectionForm.setValue({
          strLink: connection.strLink || _newConnection.strLink,
          strCompany: connection.strCompany || _newConnection.strCompany
        });
      }
      catch(e)
      {
        Configuration.BaseAddress = connection.strLink || Configuration.BaseAddress;
        Configuration.Company = connection.strCompany || Configuration.Company;

        me.connectionForm.setValue({
          strLink: connection.strLink || Configuration.BaseAddress,
          strCompany: connection.strCompany || Configuration.Company
        });
      }
    });

    me.getCurrentServer();
  }

  resetValues() {
    this.companies = [];
  }

  loadData() {   
    var me = this;
    me.resetValues();
    return me.service.loadCompany()
    .do((result) => {  
      result.data.forEach((d) => { 
        me.companies.push(d);
      });
    });
  }

  save(value: Connection, valid: boolean) {
    var me = this;
    me.submitAttempt = true;

    if (valid) {
      Configuration.Company = value.strCompany;
      Configuration.BaseAddress = value.strLink;

      me.credentialService.addConnection(value);
      me.messageUtil.showToastMessage("Connection has been succesfuly saved.", function() {
        me.viewCtrl.dismiss();

        if (me.fromSettings) {
          me.app.getRootNav().setRoot("LoginPage");
        }

      }, 1000);
    }
  }

  async getCurrentServer(){
    var me = this;
    me.serverList = [];
    me.platform.ready().then(() => {
      me.local.keys().then(function (val) {
        console.log(val);
        for(var x = 0; x <= val.length-1; x++){
          if(val[x].indexOf('servername_') != -1){
            var _server = val[x].replace('_servername_','').replace('_company_','  -  ');
            me.serverList.push(_server);
          }
        }
      });
    });
  }

  add(value: Connection, valid: boolean) {
    var me = this;
    me.submitAttempt = true;

    if (valid) {
      Configuration.Company = value.strCompany;
      Configuration.BaseAddress = value.strLink;

      me.credentialService.addConnection(value);
      me.getCurrentServer();
    }
  }

}