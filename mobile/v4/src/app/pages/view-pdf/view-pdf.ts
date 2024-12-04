import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

@IonicPage()
@Component({
  selector: 'page-view-pdf',
  templateUrl: 'view-pdf.html',
})
export class ViewPdfPage {
  data: any;
  searchValue: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              private file: File, 
              private fileOpener: FileOpener,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPdfPage');
    this.getPDFList();
  }

  getPDFList() {
    var me = this;

    me.file.listDir(me.file.externalApplicationStorageDirectory,'reports').then((result)=>{
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

  deleteReport(item) {
    var me = this;
    console.log(item);

    let confirm = me.alertCtrl.create({
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

}
