import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';
import { Storage } from '@ionic/storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';

import { AppVersion } from '@ionic-native/app-version/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { Printer } from '@ionic-native/printer/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';

import { Message } from './framework/_common/base/message';
import { ReportService } from './providers/report.service';
import { i21SyncDeviceService } from './providers/i21syncdevice.service';
import { CommonSQL } from './framework/_common/sqlite/implementation/common-sql';
// import { Service } from './framework/_common/base/service';
import { Token } from './framework/_common/base/token';

import { SyncDeviceDataBRL } from './framework/brl/implementation/syncdevicedata';
import { GlobalInfoBRL } from './framework/brl/implementation/globalinfo';
import { Configuration } from './framework/_common/configuration/configuration';
import { OrderBRL } from './framework/brl/implementation/order';
import { Zip } from '@ionic-native/zip/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

import { LCR_functions } from './providers/LCR_functions';
import { LCR_bluetooth } from './providers/LCR_bluetooth';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';

import { InvoiceTaxPage } from './pages/invoice-tax/invoice-tax.page';
import { InvoiceAddContractPage } from './pages/invoice-add-contract/invoice-add-contract.page';
import { DatePipe } from '@angular/common';
import { GlobalInfo } from './framework/models/globalinfo';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@awesome-cordova-plugins/file-transfer/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot({
      name: 'irely_db',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  declarations: [AppComponent, InvoiceTaxPage, InvoiceAddContractPage],
  entryComponents: [InvoiceTaxPage, InvoiceAddContractPage],
  providers: [
    // InAppBrowser, 
    SplashScreen, 
    StatusBar, 
    Network, 
    Platform, 
    AppVersion, 
    SQLite,
    File,
    FileOpener,
    Message,
    CommonSQL,
    Zip,
    SQLitePorter,
    FileTransfer,
    HTTP,
    SyncDeviceDataBRL,
    GlobalInfoBRL,    
    Configuration,
    OrderBRL,
    i21SyncDeviceService,
    // Service,
    Token,
    Printer,
    Keyboard,
    LCR_functions,
    LCR_bluetooth,
    BluetoothSerial,
    ReportService,
    AndroidPermissions,
    Geolocation,
    LocationAccuracy,
    Base64ToGallery,
    Storage,
    DatePipe,
    GlobalInfo,
    EmailComposer,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
