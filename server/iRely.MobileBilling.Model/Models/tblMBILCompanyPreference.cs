using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
    public partial class tblMBILCompanyPreference : BaseEntity
    {
        public int intCompanyPreferenceId { get; set; }
        public bool? ysnShowLogo { get; set; }
        public int? intCompanyContact { get; set; }
        public string strCompanyName { get; set; }
        public string strDefaultCustomerNo { get; set; }
        public string strDefaultSiteNo { get; set; }
        public string strHazardousSpillCompanyName { get; set; }
        public string strHazardousSpillCompanyPhoneNumber { get; set; }
        public string strEmergencyCustomerCode { get; set; }
  }
}
