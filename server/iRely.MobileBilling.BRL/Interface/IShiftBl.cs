using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
    public interface IShiftBl : IBusinessLayer<tblMBILShift>
    {
        Task<BusinessResult<tblMBILShift>> AddRecord(IEnumerable<tblMBILShift> records, bool continueOnConflict = false);
        Task<GetObjectResult> GetInvoices(GetParameter param);
        Task<GetObjectResult> GetPayments(GetParameter param);
        Task<BusinessResult<tblMBILShift>> SyncMobileShift(vyuMBILShift shift);
        Task<BusinessResult<tblMBILShift>> SyncEntireShift(vyuMBILShift shift);
        Task<BusinessResult<tblMBILShift>> StartShift(vyuMBILShift shift);
    }
}
