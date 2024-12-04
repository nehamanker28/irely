import { Component } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-meter-device',
  templateUrl: 'meter-device.html',
})
export class MeterDevicePage {

  unpairedDevices: any;
  pairedDevices: any;
  gettingDevices: Boolean;
  resultMeterValue = [];
  resultMeterStatus = [];
  ysnConnected: Boolean;
  connectedToDeviceID: string;
  meterDeviceLoop: any;

  msgTotalLen: any ;
  ReturnMsg: any;

  //Return Codes
  public static readonly LCPR_OK = 0;                // operation was carried out successfully
  public static readonly LCPR_AlreadyInstalled = 200;
  public static readonly LCPR_BadNameAndRevision = 201;
  public static readonly LCPR_BadNodeAddress = 202;  // invalid node address of host application
  public static readonly LCPR_BadBaseAddress = 203 ; // invalid base communications address
  public static readonly LCPR_BadIRQ = 204;          // invalid IRQ
  public static readonly LCPR_BadBaudRate = 205;     // invalid baud rate
  public static readonly LCPR_BadTimeout = 206;      // invalid timeout
  public static readonly LCPR_BadTXEnable = 207;     // invalid transmit enable
  public static readonly LCPR_NULLPointer = 208;    // a NULL pointer was passed as an address
  public static readonly LCPR_NoRequestActive = 209;// the slave device reported that no request was active
  public static readonly LCPR_NoResponse = 210;      // the slave device did not respond to the request
  public static readonly LCPR_RequestAborted = 211;  // the slave device aborted the last request
  public static readonly LCPR_UnsupportedCommand = 212;
  public static readonly LCPR_BufferOverflow = 213;  // the slave device reports its receive buffer overflowed
  public static readonly LCPR_Busy = 214;            // the slave device reports that it is busy but is working on the request
  public static readonly LCPR_NotInstalled = 215;    // the LCP device drivers are not installed
  public static readonly LCPR_MemoryAllocation = 216; // there is not enough dynamic memory available for the request
  public static readonly LCPR_MissingMHz = 217;      // the MHz environment variable is missing


  // LCR A to D code word definitions.
  
  // const LCRA_R100_0 = 0xH1;
  // const LCRA_R128_6 = 0xH2;
  // const LCRA_RTD_SLOPE = &H4;
  // const LCRA_RTD_OFFSET = &H8;
  // const LCRA_VOLT_12 = &H10;
  // const LCRA_VOLT_16 = &H20;
  // const LCRA_VOLT_SLOPE = &H40;
  // const LCRA_VOLT_OFFSET = &H80;
  public static readonly LCRF_ProductNumber_DL = 0;
  public static readonly LCRF_ProductCode_DL = 1;
  public static readonly LCRF_GrossQty_NE = 2;
  public static readonly LCRF_NetQty_NE = 3;
  public static readonly LCRF_FlowRate_NE = 4;
  public static readonly LCRF_GrossPreset_PL = 5;
  public static readonly LCRF_NetPreset_PL = 6;
  public static readonly LCRF_Temp_NE = 7;
  public static readonly LCRF_Residual_WM = 8;
  public static readonly LCRF_PulsesPerDistance_UL = 9;
  public static readonly LCRF_CalibDistance_UL = 10;
  public static readonly LCRF_ProductDescriptor_DL = 11;
  public static readonly LCRF_Odometer_UL = 12;
  public static readonly LCRF_ShiftGross_NE = 13;
  public static readonly LCRF_ShiftNet_NE = 14;
  public static readonly LCRF_ShiftDeliveries_NE = 15;
  public static readonly LCRF_ClearShift_DL = 16;
  public static readonly LCRF_GrossTotal_WM = 17;
  public static readonly LCRF_NetTotal_WM = 18;
  public static readonly LCRF_DateFormat_UL = 19;
  public static readonly LCRF_Date_UL = 20;
  public static readonly LCRF_Time_UL = 21;
  public static readonly LCRF_SaleNumber_WM = 22;
  public static readonly LCRF_TicketNumber_WM = 23;
  public static readonly LCRF_UnitID_UL = 24;
  public static readonly LCRF_NoFlowTimer_DL = 25;
  public static readonly LCRF_S1Close_WM = 26;
  public static readonly LCRF_PresetType_DL = 27;
  public static readonly LCRF_PulseOutputEdge_UL = 28;
  public static readonly LCRF_Header_AE = 29;
  public static readonly LCRF_TicketHeaderLine_UL = 30;
  public static readonly LCRF_PrintGrossAndParam_WM = 31;
  public static readonly LCRF_VolCorrectedMsg_WM = 32;
  public static readonly LCRF_Temp_WM = 33;
  public static readonly LCRF_TempOffset_WM = 34;
  public static readonly LCRF_TempScale_WM = 35;
  public static readonly LCRF_MeterID_WM = 36;
  public static readonly LCRF_TicketRequired_WM = 37;
  public static readonly LCRF_QtyUnits_WM = 38;
  public static readonly LCRF_Decimals_WM = 39;
  public static readonly LCRF_FlowDirection_WM = 40;
  public static readonly LCRF_TimeUnit_WM = 41;
  public static readonly LCRF_CalibrationEvent_NE = 42;
  public static readonly LCRF_ConfigurationEvent_NE = 43;
  public static readonly LCRF_GrossCount_NE = 44;
  public static readonly LCRF_NetCount_NE = 45;
  public static readonly LCRF_ProverQty_WM = 46;
  public static readonly LCRF_PulsesPerUnit_WM = 47;
  public static readonly LCRF_AuxMult_WM = 48;
  public static readonly LCRF_AuxUnit_WM = 49;
  public static readonly LCRF_CalibrationNumber_NE = 50;
  public static readonly LCRF_LinearPoint_AE = 51;
  public static readonly LCRF_LinearFlowRate_WM = 52;
  public static readonly LCRF_LinearError_WM = 53;
  public static readonly LCRF_LinearProverQty_WM = 54;
  public static readonly LCRF_Linearize_WM = 55;
  public static readonly LCRF_Printer_WM = 56;
  public static readonly LCRF_CompensationType_WM = 57;
  public static readonly LCRF_CompensationParam_WM = 58;
  public static readonly LCRF_BaseTemp_WM = 59;
  public static readonly LCRF_Software_NE = 60;
  public static readonly LCRF_PricePerUnit_DL = 61;
  public static readonly LCRF_TaxPerUnit_DL = 62;
  public static readonly LCRF_PercentTax_DL = 63;
  public static readonly LCRF_DiagnosticMessages_AE = 64;
  public static readonly LCRF_TotalTaxPerUnit_NE = 65;
  public static readonly LCRF_TotalPercentTax_NE = 66;
  public static readonly LCRF_ADCCode_NE = 67;
  public static readonly LCRF_SupplyVoltage_NE = 68;
  public static readonly LCRF_PulserReversals_NE = 69;
  public static readonly LCRF_ShiftStart_NE = 70;
  public static readonly LCRF_AuxQty_NE = 71;
  public static readonly LCRF_UserKey_DL = 72;
  public static readonly LCRF_Security_UL = 73;
  public static readonly LCRF_FactoryKey_AE = 74;
  public static readonly LCRF_R100_0_FL = 75;
  public static readonly LCRF_R128_6_FL = 76;
  public static readonly LCRF_RawADC_NE = 77;
  public static readonly LCRF_RTDSlope_FL = 78;
  public static readonly LCRF_RTDOffset_FL = 79;
  public static readonly LCRF_SerialID_FL = 80;
  public static readonly LCRF_UserSetKey_FL = 81;
  public static readonly LCRF_LCRReset_FL = 82;
  public static readonly LCRF_CompParamType_NE = 83;
  public static readonly LCRF_CompTempType_NE = 84;
  public static readonly LCRF_PresetsAllowed_DL = 85;
  public static readonly LCRF_Aux1_DL = 86;
  public static readonly LCRF_Aux2_DL = 87;
  public static readonly LCRF_DefaultProduct_NE = 88;
  public static readonly LCRF_DeliveryStart_NE = 89;
  public static readonly LCRF_DeliveryFinish_NE = 90;
  public static readonly LCRF_LastCalibrated_NE = 91;
  public static readonly LCRF_GrossRemaining_NE = 92;
  public static readonly LCRF_NetRemaining_NE = 93;
  public static readonly LCRF_ProductType_WM = 94;
  public static readonly LCRF_SubTotalCost_NE = 95;
  public static readonly LCRF_TotalTax_NE = 96;
  public static readonly LCRF_TotalCost_NE = 97;
  public static readonly LCRF_Ticket_NE = 98;
  public static readonly LCRF_Language_NE = 99;
  public static readonly LCRF_ShiftPassword = 105;
  public static readonly LCRF_CustomerID = 106;
  public static readonly LCR_NUM_FIELDS = 100;
  public static readonly LCR_MAX_FIELDS = 256;

  constructor(private bluetoothSerial: BluetoothSerial, private alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    bluetoothSerial.enable();
  }

  //#region FUNCTIONS

  ionViewDidLoad() {
    var me = this;
    me.getPaired();
    
    console.log('METER DEVICE LOADED');
  }

  getPaired() {
    var me = this;
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
      },
      (err) => {
        console.log(err);
        me.pairedDevices = _list;
      });      
    },
    (err) => {
      console.log(err);
    });
  }

  scanDevices() {
    var me = this;
    me.unpairedDevices = [];
    me.gettingDevices = true;
    me.bluetoothSerial.discoverUnpaired().then((res) => {
      me.gettingDevices = false;
      res.forEach(item => {
        console.log(item);
        if(item.name) me.unpairedDevices.push(item);
      });
    },
    (err) => {
      console.log(err);
    });
  }

  sendToDevice(data: any) {
    var me = this;

    console.log(data.buffer);

    return new Promise ((resolve, reject) => {
      me.bluetoothSerial.write(data.buffer).then(() => {
        console.log('clear');
        me.bluetoothSerial.clear().then(() => {
          console.log('processToDevice');
          me.processToDevice().then((res) => {
            console.log(res);            
            resolve(res);            
          },
          (error) => {
            console.log(error)
          });          
        });
      });
    });
  }

  processToDevice() {
    var me = this;
    var _byteArray = [];

    return new Promise ((resolve, reject) => {
      me.msgTotalLen = 0; //reset every call
      me.ReturnMsg = '';  
      var msgPreBytes = new Uint8Array(6)
    
      me.bluetoothSerial.subscribeRawData().subscribe((data) => {
        var bytes = new Uint8Array(data);
        if(me.msgTotalLen <= 0 ){
          msgPreBytes.set(bytes.slice(0,6),0);
        }
        me.msgTotalLen += bytes.length;
        // me.ReturnMsg += me.byteToHexString(bytes);

        // console.log('Message Prefix : ' + msgPreBytes);
        // console.log('Raw Bytes: ' + bytes);
        // console.log('Direct Convert: ' + me.byteToHexString(bytes));
        // console.log('HexString: ' + me.ReturnMsg);        
        // console.log(_byteArray);
        // console.log('---------- END BLUETOOTH -------------');

        if (me.msgTotalLen < 6) { //skip
        }
        else if((me.msgTotalLen-6) < msgPreBytes[5]) { //skip
        }
        else{
          resolve(bytes);
          me.bluetoothSerial.clear();
        }
      }, (error) => {
        console.log('Failed: ' + error);            
        reject(error);
      });
      
    });
  }

  //#endregion

  //#region CONVERSION

  buf2hex(buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
  }

  hex2a(hexx) { //var hex = hexx.toString();//force conversion
    var hex = hexx;
    var str = '';
    for (var i = 0; i < hex.length; i += 2)
      str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
  }

  GetOutputData(hexString){
    var binary = new Array();
    for (var i=0; i<hexString.length/2; i++) {
      var h = hexString.substr(i*2, 2);
      binary[i] = parseInt(h,16);        
    }
    //var outputDataOnly = this.hexStringToByte(hexString);
    return binary.slice(6 + 2 , 6 + binary[5] - 1);
  }

  GetOutputDataAsString(hexString){
    var binary = new Array();
    var OutputData = "";
    //-minus 4 for the CRC
    //initital loop = 5 - removing to, from , status, length  
    for (var i=6; i< (hexString.length - 4) /2; i++) {
      OutputData += hexString.substr(i*2, 2);
    }
    
    return OutputData; //still contains rc, devstatus
  }

  HexToAscii(HexString){    
    var binary = new Array();
    for (var i=0; i<HexString.length/2; i++) {
      var h = HexString.substr(i*2, 2);
      binary[i] = parseInt(h,16);        
    }
    //console.log("Length:" + binary.length);
    var output = binary;
    //6 = prefix
    //2 = Return Code, Device Status
     // -1 = Text field len - 1
    var outputDataOnly = output.slice(6 + 2 , 6 + binary[5]- 1);
    console.log(outputDataOnly);
    var convertedString = "";
    for (i=0; i<outputDataOnly.length; i++) {
      if (outputDataOnly[i] >= 32 && outputDataOnly[i] <= 126) {
        // // // switch(String.fromCharCode(output[i])) {
        // // // case '&': convertedString += "&amp;";
        // // //   break;
        // // // case '<': convertedString += "&lt;";
        // // //   break;
        // // // case '>': convertedString += "&gt;";
        // // //   break;
        // // // case '"': convertedString += "&quot;";
        // // //   break;
        // // // case '\'': convertedString += "&#039;";
        // // //   break;
        // // // default: convertedString += String.fromCharCode(output[i]);
        // // // }
        convertedString += String.fromCharCode(outputDataOnly[i]);
      }
      else {
        convertedString += outputDataOnly[i];
      }
    }
    return convertedString;
  }

  byteToHexString(uint8arr) {
    if (!uint8arr) {
      return '';
    }
    
    var hexStr = '';
    for (var i = 0; i < uint8arr.length; i++) {
      var hex = (uint8arr[i] & 0xff).toString(16);
      hex = (hex.length === 1) ? '0' + hex : hex;
      hexStr += hex;
    }    
    return hexStr.toUpperCase();
  }
  
  hexStringToByte(str) {
    if (!str) {
      return new Uint8Array(1);
    }
    
    var a = [];
    for (var i = 0, len = str.length; i < len; i+=2) {
      a.push(parseInt(str.substr(i,2),16));
    }
    
    return new Uint8Array(a);
  }

  hexToDecimal(num) {
    return {
        from : function (baseFrom) {
            return {
                to : function (baseTo) {
                    return parseInt(num, baseFrom).toString(baseTo);
                }
            };
        }
    };
};

  ab2str(buf) {
    return String.fromCharCode.apply(null, new Uint16Array(buf));
  }
  
  str2ab(str) {
    var buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    var bufView = new Uint16Array(buf);
    for (var i=0, strLen=str.length; i<strLen; i++) {
      bufView[i] = str.charCodeAt(i);
    }
    return buf;
  }

  read(numBytes) {

  }

  //#endregion

  //#region BUTTONS

  connectDevice(address: any) {
    var me = this;
    let alert = me.alertCtrl.create({
      title: 'Connect',
      message: 'Do you want to connect with?',
      buttons: [        
        {
          text: 'Connect',
          handler: () => {
            let loader = me.loadingCtrl.create({content: "Connecting...", enableBackdropDismiss: true});
            loader.present();
            me.bluetoothSerial.connect(address.id).subscribe((res) => { 
              console.log('connected');

              setTimeout(() => {
                console.log('get paired');                
                me.connectedToDeviceID = address.id;
                me.getPaired();
                me.startDeviceToListen();
                loader.dismiss();
              }, 5000);

            },
            (res) => {
              me.alertCtrl.create({message: res});
              loader.dismiss();
            });
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    alert.present();
  }

  disconnectDevice(address: any) {
    var me = this;
    let alert = me.alertCtrl.create({
      title: 'Disconnect?',
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
            let loader = me.loadingCtrl.create({content: "Disconnecting...", enableBackdropDismiss: true});
            loader.present();
            me.bluetoothSerial.disconnect().then((res) => {
              address.ysnConnected = 'false';
              loader.dismiss();
            }, (res) => {
              me.alertCtrl.create({message: res}); 
              loader.dismiss();
            });
          }
        }
      ]
    });
    alert.present();
  }

  //#endregion


  //#region DEVICE

  unsubscribe(){

  this.bluetoothSerial.disconnect();

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

  getMeterData() {
    var me = this;    

    var data = new Uint8Array(10);
    data[0] = 0x7E;
    data[1] = 0x7E;
    data[2] = 0x01;//to
    data[3] = 0xFF;//from
    data[4] = 0x01;//status
    data[5] = 0x02;//length
    data[6] = 0x20;//data
    data[7] = 0x02;//data
    data[8] = 0xB7;//CRC
    data[9] = 0x9D;//CRC
    me.resultMeterValue = [];

    me.meterDeviceLoop = setInterval(() => 
      me.sendToDevice(data).then((res) => {
        console.log(res);      

        var sourceByte = res;
        var sourceHexString = me.byteToHexString(sourceByte);
        console.log(sourceHexString);
        var sourceString = me.GetOutputDataAsString(sourceHexString).substring(4);
        console.log(sourceString);
        var sourceFinalOutput = parseInt(sourceString,16) / 10; 
        me.resultMeterValue.push(sourceFinalOutput);
        
        console.log('Meter Gross Amount: ' + sourceFinalOutput);
      }
    ),500);
  }

  stopMeterData() {
    var me = this;
    window.clearInterval(me.meterDeviceLoop); 
  }

  getMeterStatus() {
    var me = this;

    var data = new Uint8Array(9);
    data[0] = 0x7E;
    data[1] = 0x7E;
    data[2] = 0x01;//to
    data[3] = 0xFF;//from
    data[4] = 0x01;//status
    data[5] = 0x02;//length
    data[6] = 0x23;//data
    data[7] = 0xB7;//CRC
    data[8] = 0x9D;//CRC

    me.sendToDevice(data).then((res) => {
      console.log(res);      

      var sourceByte = res;
      var sourceHexString = me.byteToHexString(sourceByte);
      console.log(sourceHexString);
      var sourceString = me.GetOutputDataAsString(sourceHexString).substring(4);
      console.log(sourceString);
      var sourceFinalOutput = parseInt(sourceString,16) / 10; 
      me.resultMeterStatus.push(sourceFinalOutput);
      
      console.log('Meter Status: ' + sourceString);
    });
  }



  openLCR() {
    var me = this;
    me.bluetoothSerial.write([0x7E]); //msg prefix
    me.bluetoothSerial.write([0x7E]); //msg prefix
    me.bluetoothSerial.write([0x01]); //To
    me.bluetoothSerial.write([0xFF]); //From
    
    me.bluetoothSerial.write([0x01]); //Status
    me.bluetoothSerial.write([0x02]); //Length

    me.bluetoothSerial.write([0x24]); //Data - Message ID to get field data.  Set to 24h. (Command)
    
    me.bluetoothSerial.write(['0x00']); //Data - command

    me.bluetoothSerial.write([0xbe]); //CRC Hardcoded

    // this.bluetoothSerial.write([0x9d]).then(() => {this.subscribe().then((rmsg) =>  console.log('Response message: ' + rmsg ) ); //CRC Hardcoded
    //                                               console.log('END OF COMMAND : GetProductDesc'); }, () => { console.log('Send command failed'); });

    // this.bluetoothSerial.write([0x9d]).then(() => {this.subscribe().then((rmsg) =>  this.productDesc = rmsg  ); //CRC Hardcoded
    //                                               console.log('Response message: ' + this.productDesc );
    // //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // console.log('END OF COMMAND : GetProductDesc '); }, () => { console.log('Send command failed'); });


    // me.bluetoothSerial.write([0x9d]).then(() => {
    //   me.subscribe().then((res) => {
    //     console.log('Response message: ' + res);
    //   }, (res) => {
    //     console.log('Send command failed: ' + res)
    //   })
    // });    
  }

  //#endregion


  

  //#region CODES: NOT USING

  getProdDesc = function() {
    this.bluetoothSerial.write([0x7E]); //msg prefix
    this.bluetoothSerial.write([0x7E]); //msg prefix
    this.bluetoothSerial.write([0x01]); //To
    this.bluetoothSerial.write([0xFF]); //From
    
    this.bluetoothSerial.write([0x01]); //Status
    this.bluetoothSerial.write([0x02]); //Length

    this.bluetoothSerial.write([0x20]); //Data - Message ID to get field data.  Set to 20h.
    //console.log(HomePage.LCRF_ProductDescriptor_DL.toString(16));
    this.bluetoothSerial.write(['0x'+ MeterDevicePage.LCRF_ProductDescriptor_DL.toString(16)]); //Data - Field number to get 0x0b

    this.bluetoothSerial.write([0xbe]); //CRC Hardcoded
    // this.bluetoothSerial.write([0x9d]).then(() => {this.subscribe().then((rmsg) =>  console.log('Response message: ' + rmsg ) ); //CRC Hardcoded
    //                                               console.log('END OF COMMAND : GetProductDesc'); }, () => { console.log('Send command failed'); });

    this.bluetoothSerial.write([0x9d]).then(() => {this.subscribe().then((rmsg) =>  this.productDesc = rmsg  ); //CRC Hardcoded
                                                  console.log('Response message: ' + this.productDesc );
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    console.log('END OF COMMAND : GetProductDesc '); }, () => { console.log('Send command failed'); });
    
    return this.rmsg;
  }

  getProductCode = function() {
     
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    this.bluetoothSerial.write([0x7E]); //msg prefix
    this.bluetoothSerial.write([0x7E]); //msg prefix
    this.bluetoothSerial.write([0x01]); //To
    this.bluetoothSerial.write([0xFF]); //From
    
    this.bluetoothSerial.write([0x00]); //Status
    this.bluetoothSerial.write([0x02]); //Length

    this.bluetoothSerial.write([0x20]); //Data - Message ID to get field data.  Set to 20h (HARDCODE FOR GET FIELD COMMAND).
    //console.log(HomePage.LCRF_ProductDescriptor_DL.toString(16));
    this.bluetoothSerial.write(['0x'+ MeterDevicePage.LCRF_ProductCode_DL.toString(16)]); //Data - Field number to get 0x0b
        
    this.bluetoothSerial.write([0x85]); //CRC Hardcoded
    this.bluetoothSerial.write([0xae]).then(() => {this.subscribe().then((rmsg) =>  this.productCode = rmsg  ); //CRC Hardcoded
     
    console.log('Response message: ' + this.productCode );
    //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    console.log('END OF COMMAND : GetProductCode '); }, () => { console.log('Send command failed'); });
   
    return this.rmsg;
  }

  //#endregion
  
  
}
