import { Component, OnInit } from '@angular/core';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial/ngx';
import { NavController, NavParams, AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Message } from '../../framework/_common/base/message';
import { LCR_functions } from '../../providers/LCR_functions';
import { LCR_bluetooth } from '../../providers/LCR_bluetooth';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@Component({
  selector: 'app-configuration-meter-device',
  templateUrl: './configuration-meter-device.page.html',
  styleUrls: ['./configuration-meter-device.page.scss'],
})
export class ConfigurationMeterDevicePage implements OnInit {

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


  // DEVICES
  LCPMsg: any;
  ESC:  any = '\x1B';
  LCP_MsgSizeLimit = '523U';
  LCPHostNodeAddress = 1;
  // LCPMsg[LCP_MsgSizeLimit];



  // GLOBAL VARIABLE
  grossqty: 0;
  LCPtxMsgPtr = [];         // pointer to the LCP transmit message buffer
  msgLen: any;              // absolute message length
  crc: any;                 // CRC of message
  i: any;  

  current_connected_id = '';

  meter_1_test_preset_type = '';
  meter_1_test_status = '';  
  meter_1_bluetooth_name = '';
  meter_1_node_address = 1;

  meter_2_test_preset_type = '';
  meter_2_test_status = '';  
  meter_2_bluetooth_name = '';
  meter_2_node_address = 2;


  // ~~<to><from><status><len><data0>...<datalen-1><crc0><crc1>

  // DATA_TO_LCR = [];
  // DATA_ESC_1 = 126;
  // DATA_ESC_2 = 126;
  // DATA_TO = 1;
  // DATA_FROM = 20;
  // DATA_STATUS = 1;
  // DATA_LEN = 0;
  // DATA_DATA = [];
  // DATA_DATA_LEN = 0;
  // DATA_CRC_1 = 0;
  // DATA_CRC_2 = 0;


  constructor(public LCR_functions: LCR_functions, private LCR_bluetooth: LCR_bluetooth, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private messageUtil: Message, private modalCtrl: ModalController, private commonSQL: CommonSQL) {
    this.LCR_bluetooth.enableBluetooth();
  }

  ngOnInit() {
  }

  //#region FUNCTIONS

  ionViewDidEnter() {
    var me = this;
    me.pairedDevices = [];
    this.LCR_bluetooth.getPaired().then((data)=>me.pairedDevices = data);
    
    console.log('METER DEVICE LOADED');

    me.meter_1_test_preset_type = me.LCR_bluetooth.meter_1_test_preset_type;
    me.meter_2_test_preset_type = me.LCR_bluetooth.meter_2_test_preset_type;
    me.meter_1_test_status = me.LCR_bluetooth.meter_1_test_status;
    me.meter_2_test_status = me.LCR_bluetooth.meter_2_test_status;
    me.meter_1_bluetooth_name = me.LCR_functions.METER_1_NAME;
    me.meter_2_bluetooth_name = me.LCR_functions.METER_2_NAME;
    me.meter_1_node_address = me.LCR_functions.METER_1_DATA_TO;
    me.meter_2_node_address = me.LCR_functions.METER_2_DATA_TO;
  }

  getPaired() {
      var me = this;
      me.pairedDevices = [];
      me.LCR_bluetooth.getPaired().then((data)=>me.pairedDevices = data);
  }

  scanDevices() {
      var me = this;
      me.unpairedDevices = [];
      me.gettingDevices = true;

      me.LCR_bluetooth.scanDevices().then((data)=>me.unpairedDevices = data);
  }

  setNodeAddress(node) {
    var me = this;
    if(node == 1) {
      me.LCR_functions.METER_1_DATA_TO = me.meter_1_node_address;
    }
    else {
      me.LCR_functions.METER_2_DATA_TO = me.meter_2_node_address;
    }
    me.messageUtil.showToastMessage("Setup successfully saved.", function() {
      me.modalCtrl.dismiss({
        'dismissed': true
      });
    }, 1000);
  }

  getTestMeterName(node) {
    var me = this;    

    console.log(node);
    
    if(node == 1) {
      me.meter_1_test_status = 'DISCONNECTED';
      me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;

      if(me.current_connected_id != me.LCR_functions.METER_1_ADDRESS) {
        me.LCR_bluetooth.disconnectBluetooth().then((data)=> {
          if(me.meter_2_test_status.indexOf('CONNECTED ') != -1) {
            me.meter_2_test_status = 'DISCONNECTED';
            me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
          }
          me.connectDevice(me.LCR_functions.METER_1_ADDRESS).then((data)=> {
            me.processTestMeterName(node);
          });
        });
      }
      else {
        if(me.meter_2_test_status.indexOf('CONNECTED ') != -1) {
          me.meter_2_test_status = 'DISCONNECTED';
          me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
        }
        me.processTestMeterName(node);
      }
    }
    else {
      me.meter_2_test_status = 'DISCONNECTED';
      me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;

      if(me.current_connected_id != me.LCR_functions.METER_2_ADDRESS) {
        me.LCR_bluetooth.disconnectBluetooth().then((data)=> {
          if(me.meter_1_test_status.indexOf('CONNECTED ') != -1) {
            me.meter_1_test_status = 'DISCONNECTED';
            me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
          }
          me.connectDevice(me.LCR_functions.METER_2_ADDRESS).then((data)=> {
            me.processTestMeterName(node);
          });
        });
      }
      else {
        if(me.meter_1_test_status.indexOf('CONNECTED ') != -1) {
          me.meter_1_test_status = 'DISCONNECTED';
          me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
        }
        me.processTestMeterName(node);
      }
    }
  }

  processTestMeterName(node) {
    var me = this;
    var _lcr = null;

    if(node == 1) {
      me.LCR_functions.DATA_TO = me.LCR_functions.METER_1_DATA_TO;
    }
    else {
      me.LCR_functions.DATA_TO = me.LCR_functions.METER_2_DATA_TO;
    }    

    if(me.LCR_bluetooth.meter_1_test_preset_type.indexOf('Gross') != -1 || me.LCR_bluetooth.meter_2_test_preset_type.indexOf('Gross') != -1) {
      me.LCR_functions.GrossTotalizer().then((data)=>{
        _lcr = data;
        me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
          console.log(data);
          var sourceByte = data;
          var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
          console.log(sourceHexString);
          var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
          console.log(sourceString);
          var sourceFinalOutput = parseInt(sourceString,16) / 10;                         
          console.log('Gross Totalizer: ' + sourceFinalOutput);
  
          if(sourceFinalOutput == NaN || !sourceFinalOutput) {
            me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
              console.log(data);
              var sourceByte = data;
              var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;                         
              console.log('Gross Totalizer: ' + sourceFinalOutput);
              if(node == 1) {
                me.meter_1_test_status = 'CONNECTED (Gross Totalizer: ' + sourceFinalOutput + ')';
                me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;              
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1Start = ' + sourceFinalOutput + ', dblTotalizer1End = ' + sourceFinalOutput + '');
              }
              else {
                me.meter_2_test_status = 'CONNECTED (Gross Totalizer: ' + sourceFinalOutput + ')';
                me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2Start = ' + sourceFinalOutput + ', dblTotalizer2End = ' + sourceFinalOutput + '');
              }            
            });
          }
          else {
            if(node == 1) {
              me.meter_1_test_status = 'CONNECTED (Gross Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1Start = ' + sourceFinalOutput + ', dblTotalizer1End = ' + sourceFinalOutput + '');
            }
            else {
              me.meter_2_test_status = 'CONNECTED (Gross Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2Start = ' + sourceFinalOutput + ', dblTotalizer2End = ' + sourceFinalOutput + '');
            }
          }
        }, (data) => {
          me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
            console.log(data);
            var sourceByte = data;
            var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;                         
            console.log('Gross Totalizer: ' + sourceFinalOutput);
            if(node == 1) {
              me.meter_1_test_status = 'CONNECTED (Gross Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1Start = ' + sourceFinalOutput + ', dblTotalizer1End = ' + sourceFinalOutput + '');
            }
            else {
              me.meter_2_test_status = 'CONNECTED (Gross Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2Start = ' + sourceFinalOutput + ', dblTotalizer2End = ' + sourceFinalOutput + '');
            }
          });
        });
      }, (data) => {
        console.log(data);
        console.log('ERROR');
      });
    }
    else {
      me.LCR_functions.NetTotalizer().then((data)=>{
        _lcr = data;
        me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
          console.log(data);
          var sourceByte = data;
          var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
          console.log(sourceHexString);
          var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
          console.log(sourceString);
          var sourceFinalOutput = parseInt(sourceString,16) / 10;                         
          console.log('Net Totalizer: ' + sourceFinalOutput);
  
          if(sourceFinalOutput == NaN || !sourceFinalOutput) {
            me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
              console.log(data);
              var sourceByte = data;
              var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              var sourceFinalOutput = parseInt(sourceString,16) / 10;                         
              console.log('Net Totalizer: ' + sourceFinalOutput);
              if(node == 1) {
                me.meter_1_test_status = 'CONNECTED (Net Totalizer: ' + sourceFinalOutput + ')';
                me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;              
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1Start = ' + sourceFinalOutput + ', dblTotalizer1End = ' + sourceFinalOutput + '');
              }
              else {
                me.meter_2_test_status = 'CONNECTED (Net Totalizer: ' + sourceFinalOutput + ')';
                me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2Start = ' + sourceFinalOutput + ', dblTotalizer2End = ' + sourceFinalOutput + '');
              }            
            });
          }
          else {
            if(node == 1) {
              me.meter_1_test_status = 'CONNECTED (Net Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1Start = ' + sourceFinalOutput + ', dblTotalizer1End = ' + sourceFinalOutput + '');
            }
            else {
              me.meter_2_test_status = 'CONNECTED (Net Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2Start = ' + sourceFinalOutput + ', dblTotalizer2End = ' + sourceFinalOutput + '');
            }
          }
        }, (data) => {
          me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
            console.log(data);
            var sourceByte = data;
            var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            var sourceFinalOutput = parseInt(sourceString,16) / 10;                         
            console.log('Net Totalizer: ' + sourceFinalOutput);
            if(node == 1) {
              me.meter_1_test_status = 'CONNECTED (Net Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer1Start = ' + sourceFinalOutput + ', dblTotalizer1End = ' + sourceFinalOutput + '');
            }
            else {
              me.meter_2_test_status = 'CONNECTED (Net Totalizer: ' + sourceFinalOutput + ')';
              me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET dblTotalizer2Start = ' + sourceFinalOutput + ', dblTotalizer2End = ' + sourceFinalOutput + '');
            }
          });
        });
      }, (data) => {
        console.log(data);
        console.log('ERROR');
      });
    }
       
  }

  assignToMeter(node, device) {
    var me = this;
    if(node == 1) {
      me.meter_1_bluetooth_name = device.name;
      me.LCR_functions.METER_1_NAME = device.name;
      me.LCR_functions.METER_1_ADDRESS = me.current_connected_id;
    }
    else {
      me.meter_2_bluetooth_name = device.name;
      me.LCR_functions.METER_2_NAME = device.name;
      me.LCR_functions.METER_2_ADDRESS = me.current_connected_id;
    }    
  }

  getGetPresetType(node) {
    var me = this;    

    console.log(node);
    
    if(node == 1) {
      me.meter_1_test_preset_type = '';
      me.LCR_bluetooth.meter_1_test_preset_type = me.meter_1_test_preset_type;
      me.meter_1_test_status = 'DISCONNECTED';
      me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;

      if(me.current_connected_id != me.LCR_functions.METER_1_ADDRESS) {
        me.LCR_bluetooth.disconnectBluetooth().then((data)=> {
          if(me.meter_2_test_preset_type != '') {
            me.meter_2_test_preset_type = '';
            me.LCR_bluetooth.meter_2_test_preset_type = me.meter_2_test_preset_type;
          }
          if(me.meter_2_test_status.indexOf('CONNECTED ') != -1) {
            me.meter_2_test_status = 'DISCONNECTED';
            me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
          }
          me.connectDevice(me.LCR_functions.METER_1_ADDRESS).then((data)=> {
            me.processPresetType(node).then(()=>{
              me.processTestMeterName(node);
            });
          });
        });
      }
      else {
        if(me.meter_2_test_preset_type != '') {
          me.meter_2_test_preset_type = '';
          me.LCR_bluetooth.meter_2_test_preset_type = me.meter_2_test_preset_type;
        }
        if(me.meter_2_test_status.indexOf('CONNECTED ') != -1) {
          me.meter_2_test_status = 'DISCONNECTED';
          me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;
        }
        me.processPresetType(node).then(()=>{
          me.processTestMeterName(node);
        });
      }
    }
    else {
      me.meter_2_test_preset_type = '';
      me.LCR_bluetooth.meter_2_test_preset_type = me.meter_2_test_preset_type;
      me.meter_2_test_status = 'DISCONNECTED';
      me.LCR_bluetooth.meter_2_test_status = me.meter_2_test_status;

      if(me.current_connected_id != me.LCR_functions.METER_2_ADDRESS) {
        me.LCR_bluetooth.disconnectBluetooth().then((data)=> {
          if(me.meter_1_test_preset_type != '') {
            me.meter_1_test_preset_type = '';
            me.LCR_bluetooth.meter_1_test_preset_type = me.meter_1_test_preset_type;
          }
          if(me.meter_1_test_status.indexOf('CONNECTED ') != -1) {
            me.meter_1_test_status = 'DISCONNECTED';
            me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
          }
          me.connectDevice(me.LCR_functions.METER_2_ADDRESS).then((data)=> {
            me.processPresetType(node).then(()=>{
              me.processTestMeterName(node);
            });
          });
        });
      }
      else {
        if(me.meter_1_test_preset_type != '') {
          me.meter_1_test_preset_type = '';
          me.LCR_bluetooth.meter_1_test_preset_type = me.meter_1_test_preset_type;
        }
        if(me.meter_1_test_status.indexOf('CONNECTED ') != -1) {
          me.meter_1_test_status = 'DISCONNECTED';
          me.LCR_bluetooth.meter_1_test_status = me.meter_1_test_status;
        }
        me.processPresetType(node).then(()=>{
          me.processTestMeterName(node);
        });
      }
    }
  }

  processPresetType(node): Promise<any> {
    var me = this;
    var _lcr = null;

    return new Promise ((resolve, reject) => {
    
      if(node == 1) {
        me.LCR_functions.DATA_TO = me.LCR_functions.METER_1_DATA_TO;
      }
      else {
        me.LCR_functions.DATA_TO = me.LCR_functions.METER_2_DATA_TO;
      }    

      //7E 7E 14 01 82 03 00 21 00 57 A9 
      //7e 7e ff 01 82 03 00 21 00 df c8

      me.LCR_functions.PresetType().then((data)=>{
        _lcr = data;
        me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
          console.log(data);
          var sourceByte = data;
          var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
          console.log(sourceHexString);
          var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
          console.log(sourceString);

          var _presetType = 'Gross';
          var sourceFinalOutput = parseInt(sourceString,16) / 10;                         
          if(sourceFinalOutput != 0) {
            _presetType = 'Net';
          }
          console.log(_presetType + ' Preset Type: ' + sourceFinalOutput);

          if(sourceFinalOutput == NaN || !sourceFinalOutput) {
            me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
              console.log(data);
              var sourceByte = data;
              var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
              console.log(sourceHexString);
              var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
              console.log(sourceString);
              
              var _presetType = 'Gross';
              var sourceFinalOutput = parseInt(sourceString,16) / 10;
              if(sourceFinalOutput != 0) {
                _presetType = 'Net';
              }
              console.log(_presetType + ' Preset Type: ' + sourceFinalOutput);
          
              if(node == 1) {
                me.meter_1_test_preset_type = 'Preset Type: ' + _presetType + '';
                me.LCR_bluetooth.meter_1_test_preset_type = me.meter_1_test_preset_type;              
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType1 = \'' + _presetType + '\'');
              }
              else {
                me.meter_2_test_preset_type = 'Preset Type: ' + _presetType + '';
                me.LCR_bluetooth.meter_2_test_preset_type = me.meter_2_test_preset_type;
                me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType2 = \'' + _presetType + '\'');
              }            
              resolve(true);
            });
          }
          else {
            if(node == 1) {
              me.meter_1_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.LCR_bluetooth.meter_1_test_preset_type = me.meter_1_test_preset_type;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType1 = \'' + _presetType + '\'');
            }
            else {
              me.meter_2_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.LCR_bluetooth.meter_2_test_preset_type = me.meter_2_test_preset_type;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType2 = \'' + _presetType + '\'');
            }

            resolve(true);
          }
        }, (data) => {
          me.LCR_bluetooth.sendToDevice(_lcr).then((data)=> {
            console.log(data);
            var sourceByte = data;
            var sourceHexString = me.LCR_functions.byteToHexString(sourceByte);
            console.log(sourceHexString);
            var sourceString = me.LCR_functions.GetOutputDataAsString(sourceHexString).substring(4);
            console.log(sourceString);
            
            var _presetType = 'Gross';
            var sourceFinalOutput = parseInt(sourceString,16) / 10;
            if(sourceFinalOutput != 0) {
              _presetType = 'Net';
            }
            console.log(_presetType + ' Preset Type: ' + sourceFinalOutput);

            if(node == 1) {
              me.meter_1_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.LCR_bluetooth.meter_1_test_preset_type = me.meter_1_test_preset_type;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType1 = \'' + _presetType + '\'');
            }
            else {
              me.meter_2_test_preset_type = 'Preset Type: ' + _presetType + '';
              me.LCR_bluetooth.meter_2_test_preset_type = me.meter_2_test_preset_type;
              me.commonSQL.updateDataQuery('UPDATE globalinfo SET strPresetType2 = \'' + _presetType + '\'');
            }
            resolve(true);
          });
        });
      }, (data) => {
        console.log(data);
        console.log('ERROR');
        reject(true);
      });    

    });
  }


  // getPaired() {
  //   var me = this;
  //   me.pairedDevices = [];
  //   me.bluetoothSerial.list().then((list) => {
  //     console.log(list);
  //     var _list = list;
  //     me.bluetoothSerial.isConnected().then((res) => {
  //       console.log(res);       
  //       console.log(_list); 
  //       _list.forEach(item => {
  //         console.log(item);
  //         if(item.id == me.connectedToDeviceID) {
  //           item.ysnConnected = 'true';
  //         }
  //         me.pairedDevices.push(item);          
  //       });
  //     },
  //     (err) => {
  //       console.log(err);
  //       me.pairedDevices = _list;
  //     });      
  //   },
  //   (err) => {
  //     console.log(err);
  //   });
  // }

  // scanDevices() {
  //   var me = this;
  //   me.unpairedDevices = [];
  //   me.gettingDevices = true;
  //   me.bluetoothSerial.discoverUnpaired().then((res) => {
  //     me.gettingDevices = false;
  //     res.forEach(item => {
  //       console.log(item);
  //       if(item.name) me.unpairedDevices.push(item);
  //     });
  //   },
  //   (err) => {
  //     console.log(err);
  //   });
  // }

  // sendToDevice(data: any) {
  //   var me = this;

  //   console.log(data.buffer);

  //   return new Promise ((resolve, reject) => {
  //     me.bluetoothSerial.write(data.buffer).then(() => {
  //       console.log('clear');
  //       me.bluetoothSerial.clear().then(() => {
  //         console.log('processToDevice');
  //         me.processToDevice().then((res) => {
  //           console.log(res);            
  //           resolve(res);            
  //         },
  //         (error) => {
  //           console.log(error)
  //         });          
  //       });
  //     });
  //   });
  // }

  // processToDevice() {
  //   var me = this;
  //   var _byteArray = [];

  //   return new Promise ((resolve, reject) => {
  //     me.msgTotalLen = 0; //reset every call
  //     me.ReturnMsg = '';  
  //     var msgPreBytes = new Uint8Array(6)
    
  //     me.bluetoothSerial.subscribeRawData().subscribe((data) => {
  //       var bytes = new Uint8Array(data);
  //       if(me.msgTotalLen <= 0 ){
  //         msgPreBytes.set(bytes.slice(0,6),0);
  //       }
  //       me.msgTotalLen += bytes.length;
  //       // me.ReturnMsg += me.byteToHexString(bytes);

  //       // console.log('Message Prefix : ' + msgPreBytes);
  //       // console.log('Raw Bytes: ' + bytes);
  //       // console.log('Direct Convert: ' + me.byteToHexString(bytes));
  //       // console.log('HexString: ' + me.ReturnMsg);        
  //       // console.log(_byteArray);
  //       // console.log('---------- END BLUETOOTH -------------');

  //       if (me.msgTotalLen < 6) { //skip
  //       }
  //       else if((me.msgTotalLen-6) < msgPreBytes[5]) { //skip
  //       }
  //       else{
  //         resolve(bytes);
  //         me.bluetoothSerial.clear();
  //       }
  //     }, (error) => {
  //       console.log('Failed: ' + error);            
  //       reject(error);
  //     });
      
  //   });
  // }

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

  async connectDevice(address: any) {
    var me = this;
    // me.pairedDevices = [];
    me.LCR_bluetooth.connectDevice(address).then((data)=> {
      console.log(data);
      me.current_connected_id = data;
      me.LCR_bluetooth.getPaired().then((data)=>me.pairedDevices = data);
    });   
  }

  // async connectDevice(address: any) {
  //   var me = this;

  //   let loader = await me.loadingCtrl.create({message: "Connecting...", backdropDismiss: true});

  //   let alert = await me.alertCtrl.create({
  //     message: 'Do you want to connect with?',
  //     buttons: [        
  //       {
  //         text: 'Connect',
  //         handler: () => {
  //           loader.present();
  //           me.bluetoothSerial.connect(address.id).subscribe((res) => { 
  //             console.log('connected');

  //             setTimeout(() => {
  //               console.log('get paired');                
  //               me.connectedToDeviceID = address.id;
  //               me.getPaired();
  //               me.startDeviceToListen();
  //               loader.dismiss();
  //             }, 5000);

  //           },
  //           (res) => {
  //             me.alertCtrl.create({message: res});
  //             loader.dismiss();
  //           });
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
  //   alert.present();
  // }

  async disconnectDevice(address: any) {
    var me = this;
    me.LCR_bluetooth.disconnectDevice(address);    
  }

  async disconnectBluetooth() {
    var me = this;
    me.LCR_bluetooth.disconnectBluetooth();
  }

  // async disconnectDevice(address: any) {
  //   var me = this;

  //   let loader = await me.loadingCtrl.create({message: "Disconnecting...", backdropDismiss: true});
  //   let alert = await me.alertCtrl.create({
  //     message: 'Do you want to Disconnect?',
  //     buttons: [
  //       {
  //         text: 'Cancel',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       },
  //       {
  //         text: 'Disconnect',
  //         handler: () => {
  //           loader.present();
  //           me.bluetoothSerial.disconnect().then((res) => {
  //             address.ysnConnected = 'false';
  //             loader.dismiss();
  //           }, (res) => {
  //             me.alertCtrl.create({message: res}); 
  //             loader.dismiss();
  //           });
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

  //#endregion


  //#region DEVICE


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

    // me.sendToDevice(data);
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

    // me.meterDeviceLoop = setInterval(() => 
    //   me.sendToDevice(data).then((res) => {
    //     console.log(res);      

    //     var sourceByte = res;
    //     var sourceHexString = me.byteToHexString(sourceByte);
    //     console.log(sourceHexString);
    //     var sourceString = me.GetOutputDataAsString(sourceHexString).substring(4);
    //     console.log(sourceString);
    //     var sourceFinalOutput = parseInt(sourceString,16) / 10; 
    //     me.resultMeterValue.push(sourceFinalOutput);
        
    //     console.log('Meter Gross Amount: ' + sourceFinalOutput);
    //   }
    // ),500);
  }

  stopMeterData() {
    var me = this;
    window.clearInterval(me.meterDeviceLoop); 
  }

  setGrossData() {
    var me = this;    

    var data = new Uint8Array(14);
    data[0] = 0x7E;
    data[1] = 0x7E;
    data[2] = 0x01;//to
    data[3] = 0x14;//from
    data[4] = 0x00;//status
    data[5] = 0x06;//length
    data[6] = 0x21;//data
    data[7] = 0x05;//data
    data[8] = 0x00;//data
    data[9] = 0x00;//data
    data[10] = 0x13;//data // 500
    data[11] = 0x88;//CRC // 500
    data[12] = 0x10;//CRC
    data[13] = 0xBE;//CRC




    data[0] = 0x7E;
    data[1] = 0x7E;
    data[2] = 0x01;//to
    data[3] = 0x14;//from
    data[4] = 0x00;//status
    data[5] = 0x06;//length
    data[6] = 0x21;//data
    data[7] = 0x05;//data
    data[8] = 0x00;//data
    data[9] = 0x00;//data
    data[10] = 0x13;//data // 500
    data[11] = 0x88;//CRC // 500
    data[12] = 0xf0;//CRC
    data[13] = 0x41;//CRC

    data[0] = 0x7E;
    data[1] = 0x7E;
    data[2] = 0x01;//to
    data[3] = 0x14;//from
    data[4] = 0x01;//status
    data[5] = 0x06;//length
    data[6] = 0x21;//data
    data[7] = 0x05;//data
    data[8] = 0x00;//data
    data[9] = 0x00;//data
    data[10] = 0x00;//data // 11
    data[11] = 0x6E;//CRC // 11
    data[12] = 0xF6;//CRC
    data[13] = 0xAD;//CRC

    

    // var data = this.createHexaDecimal_set(me.grossqty);
    me.resultMeterValue = [];

    // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x06, 0x21, 0x05, 0x00, 0x00, 0x01, 0xC2, 0xFA, 0xE9]

    // // me.setGrossDeviceLoop = setInterval(() => 
    //   me.sendToDevice(data).then((res) => {
    //     console.log(res);      

    //     var sourceByte = res;
    //     var sourceHexString = me.byteToHexString(sourceByte);
    //     console.log(sourceHexString);
    //     var sourceString = me.GetOutputDataAsString(sourceHexString).substring(4);
    //     console.log(sourceString);
    //     var sourceFinalOutput = parseInt(sourceString,16) / 10; 
    //     me.resultMeterValue.push(sourceFinalOutput);
        
    //     console.log('Meter Gross Amount: ' + sourceFinalOutput);
    //   });
    // // ),500);
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

    // me.sendToDevice(data).then((res) => {
    //   console.log(res);      

    //   var sourceByte = res;
    //   var sourceHexString = me.byteToHexString(sourceByte);
    //   console.log(sourceHexString);
    //   var sourceString = me.GetOutputDataAsString(sourceHexString).substring(4);
    //   console.log(sourceString);
    //   var sourceFinalOutput = parseInt(sourceString,16) / 10; 
    //   me.resultMeterStatus.push(sourceFinalOutput);
      
    //   console.log('Meter Status: ' + sourceString);
    // });
  }

  openLCR() {
    var me = this;
    // me.bluetoothSerial.write([0x7E]); //msg prefix
    // me.bluetoothSerial.write([0x7E]); //msg prefix
    // me.bluetoothSerial.write([0x01]); //To
    // me.bluetoothSerial.write([0xFF]); //From
    
    // me.bluetoothSerial.write([0x01]); //Status
    // me.bluetoothSerial.write([0x02]); //Length

    // me.bluetoothSerial.write([0x24]); //Data - Message ID to get field data.  Set to 24h. (Command)
    
    // me.bluetoothSerial.write(['0x00']); //Data - command

    // me.bluetoothSerial.write([0xbe]); //CRC Hardcoded

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

  test_dynamic(value) {
    var me = this;

    var _value = 500;
    // var _data = me.LCR_functions.BuildPreset(_value);

    // console.log(_data);

    // var data = new Uint8Array(_data.length);
    // for(var x = 0; x < _data.length; x++) {
    //   data.fill(_data[x],x,x+1);
    // }

    // console.log(_data);
    me.resultMeterValue = [];

    // me.sendToDevice(data).then((res) => {
    //   console.log(res);      
    // });



    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_LEN));

    // me.DATA_TO_LCR.push(me.DecimalToHex(ConfigurationMeterDevicePage.LCRF_GrossPreset_PL));
    // me.DATA_TO_LCR.push(me.DecimalToHex(0));
    // me.DATA_TO_LCR.push(me.DecimalToHex(0));
    // me.DecimalToHex_Preset(500);

    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
    // me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

    // console.log(me.DATA_TO_LCR);

    // me.LCR_functions.BuildLCRMessage('7E 7E 01 14 00 06 21 05 00 00 13 88 00 00');
    
    // me.LCPBuildMessage(1,1,[126,126,1,20,1,6,33,5,0,0,19,136], 6); 
  }




  //#endregion




}
