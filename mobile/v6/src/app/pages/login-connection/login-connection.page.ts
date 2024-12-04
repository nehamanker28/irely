import { Component, OnInit } from '@angular/core';
import { NavController, ModalController, LoadingController, Platform } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Observable, from, of } from "rxjs";
import { map, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { Message } from '../../framework/_common/base/message';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { LoginService } from '../../providers/login.service';
import { NetworkService } from '../../providers/network.service';
import { User } from '../../framework/models/user';
import { Connection } from '../../framework/models/connection';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { AppVersion } from '@ionic-native/app-version/ngx';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-connection',
  templateUrl: './login-connection.page.html',
  styleUrls: ['./login-connection.page.scss'],
})
// export class LoginConnectionPage implements OnInit {
  export class LoginConnectionPage implements OnInit {
    companies: Connection[];
    connectionForm: FormGroup;
    submitAttempt: boolean;
    fromSettings: boolean;
    serverList: any[];
  
    constructor(public navCtrl: NavController, 
                // public navParams: NavParams, 
                // private service: ConnectionService, 
                private loginService: LoginService, 
                public formBuilder: FormBuilder, 
                private messageUtil: Message,
                // private viewCtrl: ViewController,
                private loadingCtrl: LoadingController,
                private modalCtrl: ModalController,
                // private zone: NgZone,
                public local: Storage,
                public router: Router,
                private platform: Platform) {
      let me = this;
      // me.fromSettings = navParams.get("fromSettings");
  
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

    ngOnInit() {
      this.setupInit();
    }
  
    setupInit() {
      var me = this;

      console.log('connection');

      me.resetValues();
      me.loginService.getConnection().subscribe((connection) => {
        ;
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
      return me.loginService.loadCompany()
      .pipe(map((result) => {  
        me.resetValues();
        result.data.forEach((d) => { 
          me.companies.push(d);
        });
      }));
    }
  
    save(value: Connection, valid: boolean) {
      var me = this;
      me.submitAttempt = true;
  
      if (valid) {
        Configuration.Company = value.strCompany;
        Configuration.BaseAddress = value.strLink + "/";
  
        me.loginService.addConnection(value);
        me.messageUtil.showToastMessage("Connection has been successfully saved.", function() {
          //me.viewCtrl.dismiss();

          me.modalCtrl.dismiss({
            'dismissed': true
          });
  
          // if (me.fromSettings) {
          //me.router.navigateByUrl('/login');
          // }
  
        }, 1000);
      }
    }
  
    async getCurrentServer(){
      var me = this;      
      me.platform.ready().then(() => {
        me.local.keys().then(function (val) {
          console.log(val);
          me.serverList = [];
          for(var x = 0; x <= val.length-1; x++){
            if(val[x].indexOf('servername_') != -1){
              var _server = val[x].replace('_servername_','').replace('_company_','  -  ');
              var _splitServer = _server.split('  -  ');
              var server = {
                display: _server,
                name: _splitServer[0],
                company: _splitServer[1]
              }
              me.serverList.push(server);
              localStorage.setItem('connection',server.display);
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
  
        me.loginService.addConnection(value);
        me.getCurrentServer();
      }
    }

    selectedConnection(item) {
      Configuration.Company = item.company;
      Configuration.BaseAddress = item.name + "/";

      var connection = {"strLink": item.name,"strCompany": item.company};

      this.local.set('_servername_' + connection.strLink + '_company_' + connection.strCompany, JSON.parse('{"strLink":"' + connection.strCompany + '","strCompany":"' + connection.strLink + '"}'));    
      this.local.set('connection', JSON.stringify(connection));
      localStorage.setItem('connection',item.display);
    }
  
  }