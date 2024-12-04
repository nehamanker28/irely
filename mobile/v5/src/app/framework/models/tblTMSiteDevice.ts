export class TMSiteDevice {        
    public mapping: Object = {
                                intSiteDeviceMobileId: 'pk',
                                intSiteDeviceID: 'number',
                                intDeviceId: 'number',
                                intSiteID: 'number',
                                strDeviceType: 'string',
                                strSerialNumber: 'string',
                                strDescription: 'string',
                                dblTankCapacity: 'number'
                            }

    public tablename:string = 'tblTMSiteDevice';
}