export class LoadInventory {    
    intLoadInventoryMobileId: number;
    intLocation: number;
    strLocation: string;
    intItemNumber: number;
    strItemNumber: string;
    strItemDescription: string;
    dblQuantityBefore: number;
    dblQuantityLoaded: number;
    dblQuantityReturned: number;
    dblQuantityAfter: number;
    dblEnding: number;
    _showEnding: boolean;
    
    public mapping: Object = {
                                intLoadInventoryMobileId: 'pk',
                                intLocation: 'number',
                                strLocation: 'string',
                                intItemNumber: 'number',
                                strItemNumber: 'string',
                                strItemDescription: 'string',
                                dblQuantityBefore: 'number',
                                dblQuantityLoaded: 'number',
                                dblQuantityReturned: 'number',
                                dblQuantityAfter: 'number',
                                dblEnding: 'number',
                                _showEnding: 'boolean'
                            }

    public tablename:string = 'loadinventory';
}