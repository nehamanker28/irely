export class Device {        
    public mapping: Object = {
                                intSiteDeviceMobileId: 'pk',
                                intSiteDeviceId: 'number',
                                intDeviceId: 'number',
                                intSiteId: 'number',
                                strDeviceType: 'string',
                                strSerialNumber: 'string',
                                strDescription: 'string',
                                dblTankCapacity: 'number'
                            }

    public tablename:string = 'device';
}