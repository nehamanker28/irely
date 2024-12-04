export class CategoryTaxExemption {        
    public mapping: Object  = {
      intTaxGroupCodeCategoryExemptionId: 'pk',
      intTaxGroupCodeId: 'number',
      intCategoryId: 'number',
      intConcurrencyId: 'number',
      intTaxCodeId: 'number',
      intTaxGroupId: 'number'
    }

    public tablename:string = 'tblCategoryTaxExemption';
}