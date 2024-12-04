export class Tankwagon {     
    
    intTankWagonMobileId: number;
    intLineId: number;
    intItemId: number;
    strItemNo: string;
    strDescription: string;
    dblQuantity: number;
    dblBalance: number;
    strReference: string;
    strTransactionType: string;
    strTransactionReference: string;

    public mapping: Object  = {
        intTankWagonMobileId: 'pk',
        intLineId: 'number',
        intItemId: 'number',
        strItemNo: 'string',
        strDescription: 'string',
        dblQuantity: 'number',
        dblBalance: 'number',
        strReference: 'string',
        strTransactionType: 'string',
        strTransactionReference: 'string'
    }

    public tablename:string = 'tankwagon';
}