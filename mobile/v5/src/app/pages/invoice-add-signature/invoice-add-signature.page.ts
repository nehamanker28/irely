import { Component, OnInit, ViewChild, HostListener, ElementRef, AfterViewInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import SignaturePad from 'signature_pad';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { GlobalEventsService } from '../../providers/global-events.service';

@Component({
  selector: 'app-invoice-add-signature',
  templateUrl: './invoice-add-signature.page.html',
  styleUrls: ['./invoice-add-signature.page.scss'],
})
export class InvoiceAddSignaturePage implements OnInit, AfterViewInit {
  @ViewChild('canvas', { static: true }) signaturePadElement;
  signaturePad: any;
  canvasWidth: number;
  canvasHeight: number;
  imageUrl: string;

  constructor(private elementRef: ElementRef, private androidPermissions: AndroidPermissions, private base64ToGallery: Base64ToGallery, public navCtrl: NavController, private globalEventsService: GlobalEventsService) { }

  ngOnInit(): void {
    this.init();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.init();
  }

  init() {
    const canvas: any = this.elementRef.nativeElement.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - 140;
    if (this.signaturePad) {
      this.signaturePad.clear(); // Clear the pad on init
    }
  }

  public ngAfterViewInit(): void {
    this.signaturePad = new SignaturePad(this.signaturePadElement.nativeElement);
    this.signaturePad.clear();
    this.signaturePad.penColor = 'rgb(56,128,255)';
  }

  save(): void {
    var me = this;
    me.androidPermissions.checkPermission(me.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE).then(
      result => {
        if (result.hasPermission) {
          const img = me.signaturePad.toDataURL();
          console.log(img);
          me.imageUrl = img;
          me.Okay();

          // me.base64ToGallery.base64ToGallery(img).then(
          //   res => {
          //     console.log('Saved image to gallery ', res);
          //     me.imageUrl = res;
          //     me.Okay();
          //   },
          //   err => console.log('Error saving image to gallery ', err)
          // );
        }
        else {
          me.requestPermissions();
        }
      },
      err => me.requestPermissions()
    );
  }

  requestPermissions() {
    var me = this;
    me.androidPermissions.requestPermissions([
      me.androidPermissions.PERMISSION.READ_EXTERNAL_STORAGE,
      me.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE])
      .then(
        res => {
          console.log('Saved image to gallery ', res);
          me.save();
        },
        err => console.log('Error saving image to gallery ', err)
      );
  }

  Okay(){
    var me = this;
    console.log(me.imageUrl);

    me.navCtrl.pop().then(() => {
      me.globalEventsService.publishEventsSignature(me.imageUrl);
    });
  }

  isCanvasBlank(): boolean {
    if (this.signaturePad) {
      return this.signaturePad.isEmpty() ? true : false;
    }
  }

  clear() {
    this.signaturePad.clear();
  }

  undo() {
    const data = this.signaturePad.toData();
    if (data) {
      data.pop(); // remove the last dot or line
      this.signaturePad.fromData(data);
    }
  }
}