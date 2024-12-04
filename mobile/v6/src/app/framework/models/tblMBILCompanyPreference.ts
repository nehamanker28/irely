export class MBILCompanyPreference {
    
    intCompanyPreferenceId: number;
    ysnShowLogo: boolean;
    intCompanyContact: number;
    strCompanyName: string;
    strDefaultCustomerNo: string;
    strDefaultSiteNo: string;
    strHazardousSpillCompanyName: string;
    strHazardousSpillCompanyPhoneNumber: string;
    strEmergencyCustomerCode: string;

    public mapping: Object  = {
                    intCompanyPreferenceId: 'pk',
                    ysnShowLogo: 'boolean',
                    intCompanyContact: 'number',
                    strCompanyName: 'string',
                    strDefaultCustomerNo: 'string',
                    strDefaultSiteNo: 'string',
                    strHazardousSpillCompanyName: 'string',
                    strHazardousSpillCompanyPhoneNumber: 'string',
                    strEmergencyCustomerCode: 'string'
                };

    public tablename:string = 'tblMBILCompanyPreference';
}