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
    public class PaymentBl : BusinessLayer<tblMBILPayment>, IPaymentBl
    {
        #region Constructor
        public PaymentBl(IMobileBillingRepository db) : base(db)
        {
            _db = db;
        }
        #endregion

        public override async Task<GetObjectResult> GetAsync(GetParameter param)
        {
            var query = _db.GetQuery<vyuMBILPayment>().Filter(param, true);
            var data = await query.Execute(param, "intPaymentId", "DESC").ToListAsync();

      return new GetObjectResult()
            {
                data = data,
                total = await query.CountAsync()
            };
        }

        public override async Task<SearchResult> Search(GetParameter param)
        {
            var query = _db.GetQuery<vyuMBILPayment>().Filter(param, true);
            var data = await query.ExecuteProjection(param).AsNoTracking().ToListAsync();

            return new SearchResult()
            {
                data = data.AsQueryable(),
                total = await query.CountAsync()
            };
        }

        public async Task<BusinessResult<tblMBILPayment>> VoidPayment(string id)
        {
            var data = _db.GetQuery<tblMBILPayment>().Where(x => x.strPaymentNo == id).FirstOrDefault();
            data.ysnVoided = true;

            var saveResult = await SaveAsync(true);
            return saveResult;
        }

        public async Task<BusinessResult<tblMBILPayment>> SyncMobilePayments(IEnumerable<vyuMBILPayment> records)
        {
            var paymentList = new List<tblMBILPayment>();
            foreach (var record in records)
            {
                var newPayment = new tblMBILPayment()
                {
                    intPaymentId = record.intPaymentId,
                    intShiftId = record.intShiftId,
                    strPaymentNo = record.strPaymentNo,
                    intEntityCustomerId = record.intEntityCustomerId,
                    intEntityDriverId = record.intEntityDriverId,
                    intLocationId = record.intLocationId,
                    dtmDatePaid = record.dtmDatePaid,
                    strMethod = record.strMethod,
                    strCheckNumber = record.strCheckNumber,
                    dblPayment = record.dblPayment,
                    strComments = record.strComments
                };
                Add(newPayment);
                paymentList.Add(newPayment);
            }

            var saveResult = await SaveAsync(true);
            saveResult.data = paymentList;            

            return saveResult;
        }

        public async Task<string> PostPayment(string param, bool preview, bool toPost, int userId)
        {
          try
          {
            var _dal = (MobileBilling.Model.MBILEntities)_db.ContextManager;
            var result = await _dal.MBILPostPayment(param, preview, toPost, userId);

            return result;
          }
          catch (Exception ex)
          {
            return ex.Message;
          }
        }
    }
}
