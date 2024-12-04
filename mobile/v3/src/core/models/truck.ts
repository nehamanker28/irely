export class Truck {
    public mapping: Object = {
                                intTruckMobileId: 'pk',
                                intTruckId: 'number',
                                intTruckNumber: 'number',
                                strType: 'string',
                                strInfo: 'string',
                                strOdometerReading: 'string'
                            }

    public tablename:string = 'truck';
}