export class OutOfGas {    
    intOutOfGasId: number;
    intCustomerId: number;
    intSiteId: number;
    strCustomerNo: string;
    strCustomerName: string;
    strSiteNo: string;
    strSiteDescription: string;
    strSerialNo: string;
    dblCapacity: number;
    strTankDescription: string;
    strLeakTestStatus: string;
    dblPressureReading: number;
    dblMinutesHeld: number;
    ysnTaggedLocked: boolean;
    ysnCustomerNotified: boolean;
    ysnAppliancesLit: boolean;
    strNoted: string;

    strCustomerBillingAddressA: string;
    strCustomerBillingAddressB: string;
    strSiteAddressA: string;
    strSiteAddressB: string;
    strDriverNumber: string;
    dtmDate: Date;

    public mapping: Object = {
                        intOutOfGasId: 'pk',
                        intCustomerId: 'number',
                        intSiteId: 'number',
                        strCustomerNo: 'string',
                        strCustomerName: 'string',
                        strSiteNo: 'string',
                        strSiteDescription: 'string',
                        strSerialNo: 'string',
                        dblCapacity: 'number',
                        strTankDescription: 'string',
                        strLeakTestStatus: 'string',
                        dblPressureReading: 'number',
                        dblMinutesHeld: 'number',
                        ysnTaggedLocked: 'boolean',
                        ysnCustomerNotified: 'boolean',
                        ysnAppliancesLit: 'boolean',
                        strNoted: 'string',

                        strCustomerBillingAddressA: 'string',
                        strCustomerBillingAddressB: 'string',
                        strSiteAddressA: 'string',
                        strSiteAddressB: 'string',
                        strDriverNumber: 'string',
                        dtmDate: 'date'
                    };

    public tablename:string = 'outofgas';
}