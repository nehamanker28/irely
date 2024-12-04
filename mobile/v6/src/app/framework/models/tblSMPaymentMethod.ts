export class SMPaymentMethod {    
    public mapping: Object = {
                                intPaymentMethodID: 'pk',
                                strPaymentMethod: 'string',
                                strPaymentMethodCode: 'string',
                                ysnActive: 'boolean'
                            }

    public tablename:string = 'tblSMPaymentMethod';
}