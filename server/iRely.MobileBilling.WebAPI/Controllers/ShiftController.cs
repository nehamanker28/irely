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
using System.Web.Http.ModelBinding;

namespace iRely.MobileBilling.WebApi
{
    public class ShiftController : BaseApiController<tblMBILShift>
    {
        private IShiftBl _bl;

        public ShiftController(IShiftBl bl) : base(bl)
        {
            _bl = bl;
        }

        public async Task<HttpResponseMessage> GetInvoices([ModelBinder] GetParameter param)
        {
            var result = await _bl.GetInvoices(param);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        public async Task<HttpResponseMessage> GetPayments([ModelBinder] GetParameter param)
        {
            var result = await _bl.GetPayments(param);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SyncMobileShift(vyuMBILShift entities)
        {
            var result = await _bl.SyncMobileShift(entities);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SyncEntireShift(vyuMBILShift entities)
        {
            var result = await _bl.SyncEntireShift(entities);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        [HttpPost]
        public async Task<HttpResponseMessage> StartShift(vyuMBILShift shift)
        {
            var result = await _bl.StartShift(shift);

            return Request.CreateResponse(HttpStatusCode.Accepted, result.data);
        }
    }
}
