using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
    public interface IPaymentBl : IBusinessLayer<tblMBILPayment>
    {
        Task<BusinessResult<tblMBILPayment>> VoidPayment(string id);
        Task<BusinessResult<tblMBILPayment>> SyncMobilePayments(IEnumerable<vyuMBILPayment> records);
        Task<string> PostPayment(string param, bool preview, bool toPost, int userId);
    }
}
