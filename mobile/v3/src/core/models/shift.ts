export class Shift {
    
    intShiftMobileId: number;
    intShiftId: number;
    dtmShiftDate: Date;
    intDriverId: number;
    strDriverNo: string;
    strDriverName: string;
    intLocationId: number;
    strLocationName: string;
    intShiftNumber: number;
    dtmStartTime: Date;
    dtmEndTime: Date;
    strTruckName: string;
    intStartOdometer: number;
    intEndOdometer: number;
    dblFuelGallonsDelievered: number;
    dblFuelSales: number;
    intConcurrencyId: number;
    
    public mapping: Object = {
                                intShiftMobileId: 'pk',
                                intShiftId: 'number',
                                dtmShiftDate: 'date',
                                intDriverId: 'number',
                                strDriverNo: 'string',
                                strDriverName: 'string',
                                intLocationId: 'number',
                                strLocationName: 'string',
                                intShiftNumber: 'number',
                                dtmStartTime: 'date',
                                dtmEndTime: 'date',
                                strTruckName: 'string',
                                intStartOdometer: 'number',
                                intEndOdometer: 'number',
                                dblFuelGallonsDelievered: 'number',
                                dblFuelSales: 'number',
                                intConcurrencyId: 'number'                                
                            }
                            
    public tablename:string = 'shift';
}