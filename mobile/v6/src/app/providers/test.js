{/* <script language="JavaScript">

var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'unsigned short LCPBuildMessage(unsigned char to, unsigned char status,
 unsigned char *msg, unsigned char len)
{
// Local variables.
 unsigned char *LCPtxMsgPtr; // pointer to the LCP transmit message buffer
 unsigned short msgLen; // absolute message length
 unsigned short crc; // CRC of message
 unsigned char i; // loop variable
// Build the LCP message header.
 LCPtxMsgPtr = &LCPMsg[0]; // initialize pointer to the LCP transmit buffer
 *LCPtxMsgPtr++ = \'~\'; // insert the first ~
 *LCPtxMsgPtr++ = \'~\'; // insert the second ~
 msgLen = 2U; // length of LCP message
 crc = 0x7E7E; // seed the CRC with the message header
// Build the variable part of the message.
 LCPAppendByte(to, &LCPtxMsgPtr, &msgLen, &crc);
 LCPAppendByte(LCPHostNodeAddress, &LCPtxMsgPtr, &msgLen, &crc);
 LCPAppendByte(status, &LCPtxMsgPtr, &msgLen, &crc);
 LCPAppendByte(len, &LCPtxMsgPtr, &msgLen, &crc);
 for (i=0; i < len; i++) // loop to include the message
 LCPAppendByte(msg[i], &LCPtxMsgPtr, &msgLen, &crc);
 LCPAppendByte((unsigned char)(crc%0x0100), &LCPtxMsgPtr, &msgLen, NULL);
 LCPAppendByte((unsigned char)(crc/0x0100), &LCPtxMsgPtr, &msgLen, NULL);
// LCPBuildMessage exit point.
 return(msgLen); // return the absolute length of the message
}'

document.write(pagecode);

</script> */}