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
    strLocationNumber: string;
    ysnShiftOnGoing: boolean;
    intShiftId: number;
    intShiftCounter: number;
    dtmStartShiftDate: Date;
    dtmEndShiftDate: Date;
    intTruckId: number;
    strTruckNumber: string;

    ContactParentId: number;
    CompanyName: string;

    strTruckInspectionPDF: string;
    strHosePipingCheckPDF: string;
    strReviewShiftPDF: string;

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
    strPresetType1: string; 
    strPresetType2: string;

    strTotalOrderReceived: string;
    ysnLogged: boolean;

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
                                strLocationNumber: 'string',
                                ysnShiftOnGoing: 'boolean',
                                intShiftId: 'number',
                                intShiftCounter: 'number',
                                dtmStartShiftDate: 'date',
                                dtmEndShiftDate: 'date',
                                intTruckId: 'number',
                                strTruckNumber: 'string',

                                strTruckInspectionPDF: 'string',
                                strHosePipingCheckPDF: 'string',
                                strReviewShiftPDF: 'string',

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

                                strPresetType1: 'string',
                                strPresetType2: 'string',
                                
                                strTotalOrderReceived: 'string',

                                ContactParentId: 'number',
                                CompanyName: 'string',
                                ysnLogged: 'boolean'
                            }

    public tablename:string = 'globalinfo';
}