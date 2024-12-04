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

namespace iRely.MobileBilling.WebApi.Controllers
{
    public class OutOfGasController : BaseApiController<tblMBILOutOfGas>
    {
        private IOutOfGasBl _bl;

        public OutOfGasController(IOutOfGasBl bl) : base(bl)
        {
            _bl = bl;
        }

        public override async Task<HttpResponseMessage> Post(IEnumerable<tblMBILOutOfGas> entities, bool continueOnConflict = false)
        {
            var result = await _bl.AddRecord(entities, continueOnConflict);
            return Request.CreateResponse(HttpStatusCode.Accepted, result);
        }
    }    
}
