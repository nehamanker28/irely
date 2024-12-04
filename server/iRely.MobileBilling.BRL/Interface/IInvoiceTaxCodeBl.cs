using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
    public interface IInvoiceTaxCodeBl : IBusinessLayer<tblMBILInvoiceTaxCode>
    {
        Task<GetObjectResult> GetDetails(GetParameter param);
        Task<BusinessResult<tblMBILInvoiceTaxCode>> AddRecord(IEnumerable<tblMBILInvoiceTaxCode> records, bool continueOnConflict = false);
    }
}
