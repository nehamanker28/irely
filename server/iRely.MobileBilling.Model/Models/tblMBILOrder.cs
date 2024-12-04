using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILOrder : BaseEntity
    {
        public int intOrderId { get; set; }
        public int? intDispatchId { get; set; }
        public int? intShiftId { get; set; }
        public string strOrderNumber { get; set; }
        public string strOrderStatus { get; set; }
        public DateTime? dtmRequestedDate { get; set; }
        public int? intEntityId { get; set; }
        public int? intTermId { get; set; }
        public string strComments { get; set; }
        public int? intDriverId { get; set; }
        public int? intRouteId { get; set; }
        public int? intStopNumber { get; set; }
        public int? intTaxStateId { get; set; }
        public int? intShipToId { get; set; }
        public int? intLocationId { get; set; }

        public ICollection<tblMBILOrderItem> tblMBILOrderItems { get; set; }
    }

    public class vyuMBILOrder
    {
        public int intOrderId { get; set; }
        public int? intDispatchId { get; set; }
        public string strOrderNumber { get; set; }
        public string strOrderStatus { get; set; }
        public DateTime? dtmRequestedDate { get; set; }
        public int? intEntityId { get; set; }
        public string strCustomerNumber { get; set; }
        public string strCustomerName { get; set; }
        public int? intTermId { get; set; }
        public string strTerm { get; set; }
        public string strComments { get; set; }
        public int? intDriverId { get; set; }
        public string strDriverNo { get; set; }
        public string strDriverName { get; set; }
        public int? intRouteId { get; set; }
        public string strRouteId { get; set; }
        public int? intSequence { get; set; }
        public int? intStopNumber { get; set; }
        public int? intShiftId { get; set; }
        public int? intShiftNumber { get; set; }
    }
}
