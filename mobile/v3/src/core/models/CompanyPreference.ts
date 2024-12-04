export class CompanyPreference {
    
    intCompanyPreferenceId: number;
    ysnShowLogo: boolean;
    intCompanyContact: number;
    strCompanyName: string;
    strDefaultCustomerNo: string;
    strDefaultSiteNo: string;

    public mapping: Object  = {
                    intCompanyPreferenceId: 'pk',
                    ysnShowLogo: 'boolean',
                    intCompanyContact: 'number',
                    strCompanyName: 'string',
                    strDefaultCustomerNo: 'string',
                    strDefaultSiteNo: 'string'
                            };

    public tablename:string = 'companypreference';
}