export class TaxCode {    
    public mapping: Object = {
                                intTaxCodeMobileId: 'pk',
                                intTaxCodeId: 'number',
                                strTaxCode: 'string',
                                strCalculationMethod: 'string',
                                dblRate: 'number'
                            }

    public tablename:string = 'taxcode';
}