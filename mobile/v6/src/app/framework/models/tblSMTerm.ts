export class SMTerm {    
    public mapping: Object = {
                                intTermMobileId: 'pk',                                
                                intTermID : 'number',
                                strTerm: 'string',
                                strType: 'string',
                                dblDiscountEP: 'number',
                                intBalanceDue: 'number',
                                intDiscountDay: 'number',
                                intDiscountDueNextMonth: 'number',
                                dblAPR: 'number',
                                strTermCode: 'string',
                                ysnAllowEFT: 'boolean',
                                intDayofMonthDue: 'number',
                                intDueNextMonth: 'number',
                                dtmDiscountDate: 'date',
                                dtmDueDate: 'date',
                                ysnActive: 'boolean',
                                ysnEnergyTrac: 'boolean',
                                ysnDeferredPay: 'boolean',
                                ysnIncludeTaxOnDiscount: 'boolean',
                            }

    public tablename:string = 'tblSMTerm';
}