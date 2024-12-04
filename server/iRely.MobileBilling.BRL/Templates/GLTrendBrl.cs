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
    public class GLTrendBrl
    {
        private Common Common;

        public int GLTrend(string _TemplateName, string _TemplateId)
        {
            Common = new Common();

            int RowID = GLTrend_Row(_TemplateName, _TemplateId);
            int ColumnID = GLTrend_Column(_TemplateName, _TemplateId);
            int ReportID = GLTrend_ReportBuilder(RowID, ColumnID, _TemplateName, _TemplateId);

            return ReportID;
        }

        public int GLTrend_Row(string _templatename, string _TemplateId)
        {
            var db = iRely.FinancialDesigner.BusinessLayer.ConnectionManager.GetEntity();
            var _description = "GL Trends Template";

            if (_TemplateId == "10") _description = "GL Trends Template";

            //ROW HEADER
            tblFRRow _recordCreate = new tblFRRow();
            _recordCreate.strRowName = _templatename;
            _recordCreate.strDescription = _description;
            db.tblFRRows.Add(_recordCreate);
            db.SaveChanges();

            var _newrow = _recordCreate.intRowId;

            ((IObjectContextAdapter)db).ObjectContext.CommandTimeout = 0;
            db.FRDIncomeStatementDetail(_newrow, "9");

            return _newrow;
        }
        public int GLTrend_Column(string _templatename, string _TemplateId)
        {
            var db = iRely.FinancialDesigner.BusinessLayer.ConnectionManager.GetEntity();
            var brl = new BusinessLayer.Common.Common();
            var currentFY = brl.LoadCurrentFiscalYear().FirstOrDefault();
            var _periods = brl.LoadFiscalPeriod(currentFY.intFiscalYearId);
            var _fy = brl.LoadFiscalYear(currentFY.intFiscalYearId);
            var _description = "GL Trends Template";

            if (_TemplateId == "10") _description = "GL Trends Template";

            //COLUMN HEADER
            tblFRColumn _recordCreate = new tblFRColumn();
            _recordCreate.strColumnName = _templatename;
            _recordCreate.strDescription = _description;
            _recordCreate.dtmRunDate = new DateTime(Convert.ToInt32(_fy.strFiscalYear),1,1);
            db.tblFRColumns.Add(_recordCreate);
            db.SaveChanges();

            var _newcolumn = _recordCreate.intColumnId;
            int newRecord_id_2 = 0, newRecord_id_3 = 0, newRecord_id_4 = 0, newRecord_id_5 = 0, newRecord_id_6 = 0, newRecord_id_7 = 0, newRecord_id_8 = 0, newRecord_id_9 = 0, newRecord_id_10 = 0, newRecord_id_11 = 0, newRecord_id_12 = 0, newRecord_id_13 = 0, newRecord_id_14 = 0, newRecord_id_15 = 0;

            //COLUMN DETAILS            
            var newRecord = new Common().insertColumnDesign(_newcolumn, 1, "", "Column Name", "Row Name", "", "", "Left", false, 400, 1, "", "", null, null, "");

            newRecord = new Common().insertColumnDesign(_newcolumn, 2, "Trends", "Column Name", "Line Graph", "", "", "Right", false, 160, 2, "", "", null, null, "");
            newRecord_id_2 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 3, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 3, "0", "0", _periods.ToList()[0].dtmStartDate, _periods.ToList()[0].dtmEndDate, "#,##0");
            newRecord_id_3 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 4, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 4, "1", "1", _periods.ToList()[1].dtmStartDate, _periods.ToList()[1].dtmEndDate, "#,##0");
            newRecord_id_4 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 5, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 5, "2", "2", _periods.ToList()[2].dtmStartDate, _periods.ToList()[2].dtmEndDate, "#,##0");
            newRecord_id_5 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 6, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 6, "3", "3", _periods.ToList()[3].dtmStartDate, _periods.ToList()[3].dtmEndDate, "#,##0");
            newRecord_id_6 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 7, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 7, "4", "4", _periods.ToList()[4].dtmStartDate, _periods.ToList()[4].dtmEndDate, "#,##0");
            newRecord_id_7 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 8, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 8, "5", "5", _periods.ToList()[5].dtmStartDate, _periods.ToList()[5].dtmEndDate, "#,##0");
            newRecord_id_8 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 9, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 9, "6", "6", _periods.ToList()[6].dtmStartDate, _periods.ToList()[6].dtmEndDate, "#,##0");
            newRecord_id_9 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 10, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 10, "7", "7", _periods.ToList()[7].dtmStartDate, _periods.ToList()[7].dtmEndDate, "#,##0");
            newRecord_id_10 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 11, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 11, "8", "8", _periods.ToList()[8].dtmStartDate, _periods.ToList()[8].dtmEndDate, "#,##0");
            newRecord_id_11 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 12, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 12, "9", "9", _periods.ToList()[9].dtmStartDate, _periods.ToList()[9].dtmEndDate, "#,##0");
            newRecord_id_12 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 13, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 13, "10", "10", _periods.ToList()[10].dtmStartDate, _periods.ToList()[10].dtmEndDate, "#,##0");
            newRecord_id_13 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 14, "", "Long Month", "GL Trend", "", "", "Right", false, 140, 14, "11", "11", _periods.ToList()[11].dtmStartDate, _periods.ToList()[11].dtmEndDate, "#,##0");
            newRecord_id_14 = newRecord.intColumnDetailId;

            newRecord = new Common().insertColumnDesign(_newcolumn, 15, "Total", "Column Name", "Column Calculation", "C3 + C4 + C5 + C6 + C7 + C8 + C9 + C10 + C11 + C12 + C13 + C14", "", "Right", false, 140, 15, "", "", null, null, "#,##0");
            newRecord_id_15 = newRecord.intColumnDetailId;

            var newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_3, 15, 3, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_4, 15, 4, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_5, 15, 5, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_6, 15, 6, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_7, 15, 7, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_8, 15, 8, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_9, 15, 9, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_10, 15, 10, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_11, 15, 11, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_12, 15, 12, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_13, 15, 13, "+");
            newCalc = new Common().InsertColumnCalculations(_newcolumn, newRecord_id_15, newRecord_id_14, 15, 14, "+");

            return _newcolumn;
        }
        public int GLTrend_ReportBuilder(int _newrow, int _newcolumn, string _templatename, string _TemplateId)
        {
            var db = iRely.FinancialDesigner.BusinessLayer.ConnectionManager.GetEntity();
            var _Sort = new ReportBuilder.ReportBuilder_Function().getMaxSort();
            var _description = "GL Trends Template";

            if (_TemplateId == "10") _description = "GL Trends Template";

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
