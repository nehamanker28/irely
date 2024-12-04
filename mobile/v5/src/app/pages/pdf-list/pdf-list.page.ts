import { Component, OnInit } from '@angular/core';

import { NavController, AlertController } from '@ionic/angular';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { tblMBILPDF } from '../../framework/models/tblMBILPDF';
import { GlobalInfo } from '../../framework/models/globalinfo';

@Component({
  selector: 'app-pdf-list',
  templateUrl: './pdf-list.page.html',
  styleUrls: ['./pdf-list.page.scss'],
})
export class PdfListPage implements OnInit {
    data: any;
    searchValue: any;
    pdflist:tblMBILPDF[];
    shiftNo:number = 0;
    searchString:string = "";
    constructor(public navCtrl: NavController,
                private file: File,
                private fileOpener: FileOpener,
                private alertCtrl: AlertController,
                private commonSQL:CommonSQL) {
    }

    ngOnInit() {
    }

    ionViewDidEnter() {
      console.log('ionViewDidLoad ViewPdfPage');
      // this.getPDFList();
      this.getPDFTable();
    }

    getPDFList() {
      var me = this;

      me.file.listDir(me.file.dataDirectory,'reports').then((result)=>{
        console.log(result);
        var _files = [];

        for(let file of result){
          var _file = {type: '',filename:'',fullpath:'',datecreated: '',visible: 'false'};

          if(file.isFile == true){
            console.log(file);
            _file.type = file.name.substr(0,file.name.indexOf('_')).replace(/-/g,' ');
            _file.filename = file.name;
            _file.fullpath = file.nativeURL;

            if(_file.type === 'Delivery Out Of Gas') {
              _file.visible = 'true';
            }

            _files.push(_file);
          }
        }

        me.data = _files;
        console.log(me.data);
      });
    }

    getSearchPDFList() {

    }

    openPDF(item) {

      console.log(item);
      this.fileOpener.open(item.fullpath, 'application/pdf');
    }


    openPDF2(filename){
      let me = this,
          filepath = me.file.dataDirectory + "reports/";

      me.fileOpener.open(filepath + filename, 'application/pdf');
    }

    async deleteReport(item) {
      var me = this;
      console.log(item);

      let confirm = await me.alertCtrl.create({
        message: 'Are you sure you want to delete this?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              me.file.removeFile(item.fullpath.replace('/' + item.filename, ''),item.filename);
              me.getPDFList();
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

   getPDFTable(){
    let me = this;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {
      let globalinfo = res[0];
      me.commonSQL.getDataQuery("Select * from tblMBILPDF where intDriverId = " + globalinfo.intDriverNumber + " order by intPDFId desc").then(result=>{
        console.log('data from tblMBILPDF');
        me.pdflist = result;
        console.log(me.pdflist);
      })
      // me.commonSQL.getData('tblMBILPDF').then(res=>{
      //   console.log('data from tblMBILPDF');

      //   me.pdflist = res.filter(x=> x.intDriverId == globalinfo.intDriverNumber);
      //   console.log(me.pdflist);
      // })
    })
  }

}
