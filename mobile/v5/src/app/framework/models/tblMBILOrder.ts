export class MBILOrder {
    intOrderMobileId: number;
    intOrderId: number;
    intDispatchId: number;
    strOrderNumber: string;
    strOrderStatus: string;
    dtmRequestedDate: Date;
    intEntityId: number;
    strCustomerNumber: string;
    strCustomerName: string;
    intTermId: number;
    strTerm: string;
    strComments: string;
    intDriverId: number;
    strDriverNo: string;
    strDriverName: string;
    intRouteId: number;
    strRouteId: string;
    intSequence: number;
    intStopNumber: number;
    intConcurrencyId: number;
    
    public mapping: Object = {
                                intOrderMobileId: 'pk',
                                intOrderId: 'number',
                                intDispatchId: 'number',
                                strOrderNumber: 'string',
                                strOrderStatus: 'string',
                                dtmRequestedDate: 'date',
                                intEntityId: 'number',
                                strCustomerNumber: 'string',
                                strCustomerName: 'string',
                                intTermId: 'number',
                                strTerm: 'string',
                                strComments: 'string',
                                intDriverId: 'number',
                                strDriverNo: 'string',
                                strDriverName: 'string',
                                intRouteId: 'number',
                                strRouteId: 'string',
                                intSequence: 'number',
                                intStopNumber: 'number',
                                intConcurrencyId: 'number'
                            };

    public tablename:string = 'tblMBILOrder';
}