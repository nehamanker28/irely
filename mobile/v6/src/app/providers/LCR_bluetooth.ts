import { NavController, NavParams, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { Message } from '../framework/_common/base/message';

@Injectable()
export class LCR_bluetooth {

    unpairedDevices: any;
    pairedDevices: any;
    gettingDevices: Boolean;
    resultMeterValue = [];
    resultMeterStatus = [];
    ysnConnected: Boolean;
    connectedToDeviceID: string;
    meterDeviceLoop: any;
    setGrossDeviceLoop: any;

    msgTotalLen: any ;
    ReturnMsg: any;
    lastAddress: any;
    isConnected: Boolean;
    meter_1_test_status = 'DISCONNECTED';
    meter_2_test_status = 'DISCONNECTED'; 
    meter_1_test_preset_type = '';
    meter_2_test_preset_type = '';

    CURRENT_HAS_CONNECTION: Boolean;
    CURRENT_NODE: any;
    CURRENT_ADDRESS: any;
    CURRENT_METER: any;

    constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private messageUtil: Message, private modalCtrl: ModalController) {
        
    }

    enableBluetooth() {
        this.bluetoothSerial.enable();
    }

    async connectDevice(address: any): Promise<any> {
        var me = this;
        var _attempts = 0;
        if(!address) {
            address = me.lastAddress;
        }
        else {
            me.lastAddress = address;
        }
    
        let loader = await me.loadingCtrl.create({message: "Connecting...", backdropDismiss: true});
        var _exec;
       
        // let alert = await me.alertCtrl.create({
        //     message: 'Do you want to connect with?',
        //     buttons: [        
        //       {
        //         text: 'Connect',
        //         handler: () => {
        //           _exec();
        //         }
        //       },
        //       {
        //         text: 'Cancel',
        //         role: 'cancel',
        //         handler: () => {
        //           console.log('Cancel clicked');
        //         }
        //       }
        //     ]
        //   });

        return new Promise((resolve, reject) => {
            _exec = function() {
                loader.present();
                me.bluetoothSerial.connect(address.id || address).subscribe((res) => { 
                    console.log('connected');
                    var _result = res;
                    setTimeout(() => {
                        console.log('get paired');                
                        me.connectedToDeviceID = address.id || address;
                        me.isConnected = true;

                        me.CURRENT_ADDRESS = address.id || address;
                        me.CURRENT_HAS_CONNECTION = true;
                        me.CURRENT_METER = _result;
                        
                        loader.dismiss();
                        resolve(me.connectedToDeviceID);
                    }, 3000);
                },
                (res) => {
                    if(_attempts >= 5) {
                        loader.dismiss();
                        me.messageUtil.showToastMessage(res, function() {
                            me.modalCtrl.dismiss({
                              'dismissed': true
                            });
                          }, 1000);
                        me.isConnected = false;
                        me.CURRENT_HAS_CONNECTION = false;
                        reject(res);
                    }
                    else {
                        //TRY AGAIN
                        setTimeout(() => {
                            _attempts++;
                            _exec();
                        }, 1000);
                    }                    
                });
            }
            _exec();
            // alert.present();
        });                
    }

    async disconnectDevice(address: any) {
        var me = this;
    
        let loader = await me.loadingCtrl.create({message: "Disconnecting...", backdropDismiss: true});
        let alert = await me.alertCtrl.create({
        message: 'Do you want to Disconnect?',
        buttons: [
            {
            text: 'Cancel',
            role: 'cancel',
            handler: () => {
                console.log('Cancel clicked');
            }
            },
            {
            text: 'Disconnect',
            handler: () => {
                loader.present();
                me.bluetoothSerial.disconnect().then((res) => {
                    address.ysnConnected = 'false';
                    me.isConnected = false;
                    me.CURRENT_HAS_CONNECTION = false;
                    loader.dismiss();
                }, (res) => {
                    me.alertCtrl.create({message: res}); 
                    me.isConnected = true;
                    me.CURRENT_HAS_CONNECTION = true;
                    loader.dismiss();
                });
            }
            }
        ]
        });
        alert.present();
    }    


    connectBluetooth(address): Promise<any> {
        var me = this;
        return new Promise((resolve, reject) => {
            me.bluetoothSerial.connect(address).subscribe((res) => { 
                console.log('connected');                  
                var _result = res;

                setTimeout(() => {
                    console.log('get paired');                        
                    me.isConnected = true; 

                    me.CURRENT_ADDRESS = address;
                    me.CURRENT_HAS_CONNECTION = true;
                    me.CURRENT_METER = _result;

                    resolve(res);
                }, 5000);
            });
        });
    }

    disconnectBluetooth(): Promise<any> {
        var me = this;
        return new Promise((resolve, reject) => {
            me.bluetoothSerial.disconnect().then((res) => {
                resolve(res);
            }, (res) => {
                reject(res);
            });
        });
    }

    getPaired(): Promise<any> {
        var me = this;
        return new Promise((resolve, reject) => {
            me.pairedDevices = [];
            me.bluetoothSerial.list().then((list) => {
            console.log(list);
            var _list = list;
            me.bluetoothSerial.isConnected().then((res) => {
                console.log(res);       
                console.log(_list); 
                _list.forEach(item => {
                    console.log(item);
                    if(item.id == me.connectedToDeviceID) {
                        item.ysnConnected = 'true';
                    }
                    me.pairedDevices.push(item);          
                });
                resolve(me.pairedDevices);
            },
            (err) => {
                console.log(err);
                me.pairedDevices = _list;
                resolve(me.pairedDevices);
            });      
            },
            (err) => {
                console.log(err);
                reject(err);
            });
        });
    }

    scanDevices(): Promise<any> {
        var me = this;
        return new Promise((resolve, reject) => {
            me.unpairedDevices = [];
            me.gettingDevices = true;
            me.bluetoothSerial.discoverUnpaired().then((res) => {
                me.gettingDevices = false;
                res.forEach(item => {
                    console.log(item);
                    if(item.name) me.unpairedDevices.push(item);
                });
                resolve(me.unpairedDevices);
            },
            (err) => {
                console.log(err);
                reject(err);
            });
        });
    }

    
    sendToDevice(data: any): Promise<any> {
        var me = this;    
        console.log(data.buffer);
    
        return new Promise ((resolve, reject) => {
          me.bluetoothSerial.clear().then(() => {
            console.log('clear');
            me.bluetoothSerial.write(data.buffer).then((data) => {
              console.log(data);
              me.processToDevice().then((res) => {
                console.log(res);            
                resolve(res);            
              },
              (error) => {
                console.log(error);
                reject(error);
              });          
            },
            (error) => {
              console.log(error);
              reject(error);
            });
          },
          (error) => {
            console.log(error);
            reject(error);
          });
        });
    }
    
    processToDevice(): Promise<any> {
        var me = this;
        var _byteArray = [];
    
        return new Promise ((resolve, reject) => {
          me.msgTotalLen = 0; //reset every call
          me.ReturnMsg = '';  
          var msgPreBytes = new Uint8Array(6);
        
          me.bluetoothSerial.subscribeRawData().subscribe((data) => {
            console.log(data);
            var bytes = new Uint8Array(data);
            if(me.msgTotalLen <= 0 ){
              msgPreBytes.set(bytes.slice(0,6),0);
            }
            me.msgTotalLen += bytes.length;
            if (me.msgTotalLen < 6) { //skip
            }
            else if((me.msgTotalLen-6) < msgPreBytes[5]) { //skip
            }
            else{
                me.bluetoothSerial.clear();
                resolve(bytes);              
            }
          }, (error) => {
            console.log('Failed: ' + error);            
            reject(error);
          },() => {
            console.log('COMPLETE');            
            reject(true);
          });
          
        });
    }


    
    startDeviceToListen() {
        var me = this;
    
        var data = new Uint8Array(9);
        data[0] = 0x7E; //start
        data[1] = 0x7E; //start
        data[2] = 0x01; //to
        data[3] = 0xFF; //from
        data[4] = 0x02; //status
        data[5] = 0x01; //len
        data[6] = 0x00; //data
        data[7] = 0x8C; //CRC
        data[8] = 0x27; //CRC
    
        me.sendToDevice(data);
    }  
    
}