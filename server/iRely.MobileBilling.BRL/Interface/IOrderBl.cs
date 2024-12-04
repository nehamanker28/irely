using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
  public interface IOrderBl : IBusinessLayer<tblMBILOrder>
  {
    Task<GetObjectResult> GetOrder(int driverId);
    Task<GetObjectResult> GetOrderItem(int driverId);
    Task<GetObjectResult> GetOrderTaxCode(int driverId);
    Task<GetObjectResult> GenerateExport(int driverId, string tablename, string orders);
    Task<GetObjectResult> GetExportFiles();
  }

  public interface IExportBl : IBusinessLayer<tblMBILExportFiles>
  {
    Task<BusinessResult<tblMBILExportFiles>> AddRecord(IEnumerable<tblMBILExportFiles> records, bool continueOnConflict = false);
    Task<GetObjectResult> GetExportFiles();
  }
}
