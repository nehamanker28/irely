export class Item {    
    public mapping: Object = {
                                intItemMobileId: 'pk',
                                intItemId: 'number',
                                strItemNo: 'string',
                                strDescription: 'string',
                                strBundleItemNo: 'string',
                                strType: 'string',
                                dblDefaultFull: 'number',
                                dblSalePrice: 'number',
                                intBundleItemId: 'number',
                                intItemLocationId: 'number',
                                ysnAvailableTM: 'boolean'
                            }

    public tablename:string = 'item';
}