export class EntityLocation {        
    public mapping: Object  = {
        intEntityLocationId: 'pk',
        intEntityId: 'number',
        strLocationName: 'number',
        intTaxGroupId: 'number',
        strTaxGroup: 'string',
        intTaxClassId: 'number',
        intTermsId: 'number',
        strLocationType: 'string',
        ysnDefaultLocation: 'string',
        intFreightTermId: 'boolean'
    }

    public tablename:string = 'tblEntityLocation';
}