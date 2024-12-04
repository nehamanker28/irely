import { NgModule, ErrorHandler, Injectable, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { MyApp } from './app.component';

import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { Network } from '@ionic-native/network';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { AppVersion } from '@ionic-native/app-version';
import { Printer, PrintOptions } from '@ionic-native/printer';

import { LoginLoadingPage } from '../pages/login-loading/login-loading';

import { Message } from '../core/framework/common/message';
import { PushService } from '../core/framework/push/providers/push-service';
import { NetworkConnectionService } from '../core/framework/network-connection/providers/network-connection-service';

import { UserBRL } from '../core/brl/implementation/user';
// import { SQLITEBRL } from '../core/brl/implementation/sqlite';
import { LocationBRL } from '../core/brl/implementation/location';
import { ShiftBRL } from '../core/brl/implementation/shift';
import { GlobalInfoBRL } from '../core/brl/implementation/globalinfo';
import { VehicleInspectionBRL } from '../core/brl/implementation/vehicleinspection';
import { HosepipingCheckBRL } from '../core/brl/implementation/hosepipingcheck';
import { SyncDeviceDataBRL } from '../core/brl/implementation/syncdevicedata';
import { ConsumptionSiteBRL } from '../core/brl/implementation/consumptionsite';
import { CustomerBRL } from '../core/brl/implementation/customer';
import { DeliveryHistoryBRL } from '../core/brl/implementation/deliveryhistory';
import { ItemBRL } from '../core/brl/implementation/item';
import { TaxCodeBRL } from '../core/brl/implementation/taxcode';
import { TermsBRL } from '../core/brl/implementation/terms';
import { ApplicableTaxCodeBRL } from '../core/brl/implementation/applicabletaxcode';
import { DeviceBRL } from '../core/brl/implementation/device';
import { InvoiceBRL } from '../core/brl/implementation/invoice';
import { InvoiceItemsBRL } from '../core/brl/implementation/invoiceitems';
import { InvoiceTaxCodesBRL } from '../core/brl/implementation/invoicetaxcodes';
import { PaymentBRL } from '../core/brl/implementation/payment';
import { LoadInventoryBRL } from '../core/brl/implementation/loadinventory';

import { OrderBRL } from '../core/brl/implementation/order';
import { CommonSQL } from '../core/framework/sqlite/implementation/common-sql';

import { Customer } from '../core/models/customer';

import { CredentialService } from '../providers/irely/credential-service';
import { LoginService } from '../providers/irely/login-service';
import { i21syncDeviceService } from '../providers/irely/i21syncdevice-service';
import { ReportService } from '../providers/irely/report-service';

import { OutOfGasBRL } from '../core/brl/implementation/outofgas';
import { CompanyPreferenceBRL } from '../core/brl/implementation/companypreference';

import { BluetoothSerial } from '@ionic-native/bluetooth-serial';

// These are all imports required for Pro Client with Monitoring & Deploy,
// import { Pro } from '@ionic/pro';

// Pro.init('6dbb8235', {
//   appVersion: '18.3.0'
// })

// @Injectable()
// export class MyErrorHandler implements ErrorHandler {
//   ionicErrorHandler: IonicErrorHandler;

//   constructor(injector: Injector) {
//     try {
//       this.ionicErrorHandler = injector.get(IonicErrorHandler);
//     } catch(e) {
//       // Unable to get the IonicErrorHandler provider, ensure
//       // IonicErrorHandler has been added to the providers list below
//     }
//   }

//   handleError(err: any): void {
//     // Pro.monitoring.handleNewError(err);
//     // Remove this if you want to disable Ionic's auto exception handling
//     // in development mode.
//     this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
//   }
// }


@NgModule({
  declarations: [
    MyApp,
    LoginLoadingPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    IonicModule.forRoot(MyApp, {
      mode: 'ios',// TODO: to have same iOS look for all platforms
      backButtonText: 'Back',
      backButtonIcon: 'ios-arrow-back'
      //iconMode: 'md'
    }),
    // DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginLoadingPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicErrorHandler,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, //MyErrorHandler
    Message,
    SQLite,
    Toast,
    Network,
    PushService,
    CredentialService,
    LoginService,    
    NetworkConnectionService,
    i21syncDeviceService,
    UserBRL,
    ShiftBRL,
    LocationBRL,
    OrderBRL,
    GlobalInfoBRL,
    VehicleInspectionBRL,
    HosepipingCheckBRL,
    SyncDeviceDataBRL,
    ConsumptionSiteBRL,
    CustomerBRL,
    DeliveryHistoryBRL,
    ItemBRL,
    TaxCodeBRL,
    TermsBRL,
    ApplicableTaxCodeBRL,
    DeviceBRL,
    InvoiceBRL,
    InvoiceItemsBRL,
    InvoiceTaxCodesBRL,
    OutOfGasBRL,
    File,
    FileOpener,
    AppVersion,
    Customer,
    CommonSQL,
    PaymentBRL,
    CompanyPreferenceBRL,
    LoadInventoryBRL,
    Keyboard,
    Printer,
    ReportService,
    BluetoothSerial
  ]
})
export class AppModule {}
