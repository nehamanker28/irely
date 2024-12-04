export class CustomerSpecialPricing {        
    public mapping: Object  = {
        intCustomerPricingId: 'pk',
        strCustomerNumber: 'string',
        strItemNo: 'string',
        dblPrice: 'number',
        strPricing: 'string',
        intEntityId: 'number',
        intLocationId: 'number'
    }

    public tablename:string = 'tblCustomerSpecialPricing';
}