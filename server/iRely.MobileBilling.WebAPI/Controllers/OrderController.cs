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


  public class OrderController : BaseApiController<tblMBILOrder>
  {
    private IOrderBl _bl;

    public OrderController(IOrderBl bl) : base(bl)
    {
      _bl = bl;
    }

    public async Task<HttpResponseMessage> GetOrder(int filter)
    {
      var result = await _bl.GetOrder(filter);
      return Request.CreateResponse(HttpStatusCode.OK, result);
    }

    public async Task<HttpResponseMessage> GetOrderItem(int filter)
    {
      var result = await _bl.GetOrderItem(filter);
      return Request.CreateResponse(HttpStatusCode.OK, result);
    }

    public async Task<HttpResponseMessage> GetOrderTaxCode(int filter)
    {
      var result = await _bl.GetOrderTaxCode(filter);
      return Request.CreateResponse(HttpStatusCode.OK, result);
    }

    //public async Task<HttpResponseMessage> GetGenerateExport(int driverId, string tablename)
    //{
    //  var result = await _bl.GenerateExport(driverId, tablename);
    //  return Request.CreateResponse(HttpStatusCode.OK, result);
    //}

    public async Task<HttpResponseMessage> GetGenerateExport(int driverId, string tablename, string orders = "")
    {
      var result = await _bl.GenerateExport(driverId, tablename, orders);
      return Request.CreateResponse(HttpStatusCode.OK, result);
    }

    public async Task<HttpResponseMessage> GetExport()
    {
      var result = await _bl.GetExportFiles();
      return Request.CreateResponse(HttpStatusCode.OK, result);
    }

  }
  
 }
