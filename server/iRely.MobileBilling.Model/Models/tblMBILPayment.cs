using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILPayment : BaseEntity
    {
        public int intPaymentId { get; set; }
        public int? intShiftId { get; set; }
        public string strPaymentNo { get; set; }
        public int? intEntityCustomerId { get; set; }
        public int? intEntityDriverId { get; set; }
        public int? intLocationId { get; set; }
        public DateTime? dtmDatePaid { get; set; }
        public string strMethod { get; set; }
        public string strCheckNumber { get; set; }
        public decimal? dblPayment { get; set; }
        public string strComments { get; set; }
        public string strVoidComments { get; set; }
        public bool? ysnPosted { get; set; }
        public bool? ysnVoided { get; set; }
        public DateTime? dtmPostedDate { get; set; }
        public DateTime? dtmVoidedDate { get; set; }
    }

    public class vyuMBILPayment
    {
        public int intPaymentId { get; set; }
        public string strPaymentNo { get; set; }
        public int? intEntityCustomerId { get; set; }
        public string strCustomerNo { get; set; }
        public string strCustomerName { get; set; }
        public int? intLocationId { get; set; }
        public string strLocationName { get; set; }
        public int? intEntityDriverId { get; set; }
        public string strDriverNo { get; set; }
        public string strDriverName { get; set; }
        public int? intShiftId { get; set; }
        public int? intShiftNumber { get; set; }
        public int intConcurrencyId { get; set; }        
        public DateTime? dtmDatePaid { get; set; }
        public string strMethod { get; set; }
        public string strCheckNumber { get; set; }
        public decimal? dblPayment { get; set; }
        public string strComments { get; set; }
        public string strVoidComments { get; set; }
        public bool? ysnPosted { get; set; }
        public bool? ysnVoided { get; set; }
        public DateTime? dtmPostedDate { get; set; }
        public DateTime? dtmVoidedDate { get; set; }

        public tblMBILShift tblMBILShift { get; set; }
        public vyuMBILShift vyuMBILShift { get; set; }
    }
}
