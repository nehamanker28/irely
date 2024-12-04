export class User {
    intUserMobileId: number;
    intUserId: number;
    strUserName: string;
    strPassword: string;
    strFullName: string;
    intDriverNumber: number;
    intLocation: number;
    strLocation: string;
    ContactParentId: number;
    CompanyName: string;
    Sample: string;

    public mapping: Object = {
                                intUserMobileId: 'pk',
                                intUserId: 'number',
                                strUserName: 'string',
                                strPassword: 'string',
                                strFullName: 'string',
                                intDriverNumber: 'number',
                                intLocation: 'number',
                                strLocation: 'string',
                                ContactParentId: 'number',
                                CompanyName: 'string',
                                Sample: 'string'
                            }

    public tablename:string = 'user';
}