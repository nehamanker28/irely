using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Entity;

using iRely.MobileBilling.Model;
using iRely.MobileBilling.BusinessLayer;
using System.Reflection;


namespace iRely.MobileBilling.BusinessLayer
{
  public class ShiftBl : BusinessLayer<tblMBILShift>, IShiftBl
  {
    #region Constructor
    public ShiftBl(IMobileBillingRepository db) : base(db)
    {
      _db = db;
    }
    #endregion

    public async Task<BusinessResult<tblMBILShift>> StartShift(vyuMBILShift shift)
    {
      try
      {
        var newShift = new tblMBILShift();
        newShift.intDriverId = shift.intDriverId;
        newShift.intLocationId = shift.intLocationId;
        newShift.strShiftNo = iRely.MobileBilling.BusinessLayer.Common.GetStartingNumber(Common.StartingNumber.Shift);
        newShift.dtmShiftDate = shift.dtmShiftDate;
        newShift.dtmStartTime = shift.dtmStartTime;
        //newShift.intShiftId = shift.intShiftId;
        newShift.intShiftNumber = shift.intShiftNumber;
        newShift.intTruckId = shift.intTruckId;
        newShift.intStartOdometer = shift.intStartOdometer;
        newShift.intEndOdometer = shift.intEndOdometer;
        base.Add(newShift);

        var data = new List<tblMBILShift>() { newShift };

        var result = await base.SaveAsync(true);
        result.data = data.AsQueryable();

        return result;
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

    public override async Task<SearchResult> Search(GetParameter param)
    {
      var query = _db.GetQuery<vyuMBILShift>().Filter(param, true);
      var data = await query.ExecuteProjection(param).AsNoTracking().ToListAsync();

      return new SearchResult()
      {
        data = data.AsQueryable(),
        total = await query.CountAsync()
      };
    }

    public override async Task<GetObjectResult> GetAsync(GetParameter param)
    {
      var query = _db.GetQuery<vyuMBILShift>().Filter(param, true);
      var data = await query.Execute(param, "intShiftId", "DESC").ToListAsync();

      return new GetObjectResult()
      {
        data = data,
        total = await query.CountAsync()
      };
    }

    public async Task<BusinessResult<tblMBILShift>> AddRecord(IEnumerable<tblMBILShift> records, bool continueOnConflict = false)
    {
      foreach (var record in records)
      {
        Add(record);
      }

      var saveResult = await SaveAsync(continueOnConflict);
      saveResult.data = records;

      return saveResult;
    }

    public async Task<GetObjectResult> GetInvoices(GetParameter param)
    {
      var query = _db.GetQuery<vyuMBILInvoice>().Filter(param, true);
      var data = await query.AsNoTracking().ToListAsync();

      return new GetObjectResult()
      {
        data = data,
        total = await query.CountAsync()
      };
    }

    public async Task<GetObjectResult> GetPayments(GetParameter param)
    {
      var query = _db.GetQuery<vyuMBILPayment>().Filter(param, true);
      var data = await query.AsNoTracking().ToListAsync();

      return new GetObjectResult()
      {
        data = data,
        total = await query.CountAsync()
      };
    }

    public async Task<BusinessResult<tblMBILShift>> SyncMobileShift(vyuMBILShift shift)
    {
      var newShift = new tblMBILShift()
      {
        //intShiftId = shift.intShiftId,
        dtmShiftDate = shift.dtmShiftDate,
        intDriverId = shift.intDriverId,
        intLocationId = shift.intLocationId,
        intShiftNumber = shift.intShiftNumber,
        dtmStartTime = shift.dtmStartTime,
        dtmEndTime = shift.dtmEndTime,
        intTruckId = shift.intTruckId,
        intStartOdometer = shift.intStartOdometer,
        intEndOdometer = shift.intEndOdometer,
        dblFuelGallonsDelievered = shift.dblFuelGallonsDelievered,
        dblFuelSales = shift.dblFuelSales,
      };
      Add(newShift);
      var saveResult = await SaveAsync(true);
      //saveResult.data = new List<tblMBILShift>() { newShift };

      return saveResult;
    }

    public async Task<BusinessResult<tblMBILShift>> SyncEntireShift(vyuMBILShift shift)
    {
      try
      {
        int newShiftId;
        //var newShift = new tblMBILShift()
        //{
        //    dtmShiftDate = shift.dtmShiftDate,
        //    intDriverId = shift.intDriverId,
        //    intLocationId = shift.intLocationId,
        //    intShiftNumber = shift.intShiftNumber,
        //    dtmStartTime = shift.dtmStartTime,
        //    dtmEndTime = shift.dtmEndTime,
        //    intTruckId = shift.intTruckId,
        //    intStartOdometer = shift.intStartOdometer,
        //    intEndOdometer = shift.intEndOdometer,
        //    dblFuelGallonsDelievered = shift.dblFuelGallonsDelievered,
        //    dblFuelSales = shift.dblFuelSales,
        //};
        //Add(newShift);
        //var saveResult = await SaveAsync(true);

        //newShiftId = saveResult.data.FirstOrDefault().intShiftId;

        var _shift = _db.GetQuery<tblMBILShift>().Where(x => x.intShiftId == shift.intShiftId).FirstOrDefault();
        _shift.intEndOdometer = shift.intEndOdometer;
        if (shift.intEndOdometer != null)
        {
          _shift.dtmEndTime = DateTime.Now;
        }
        await SaveAsync(true);

        newShiftId = shift.intShiftId;

        if (shift.tblMBILInvoices != null)
        {
          var invoices = shift.tblMBILInvoices.Select(i => new vyuMBILInvoice()
          {
            intInvoiceId = i.intInvoiceId,
            strInvoiceNo = i.strInvoiceNo,
            intOrderId = i.intOrderId,
            intEntityCustomerId = i.intEntityCustomerId,
            strCustomerNo = i.strCustomerNo,
            strCustomerName = i.strCustomerName,
            intLocationId = i.intLocationId,
            strLocationName = i.strLocationName,
            strType = i.strType,
            dtmDeliveryDate = i.dtmDeliveryDate,
            dtmInvoiceDate = i.dtmInvoiceDate,
            intDriverId = i.intDriverId,
            strDriverNo = i.strDriverNo,
            strDriverName = i.strDriverName,
            intShiftId = newShiftId,
            intShiftNumber = i.intShiftNumber,
            strComments = i.strComments,
            dblTotal = i.dblTotal,
            intTermId = i.intTermId,
            strTerm = i.strTerm,
            strStatus = i.strStatus,
            intPaymentMethodId = i.intPaymentMethodId,
            strPaymentInfo = i.strPaymentInfo,
            tblMBILInvoiceItems = i.tblMBILInvoiceItems,
          });

          var invoiceBI = new InvoiceBl((IMobileBillingRepository)_db);
          await invoiceBI.SyncMobileInvoices(invoices);
        }

        if (shift.tblMBILPayments != null)
        {
          var payments = shift.tblMBILPayments.Select(p => new vyuMBILPayment()
          {
            intPaymentId = p.intPaymentId,
            strPaymentNo = p.strPaymentNo,
            intEntityCustomerId = p.intEntityCustomerId,
            strCustomerNo = p.strCustomerNo,
            strCustomerName = p.strCustomerName,
            intLocationId = p.intLocationId,
            strLocationName = p.strLocationName,
            intEntityDriverId = p.intEntityDriverId,
            strDriverNo = p.strDriverNo,
            strDriverName = p.strDriverName,
            intShiftId = newShiftId,
            intShiftNumber = p.intShiftNumber,
            dtmDatePaid = p.dtmDatePaid,
            strMethod = p.strMethod,
            strCheckNumber = p.strCheckNumber,
            dblPayment = p.dblPayment,
            strComments = p.strComments,
            ysnPosted = p.ysnPosted,
          });

          var paymentBI = new PaymentBl((IMobileBillingRepository)_db);
          await paymentBI.SyncMobilePayments(payments);
        }

        var saveResult = await SaveAsync(true);
        return saveResult;
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }

    }

  }
}
