export class InventoryItem {        
    public mapping: Object  = {
        intInventoryItemId: 'pk',
        strLocationNumber: 'string',
        intItemId: 'number',
        strItemNo: 'string',
        strDescription: 'string',
        dblSalePrice: 'number',
        strAccountId: 'string',
        strUnitMeasure: 'string',
        strType: 'string',
        strPriceLevel: 'string',
        strPricingMethod: 'string',
        dblMin: 'number',
        dblMax: 'number',
        dblAmountRate: 'number',
        dblUnitPrice: 'number',
        dtmEffectiveDate: 'date',
        strTagNumber: 'string',
        strTagMessage: 'string',
        strTagDescription: 'string',
        strTagType: 'string',
        ysnHazMat: 'boolean'
    }

    public tablename:string = 'tblInventoryItem';
}