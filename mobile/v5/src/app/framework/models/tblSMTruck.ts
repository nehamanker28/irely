export class SMTruck {
    public mapping: Object = {
                                intTruckMobileId: 'pk',
                                intTruckId: 'number',
                                strTruckNumber: 'string',
                                strType: 'string',
                                strDescription: 'string',
                                strOdometerReading: 'string',
                                dblCapacity: 'number',
                                intItemNo: 'number'
                            }

    public tablename:string = 'tblSMTruck';
}