export class TMDeliveryHistory {        
    public mapping: Object = {
                                intDeliveryHistoryMobileId: 'pk',
                                intDeliveryHistoryID: 'number',
                                intSiteID: 'number',
                                dtmInvoiceDate: 'date',
                                dblQuantityDelivered: 'number'
                            }

    public tablename:string = 'tblTMDeliveryHistory';
}