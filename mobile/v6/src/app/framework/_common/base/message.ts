import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable()
export class Message {
    constructor(public toastCtrl: ToastController, 
                public alertCtrl: AlertController) {
    }

    async showAlertInfoMessage(message: string, callback?: () => void) {
        let alert = await this.alertCtrl.create({
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

    async showAlertOkCancelMessage(message: string, callback: (result:string) => void) {
        let alert = await this.alertCtrl.create({
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

    async showAlertYesNoMessage(message: string, callback: (result:string) => void) {
        let alert = await this.alertCtrl.create({
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

    async showAlertYesNoCancelMessage(message: string, callback: (result:string) => void) {
        let alert = await this.alertCtrl.create({
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

    async showToastMessage(message: string, callback?: () => void, duration: number = 2000) {
        let toast = await this.toastCtrl.create({
            message: message,
            duration: duration,
            position: 'bottom'
        });

        // toast.onDidDismiss(() => {
        //     if (callback)
        //         callback();
        // });
        
        toast.present();
    }
}