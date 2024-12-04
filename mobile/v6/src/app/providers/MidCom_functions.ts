export class MidCom_functions {

  DATA_TO_MidCom = [];
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
  METER_1_DATA_TO_MidCom = [];
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
  METER_2_DATA_TO_MidCom = [];
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

  // Store the passed in LCP message
  lcpMessage = "";


  BuildGrossPreset(data): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(6));
      me.DATA_TO_MidCom.push(me.DecimalToHex(33)); // GROSS PRESET
      me.DATA_TO_MidCom.push(me.DecimalToHex(MidCom_functions.LCRF_GrossPreset_PL));
      me.DATA_TO_MidCom.push(me.DecimalToHex(0));
      me.DATA_TO_MidCom.push(me.DecimalToHex(0));
      me.DecimalToHex_Preset(data);    
      
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom);
      console.log(me.DATA_TO_MidCom.join(" "));

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(6));
      me.DATA_TO_MidCom.push(me.DecimalToHex(33)); // NET PRESET
      me.DATA_TO_MidCom.push(me.DecimalToHex(MidCom_functions.LCRF_NetPreset_PL));
      me.DATA_TO_MidCom.push(me.DecimalToHex(0));
      me.DATA_TO_MidCom.push(me.DecimalToHex(0));
      me.DecimalToHex_Preset(data);    
      
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom);
      console.log(me.DATA_TO_MidCom.join(" "));

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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

      console.log('Proces: StartPump');

      var _DATA_TO_MidCom = [];
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      _DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      _DATA_TO_MidCom.push(me.DecimalToHex(36)); // DATA
      _DATA_TO_MidCom.push(me.DecimalToHex(0)); // DATA
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(_DATA_TO_MidCom.join(" "));

      me.BuildCRCMessage(_DATA_TO_MidCom.join(" ").toUpperCase());

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

      console.log('Proces: StopPump');

      var _DATA_TO_MidCom = [];
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      _DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      _DATA_TO_MidCom.push(me.DecimalToHex(36)); // DATA
      _DATA_TO_MidCom.push(me.DecimalToHex(1)); // DATA
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(_DATA_TO_MidCom.join(" "));

      me.BuildCRCMessage(_DATA_TO_MidCom.join(" ").toUpperCase());

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

      var _DATA_TO_MidCom = [];
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      _DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      _DATA_TO_MidCom.push(me.DecimalToHex(36)); // DATA
      _DATA_TO_MidCom.push(me.DecimalToHex(2)); // DATA
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      _DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(_DATA_TO_MidCom.join(" "));

      me.BuildCRCMessage(_DATA_TO_MidCom.join(" ").toUpperCase());

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

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      
      if(preset_type == 'Gross') {
        me.DATA_TO_MidCom.push(me.DecimalToHex(32)); // MESSAGE ID     
        me.DATA_TO_MidCom.push(me.DecimalToHex(2));  // FIELD NUMBER
      }
      else {
        me.DATA_TO_MidCom.push(me.DecimalToHex(32)); // MESSAGE ID     
        me.DATA_TO_MidCom.push(me.DecimalToHex(3));  // FIELD NUMBER
      }      

      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_MidCom.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_MidCom.push(me.DecimalToHex(17));  // FIELD NUMBER
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_MidCom.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_MidCom.push(me.DecimalToHex(18));  // FIELD NUMBER
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_MidCom.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_MidCom.push(me.DecimalToHex(22));  // FIELD NUMBER
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(2)); // LENGTH
      me.DATA_TO_MidCom.push(me.DecimalToHex(32)); // MESSAGE ID     
      me.DATA_TO_MidCom.push(me.DecimalToHex(57));  // FIELD NUMBER
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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
        me.DATA_TO_MidCom.push('00');
    }

    _data.forEach(element => {
      me.DATA_TO_MidCom.push(element);
    });

    return me.DATA_TO_MidCom;
  }



  // STATIC GETTER BUILDER
  RequestBuilder(data): Promise<any> {
    var me = this;
    return new Promise((resolve, reject) => {

      var _length = 2;
      var _message = 32;

      me.DATA_TO_MidCom = [];
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_ESC_2));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_TO));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_FROM));

      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_STATUS));
      me.DATA_TO_MidCom.push(me.DecimalToHex(_length)); // LENGTH

      me.DATA_TO_MidCom.push(me.DecimalToHex(_message)); // MESSAGE ID     
      me.DATA_TO_MidCom.push(me.DecimalToHex(data));  // FIELD NUMBER

      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_1));
      me.DATA_TO_MidCom.push(me.DecimalToHex(me.DATA_CRC_2));

      console.log(me.DATA_TO_MidCom);
      console.log(me.DATA_TO_MidCom.join(" ").toUpperCase());

      me.BuildCRCMessage(me.DATA_TO_MidCom.join(" ").toUpperCase());

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
