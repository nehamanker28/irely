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

namespace iRely.FRD.BusinessLayer.Mapping
{
    public class SearchBrl
    {
        private FRDEntities db = new FRDEntities();
        private Common BRL = new Common();

        public Object LoadSearch(int limit, int page, string filter = "", string sort = "")
        {
            var _sort = Functions.DeserializeFromJson<List<Functions.Filters>>(sort);
            string _field = "", _orderby = "", _dynamicQuery = ""; string[] filterOptions; var totalpage = 0; int next = limit * (page - 1); IEnumerable<tblFRConnectionMappingFields> query;

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
                        query = from c in db.tblFRMappings
                                join d in db.tblFRConnections on c.intConnectionID equals d.intConnectionID
                                where c.strMapName.Contains(_filterValue) || d.strConnectionName.Contains(_filterValue)
                                select new tblFRConnectionMappingFields
                                {
                                    intMapID = c.intMapID,
                                    strConnectionName = d.strConnectionName,
                                    intConnectionID = c.intConnectionID,
                                    strMapName = c.strMapName
                                };
                    }
                    else {
                        _dynamicQuery = filterOptions[1].ToString() + ".Contains(@0)";
                        query = (from c in db.tblFRMappings
                                 join d in db.tblFRConnections on c.intConnectionID equals d.intConnectionID
                                 select new tblFRConnectionMappingFields
                                 {
                                     intMapID = c.intMapID,
                                     strConnectionName = d.strConnectionName,
                                     intConnectionID = c.intConnectionID,
                                     strMapName = c.strMapName
                                 }).Where(_dynamicQuery, _filterValue);
                    }
                }
                else if (filterOptions[0].ToString() == "exact" && filterOptions[2].ToString() != "")
                {
                    var _filterValue = filterOptions[2].ToString();
                    if (filterOptions[1].ToString().StartsWith("(")) //all
                    {
                        query = from c in db.tblFRMappings
                                join d in db.tblFRConnections on c.intConnectionID equals d.intConnectionID
                                where c.strMapName == _filterValue || d.strConnectionName == _filterValue
                                select new tblFRConnectionMappingFields
                                {
                                    intMapID = c.intMapID,
                                    strConnectionName = d.strConnectionName,
                                    intConnectionID = c.intConnectionID,
                                    strMapName = c.strMapName
                                };
                    }
                    else {
                        var _query = filterOptions[1].ToString() + " = @0";
                        query = (from c in db.tblFRMappings
                                join d in db.tblFRConnections on c.intConnectionID equals d.intConnectionID
                                where c.strMapName == _filterValue || d.strConnectionName == _filterValue
                                select new tblFRConnectionMappingFields
                                {
                                    intMapID = c.intMapID,
                                    strConnectionName = d.strConnectionName,
                                    intConnectionID = c.intConnectionID,
                                    strMapName = c.strMapName
                                }).Where(_query, _filterValue);
                    }
                }
                else {
                    query = (from c in db.tblFRMappings
                             join d in db.tblFRConnections on c.intConnectionID equals d.intConnectionID
                             select new tblFRConnectionMappingFields
                             {
                                 intMapID = c.intMapID,
                                 strConnectionName = d.strConnectionName,
                                 intConnectionID = c.intConnectionID,
                                 strMapName = c.strMapName
                             });
                }

                totalpage = query.ToList().Count();
            }
            else {
                query = (from c in db.tblFRMappings
                         join d in db.tblFRConnections on c.intConnectionID equals d.intConnectionID
                         select new tblFRConnectionMappingFields
                         {
                             intMapID = c.intMapID,
                             strConnectionName = d.strConnectionName,
                             intConnectionID = c.intConnectionID,
                             strMapName = c.strMapName
                         });
                totalpage = query.ToList().Count();
            }

            //SORTING - PROCESS
            if (sort != "")
            {
                if (_orderby == "ASC")
                {
                    query = query.OrderBy(o => o.GetType().GetProperty(_field).GetValue(o, null).ToString());
                }
                else {
                    query = query.OrderByDescending(o => o.GetType().GetProperty(_field).GetValue(o, null).ToString());
                }
            }
            else {
                query = query.OrderByDescending(o => o.intMapID);
            }

            //SEARCH COLUMN
            var searchColumns = new List<SearchColumn>();
            searchColumns.Add(new SearchColumn { dataIndex = "intMapID", sortable = true, hideable = false, hidden = true, text = "Map ID", type = "int" });
            searchColumns.Add(new SearchColumn { dataIndex = "strMapName", sortable = true, hideable = false, text = "Map Name", type = "string" });
            searchColumns.Add(new SearchColumn { dataIndex = "strConnectionName", sortable = true, hideable = false, text = "Connection Name", type = "string" });

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
