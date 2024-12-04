export class LineFlushAndTransfer {     
    
    intLineMobileId: number;
    intLineId: number;
    intItemId: number;
    strItemNo: string;
    strDescription: string;
    dblQuantity: number;
    strComment: string;
    intLocationId: number;
    strLocation: string;

    public mapping: Object  = {
        intLineMobileId: 'pk',
        intLineId: 'number',
        intItemId: 'number',
        strItemNo: 'string',
        strDescription: 'string',
        dblQuantity: 'number',
        strComment: 'string',
        intLocationId: 'number',
        strLocation: 'number'
    }

    public tablename:string = 'lineflushandtransfer';
}