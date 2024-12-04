using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

using iRely.MobileBilling;
using iRely.MobileBilling.Model;
using iRely.MobileBilling.BusinessLayer;
using System.Threading.Tasks;

namespace iRely.MobileBilling.WebApi
{   

    public class CompanyPreferenceController : BaseApiController<tblMBILCompanyPreference>
    {
        private ICompanyPreferenceBl _bl;

        public CompanyPreferenceController(ICompanyPreferenceBl bl) : base(bl)
        {
            _bl = bl;
        }
    }
}
