export class InvoiceTaxCodes {    
    // intInvoiceDetailTaxMobileId: number;
    // intInvoiceDetailMobileId: number;
    // intTaxCodeId: number;
    // dblAmount: number;

    intInvoiceTaxCodeMobileId: number;
    intInvoiceTaxId: number;
    intInvoiceItemId: number;
    intItemId: number;
    intTransactionDetailTaxId: number;
    intInvoiceDetailId: number;
    intTaxGroupMasterId: number;
    intTaxGroupId: number;
    intTaxCodeId: number;
    intTaxClassId: number;
    strTaxableByOtherTaxes: string;
    strCalculationMethod: string;
    dblRate: number;
    dblExemptionPercent: number;
    dblTax: number;
    dblAdjustedTax: number;
    dblBaseAdjustedTax: number;
    intSalesTaxAccountId: number;
    ysnSeparateOnInvoice: boolean;
    ysnCheckoffTax: boolean;
    strTaxCode: string;
    ysnTaxExempt: boolean;
    ysnTaxOnly: boolean;
    ysnInvalidSetup: boolean;
    strTaxGroup: string;
    strNotes: string;
    intUnitMeasureId: number;
    strUnitMeasure: string;
    intDriverId: number;
    strDriverNo: string;
    strDriverName: string;

    //not mapped
    ysnSelected: boolean;
    intOrderId: number;
    dblTotalTax: number;
    
    public mapping: Object = {
                                // intInvoiceDetailTaxMobileId: 'pk',
                                // intInvoiceDetailMobileId: 'number',
                                // intTaxCodeId: 'number',
                                // dblAmount: 'number'

                                intInvoiceTaxCodeMobileId: 'pk',
                                intInvoiceTaxId: 'number',
                                intInvoiceItemId: 'number',
                                intItemId: 'number',
                                intTransactionDetailTaxId: 'number',
                                intInvoiceDetailId: 'number',
                                intTaxGroupMasterId: 'number',
                                intTaxGroupId: 'number',
                                intTaxCodeId: 'number',
                                intTaxClassId: 'number',
                                strTaxableByOtherTaxes: 'string',
                                strCalculationMethod: 'string',
                                dblRate: 'number',
                                dblExemptionPercent: 'number',
                                dblTax: 'number',
                                dblAdjustedTax: 'number',
                                dblBaseAdjustedTax: 'number',
                                intSalesTaxAccountId: 'number',
                                ysnSeparateOnInvoice: 'boolean',
                                ysnCheckoffTax: 'boolean',
                                strTaxCode: 'string',
                                ysnTaxExempt: 'boolean',
                                ysnTaxOnly: 'boolean',
                                ysnInvalidSetup: 'boolean',
                                strTaxGroup: 'string',
                                strNotes: 'string',
                                intUnitMeasureId: 'number',
                                strUnitMeasure: 'string',
                                intDriverId: 'number',
                                strDriverNo: 'string',
                                strDriverName: 'string',

                                //not mapped
                                ysnSelected: 'boolean',
                                intOrderId: 'number',
                                dblTotalTax: 'number'
                            }

    public tablename:string = 'invoicetaxcodes';
}