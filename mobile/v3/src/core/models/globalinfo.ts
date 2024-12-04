export class GlobalInfo {
    intGlobal: number;
    intUserMobileId: number;
    intUserId: number;
    strUserName: string;
    strPassword: string;
    strFullName: string;
    intDriverNumber: number;                              
    intLocation: number;
    strLocation: string;
    ysnShiftOnGoing: boolean;
    intShiftId: number;
    intShiftCounter: number;
    dtmStartShiftDate: Date;
    dtmEndShiftDate: Date;
    intTruckNumber: number;
    strTruckNumber: string;

    ContactParentId: number;
    CompanyName: string;

    dtmReceivedOrders: Date;
    dtmReceivedFullData: Date;
    dtmLoadInventory: Date;
    dtmTruckInspection: Date;
    dtmHosePipingCheck: Date;

    dblOdometerStart: number;
    dblOdometerEnd: number;
    dblTotalizer1Start: number;
    dblTotalizer2Start: number;
    dblTotalizer1End: number; 
    dblTotalizer2End: number;

    strTotalOrderReceived: string;

    public mapping: Object = {
                                intGlobal: 'pk',
                                intUserMobileId: 'number',
                                intUserId: 'number',
                                strUserName: 'string',
                                strPassword: 'string',
                                strFullName: 'string',
                                intDriverNumber: 'number',                                
                                intLocation: 'number',
                                strLocation: 'string',
                                ysnShiftOnGoing: 'boolean',
                                intShiftId: 'number',
                                intShiftCounter: 'number',
                                dtmStartShiftDate: 'date',
                                dtmEndShiftDate: 'date',
                                intTruckNumber: 'number',
                                strTruckNumber: 'string',

                                dtmReceivedOrders: 'date',
                                dtmReceivedFullData: 'date',
                                dtmLoadInventory: 'date',
                                dtmTruckInspection: 'date',
                                dtmHosePipingCheck: 'date',

                                dblOdometerStart: 'number',
                                dblOdometerEnd: 'number',
                                dblTotalizer1Start: 'number',
                                dblTotalizer2Start: 'number',
                                dblTotalizer1End: 'number',
                                dblTotalizer2End: 'number',
                                
                                strTotalOrderReceived: 'string',

                                ContactParentId: 'number',
                                CompanyName: 'string'
                            }

    public tablename:string = 'globalinfo';
}