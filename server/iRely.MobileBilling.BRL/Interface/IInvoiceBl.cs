using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
    public interface IInvoiceBl : IBusinessLayer<tblMBILInvoice>
    {
        Task<GetObjectResult> GetDetails(GetParameter param);
        Task<SearchResult> SearchItems(GetParameter param);
        Task<BusinessResult<tblMBILInvoice>> VoidInvoice(int id);
        Task<BusinessResult<tblMBILInvoice>> SyncMobileInvoices(IEnumerable<vyuMBILInvoice> records);
        Task<string> PostInvoice(string param, bool preview, bool toPost, int userId);
  }
}
