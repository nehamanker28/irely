import { Injectable } from '@angular/core';
import { AlertController, ToastController, LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class Message {
    constructor(public toastCtrl: ToastController, 
                public alertCtrl: AlertController,
                public loadingCtrl: LoadingController) {
    }

    showLoader(message: string) : Loading {
        let loader = this.loadingCtrl.create({
            content: message
        });

        loader.present();

        return loader;
    }

    showAlertInfo(message: string, callback?: () => void) {
        let alert = this.alertCtrl.create({
            title: 'iRely',
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        alert.dismiss().then(() => {
                            if (callback)
                                callback();
                        });

                        return false;
                    }
                }
            ]
        });
        alert.present();
    }

    showAlertOkCancel(message: string, callback: (result:string) => void) {
        let alert = this.alertCtrl.create({
            title: 'iRely',
            message: message,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                      alert.dismiss().then(() => {
                          callback('ok');
                      });

                      return false;
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        callback('cancel');

                        return false;
                    }
                }
            ]
        });
        alert.present();
    }

    showAlertYesNo(message: string, callback: (result:string) => void) {
        let alert = this.alertCtrl.create({
            title: 'iRely',
            message: message,
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                      alert.dismiss().then(() => {
                          callback('yes');
                      });

                      return false;
                    }
                },
                {
                    text: 'No',
                    role: 'cancel',
                    handler: () => {
                        alert.dismiss().then(() => {
                            callback('no');
                        });

                        return false;
                    }
                }
            ]
        });
        alert.present();
    }

    showAlertYesNoCancel(message: string, callback: (result:string) => void) {
        let alert = this.alertCtrl.create({
            title: 'iRely',
            message: message,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        callback('cancel');
                    }
                },
                {
                    text: 'No',
                    handler: () => {
                        alert.dismiss().then(() => {
                            callback('no');
                        });
                    }
                },
                {
                    text: 'Yes',
                    handler: () => {
                      alert.dismiss().then(() => {
                          callback('yes');
                      });
                    }
                }
            ]
        });
        alert.present();
    }

    showToast(message: string, callback?: () => void, duration: number = 2000) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'bottom'
        });

        toast.onDidDismiss(() => {
            if (callback)
                callback();
        });
        
        toast.present();
    }
}