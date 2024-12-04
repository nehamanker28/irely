import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController, Platform } from '@ionic/angular';
import { Keyboard } from '@ionic-native/keyboard/ngx';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

import { ReportService } from '../../providers/report.service';
import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Message } from '../../framework/_common/base/message';
import { Service } from '../../framework/_common/base/service';
import { Token } from '../../framework/_common/base/token';

import { GlobalInfo } from '../../framework/models/globalinfo';
import { Shift } from '../../framework/models/shift';

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { SyncDeviceDataBRL } from '../../framework/brl/implementation/syncdevicedata';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { OrderBRL } from '../../framework/brl/implementation/order';
import { async } from '@angular/core/testing';

import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { HTTP } from '@ionic-native/http/ngx';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';
import { empty } from 'rxjs';

@Component({
  selector: 'page-shift',
  templateUrl: 'shift.page.html',
  styleUrls: ['./shift.page.scss'],
})
export class ShiftPage extends Service<Token> {

  startDate: string;
  endDate: string;
  refreshTableInterval: any;
  fullDataInterval: any;
  fullDataBufferInterval: any;
  receiveOrderInterval: any;
  startDateInterval: any;
  endDateInterval: any;
  pdfInterval: any;

  isShiftReady: boolean = true;
  startShiftStatus: boolean = false;
  endShiftStatus: boolean = true;
  truckNumberStatus: boolean = false;
  LocationStatus: boolean = false;
  hasOnGoingShift: boolean = false;

  disableOnGoingShift: boolean = true;
  disableLoadInventory: boolean = true;
  disableInspectionSheet: boolean = true;
  disableHosePiping: boolean = true;
  disableReviewShift: boolean = true;
  disableEndShift: boolean = true;

  location: object = [];
  invoice = [];
  invoiceTaxes: object = [];
  truck: object = [];
  invoiceTotal: number = 0;
  payment: object = [];
  paymentTotal: number = 0;
  data: object = [];
  dataLoadInventory = [];
  dataPDFList: object = [];
  strLocation: string;
  intLocation: number;
  globalInfo: any;
  counter: number = 0;
  totalOrderReceived: string = '0';
  itemOrderItem: any;
  itemOrderItemTaxCode: any;
  driver: string = '';

  strTruckInspectionPDF: string;
  strHosePipingCheckPDF: string;
  strReviewShiftPDF: string;

  pdfObj = null;
  tmAlerts = [];

  locationCoords: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private globalBRL: GlobalInfoBRL,
    private orderBrl: OrderBRL,
    private syncDeviceDataBRL: SyncDeviceDataBRL,
    private i21syncDeviceService: i21SyncDeviceService,
    private commonSQL: CommonSQL,
    public https: HTTP,
    public http: HttpClient,
    private reportService: ReportService,
    private router: Router,
    private message: Message,
    private file: File,
    private fileOpener: FileOpener,
    private menu: MenuController,
    public locationAccuracy: LocationAccuracy,
    public androidPermissions:AndroidPermissions,
    private geolocation: Geolocation,
    private keyboard: Keyboard) {
    super(http, https);
  }

  ngOnInit() {
    this.menu.enable(true);

    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
    this.checkGPSPermission();
  }

  async ionViewDidEnter() {
    this.menu.enable(true);

    var me = this;
    console.log('Shift Main');
    await me.commonSQL.getDataQuery(`SELECT count(*) as total FROM tblMBILOrder
                              Where intOrderId not in(select intOrderId from invoice)`).then((res) => {
        me.commonSQL.updateDataQuery('UPDATE globalinfo SET strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
          me.truckSetup();

          me.locationSetup();
          me.userGlobalInfo();
          me.getLoadInventoryList();
          me.getPDFList();
        });
    });

  }

  hideKeyboard() {
    this.keyboard.hide();
  }

  userGlobalInfo() {
    var me = this;
    ;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      console.log('global info . . .')
      console.log(res);
      if (res[0]) {
        me.globalInfo = res[0];
        me.data = res[0]; //added Kenneth 07.16.2021
      }

      if (me.globalInfo) {
        me.hasOnGoingShift = JSON.parse(me.globalInfo.ysnShiftOnGoing || false);
        me.strTruckInspectionPDF = me.globalInfo.strTruckInspectionPDF || '';
        me.strHosePipingCheckPDF = me.globalInfo.strHosePipingCheckPDF || '';
        me.strReviewShiftPDF = me.globalInfo.strReviewShiftPDF || '';
        me.buttonStatus();
      }

      me.getInvoice();
      me.getPayment();

    });
  }

  buttonStatus() {
    var me = this;

    if (me.globalInfo) {
      if (me.globalInfo.dtmReceivedFullData) {
        if (me.globalInfo.dtmReceivedFullData.length > 0) {
          me.disableOnGoingShift = false;
        }
        else {
          me.disableOnGoingShift = true;
        }

        if (me.hasOnGoingShift == true) {
          me.disableLoadInventory = false;
          me.disableOnGoingShift = true;
        }
      }
      else {
        me.disableOnGoingShift = true;
      }
    }
    else {
      me.disableOnGoingShift = true;
    }
    if (me.hasOnGoingShift == false) {
      me.disableLoadInventory = true;
    }
    if (me.hasOnGoingShift == true && me.dataLoadInventory.length > 0) {
      // me.disableLoadInventory = true;
      me.disableInspectionSheet = false;
    }
    else if (me.hasOnGoingShift == true && me.dataLoadInventory.length < 1) {
      // me.disableLoadInventory = false;
    }
    if (me.strTruckInspectionPDF && me.hasOnGoingShift == true) {
      if (me.strTruckInspectionPDF.length > 0) {
        me.disableInspectionSheet = true;
        me.disableHosePiping = false;
      }
    }
    if (me.strHosePipingCheckPDF && me.hasOnGoingShift == true) {
      if (me.strHosePipingCheckPDF.length > 0) {
        me.disableHosePiping = true;
        me.disableReviewShift = false;
      }
    }
    if (me.strReviewShiftPDF && me.hasOnGoingShift == true) {
      if (me.strReviewShiftPDF.length > 0) {
        me.disableReviewShift = false;
        me.disableEndShift = false;

        var me = this;
        var options = {
          year: "numeric", month: "short",
          day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
        };
        var endRefresh = function () {
          var date = new Date();
          me.endDate = date.toLocaleTimeString("en-US", options);
        };
        clearInterval(me.endDateInterval);
        me.endDateInterval = setInterval(function () { endRefresh() }, 1000);
      }
    }
  }

  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

  //#region SETUP

  shiftSetup() {
    var me = this;
    var _global = new GlobalInfo();
    ;

    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      if (res[0]) {
        me.globalInfo = res[0];
        me.data = res[0];
        me.data['intTruckId'] = (me.data['intTruckId'] || '0').toString();
      }
      else {
        me.data = _global;
      }

      console.log(' ++++ SHIFT SETUP ', me.data);

      if (me.data['intLocation'] == null) {
        me.data['intLocation'] = Configuration.DefaultLocation;
      }

      me.driver = (me.data['intDriverNumber'] || '') + ' - ' + (me.data['strFullName'] || '');

      if (me.data['ysnShiftOnGoing'] == 'true' || me.data['ysnShiftOnGoing'] == true) {
        me.ongoingShiftSetup(me.data);
      }
      else {
        me.noShiftStartingSetup();
      }
      me.buttonStatus();
    });
  }

  noShiftStartingSetup() {
    var me = this;
    var options = {
      year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
    };
    var startRefresh = function () {
      var date = new Date();
      me.startDate = date.toLocaleTimeString("en-US", options);

      if ((me.data['dblOdometerStart'] == null || me.data['dblOdometerStart'] == 0) || (me.data['intTruckId'] == null || me.data['intTruckId'] == 0 || me.data['intTruckId'] == undefined || me.data['strTruckNumber'] == null || me.data['strTruckNumber'] == undefined)) {
        me.isShiftReady = true;
      }
      else {
        me.isShiftReady = false;
      }
      if (me.startShiftStatus == true) {
        clearInterval(me.startDateInterval);
      }
    };

    if (me.data['dblOdometerStart'] == null) {
      me.data['dblOdometerStart'] = 0;
      me.data['dblTotalizer1Start'] = 0;
      me.data['dblTotalizer2Start'] = 0;
    }

    if (me.data['dblOdometerEnd'] == null) {
      me.data['dblOdometerEnd'] = 0;
      me.data['dblTotalizer1End'] = 0;
      me.data['dblTotalizer2End'] = 0;
    }
    if (me.data['dtmEndShiftDate'] != null) this.endDate = new Date(me.data['dtmEndShiftDate']).toDateString() + ' ' + new Date(me.data['dtmEndShiftDate']).toLocaleTimeString();

    me.startDateInterval = setInterval(function () { startRefresh() }, 1000);
  }

  ongoingShiftSetup(record: any) {
    var me = this;
    me.isShiftReady = true;
    me.startShiftStatus = true;
    me.endShiftStatus = false;
    me.truckNumberStatus = true;
    me.LocationStatus = true;

    var options = {
      year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
    };
    me.startDate = new Date(record['dtmStartShiftDate']).toLocaleTimeString("en-US", options);
  }

  locationSetup() {
    var me = this;
    me.commonSQL.getDataQuery('select * from tblSMLocation order by strLocationName').then(res => {
      this.location = res;
    });

  }

  truckSetup() {
    var me = this;
    me.commonSQL.getDataQuery('select * from tblSMTruck order by strTruckNumber').then(res => {
      me.truck = res;
      console.log(' ++++ TRUCK SETUP ',  me.truck);
      me.shiftSetup();
    });
  }

  getInvoice() {
    var me = this;
    me.commonSQL.getDataQuery('select invoice.strLatitude, invoice.strLongitude, invoice.ysnVoided, invoice.strCustomerNo, invoice.strCustomerName, invoice.strInvoiceNo, invoiceitems.strItemNo, invoiceitems.strItemDescription, invoiceitems.dblQuantity, invoiceitems.dblPrice, (select sum(dblTotalTax) from invoicetaxcodes where invoicetaxcodes.intOrderId = invoice.intOrderId and invoicetaxcodes.intItemId = invoiceitems.intItemId) as dblTotalTax, invoiceitems.intItemId, invoice.intOrderId from invoice left join invoiceitems on invoice.intOrderId = invoiceitems.intOrderId where invoice.intDriverId = ' + me.globalInfo.intDriverNumber + ' and invoice.intShiftId = ' + me.globalInfo.intShiftId + ' order by strItemNo').then(res => {
      console.log(res);
      me.invoice = res;

      me.commonSQL.getDataQuery('select * from invoicetaxcodes where intItemId IN (select invoiceitems.intItemId from invoiceitems where invoiceitems.intOrderId IN (select invoice.intOrderId from invoice where invoice.intDriverId = ' + me.globalInfo.intDriverNumber + ' and invoice.intShiftId = ' + me.globalInfo.intShiftId + ') )').then(res => {
        console.log(res);
        me.invoiceTaxes = res;
      });
    });
  }

  getPayment() {
    var me = this;
    me.commonSQL.getDataQuery('select * from payment where intEntityDriverId = ' + me.globalInfo.intDriverNumber + ' and intShiftId = ' + me.globalInfo.intShiftId + '').then(res => {
      me.payment = res;
    });
  }

  getLoadInventoryList() {
    var me = this;
    me.dataLoadInventory = [];
    // me.commonSQL.getDataQuery('SELECT * FROM loadinventory order by intItemNumber').then(res => {
    //   var _records = JSON.parse(JSON.stringify(res));

    //   var _previous = { 'intItemNumber': 0, 'strItemNumber': '', 'strItemDescription': '', 'dblQuantityLoaded': 0, 'strUnitMeasure': '' };
    //   _records.forEach(element => {
    //     if (_previous.intItemNumber != element.intItemNumber) {
    //       if (_previous.intItemNumber != 0) {
    //         me.dataLoadInventory.push(_previous);
    //         _previous = element;
    //       }
    //       else {
    //         _previous = element;
    //       }
    //     }
    //     else {
    //       _previous.dblQuantityLoaded = (_previous.dblQuantityLoaded || 0) + (element.dblQuantityLoaded || 0);
    //     }
    //   });
    //   if (_previous.intItemNumber != 0) {
    //     me.dataLoadInventory.push(_previous);
    //   }

    //   me.buttonStatus();

    // })
    //   .catch(e => {
    //     console.log(e);
    //   });



    me.commonSQL.getDataQuery('SELECT *, (select strUnitMeasure from loadinventory where intItemNumber = tankwagon.intItemId LIMIT 1) as strUnitMeasure FROM tankwagon where intItemId IN (select intItemNumber from loadinventory) order by intItemId').then(res => {
      var _records = JSON.parse(JSON.stringify(res));
      console.log(_records);

      var _previous = {'intItemId': 0, 'strItemNo': '', 'strDescription': '', 'dblQuantity': 0, 'strUnitMeasure': 0};
      _records.forEach(element => {
        if(_previous.intItemId != element.intItemId) {
          if(_previous.intItemId != 0) {
            me.dataLoadInventory.push(_previous);
            _previous = element;
          }
          else if(element.strTransactionType != 'Line Flush') {
            _previous = element;
          }
        }
        else if(element.strTransactionType != 'Line Flush') {
          _previous.dblQuantity = _previous.dblQuantity + element.dblQuantity;
        }

        console.log(me.data);
      });
      me.dataLoadInventory.push(_previous);

      me.buttonStatus();

    })
    .catch(e => {
      console.log(e);
    });
  }

  getPDFList() {
    var me = this;

    me.file.listDir(me.file.dataDirectory, 'reports').then((result) => {
      console.log(result);
      var _files = [];

      for (let file of result) {
        var _file = { type: '', filename: '', fullpath: '', datecreated: '', visible: 'false' };

        if (file.isFile == true) {
          _file.type = file.name.substr(0, file.name.indexOf('_')).replace(/-/g, ' ');
          _file.filename = file.name;
          _file.fullpath = file.nativeURL;

          if (_file.type === 'Delivery Out Of Gas') {
            _file.visible = 'true';
          }

          _files.push(_file);
        }
      }

      me.dataPDFList = _files;
    });
  }

  openPDF(item) {
    var me = this;
    console.log(item);

    if (item == 'truckInspection') {
      for (var x = 0; x <= me.dataPDFList['length'] - 1; x++) {
        if (me.dataPDFList[x].filename == me.strTruckInspectionPDF) {
          me.fileOpener.open(me.dataPDFList[x].fullpath, 'application/pdf');
          return;
        }
      }
    }
    else if (item == 'hosePipingCheck') {
      for (var x = 0; x <= me.dataPDFList['length'] - 1; x++) {
        if (me.dataPDFList[x].filename == me.strHosePipingCheckPDF) {
          me.fileOpener.open(me.dataPDFList[x].fullpath, 'application/pdf');
          return;
        }
      }
    }
    else if (item == 'reviewShift') {
      for (var x = 0; x <= me.dataPDFList['length'] - 1; x++) {
        if (me.dataPDFList[x].filename == me.strReviewShiftPDF) {
          me.fileOpener.open(me.dataPDFList[x].fullpath, 'application/pdf');
          return;
        }
      }
    }
  }

  //#endregion

  //#region EVENTS

  locationChange(event) {
    this.strLocation = event.strLocationName;
    this.intLocation = event.intCompanyLocationId;
    this.data['strLocation'] = this.strLocation;
    this.data['intLocation'] = this.intLocation;
  }

  //#endregion

  //#region FUNCTIONS

  formatDate(value) {
    return value.getMonth() + 1 + "/" + value.getDate() + "/" + value.getFullYear() + ' ' + value.getHours() + ':' + value.getMinutes() + ':' + value.getSeconds();
  }

  getDateFormat(value) {
    var options = {
      year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return value.toLocaleTimeString("en-US", options);
  }

  clearInputValue(elem) {
    // elem.getElementRef().nativeElement.children[0].select(); //error ionic 5
  }


  async sqlBufferTime() {
    var me = this;
    let loader = await me.loadingCtrl.create({ message: "preparing data...", backdropDismiss: true });
    loader.present();
    var refreshBuff = function () {
      loader.dismiss();
      me.message.showAlertInfoMessage('Data successfully imported!');
      clearInterval(me.fullDataBufferInterval);
    }
    me.fullDataBufferInterval = setInterval(function () { refreshBuff() }, 15000);
  }

  //#endregion


  //#region BUTTONS

  async startShift(record: any) {
    var me = this;
    console.log(record);

    var truck = JSON.stringify(me.truck);
    var strTruckNumber = JSON.parse(truck).filter(function (item) {
      if (item.intTruckId == record.intTruckId) {
        return item.strTruckNumber;
      }
    });

    if (strTruckNumber.length > 0) {
      me.data['strTruckNumber'] = strTruckNumber[0].strTruckNumber;
      me.data['intTruckId'] = strTruckNumber[0].intTruckId;
    }

    if (me.data['dblOdometerStart'] == null || me.data['dblOdometerStart'] == 0) {
      const alert = await me.alertCtrl.create({
        message: 'Odometer (start) is required.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      await alert.present();

      return;
    }
    if (me.globalInfo['strLocationNumber'] == null || me.globalInfo['strLocationNumber'] == undefined || me.globalInfo['intLocation'] == null || me.globalInfo['intLocation'] == undefined) {
      const alert = await me.alertCtrl.create({
        message: 'Company Location is required.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      await alert.present();

      return;
    }

    if (me.data['intTruckId'] == null || me.data['intTruckId'] == 0 || me.data['intTruckId'] == undefined || me.data['strTruckNumber'] == null || me.data['strTruckNumber'] == undefined) {
      const alert = await me.alertCtrl.create({
        message: 'Please select a truck.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      await alert.present();

      return;
    }

    var loader = await me.loadingCtrl.create({ message: "Starting shift...", backdropDismiss: true });

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to start a new shift?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loader.present();

            // me.processReceiveOrder(null, me.data);

            var _shift = new Shift();
            _shift.intDriverId = me.globalInfo.intDriverNumber;
            _shift.intLocationId = me.data['intLocation'];
            _shift.intShiftNumber = (me.globalInfo.intShiftCounter || 0) + 1;
            _shift.dtmShiftDate = new Date(me.startDate);
            _shift.dtmStartTime = new Date(me.startDate);
            _shift.intTruckId = me.data['intTruckId'];
            _shift.strTruckNumber = me.data['strTruckNumber'];
            _shift.intTruckId = record.intTruckId;
            _shift.intStartOdometer = record.dblOdometerStart;
            _shift.intEndOdometer = 0;
            // _shift.intEndOdometer = record.dblOdometerEnd;

            me.hasOnGoingShift = true;
            me.buttonStatus();

            console.log(_shift);
            clearInterval(me.startDateInterval);

            me.postraw('mobilebilling/api/shift/startshift', _shift).subscribe(data => {
              console.log(data);

              var _data = data;
              me.startShiftStatus = true;
              me.endShiftStatus = true;
              me.truckNumberStatus = true;
              me.LocationStatus = true;

              // me.data['intShiftCounter'] = (me.globalInfo.intShiftCounter || 0) + 1; //daily counter
              me.data['intShiftId'] = _data[0].intShiftId;
              me.driver = (me.data['intDriverNumber'] || '') + ' - ' + (me.data['strFullName'] || '');

              //Start Shift Process
              var updateRecord = new GlobalInfo();
              updateRecord.dtmEndShiftDate = null;
              updateRecord.intShiftId = _data[0].intShiftId;
              updateRecord.ysnShiftOnGoing = true;
              // updateRecord.intLocation = record.intLocation;
              // updateRecord.strLocation = me.data['strLocation'];
              // updateRecord.strLocationNumber = me.data['strLocationNumber'];
              updateRecord.dblOdometerStart = me.data['dblOdometerStart'];
              updateRecord.dblOdometerEnd = 0 //me.data['dblOdometerEnd'];
              updateRecord.intTruckId = me.data['intTruckId'];
              updateRecord.strTruckNumber = me.data['strTruckNumber'];
              me.data['dblOdometerEnd'] = 0;
              if(me.globalInfo.intShiftCounter == null || me.globalInfo.intShiftCounter == undefined || me.globalInfo.intShiftCounter == 0) {
                updateRecord.intShiftCounter = (me.globalInfo.intShiftCounter || 0) + 1; //daily counter
                updateRecord.dtmStartShiftDate = new Date(me.startDate);
                me.globalInfo.intShiftCounter = updateRecord.intShiftCounter;
                me.globalInfo.dtmStartShiftDate = updateRecord.dtmStartShiftDate;
                me.data['intShiftCounter'] = 1;
              }
              else {
                var _now = new Date(me.startDate);
                var _shift = new Date(me.globalInfo.dtmStartShiftDate);
                if(_now.getDate() > _shift.getDate()) {
                  updateRecord.intShiftCounter = 1
                  updateRecord.dtmStartShiftDate = new Date(me.startDate);
                  me.globalInfo.intShiftCounter = 1;
                  me.globalInfo.dtmStartShiftDate = updateRecord.dtmStartShiftDate;
                  me.data['intShiftCounter'] = 1;
                }
                else {
                  updateRecord.intShiftCounter = (me.globalInfo.intShiftCounter || 0) + 1; //daily counter
                  updateRecord.dtmStartShiftDate = new Date(me.startDate);
                  me.data['intShiftCounter'] = updateRecord.intShiftCounter;
                }
              }

              me.globalBRL.update(updateRecord);

              //Start Shift Process
              var addRecord = new Shift();
              addRecord.dtmShiftDate = new Date(me.startDate);
              addRecord.dtmStartTime = new Date(me.startDate);
              addRecord.dtmEndTime = null;
              addRecord.intLocationId = me.globalInfo.intLocationId;
              addRecord.strLocationName = me.globalInfo['strLocation'];
              addRecord.intShiftId = updateRecord.intShiftId;
              addRecord.intShiftNumber = updateRecord.intShiftCounter;
              addRecord.intTruckId = me.data['intTruckId'];
              addRecord.strTruckNumber = me.data['strTruckNumber'];
              addRecord.intDriverId = me.globalInfo.intDriverNumber;
              me.commonSQL.addData(addRecord['tablename'],addRecord);
              me.endDate = null;
              me.data['ysnShiftOnGoing'] = true;

              // me.endDate = null;
              // me.globalInfo['dtmEndShiftDate'] = null;

              // FOR REPORT
              me.commonSQL.getDataQuery('SELECT * FROM tblSMCompanySetup').then(data => {
                console.log(' SM SETUP ', data);
                localStorage.setItem('company_logo',atob(data[0].imgCompanyLogo) || '');
                localStorage.setItem('company_name',data[0].strCompanyName || '');
                localStorage.setItem('company_address',data[0].strAddress || '');
                localStorage.setItem('company_county',data[0].strCounty || '');
                localStorage.setItem('company_city',data[0].strCity || '');
                localStorage.setItem('company_state',data[0].strState || '');
                localStorage.setItem('company_zip',data[0].strZip || '');
                localStorage.setItem('company_country',data[0].strCountry || '');
              },err=>{
                console.log(err);
              });


              me.buttonStatus();

              loader.dismiss();
            });

          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

   async receiveOrder(record: any) {
     console.log(record);

     var me = this;
     me.counter = 0;

     let loader = await me.loadingCtrl.create({ message: "Fetching tables...", backdropDismiss: true });

     let confirm = await me.alertCtrl.create({
       message: 'Are you sure you want to continue?',
       buttons: [
         {
           text: 'Yes',
           handler: () => {
             loader.present();
             // me.i21syncDeviceService.processReceiveOrder(loader, record, me.data, me.globalInfo);
           }
         },
         {
           text: 'No',
           handler: () => {

           }
         }
       ]
     });
     confirm.present();
   }

  async receiveFullData(record: any) {
    console.log(record);

    var me = this;
    me.checkValidDB(record);
  }

  async checkValidDB(record: any) {
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
    me.commonSQL.getDataQuery('select * from syncdevicedata').then((data)=>{
      console.log(data);
      if(data.length > 0) {
        validatingDialog.dismiss();
        me.processReceiveFullData(record);
      }
      else {
        validatingDialog.dismiss();
        creatingDialog.present();
        // me.commonSQL.DropAndCreate(null, true).then(res => {
          me.syncDeviceDataBRL.defaultRecord().then((res)=>{
            console.log(res);
            creatingDialog.dismiss();
            me.processReceiveFullData(record);
          });
        // });
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
            me.processReceiveFullData(record);
          });
        });
      });
    });
  }

  async processReceiveFullData(record: any) {
    var me = this;
    me.counter = 0;

    let loader = await me.loadingCtrl.create({ message: "Fetching tables...", backdropDismiss: true });

    let confirm = await me.alertCtrl.create({
      message: 'Do you want to export fresh data?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loader.present();
            me.i21syncDeviceService.processReceiveFulldata(record, me.data, me.location, me.globalInfo, me).then((data) => {
              console.log(data);
              console.log('RELOAD Shift Screen ==> ', data);
              me.locationSetup();
              me.truckSetup();

              me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
                var _date = new Date();
                console.log(res);
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedFullData = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
                  me.shiftSetup();
                  me.userGlobalInfo();
                  loader.dismiss();
                });
              });
            }).catch(err=>{
              loader.dismiss();
              // me.message.showAlertInfoMessage('error 1');
            });
          }
        },
        {
          text: 'No',
          handler: () => {
            var me = this;
            me.updateScreenData(record);
            Configuration.navParams = record;
            me.router.navigateByUrl('/shift-download-export-data');
          }
        }
      ]
    });
    confirm.present();
  }

  openLoadInventory(record: any) {
    var me = this;
    me.updateScreenData(record);
    Configuration.navParams = record;
    me.router.navigateByUrl('/shift-loadinventory');
  }

  openInspection(record: any) {
    var me = this;
    this.updateScreenData(record);
    Configuration.navParams = record;
    me.router.navigateByUrl('/shift-inspection');
  }

  openHosepipingChek(record: any) {
    var me = this;
    me.updateScreenData(record);
    Configuration.navParams = record;
    me.router.navigateByUrl('/shift-hosepippingcheck');
  }

  openShiftReport() {
    this.navCtrl.navigateForward("ShiftreportPage");
  }

  async endShift() {
    var me = this;

    if (me.data['dblOdometerEnd'] == null || me.data['dblOdometerEnd'] == 0) {
      const alert = await me.alertCtrl.create({
        message: 'Odometer (end) is required.',
        buttons: [
          {
            text: 'Ok',
            handler: () => {
            }
          }
        ]
      });
      await alert.present();

      return;
    }

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to end the current shift?',
      buttons: [
        {
          text: 'Yes',
          handler: async () => {

              me.startShiftStatus = false;
              me.endShiftStatus = true;
              me.truckNumberStatus = true;

              me.strReviewShiftPDF = '';
              me.strHosePipingCheckPDF = '';
              me.strTruckInspectionPDF = '';
              me.LocationStatus = true;
              me.truckNumberStatus = false;
              me.startShiftStatus = false;
              me.hasOnGoingShift = false;
              me.disableEndShift = true;
              me.disableHosePiping = true;
              me.disableInspectionSheet = true;
              me.disableLoadInventory = true;
              me.disableOnGoingShift = false;
              me.disableReviewShift = true;

              // me.commonSQL.createTable('loadinventory');

              //End Shift Process
              console.log(' +++ reviewShift +++');
              await me.reviewShift();
              console.log('kenneth sam')
              me.noShiftStartingSetup();
              var updateRecord = new GlobalInfo();
              updateRecord.ysnShiftOnGoing = false;
              updateRecord.dtmEndShiftDate = new Date();
              updateRecord.dblOdometerEnd = me.data['dblOdometerEnd'] ;
              updateRecord.dblTotalizer1End = 0;
              updateRecord.dblTotalizer2End = 0;
              updateRecord.strTruckInspectionPDF = '';
              updateRecord.strHosePipingCheckPDF = '';
              updateRecord.strReviewShiftPDF = '';
              me.globalBRL.update(updateRecord);
              console.log(updateRecord);
              //End Shift Process
              var updateEndShift = new Shift();
              updateEndShift.dtmEndTime = new Date();
              updateEndShift.intEndOdometer = me.data['dblOdometerEnd'];

              me.commonSQL.updateData(updateEndShift.tablename,updateEndShift).then(()=>{
                me.buildSendData().then(()=>{
                  // var updateRecord = new GlobalInfo();
                  // updateRecord.dblOdometerEnd = null;
                  // updateRecord.strReviewShiftPDF = '';
                  // me.globalBRL.update(updateRecord);
                  me.openPDF2(me.strReviewShiftPDF);
                  me.userGlobalInfo();
                  me.buttonStatus();
                });
              });

              clearInterval(me.endDateInterval);
              var options = {
                year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit", second: "2-digit"
              };
              me.endDate = new Date().toLocaleTimeString("en-US", options);
              setTimeout(() => {
                // me.endDate = '';
              }, 5000);
          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

  async buildSendData(): Promise<any> {
    var me = this;
    let loader = await me.loadingCtrl.create({ message: "Sending data...", backdropDismiss: true });
    loader.present();

    return new Promise((resolve, reject) => {

      var _shift = [],
        _invoice = [],
        _invoiceitems = [],
        _invoicetaxcodes = [],
        _payments = [],
        _outofgass = [],
        _data = [],
        _tmAlertsInvoices = [];

      me.commonSQL.getData('shift').then(res => {
        _shift = res;
        console.log(`ShiftID is : ${_shift[_shift.length-1].intShiftId}`);
        me.commonSQL.getData('invoice').then(res => {
          _invoice = res.filter(x=> x.intShiftId == _shift[_shift.length-1].intShiftId);

          console.log(_invoice);
          me.commonSQL.getData('invoiceitems').then(res => {
            _invoiceitems = res;

            me.commonSQL.getData('invoicetaxcodes').then(res => {
              _invoicetaxcodes = res;

              _data = _shift[_shift.length-1]; //added (Kenneth 06.10.2021)
              // _data = _shift[0]; //commented(Kenneth 06.10.2021)
              _data['tblMBILInvoices'] = [];

              // for (var x = 0; x <= _invoice.length - 1; x++) {
              //   var _temp_invoice = [];
              //   _temp_invoice = _invoice[x];

              //   var _tmAlerts = {
              //     strCustomerNumber: _temp_invoice['strCustomerNumber'],
              //     intSiteNumber: _temp_invoice['intSiteNumber'],
              //     dtmDateDelivery: _temp_invoice['dtmDeliveryDate'],
              //     dblQuantity: _temp_invoice['dblQuantity'],
              //     dblPrice: _temp_invoice['dblPrice'],
              //     dblTotal: _temp_invoice['dblTotal']
              //   };
              //   me.tmAlerts.push(_tmAlerts);

              //   if (_invoice[x].ysnVoided != 'true' && _invoice[x].ysnSendToOffice == 'false') {
              //     for (var y = 0; y <= _invoiceitems.length - 1; y++) {
              //       if (_invoice[x].intOrderId == _invoiceitems[y].intOrderId) {
              //         _temp_invoice['tblMBILInvoiceItems'] = [];
              //         _temp_invoice['tblMBILInvoiceItems'].push(_invoiceitems[y]);
              //         _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'] = [];
              //         for (var z = 0; z <= _invoicetaxcodes.length - 1; z++) {
              //           if (_invoice[x].intOrderId == _invoicetaxcodes[z].intOrderId) {
              //             _temp_invoice['tblMBILInvoiceItems'][0]['tblMBILInvoiceTaxCodes'].push(_invoicetaxcodes[z]);
              //           }
              //         }
              //       }
              //     }
              //     console.log(_temp_invoice);
              //     _data['tblMBILInvoices'].push(_temp_invoice);
              //   }
              // }

              console.log('BUILDING INVOICE DATA');
              for (var x = 0; x <= _invoice.length - 1; x++) {
                var _temp_invoice = [];
                _temp_invoice = _invoice[x];
                if (_temp_invoice['ysnSendToOffice'] != 'true' &&  _temp_invoice['ysnVoided'] != 'true') {

                  var _tmAlerts = {
                    strCustomerNumber: _temp_invoice['strCustomerNumber'],
                    intSiteNumber: _temp_invoice['intSiteNumber'],
                    dtmDateDelivery: _temp_invoice['dtmDeliveryDate'],
                    dblQuantity: _temp_invoice['dblQuantity'],
                    dblPrice: _temp_invoice['dblPrice'],
                    dblTotal: _temp_invoice['dblTotal']
                  };
                  me.tmAlerts.push(_tmAlerts);

                  console.log(_temp_invoice);
                  for (var y = 0; y <= _invoiceitems.length - 1; y++) {
                    console.log(_invoiceitems[y]);
                    if (_invoice[x].intOrderId == _invoiceitems[y].intOrderId) {

                      console.log(_invoiceitems[y]);

                      if (!_temp_invoice['tblMBILInvoiceItems']) {
                        _temp_invoice['tblMBILInvoiceItems'] = [];
                      }
                      _temp_invoice['tblMBILInvoiceItems'].push(_invoiceitems[y]);

                      for (var z = 0; z <= _invoicetaxcodes.length - 1; z++) {
                        console.log(_invoicetaxcodes[z]);
                        if (_invoice[x].intOrderId == _invoicetaxcodes[z].intOrderId) {
                          if (!_temp_invoice['tblMBILInvoiceItems'][y]) {
                            _temp_invoice['tblMBILInvoiceItems'][y] = [];
                          }
                          if (_temp_invoice['tblMBILInvoiceItems'][y]) {
                            if (!_temp_invoice['tblMBILInvoiceItems'][y]['tblMBILInvoiceTaxCodes']) {
                              _temp_invoice['tblMBILInvoiceItems'][y]['tblMBILInvoiceTaxCodes'] = [];
                            }
                            _temp_invoice['tblMBILInvoiceItems'][y]['tblMBILInvoiceTaxCodes'].push(_invoicetaxcodes[z]);
                          }
                        }

                      }

                    }
                  }
                  console.log(_temp_invoice);
                  _data['tblMBILInvoices'].push(_temp_invoice);
                }
              }
              console.log('***shift with invoice data***');
              console.log(_data);

              me.commonSQL.getData('payment').then(res => {
                // _payments = res; //Commented(Kenneth)

                _payments = res.filter(x=> x.intShiftId == _shift[_shift.length-1].intShiftId);//Added kenneth

                _data['tblMBILPayments'] = [];

                for (var x = 0; x <= _payments.length - 1; x++) {
                  var _temp_payment = [];
                  _temp_payment = _payments[x];

                  if (_payments[x].ysnVoided != 'true' && _payments[x].ysnSendToOffice != 'true') {
                    console.log(_temp_payment);
                    _data['tblMBILPayments'].push(_temp_payment);
                  }
                }

                console.log(_data);
                console.log(' +++ SEND DATA TO SERVER +++');
                me.postraw('/mobilebilling/api/shift/syncentireshift', _data).subscribe(res => {
                  console.log('syncentireshift');
                  console.log(res);

                  loader.dismiss();
                  me.message.showAlertInfoMessage('Data successfully sent!');

                  resolve(true);

                  // // TM Alerts
                  // // 1 order 1 site 1 item
                  // for(var x = 0; x<= me.tmAlerts.length-1; x++) {
                  //   me.postraw('/tankmanagement/api/consumptionsite/emaildeliveries', me.tmAlerts[x]).subscribe(res => {
                  //     console.log('emaildeliveries');
                  //     console.log(res);
                  //   });
                  // }

                });

              });

            });
          });
        });
      });
    });
  }

  updateScreenData(record) {
    var me = this;

    var location = JSON.stringify(me.location);
    var strLocationName = JSON.parse(location).filter(function (item) {
      if (item.intCompanyLocationId == record.intLocation) {
        return item.strLocationName;
      }
      console.log(item);
    });

    var truck = JSON.stringify(me.truck);
    var strTruckNumber = JSON.parse(truck).filter(function (item) {
      if (item.intTruckId == record.intTruckId) {
        return item.strTruckNumber;
      }
      console.log(item);
    });

    if (strLocationName.length > 0) {
      me.data['strLocation'] = strLocationName[0].strLocationName;
      me.data['strLocationNumber'] = strLocationName[0].strLocationNumber;
      me.data['intLocation'] = strLocationName[0].intCompanyLocationId;
    }

    if (strTruckNumber.length > 0) {
      me.data['strTruckNumber'] = strTruckNumber[0].strTruckNumber;
      me.data['intTruckId'] = strTruckNumber[0].intTruckId;
    }

    var updateRecord = new GlobalInfo();
    updateRecord.intLocation = record.intLocation;
    updateRecord.strLocation = me.data['strLocation'];
    updateRecord.strLocationNumber = me.data['strLocationNumber'];
    updateRecord.intTruckId = me.data['intTruckId'];
    updateRecord.strTruckNumber = me.data['strTruckNumber'];
    me.globalBRL.update(updateRecord);
  }


  //#endregion

  //#region REPORT

  buildInvoiceReport() {
    var me = this;
    var _itemContent = [];
    var _invoiceContent = [];
    var _previousItem = '';
    var _item = {};
    var _body = { style: '', color: '', table: { widths: [], headerRows: 0, body: [{}] }, layout: '' };
    var _total = {};
    var _itemQuantity = 0;
    var _itemTotal = 0;
    for (var x = 0; x <= me.invoice['length'] - 1; x++)
    {
      if(me.invoice[x]['ysnVoided'] != true && me.invoice[x]['ysnVoided'] != 'true')
      {
        var record = me.invoice[x];
        var _itemTotalWithoutTax = ((record.dblQuantity || 0) * (record.dblPrice || 0));
        var _itemAmount = ((record.dblQuantity || 0) * (record.dblPrice || 0)) + (record.dblTotalTax || 0);
        if (_previousItem != me.invoice[x].strItemNo) {
          _itemContent = [];
          _itemTotal = 0;
          _itemQuantity = 0;
          _item = { text: 'Item: ' + record.strItemNo + ' - ' + record.strItemDescription, style: 'tableHeader', margin: [0, 5, 0, 3] };
          _body = { style: 'tableExample', color: '#444', table: { widths: [2, 65, '*', '*', 55, 60], headerRows: 1, body: [] }, layout: 'noBorders' };
          _body.table.body.push([{ text: '', alignment: 'left' }, { text: record.strCustomerNo, alignment: 'left' }, { text: record.strCustomerName, alignment: 'left' }, { text: record.strInvoiceNo, alignment: 'left' }, { text: record.dblQuantity || 0, alignment: 'right' }, { text: _itemTotalWithoutTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }]);
          _body.table.body.push([{ text: '', alignment: 'left' }, { text: '', alignment: 'left' }, { text: 'Latitude: ' + record.strLatitude, alignment: 'right' }, { text: 'Longitude: ' + record.strLongitude, alignment: 'left' }, { text: '', alignment: 'right' }, { text: '', alignment: 'right' }]);

          for(var z = 0; z <= me.invoiceTaxes['length'] - 1; z++) {
            var taxcode =  me.invoiceTaxes[z];

            if(taxcode.intItemId == record.intItemId && taxcode.intOrderId == record.intOrderId) {
              if(taxcode.dblTotalTax > 0) {
                console.log(taxcode);

                if(!taxcode.dblRate) taxcode.dblRate = 0;
                if(!taxcode.dblTotalTax) taxcode.dblTotalTax = 0;

                _body.table.body.push([{ text: '', alignment: 'left' }, { text: '', alignment: 'left' }, { text: '', alignment: 'left' }, { text:taxcode.strTaxCode || '', alignment: 'left' }, { text: taxcode.dblRate || 0, alignment: 'right' }, { text: taxcode.dblTotalTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }]);
              }
            }
          }
        }
        else {
          _body.table.body.push([{ text: '', alignment: 'left' }, { text: record.strCustomerNo, alignment: 'left' }, { text: record.strCustomerName, alignment: 'left' }, { text: record.strInvoiceNo, alignment: 'left' }, { text: record.dblQuantity || 0, alignment: 'right' }, { text: _itemTotalWithoutTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }]);

          for(var z = 0; z <= me.invoiceTaxes['length'] - 1; z++) {
            var taxcode =  me.invoiceTaxes[z];

            if(taxcode.intItemId == record.intItemId && taxcode.intOrderId == record.intOrderId) {
              if(taxcode.dblTotalTax > 0) {
                console.log(taxcode);

                if(!taxcode.dblRate) taxcode.dblRate = 0;
                if(!taxcode.dblTotalTax) taxcode.dblTotalTax = 0;

                _body.table.body.push([{ text: '', alignment: 'left' }, { text: '', alignment: 'left' }, { text: '', alignment: 'left' }, { text:taxcode.strTaxCode || '', alignment: 'left' }, { text: taxcode.dblRate || 0, alignment: 'right' }, { text: taxcode.dblTotalTax.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }]);
              }
            }
          }
        }

        _itemTotal = _itemTotal + _itemAmount;
        _itemQuantity = _itemQuantity + record.dblQuantity;
        _previousItem = me.invoice[x].strItemNo;

        var _next = 0;
        if (me.invoice[x + 1]) {
          _next = _next + 1;
        }
        console.log(`invoice length: ${me.invoice.filter(x=>x.ysnVoided != 'true').length}`);
        if (_previousItem != me.invoice[x + _next].strItemNo || me.invoice[x + 1] == null || me.invoice.filter(x=>x.ysnVoided != 'true').length == 1) {
          me.invoiceTotal = me.invoiceTotal + _itemTotal;
          _total = {
            style: 'tableExample', color: '#444', table: {
              widths: [2, 65, '*', '*', 55, 60], headerRows: 1,
              body: [
                [
                  '', '', '',
                  { text: 'Item Total:', alignment: 'right', style: 'tableHeader' },
                  { text: _itemQuantity, alignment: 'right', style: 'tableHeader' },
                  { text: '$' + _itemTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader' }
                ],
              ]
            },
            layout: 'noBorders'
          };

          _itemContent.push(_item);
          _itemContent.push(_body);
          _itemContent.push(_total);
          _invoiceContent.push(_itemContent);
        }
      }
      else {
        let _next = 0;
        if (me.invoice[x + 1]) {
          _next = _next + 1;
        }
        if ((me.invoice[x + 1] == null || me.invoice[0].ysnVoided != 'true') && me.invoice.filter(x=>x.ysnVoided != 'true').length != 1)  {
          _itemTotal = _itemTotal + _itemAmount;
          _itemQuantity = _itemQuantity + record.dblQuantity;
          me.invoiceTotal = me.invoiceTotal + _itemTotal;
          _total = {
            style: 'tableExample', color: '#444', table: {
              widths: [2, 65, '*', '*', 55, 60], headerRows: 1,
              body: [
                [
                  '', '', '',
                  { text: 'Item Total:', alignment: 'right', style: 'tableHeader' },
                  { text: _itemQuantity, alignment: 'right', style: 'tableHeader' },
                  { text: '$' + _itemTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader' }
                ],
              ]
            },
            layout: 'noBorders'
          };

          _itemContent.push(_item);
          _itemContent.push(_body);
          _itemContent.push(_total);
          _invoiceContent.push(_itemContent);
        } else {
          _itemContent.push(_item);
          _itemContent.push(_body);
          _itemContent.push(_total);
          _invoiceContent.push(_itemContent);
        }
      }
    }

    return _invoiceContent;
  }

  buildPaymentReport() {
    var me = this;
    var _itemContent = [];

    var _body = {
      style: 'tableExample',
      color: '#444',
      table: {
        widths: [2, 65, '*', '*', 65, 80],
        headerRows: 1,
        body: []
      },
      layout: 'noBorders'
    };

    for (var x = 0; x <= me.payment['length'] - 1; x++) {
      if(me.payment[x]['ysnVoided'] != true && me.payment[x]['ysnVoided'] != 'true')
      {
        var record = me.payment[x];
        _body.table.body.push([{ text: '', alignment: 'left' }, { text: record.strCustomerNo || '', alignment: 'left' }, { text: record.strCustomerName || '', alignment: 'left' }, { text: record.strPaymentNo || '', alignment: 'left' }, { text: record.strMethod || 'Check', alignment: 'right' }, { text: record.dblPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }]);
        me.paymentTotal = me.paymentTotal + record.dblPayment;
      }
    }

    _itemContent.push(_body);

    return _itemContent;
  }

  buildVoidReport() {
    var me = this;
    var _itemContent = [];

    var _body = {
      style: 'tableExample',
      color: '#444',
      table: {
        widths: [2, 65, '*', '*', 65, 80],
        headerRows: 1,
        body: []
      },
      layout: 'noBorders'
    };

    for (var x = 0; x <= me.invoice['length'] - 1; x++) {
      if(me.invoice[x]['ysnVoided'] == true || me.invoice[x]['ysnVoided'] == 'true')
      {
        var record = me.invoice[x];
        var _itemAmount = (record.dblQuantity || 0) * (record.dblPrice || 0);
        _body.table.body.push([{ text: '', alignment: 'left' }, { text: record.strCustomerNo || '', alignment: 'left' }, { text: record.strCustomerName || '', alignment: 'left' }, { text: record.strInvoiceNo || '', alignment: 'left' }, { text: 'Invoice', alignment: 'right' }, { text: _itemAmount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }]);
        // me.paymentTotal = me.paymentTotal + record.dblPayment;
      }
    }

    for (var x = 0; x <= me.payment['length'] - 1; x++) {
      if(me.payment[x]['ysnVoided'] == true || me.payment[x]['ysnVoided'] == 'true')
      {
        var record = me.payment[x];
        _body.table.body.push([{ text: '', alignment: 'left' }, { text: record.strCustomerNo || '', alignment: 'left' }, { text: record.strCustomerName || '', alignment: 'left' }, { text: record.strPaymentNo || '', alignment: 'left' }, { text: 'Payment', alignment: 'right' }, { text: record.dblPayment.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,') || 0.00, alignment: 'right' }]);
        // me.paymentTotal = me.paymentTotal + record.dblPayment;
      }
    }

    _itemContent.push(_body);

    return _itemContent;
  }

  async reviewShift() {
    var me = this;
    var _date = me.globalInfo['dtmStartShiftDate'] || me.startDate;
    var _dateonly = new Date(me.globalInfo['dtmStartShiftDate'] || me.startDate).toLocaleDateString();
    var _timeonly = new Date(me.globalInfo['dtmStartShiftDate'] || me.startDate).toLocaleTimeString();
    var _dateEnd = me.endDate || me.globalInfo['dtmEndShiftDate'];
    var _timeEndOnly = new Date(me.globalInfo['dtmEndShiftDate'] || me.endDate).toLocaleTimeString();
    var _invoiceContent = [];
    var _paymentContent = [];
    var _voidedContent = [];

    me.invoiceTotal = 0;
    _invoiceContent = me.buildInvoiceReport();
    console.log(_invoiceContent);

    me.paymentTotal = 0;
    _paymentContent = me.buildPaymentReport();
    console.log(_paymentContent);

    _voidedContent = me.buildVoidReport();
    console.log(_voidedContent);

    //TIME DIFFERENCE
    var _startTime: any = _timeonly;
    var _endTime: any = _timeEndOnly;
    var _shiftTimeDifference: any = '';
    var _dayDifference = 1;

    // if (_startTime.indexOf('PM') > 0 && _endTime.indexOf('AM') > 0) _dayDifference = 2;

    var startDate: any = new Date(me.globalInfo['dtmStartShiftDate'] || me.startDate);
    var endDate: any = new Date(me.globalInfo['dtmEndShiftDate'] || me.endDate);
    var timeDiff = Math.abs(startDate - endDate);

    var hh: any = Math.floor(timeDiff / 1000 / 60 / 60);
    if (hh < 10) {
      hh = '0' + hh;
    }
    timeDiff -= hh * 1000 * 60 * 60;
    var mm: any = Math.floor(timeDiff / 1000 / 60);
    if (mm < 10) {
      mm = '0' + mm;
    }
    timeDiff -= mm * 1000 * 60;
    var ss: any = Math.floor(timeDiff / 1000);
    if (ss < 10) {
      ss = '0' + ss;
    }

    var _counter = {};
    var _totalInvoice = 0;
    for (var x = 0; x <= me.invoice['length'] - 1; x++)
    {
      var _key =  me.invoice[x].strInvoiceNo;
      _counter[_key] = (_counter[_key] || 0) + 1;
    }
    _totalInvoice = Object.keys(_counter).length;

    _shiftTimeDifference = hh + ":" + mm + ":" + ss;

    if(_shiftTimeDifference.toString().indexOf('NaN') != -1) {
      _shiftTimeDifference = '00:00:00';
    }
    if(_timeEndOnly.toString().indexOf('Invalid') != -1) {
      _timeEndOnly = '00:00:00';
    }

    var docDefinition = {
      footer: function (currentPage, pageCount) {
        return {
          columns: [
            {
              text: [
                {
                  text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                }
              ],
              margin: [0, 0, 35, 0],
              alignment: 'right'
            }
          ]
        };
      },
      content: [
        { text: 'Driver\'s Shift Report', style: 'header' },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [40, '*', 60, '*', 35, 70, 40, 25],
            body: [
              [{ text: 'Driver:', alignment: 'left', style: 'tableHeader' }, { text: me.data['strFullName'] || '', alignment: 'left' },{ text: 'Truck No:', alignment: 'left', style: 'tableHeader' }, { text: me.data['strTruckNumber'] || '', alignment: 'left' }, { text: 'Date:', alignment: 'left', style: 'tableHeader' }, { text: _dateonly, alignment: 'left' }, { text: 'Shift:', alignment: 'left', style: 'tableHeader' }, { text: me.data['intShiftCounter'] || '0', alignment: 'left' }]
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n' },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [70, 78, 78, 78, 5, 65, 25, '*'],
            headerRows: 1,
            body: [
              [{ text: '', alignment: 'left', style: 'tableHeader' }, { text: 'Start', alignment: 'left', style: 'tableHeader' }, { text: 'End', alignment: 'left', style: 'tableHeader' }, { text: 'Diff', alignment: 'left', style: 'tableHeader' }, '', '', { text: 'No.', alignment: 'left', style: 'tableHeader' }, { text: 'Amount', alignment: 'left', style: 'tableHeader' }],
              [{ text: 'Time:', alignment: 'left', style: 'tableHeader' }, { text: _timeonly || '', alignment: 'left' }, { text: _timeEndOnly || '', alignment: 'left' }, { text: _shiftTimeDifference || '', alignment: 'left' }, '', { text: 'Invoices:', alignment: 'left', style: 'tableHeader' }, _totalInvoice, '$' + me.invoiceTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')],
              [{ text: 'Odometer:', alignment: 'left', style: 'tableHeader' }, { text: me.data['dblOdometerStart'] || '0', alignment: 'left' }, { text: me.data['dblOdometerEnd'] || '0', alignment: 'left' }, { text: (me.data['dblOdometerStart'] || 0) - (me.data['dblOdometerEnd'] || 0), alignment: 'left' }, '', { text: 'Receipts:', alignment: 'left', style: 'tableHeader' }, me.payment['length'], '$' + me.paymentTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')],
              [{ text: 'Meter 1:', alignment: 'left', style: 'tableHeader' }, { text: me.data['dblTotalizer1Start'] || '0', alignment: 'left' }, { text: me.data['dblTotalizer1End'] || '0', alignment: 'left' }, { text: (me.data['dblTotalizer1End'] || 0) - (me.data['dblTotalizer1Start'] || 0), alignment: 'left' }, '', '', '', ''],
              [{ text: 'Meter 2:', alignment: 'left', style: 'tableHeader' }, { text: me.data['dblTotalizer2Start'] || '0', alignment: 'left' }, { text: me.data['dblTotalizer2End'] || '0', alignment: 'left' }, { text: (me.data['dblTotalizer2End'] || 0) - (me.data['dblTotalizer2Start'] || 0), alignment: 'left' }, '', '', '', ''],
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n' },
        { text: '\n' },
        { text: 'Deliveries by Item', alignment: 'left', style: 'tableHeader', margin: [0, 0, 0, 10], },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [2, 65, '*', '*', 55, 60],
            headerRows: 1,
            body: [
              [{ text: '', alignment: 'left', style: 'tableHeader' }, { text: 'Cust No:', alignment: 'left', style: 'tableHeader' }, { text: 'Name:', alignment: 'left', style: 'tableHeader' }, { text: 'Invoice No.', alignment: 'left', style: 'tableHeader' }, { text: 'Quantity', alignment: 'right', style: 'tableHeader' }, { text: 'Amount', alignment: 'right', style: 'tableHeader' }],
            ]
          },
          layout: 'noBorders'
        },
        { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
        // ++++++++++++++++++++++++++++++++++
        // BEGIN - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++
        // {text: 'Item: PRO - Propane Home Use', style: 'tableHeader', margin: [0, 5, 0, 3]},
        // {
        //   style: 'tableExample',
        //   color: '#444',
        //   table: {
        //     widths: [20, 65, '*', '*', 65, 80],
        //     headerRows: 1,
        //     body: [
        //       [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
        //         [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
        //     ]
        //   },
        //   layout: 'noBorders'
        // },
        // {
        //   style: 'tableExample',
        //   color: '#444',
        //   table: {
        //     widths: [20, 65, '*', '*', 65, 80],
        //     headerRows: 1,
        //     body: [
        //       ['','','', {text: 'Item Total:', alignment: 'right', style: 'tableHeader'},{text: 772.4, alignment: 'right', style: 'tableHeader'},{text: '$1,324.26', alignment: 'right', style: 'tableHeader'}],
        //     ]
        //   },
        //   layout: 'noBorders'
        // },

        // _invoiceContent.toString(),
        // {items: '\n'},

        // ++++++++++++++++++++++++++++++++++
        // END - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++
        { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
        {
          style: 'tableExample',
          color: '#444',
          margin: [0, 5, 0, 0],
          table: {
            widths: [20, 65, '*', '*', 65, 80],
            headerRows: 1,
            body: [
              ['', '', '', { text: 'Total Deliveries:', alignment: 'right', style: 'tableHeader' }, '', { text: '$' + me.invoiceTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader' }],
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n' },
        { text: '\n' },
        { text: 'Payment Receipts', alignment: 'left', style: 'tableHeader', margin: [0, 0, 0, 10] },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [2, 65, '*', '*', 65, 80],
            headerRows: 1,
            body: [
              [{ text: '', alignment: 'left', style: 'tableHeader' }, { text: 'Cust No:', alignment: 'left', style: 'tableHeader' }, { text: 'Name:', alignment: 'left', style: 'tableHeader' }, { text: 'Receipt No.', alignment: 'left', style: 'tableHeader' }, { text: 'Method', alignment: 'right', style: 'tableHeader' }, { text: 'Amount', alignment: 'right', style: 'tableHeader' }],
            ]
          },
          layout: 'noBorders'
        },
        { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
        // ++++++++++++++++++++++++++++++++++
        // BEGIN - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++
        // {
        //   style: 'tableExample',
        //   color: '#444',
        //   table: {
        //     widths: [20, 65, '*', '*', 65, 80],
        //     headerRows: 1,
        //     body: [
        //       [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
        //         [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
        //     ]
        //   },
        //   layout: 'noBorders'
        // },

        // _paymentContent.toString(),

        // ++++++++++++++++++++++++++++++++++
        // END - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++
        { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
        {
          style: 'tableExample',
          color: '#444',
          margin: [0, 5, 0, 0],
          table: {
            widths: [20, 65, '*', '*', 60, 85],
            headerRows: 1,
            body: [
              ['', '', '', { text: 'Total Receipts:', alignment: 'right', style: 'tableHeader' }, '', { text: '$' + me.paymentTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader' }],
            ]
          },
          layout: 'noBorders'
        },
        { text: '\n' },
        { text: '\n' },
        { text: 'Void Transactions', alignment: 'left', style: 'tableHeader', margin: [0, 0, 0, 10] },
        {
          style: 'tableExample',
          color: '#444',
          table: {
            widths: [2, 65, '*', '*', 65, 80],
            headerRows: 1,
            body: [
              [{ text: '', alignment: 'left', style: 'tableHeader' }, { text: 'Cust No:', alignment: 'left', style: 'tableHeader' }, { text: 'Name:', alignment: 'left', style: 'tableHeader' }, { text: 'Transaction No.', alignment: 'left', style: 'tableHeader' }, { text: 'Type', alignment: 'right', style: 'tableHeader' }, { text: 'Amount', alignment: 'right', style: 'tableHeader' }],
            ]
          },
          layout: 'noBorders'
        },
        { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
        // ++++++++++++++++++++++++++++++++++
        // BEGIN - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++
        // {
        //   style: 'tableExample',
        //   color: '#444',
        //   table: {
        //     widths: [20, 65, '*', '*', 65, 80],
        //     headerRows: 1,
        //     body: [
        //       [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
        //         [{text: '', alignment: 'left'}, {text: '00012345', alignment: 'left'}, {text: 'Customer Name #1', alignment: 'left'}, {text: 'SI-M-20171127073012', alignment: 'left'},{text: '257.4', alignment: 'right'},{text: '$441.42', alignment: 'right'}],
        //     ]
        //   },
        //   layout: 'noBorders'
        // },

        // _paymentContent.toString(),

        // ++++++++++++++++++++++++++++++++++
        // END - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++
        // { canvas: [{ type: 'line', x1: 0, y1: 5, x2: 595 - 2 * 40, y2: 5, lineWidth: 1 }] },
        // {
        //   style: 'tableExample',
        //   color: '#444',
        //   margin: [0, 5, 0, 0],
        //   table: {
        //     widths: [20, 65, '*', '*', 60, 85],
        //     headerRows: 1,
        //     body: [
        //       ['', '', '', { text: 'Total Receipts:', alignment: 'right', style: 'tableHeader' }, '', { text: '$' + me.paymentTotal.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'), alignment: 'right', style: 'tableHeader' }],
        //     ]
        //   },
        //   layout: 'noBorders'
        // },
        { text: '\n' },

      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
          margin: [0, 10, 0, 10],
          fontfamily: 'Wingdings'
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        tableHeader: {
          bold: true,
          fontSize: 13,
          color: 'black'
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%'
        },
        body: {
          fontSize: 12
        }
      },
      defaultStyle: {
        fontSize: 11.5
      }
    };

    console.log(docDefinition);

    var _positionStart = 9;
    // STARTING AT #9
    if (_invoiceContent.length > 0) {
       if (_invoiceContent[0].length) {
        for (var x = 0; x <= _invoiceContent.length - 1; x++) {
          for (var y = 0; y <= _invoiceContent[x].length - 1; y++) {
            docDefinition['content'].splice(_positionStart + y, 0, _invoiceContent[x][y]);
          }
          _positionStart = _positionStart + _invoiceContent[x].length;
        }
       }
    }

    // STARTING AT #16
    _positionStart = _positionStart + 7;
    if (_paymentContent.length > 0) {
      if (_paymentContent[0].table.body.length > 0) {
        for (var x = 0; x <= _paymentContent.length - 1; x++) {
          docDefinition['content'].splice(_positionStart, 0, _paymentContent[x]);
          _positionStart = _positionStart + 1;
        }
      }
    }

    // STARTING AT #23
    if (_voidedContent.length > 0) {
      if (_voidedContent[0].table.body.length > 0) {
        _positionStart = _positionStart + 7;
        for (var x = 0; x <= _voidedContent.length - 1; x++) {
          docDefinition['content'].splice(_positionStart, 0, _voidedContent[x]);
          _positionStart = _positionStart + 1;
        }
      }
    }

    var _now = new Date(),
      _filename = "Shift-Review_" + _now.getFullYear() + ("0" + (_now.getMonth() + 1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours() + 1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
    _filename = _filename.replace(/[/\\?%*:|"<>]/g, '');
    me.reportService.create(docDefinition, _filename, false, false);

    // UPDATE SHIFT
    var _update = new GlobalInfo();
    _update.intGlobal = me.globalInfo.intGlobal;
    _update.strReviewShiftPDF = _filename + '.pdf';
    me.globalBRL.update(_update);
    me.strReviewShiftPDF = _filename + '.pdf';
    me.buttonStatus();
    me.doInsertPDFInfo( _filename + '.pdf');
    let loader = await me.loadingCtrl.create({ message: "Creating shift report...", backdropDismiss: true });
    var reloadPDF = function () {
      me.getPDFList();
      loader.dismiss();
      clearInterval(me.pdfInterval);
    };

    loader.present();
    me.pdfInterval = setInterval(function () { reloadPDF() }, 3500);
  }

  doInsertPDFInfo(_filename:string){
    console.log('start doInsertPDFInfo');
    let me = this,
        pdfinfo = new tblMBILPDF();
        let query = " tblMBILPDF where intDriverId = '" + me.globalInfo.intDriverNumber + "' " +
        " and intShiftId = '" + me.globalInfo.intShiftCounter + "' " +
        " and strFileType = 'SHIFT_REPORT'";

      console.log(query);
      me.commonSQL.deleteDataQuery(query).then(result=>{
          me.commonSQL.getData("shift").then(res=>{
            console.log('data get from shift');
            let shiftdata = res.find(x => me.globalInfo.intShiftId);
            pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
            pdfinfo.intShiftId = me.globalInfo.intShiftCounter;
            pdfinfo.intDriverId = me.globalInfo.intDriverNumber;
            pdfinfo.strFileName = _filename;
            pdfinfo.strFileType = "SHIFT_REPORT";
            me.commonSQL.addData('tblMBILPDF',pdfinfo).then(res=>{
              console.log('successfully inserted to tblMBILPDF');
              me.commonSQL.getDataQuery("select * from tblMBILPDF where intDriverId = " + me.globalInfo.intDriverNumber +
                                      " and intShiftId = " + me.globalInfo.intShiftCounter).then(result=> console.log(result));
            });
          })
      });
  }

  openPDF2(filename) {
    let me = this,
        filepath = me.file.dataDirectory + "reports/";

    me.fileOpener.open(filepath + filename, 'application/pdf');
  }

  //#endregion
  
}
