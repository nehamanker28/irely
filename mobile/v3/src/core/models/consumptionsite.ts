export class ConsumptionSite {        
    public mapping: Object = {
                                intConsumptionSiteMobileId: 'pk',
                                intSiteId: 'number',
                                intEntityId: 'number',
                                intSiteNumber: 'number',
                                strEntityNo: 'string',
                                strDescription: 'string',
                                strItemNo: 'string',
                                strFillMethod: 'string',
                                strDeliveryTerm: 'string',
                                strSiteAddress: 'string',
                                strCity: 'string',
                                strState: 'string',
                                strZipCode: 'string',
                                dblLatitude: 'number',
                                dblLongitude: 'number'
                            }

    public tablename:string = 'consumptionsite';
}