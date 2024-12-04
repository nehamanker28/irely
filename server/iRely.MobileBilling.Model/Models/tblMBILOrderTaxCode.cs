using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILOrderTaxCode : BaseEntity
    {
        public int intOrderTaxId { get; set; }
        public int? intOrderItemId { get; set; }
        public int? intItemId { get; set; }
        public int? intTransactionDetailTaxId { get; set; }
        public int? intInvoiceDetailId { get; set; }
        public int? intTaxGroupMasterId { get; set; }
        public int? intTaxGroupId { get; set; }
        public int? intTaxCodeId { get; set; }
        public int? intTaxClassId { get; set; }
        public string strTaxableByOtherTaxes { get; set; }
        public string strCalculationMethod { get; set; }
        public decimal? dblRate { get; set; }
        public decimal? dblExemptionPercent { get; set; }
        public decimal? dblTax { get; set; }
        public decimal? dblAdjustedTax { get; set; }
        public decimal? dblBaseAdjustedTax { get; set; }
        public int? intSalesTaxAccountId { get; set; }
        public bool? ysnSeparateOnInvoice { get; set; }
        public bool? ysnCheckoffTax { get; set; }
        public string strTaxCode { get; set; }
        public bool? ysnTaxExempt { get; set; }
        public bool? ysnTaxOnly { get; set; }
        public bool? ysnInvalidSetup { get; set; }
        public string strTaxGroup { get; set; }
        public string strNotes { get; set; }
        public int? intUnitMeasureId { get; set; }
        public string strUnitMeasure { get; set; }

        public tblMBILOrderItem tblMBILOrderItem { get; set; }
    }

    public class vyuMBILOrderTaxCode
    {
        public int intOrderTaxId { get; set; }
        public int? intOrderItemId { get; set; }
        public int? intItemId { get; set; }
        public int? intTransactionDetailTaxId { get; set; }
        public int? intInvoiceDetailId { get; set; }
        public int? intTaxGroupMasterId { get; set; }
        public int? intTaxGroupId { get; set; }
        public int? intTaxCodeId { get; set; }
        public int? intTaxClassId { get; set; }
        public string strTaxableByOtherTaxes { get; set; }
        public string strCalculationMethod { get; set; }
        public decimal? dblRate { get; set; }
        public decimal? dblExemptionPercent { get; set; }
        public decimal? dblTax { get; set; }
        public decimal? dblAdjustedTax { get; set; }
        public decimal? dblBaseAdjustedTax { get; set; }
        public int? intSalesTaxAccountId { get; set; }
        public bool? ysnSeparateOnInvoice { get; set; }
        public bool? ysnCheckoffTax { get; set; }
        public string strTaxCode { get; set; }
        public bool? ysnTaxExempt { get; set; }
        public bool? ysnTaxOnly { get; set; }
        public bool? ysnInvalidSetup { get; set; }
        public string strTaxGroup { get; set; }
        public string strNotes { get; set; }
        public int? intUnitMeasureId { get; set; }
        public string strUnitMeasure { get; set; }
        public int? intDriverId { get; set; }
        public string strDriverNo { get; set; }
        public string strDriverName { get; set; }
    }
}
