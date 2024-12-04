export class tblSMCompanySetup {
    public mapping: Object = {
        intCompanySetupID: 'pk',
        imgCompanyLogo: 'string',
        strCompanyName: 'string',
        strAddress: 'string',
        strCounty: 'string',
        strCity: 'string',
        strState: 'string',
        strZip: 'string',
        strCountry: 'string', 
        ysnGlobalLogo: 'boolean'
    }

    public tablename:string = 'tblSMCompanySetup';
}