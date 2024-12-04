using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILOrderItem : BaseEntity
    {
        public int intOrderItemId { get; set; }
        public int? intOrderId { get; set; }
        public int? intSiteId { get; set; }
        public int? intContractDetailId { get; set; }
        public int? intItemId { get; set; }
        public int? intItemUOMId { get; set; }
        public decimal? dblQuantity { get; set; }
        public decimal? dblPrice { get; set; }

        public ICollection<tblMBILOrderTaxCode> tblMBILOrderTaxCodes { get; set; }
        public tblMBILOrder tblMBILOrder { get; set; }
    }

    public class vyuMBILOrderItem
    {
        public int? intOrderId { get; set; }
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
        public int? intSiteId { get; set; }
        public int? intSiteNumber { get; set; }
        public string strSiteDescription { get; set; }
        public string strSiteAddress { get; set; }
        public string strCity { get; set; }
        public string strState { get; set; }
        public string strZipCode { get; set; }
        public int intOrderItemId { get; set; }
        public int? intItemId { get; set; }
        public string strItemNo { get; set; }
        public string strItemDescription { get; set; }
        public int? intContractDetailId { get; set; }
        public string strContractNumber { get; set; }
        public int? intContractSeq { get; set; }
        public int? intItemUOMId { get; set; }
        public string strUOM { get; set; }
        public decimal? dblQuantity { get; set; }
        public decimal? dblPrice { get; set; }
        public decimal? dblTotal { get; set; }
    }
}
