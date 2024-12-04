using System;
using System.Collections.Generic;
using System.Text;
using System.Data;
using System.Data.SqlClient;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Configuration;
using System.Web.Http;
using iRely.FinancialDesigner.Model;

namespace iRely.FinancialDesigner.BusinessLayer.Templates
{
    public class TrialBalanceDetailBrl
    {
        private Common Common;

        public int TrialBalanceDetail(string _TemplateName, string _TemplateId)
        {
            Common = new Common();

            int RowID = TrialBalanceDetail_Row(_TemplateName, _TemplateId);
            int ColumnID = TrialBalanceDetail_Column(_TemplateName, _TemplateId);
            int ReportID = TrialBalanceDetail_ReportBuilder(RowID, ColumnID, _TemplateName, _TemplateId);

            return ReportID;
        }

        public int TrialBalanceDetail_Row(string _templatename, string _TemplateId)
        {
            var db = iRely.FinancialDesigner.BusinessLayer.ConnectionManager.GetEntity();
            var _description = "Trial Balance Detail Template";

            if (_TemplateId == "9") _description = "Trial Balance By Primary Template";

            //ROW HEADER
            tblFRRow _recordCreate = new tblFRRow();
            _recordCreate.strRowName = _templatename;
            _recordCreate.strDescription = _description;
            _recordCreate.strReportType = "Trial Balance";
            db.tblFRRows.Add(_recordCreate);
            db.SaveChanges();

            var _newrow = _recordCreate.intRowId;

            ((IObjectContextAdapter)db).ObjectContext.CommandTimeout = 0;
            db.FRDTrialBalanceDetail(_newrow, _TemplateId);

            return _newrow;
        }
        public int TrialBalanceDetail_Column(string _templatename, string _TemplateId)
        {
            var db = iRely.FinancialDesigner.BusinessLayer.ConnectionManager.GetEntity();
            var brl = new BusinessLayer.Common.Common();
            var currentFY = brl.LoadCurrentFiscalYear();
            var _description = "Trial Balance Detail Template";

            if (_TemplateId == "9") _description = "Trial Balance By Primary Template";

            //COLUMN HEADER
            tblFRColumn _recordCreate = new tblFRColumn();
            _recordCreate.strColumnName = _templatename;
            _recordCreate.strDescription = _description;
            _recordCreate.dtmRunDate = DateTime.Now;
            db.tblFRColumns.Add(_recordCreate);
            db.SaveChanges();

            var _newcolumn = _recordCreate.intColumnId;
            var newRecord_id_2 = 0;
            var newRecord_id_3 = 0;
            var newRecord_id_4 = 0;

            //COLUMN DETAILS            
            var newRecord = new Common().insertColumnDesign(_newcolumn, 1, "", "Column Name", "Row Name", "", "", "Left", false, 400, 1, "", "", null, null, "");
            newRecord = new Common().insertColumnDesign(_newcolumn, 2, "Beginning Balance", "Column Name", "Beginning Balance", "", "As Of Previous Fiscal Year", "Right", false, 140, 2, "BOT", "-1", Convert.ToDateTime("1/1/1900"), new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddDays(-1), "#,##0.00;(#,##0.00)");
            newRecord_id_2 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 3, "Total Debit", "Column Name", "Debit", "", "Fiscal Year", "Right", false, 140, 3, "0", "0", new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1), new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1), "#,##0.00;(#,##0.00)");
            newRecord_id_3 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 4, "Total Credit", "Column Name", "Credit", "", "Fiscal Year", "Right", false, 140, 4, "0", "0", new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1), new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1), "#,##0.00;(#,##0.00)");
            newRecord_id_4 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 5, "Total Debit Units", "Column Name", "Debit Units", "", "Fiscal Year", "Right", false, 140, 5, "0", "0", new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1), new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1), "#,##0.00;(#,##0.00)");
            newRecord = new Common().insertColumnDesign(_newcolumn, 6, "Total Credit Units", "Column Name", "Credit Units", "", "Fiscal Year", "Right", false, 140, 6, "0", "0", new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1), new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1), "#,##0.00;(#,##0.00)");
            newRecord = new Common().insertColumnDesign(_newcolumn, 7, "Ending Balance", "Column Name", "Ending Balance", "", "As Of Fiscal Year", "Right", false, 140, 7, "BOT", "0", Convert.ToDateTime("1/1/1900"), new DateTime(DateTime.Now.Year, DateTime.Now.Month, 1).AddMonths(1).AddDays(-1), "#,##0.00;(#,##0.00)");

            return _newcolumn;
        }
        public int TrialBalanceDetail_ReportBuilder(int _newrow, int _newcolumn, string _templatename, string _TemplateId)
        {
            var db = iRely.FinancialDesigner.BusinessLayer.ConnectionManager.GetEntity();
            var _Sort = new ReportBuilder.ReportBuilder_Function().getMaxSort();
            var _description = "Trial Balance Detail Template";

            if (_TemplateId == "9") _description = "Trial Balance By Primary Template";

            tblFRReport newRecord = new tblFRReport();

            newRecord.intSort = _Sort + 1;
            newRecord.ysnShowRedLine = false;
            newRecord.dblGutter = 0;
            newRecord.dblMarginBottom = 50;
            newRecord.dblMarginLeft = 100;
            newRecord.dblMarginRight = 100;
            newRecord.dblMarginTop = 50;
            newRecord.ysnShowReportSettings = true;
            newRecord.intPageFooterId = null;
            newRecord.intPageHeaderId = null;
            newRecord.intReportFooterId = null;
            newRecord.intReportHeaderId = null;
            newRecord.ysnDefaultHeader = true;
            newRecord.ysnPageHeader = false;
            newRecord.ysnPageFooter = false;
            newRecord.ysnReportHeader = false;
            newRecord.ysnReportFooter = false;
            newRecord.strReportName = _templatename;
            newRecord.strReportType = "Single";
            newRecord.strDescription = _description;
            newRecord.intRowId = _newrow;
            newRecord.intColumnId = _newcolumn;
            newRecord.strOrientation = "Portrait";
            newRecord.intMapId = 0;
            newRecord.strOtherEmails = "";
            newRecord.ysnIncludeAuditAdjustment = false;
            newRecord.intSegmentCode = null;
            newRecord.intBudgetCode = null;
            newRecord.strSegment = "";
            newRecord.ysnSupressZero = true;
            newRecord.ysnLowPriority = false;
            newRecord.dtmAsOfDate = DateTime.Now.Date;
            newRecord.dtmDateCreated = DateTime.Now;

            db.tblFRReports.Add(newRecord);
            db.SaveChanges();

            return newRecord.intReportId;
        }
    }
}
