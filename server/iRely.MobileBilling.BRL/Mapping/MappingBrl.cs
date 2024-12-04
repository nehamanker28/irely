using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Text;
using EntityFramework.Extensions;
using System.Net.Http;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Threading.Tasks;
using iRely.FRD.Model;
using iRely.FRD.Model.Common;
using iRely.FRD.BusinessLayer.Custom;

namespace iRely.FRD.BusinessLayer.Mapping
{
    public class MappingBrl
    {
        private FRDEntities db = new FRDEntities();
        private Common BRL = new Common();
        private ResponseMessage Request = new ResponseMessage();

        #region " HEADER "

        #region " LOAD "

        public Object Load(int limit, int page, string filter = "", string sort = "")
        {
            var _sort = Functions.DeserializeFromJson<List<Functions.Filters>>(sort);
            string _field = "", _orderby = ""; int next = limit * (page - 1); string[] _ID; int[] intID; var totalpage = 0;
            IEnumerable<tblFRMapping> query;

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
            if (filter != "" && filter != null)
            {
                _ID = filter.Split(':');
                intID = Array.ConvertAll<string, int>(_ID, int.Parse);

                query = from c in db.tblFRMappings
                        where intID.Contains(c.intMapID)
                        select c;

                totalpage = query.ToList().Count();
            }
            else {
                query = db.tblFRMappings;
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

            var _result = query.Skip(next).Take(limit);
            var data = new Dictionary<string, Object>();
            data["total"] = totalpage.ToString();
            data["data"] = _result.ToList();

            return data;
        }
        public IEnumerable<tblFRConnectionMappingFields> LoadX()
        {
            var query = from c in db.tblFRMappings
                        join d in db.tblFRConnections on c.intConnectionID equals d.intConnectionID
                        select new tblFRConnectionMappingFields
                        {
                            intMapID = c.intMapID,
                            strConnectionName = d.strConnectionName,
                            intConnectionID = c.intConnectionID,
                            strMapName = c.strMapName
                        };
            return query.AsEnumerable();
        }
        public IEnumerable<tblFRMappingFields> Load()
        {
            var query = from c in db.tblFRMappings
                        select new tblFRMappingFields
                        {
                            intMapID = c.intMapID,
                            intConnectionID = c.intConnectionID,
                            strMapName = c.strMapName
                        };
            return query.AsEnumerable();
        }
        public IEnumerable<tblFRMappingFields> Load(int id)
        {
            var query = from c in db.tblFRMappings
                        where c.intMapID == id
                        select new tblFRMappingFields
                        {
                            intMapID = c.intMapID,
                            intConnectionID = c.intConnectionID,
                            strMapName = c.strMapName
                        };
            return query.AsEnumerable();
        }

        
        #endregion
        #region " CREATE | UPDATE | DELETE "
        
        public ResponseFields Update(tblFRMappingFields tblMapping)
        {
            if (tblMapping.intMapID != 0)
            {
                var tblFRMap = db.tblFRMappings.First(c => c.intMapID == tblMapping.intMapID);
                if (tblFRMap == null) return Request.CreateResponse(HttpStatusCode.NotFound, "Mappings ID Deleted");

                if (BRL.isNameExist(tblMapping.intMapID, tblMapping.strMapName)) return Request.CreateResponse(HttpStatusCode.Conflict, "Map Name Already Exists");

                tblFRMap.intConnectionID = tblMapping.intConnectionID;
                tblFRMap.strMapName = tblMapping.strMapName;

                db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, tblMapping);
            }
            else
            {
                if (BRL.isNameExist(tblMapping.intMapID, tblMapping.strMapName)) return Request.CreateResponse(HttpStatusCode.Conflict, "Map Name Already Exists");

                var _recordCreate = new tblFRMapping();
                _recordCreate.intConnectionID = tblMapping.intConnectionID ?? 0;
                _recordCreate.strMapName = tblMapping.strMapName;

                db.tblFRMappings.Add(_recordCreate);
                db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, _recordCreate);
            }
        }
        public ResponseFields Delete(tblFRMappingFields tblMapping)
        {
            var id = tblMapping.intMapID;
            if (BRL.isExist(id))
            {
                db.tblFRMappings.Delete(p => p.intMapID == id);
                db.tblFRMappingDetails.Delete(p => p.intMapID == id);
                db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, id);
            }
        }

        #endregion

        #endregion
        #region " DETAILS "

        public IEnumerable<tblFRMappingDetailsFields> LoadDetail()
        {
            var query = from c in db.tblFRMappingDetails
                        select new tblFRMappingDetailsFields
                        {
                            intMapDetailID = c.intMapDetailID,
                            intMapID = c.intMapID,
                            strTableName = c.strTableName,
                            strTableSourceName = c.strTableSourceName,
                            strColumnType = c.strColumnType,
                            strColumnName = c.strColumnName,
                            strColumnSourceName = c.strColumnSourceName
                        };
            return query.AsEnumerable();
        }
        public IEnumerable<tblFRMappingDetailsFields> LoadDetail(int id)
        {
            var query = from c in db.tblFRMappingDetails
                        where c.intMapID == id
                        select new tblFRMappingDetailsFields
                        {
                            intMapDetailID = c.intMapDetailID,
                            intMapID = c.intMapID,
                            strTableName = c.strTableName,
                            strTableSourceName = c.strTableSourceName,
                            strColumnType = c.strColumnType,
                            strColumnName = c.strColumnName,
                            strColumnSourceName = c.strColumnSourceName
                        };
            return query.AsEnumerable();
        }        
        public ResponseFields Update(IEnumerable<tblFRMappingDetailsFields> tblMappingDetails)
        {
            foreach (tblFRMappingDetailsFields _record in tblMappingDetails)
            {
                if (_record.intMapDetailID != 0)
                {
                    var tblFRReport = db.tblFRMappingDetails.First(c => c.intMapID == _record.intMapID && c.strTableName == _record.strTableName && c.strColumnName == _record.strColumnName);
                    if (tblFRReport == null) return Request.CreateResponse(HttpStatusCode.NotFound);

                    tblFRReport.strTableSourceName = _record.strTableSourceName;
                    tblFRReport.strColumnSourceName = _record.strColumnSourceName;

                    db.SaveChanges();
                }
                else
                {
                    var _recordCreate = new tblFRMappingDetail();

                    _recordCreate.intMapID = _record.intMapID;
                    _recordCreate.strTableName = _record.strTableName;
                    _recordCreate.strTableSourceName = _record.strTableSourceName;
                    _recordCreate.strColumnType = _record.strColumnType;
                    _recordCreate.strColumnName = _record.strColumnName;
                    _recordCreate.strColumnSourceName = _record.strColumnSourceName;

                    db.tblFRMappingDetails.Add(_recordCreate);
                    db.SaveChanges();
                }
            }

            return Request.CreateResponse(HttpStatusCode.OK, tblMappingDetails);
        }

        #endregion

    }
}