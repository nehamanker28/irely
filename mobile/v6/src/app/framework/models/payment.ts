export class Payment {

    intPaymentId: number;
    strPaymentNo: string;
    intEntityCustomerId: number;
    strCustomerNo: string;
    strCustomerName: string;
    intLocationId: number;
    strLocationName: string;
    intEntityDriverId: number;
    strDriverNo: string;
    strDriverName: string;
    intShiftId: number;
    intShiftNumber: number;
    dtmDatePaid: string;
    dtmDateVoided: string;
    strMethod: string;
    strCheckNumber: string;
    dblPayment: number;
    strComments: string;
    strVoidComments: string;
    ysnPosted: boolean;
    ysnVoided: boolean;

    //notmapped
    ysnCompleted: boolean;
    ysnSendToOffice: boolean;
    
    public mapping: Object = {
        intPaymentId: 'pk',
        strPaymentNo: 'string',
        intEntityCustomerId: 'number',
        strCustomerNo: 'string',
        strCustomerName: 'string',
        intLocationId: 'number',
        strLocationName: 'string',
        intEntityDriverId: 'number',
        strDriverNo: 'string',
        strDriverName: 'string',
        intShiftId: 'number',
        intShiftNumber: 'number',
        dtmDatePaid: 'string',
        dtmDateVoided: 'string',
        strMethod: 'string',
        strCheckNumber: 'string',
        dblPayment: 'number',
        strComments: 'string',
        strVoidComments: 'string',
        ysnPosted: 'boolean',
        ysnVoided: 'boolean',

        //notmapped
        ysnCompleted: 'boolean',
        ysnSendToOffice: 'boolean'
    }

    public tablename:string = 'payment';
}