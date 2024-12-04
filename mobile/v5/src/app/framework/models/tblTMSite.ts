export class TMSite {        
    intConsumptionSiteMobileId: number;
    intSiteID: number;
    intEntityId: number;
    intSiteNumber: number;
    strEntityNo: string;
    strDescription: string;
    strItemNo: string;
    strFillMethod: string;
    strDeliveryTerm: string;
    strSiteAddress: string;
    strCity: string;
    strState: string;
    strZipCode: string;
    dblLatitude: number;
    dblLongitude: number;
    ysnTaxable: boolean;
    ysnActive: boolean;
    intCustomerID: number;
    intLocationId: number;
    strLocation: string;
    strInstruction: string;
    intTaxStateID: number;

    //not mapped
    dblTankCapacity: number;
    ysnSelected: boolean;
    strSerialNumber: string;
    strOrderNumber: string;
    strCustomerNumber: string;
    ysnOutOfGas: boolean;
    intOrderItemMobileId: number;
    intDriverId: number;
    intOrderId: number;
    strSiteDescription: string;

    public mapping: Object = {
                                intConsumptionSiteMobileId: 'pk',
                                intSiteID: 'number',
                                intEntityId: 'number',
                                intSiteNumber: 'number',
                                strEntityNo: 'string',
                                strDescription: 'string',
                                strItemNo: 'string',
                                strFillMethod: 'string',
                                strDeliveryTerm: 'string',
                                strSiteAddress: 'string',
                                strCity: 'string',
                                strState: 'string',
                                strZipCode: 'string',
                                dblLatitude: 'number',
                                dblLongitude: 'number',
                                ysnTaxable: 'boolean',
                                ysnActive: 'boolean',
                                intCustomerID: 'number',
                                intLocationId: 'number',
                                strLocation: 'string',
                                strInstruction: 'string',
                                intTaxStateID: 'number'
                            }

    public tablename:string = 'tblTMSite';
} 