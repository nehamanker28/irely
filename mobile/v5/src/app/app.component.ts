import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Storage } from '@ionic/storage';

import { UserData } from './providers/user-data';
import { LoginService } from './providers/login.service';
import { Configuration } from './framework/_common/configuration/configuration';

import { CommonSQL } from './framework/_common/sqlite/implementation/common-sql';
import { GlobalInfoBRL } from './framework/brl/implementation/globalinfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    // {
    //   title: 'Dashboard',
    //   url: '/app/tabs/dashboard',
    //   icon: 'home'
    // },
    {
      title: 'Shift',
      url: '/shift',
      icon: 'stopwatch'
    },
    {
      title: 'Order',
      url: '/order',
      icon: 'cart'
    },
    {
      title: 'Customer',
      url: '/customer',
      icon: 'person'
    },
    {
      title: 'Line Flush and Transfer',
      url: '/line-flush-transfer',
      icon: 'swap-horizontal'
    }
    // {
    //   title: 'Schedule',
    //   url: '/app/tabs/schedule',
    //   icon: 'people'
    // },
    // {
    //   title: 'Speakers',
    //   url: '/app/tabs/speakers',
    //   icon: 'people'
    // },
    // {
    //   title: 'Map',
    //   url: '/app/tabs/map',
    //   icon: 'map'
    // },
    // {
    //   title: 'About',
    //   url: '/app/tabs/about',
    //   icon: 'information-circle'
    // }
  ];
  loggedIn = false;
  dark = false;
  delayReady: any;
  delayFlag = false;
  delayFlagReady = false;

  delayLogReady: any;
  delayLogFlag = false;
  delayLogFlagReady = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private loginService: LoginService,
    private toastCtrl: ToastController,
    public globalInfoBRL: GlobalInfoBRL,
    private commonSQL: CommonSQL,
  ) {
    this.initializeApp();
  }

  async ngOnInit() {
    ;
    var me = this;
    me.menu.enable(false);
    me.loggedIn = await me.checkLoginStatus();
    console.log(me.loggedIn);

    me.swUpdate.available.subscribe(async res => {
      const toast = await me.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => me.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });

    //setup connection
    me.loginService.getToken();
    me.loginService.getConnection().subscribe((connection) => {
      ;
      var _connection = JSON.stringify(connection);
      console.log(connection);
      console.log(_connection);
      try {
        var _newConnection = JSON.parse(_connection);
        _newConnection = JSON.parse(_newConnection);

        console.log(_newConnection.strLink);
        console.log(Configuration.BaseAddress);

        if (_newConnection.strLink !== '' && _newConnection.strLink !== null) {
          Configuration.BaseAddress = _newConnection.strLink || Configuration.BaseAddress;
          Configuration.Company = _newConnection.strCompany || Configuration.Company;
        }

        Configuration.BaseAddress = Configuration.BaseAddress + "/";
      }
      catch (e) {
        console.log(_newConnection.strLink);
        console.log(Configuration.BaseAddress);

        if (_newConnection.strLink !== '' && _newConnection.strLink !== null) {
          Configuration.BaseAddress = _newConnection.strLink || Configuration.BaseAddress;
          Configuration.Company = _newConnection.strCompany || Configuration.Company;
        }

        Configuration.BaseAddress = Configuration.BaseAddress + "/";
      }
    });

    if (me.loggedIn == true) {
      if(localStorage.getItem('connection') == null ||localStorage.getItem('connection') == undefined || localStorage.getItem('connection') == '') {
        localStorage.setItem('connection', Configuration.BaseAddress + ' - ' + Configuration.Company);
      }
      me.router.navigateByUrl('/app/tabs/shift');
    }
    else {
      me.menu.enable(false);
      me.router.navigateByUrl('/login');
    }

    // me.delayLogFlagReady = true;
    //       }
    //       clearInterval(me.delayLogReady);
    //     }
    //     me.delayLogFlag = true;
    //     me.delayLogReady = setInterval(function(){ refresh() }, 3000);
    //   }
  }

  initializeApp() {
    var me = this;

    console.log('ready app');
    if (me.delayFlag == false) {
      var refresh = function () {
        console.log('delay ready app');
        if (me.delayFlagReady == false) {
          console.log('delay ready app start');

          me.platform.ready().then(() => {
            me.statusBar.styleDefault();
            me.splashScreen.hide();
          });

          me.delayFlagReady = true;
        }
        clearInterval(me.delayReady);
      }
      me.delayFlag = true;
      me.delayReady = setInterval(function () { refresh() }, 3000);
    }
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      console.log(loggedIn);
      return loggedIn || false;
      // return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    var me = this;
    me.globalInfoBRL.updateByQuery('UPDATE globalinfo SET ysnLogged = \'false\'').then(result => {
      me.userData.logout().then(() => {
        me.menu.enable(false);
        return me.router.navigateByUrl('login');
      });
    });
  }

  openConfiguration() {
    this.router.navigateByUrl('/configuration');
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
