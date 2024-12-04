using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
    public interface IInvoiceItemBl : IBusinessLayer<tblMBILInvoiceItem>
    {
        Task<GetObjectResult> GetDetails(GetParameter param);
        Task<BusinessResult<tblMBILInvoiceItem>> AddRecord(IEnumerable<tblMBILInvoiceItem> records, bool continueOnConflict = false);
    }
}
