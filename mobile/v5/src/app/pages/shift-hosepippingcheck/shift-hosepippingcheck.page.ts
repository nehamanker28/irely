import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, Platform } from '@ionic/angular';

import { ReportService } from '../../providers/report.service';

import { GlobalInfo } from '../../framework/models/globalinfo';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { HosepipingCheck } from '../../framework/models/hosepipingcheck';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';

@Component({
  selector: 'app-shift-hosepippingcheck',
  templateUrl: './shift-hosepippingcheck.page.html',
  styleUrls: ['./shift-hosepippingcheck.page.scss'],
})
export class ShiftHosepippingcheckPage implements OnInit {
  data: object = [];
  pdfObj = null;
  globalinfo: GlobalInfo;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public commonSQL: CommonSQL,
              private globalInfoBRL: GlobalInfoBRL,
              private reportService: ReportService) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    var me = this;
    console.log('ShiftHosepippingcheckPage');

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

    var _hosepiping = new HosepipingCheck();
    me.commonSQL.getData(_hosepiping.tablename).then(res => {
      console.log(res);

      if(res.length > 0) {
        me.data = res[0];
        me.data['mapping'] = _hosepiping.mapping;
        me.data['tablename'] = _hosepiping.tablename;
        me.data['strTruckNumber'] = me.globalinfo.strTruckNumber;
        loader.dismiss();
      }
      else {
        me.commonSQL.addData(_hosepiping.tablename,_hosepiping).then(res => {
          me.commonSQL.getRecord(_hosepiping.tablename).then(res => {
            console.log(res);
            me.data = res;
            me.data['mapping'] = _hosepiping.mapping;
            me.data['tablename'] = _hosepiping.tablename;
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
      var _filename = me.createPdf(record);
      me.doInsertPDFInfo(_filename + '.pdf');
       // UPDATE SHIFT
       _update.intGlobal = me.globalinfo.intGlobal;
       _update.dtmHosePipingCheck = me.getDateFormat(_date);
       _update.strHosePipingCheckPDF = _filename + '.pdf';
       me.globalInfoBRL.update(_update).then(res=> {
         loader.dismiss();

         me.navCtrl.pop().then(() => {
          //  me.events.publish('hosepipingcheck', _update);
         });

       });

    });
  }

  uncheck(data: any, field: string, value: boolean) {
    console.log(data[field]);
    data[field] = value;
  }

  logo() {
    return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
  }

  createPdf(record: any) {
    console.log(record);

    var me = this;
    var irelyImage = me.logo();

    var check1ok = '',
        check1defect = '',
        check2ok = '',
        check2defect = '',
        check3ok = '',
        check3defect = '',
        check4ok = '',
        check4defect = '',
        check5ok = '',
        check5defect = '',
        check6ok = '',
        check6defect = '',
        check7ok = '',
        check7defect = '',
        check8ok = '',
        check8defect = '',
        check9ok = '',
        check9defect = '',
        check10ok = '',
        check10defect = '',
        check11ok = '',
        check11defect = '',
        check12ok = '',
        check12defect = '',
        check13ok = '',
        check13defect = '',
        check14ok = '',
        check14defect = '',
        check15ok = '',
        check15defect = '',
        check16ok = '',
        check16defect = '',
        check17ok = '',
        check17defect = '',
        check18ok = '',
        check18defect = '',
        check19ok = '',
        check19defect = '',
        check20ok = '',
        check20defect = '',
        check21ok = '',
        check21defect = '',
        check22ok = '',
        check22defect = '';

    if(record.ysnCheck1) {
      check1defect = 'X';
    }
    else{
      check1ok = 'X';
    }
    if(record.ysnCheck2) {
      check2defect = 'X';
    }
    else{
      check2ok = 'X';
    }
    if(record.ysnCheck3) {
      check3defect = 'X';
    }
    else{
      check3ok = 'X';
    }
    if(record.ysnCheck4) {
      check4defect = 'X';
    }
    else{
      check4ok = 'X';
    }
    if(record.ysnCheck5) {
      check5defect = 'X';
    }
    else{
      check5ok = 'X';
    }
    if(record.ysnCheck6) {
      check6defect = 'X';
    }
    else{
      check6ok = 'X';
    }
    if(record.ysnCheck7) {
      check7defect = 'X';
    }
    else{
      check7ok = 'X';
    }
    if(record.ysnCheck8) {
      check8defect = 'X';
    }
    else{
      check8ok = 'X';
    }
    if(record.ysnCheck9) {
      check9defect = 'X';
    }
    else{
      check9ok = 'X';
    }
    if(record.ysnCheck10) {
      check10defect = 'X';
    }
    else{
      check10ok = 'X';
    }
    if(record.ysnCheck11) {
      check11defect = 'X';
    }
    else{
      check11ok = 'X';
    }
    if(record.ysnCheck12) {
      check12defect = 'X';
    }
    else{
      check12ok = 'X';
    }
    if(record.ysnCheck13) {
      check13defect = 'X';
    }
    else{
      check13ok = 'X';
    }
    if(record.ysnCheck14) {
      check14defect = 'X';
    }
    else{
      check14ok = 'X';
    }
    if(record.ysnCheck15) {
      check15defect = 'X';
    }
    else{
      check15ok = 'X';
    }
    if(record.ysnCheck16) {
      check16defect = 'X';
    }
    else{
      check16ok = 'X';
    }
    if(record.ysnCheck17) {
      check17defect = 'X';
    }
    else{
      check17ok = 'X';
    }
    if(record.ysnCheck18) {
      check18defect = 'X';
    }
    else{
      check18ok = 'X';
    }
    if(record.ysnCheck19) {
      check19defect = 'X';
    }
    else{
      check19ok = 'X';
    }
    if(record.ysnCheck20) {
      check20defect = 'X';
    }
    else{
      check20ok = 'X';
    }
    if(record.ysnCheck21) {
      check21defect = 'X';
    }
    else{
      check21ok = 'X';
    }
    if(record.ysnCheck22) {
      check22defect = 'X';
    }
    else{
      check22ok = 'X';
    }

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
                        ['Truck:', me.globalinfo.strTruckNumber],
                        ['Hose:', record['strHoseAssemblyNumber'] || '']
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
        { text: 'LP Gas Cargo Tank Hose/Piping System Check', style: 'header' },
        {
          table: {
            headerRows: 1,
            widths: [ '*', 50, 50 ],

            body: [
              [ '', { text: 'Ok', alignment: 'center' }, { text: 'Defect', alignment: 'center' } ],
              [ '', '', '' ],
              [ '', '', '' ],
              [{ text: 'CONDUCT VISUAL INSPECTION OF DELIVERY HOSE AND DELIVERY HOSE ASSEMBLY:', colSpan: 3, alignment: 'center' },{},{}],
              [ '', '', '' ],
              [ '', '', '' ],
              [ 'Damage to the hose cover that exposes the reinforcement', { text: check1ok, alignment: 'center' }, { text: check1defect, alignment: 'center' } ],
              [ 'Wire braid reinforcement that has been kinked or flattened', { text: check2ok, alignment: 'center' }, { text: check2defect, alignment: 'center' } ],
              [ 'Soft spots when under pressure', { text: check3ok, alignment: 'center' }, { text: check3defect, alignment: 'center' } ],
              [ 'Bulging spots when under pressure', { text: check4ok, alignment: 'center' }, { text: check4defect, alignment: 'center' } ],
              [ 'Loose outer covering', { text: check5ok, alignment: 'center' }, { text: check5defect, alignment: 'center' } ],
              [ 'Damaged, Slipping or excessively worn hose couplings', { text: check6ok, alignment: 'center' }, { text: check6defect, alignment: 'center' } ],
              [ 'Loose, serverly corroded or missing bolts or fastening on bolted hose coupling assemblies', { text: check7ok, alignment: 'center' }, { text: check7defect, alignment: 'center' } ],
              [ 'Weather cracks on hose', { text: check8ok, alignment: 'center' }, { text: check8defect, alignment: 'center' } ],
              [ 'Cracks or severe damage on liquid hose end delivery nozzle coupler', { text: check9ok, alignment: 'center' }, { text: check9defect, alignment: 'center' } ],
              [ '', '', '' ],
              [ '', '', '' ],
              [{ text: 'CONDUCT VISUAL INSPECTION OF PIPING AND DISCHARGE SYSTEM:', colSpan: 3, alignment: 'center' },{},{}],
              [ '', '', '' ],
              [ '', '', '' ],
              [ 'Piping or joints that are severely corroded', { text: check10ok, alignment: 'center' }, { text: check10defect, alignment: 'center' } ],
              [ 'Any external leak indentifiable without the use of instruments (value, seal, connection failure)', { text: check11ok, alignment: 'center' }, { text: check11defect, alignment: 'center' } ],
              [ 'Bolts loose, missing, or severely corroded', { text: check12ok, alignment: 'center' }, { text: check12defect, alignment: 'center' } ],
              [ 'Rubber hose flexible connectors with any condition as outlined above for hose assemblies', { text: check13ok, alignment: 'center' }, { text: check13defect, alignment: 'center' } ],
              [ 'Stainless steel flexible connectors with damaged reinforced braid', { text: check14ok, alignment: 'center' }, { text: check14defect, alignment: 'center' } ],
              [ 'Manual stop valves (ESV-Emergency Shutoff Valves) that will not actuate', { text: check15ok, alignment: 'center' }, { text: check15defect, alignment: 'center' } ],
              [ 'Failure to close, or leakage through the internal self-closing stop valve. Detectable without the use of instruments', { text: check16ok, alignment: 'center' }, { text: check16defect, alignment: 'center' } ],
              [ 'Fusible elements missing or damaged', { text: check17ok, alignment: 'center' }, { text: check17defect, alignment: 'center' } ],
              [ 'Test all emergency discharge control devices designed to close the internal self-closing stop valve, to assure that all linkages to the valve operate as intended', { text: check18ok, alignment: 'center' }, { text: check18defect, alignment: 'center' } ],
              [ '', '', '' ],
              [ '', '', '' ],
              [{ text: 'OTHER CARGO TANK MAINTENANCE CHECKS:', colSpan: 3, alignment: 'center' },{},{}],
              [ '', '', '' ],
              [ '', '', '' ],
              [ 'Tank tie down bolts to chassis secured and not rusted', { text: check19ok, alignment: 'center' }, { text: check19defect, alignment: 'center' } ],
              [ 'While truck is shut off, lubricate PTO drive line', { text: check20ok, alignment: 'center' }, { text: check20defect, alignment: 'center' } ],
              [ 'Product decals and placards clean and visible on all 4 sides', { text: check21ok, alignment: 'center' }, { text: check21defect, alignment: 'center' } ],
              [ 'Liquid and Vapor lines and valves clearly marked', { text: check22ok, alignment: 'center' }, { text: check22defect, alignment: 'center' } ],
            ]
          },
          layout: 'noBorders'
        },
        { text: 'Sinature of Person Performing Inspection: __________________________________', margin: [0, 10, 0, 0] },
        { text: 'Above Defects Corrected: Yes or No' },
        { text: 'Above Defects Need Not Be corrected For Safe Operation of Vehicle: Yes or No' },
      ],
      styles: {
        header: {
          fontSize: 13,
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
    }

    //HoseCheck_TruckNumber_HoseAssemblyNumber_YYYYMMDDHHMM

    var _now = new Date(),
        _filename = "HoseCheck_" + me.data['strTruckNumber'].toString().replace('/','') + "_" + me.data['strHoseAssemblyNumber'] + "_" +_now.getFullYear() + ("0"+(_now.getMonth()+1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours()+1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
    _filename = _filename.replace(/[/\\?%*:|"<>]/g, '');

    console.log(docDefinition);
    console.log(_filename);
    me.reportService.create(docDefinition, _filename, true);

    return _filename;
  }

  doInsertPDFInfo(_filename:string){
    console.log('start doInsertPDFInfo');
    let me = this,
        pdfinfo = new tblMBILPDF();

        me.commonSQL.getData("shift").then(res=>{
          console.log('data get from shift');
          let shiftdata = res[res.length-1];
          pdfinfo.dtShiftDate = shiftdata.dtmShiftDate;
          pdfinfo.intShiftId = me.globalinfo.intShiftCounter;
          pdfinfo.intDriverId = me.globalinfo.intDriverNumber;
          pdfinfo.strFileName = _filename;
          pdfinfo.strFileType = "HOSE_PIPPING";
          me.commonSQL.addData('tblMBILPDF',pdfinfo).then(res=>{
            console.log('successfully inserted to tblMBILPDF');
            me.commonSQL.getData('tblMBILPDF').then(result=> console.log(result));
          });
        })


  }
}
