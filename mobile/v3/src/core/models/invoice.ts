export class Invoice {    
    // intInvoiceMobileId: number;
    // intInvoiceId: number;
    // strInvoiceId: string;
    // dtmDate: Date;
    // strType: string;
    // intLocationId: number;
    // intCustomerId: number;
    // intSplitInvoiceId: number;
    // intShiftId: number;
    // intUserId: number;
    // dblTotal: number;
    // intTermsId: number;
    // strComment: string;
    // ysnVoided: boolean;
    // dtmVoided: Date;
    // strVoidComment: string;
    // ysnSendToOffice: boolean;
    // dtmSent: Date;

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

    // notmapped
    ysnSendToOffice: boolean;
    dtmSent: Date;
    
    public mapping: Object = {
                                // intInvoiceMobileId: 'pk',
                                // intInvoiceId: 'number',
                                // strInvoiceId: 'string',
                                // dtmDate: 'date',
                                // strType: 'string',        
                                // intLocationId: 'number',
                                // intCustomerId: 'number',    
                                // intSplitInvoiceId: 'number',
                                // intShiftId: 'number',
                                // intUserId: 'number',
                                // dblTotal: 'number',
                                // intTermsId: 'number',
                                // strComment: 'string',
                                // ysnVoided: 'boolean',
                                // dtmVoided: 'date',
                                // strVoidComment: 'string',
                                // ysnSendToOffice: 'boolean',
                                // dtmSent: 'date',

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

                                // notmapped
                                ysnSendToOffice: 'boolean',
                                dtmSent: 'date'
                            }

    public tablename:string = 'invoice';
}