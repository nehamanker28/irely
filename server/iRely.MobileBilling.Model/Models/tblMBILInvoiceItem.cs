using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILInvoiceItem : BaseEntity
    {
        public int intInvoiceItemId { get; set; }
        public int? intInvoiceId { get; set; }
        public int? intSiteId { get; set; }
        public int? intItemId { get; set; }
        public int? intItemUOMId { get; set; }
        public int? intContractDetailId { get; set; }
        public decimal? dblQuantity { get; set; }
        public decimal? dblPrice { get; set; }
        public decimal? dblPercentageFull { get; set; }
        public int? inti21InvoiceDetailId { get; set; }
        public decimal? dblItemTotal { get; set; }
        public decimal? dblTaxTotal { get; set; }

    public ICollection<tblMBILInvoiceTaxCode> tblMBILInvoiceTaxCodes { get; set; }
         public tblMBILInvoice tblMBILInvoice { get; set; }
    }

    public class vyuMBILInvoiceItem
    {
        public int? intInvoiceId { get; set; }
        public string strInvoiceNo { get; set; }
        public int? intOrderId { get; set; }
        public string strOrderNumber { get; set; }
        public int? intEntityCustomerId { get; set; }
        public string strCustomerNo { get; set; }
        public string strCustomerName { get; set; }
        public int? intLocationId { get; set; }
        public string strLocationName { get; set; }
        public string strType { get; set; }
        public DateTime? dtmDeliveryDate { get; set; }
        public DateTime? dtmInvoiceDate { get; set; }
        public int? intDriverId { get; set; }
        public string strDriverNo { get; set; }
        public string strDriverName { get; set; }
        public int? intShiftId { get; set; }
        public int? intShiftNumber { get; set; }
        public string strShiftNo { get; set; }
        public string strComments { get; set; }
        public decimal? dblTotal { get; set; }
        public int? intTermId { get; set; }
        public string strTerm { get; set; }
        public bool? ysnPosted { get; set; }
        public int? inti21InvoiceId { get; set; }
        public string stri21InvoiceNo { get; set; }
        public string strStatus { get; set; }
        public int intInvoiceItemId { get; set; }
        public int? intSiteId { get; set; }
        public int? intSiteNumber { get; set; }
        public string strSiteDescription { get; set; }
        public string strSiteAddress { get; set; }
        public string strCity { get; set; }
        public string strState { get; set; }
        public string strZipCode { get; set; }
        public string strCountry { get; set; }
        public string strSiteStatus { get; set; }
        public int? intItemId { get; set; }
        public string strItemNo { get; set; }
        public string strItemDescription { get; set; }
        public int? intItemUOMId { get; set; }
        public string strUnitMeasure { get; set; }
        public decimal? dblQuantity { get; set; }
        public decimal? dblPrice { get; set; }
        public decimal? dblPercentageFull { get; set; }
        public int? intContractDetailId { get; set; }
        public string strContractNumber { get; set; }
        public int? intContractSeq { get; set; }
        public int? inti21InvoiceDetailId { get; set; }
        public decimal? dblItemTotal { get; set; }
        public decimal? dblTaxTotal { get; set; }
        public decimal? dblRate { get; set; }
        public string strCalculationMethod { get; set; }
        public int? intConcurrencyId { get; set; }

        public ICollection<vyuMBILInvoiceTaxCode> tblMBILInvoiceTaxCodes { get; set; }
    }
}
