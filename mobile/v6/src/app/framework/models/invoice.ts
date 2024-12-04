export class Invoice {    
    intInvoiceId: number;
    strInvoiceNo: string;
    intOrderId: number;
    intEntityCustomerId: number;
    strCustomerNo: string;
    strCustomerName: string;
    intLocationId: number;
    strLocationName: string;
    strType: string;
    dtmDeliveryDate: string;
    dtmInvoiceDate: string;
    intDriverId: number;
    strDriverNo: string;
    strDriverName: string;
    intShiftId: number;
    intShiftNumber: number;
    strComments: string;
    strVoidComments: string;
    dblTotal: number;
    intTermId: number;
    strTerm: string;
    ysnPosted: boolean;
    ysnVoided: boolean;
    inti21InvoiceId: number;
    stri21InvoiceNo: string;
    intConcurrencyId: number;
    strStatus: string;
    intPaymentMethodId: number;
    strPaymentInfo: string;

    strLatitude: string;
    strLongitude: string;
    strSignature: string;

    // notmapped
    ysnSendToOffice: boolean;
    dtmSent: Date;
    strPaymentMethod: string;
    
    
    public mapping: Object = {
                                intInvoiceId: 'pk',
                                strInvoiceNo: 'string',
                                intOrderId: 'number',
                                intEntityCustomerId: 'number',
                                strCustomerNo: 'string',
                                strCustomerName: 'string',
                                intLocationId: 'number',
                                strLocationName: 'string',
                                strType: 'string',
                                dtmDeliveryDate: 'string',
                                dtmInvoiceDate: 'string',
                                intDriverId: 'number',
                                strDriverNo: 'string',
                                strDriverName: 'string',
                                intShiftId: 'number',
                                intShiftNumber: 'number',
                                strComments: 'string',
                                strVoidComments: 'string',
                                dblTotal: 'number',
                                intTermId: 'number',
                                strTerm: 'string',
                                ysnPosted: 'boolean',
                                ysnVoided: 'boolean',
                                inti21InvoiceId: 'number',
                                stri21InvoiceNo: 'string',
                                intConcurrencyId: 'number',
                                strStatus: 'string',
                                intPaymentMethodId: 'number',
                                strPaymentInfo: 'string',
                                
                                strLatitude: 'string',
                                strLongitude: 'string',
                                strSignature: 'string',

                                // notmapped
                                ysnSendToOffice: 'boolean',
                                dtmSent: 'date',
                                strPaymentMethod: 'string'
                            }

    public tablename:string = 'invoice';
}