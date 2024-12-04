export class CustomerMultiLevelPricing {
    public mapping: Object  = {
        intCustomerMultiLevelPricingId: 'pk',
        intEntityId: 'number',
        strCustomerNumber: 'string',
        strLevel: 'string',
        intItemPricingLevelId: 'number',
        intCompanyLocationPricingLevelId: 'number',
        intItemId: 'number',
        strItemNo: 'string',
        intItemLocationId: 'number',
        strPriceLevel: 'string',
        intItemUnitMeasureId: 'number',
        dblUnit: 'number',
        dtmEffectiveDate: 'date',
        dblMin: 'number',
        dblMax: 'number',
        strPricingMethod: 'string',
        dblAmountRate: 'number',
        dblUnitPrice: 'number',
        strCommissionOn: 'string',
        dblCommissionRate: 'number',
        intCurrencyId: 'number'
    }
    
    public tablename:string = 'tblCustomerMultiLevelPricing';
}