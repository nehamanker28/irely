export class FullTax {        
    public mapping: Object  = {
        intFulltaxId: 'pk',
        intTaxGroupId: 'number',
        strTaxGroup: 'string',
        intTaxCodeId: 'number',
        strTaxCode: 'string',
        intTaxClassId: 'number',
        strTaxClass: 'string',
        strCalculationMethod: 'string',
        dblRate: 'number',
        dblQuantity: 'number',
        dblPrice: 'number',
        dblTotal: 'number',
        ysnCheckoffTax: 'boolean',
        strTaxableByOtherTaxes: 'string',
        strType: 'string'
    }

    public tablename:string = 'tblFullTax';
}