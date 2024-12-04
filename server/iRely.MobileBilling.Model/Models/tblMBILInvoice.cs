using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILInvoice : BaseEntity
    {
        public int intInvoiceId { get; set; }
        public string strInvoiceNo { get; set; }
        public int? intOrderId { get; set; }
        public int? intEntityCustomerId { get; set; }
        public int? intLocationId { get; set; }
        public string strType { get; set; }
        public DateTime? dtmDeliveryDate { get; set; }
        public DateTime? dtmInvoiceDate { get; set; }
        public int? intDriverId { get; set; }
        public int? intShiftId { get; set; }
        public string strComments { get; set; }
        public string strVoidComments { get; set; }        
        public decimal? dblTotal { get; set; }
        public int? intTermId { get; set; }
        public bool? ysnPosted { get; set; }
        public bool? ysnVoided { get; set; }
        public DateTime? dtmPostedDate { get; set; }
        public DateTime? dtmVoidedDate { get; set; }
        public int? inti21InvoiceId { get; set; }
        public int? intPaymentMethodId { get; set; }
        public string strPaymentInfo { get; set; }

        public ICollection<tblMBILInvoiceItem> tblMBILInvoiceItems { get; set; }
    }

    public class vyuMBILInvoice
    {
        public int intInvoiceId { get; set; }
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
        public string strVoidComments { get; set; }
        public decimal? dblTotal { get; set; }
        public int? intTermId { get; set; }
        public string strTerm { get; set; }
        public bool? ysnPosted { get; set; }
        public bool? ysnVoided { get; set; }
        public DateTime? dtmPostedDate { get; set; }
        public DateTime? dtmVoidedDate { get; set; }
        public int? inti21InvoiceId { get; set; }
        public string stri21InvoiceNo { get; set; }
        public string strStatus { get; set; }
        public decimal? dblTotalBefTax { get; set; }
        public decimal? dblTotalTaxAmount { get; set; }
        public int? intPaymentMethodId { get; set; }
        public string strPaymentMethod { get; set; }
        public string strPaymentInfo { get; set; }
        public int? intConcurrencyId { get; set; }

        public ICollection<vyuMBILInvoiceItem> tblMBILInvoiceItems { get; set; }
        public tblMBILShift tblMBILShift { get; set; }
        public vyuMBILShift vyuMBILShift { get; set; }
    }
}
