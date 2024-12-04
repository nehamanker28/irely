import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { Configuration } from '../../framework/_common/configuration/configuration';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { VehicleInspection } from '../../framework/models/vehicleinspection';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { ReportService } from '../../providers/report.service';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';

@Component({
  selector: 'app-shift-inspection',
  templateUrl: './shift-inspection.page.html',
  styleUrls: ['./shift-inspection.page.scss'],
})
export class ShiftInspectionPage implements OnInit {

  data = new VehicleInspection();
  pdfObj = null;
  globalinfo: GlobalInfo;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public commonSQL: CommonSQL,
              private reportService: ReportService) {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    var me = this;
    console.log('ShiftInspectionPage');

    me.setup();
  }

  async setup() {
    var me = this;

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    me.globalinfo = new GlobalInfo();
    me.globalinfo.intUserMobileId = Configuration.navParams.intUserMobileId;
    me.globalinfo.intGlobal = Configuration.navParams.intGlobal;
    me.globalinfo.intUserId = Configuration.navParams.intUserId;
    me.globalinfo.strFullName = Configuration.navParams.strFullName;
    me.globalinfo.intDriverNumber = Configuration.navParams.intDriverNumber;
    me.globalinfo.intShiftCounter = Configuration.navParams.intShiftCounter;
    me.globalinfo.strTruckNumber = Configuration.navParams.strTruckNumber || "";

    var _vehicle = new VehicleInspection();
    me.commonSQL.getData(_vehicle.tablename).then(res => {
      console.log(res);

      if(res.length > 0) {
        me.data = res[0];

        me.data['mapping'] = _vehicle.mapping;
        me.data['tablename'] = _vehicle.tablename;

        console.log(me.data);
        me.data['strTruckNumber'] = me.globalinfo.strTruckNumber;
        loader.dismiss();
      }
      else {
        me.commonSQL.addData(_vehicle.tablename,_vehicle).then(res => {
          me.commonSQL.getRecord(_vehicle.tablename).then(res => {
            console.log(res);
            me.data = res;

            me.data['mapping'] = _vehicle.mapping;
            me.data['tablename'] = _vehicle.tablename;

            console.log(me.data);
            me.data['strTruckNumber'] = me.globalinfo.strTruckNumber;
            loader.dismiss();
          })
        });
      }
    });
  }

  getDateFormat(value) {
    var options = {
      year: "numeric", month: "short",
      day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return value.toLocaleTimeString("en-US", options);
  }

  async save(record: any) {
    var me = this;
    var _date = new Date();
    var _update = new GlobalInfo();

    let loader = await me.loadingCtrl.create({message: "Saving...", backdropDismiss: true});
    loader.present();

    me.commonSQL.updateData(record.tablename,record).then(res => {
      var _filename = this.createPdf(record);
      me.doInsertPDFInfo(_filename + '.pdf');
      // UPDATE SHIFT
      _update.intGlobal = me.globalinfo.intGlobal;
      _update.dtmTruckInspection = me.getDateFormat(_date);
      _update.strTruckInspectionPDF = _filename + '.pdf';
      me.commonSQL.updateData(_update.tablename,_update).then(res=> {
        loader.dismiss();

        me.navCtrl.pop().then(() => {
          // me.events.publish('truckinspection', _update);
        });

      });

    });
  }

  uncheck(option: string) {
    var me = this;
    var record = new VehicleInspection();
    var _table = record.mapping;

    if(option == 'all') {
      for(var key in _table){
        if(key != 'strComments' && key != 'strTruckNumber' && key != 'intInspection') {
          me.data[key] = false;
        }
      }
      // me.data['ysnNoDefects'] = true;
    }
    else {
      me.data['ysnNoDefects'] = false;
    }
  }

  logo() {
    return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
  }

  createPdf(record: any) {
    console.log(record);

    var me = this;
    var irelyImage = me.logo();

    var ysnAirCompressorAndLines = 'Air Compressor and Lines',
        ysnBatteryAndConnections = 'Battery and Connections',
        ysnBodyCabDoors = 'Body/Cab/Door',
        ysnBrakeAccessories = 'Brake Accessories',
        ysnBrakes = 'Brake',
        ysnCluth = 'Cluth',
        ysnDriveLine = 'Drive Line',
        ysnEngine = 'Engine',
        ysnExhaust = 'Exhaust',
        ysnFuelLeak = 'Fuel Leak',
        ysnOilLeak = 'Oil Leak',
        ysnCoolantLeak = 'Coolant Leak',
        ysnFireExtinguisher = 'Fire Extinguisher',
        ysnFrontAxle = 'Front Axle',
        ysnFuelTanks = 'Fuel Tanks',
        ysnHeaterDefroster = 'Heater/Defroster',
        ysnHorn = 'Horn',
        ysnLightsReflectors = 'Lights/Reflectors',
        ysnGauges = 'Gauges',
        ysnMirrors = 'Mirrors',
        ysnMudFlaps = 'Mud Flaps',
        ysnOilPressure = 'Oil Pressure',
        ysnPlacards = 'Placards',
        ysnRadiator = 'Radiator',
        ysnRearEndAxleStuds = 'Rear End/Axle Studs',
        ysnSafetyEquipment = 'Safety Equipmen',
        ysnSprings = 'Springs',
        ysnSteering = 'Steering',
        ysnTachograph = 'Tachograph',
        ysnTanks = 'Tanks',
        ysnTires = 'Tires',
        ysnTransmission = 'Transmission',
        ysnUnloadingHosesPumps = 'Unloading Hoses/Pumps',
        ysnWheelsRimsLugs = 'Wheels/Rims/Lugs',
        ysnWindows = 'Windows',
        ysnWindshieldWipers = 'Windshield Wipers',
        ysnOthers = 'Other',
        ysnNoDefects = 'No Defects',
        strComments = '',
        _indent1 = 0, _indent2 = 0, _indent3 = 0, _indent4 = 0, _indent5 = 0, _indent6 = 0, _indent7 = 0, _indent8 = 0, _indent9 = 0, _indent10 = 0,
        _indent11 = 0, _indent12 = 0, _indent13 = 0, _indent14 = 0, _indent15 = 0, _indent16 = 0, _indent17 = 0, _indent18 = 0, _indent19 = 0, _indent20 = 0,
        _indent21 = 0, _indent22 = 0, _indent23 = 0, _indent24 = 0, _indent25 = 0, _indent26 = 0, _indent27 = 0, _indent28 = 0, _indent29 = 0, _indent30 = 0,
        _indent31 = 0, _indent32 = 0, _indent33 = 0, _indent34 = 0, _indent35 = 0, _indent36 = 0, _indent37 = 0, _indent38 = 0;

    if(record.ysnAirCompressorAndLines == true) {
      ysnAirCompressorAndLines = 'X ' + ysnAirCompressorAndLines;
    }
    else{
      _indent1 = 10;
    }
    if(record.ysnBatteryAndConnections == true) {
      ysnBatteryAndConnections = 'X ' + ysnBatteryAndConnections;
    }
    else{
      _indent2 = 10;
    }
    if(record.ysnBodyCabDoors == true) {
      ysnBodyCabDoors = 'X ' + ysnBodyCabDoors;
    }
    else{
      _indent3 = 10;
    }
    if(record.ysnBrakeAccessories == true) {
      ysnBrakeAccessories = 'X ' + ysnBrakeAccessories;
    }
    else{
      _indent4 = 10;
    }
    if(record.ysnBrakes == true) {
      ysnBrakes = 'X ' + ysnBrakes;
    }
    else{
      _indent5 = 10;
    }
    if(record.ysnCluth == true) {
      ysnCluth = 'X ' + ysnCluth;
    }
    else{
      _indent6 = 10;
    }
    if(record.ysnDriveLine == true) {
      ysnDriveLine = 'X ' + ysnDriveLine;
    }
    else{
      _indent7 = 10;
    }
    if(record.ysnEngine == true) {
      ysnEngine = 'X ' + ysnEngine;
    }
    else{
      _indent8 = 10;
    }
    if(record.ysnExhaust == true) {
      ysnExhaust = 'X ' + ysnExhaust;
    }
    else{
      _indent9= 17;
    }
    if(record.ysnFuelLeak == true) {
      ysnFuelLeak = 'X ' + ysnFuelLeak;
    }
    else{
      _indent10 = 10;
    }
    if(record.ysnOilLeak == true) {
      ysnOilLeak = 'X ' + ysnOilLeak;
    }
    else{
      _indent11 = 10;
    }
    if(record.ysnCoolantLeak == true) {
      ysnCoolantLeak = 'X ' + ysnCoolantLeak;
    }
    else{
      _indent12 = 10;
    }
    if(record.ysnFrontAxle == true) {
      ysnFrontAxle = 'X ' + ysnFrontAxle;
    }
    else{
      _indent13 = 10;
    }
    if(record.ysnFuelTanks == true) {
      ysnOilLeak = 'X ' + ysnFuelTanks;
    }
    else{
      _indent14 = 10;
    }
    if(record.ysnHeaterDefroster == true) {
      ysnHeaterDefroster = 'X ' + ysnHeaterDefroster;
    }
    else{
      _indent15 = 10;
    }
    if(record.ysnHorn == true) {
      ysnHorn = 'X ' + ysnHorn;
    }
    else{
      _indent16 = 10;
    }
    if(record.ysnLightsReflectors == true) {
      ysnLightsReflectors = 'X ' + ysnLightsReflectors;
    }
    else{
      _indent17 = 10;
    }
    if(record.ysnGauges == true) {
      ysnGauges = 'X ' + ysnGauges;
    }
    else{
      _indent18 = 10;
    }
    if(record.ysnMirrors == true) {
      ysnMirrors = 'X ' + ysnMirrors;
    }
    else{
      _indent19 = 10;
    }
    if(record.ysnMudFlaps == true) {
      ysnMudFlaps = 'X ' + ysnMudFlaps;
    }
    else{
      _indent20 = 10;
    }
    if(record.ysnOilPressure == true) {
      ysnOilPressure = 'X ' + ysnOilPressure;
    }
    else{
      _indent21 = 10;
    }
    if(record.ysnPlacards == true) {
      ysnPlacards = 'X ' + ysnPlacards;
    }
    else{
      _indent22 = 10;
    }
    if(record.ysnRadiator == true) {
      ysnRadiator = 'X ' + ysnRadiator;
    }
    else{
      _indent23 = 10;
    }
    if(record.ysnRearEndAxleStuds == true) {
      ysnRearEndAxleStuds = 'X ' + ysnRearEndAxleStuds;
    }
    else{
      _indent24 = 10;
    }
    if(record.ysnSafetyEquipment == true) {
      ysnSafetyEquipment = 'X ' + ysnSafetyEquipment;
    }
    else{
      _indent25 = 10;
    }
    if(record.ysnSprings == true) {
      ysnSprings = 'X ' + ysnSprings;
    }
    else{
      _indent26 = 10;
    }
    if(record.ysnSteering == true) {
      ysnSteering = 'X ' + ysnSteering;
    }
    else{
      _indent27 = 10;
    }
    if(record.ysnTachograph == true) {
      ysnTachograph = 'X ' + ysnTachograph;
    }
    else{
      _indent28 = 10;
    }
    if(record.ysnTanks == true) {
      ysnTanks = 'X ' + ysnTanks;
    }
    else{
      _indent29 = 10;
    }
    if(record.ysnTires == true) {
      ysnTires = 'X ' + ysnTires;
    }
    else{
      _indent30 = 10;
    }
    if(record.ysnTransmission == true) {
      ysnTransmission = 'X ' + ysnTransmission;
    }
    else{
      _indent31 = 10;
    }
    if(record.ysnUnloadingHosesPumps == true) {
      ysnUnloadingHosesPumps = 'X ' + ysnUnloadingHosesPumps;
    }
    else{
      _indent32 = 10;
    }
    if(record.ysnWheelsRimsLugs == true) {
      ysnWheelsRimsLugs = 'X ' + ysnWheelsRimsLugs;
    }
    else{
      _indent33 = 10;
    }
    if(record.ysnWindows == true) {
      ysnWindows = 'X ' + ysnWindows;
    }
    else{
      _indent34 = 10;
    }
    if(record.ysnWindshieldWipers == true) {
      ysnWindshieldWipers = 'X ' + ysnWindshieldWipers;
    }
    else{
      _indent35 = 10;
    }
    if(record.ysnOthers == true) {
      ysnOthers = 'X ' + ysnOthers;
    }
    else{
      _indent36 = 10;
    }
    if(record.ysnNoDefects == true) {
      ysnNoDefects = 'X ' + ysnNoDefects;
    }
    else{
      _indent37 = 10;
    }
    if(record.ysnFireExtinguisher == true) {
      ysnFireExtinguisher = 'X ' + ysnFireExtinguisher;
    }
    else{
      _indent38 = 10;
    }
    strComments = record.strComments || '';

    var docDefinition = {
      content: [
        {
          table: {
            widths: [ 155, '*', 175 ],

            body: [
              [
                { image: irelyImage, width: 150 },
                {},
                [
                  {
                    table: {
                      body: [
                        ['Date:', new Date().toLocaleString()],
                        ['Shift:', me.globalinfo.intShiftCounter],
                        ['Driver:', me.globalinfo.intDriverNumber + ' - ' + me.globalinfo.strFullName],
                        ['Truck:', me.globalinfo.strTruckNumber]
                      ]
                    },
                    layout: 'noBorders'
                  }
                ]
              ]
            ]
          },
          layout: 'noBorders'
        },

        { text: 'VEHICLE INSPECTION REPORT', style: 'header' },

        {
          table: {
            headerRows: 1,
            widths: [ '*', '*', '*' ],

            body: [
              [ { text: ysnNoDefects, margin: [_indent37,0]}, { text: '', margin: [0,0]}, { text: '', margin: [0,0]} ],
              [ { text: ysnAirCompressorAndLines, margin: [_indent1,0]}, { text: ysnFrontAxle, margin: [_indent13,0]}, { text: ysnSprings, margin: [_indent26,0]} ],
              [ { text: ysnBatteryAndConnections, margin: [_indent2,0]}, { text: ysnFuelTanks, margin: [_indent14,0]}, { text: ysnSteering, margin: [_indent27,0]} ],
              [ { text: ysnBodyCabDoors, margin: [_indent3,0]}, { text: ysnHeaterDefroster, margin: [_indent15,0]}, { text: ysnTachograph, margin: [_indent28,0]} ],
              [ { text: ysnBrakeAccessories, margin: [_indent4,0]}, { text: ysnHorn, margin: [_indent16,0]}, { text: ysnTanks, margin: [_indent29,0]} ],
              [ { text: ysnBrakes, margin: [_indent5,0]}, { text: ysnLightsReflectors, margin: [_indent17,0]}, { text: ysnTires, margin: [_indent30,0]} ],
              [ { text: ysnCluth, margin: [_indent6,0]}, { text: ysnGauges, margin: [_indent18,0]}, { text: ysnTransmission, margin: [_indent31,0]} ],
              [ { text: ysnDriveLine, margin: [_indent7,0]}, { text: ysnMirrors, margin: [_indent19,0]}, { text: ysnUnloadingHosesPumps, margin: [_indent32,0]} ],
              [ { text: ysnEngine, margin: [_indent8,0]}, { text: ysnMudFlaps, margin: [_indent20,0]}, { text: ysnWheelsRimsLugs, margin: [_indent33,0]} ],
              [ { text: ysnExhaust, margin: [_indent9,0]}, { text: ysnOilPressure, margin: [_indent21,0]}, { text: ysnWindows, margin: [_indent34,0]} ],
              [ { text: ysnFuelLeak, margin: [_indent10,0]}, { text: ysnPlacards, margin: [_indent22,0]}, { text: ysnWindshieldWipers, margin: [_indent35,0]} ],
              [ { text: ysnOilLeak, margin: [_indent11,0]}, { text: ysnRadiator, margin: [_indent23,0]}, { text: ysnOthers, margin: [_indent36,0]} ],
              [ { text: ysnCoolantLeak, margin: [_indent12,0]}, { text: ysnRearEndAxleStuds, margin: [_indent24,0]}, { text: '', margin: [0,0]} ],
              [ { text: ysnFireExtinguisher, margin: [_indent38,0]}, { text: ysnSafetyEquipment, margin: [_indent25,0]}, { text: '', margin: [0,0]} ]
            ]
          },
          layout: 'noBorders'
        },

        { text: 'Comments:', alignment: 'left', margin: [0, 20, 0, 20], color: 'red' },
        { text: strComments },
        { text: 'The above items have been inspected and no defects or deficiencies have been discovered or reported.', alignment: 'left' },
        { text: 'Driver Signature: ______________________________ Date: __________________________', margin: [0, 20, 0, 30] },
        { text: 'I certify that the defects and deficiences noted above have been corrected.' },
        { text: 'I cretify that correction of the defects and deficiendscies noted above is unnecessary for that safe operation of the vehicle.' },

        { text: 'Mechanic Signature: ____________________________ Date: __________________________', margin: [0, 30, 0, 40] },

        { text: 'I certify that I have reviewed the above report and acknowledge that there is a certification that all repairs have been performed.' },
        { text: 'Driver Signature: ______________________________ Date: __________________________', margin: [0, 30, 0, 20] }

      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
          margin: [0, 20, 0, 20],
          fontfamily: 'Wingdings'
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%'
        }
      }
    }

    var _now = new Date(),
        _filename = "Inspection_" + me.data['strTruckNumber'] + "_" +_now.getFullYear() + ("0"+(_now.getMonth()+1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours()+1).slice(-2) + ("0" + _now.getMinutes()).slice(-2) + '_' + me.data['strTruckNumber'].replace(/[/\\?%*:|"<>]/g, '_');
    _filename = _filename.replace(/[/\\?%*:|"<>]/g, '');
    me.reportService.create(docDefinition, _filename); //.replace(/\//g,'').replace(/\\/g,'').replace(/:/g,'').replace(/\?/g,'').replace(/"/g,'').replace(/</g,'').replace(/>/g,'').replace(/\|/g,''));

    return _filename;
  }
  doInsertPDFInfo(_filename:string){
    console.log('start doInsertPDFInfo');
    let me = this,
        pdfinfo = new tblMBILPDF();
      console.log(me.globalinfo);

        me.commonSQL.getData("shift").then(res=>{
          console.log('data get from shift');
          let shiftdata = res[res.length-1];
          pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
          pdfinfo.intShiftId = me.globalinfo.intShiftCounter;
          pdfinfo.intDriverId = me.globalinfo.intDriverNumber;
          pdfinfo.strFileName = _filename;
          pdfinfo.strFileType = "INSPECTION";
          me.commonSQL.addData('tblMBILPDF',pdfinfo).then(res=>{
            console.log('successfully inserted to tblMBILPDF');
            me.commonSQL.getData('tblMBILPDF').then(result=> console.log(result));
          });
        })

  }
}
