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
    public class InvoiceController : BaseApiController<tblMBILInvoice>
    {
        private IInvoiceBl _bl;

        public InvoiceController(IInvoiceBl bl) : base(bl)
        {
            _bl = bl;
        }

        [HttpPost]
        public async Task<HttpResponseMessage> SyncMobileInvoices(IEnumerable<vyuMBILInvoice> entities)
        {
            var result = await _bl.SyncMobileInvoices(entities);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        [HttpGet]
        public async Task<HttpResponseMessage> SearchItems([ModelBinder] GetParameter param)
        {
            var result = await _bl.SearchItems(param);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        public async Task<HttpResponseMessage> GetDetails([ModelBinder] GetParameter param)
        {
            var result = await _bl.GetDetails(param);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        public async Task<HttpResponseMessage> GetVoidInvoice(int id)
        {
            var result = await _bl.VoidInvoice(id);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

        [HttpGet]
        [ActionName("PostInvoice")]
        public async Task<HttpResponseMessage> PostInvoice(string param, bool preview, bool toPost, int userId)
        {
          var result = await _bl.PostInvoice(param, preview, toPost, userId);
          return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }

  }    
}
