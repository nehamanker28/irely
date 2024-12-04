export class DeliveryHistory {        
    public mapping: Object = {
                                intDeliveryHistoryMobileId: 'pk',
                                intDeliveryHistoryId: 'number',
                                intSiteID: 'number',
                                dtmInvoiceDate: 'date',
                                dblQuantityDelivered: 'number'
                            }

    public tablename:string = 'deliveryhistory';
}