export class Customer {        
    public mapping: Object  = {
                                intCustomerMobileId: 'pk',
                                intCustomerId: 'number',
                                intEntityId: 'number',
                                intEntityCustomerId: 'number',
                                intTerm: 'number',
                                strName: 'string',
                                strCustomerNumber: 'string',
                                strCustomerName: 'string',
                                strBillToAddress: 'string',
                                strBillToCity: 'string',
                                strBillToState: 'string',
                                strBillToZipCode: 'string',
                                strPhone1: 'string',
                                strEmail: 'string',
                                strInternalNotes: 'string',
                                strTerm: 'string',
                                dblCreditLimit: 'number',
                                dblTotalDue: 'number',
                                dbl31DaysAmountDue: 'number',
                                dblLastPayment: 'number',
                                dtmLastPaymentDate: 'date'
                            }

    public tablename:string = 'customer';
}