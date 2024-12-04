export class ContractDetail {        
    public mapping: Object  = {
                                intContractHeaderMobileId: 'pk',
                                intContractDetailId: 'number',
                                intContractHeaderId: 'number',                                                                
                                intItemId: 'number',
                                intContractSeq: 'number',
                                dblAvailableQty: 'number',
                                dblCashPrice: 'number'
                            }

    public tablename:string = 'contractdetail';
}