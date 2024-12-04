using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;

using iRely.MobileBilling.Model;
using System.Reflection;

namespace iRely.MobileBilling.BusinessLayer
{
  public class InvoiceBl : BusinessLayer<tblMBILInvoice>, IInvoiceBl
  {
    #region Constructor
    public InvoiceBl(IMobileBillingRepository db) : base(db)
    {
      _db = db;
    }
    #endregion

    public override async Task<GetObjectResult> GetAsync(GetParameter param)
    {
      var query = _db.GetQuery<vyuMBILInvoice>().Filter(param, true);
      var data = await query.Execute(param, "intInvoiceId", "DESC").ToListAsync();

      return new GetObjectResult()
      {
        data = data,
        total = await query.CountAsync()
      };
    }

    public override async Task<SearchResult> Search(GetParameter param)
    {
      var query = _db.GetQuery<vyuMBILInvoice>().Filter(param, true);
      var data = await query.ExecuteProjection(param).AsNoTracking().ToListAsync();
      return new SearchResult()
      {
        data = data.AsQueryable(),
        total = await query.CountAsync()
      };
    }

    public async Task<SearchResult> SearchItems(GetParameter param)
    {
      try
      {
        var query = _db.GetQuery<vyuMBILInvoiceItem>().Filter(param, true);
        var data = await query.ExecuteProjection(param).AsNoTracking().ToListAsync();

        return new SearchResult()
        {
          data = data.AsQueryable(),
          total = await query.CountAsync()
        };
      }
      catch (Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

    public async Task<GetObjectResult> GetDetails(GetParameter param)
    {
      var query = _db.GetQuery<vyuMBILInvoiceItem>().Filter(param, true);
      var data = await query.AsNoTracking().ToListAsync();

      return new GetObjectResult()
      {
        data = data,
        total = await query.CountAsync()
      };
    }

    public async Task<BusinessResult<tblMBILInvoice>> VoidInvoice(int id)
    {
      var data = _db.GetQuery<tblMBILInvoice>().Where(x => x.intOrderId == id).FirstOrDefault();
      data.ysnVoided = true;

      var saveResult = await SaveAsync(true);
      return saveResult;
    }

    public async Task<BusinessResult<tblMBILInvoice>> SyncMobileInvoices(IEnumerable<vyuMBILInvoice> records)
    {
      var config = _db.GetQuery<tblMBILCompanyPreference>().FirstOrDefault();

      var invoices = records.Select(i => new tblMBILInvoice()
      {
        intInvoiceId = i.intInvoiceId,
        strInvoiceNo = i.strInvoiceNo,
        intOrderId = i.intOrderId,
        intEntityCustomerId = i.intEntityCustomerId,
        intLocationId = i.intLocationId,
        strType = i.strType,
        dtmDeliveryDate = i.dtmDeliveryDate,
        dtmInvoiceDate = i.dtmInvoiceDate,
        intDriverId = i.intDriverId,
        intShiftId = i.intShiftId,
        strComments = i.strComments,
        dblTotal = i.dblTotal,
        intTermId = i.intTermId,
        intPaymentMethodId = i.intPaymentMethodId,
        strPaymentInfo = i.strPaymentInfo,
        tblMBILInvoiceItems = i.tblMBILInvoiceItems.Select(ii => new tblMBILInvoiceItem()
        {
          intInvoiceItemId = ii.intInvoiceItemId,
          intInvoiceId = i.intInvoiceId,
          intSiteId = ii.intSiteId,
          intItemId = ii.intItemId,
          intItemUOMId = ii.intItemUOMId,
          intContractDetailId = ii.intContractDetailId,
          dblQuantity = ii.dblQuantity,
          dblPrice = ii.dblPrice,
          dblPercentageFull = ii.dblPercentageFull,
          dblItemTotal = ii.dblItemTotal,
          dblTaxTotal = ii.dblTaxTotal,
          tblMBILInvoiceTaxCodes = ii.tblMBILInvoiceTaxCodes.Select(itc => new tblMBILInvoiceTaxCode()
          {
            intInvoiceTaxId = itc.intInvoiceTaxId,
            intInvoiceItemId = ii.intInvoiceItemId,
            intItemId = itc.intItemId,
            intTransactionDetailTaxId = itc.intTransactionDetailTaxId,
            intInvoiceDetailId = itc.intInvoiceDetailId,
            intTaxGroupMasterId = itc.intTaxGroupMasterId,
            intTaxGroupId = itc.intTaxGroupId,
            intTaxCodeId = itc.intTaxCodeId,
            intTaxClassId = itc.intTaxClassId,
            strTaxableByOtherTaxes = itc.strTaxableByOtherTaxes,
            strCalculationMethod = itc.strCalculationMethod,
            dblRate = itc.dblRate,
            dblExemptionPercent = itc.dblExemptionPercent,
            dblTax = itc.dblTax,
            dblAdjustedTax = itc.dblAdjustedTax,
            dblBaseAdjustedTax = itc.dblBaseAdjustedTax,
            intSalesTaxAccountId = itc.intSalesTaxAccountId,
            ysnSeparateOnInvoice = itc.ysnSeparateOnInvoice,
            ysnCheckoffTax = itc.ysnCheckoffTax,
            strTaxCode = itc.strTaxCode,
            ysnTaxExempt = itc.ysnTaxExempt,
            ysnTaxOnly = itc.ysnTaxOnly,
            ysnInvalidSetup = itc.ysnInvalidSetup,
            strTaxGroup = itc.strTaxGroup,
            strNotes = itc.strNotes,
            intUnitMeasureId = itc.intUnitMeasureId,
            strUnitMeasure = itc.strUnitMeasure
          }).ToList(),
        }).ToList(),
      });

      foreach (var record in records)
      {
        var newInvoice = new tblMBILInvoice()
        {
          strInvoiceNo = record.strInvoiceNo,
          intOrderId = record.intOrderId,
          intEntityCustomerId = record.intEntityCustomerId,
          intLocationId = record.intLocationId,
          strType = record.strType,
          dtmDeliveryDate = record.dtmDeliveryDate,
          dtmInvoiceDate = record.dtmInvoiceDate,
          intDriverId = record.intDriverId,
          intShiftId = record.intShiftId,
          strComments = record.strComments,
          dblTotal = record.dblTotal,
          intTermId = record.intTermId,
          intPaymentMethodId = record.intPaymentMethodId,
          strPaymentInfo = record.strPaymentInfo,
          tblMBILInvoiceItems = new List<tblMBILInvoiceItem>()
        };

        if (config != null)
        {
          if (record.strCustomerNo == config.strDefaultCustomerNo)
          {
            var NewCustomerId = new SqlParameter("@EntityId", SqlDbType.Int)
            {
              Direction = ParameterDirection.Output
            };

            await _db.ContextManager.Database.ExecuteSqlCommandAsync("uspMBILCreateCustomer @UserId, @EntityId",
                                                                            new SqlParameter("@UserId", iRely.Common.Security.GetUserId()),
                                                                            NewCustomerId
                                                                            ).ConfigureAwait(false);
            int? intNewCustomerId = (int)NewCustomerId.Value;
            if (intNewCustomerId != 0 || intNewCustomerId != null)
            {
              newInvoice.intEntityCustomerId = intNewCustomerId;
            }
          }
        }

        if (record.tblMBILInvoiceItems != null)
        {

          foreach (var item in record.tblMBILInvoiceItems)
          {
            if (item != null)
            {
              var newInvoiceItem = new tblMBILInvoiceItem()
              {
                intInvoiceItemId = item.intInvoiceItemId,
                intInvoiceId = newInvoice.intInvoiceId,
                intSiteId = item.intSiteId,
                intItemId = item.intItemId,
                intItemUOMId = item.intItemUOMId,
                intContractDetailId = item.intContractDetailId,
                dblQuantity = item.dblQuantity,
                dblPrice = item.dblPrice,
                dblPercentageFull = item.dblPercentageFull,
                dblItemTotal = item.dblItemTotal,
                dblTaxTotal = item.dblTaxTotal,
                tblMBILInvoiceTaxCodes = new List<tblMBILInvoiceTaxCode>()
              };

              //if (config != null)
              //{
              //  if (item.strSiteDescription == config.strDefaultSiteNo)
              //  {
              //    var NewSiteId = new SqlParameter("@SiteId", SqlDbType.Int)
              //    {
              //      Direction = ParameterDirection.Output
              //    };

              //    await _db.ContextManager.Database.ExecuteSqlCommandAsync("uspMBILCreateSite @EntityCustomerId, @ItemId, @LocationId, @DriverId, @UserId, @SiteId",
              //                                                                    new SqlParameter("@EntityCustomerId", newInvoice.intEntityCustomerId),
              //                                                                    new SqlParameter("@ItemId", item.intItemId),
              //                                                                    new SqlParameter("@LocationId", newInvoice.intLocationId),
              //                                                                    new SqlParameter("@DriverId", newInvoice.intDriverId),
              //                                                                    new SqlParameter("@UserId", iRely.Common.Security.GetUserId()),
              //                                                                    NewSiteId
              //                                                                    ).ConfigureAwait(false);
              //    int? intNewSiteId = (int)NewSiteId.Value;
              //    if (intNewSiteId != 0 || intNewSiteId != null)
              //    {
              //      newInvoiceItem.intSiteId = intNewSiteId;
              //    }
              //  }
              //}

              if (item.tblMBILInvoiceTaxCodes != null)
              {

                foreach (var taxCode in item.tblMBILInvoiceTaxCodes)
                {
                  if (taxCode != null)
                  {
                    var newTaxCode = new tblMBILInvoiceTaxCode()
                    {
                      intInvoiceTaxId = taxCode.intInvoiceTaxId,
                      intInvoiceItemId = newInvoiceItem.intInvoiceItemId,
                      intItemId = taxCode.intItemId,
                      intTransactionDetailTaxId = taxCode.intTransactionDetailTaxId,
                      intInvoiceDetailId = taxCode.intInvoiceDetailId,
                      intTaxGroupMasterId = taxCode.intTaxGroupMasterId,
                      intTaxGroupId = taxCode.intTaxGroupId,
                      intTaxCodeId = taxCode.intTaxCodeId,
                      intTaxClassId = taxCode.intTaxClassId,
                      strTaxableByOtherTaxes = taxCode.strTaxableByOtherTaxes,
                      strCalculationMethod = taxCode.strCalculationMethod,
                      dblRate = taxCode.dblRate,
                      dblExemptionPercent = taxCode.dblExemptionPercent,
                      dblTax = taxCode.dblTax,
                      dblAdjustedTax = taxCode.dblAdjustedTax,
                      dblBaseAdjustedTax = taxCode.dblBaseAdjustedTax,
                      intSalesTaxAccountId = taxCode.intSalesTaxAccountId,
                      ysnSeparateOnInvoice = taxCode.ysnSeparateOnInvoice,
                      ysnCheckoffTax = taxCode.ysnCheckoffTax,
                      strTaxCode = taxCode.strTaxCode,
                      ysnTaxExempt = taxCode.ysnTaxExempt,
                      ysnTaxOnly = taxCode.ysnTaxOnly,
                      ysnInvalidSetup = taxCode.ysnInvalidSetup,
                      strTaxGroup = taxCode.strTaxGroup,
                      strNotes = taxCode.strNotes,
                      intUnitMeasureId = taxCode.intUnitMeasureId,
                      strUnitMeasure = taxCode.strUnitMeasure
                    };
                    newInvoiceItem.tblMBILInvoiceTaxCodes.Add(newTaxCode);
                  }
                };
              }
              newInvoice.tblMBILInvoiceItems.Add(newInvoiceItem);
            }
          };
          Add(newInvoice);

        }
      };

      var saveResult = await SaveAsync(true);

      return saveResult;
    }

    public async Task<string> PostInvoice(string param, bool preview, bool toPost, int userId)
    {
      try
      {
        var _dal = (MobileBilling.Model.MBILEntities)_db.ContextManager;
        var result = await _dal.MBILPostInvoice(param, preview, toPost, userId);

        return result;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

  }
}
