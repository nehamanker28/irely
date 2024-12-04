using iRely.Common;
using iRely.MobileBilling.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iRely.MobileBilling.BusinessLayer
{
    public class MobileBillingRepository : Repository, IMobileBillingRepository
    {
        public MobileBillingRepository() : base(new MBILEntities())
        {
        }
    }
}
