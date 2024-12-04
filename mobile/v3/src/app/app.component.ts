import { Component } from '@angular/core';
import { Platform, App, MenuController, MenuToggle } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginLoadingPage } from '../pages/login-loading/login-loading';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginLoadingPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public  app: App, public menuCtrl: MenuController) {
    var me = this;
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.hide();
      splashScreen.hide();

      platform.registerBackButtonAction(() => {
        let nav = me.app.getActiveNavs()[0];
        if (nav.canGoBack()) {
          nav.pop();          
        }
        else {
          // let view = nav.getActive();
          // if (view.component == 'ConfigurationMainPage') {
          //   platform.exitApp();
          // }
          me.menuCtrl.toggle();
        }                
      });

    });    
  }
}
