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
  public class OrderBl : BusinessLayer<tblMBILOrder>, IOrderBl
  {
    #region Constructor
    public OrderBl(IMobileBillingRepository db) : base(db)
    {
      _db = db;
    }
    #endregion

    public async Task<GetObjectResult> GetOrder(int driverId)
    {
      try
      {
        var _dal = (MobileBilling.Model.MBILEntities)_db.ContextManager;
        var result = await _dal.MBILProcessOrders(driverId);

        var query = _db.GetQuery<vyuMBILOrder>().Where(x => x.intDriverId == driverId);
        var data = await query.AsNoTracking().ToListAsync();

        return new GetObjectResult()
        {
          data = data,
          total = await query.CountAsync()
        };
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }

    }

    public async Task<GetObjectResult> GetOrderItem(int driverId)
    {
      var query = _db.GetQuery<vyuMBILOrderItem>().Where(x => x.intDriverId == driverId);
      var data = await query.AsNoTracking().ToListAsync();

      return new GetObjectResult()
      {
        data = data,
        total = await query.CountAsync()
      };
    }

    public async Task<GetObjectResult> GetOrderTaxCode(int driverId)
    {
      var query = _db.GetQuery<vyuMBILOrderTaxCode>().Where(x => x.intDriverId == driverId);
      var data = await query.AsNoTracking().ToListAsync();

      return new GetObjectResult()
      {
        data = data,
        total = await query.CountAsync()
      };
    }

    public async Task<GetObjectResult> GenerateExport(int driverId, string tablename, string orders)
    {
      try
      {
        var _dal = (MobileBilling.Model.MBILEntities)_db.ContextManager;
        var result = await _dal.MBILGenerateExport(driverId, tablename, orders);

        // SAVE FILENAME

        if (tablename != "complete_order")
        {
          var _export = new tblMBILExportFiles()
          {
            strFileName = result,
            intUserId = driverId,
            dtmCreatedDate = DateTime.Now
          };

          var _exportBRL = new ExportBl((IMobileBillingRepository)_db);
          _exportBRL.Add(_export);
          var saveResult = await _exportBRL.SaveAsync(true);
        }

        return new GetObjectResult()
        {
          data = result
        };
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }

    }

    public async Task<GetObjectResult> GetExportFiles()
    {
      try
      {
        var query = _db.GetQuery<tblMBILExportFiles>();
        var data = await query.AsNoTracking().ToListAsync();

        return new GetObjectResult()
        {
          data = data,
          total = await query.CountAsync()
        };
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }

    }


  }

  public class ExportBl : BusinessLayer<tblMBILExportFiles>, IExportBl
  {
    #region Constructor
    public ExportBl(IMobileBillingRepository db) : base(db)
    {
      _db = db;
    }
    #endregion

    public async Task<BusinessResult<tblMBILExportFiles>> AddRecord(IEnumerable<tblMBILExportFiles> records, bool continueOnConflict = false)
    {
      foreach (var record in records)
      {
        Add(record);
      }

      var saveResult = await SaveAsync(continueOnConflict);
      saveResult.data = records;

      return saveResult;
    }

    public async Task<GetObjectResult> GetExportFiles()
    {
      try
      {
        var query = _db.GetQuery<tblMBILExportFiles>();
        var data = await query.AsNoTracking().ToListAsync();

        return new GetObjectResult()
        {
          data = data,
          total = await query.CountAsync()
        };
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }

    }

  }
 }
