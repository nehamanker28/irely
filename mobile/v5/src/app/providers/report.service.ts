import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
// import "rxjs/add/operator/do";
// import { map } from 'rxjs/operators';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { Printer, PrintOptions } from '@ionic-native/printer/ngx';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private plt: Platform, 
    private file: File, 
    private fileOpener: FileOpener,
    private printer: Printer) {
  }

  create(docs, filename, toPrint: boolean = false, toOpen: boolean = false) {
    var me = this;
    var pdfObj = pdfMake.createPdf(docs);

    console.log('printing');

    if (me.plt.is('cordova')) {

      pdfObj.getBuffer((buffer) => {
        var utf8 = new Uint8Array(buffer),
            binaryArray = utf8.buffer,
            _filename = filename;

        me.file.checkDir(me.file.dataDirectory, 'reports').then(res => {
          me.file.writeFile(me.file.dataDirectory + 'reports/', _filename + '.pdf', binaryArray, { replace: true }).then(fileEntry => {

            // OPEN PDF
            if(toOpen) {
              me.fileOpener.open(me.file.dataDirectory + 'reports/' + _filename + '.pdf', 'application/pdf');
            }

            // DIRECT PRINTING
            if(toPrint) {
              me.print(pdfObj);
              // me.printAlter(me.file.dataDirectory + 'reports/' + _filename + '.pdf');
            }
            
          });
        }
        ).catch(err => {
          me.file.createDir(me.file.dataDirectory, 'reports',false).then(res => {
            me.file.writeFile(me.file.dataDirectory + 'reports/', _filename + '.pdf', binaryArray, { replace: true }).then(fileEntry => {
              
            // OPEN PDF
            if(toOpen) {
              me.fileOpener.open(me.file.dataDirectory + 'reports/' + _filename + '.pdf', 'application/pdf');
            }

            // DIRECT PRINTING
            if(toPrint) {
              me.print(pdfObj);
              // me.printAlter(me.file.dataDirectory + 'reports/' + _filename + '.pdf');
            }

            });          
          });
        });

      });
    } else {
      pdfObj.download();
    }
  }

  print(pdfObj) {
    var me = this;
    pdfObj.getBase64((buffer) => {
        console.log(buffer);
        window['plugins'].PrintPDF.print({
          data: buffer,
          type: 'Data',
          success: function (data) {
            console.log('success');
            return data;
          },
          error: function (data) {
            console.log('failed: ' + data);
            return data;
          }
        });
      });
  }

  printAlter(filename) {
    var me = this;
    let options: PrintOptions = {
      name: 'Brother DCP-7030',
      printer: '',
      duplex: true,
      orientation: "landscape"
    };
 
    // this.printer.print(filename, options).then(function(e){console.log(e)}, function(e){console.log(e)});

    console.log(options);

    me.printer.isAvailable().then(function(){
      me.printer.print("http://www.irely.com/company", options).then(function(){
        alert("printing done successfully !");
        },function(){
        alert("Error while printing !");
        });
    }, function(){
    alert('Error : printing is unavailable on your device ');
    });
  }

}