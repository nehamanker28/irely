using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILOutOfGas : BaseEntity
    {
        public int intOutOfGasId { get; set; }
        public int? intEntityId { get; set; }
        public int? intSiteId { get; set; }
        public bool? ysnLeakTest { get; set; }
        public decimal? dblPressureReading { get; set; }
        public decimal? dblMinutesHeld { get; set; }
        public bool? ysnTaggedLocked { get; set; }
        public bool? ysnCustomerNotified { get; set; }
        public bool? ysnAppliancesLit { get; set; }
        public string strNotes { get; set; }
    }

    public class vyuMBILOutOfGas
    {
        public int intOutOfGasId { get; set; }
        public int? intEntityId { get; set; }
        public string strCustomerNumber { get; set; }
        public string strName { get; set; }
        public int? intSiteId { get; set; }
        public int? intSiteNumber { get; set; }
        public string strSerialNumber { get; set; }
        public decimal? dblTankCapacity { get; set; }
        public string strDescription { get; set; }
        public bool? ysnLeakTest { get; set; }
        public decimal? dblPressureReading { get; set; }
        public decimal? dblMinutesHeld { get; set; }
        public bool? ysnTaggedLocked { get; set; }
        public bool? ysnCustomerNotified { get; set; }
        public bool? ysnAppliancesLit { get; set; }
        public string strNotes { get; set; }
    }
}
