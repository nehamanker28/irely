using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Entity;

using iRely.MobileBilling.Model;
using System.Reflection;

namespace iRely.MobileBilling.BusinessLayer
{
    public class CompanyPreferenceBl : BusinessLayer<tblMBILCompanyPreference>, ICompanyPreferenceBl
    {
        #region Constructor
        public CompanyPreferenceBl(IMobileBillingRepository db) : base(db)
        {
            _db = db;
        }
        #endregion

        public override async Task<GetObjectResult> GetAsync(GetParameter param)
        {
            var query = _db.GetQuery<tblMBILCompanyPreference>().Filter(param, true);
            var data = await query.AsNoTracking().ToListAsync();
            
            return new GetObjectResult()
            {
                data = data,
                total = await query.CountAsync()
            };
        }
    }
}
