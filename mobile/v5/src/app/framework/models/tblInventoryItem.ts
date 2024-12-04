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
        intCategoryId: 'number'
    }

    public tablename:string = 'tblInventoryItem';
}