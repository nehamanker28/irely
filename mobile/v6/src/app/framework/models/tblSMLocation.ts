export class SMLocation {
    public mapping: Object = {
                                intLocationMobileId: 'pk',
                                intCompanyLocationId: 'number',
                                strLocationName: 'string',
                                strLocationNumber: 'string',
                                intTaxGroupId: 'number',
                                strUseLocationAddress: 'string',
                                strAddress: 'string',
                                strCity: 'string',
                                strStateProvince: 'string',
                                strZipPostalCode: 'string',
                                strCountry: 'string'
                            }

    public tablename:string = 'tblSMLocation';
}