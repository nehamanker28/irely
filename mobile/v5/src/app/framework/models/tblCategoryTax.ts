export class CategoryTax {        
    public mapping: Object  = {
        intCategoryTaxId: 'pk',
        intCategoryId: 'number',
        intTaxClassId: 'number',
        ysnActive: 'boolean'
    }

    public tablename:string = 'tblCategoryTax';
}