export class InvoiceItems {
    // intInvoiceDetailMobileId: number;
    // intInvoiceMobileId: number;
    // intInvoiceId: number;
    // intConsumptionId: number;
    // strConsumptionId: string;
    // intOrderId: number;
    // strOrderId: string;
    // intItemId: number;
    // strItemId: string;
    // dblPrice: number;
    // dblQuantity: number;
    // dblTotal: number;
    // dblEndingPercentFull: number;
    // ysnMetered: boolean;
    // dblTotalizerReading: number;
    // intContractId: number;
    // intSequence: number;
    // ysnPriceChanged: boolean;
    // ysnContractChanged: boolean;

    intInvoiceItemMobileId: number;
    intInvoiceId: number;
    strInvoiceNo: string;
    intOrderId: number;
    intEntityCustomerId: number;
    strCustomerNo: string;
    strCustomerName: string;
    intLocationId: number;
    strLocationName: string;
    strType: string;
    dtmDeliveryDate: Date;
    dtmInvoiceDate: Date;
    intDriverId: number;
    strDriverNo: string;
    strDriverName: string;
    intShiftId: number;
    intShiftNumber: number;
    strComments: string;
    dblTotal: number;
    intTermId: number;
    strTerm: string;
    ysnPosted: boolean;
    inti21InvoiceId: number;
    stri21InvoiceNo: string;
    intConcurrencyId: number;
    strStatus: string;
    intInvoiceSiteId: number;
    intSiteId: number;
    intSiteNumber: number;
    strSiteDescription: string;
    strSiteAddress: string;
    strCity: string;
    strState: string;
    strZipCode: string;
    strCountry: string;
    strSiteStatus: string;
    intInvoiceItemId: number;
    intItemId: number;
    strItemNo: string;
    strItemDescription: string;
    intItemUOMId: number;
    strUnitMeasure: string;
    dblQuantity: number;
    dblPrice: number;
    dblPercentageFull: number;
    intContractDetailId: number;
    strContractNumber: string;
    intContractSeq: number;
    inti21InvoiceDetailId: number;
    dblItemTotal: number;
    dblTaxTotal: number;    

    //not mapped
    dblTankCapacity: number;
    ysnSelected: boolean;
    strSerialNumber: string;
    strOrderNumber: string;
    intEntityId: number;
    strCustomerNumber: string;
    ysnOutOfGas: boolean;
    intOrderItemMobileId: number;
    intTaxStateID: number;
    ysnTaxable: boolean;    

    public mapping: Object = {
                                // intInvoiceDetailMobileId: 'pk',
                                // intInvoiceMobileId: 'number',
                                // intInvoiceId: 'number',
                                // intConsumptionId: 'number',
                                // strConsumptionId: 'string',
                                // intOrderId: 'number',
                                // strOrderId: 'string',
                                // intItemId: 'number',
                                // strItemId: 'string',
                                // dblPrice: 'number',
                                // dblQuantity: 'number',
                                // dblTotal: 'number',
                                // dblEndingPercentFull: 'number',
                                // ysnMetered: 'boolean',
                                // dblTotalizerReading: 'number',
                                // intContractId: 'number',
                                // intSequence: 'number',
                                // ysnPriceChanged: 'boolean',
                                // ysnContractChanged: 'boolean'

                                intInvoiceItemMobileId: 'pk',
                                intInvoiceId: 'number',
                                strInvoiceNo: 'string',
                                intOrderId: 'number',
                                intEntityCustomerId: 'number',
                                strCustomerNo: 'string',
                                strCustomerName: 'string',
                                intLocationId: 'number',
                                strLocationName: 'string',
                                strType: 'string',
                                dtmDeliveryDate: 'date',
                                dtmInvoiceDate: 'date',
                                intDriverId: 'number',
                                strDriverNo: 'string',
                                strDriverName: 'string',
                                intShiftId: 'number',
                                intShiftNumber: 'number',
                                strComments: 'string',
                                dblTotal: 'number',
                                intTermId: 'number',
                                strTerm: 'string',
                                ysnPosted: 'boolean',
                                inti21InvoiceId: 'number',
                                stri21InvoiceNo: 'string',
                                intConcurrencyId: 'number',
                                strStatus: 'string',
                                intInvoiceSiteId: 'number',
                                intSiteId: 'number',
                                intSiteNumber: 'number',
                                strSiteDescription: 'string',
                                strSiteAddress: 'string',
                                strCity: 'string',
                                strState: 'string',
                                strZipCode: 'string',
                                strCountry: 'string',
                                strSiteStatus: 'string',
                                intInvoiceItemId: 'number',
                                intItemId: 'number',
                                strItemNo: 'string',
                                strItemDescription: 'string',
                                intItemUOMId: 'number',
                                strUnitMeasure: 'string',
                                dblQuantity: 'number',
                                dblPrice: 'number',
                                dblPercentageFull: 'number',
                                intContractDetailId: 'number',
                                strContractNumber: 'string',
                                intContractSeq: 'number',
                                inti21InvoiceDetailId: 'number',
                                dblItemTotal:'number',
                                dblTaxTotal:'number',                                

                                //not mapped
                                dblTankCapacity: 'number',
                                ysnSelected: 'boolean',
                                strSerialNumber: 'string',
                                strOrderNumber: 'string',
                                intEntityId: 'number',
                                strCustomerNumber: 'string',
                                ysnOutOfGas: 'boolean',
                                intOrderItemMobileId: 'string',
                                intTaxStateID: 'number',
                                ysnTaxable: 'boolean'                                
                            }

    public tablename:string = 'invoiceitems';
}
