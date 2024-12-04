export class LCR_functions {



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

  DATA_TO_LCR = [];
  DATA_ESC_1 = 126;
  DATA_ESC_2 = 126;
  DATA_TO = 1;
  DATA_FROM = 20;
  DATA_STATUS = 2;
  DATA_LEN = 0;
  DATA_DATA = [];
  DATA_DATA_LEN = 0;
  DATA_CRC_1 = 0;
  DATA_CRC_2 = 0;

  METER_1_NAME = '';
  METER_1_ADDRESS = '';
  METER_1_DEVICE = [];
  METER_1_DATA_TO_LCR = [];
  METER_1_DATA_ESC_1 = 126;
  METER_1_DATA_ESC_2 = 126;
  METER_1_DATA_TO = 1;
  METER_1_DATA_FROM = 20;
  METER_1_DATA_STATUS = 2;
  METER_1_DATA_LEN = 0;
  METER_1_DATA_DATA = [];
  METER_1_DATA_DATA_LEN = 0;
  METER_1_DATA_CRC_1 = 0;
  METER_1_DATA_CRC_2 = 0;

  METER_2_NAME = ''; 
  METER_2_ADDRESS = '';
  METER_2_DEVICE = [];
  METER_2_DATA_TO_LCR = [];
  METER_2_DATA_ESC_1 = 126;
  METER_2_DATA_ESC_2 = 126;
  METER_2_DATA_TO = 2;
  METER_2_DATA_FROM = 20;
  METER_2_DATA_STATUS = 2;
  METER_2_DATA_LEN = 0;
  METER_2_DATA_DATA = [];
  METER_2_DATA_DATA_LEN = 0;
  METER_2_DATA_CRC_1 = 0;
  METER_2_DATA_CRC_2 = 0;




  // Have labeled indicies for each portion of the message.
  // Synchronized Message --> first 2 bytes "~~"
  syncMes1 = 0;
  syncMes2 = 1;

  // The "to" byte is the node address where the message is being received (0-255)
  toByte = 2;

  // The "from" byte is the node address where the message is being sent (0-255)
  fromByte = 3;

  // The "status" byte is the status of the message, this message stays in hex, but is useful to see it in binary
  statusByte = 4;

  // The "len" byte tells us how many bytes will be in the data portion of the LCP message
  lengthByte = 5;

  // This byte is for when we start to determine what the data message is, we will use this as out starting index
  // in our iterations.
  startOfDataIndex = this.lengthByte + 1;

  // The "data" bytes hold the contents of the data portion. These bytes are device specific
  // In order to generalize this size, we take the length of the overall log data stream and subtract 3 from it
  // the first 2 stand for the CRC values, and the last byte is due to the 0-based nature of the array
  dataByteEnd;

  // The "CRC" low order byte
  lowOrderCRC;

  // The "CRC" high order byte
  highOrderCRC;

  // Store the passed in LCP message
  lcpMessage = "";


  BuildGrossPreset(data): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(6));
      me.DATA_TO_LCR.push(me.DecimalToHex(33)); // GROSS PRESET
      me.DATA_TO_LCR.push(me.DecimalToHex(LCR_functions.LCRF_GrossPreset_PL));
      me.DATA_TO_LCR.push(me.DecimalToHex(0));
      me.DATA_TO_LCR.push(me.DecimalToHex(0));
      me.DecimalToHex_Preset(data);    
      
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR);
      console.log(me.DATA_TO_LCR.join(" "));

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      console.log(_data);

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      resolve( LCR_DATA_TO_SEND);
    });
  }

  BuildNetPreset(data): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(6));
      me.DATA_TO_LCR.push(me.DecimalToHex(33)); // NET PRESET
      me.DATA_TO_LCR.push(me.DecimalToHex(LCR_functions.LCRF_NetPreset_PL));
      me.DATA_TO_LCR.push(me.DecimalToHex(0));
      me.DATA_TO_LCR.push(me.DecimalToHex(0));
      me.DecimalToHex_Preset(data);    

      // -> 7e 7e 01 ff 02 06 21 06 00 00 01 F4 10 68
      // -> 7e 7e 02 ff 02 06 21 06 00 00 01 F4 65 a0
      
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR);
      console.log(me.DATA_TO_LCR.join(" "));

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      console.log(_data);

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      resolve( LCR_DATA_TO_SEND);
    });
  }

  StartPump(status): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA] -- status off
      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x00, 0x75, 0xC9] -- status on
      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]

      // var data = new Uint8Array(10);

      // if(status) {
      //   data[0] = 0x7E;
      //   data[1] = 0x7E;
      //   data[2] = 0x01;//to
      //   data[3] = 0x14;//from
      //   data[4] = 0x00;//status
      //   data[5] = 0x02;//length
      //   data[6] = 0x24;//data
      //   data[7] = 0x01;//data
      //   data[8] = 0x45;//data
      //   data[9] = 0xFA;//data
      // }
      // else {
      //   data[0] = 0x7E;
      //   data[1] = 0x7E;
      //   data[2] = 0x01;//to
      //   data[3] = 0x14;//from
      //   data[4] = 0x01;//status
      //   data[5] = 0x02;//length
      //   data[6] = 0x24;//data
      //   data[7] = 0x00;//data
      //   data[8] = 0x75;//data
      //   data[9] = 0xC9;//data
      // }      

      console.log('Proces: StartPump');

      var _DATA_TO_LCR = [];
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      _DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      _DATA_TO_LCR.push(me.DecimalToHex(36)); // DATA
      _DATA_TO_LCR.push(me.DecimalToHex(0)); // DATA
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(_DATA_TO_LCR.join(" "));

      me.BuildCRCMessage(_DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      console.log(_data);

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve(LCR_DATA_TO_SEND);
    });
  }

  StopPump(status): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA] -- status off
      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x00, 0x75, 0xC9] -- status on
      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9] -- status off
      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x00, 0x75, 0xC9]

      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]

      // [0x7E, 0x7E, 0x01, 0x14, 0x05, 0x01, 0x7D, 0x5E, 0x9B]

      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]
      // [0x7E, 0x7E, 0x01, 0x14, 0x04, 0x01, 0x7D, 0x7F, 0x8B]

      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]
      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x24, 0x01, 0x45, 0xFA]
      // [0x7E, 0x7E, 0x01, 0x14, 0x01, 0x02, 0x24, 0x01, 0x74, 0xC9]

      // [0x7E, 0x7E, 0x01, 0x14, 0x00, 0x02, 0x20, 0x05, 0x41, 0xFE]

      // var data = new Uint8Array(10);

      // if(status) {
      //   data[0] = 0x7E;
      //   data[1] = 0x7E;
      //   data[2] = 0x01;//to
      //   data[3] = 0x14;//from
      //   data[4] = 0x00;//status
      //   data[5] = 0x02;//length
      //   data[6] = 0x24;//data
      //   data[7] = 0x01;//data
      //   data[8] = 0x45;//data
      //   data[9] = 0xFA;//data
      // }
      // else {
      //   data[0] = 0x7E;
      //   data[1] = 0x7E;
      //   data[2] = 0x01;//to
      //   data[3] = 0x14;//from
      //   data[4] = 0x01;//status
      //   data[5] = 0x02;//length
      //   data[6] = 0x24;//data
      //   data[7] = 0x01;//data
      //   data[8] = 0x74;//data
      //   data[9] = 0xC9;//data
      // }      

      console.log('Proces: StopPump');

      var _DATA_TO_LCR = [];
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      _DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      _DATA_TO_LCR.push(me.DecimalToHex(36)); // DATA
      _DATA_TO_LCR.push(me.DecimalToHex(1)); // DATA
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(_DATA_TO_LCR.join(" "));

      me.BuildCRCMessage(_DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      console.log(_data);

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve(LCR_DATA_TO_SEND);
    });
  }

  PrintPump(): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      console.log('Proces: PrintPump');

      var _DATA_TO_LCR = [];
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      _DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      _DATA_TO_LCR.push(me.DecimalToHex(36)); // DATA
      _DATA_TO_LCR.push(me.DecimalToHex(2)); // DATA
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      _DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(_DATA_TO_LCR.join(" "));

      me.BuildCRCMessage(_DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      console.log(_data);

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve(LCR_DATA_TO_SEND);
    });
  }

  

  MeterValue(preset_type): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      
      if(preset_type == 'Gross') {
        me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
        me.DATA_TO_LCR.push(me.DecimalToHex(2));  // FIELD NUMBER
      }
      else {
        me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
        me.DATA_TO_LCR.push(me.DecimalToHex(3));  // FIELD NUMBER
      }      

      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve( LCR_DATA_TO_SEND);
    });
  }

  GrossTotalizer(): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_LCR.push(me.DecimalToHex(17));  // FIELD NUMBER
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve( LCR_DATA_TO_SEND);
    });
  }

  NetTotalizer(): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_LCR.push(me.DecimalToHex(18));  // FIELD NUMBER
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve( LCR_DATA_TO_SEND);
    });
  }

  SaleNumber(): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_LCR.push(me.DecimalToHex(22));  // FIELD NUMBER
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve( LCR_DATA_TO_SEND);
    });
  }

  PresetType(): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_LCR.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_LCR.push(me.DecimalToHex(57));  // FIELD NUMBER
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve( LCR_DATA_TO_SEND);
    });
  }




  BuildCRCMessage(message)
  {
    var me = this;
      // Cleanse the text of all spaces or non-LCP characters
      var filteredMessage = message.replace(/[^a-fA-F0-9]/g, "");
      filteredMessage = filteredMessage.toLowerCase();
      me.lcpMessage = filteredMessage;

      // Divide the message into hex bytes (i.e. ff, ef, 0a, etc...)
      var messageHexData = me.dataToHexStrings(filteredMessage);

      // Check the first two header bytes to ensure it's an LCP message
      var headerBytes = me.HexStringToAscii(messageHexData[me.syncMes1]) + me.HexStringToAscii(messageHexData[me.syncMes2]);
      if (headerBytes != "~~")
      {
          console.log("Invalid LCP Message: No \"~~\"");
          return;
      }

      // Initialize message indices
      me.InitIndices();

      // Check to make sure CRC values are valid
      me.CheckCRC(messageHexData);
  }

  dataToHexStrings(filteredMessage)
  {
      // Check to make sure that the passed in message is potentially valid by dividing by 2
      // and that the message is at least 8 bytes long due to the LCP Header

      var hexByteArray = [];

      if ((filteredMessage.length % 2 != 0 || filteredMessage.length < 16))
          console.log("Error: Invalid Message, ensure no bytes have been added or are missing.");

      // Because we are incrementing twice each loop, we want to make sure we don't go out of range of the LCP String

      for (var i = 0; i < filteredMessage.length - 1; i++)
      {
          // For every two characters, we need to create a String and add to the array
          var tempString = "";
          tempString = tempString.concat(filteredMessage.charAt(i));
          tempString = tempString.concat(filteredMessage.charAt(i + 1));

          // Add the hex string to the array and increment the index
          hexByteArray = hexByteArray.concat(tempString);

          // Increment the counter to skip over the character that was already appended
          i++;
      }
      return hexByteArray;
  }

  HexStringToAscii(hexString)
  {
      var decimal = parseInt(hexString, 16);

      // Change the integer to a char
      var result = String.fromCharCode(decimal);
      
      return result;
  }

  CheckCRC(messageHexData)
  {
    var me = this;
      // Convert that data into characters for CRC calculation
    var charData = [];

    for (var i = 0; i < messageHexData.length; i++)
    {
        var currentByte = parseInt(messageHexData[i], 16);
        charData.push(currentByte);
    }

    var crcStartIndex = 2;
    // LCP CRC Values start with "~~"
    var crcValue = 0x7e7e;

    // Loop through the message to modify the crc value

    for (var i = crcStartIndex; i <= me.dataByteEnd; i++)
    {
        // Consistently update the crcValue
        crcValue = me.UpdateCRC(crcValue, charData[i]);
    }

    // Check to make sure the CRC value is 4 characters long
    var temp = "";
    var checkCRCLength = crcValue;

    if (checkCRCLength.toString().length < 4)
    {
        var numToPad = 4 - checkCRCLength.toString().length;
        for (var i = 0; i < numToPad; i++)
            temp += "0";
    }

    // Put the temp string in 2's compliment format
    temp += (crcValue >>> 0).toString(16);

    // Because the CRC value is put into the message low-order --> high-order
    // we need to reverse the position of the bytes

    var lowOrderIndex = temp.length - 2;
    var highOrderIndex = temp.length - 4;
    var lowOrderString = temp.substring(lowOrderIndex, temp.length);
    var highOrderString = temp.substring(highOrderIndex, lowOrderIndex);
    var newCRC = "";
    newCRC += lowOrderString.toUpperCase();
    newCRC += highOrderString.toUpperCase();
    
    var givenCRC = parseInt((messageHexData[messageHexData.length - 2] + messageHexData[messageHexData.length - 1]), 16);
    var checkCRC = parseInt((lowOrderString.toUpperCase() + highOrderString.toUpperCase()), 16);

    // Check to make sure that the calculated CRC value matches the given CRC Value

    var calculatedCRC = checkCRC.toString(16);
    var givenCRC_new = givenCRC.toString(16);
    me.lcpMessage = me.lcpMessage.substr(0, (me.lcpMessage.length - 4));
    me.lcpMessage = me.lcpMessage.concat(calculatedCRC);
    console.log("Passed in CRC: " + givenCRC_new);
    console.log("Calculated CRC: " + calculatedCRC);
    console.log("LCP Message: " + me.lcpMessage);

    if (givenCRC_new == calculatedCRC)
        return true;
    else
        return false;
  }

  UpdateCRC(currentCRC, newByte)
  {
      // Update the value of the CRC by looping throuhg each bit of passed in byte
    // starting at the highest order
    
    for (var i = 7; i >= 0; --i)
    {
        // Shift the CRC value left by one bit and save the resulting carry flag
        var XORFlag = ((currentCRC & 0x8000) != 0x0000);

        currentCRC = ((currentCRC << 1) << 16) >> 16;
        // Logically OR the current bit into the least significant bit of the CRC
        currentCRC |= ((newByte >> i) & 0x01);

        // Check the XORFlag to see if we need to exclusive-or the CRC with 0x1021
        if (XORFlag)
            currentCRC ^= 0x1021;

    }
    //console.log("Outgoing CRC: " + currentCRC);
    return currentCRC;
  }

  InitIndices()
  {
    var me = this;
    me.dataByteEnd = (me.lcpMessage.length / 2) - 3;
    me.lowOrderCRC = (me.lcpMessage.length / 2) - 2;
    me.highOrderCRC = (me.lcpMessage.length / 2) - 1;
  }



  DecimalToHex(value) {
    var _temp_hex = parseFloat(value).toString(16);

    if(Math.abs(_temp_hex.length % 2) == 1) {
      _temp_hex = '0' + _temp_hex;
    }   

    return  _temp_hex;
  }

  DecimalToHex_Preset(value) {
    var me = this;
    var _temp = value + '0';
    var _temp_hex = parseFloat(_temp).toString(16);

    if(Math.abs(_temp_hex.length % 2) == 1) {
      _temp_hex = '0' + _temp_hex;
    }    

    var _data = _temp_hex.match(/.{1,2}/g);
    if(_data.length == 1) {
        me.DATA_TO_LCR.push('00');
    }

    _data.forEach(element => {
      me.DATA_TO_LCR.push(element);
    });

    return me.DATA_TO_LCR;
  }



  // STATIC GETTER BUILDER
  RequestBuilder(data): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      var _length = 2;
      var _message = 32;

      me.DATA_TO_LCR = [];
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_FROM));

      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_LCR.push(me.DecimalToHex(_length)); // LENGTH

      me.DATA_TO_LCR.push(me.DecimalToHex(_message)); // MESSAGE ID     
      me.DATA_TO_LCR.push(me.DecimalToHex(data));  // FIELD NUMBER

      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_LCR.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_LCR);
      console.log(me.DATA_TO_LCR.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_LCR.join(" ").toUpperCase());

      var _data = me.lcpMessage.match(/.{1,2}/g);
      var _final = [];
      _data.forEach(element => {
          _final.push('0x' + element);
      });

      console.log(_data);

      var LCR_DATA_TO_SEND = new Uint8Array(_final.length);
      for(var x = 0; x < _final.length; x++) {
        LCR_DATA_TO_SEND.fill(_final[x],x,x+1);
      }

      console.log(LCR_DATA_TO_SEND);
      resolve( LCR_DATA_TO_SEND);
    });
  }


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

  

}
