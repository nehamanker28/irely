export class CustomerTaxExemption {        
    public mapping: Object  = {
      intCustomerTaxingTaxExceptionId: 'pk',
      intEntityCustomerId: 'number',
      intItemId: 'number',
      intCategoryId: 'number',
      intTaxCodeId: 'number',
      intTaxClassId: 'number',
      strState: 'string',
      strException: 'string',
      strExceptionReason: 'string',
      dtmStartDate: 'date',
      dtmEndDate: 'date',
      intEntityCustomerLocationId: 'number',
      dblPartialTax: 'number',
      intCardId: 'number',
      intVehicleId: 'number',
      intCompanyId: 'number',
      intSiteNumber: 'number'
    }

    public tablename:string = 'tblCustomerTaxExemption';
}