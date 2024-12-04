export class ContractExport {        
    public mapping: Object  = {
        intContractExportId: 'pk',
        intContractDetailId: 'number',
        strLocationNumber: 'string',
        strEntityNo: 'string',
        strItemNo: 'string',
        intItemId: 'number',
        strDescription: 'string',
        strTermCode: 'string',
        strContractNumber: 'string',
        strPricing: 'string',
        strType: 'string',
        intContractSeq: 'number',
        dblQuantity: 'number',
        dblContractUnitDelivered: 'number',
        dtmStartDate: 'date',
        dtmEndDate: 'date',
        dblContractPriceCT: 'number', 
        ysnMaxPrice: 'boolean',
        dblCashPrice: 'number',
        dblContractCashSpent: 'number',
        dblAvailableQty: 'number'
    }

    public tablename:string = 'tblContractExport';
}