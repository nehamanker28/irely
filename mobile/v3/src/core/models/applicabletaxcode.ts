export class ApplicableTaxCode {    
    public mapping: Object  = {
                                intSiteMobileId: 'pk',
                                intSiteId: 'number',
                                intEntityId: 'number',
                                intSiteNumber: 'number',
                                strItemNo: 'string',
                                strTaxGroup: 'string'
                            };

    public tablename:string = 'applicabletaxcode';
}