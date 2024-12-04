import { BaseEntity } from '../_common/base/base-entity';
export class Profile extends BaseEntity {
    constructor() {
        super();
    }

    intEntityId: number;
    intEntityClassId: number;
    intDefaultLocationId: number;
    intDefaultCountryId: number;
    intEntityRank: number;
    intEntityToContactId: number;
    intUserPortalAccessAdminEntityId: number;
    intUserRoleId: number;
    intUserRoleIdTemp: number;

    imgPhoto: string;
    str1099Form: string;
    str1099Name: string;
    str1099Type: string;
    strContactMethod: string;
    strContactNumber: string;
    strContactType: string;
    strDepartment: string;
    strDocumentDelivery: string;
    strEmail: string;
    strEmail2: string;
    strEmailDistributionOption: string;
    strExternalERPId: string;
    strFax: string;
    strFederalTaxId: string;
    strInternalNotes: string;
    strMobile: string;
    strName: string;
    strNickName: string;
    strNotes: string;
    strPhone: string;
    strPhone1: string;
    strPhoneDummy: string;
    strPhoneDummy2: string;
    strRecordIdx: string;
    strSuffix: string;
    strTitle: string;
    strUserPortalPassword: string;
    strWebsite: string;

    ysnActive: boolean;
    ysnCheckEntityNo: boolean;
    ysnCheckEntityType: boolean;
    ysnClientDuplicate: boolean;
    ysnDeActivateCustomer: boolean;
    ysnDeActivateSalesperson: boolean;
    ysnDeActivateVendor: boolean;
    ysnPrint1099: boolean;
    ysnReceiveEmail: boolean;
    ysnUserPortalAccess: boolean;
}