import { Component, ViewChild } from '@angular/core';
import { App, NavParams, Nav, MenuController, LoadingController, ActionSheetController, IonicPage } from 'ionic-angular';
import { SQLite } from '@ionic-native/sqlite';
import { MenuItem } from '../../core/models/menuitem';
import { Configuration } from '../../core/framework/common/configuration';

@IonicPage()
@Component({
  selector: 'page-menu-main',
  templateUrl: 'menu-main.html',
  // providers: [
  //   NotificationService
  // ]
})
export class MenuMainPage {
  imagesrc: string;
  username: string;
  rootPage = "SingleDashboardPage";
  authenticated: boolean;
  menus: MenuItem[] = [];
  @ViewChild(Nav) nav: Nav;

  constructor(private app: App, 
              private navParams: NavParams, 
              private menuCtrl: MenuController, 
              private actionCtrl: ActionSheetController,
              public loadingCtrl: LoadingController,
              public sqlite: SQLite
            ) {
    let me = this,
        auth = navParams.get('authenticated');
    me.authenticated = auth ? auth : false;

    // me.setupProfile();
    console.log("Menu Main Page")
    me.setupMenu();
  }

  // setupProfile() {
  //   this.imagesrc = `${Configuration.BaseAddress}globalcomponentengine/api/usersinfo/getuserdefaultpicture?entityId=${Configuration.EntityId}&company=${Configuration.Company}`;
  //   this.username = Configuration.FullName;
  // }

  setupMenu() {
    this.menus = [
      new MenuItem('Home', "SingleDashboardPage", "home", true, "dark-blue"),
      new MenuItem('Shift', "ShiftMainPage", "stopwatch", false, "purple"),
      new MenuItem('Orders', "OrderMainPage", "cart", false, "purple"),
      new MenuItem('Customer Detail', "CustomerMainPage", "person", false, "dark-blue"),
      new MenuItem('View Invoices', "ViewInvoicePage", "paper", false, "purple"),
      new MenuItem('View Payments', "ViewPaymentPage", "cash", false, "dark-blue"),
      new MenuItem('View PDF', "ViewPdfPage", "document", false, "dark-blue"),      
      new MenuItem('Configuration', "ConfigurationPage", "build", false, "purple")
    ];
  }

  // getSelectedImageSource() {
  //     return `${Configuration.BaseAddress}globalcomponentengine/api/usersinfo/getuserdefaultpicture?entityId=${Configuration.EntityId}&company=${Configuration.Company}`;
  // }
  
  ionViewCanEnter(): boolean {
    if (this.authenticated) {
      return true;
    } else {
      return false;
    }
  }

  openPage(menu) {
    // this.menus.forEach(element => {
    //   element.active = false;
    // });
    //menu.active = true;
    let me = this;
    me.menuCtrl.close();
    me.nav.setRoot(menu);

    //change BG color
    if(document.getElementById('btnSingleDashboardPage')) document.getElementById('btnSingleDashboardPage').classList.remove('menu-global-active');
    if(document.getElementById('btnShiftMainPage')) document.getElementById('btnShiftMainPage').classList.remove('menu-global-active');
    if(document.getElementById('btnOrderMainPage')) document.getElementById('btnOrderMainPage').classList.remove('menu-global-active');
    if(document.getElementById('btnCustomerMainPage')) document.getElementById('btnCustomerMainPage').classList.remove('menu-global-active');
    if(document.getElementById('btnViewInvoicePage')) document.getElementById('btnViewInvoicePage').classList.remove('menu-global-active');
    if(document.getElementById('btnViewPaymentPage')) document.getElementById('btnViewPaymentPage').classList.remove('menu-global-active');
    if(document.getElementById('btnViewPdfPage')) document.getElementById('btnViewPdfPage').classList.remove('menu-global-active');    
    if(document.getElementById('btnConfigurationMainPage')) document.getElementById('btnConfigurationMainPage').classList.remove('menu-global-active');
    if(document.getElementById('btnProfilePage')) document.getElementById('btnProfilePage').classList.remove('menu-global-active');
    if(document.getElementById('btn'+menu)) document.getElementById('btn'+menu).classList.add('menu-global-active');
  }

  presentPopOver() {
    let me = this,
        actionSheet = me.actionCtrl.create({
          title: 'Options',
          buttons: [
            {
              text: 'Edit Profile',
              handler: () => {
                  me.menuCtrl.close();
                  me.nav.setRoot("ProfilePage");
              }
            },
            {
              text: 'Sign Out',
              handler: () => {
                  me.app.getRootNav().setRoot("LoginPage");
              }
            },
            {
              text: 'Cancel',
              role: 'cancel'
            }
          ]  
        });
    actionSheet.present();
  }
}
