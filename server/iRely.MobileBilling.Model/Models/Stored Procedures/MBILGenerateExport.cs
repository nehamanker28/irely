using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;
using System.IO;
using Newtonsoft.Json;
using Ionic.Zip;

namespace iRely.MobileBilling.Model
{
  public partial class MBILEntities
  {
    public class vyuMBILExportCustomerSpecialPricing
    {
      public long intCustomerPricingId { get; set; }
      public string strCustomerNumber { get; set; }
      public string strItemNo { get; set; }
      public decimal? dblPrice { get; set; }
      public string strPricing { get; set; }
      public int? intEntityId { get; set; }
      public int? intLocationId { get; set; }
    }

    public class vyuMBILExportCustomerMultiLevelPricing
    {
      public long intCustomerMultiLevelPricingId { get; set; }
      public int? intEntityId { get; set; }
      public string strCustomerNumber { get; set; }
      public string strLevel { get; set; }
      public int? intItemPricingLevelId { get; set; }
      public int? intCompanyLocationPricingLevelId { get; set; }
      public int? intItemId { get; set; }
      public string strItemNo { get; set; }
      public int? intItemLocationId { get; set; }
      public string strPriceLevel { get; set; }
      public int? intItemUnitMeasureId { get; set; }
      public decimal? dblUnit { get; set; }
      public DateTime? dtmEffectiveDate { get; set; }
      public decimal? dblMin { get; set; }
      public decimal? dblMax { get; set; }
      public string strPricingMethod { get; set; }
      public decimal? dblAmountRate { get; set; }
      public decimal? dblUnitPrice { get; set; }
      public string strCommissionOn { get; set; }
      public decimal? dblCommissionRate { get; set; }
      public int? intCurrencyId { get; set; }
    }

    public class vyuMBILExportItem
    {
      public long intInventoryItemId { get; set; }
      public string strLocationNumber { get; set; }
      public int? intItemId { get; set; }
      public string strItemNo { get; set; }
      public string strDescription { get; set; }
      public string strAccountId { get; set; }
      public string strUnitMeasure { get; set; }
      public string strType { get; set; }
      public decimal? dblSalePrice { get; set; }
      public int? intCategoryId { get; set; }
      public string strTagNumber { get; set; }
      public string strTagMessage { get; set; }
      public string strTagDescription { get; set; }
      public string strTagType { get; set; }
      public bool? ysnHazMat { get; set; }
      //public string strPriceLevel { get; set; }
      //public string strPricingMethod { get; set; }
      //public decimal? dblMin { get; set; }
      //public decimal? dblMax { get; set; }
      //public decimal? dblAmountRate { get; set; }
      //public decimal? dblUnitPrice { get; set; }
      //public DateTime? dtmEffectiveDate { get; set; }      
    }

    public class vyuMBILExportContractExport
    {
      public long intContractExportId { get; set; }
      public int? intContractDetailId { get; set; }
      public string strLocationNumber { get; set; }
      public string strEntityNo { get; set; }
      public string strItemNo { get; set; }
      public int? intItemId { get; set; }
      public string strDescription { get; set; }
      public int? intContractSeq { get; set; }
      public decimal? dblQuantity { get; set; }
      public decimal? dblContractUnitDelivered { get; set; }
      public string strTermCode { get; set; }
      public string strContractNumber { get; set; }
      public DateTime? dtmStartDate { get; set; }
      public DateTime? dtmEndDate { get; set; }
      public decimal? dblContractPriceCT { get; set; }
      public bool? ysnMaxPrice { get; set; }
      public decimal? dblCashPrice { get; set; }
      public string strPricing { get; set; }
      public string strType { get; set; }
      public decimal? dblContractCashSpent { get; set; }
      public decimal? dblAvailableQty { get; set; }      
    }

    public class vyuMBILExportFullTax
    {
      public long intFulltaxId { get; set; }
      public int? intTaxGroupId { get; set; }
      public string strTaxGroup { get; set; }
      public int? intTaxCodeId { get; set; }
      public string strTaxCode { get; set; }
      public int? intTaxClassId { get; set; }
      public string strTaxClass { get; set; }
      public string strCalculationMethod { get; set; }
      public decimal? dblRate { get; set; }
      public decimal? dblQuantity { get; set; }
      public decimal? dblPrice { get; set; }
      public decimal? dblTotal { get; set; }
      public bool? ysnCheckoffTax { get; set; }
      public string strTaxableByOtherTaxes { get; set; }
      public string strType { get; set; }
    }

    public class tblICCategoryTax
    {
      public int? intCategoryTaxId { get; set; }
      public int? intCategoryId { get; set; }
      public int? intTaxClassId { get; set; }
      public bool? ysnActive { get; set; }
    }

    public class tblEMEntityLocation
    {
      public int? intEntityLocationId { get; set; }
      public int? intEntityId { get; set; }
      public int? intTaxGroupId { get; set; }
      public int? intTaxClassId { get; set; }
      public int? intTermsId { get; set; }
      public int? intFreightTermId { get; set; }
      public string strLocationName { get; set; }
      public string strLocationType { get; set; }
      public string strTaxGroup { get; set; }
      public bool? ysnDefaultLocation { get; set; }
    }

    public class vyuMBILExportCustomerTaxExemption
    {
      public int? intCustomerTaxingTaxExceptionId { get; set; }
      public int? intEntityCustomerId { get; set; }
      public int? intItemId { get; set; }
      public int? intCategoryId { get; set; }
      public int? intTaxCodeId { get; set; }
      public int? intTaxClassId { get; set; }
      public string strState { get; set; }
      public string strException { get; set; }
      public string strExceptionReason { get; set; }
      public DateTime? dtmStartDate { get; set; }
      public DateTime? dtmEndDate { get; set; }
      public int? intEntityCustomerLocationId { get; set; }
      public decimal? dblPartialTax { get; set; }
      public int? intCardId { get; set; }
      public int? intVehicleId { get; set; }
      public int? intCompanyId { get; set; }
      public int? intSiteNumber { get; set; }
    }

    public class vyuMBILExportCategoryTaxExemption
    {
      public int? intTaxGroupCodeCategoryExemptionId { get; set; }
      public int? intTaxGroupCodeId { get; set; }
      public int? intCategoryId { get; set; }
      public int? intConcurrencyId { get; set; }
      public int? intTaxCodeId { get; set; }
      public int? intTaxGroupId { get; set; }
    }

    public class tblARCustomer
    {
      public int? intEntityId { get; set; }
      public bool? ysnApplyPrepaidTax { get; set; }
      public bool? ysnApplySalesTax { get; set; }
      public bool? ysnTaxExempt { get; set; }
      public string strCustomerNumber { get; set; }
      public int? intBillToId { get; set; }
      public int? intShipToId { get; set; }
      public string strTaxState { get; set; }
      public int? intCustomerId { get; set; }
      public int? intEntityCustomerId { get; set; }
      public int? intTerm { get; set; }
      public string strName { get; set; }
      public string strCustomerName { get; set; }
      public string strBillToAddress { get; set; }
      public string strBillToCity { get; set; }
      public string strBillToState { get; set; }
      public string strBillToZipCode { get; set; }
      public string strPhone1 { get; set; }
      public string strEmail { get; set; }
      public string strInternalNotes { get; set; }
      public string strTerm { get; set; }
      public string strLevel { get; set; }
      public decimal? dblCreditLimit { get; set; }
      public decimal? dblTotalDue { get; set; }
      public decimal? dbl31DaysAmountDue { get; set; }
      public decimal? dblLastPayment { get; set; }
      public decimal? dtmLastPaymentDate { get; set; }
    }

    public class tblTMSite
    {
      public int? intSiteID { get; set; }
      public int? intSiteNumber { get; set; }
      public int? intCustomerID { get; set; }
      public bool? ysnTaxable { get; set; }
      public bool? ysnActive { get; set; }
      public int? intEntityId { get; set; }
      public string strEntityNo { get; set; }
      public string strDescription { get; set; }
      public int? intDriverID { get; set; }
      public string strItemNo { get; set; }
      public string strSiteAddress { get; set; }
      public string strCity { get; set; }
      public string strState { get; set; }
      public string strZipCode { get; set; }
      public decimal? dblLatitude { get; set; }
      public decimal? dblLongitude { get; set; }
      public int? intLocationId { get; set; }
      public string strLocation { get; set; }
      public string strFillMethod { get; set; }
      public string strInstruction { get; set; }
      public string strDeliveryTerm { get; set; }
      public decimal? dblTankCapacity { get; set; }
      public int? intTaxStateID { get; set; }
    }

    public class tblSMTruck
    {
      public int? intTruckId { get; set; }
      public string strTruckNumber { get; set; }
      public string strType { get; set; }
      public string strDescription { get; set; }
      public decimal? dblCapacity { get; set; }
    }

    public class tblTMDeliveryHistory
    {      
      public int? intDeliveryHistoryID { get; set; }
      public int? intSiteID { get; set; }
      public DateTime? dtmInvoiceDate { get; set; }
      public decimal? dblQuantityDelivered { get; set; }
    }

    public class tblTMSiteDevice
    {
      public int? intSiteDeviceID { get; set; }
      public int? intSiteID { get; set; }
      public int? intDeviceId { get; set; }
      public string strDeviceType { get; set; }
      public string strSerialNumber { get; set; }
      public decimal? dblTankCapacity { get; set; }
      public string strDescription { get; set; }
    }

    public class tblSMTerm
    {
      public int? intTermID { get; set; }
      public string strTerm { get; set; }
      public string strType { get; set; }
      public decimal? dblDiscountEP { get; set; }
      public int? intBalanceDue { get; set; }
      public int? intDiscountDay { get; set; }
      public int? intDiscountDueNextMonth { get; set; }
      public decimal? dblAPR { get; set; }
      public string strTermCode { get; set; }
      public bool? ysnAllowEFT { get; set; }
      public int? intDayofMonthDue { get; set; }
      public int? intDueNextMonth { get; set; }
      public DateTime? dtmDiscountDate { get; set; }
      public DateTime? dtmDueDate { get; set; }
      public bool? ysnActive { get; set; }
      public bool? ysnEnergyTrac { get; set; }
      public bool? ysnDeferredPay { get; set; }
      public bool? ysnIncludeTaxOnDiscount { get; set; }
    }

    public class tblSMLocation
    {
      public int? intCompanyLocationId { get; set; }
      public string strLocationName { get; set; }
      public string strLocationNumber { get; set; }
      public string strLocationType { get; set; }
      public int? intTaxGroupId { get; set; }
      public string strUseLocationAddress { get; set; }
      public string strAddress { get; set; }
      public string strCity { get; set; }
      public string strStateProvince { get; set; }
      public string strZipPostalCode { get; set; }
      public string strCountry { get; set; }
    }

    public class tblMBILCompanyPreference
    {
      public int? intCompanyPreferenceId { get; set; }
      public bool? ysnShowLogo { get; set; }
      public int? intCompanyContact { get; set; }
      public string strCompanyName { get; set; }
      public string strDefaultCustomerNo { get; set; }
      public string strDefaultSiteNo { get; set; }
      public string strHazardousSpillCompanyName { get; set; }
      public string strHazardousSpillCompanyPhoneNumber { get; set; }
      public string strEmergencyCustomerCode { get; set; }
    }

    public class tblSMCompanySetup
    {
      public int? intCompanySetupID { get; set; }
      public Byte[] imgCompanyLogo { get; set; }
      public string strCompanyName { get; set; }
      public string strAddress { get; set; }
      public string strCounty { get; set; }
      public string strCity { get; set; }
      public string strState { get; set; }
      public string strZip { get; set; }
      public string strCountry { get; set; }
      public bool? ysnGlobalLogo { get; set; }

      //intCompanySetupID, imgCompanyLogo, strCompanyName, strAddress, strCounty, strCity, strState, strZip, strCountry, ysnGlobalLogo
    }

    public class tblSMPaymentMethod
    {
      public int? intPaymentMethodId { get; set; }
      public string strPaymentMethod { get; set; }
      public string strPaymentMethodCode { get; set; }
      public bool? ysnActive { get; set; }
    }


    public virtual async Task<string> MBILGenerateExport(int driverId, string tablename, string orderId)
    {
      var connection = this.Database.Connection;
      var command = connection.CreateCommand();
      command.CommandTimeout = 0;

      try
      {
        // Open a connection if it is closed
        if (connection.State == ConnectionState.Closed)
          connection.Open();

        var jsonResult = new StringBuilder();
        var _fileName_timestamp = "_" + DateTime.Now.ToShortDateString().Replace("/", "-") + "_" + DateTime.Now.ToShortTimeString().Replace(":", "").Replace(" ", "").Replace("AM", "").Replace("PM", "");
        string physicalPath = AppDomain.CurrentDomain.BaseDirectory;
        string currentDirectorypath = physicalPath + "Export\\MobileBilling";
        System.IO.Directory.CreateDirectory(currentDirectorypath);

        if (tablename == "tblCustomerSpecialPricing")
        {
          await SpecialPricing(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblCustomerMultiLevelPricing")
        {
          await MultiLevelPricing(currentDirectorypath, _fileName_timestamp);
        }        
        else if (tablename == "tblInventoryItem")
        {
          await InventoryItem(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblContractExport")
        {
          await ContractExport(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblFullTax")
        {
          await FullTax(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblCategoryTax")
        {
          await CategoryTax(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblEntityLocation")
        {
          await EntityLocation(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblCustomerTaxExemption")
        {
          await CustomerTaxExemption(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblCategoryTaxExemption")
        {
          await CategoryTaxExemption(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblARCustomer")
        {
          await ARCustomer(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblTMSite")
        {
          await TMSite(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblSMTruck")
        {
          await SMTruck(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblTMDeliveryHistory")
        {
          await TMDeliveryHistory(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblTMSiteDevice")
        {
          await TMSiteDevice(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblSMTerm")
        {
          await SMTerm(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblSMLocation")
        {
          await SMLocation(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblSMPaymentMethod")
        {
          await SMPaymentMethod(currentDirectorypath, _fileName_timestamp);
        }        
        else if (tablename == "tblMBILCompanyPreference")
        {
          await CompanyPreference(currentDirectorypath, _fileName_timestamp);
        }
        else if (tablename == "tblMBILOrder")
        {
          await MBILOrder(currentDirectorypath, _fileName_timestamp, driverId, "");
        }
        else if (tablename == "tblMBILOrderItem")
        {
          await MBILOrderItem(currentDirectorypath, _fileName_timestamp, driverId, "");
        }
        else if (tablename == "tblMBILOrderTaxCode")
        {
          await MBILOrderTaxCode(currentDirectorypath, _fileName_timestamp, driverId, "");
        }
        else if (tablename == "complete_order")
        {
          await MBILOrder(currentDirectorypath, _fileName_timestamp, driverId, orderId);
          await MBILOrderItem(currentDirectorypath, _fileName_timestamp, driverId, orderId);
          await MBILOrderTaxCode(currentDirectorypath, _fileName_timestamp, driverId, orderId);
        }
        else
        {
          await exportAll(currentDirectorypath, _fileName_timestamp, driverId);
        }
       
        // ZIP FILES
        var _zip = ZipFile(currentDirectorypath, _fileName_timestamp, tablename);
        // CLEAN UP JSON FILES
        CleanUpFiles(currentDirectorypath);

        return _fileName_timestamp;
      }
      catch (Exception ex)
      {
        throw ex;
      }
      finally
      {
        // Ensure the command and connection objects are closed and disposed.
        command.Dispose();
        connection.Close();
      }
    }



    public bool WriteFile(string fileNameWithPath, object data, string tablename, List<string> fields, string primarykey, string command)
    {
      try
      {
        fileNameWithPath = iRely.Common.Sanitize.ValidateFullPath(fileNameWithPath);
        if (File.Exists(fileNameWithPath))
          File.Delete(fileNameWithPath);

        string _json = JsonConvert.SerializeObject(data);
        string _fields = "";
        fields.ForEach((field) =>
        {
          if(primarykey == field)
          {
            _fields = _fields + "[" + field + "] PRIMARY KEY, ";
          }
          else
          {
            _fields = _fields + "[" + field + "], ";
          }          
        });
        string _sqlite = json_format(_json, tablename, _fields.Substring(0,_fields.Length-2), command);

        var fs = File.Open(fileNameWithPath, FileMode.CreateNew, FileAccess.Write);
        byte[] byteData = null;
        byteData = Encoding.ASCII.GetBytes(_sqlite);
        fs.Write(byteData, 0, byteData.Length);
        fs.Close();

        return true;
      }
      catch (Exception ex)
      {
        return false;
      }
    }

    public bool ZipFile(string currentDirectorypath, string timestamp, string tablename)
    {
      try
      {
        var zip = new ZipFile();

        if (tablename == "complete_order")
        {
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblMBILOrder" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblMBILOrderItem" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblMBILOrderTaxCode" + timestamp), "");
        }
        else if (tablename != null)
        {
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, tablename + timestamp), "");
        }
        else
        {
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblCustomerSpecialPricing" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblCustomerMultiLevelPricing" + timestamp), "");          
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblInventoryItem" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblContractExport" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblFullTax" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblCategoryTax" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblEntityLocation" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblCustomerTaxExemption" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblCategoryTaxExemption" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblARCustomer" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblTMSite" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblSMTruck" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblTMDeliveryHistory" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblTMSiteDevice" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblSMTerm" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblSMLocation" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblSMPaymentMethod" + timestamp), "");          
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblMBILCompanyPreference" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblMBILOrder" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblMBILOrderItem" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblMBILOrderTaxCode" + timestamp), "");
          zip.AddItem(string.Format("{0}\\{1}.json", currentDirectorypath, "tblSMCompanySetup" + timestamp), "");
        }
        
        zip.Save(string.Format("{0}\\{1}.zip", currentDirectorypath, "mobile_billing_" + timestamp));

        return true;
      }
      catch (Exception ex)
      {
        return false;
      }
    }

    public string json_format(object data, string tablename, string fields, string command = "")
    {
      try
      {
        var _data = "";
        if (command == "insert")
        {
          _data = "{\"data\":{" +
                      "\"inserts\":{" +
                          "\"" + tablename + "\":" +
                               data.ToString() +
                           "" +
                        "}" +
                     "}" +
                  "}";
        }
        else
        {
          _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"" + tablename + "\": " +
                          "\"(" + fields + ")\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"" + tablename + "\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        }
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public bool CleanUpFiles(string currentDirectorypath)
    {
      string[] files = Directory.GetFiles(currentDirectorypath);

      foreach (string file in files)
      {
        FileInfo fi = new FileInfo(file);
        if (fi.LastAccessTime < DateTime.Now.AddDays(-3))
        {
          if(fi.Extension == ".json")
          {
            fi.Delete();
          }          
        }          
      }

      return true;
    }




    public async Task<bool> exportAll(string currentDirectorypath, string _fileName_timestamp, int driverId)
    {
      await SpecialPricing(currentDirectorypath, _fileName_timestamp);
      await MultiLevelPricing(currentDirectorypath, _fileName_timestamp);
      await InventoryItem(currentDirectorypath, _fileName_timestamp);
      await ContractExport(currentDirectorypath, _fileName_timestamp);
      await FullTax(currentDirectorypath, _fileName_timestamp);
      await CategoryTax(currentDirectorypath, _fileName_timestamp);
      await EntityLocation(currentDirectorypath, _fileName_timestamp);
      await CustomerTaxExemption(currentDirectorypath, _fileName_timestamp);
      await CategoryTaxExemption(currentDirectorypath, _fileName_timestamp);
      await ARCustomer(currentDirectorypath, _fileName_timestamp);
      await TMSite(currentDirectorypath, _fileName_timestamp);
      await SMTruck(currentDirectorypath, _fileName_timestamp);
      await TMDeliveryHistory(currentDirectorypath, _fileName_timestamp);
      await TMSiteDevice(currentDirectorypath, _fileName_timestamp);
      await SMTerm(currentDirectorypath, _fileName_timestamp);
      await SMLocation(currentDirectorypath, _fileName_timestamp);
      await SMPaymentMethod(currentDirectorypath, _fileName_timestamp);
      await CompanyPreference(currentDirectorypath, _fileName_timestamp);
      await MBILOrder(currentDirectorypath, _fileName_timestamp, driverId, "");
      await MBILOrderItem(currentDirectorypath, _fileName_timestamp, driverId, "");
      await MBILOrderTaxCode(currentDirectorypath, _fileName_timestamp, driverId, "");
      await CompanySetup(currentDirectorypath, _fileName_timestamp);

      return true;
    }

    public async Task<bool> SpecialPricing(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblCustomerSpecialPricing";
      var _list = await this.Database.SqlQuery<vyuMBILExportCustomerSpecialPricing>("SELECT * FROM vyuMBILExportCustomerSpecialPricing").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILExportCustomerSpecialPricing).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intCustomerPricingId", "");

      return true;
    }

    public async Task<bool> MultiLevelPricing(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblCustomerMultiLevelPricing";
      var _list = await this.Database.SqlQuery<vyuMBILExportCustomerMultiLevelPricing>("SELECT * FROM vyuMBILExportCustomerMultiLevelPricing").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILExportCustomerMultiLevelPricing).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intCustomerMultiLevelPricingId", "");

      return true;
    }

    public async Task<bool> InventoryItem(string currentDirectorypath, string _fileName_timestamp)
    {    
      var _tablename = "tblInventoryItem";
      var _list = await this.Database.SqlQuery<vyuMBILExportItem>("SELECT * FROM vyuMBILExportItem").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILExportItem).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intInventoryItemId", "");

      return true;
    }

    public async Task<bool> ContractExport(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblContractExport";
      var _list = await this.Database.SqlQuery<vyuMBILExportContractExport>("SELECT * FROM vyuMBILExportContractExport").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILExportContractExport).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intContractExportId", "");

      return true;
    }

    public async Task<bool> FullTax(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblFullTax";
      var _list = await this.Database.SqlQuery<vyuMBILExportFullTax>("SELECT * FROM vyuMBILExportFullTax").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILExportFullTax).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intFulltaxId", "");

      return true;
    }

    public async Task<bool> CategoryTax(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblCategoryTax";
      var _list = await this.Database.SqlQuery<tblICCategoryTax>("SELECT intCategoryTaxId, intCategoryId, intTaxClassId, ysnActive FROM tblICCategoryTax").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblICCategoryTax).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intCategoryTaxId", "");

      return true;
    }

    public async Task<bool> EntityLocation(string currentDirectorypath, string _fileName_timestamp)
    {     
      var _tablename = "tblEntityLocation";
      var _list = await this.Database.SqlQuery<tblEMEntityLocation>("SELECT intEntityLocationId, intEntityId, strLocationName, intTaxGroupId, intTaxClassId, intTermsId, strLocationType, ysnDefaultLocation, intFreightTermId, (select TOP 1 strTaxGroup from tblSMTaxGroup WHERE tblSMTaxGroup.intTaxGroupId = tblEMEntityLocation.intTaxGroupId) as strTaxGroup FROM tblEMEntityLocation").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblEMEntityLocation).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intEntityLocationId", "");

      return true;
    }

    public async Task<bool> CustomerTaxExemption(string currentDirectorypath, string _fileName_timestamp)
    {      
      var _tablename = "tblCustomerTaxExemption";
      var _list = await this.Database.SqlQuery<vyuMBILExportCustomerTaxExemption>("SELECT * FROM vyuMBILExportCustomerTaxExemption").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILExportCustomerTaxExemption).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intCustomerTaxingTaxExceptionId", "");

      return true;
    }

    public async Task<bool> CategoryTaxExemption(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblCategoryTaxExemption";
      var _list = await this.Database.SqlQuery<vyuMBILExportCategoryTaxExemption>("SELECT * FROM vyuMBILExportCategoryTaxExemption").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILExportCategoryTaxExemption).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intTaxGroupCodeCategoryExemptionId", "");

      return true;
    }

    public async Task<bool> ARCustomer(string currentDirectorypath, string _fileName_timestamp)
    {      
      var _tablename = "tblARCustomer";
      var _list = await this.Database.SqlQuery<tblARCustomer>("SELECT strLevel					= CUSTOMER.strLevel, ysnApplyPrepaidTax		= CUSTOMER.ysnApplyPrepaidTax, ysnApplySalesTax			= CUSTOMER.ysnApplySalesTax, dblCreditLimit			= CUSTOMER.dblCreditLimit, ysnTaxExempt				= CUSTOMER.ysnTaxExempt, strCustomerNumber		= CUSTOMER.strCustomerNumber, intBillToId				= CUSTOMER.intBillToId, intShipToId				= CUSTOMER.intShipToId, strTaxState				= CUSTOMER.strTaxState, intEntityCustomerId		= CUSTOMER.intEntityId, intEntityId				= CUSTOMER.intEntityId, intTerm					= ISNULL(CUSTOMER.intTermsId, 0), strName					= EM.strName, strCustomerName			= EM.strName, strTerm					= T.strTerm, strAddress				= CLOC.strAddress, strZipCode				= CLOC.strZipCode, strCity					= CLOC.strCity, strState					= CLOC.strState, strCountry				= CLOC.strCountry, strEmail					= EETC.strEmail, strPhone1				= EPN.strPhone, strPhone2				= EETC.strPhone2, strBusinessLocation		= CLOC.strLocationName, strInternalNotes			= EETC.strInternalNotes, strBudgetStatus			= 'Past Due', strBillToAddress			= BILLTO.strAddress, strBillToCity			= BILLTO.strCity, strBillToState			= BILLTO.strState, strBillToZipCode			= BILLTO.strZipCode, dblLastStatement			= ISNULL(SOA.dblLastStatement, CONVERT(NUMERIC(18,6),0)), dblTotalDue				= ISNULL(dblFuture + dbl0Days + dbl10Days + dbl30Days + dbl60Days + dbl90Days + dbl91Days + dblCredits, CONVERT(NUMERIC(18,6),0)), dbl31DaysAmountDue		= ISNULL(AGING.dbl60Days, CONVERT(NUMERIC(18,6),0)) + ISNULL(AGING.dbl90Days, CONVERT(NUMERIC(18,6),0)) + ISNULL(AGING.dbl91Days, CONVERT(NUMERIC(18,6),0)), dtmLastStatementDate		= SOA.dtmLastStatementDate, intCustomerId			= tblTMCustomer.intCustomerID FROM tblARCustomer CUSTOMER INNER JOIN tblEMEntity EM ON CUSTOMER.intEntityId = EM.intEntityId LEFT JOIN tblEMEntityLocation CLOC ON CUSTOMER.intEntityId = CLOC.intEntityId AND CLOC.ysnDefaultLocation = 1 LEFT JOIN tblEMEntityLocation BILLTO ON CUSTOMER.intBillToId = BILLTO.intEntityLocationId AND BILLTO.ysnDefaultLocation = 1 LEFT JOIN tblEMEntityToContact ETC ON CUSTOMER.intEntityId = ETC.intEntityId AND ETC.ysnDefaultContact = 1 LEFT JOIN tblEMEntity EETC ON ETC.intEntityContactId = EETC.intEntityId LEFT JOIN tblEMEntityPhoneNumber EPN ON ETC.intEntityContactId = EPN.intEntityId LEFT JOIN tblSMTerm T ON CUSTOMER.intTermsId = T.intTermID LEFT JOIN (	SELECT dblFuture	= SUM(CASE WHEN I.strType= 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dblPastDue	= SUM(CASE WHEN DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) > 0 AND I.strType <> 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dbl0Days		= SUM(CASE WHEN DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) <= 0 AND I.strType <> 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dbl10Days	= SUM(CASE WHEN DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) > 0 AND DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) <= 10 AND I.strType <> 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dbl30Days	= SUM(CASE WHEN DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) > 10 AND DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) <= 30 AND I.strType <> 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dbl60Days	= SUM(CASE WHEN DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) > 30 AND DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) <= 60 AND I.strType <> 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dbl90Days	= SUM(CASE WHEN DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) > 60 AND DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) <= 90 AND I.strType <> 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dbl91Days	= SUM(CASE WHEN DATEDIFF(DAYOFYEAR, I.dtmDueDate, GETDATE()) > 90 AND I.strType <> 'CF Tran' AND I.strTransactionType NOT IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN I.dblAmountDue ELSE 0 END) 		 , dblCredits	= SUM(CASE WHEN I.strTransactionType IN ('Credit Memo', 'Customer Prepayment', 'Overpayment') THEN -I.dblAmountDue ELSE 0 END) 		 , intEntityCustomerId	= I.intEntityCustomerId 	FROM tblARInvoice I 	WHERE I.ysnPosted = 1 	  AND I.ysnPaid = 0 	  AND I.ysnForgiven = 0 	  AND I.dblAmountDue <> 0 	  AND I.strTransactionType <> 'Cash Refund' 	  AND I.dtmPostDate <= CAST(GETDATE() AS DATE) 	GROUP BY intEntityCustomerId ) AGING ON AGING.intEntityCustomerId = CUSTOMER.intEntityId LEFT JOIN tblARStatementOfAccount SOA ON SOA.strEntityNo = CUSTOMER.strCustomerNumber LEFT JOIN tblTMCustomer ON tblTMCustomer.intCustomerNumber = CUSTOMER.intEntityId").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblARCustomer).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intEntityId", "");

      return true;
    }

    public async Task<bool> TMSite(string currentDirectorypath, string _fileName_timestamp)
    {      
      var _tablename = "tblTMSite";
      var _list = await this.Database.SqlQuery<tblTMSite>("SELECT intSiteID, intSiteNumber, tblTMSite.dblTotalCapacity as dblTankCapacity, tblTMSite.intTaxStateID, tblTMSite.ysnTaxable, intCustomerID, tblTMSite.ysnActive, tblEMEntity.intEntityId, strEntityNo, tblTMSite.strDescription, intDriverID, tblICItem.strItemNo, case when RTRIM(LTRIM(REPLACE(ISNULL(strSiteAddress,''),CHAR(10),''))) <> '' then RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL(strSiteAddress,''),CHAR(10),''),'''','.'),'\"','.'),CHAR(92),''),'/','.'),CHAR(9),''))) else '.' end as strSiteAddress, tblTMSite.strCity, tblTMSite.strState, tblTMSite.strZipCode, tblTMSite.dblLatitude, tblTMSite.dblLongitude, intLocationId, strLocationNumber as strLocation, tblTMFillMethod.strFillMethod, case when RTRIM(LTRIM(REPLACE(ISNULL(strInstruction,''),CHAR(10),''))) <> '' then RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL(strInstruction,''),CHAR(10),''),'''','.'),'\"','.'),CHAR(92),''),'/','.'),CHAR(9),''))) else '.' end as strInstruction, tblSMTerm.strTerm as strDeliveryTerm FROM tblTMSite LEFT JOIN tblICItem ON tblTMSite.intProduct = tblICItem.intItemId LEFT JOIN tblEMEntity ON tblTMSite.intUserID = tblEMEntity.intEntityId LEFT JOIN tblTMFillMethod ON tblTMSite.intFillMethodId = tblTMFillMethod.intFillMethodId LEFT JOIN tblSMTerm ON tblSMTerm.intTermID = tblTMSite.intDeliveryTermID LEFT JOIN tblSMCompanyLocation ON tblSMCompanyLocation.intCompanyLocationId = tblTMSite.intLocationId ORDER BY tblTMSite.intSiteID").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblTMSite).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intSiteID", ""); //11705

      return true;
    }

    public async Task<bool> SMTruck(string currentDirectorypath, string _fileName_timestamp)
    {     
      var _tablename = "tblSMTruck";
      var _list = await this.Database.SqlQuery<tblSMTruck>("SELECT *, (SELECT TOP 1 dblCapacity FROM tblSMTruckDetail WHERE intTruckId = tblSMTruck.intTruckId) AS dblCapacity FROM tblSMTruck").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblSMTruck).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intTruckId", "");

      return true;
    }

    public async Task<bool> TMDeliveryHistory(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblTMDeliveryHistory";
      var _list = await this.Database.SqlQuery<tblTMDeliveryHistory>("SELECT intDeliveryHistoryID, intSiteID, dtmInvoiceDate, dblQuantityDelivered from tblTMDeliveryHistory ORDER BY intDeliveryHistoryID ASC").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblTMDeliveryHistory).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intDeliveryHistoryID", "");

      return true;
    }

    public async Task<bool> TMSiteDevice(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblTMSiteDevice";
      var _list = await this.Database.SqlQuery<tblTMSiteDevice>("SELECT [Extent1].[intSiteDeviceID] AS [intSiteDeviceID], [Limit19].[intSiteID1] AS [intSiteID], [Extent1].[intDeviceId] AS [intDeviceId], [Limit31].[strDeviceType] AS [strDeviceType], [Limit31].[strSerialNumber1] AS [strSerialNumber], [Limit31].[dblTankCapacity1] AS [dblTankCapacity], RTRIM(LTRIM(REPLACE(REPLACE(REPLACE(REPLACE(ISNULL([Limit31].[strDescription1],''),CHAR(10),''),'\"','.'),CHAR(92),''),CHAR(9),''))) AS [strDescription] FROM [dbo].[tblTMSiteDevice] AS [Extent1] OUTER APPLY (SELECT TOP (1) [Extent2].[intSiteID] AS [intSiteID1] FROM [dbo].[tblTMSite] AS [Extent2] OUTER APPLY (SELECT TOP (1) [Extent3].[A4GLIdentity] AS [A4GLIdentity] FROM [dbo].[vwslsmst] AS [Extent3] WHERE [Extent3].[A4GLIdentity] = [Extent2].[intDriverID] ) AS [Limit1] OUTER APPLY (SELECT TOP (1) [Extent4].[intRouteId] AS [intRouteId] FROM [dbo].[tblTMRoute] AS [Extent4] WHERE [Extent4].[intRouteId] = [Extent2].[intRouteId] ) AS [Limit2] OUTER APPLY (SELECT TOP (1) [Extent5].[A4GLIdentity] AS [A4GLIdentity] FROM [dbo].[vwlocmst] AS [Extent5] WHERE [Extent5].[A4GLIdentity] = [Extent2].[intLocationId] ) AS [Limit3] OUTER APPLY (SELECT TOP (1) [Extent6].[intClockID] AS [intClockID] FROM [dbo].[tblTMClock] AS [Extent6] WHERE [Extent6].[intClockID] = [Extent2].[intClockID] ) AS [Limit4] OUTER APPLY (SELECT TOP (1) [Extent7].[A4GLIdentity] AS [A4GLIdentity] FROM [dbo].[vwtrmmst] AS [Extent7] WHERE [Extent7].[vwtrm_key_n] = [Extent2].[intDeliveryTermID] ) AS [Limit5] OUTER APPLY (SELECT TOP (1) [Extent8].[intCompanyLocationPricingLevelId] AS [intCompanyLocationPricingLevelId] FROM [dbo].[tblSMCompanyLocationPricingLevel] AS [Extent8] WHERE [Extent8].[intCompanyLocationPricingLevelId] = [Extent2].[intCompanyLocationPricingLevelId] ) AS [Limit6] OUTER APPLY (SELECT TOP (1) [Extent9].[A4GLIdentity] AS [A4GLIdentity] FROM [dbo].[vwlclmst] AS [Extent9] WHERE [Extent9].[A4GLIdentity] = [Extent2].[intTaxStateID] ) AS [Limit7] OUTER APPLY (SELECT TOP (1) [Extent10].[A4GLIdentity] AS [A4GLIdentity] FROM [dbo].[vwitmmst] AS [Extent10] WHERE [Extent10].[A4GLIdentity] = [Extent2].[intProduct] ) AS [Limit8] OUTER APPLY (SELECT TOP (1) [Extent11].[intFillMethodId] AS [intFillMethodId] FROM [dbo].[tblTMFillMethod] AS [Extent11] WHERE [Extent11].[intFillMethodId] = [Extent2].[intFillMethodId] ) AS [Limit9] OUTER APPLY (SELECT TOP (1) [Extent12].[intFillGroupId] AS [intFillGroupId] FROM [dbo].[tblTMFillGroup] AS [Extent12] WHERE [Extent12].[intFillGroupId] = [Extent2].[intFillGroupId] ) AS [Limit10] OUTER APPLY (SELECT TOP (1) [Extent13].[intGlobalJulianCalendarId] AS [intGlobalJulianCalendarId] FROM [dbo].[tblTMGlobalJulianCalendar] AS [Extent13] WHERE [Extent13].[intGlobalJulianCalendarId] = [Extent2].[intGlobalJulianCalendarId] ) AS [Limit11] OUTER APPLY (SELECT TOP (1) [Extent14].[intHoldReasonID] AS [intHoldReasonID] FROM [dbo].[tblTMHoldReason] AS [Extent14] WHERE [Extent14].[intHoldReasonID] = [Extent2].[intHoldReasonID] ) AS [Limit12] OUTER APPLY (SELECT TOP (1) [Extent15].[intTankTownshipId] AS [intTankTownshipId] FROM [dbo].[tblTMTankTownship] AS [Extent15] WHERE [Extent15].[intTankTownshipId] = [Extent2].[intTankTownshipId] ) AS [Limit13] LEFT OUTER JOIN (SELECT TOP (1) [Extent16].[intWorkStatusID] AS [intWorkStatusID] FROM [dbo].[tblTMWorkStatusType] AS [Extent16] WHERE N'Open' = [Extent16].[strWorkStatus] ) AS [Limit14] ON 1 = 1 LEFT OUTER JOIN (SELECT TOP (1) [Extent17].[intEventTypeID] AS [intEventTypeID] FROM [dbo].[tblTMEventType] AS [Extent17] WHERE N'Event-004' = [Extent17].[strDefaultEventType] ) AS [Limit15] ON 1 = 1 OUTER APPLY (SELECT TOP (1) [Extent18].[intDispatchID] AS [intDispatchID] FROM [dbo].[tblTMDispatch] AS [Extent18] WHERE [Extent18].[intSiteID] = [Extent2].[intSiteID] ) AS [Limit16] OUTER APPLY (SELECT TOP (1) [Extent19].[intLostCustomerReasonId] AS [intLostCustomerReasonId] FROM [dbo].[tblTMLostCustomerReason] AS [Extent19] WHERE [Extent19].[intLostCustomerReasonId] = [Extent2].[intLostCustomerReasonId] ) AS [Limit17] LEFT OUTER JOIN (SELECT TOP (1) [Extent20].[intDeviceTypeId] AS [intDeviceTypeId] FROM [dbo].[tblTMDeviceType] AS [Extent20] WHERE N'Tank' = [Extent20].[strDeviceType] ) AS [Limit18] ON 1 = 1 WHERE [Extent2].[intSiteID] = [Extent1].[intSiteID] ) AS [Limit19] OUTER APPLY (SELECT TOP (1) [Extent21].[strSerialNumber] AS [strSerialNumber1], [Extent21].[strDescription] AS [strDescription1], [Extent21].[dblTankCapacity] AS [dblTankCapacity1], [Limit20].[strDeviceType] AS [strDeviceType], [Limit22].[intLeaseId] AS [intLeaseId1] FROM [dbo].[tblTMDevice] AS [Extent21] OUTER APPLY (SELECT TOP (1) [Extent22].[strDeviceType] AS [strDeviceType] FROM [dbo].[tblTMDeviceType] AS [Extent22] WHERE [Extent22].[intDeviceTypeId] = [Extent21].[intDeviceTypeId] ) AS [Limit20] OUTER APPLY (SELECT TOP (1) [Extent23].[intSiteDeviceID] AS [intSiteDeviceID] FROM [dbo].[tblTMSiteDevice] AS [Extent23] WHERE [Extent23].[intDeviceId] = [Extent21].[intDeviceId] ) AS [Limit21] OUTER APPLY (SELECT TOP (1) [Extent24].[intLeaseId] AS [intLeaseId] FROM [dbo].[tblTMLeaseDevice] AS [Extent24] WHERE [Extent24].[intDeviceId] = [Extent21].[intDeviceId] ) AS [Limit22] OUTER APPLY (SELECT TOP (1) [Extent25].[intManufacturerId] AS [intManufacturerId] FROM [dbo].[tblTMManufacturer] AS [Extent25] WHERE [Extent25].[intManufacturerId] = [Extent21].[intManufacturerId] ) AS [Limit23] OUTER APPLY (SELECT TOP (1) [Extent26].[intLeaseId] AS [intLeaseId] FROM [dbo].[tblTMLease] AS [Extent26] WHERE [Extent26].[intLeaseId] = [Limit22].[intLeaseId] ) AS [Limit24] OUTER APPLY (SELECT TOP (1) [Extent27].[A4GLIdentity] AS [A4GLIdentity] FROM [dbo].[vwlocmst] AS [Extent27] WHERE [Extent27].[A4GLIdentity] = [Extent21].[intLocationId] ) AS [Limit25] OUTER APPLY (SELECT TOP (1) [Extent28].[intInventoryStatusTypeId] AS [intInventoryStatusTypeId] FROM [dbo].[tblTMInventoryStatusType] AS [Extent28] WHERE [Extent28].[intInventoryStatusTypeId] = [Extent21].[intInventoryStatusTypeId] ) AS [Limit26] OUTER APPLY (SELECT TOP (1) [Extent29].[intRegulatorTypeId] AS [intRegulatorTypeId] FROM [dbo].[tblTMRegulatorType] AS [Extent29] WHERE [Extent29].[intRegulatorTypeId] = [Extent21].[intRegulatorTypeId] ) AS [Limit27] OUTER APPLY (SELECT TOP (1) [Extent30].[intDeviceId] AS [intDeviceId] FROM [dbo].[tblTMDevice] AS [Extent30] WHERE (1 <> [Extent30].[ysnAppliance]) AND ([Extent30].[intDeviceId] = [Extent21].[intParentDeviceID]) ) AS [Limit28] OUTER APPLY (SELECT TOP (1) [Extent31].[intTankTypeId] AS [intTankTypeId] FROM [dbo].[tblTMTankType] AS [Extent31] WHERE [Extent31].[intTankTypeId] = [Extent21].[intTankTypeId] ) AS [Limit29] OUTER APPLY (SELECT TOP (1) [Extent32].[intMeterTypeId] AS [intMeterTypeId] FROM [dbo].[tblTMMeterType] AS [Extent32] WHERE [Extent32].[intMeterTypeId] = [Extent21].[intMeterTypeId] ) AS [Limit30] WHERE [Extent21].[intDeviceId] = [Extent1].[intDeviceId] ) AS [Limit31] ORDER BY [Extent1].[intSiteDeviceID] ASC").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblTMSiteDevice).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intSiteDeviceID", "");

      return true;
    }

    public async Task<bool> SMTerm(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblSMTerm";
      var _list = await this.Database.SqlQuery<tblSMTerm>("SELECT * FROM tblSMTerm").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblSMTerm).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intTermID", "");

      return true;
    }

    public async Task<bool> SMLocation(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblSMLocation";
      var _list = await this.Database.SqlQuery<tblSMLocation>("SELECT intCompanyLocationId, strLocationName, strLocationNumber, strLocationType, intTaxGroupId, strUseLocationAddress, strAddress, strCity, strStateProvince, strZipPostalCode, strCountry FROM vyuSMGetCompanyLocationSearchList ORDER BY intCompanyLocationId ASC").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblSMLocation).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intCompanyLocationId", "");

      return true;
    }

    public async Task<bool> SMPaymentMethod(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblSMPaymentMethod";
      var _list = await this.Database.SqlQuery<tblSMPaymentMethod>("SELECT intPaymentMethodID as intPaymentMethodId, strPaymentMethod, strPaymentMethodCode, ysnActive FROM tblSMPaymentMethod").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblSMPaymentMethod).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intPaymentMethodId", "");

      return true;
    }    

    public async Task<bool> CompanyPreference(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblMBILCompanyPreference";
      var _list = await this.Database.SqlQuery<tblMBILCompanyPreference>("SELECT * FROM tblMBILCompanyPreference").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblMBILCompanyPreference).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intCompanyPreferenceId", "");

      return true;
    }

    public async Task<bool> MBILOrder(string currentDirectorypath, string _fileName_timestamp, int driverId, string orderId)
    {
      await this.MBILProcessOrders(driverId);

      var _command = "";
      if(orderId != "" && orderId != null)
      {
        orderId = " AND strOrderNumber NOT IN ( " + orderId + " ) ";
        _command = "insert";
      }

      var _tablename = "tblMBILOrder";
      var _list = await this.Database.SqlQuery<vyuMBILOrder>("SELECT * FROM vyuMBILOrder WHERE intOrderId NOT IN (SELECT intOrderId FROM tblMBILInvoice WHERE intOrderId IS NOT NULL) AND intDriverId = " + driverId + orderId).ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILOrder).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intOrderId", _command);

      return true;
    }

    public async Task<bool> MBILOrderItem(string currentDirectorypath, string _fileName_timestamp, int driverId, string orderId)
    {
      var _command = "";
      if (orderId != "" && orderId != null)
      {
        orderId = " AND strOrderNumber NOT IN ( " + orderId + " ) ";
        _command = "insert";
      }

      var _tablename = "tblMBILOrderItem";
      var _list = await this.Database.SqlQuery<vyuMBILOrderItem>("SELECT * FROM vyuMBILOrderItem WHERE intOrderId NOT IN (SELECT intOrderId FROM tblMBILInvoice WHERE intOrderId IS NOT NULL) AND intDriverId = " + driverId + orderId).ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILOrderItem).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intOrderItemId", _command);

      return true;
    }

    public async Task<bool> MBILOrderTaxCode(string currentDirectorypath, string _fileName_timestamp, int driverId, string orderId)
    {
      var _command = "";
      if (orderId != "" && orderId != null)
      {
        orderId = " AND intOrderItemId IN (SELECT intOrderItemId FROM vyuMBILOrderItem WHERE strOrderNumber NOT IN ( " + orderId + " )) ";
        _command = "insert";
      }

      var _tablename = "tblMBILOrderTaxCode";
      var _list = await this.Database.SqlQuery<vyuMBILOrderTaxCode>("SELECT * FROM vyuMBILOrderTaxCode WHERE intOrderItemId IN (SELECT intOrderItemId FROM vyuMBILOrderItem WHERE intOrderId NOT IN (SELECT intOrderId FROM tblMBILInvoice WHERE intOrderId IS NOT NULL)) AND intDriverId = " + driverId + orderId).ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(vyuMBILOrderTaxCode).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intOrderTaxId", _command);

      return true;
    }

    public async Task<bool> CompanySetup(string currentDirectorypath, string _fileName_timestamp)
    {
      var _tablename = "tblSMCompanySetup";
      var _list = await this.Database.SqlQuery<tblSMCompanySetup>("SELECT intCompanySetupID, imgCompanyLogo, strCompanyName, strAddress, strCounty, strCity, strState, strZip, strCountry, ysnGlobalLogo FROM tblSMCompanySetup").ToListAsync();
      string finalFileNameWithPath = string.Format("{0}\\{1}.json", currentDirectorypath, _tablename + _fileName_timestamp);
      var _fields = typeof(tblSMCompanySetup).GetProperties()
                            .Select(field => field.Name)
                            .ToList();
      var result = WriteFile(finalFileNameWithPath, _list, _tablename, _fields, "intCompanySetupID", "");

      return true;
    }








    // NOT USING BELOW

    public string format_SpecialPricing(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"customerSpecialPricing\": " +
                          "\"([intCustomerPricingId] PRIMARY KEY, [strCustomerNumber], [strItemNo], [dblPrice], [strPricing])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"customerSpecialPricing\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_InventoryItem(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"inventoryItem\": " +
                          "\"([intInventoryItemId] PRIMARY KEY, [strLocationNumber], [intItemId], [strItemNo], [strDescription], [dblSalePrice], [strAccountId], [strUnitMeasure], [strType], [intCategoryId])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"inventoryItem\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_ContractExport(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"contractExport\": " +
                          "\"([intContractExportId] PRIMARY KEY, [strLocationNumber], [strEntityNo], [strItemNo], [intContractSeq], [dblQuantity], [dblContractUnitDelivered], [strTermCode], [strContractNumber], [dtmStartDate], [dtmEndDate], [dblContractPriceCT], [ysnMaxPrice], [dblCashPrice], [strPricing], [strType], [dblContractCashSpent], [intItemId], [strDescription])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"contractExport\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_FullTax(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"fullTax\": " +
                          "\"([intFulltaxId] PRIMARY KEY, [intTaxGroupId], [strTaxGroup], [intTaxCodeId], [strTaxCode], [intTaxClassId], [strTaxClass], [strCalculationMethod], [dblRate], [dblQuantity], [dblPrice], [dblTotal], [ysnCheckoffTax], [strTaxableByOtherTaxes], [strType])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"fullTax\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_CategoryTax(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"categoryTax\": " +
                          "\"([intCategoryTaxId] PRIMARY KEY, [intCategoryId], [intTaxClassId], [ysnActive])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"categoryTax\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_EntityLocation(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"entityLocation\": " +
                          "\"([intEntityLocationId] PRIMARY KEY, [intEntityId], [strLocationName], [intTaxGroupId], [intTaxClassId], [intTermsId], [strLocationType], [ysnDefaultLocation], [intFreightTermId], [strTaxGroup])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"entityLocation\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_CustomerTaxExemption(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"customerTaxExemption\": " +
                          "\"([intCustomerTaxingTaxExceptionId] PRIMARY KEY,[intEntityCustomerId],[intItemId],[intCategoryId],[intTaxCodeId],[intTaxClassId],[strState],[strException],[strExceptionReason],[dtmStartDate],[dtmEndDate],[intEntityCustomerLocationId],[dblPartialTax],[intCardId],[intVehicleId],[intCompanyId],[intSiteNumber])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"customerTaxExemption\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_CategoryTaxExemption(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"categoryTaxExemption\": " +
                          "\"([intTaxGroupCodeCategoryExemptionId] PRIMARY KEY,[intTaxGroupCodeId],[intCategoryId],[intConcurrencyId],[intTaxCodeId],[intTaxGroupId])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"categoryTaxExemption\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_arCustomer(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"arCustomer\": " +
                          "\"([intEntityId] PRIMARY KEY, [ysnApplyPrepaidTax], [ysnApplySalesTax], [ysnTaxExempt], [strCustomerNumber], [intBillToId], [intShipToId], [strTaxState], [ysnActive])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"arCustomer\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_tmSite(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"tmSite\": " +
                          "\"([intSiteID] PRIMARY KEY, [intSiteNumber], [ysnTaxable], [intCustomerID], [ysnActive])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"tmSite\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

    public string format_smTruck(object data)
    {
      try
      {
        var _data = "{\"structure\": " +
                      "{\"tables\": " +
                        "{\"tmSite\": " +
                          "\"([intSiteID] PRIMARY KEY, [intSiteNumber], [ysnTaxable], [intCustomerID], [ysnActive])\"}" +
                        "},\"data\":{" +
                            "\"inserts\":{" +
                              "\"tmSite\":" +
                                    data.ToString() +
                                "" +
                            "}" +
                        "}" +
                    "}";
        return _data;
      }
      catch (Exception ex)
      {
        return ex.Message;
      }
    }

  }
}
