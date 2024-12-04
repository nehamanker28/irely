using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILShift : BaseEntity
    {
        public int intShiftId { get; set; }
        public DateTime? dtmShiftDate { get; set; }
        public int? intDriverId { get; set; }
        public int? intLocationId { get; set; }
        public string strShiftNo { get; set; }
        public int? intShiftNumber { get; set; }
        public DateTime? dtmStartTime { get; set; }
        public DateTime? dtmEndTime { get; set; }
        public int? intTruckId { get; set; }
        public int? intStartOdometer { get; set; }
        public int? intEndOdometer { get; set; }
        public decimal? dblFuelGallonsDelievered { get; set; }
        public decimal? dblFuelSales { get; set; }

        public ICollection<vyuMBILInvoice> tblMBILInvoices { get; set; }
        public ICollection<vyuMBILPayment> tblMBILPayments { get; set; }
    }

    public class vyuMBILShift
    {
        public int intShiftId { get; set; }
        public DateTime? dtmShiftDate { get; set; }
        public int? intDriverId { get; set; }
        public string strDriverNo { get; set; }
        public string strDriverName { get; set; }
        public int? intLocationId { get; set; }
        public string strLocationName { get; set; }
        public string strShiftNo { get; set; }
        public int? intShiftNumber { get; set; }
        public DateTime? dtmStartTime { get; set; }
        public DateTime? dtmEndTime { get; set; }
        public int? intTruckId { get; set; }
        public string strTruckName { get; set; }
        public int? intStartOdometer { get; set; }
        public int? intEndOdometer { get; set; }
        public decimal? dblFuelGallonsDelievered { get; set; }
        public decimal? dblFuelSales { get; set; }

        public ICollection<vyuMBILInvoice> tblMBILInvoices { get; set; }
        public ICollection<vyuMBILPayment> tblMBILPayments { get; set; }
    }

    public class tblSMStartingNumber : BaseEntity
    {
        public int intStartingNumberId { get; set; }
        public string strTransactionType { get; set; }
        public string strPrefix { get; set; }
        public int intNumber { get; set; }
        public string strModule { get; set; }
        public bool ysnEnable { get; set; }
    }
}
