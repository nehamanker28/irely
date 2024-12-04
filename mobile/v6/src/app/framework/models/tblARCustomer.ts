export class ARCustomer {        
    public mapping: Object  = {
      intEntityId: 'pk',
      ysnApplyPrepaidTax: 'boolean',
      ysnApplySalesTax: 'boolean',
      ysnTaxExempt: 'boolean',
      strCustomerNumber: 'string',
      intBillToId: 'number',
      intShipToId: 'number',
      strTaxState: 'string',
      intCustomerId: 'number',
      intEntityCustomerId: 'number',
      intTerm: 'number',
      strName: 'string',
      strCustomerName: 'string',
      strBillToAddress: 'string',
      strBillToCity: 'string',
      strBillToState: 'string',
      strBillToZipCode: 'string',
      strPhone1: 'string',
      strEmail: 'string',
      strInternalNotes: 'string',
      strTerm: 'string',
      strLevel: 'string',
      dblCreditLimit: 'number',
      dblTotalDue: 'number',
      dbl31DaysAmountDue: 'number',
      dblLastPayment: 'number',
      dtmLastPaymentDate: 'date'      
    }

    public tablename:string = 'tblARCustomer';
}