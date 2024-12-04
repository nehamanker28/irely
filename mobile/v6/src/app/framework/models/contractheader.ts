export class ContractHeader {        
    public mapping: Object  = {
                                intContractHeaderMobileId: 'pk',
                                intContractHeaderId: 'number',                                                                
                                intEntityId: 'number',
                                strContractNumber: 'string'
                            }

    public tablename:string = 'contractheader';
}