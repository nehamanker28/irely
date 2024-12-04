import { Injectable } from '@angular/core';
import { Network } from '@ionic-native/network/ngx';
import { Platform } from '@ionic/angular';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  onDevice: boolean;

  constructor(public platform: Platform,
              public network: Network
            ) {
    this.onDevice = this.platform.is('cordova');
  }

  isOnline(): boolean {
    if (this.onDevice && this.network.type) {
      return this.network.type !== 'NONE';
    } else {
      return navigator.onLine;
    }

    // let connectSubscription = this.network.onConnect().subscribe(() => {
    //   console.log('network connected!');
    //   // We just got a connection but we need to wait briefly
    //    // before we determine the connection type. Might need to wait.
    //   // prior to doing any api requests as well.
    //   setTimeout(() => {
    //     if (this.network.type === 'wifi') {
    //       console.log('we got a wifi connection, woohoo!');
    //     }
    //   }, 3000);
    // });
    
    // // stop connect watch
    // connectSubscription.unsubscribe();
    
  }

  isOffline(): boolean {
    if (this.onDevice && this.network.type) {
      return this.network.type === 'NONE';
    } else {
      return !navigator.onLine;
    }
  }

}
