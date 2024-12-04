export class OrderSite {        
    intOrderSiteMobileId: number;
    dblTankCapacity: number;
    dtmRequestedDate: Date;
    intConcurrencyId: number;
    intContractDetailId: number;
    intContractSeq: number;
    intDriverId: number;
    intEntityId: number;
    intFreightTermId: number;
    intLocationId: number;
    intMBILOrderId: number;
    intMBILOrderSiteId: number;
    intOrderId: number;
    intRouteId: number;
    intShipToId: number;
    intSiteId: number;
    intSiteNumber: number;
    intStopNumber: number;
    intTaxStateID: number;
    intTermId: number;
    intUserId: number;
    strClientID: string;
    strComments: string;
    strContractNumber: string;
    strCustomerNumber: string;
    strDriver: string;
    strLocation: string;
    strOrderNumber: string;
    strOrderStatus: string;
    strRouteNumber: string;
    strRowState: string;
    strSerialNumber: string;
    strSiteName: string;
    strTermId: string;
    strUser: string;

    public mapping: Object = {
                                intOrderSiteMobileId: 'pk',
                                dblTankCapacity: 'number',
                                dtmRequestedDate:"date",
                                intConcurrencyId: 'number',
                                intContractDetailId: 'number',
                                intContractSeq: 'number',
                                intDriverId: 'number',
                                intEntityId: 'number',
                                intFreightTermId: 'number',
                                intLocationId: 'number',
                                intMBILOrderId: 'number',
                                intMBILOrderSiteId: 'number',
                                intOrderId: 'number',
                                intRouteId: 'number',
                                intShipToId: 'number',
                                intSiteId: 'number',
                                intSiteNumber: 'number',
                                intStopNumber: 'number',
                                intTaxStateID: 'number',
                                intTermId: 'number',
                                intUserId: 'number',
                                strClientID: 'string',
                                strComments: 'string',
                                strContractNumber: 'string',
                                strCustomerNumber: 'string',
                                strDriver: 'string',
                                strLocation: 'string',
                                strOrderNumber: 'string',
                                strOrderStatus: 'string',
                                strRouteNumber: 'string',
                                strRowState: 'string',
                                strSerialNumber: 'string',
                                strSiteName: 'string',
                                strTermId: 'string',
                                strUser: 'string'
                            }

    public tablename:string = 'ordersite';
}