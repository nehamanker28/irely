using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Linq.Dynamic;
using iRely.FRD.Model;
using iRely.FRD.Model.Common;
using iRely.FRD.BusinessLayer.Custom;

namespace iRely.FRD.BusinessLayer.Connection
{
    public class SearchBrl
    {
        private FRDEntities db = new FRDEntities();
        private Common BRL = new Common();

        public Object LoadSearch(int limit, int page, string filter = "", string sort = "")
        {
            var _sort = Functions.DeserializeFromJson<List<Functions.Filters>>(sort);
            string _field = "", _orderby = "", _dynamicQuery = ""; string[] filterOptions; var totalpage = 0; int next = limit * (page - 1); IEnumerable<tblFRConnection> query;

            //SORTING - INITIALIZE
            if (sort != "")
            {
                foreach (var key in _sort)
                {
                    _field = key.property;
                    _orderby = key.direction;
                }
            }

            //FILTERING
            if (filter != "")
            {
                filterOptions = filter.Split(':');
                if (filterOptions[0].ToString() == "any" && filterOptions[2].ToString() != "")
                {
                    var _filterValue = filterOptions[2].ToString();
                    if (filterOptions[1].ToString().StartsWith("(")) //all
                    {
                        query = from c in db.tblFRConnections
                                where c.strConnectionName.Contains(_filterValue) || c.strCompanyName.Contains(_filterValue) || c.strDatabase.Contains(_filterValue)
                                select c;
                    }
                    else {
                        _dynamicQuery = filterOptions[1].ToString() + ".Contains(@0)";
                        query = db.tblFRConnections.Where(_dynamicQuery, _filterValue);
                    }
                }
                else if (filterOptions[0].ToString() == "exact" && filterOptions[2].ToString() != "")
                {
                    var _filterValue = filterOptions[2].ToString();
                    if (filterOptions[1].ToString().StartsWith("(")) //all
                    {
                        query = from c in db.tblFRConnections
                                where c.strConnectionName == _filterValue || c.strCompanyName == _filterValue || c.strDatabase == _filterValue
                                select c;
                    }
                    else {
                        var _query = filterOptions[1].ToString() + " = @0";
                        query = db.tblFRConnections.Where(_query, _filterValue);
                    }
                }
                else {
                    query = db.tblFRConnections;
                }

                totalpage = query.ToList().Count();
            }
            else {
                query = db.tblFRConnections;
                totalpage = query.ToList().Count();
            }

            //SORTING - PROCESS
            if (sort != "")
            {
                if (_orderby == "ASC")
                {
                    query = query.OrderBy(o => o.GetType().GetProperty(_field).GetValue(o, null).ToString());
                }
                else
                {
                    query = query.OrderByDescending(o => o.GetType().GetProperty(_field).GetValue(o, null).ToString());
                }
            }
            else
            {
                query = query.OrderByDescending(o => o.intConnectionID);
            }

            //SEARCH COLUMN
            var searchColumns = new List<SearchColumn>();
            searchColumns.Add(new SearchColumn { dataIndex = "intConnectionID", sortable = true, hideable = false, hidden = true, text = "Connection ID", type = "int" });
            searchColumns.Add(new SearchColumn { dataIndex = "strConnectionName", sortable = true, hideable = false, text = "Connection Name", type = "string" });
            searchColumns.Add(new SearchColumn { dataIndex = "strCompanyName", sortable = true, hideable = false, text = "Company Name", type = "string" });
            searchColumns.Add(new SearchColumn { dataIndex = "strDatabase", sortable = true, hideable = false, text = "Database Name", type = "string" });

            //CONFIGURE DATA RESPONSE
            var _result = query.Skip(next).Take(limit);
            var data = new Dictionary<string, Object>();
            data["total"] = totalpage.ToString();
            data["data"] = _result.ToList();
            data["metaData"] = new SearchMetadata(searchColumns);

            return data;
        }
    }
}
