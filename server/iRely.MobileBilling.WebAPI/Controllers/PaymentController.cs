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

    public class PaymentController : BaseApiController<tblMBILPayment>
    {
        private IPaymentBl _bl;

        public PaymentController(IPaymentBl bl) : base(bl)
        {
            _bl = bl;
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SyncMobilePayments(IEnumerable<vyuMBILPayment> entities)
        {
            var result = await _bl.SyncMobilePayments(entities);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        public async Task<HttpResponseMessage> GetVoidPayment(string id)
        {
            var result = await _bl.VoidPayment(id);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        [HttpGet]
        [ActionName("PostPayment")]
        public async Task<HttpResponseMessage> PostPayment(string param, bool preview, bool toPost, int userId)
        {
          var result = await _bl.PostPayment(param, preview, toPost, userId);
          return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }
    }
}
