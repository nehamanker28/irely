export class OrderTaxCode {
    intOrderTaxCodeMobileId: number;        
    intOrderTaxId: number;
    intOrderItemId: number;
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

    public mapping: Object = {
                                intOrderTaxCodeMobileId: 'pk',
                                intOrderTaxId: 'number',
                                intOrderItemId: 'number',
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
                                strDriverName: 'string'
                            };
                                            
    public tablename:string = 'ordertaxcode';
}