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
    public class InvoiceTaxCodeBl : BusinessLayer<tblMBILInvoiceTaxCode>, IInvoiceTaxCodeBl
    {
        #region Constructor
        public InvoiceTaxCodeBl(IMobileBillingRepository db) : base(db)
        {
            _db = db;
        }
        #endregion

        public async Task<GetObjectResult> GetDetails(GetParameter param)
        {
            var query = _db.GetQuery<tblMBILInvoice>().Filter(param, true);
            var data = await query.AsNoTracking().ToListAsync();

            return new GetObjectResult()
            {
                data = data,
                total = await query.CountAsync()
            };
        }

        public async Task<BusinessResult<tblMBILInvoiceTaxCode>> AddRecord(IEnumerable<tblMBILInvoiceTaxCode> records, bool continueOnConflict = false)
        {
            foreach (var record in records)
            {
                Add(record);
            }

            var saveResult = await SaveAsync(continueOnConflict);
            saveResult.data = records;

            return saveResult;
        }


    }
}
