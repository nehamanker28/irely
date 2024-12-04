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

namespace iRely.FRD.BusinessLayer.Connection
{
    public class ConnectionBrl
    {
        private FRDEntities db = new FRDEntities();
        private Common BRL = new Common();
        private ResponseMessage Request = new ResponseMessage();

        #region " LOAD "

        public Object Load(int limit, int page, string filter = "", string sort = "")
        {
            var _sort = Functions.DeserializeFromJson<List<Functions.Filters>>(sort);
            string _field = "", _orderby = ""; int next = limit * (page - 1); string[] _ID; int[] intID; var totalpage = 0;
            IEnumerable<tblFRConnection> query;

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

                query = from c in db.tblFRConnections
                        where intID.Contains(c.intConnectionID)
                        select c;

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
                else {
                    query = query.OrderByDescending(o => o.GetType().GetProperty(_field).GetValue(o, null).ToString());
                }
            }
            else {
                query = query.OrderByDescending(o => o.intConnectionID);
            }

            var _result = query.Skip(next).Take(limit);
            var data = new Dictionary<string, Object>();
            data["total"] = totalpage.ToString();
            data["data"] = _result.ToList();

            return data;
        }
        public IEnumerable<tblFRConnectionFields> Load()
        {
            var query = from c in db.tblFRConnections
                        select new tblFRConnectionFields
                        {
                            intConnectionID = c.intConnectionID,
                            intUserID = c.intUserID,
                            intTimeout = c.intTimeout,
                            strConnectionName = c.strConnectionName,
                            strDataType = c.strDataType,
                            strDSN = c.strDSN,
                            strAuthentication = c.strAuthentication,
                            strUserID = c.strUserID,
                            strPassword = c.strPassword,
                            strDatabase = c.strDatabase,
                            strProduct = c.strProduct,
                            strPort = c.strPort,
                            strWebServiceURI = c.strWebServiceURI,
                            ysnWebService = c.ysnWebService,
                            strCompanyName = c.strCompanyName
                        };
            return query.AsEnumerable();
        }
        public IEnumerable<tblFRConnectionFields> Load(int id)
        {
            var query = from c in db.tblFRConnections
                        where c.intConnectionID == id
                        select new tblFRConnectionFields
                        {
                            intConnectionID = c.intConnectionID,
                            intUserID = c.intUserID,
                            intTimeout = c.intTimeout,
                            strConnectionName = c.strConnectionName,
                            strDataType = c.strDataType,
                            strDSN = c.strDSN,
                            strAuthentication = c.strAuthentication,
                            strUserID = c.strUserID,
                            strPassword = c.strPassword,
                            strDatabase = c.strDatabase,
                            strProduct = c.strProduct,
                            strPort = c.strPort,
                            strWebServiceURI = c.strWebServiceURI,
                            ysnWebService = c.ysnWebService,
                            strCompanyName = c.strCompanyName
                        };
            return query.AsEnumerable();
        }
        public IEnumerable<tblFRConnectionDetailsFields> Load(string info = "")
        {
            if (info != "")
            {
                string[] _details = info.Split(':');
                int _connectionID = Convert.ToInt32(_details[0].ToString());

                var query = (from c in db.tblFRConnections
                             where c.intConnectionID == _connectionID
                             select c).ToList();

                string _connString = "Data Source=" + query[0].strDSN + ";Initial Catalog=" + query[0].strDatabase + ";Persist Security Info=True;User ID=" + query[0].strUserID + ";Password=" + query[0].strPassword + "";
                var _dal = new DAL();

                if (_details.Length == 1)
                {
                    IEnumerable<tblFRConnectionDetailsFields> _tables = _dal.GetTableList(_connString);
                    return _tables;
                }
                else
                {
                    IEnumerable<tblFRConnectionDetailsFields> _tables = _dal.GetColumnList(_connString, _details[1], _details[2]);
                    return _tables;
                }
            }
            else
            {
                IEnumerable<tblFRConnectionDetailsFields> _tables = new List<tblFRConnectionDetailsFields>();
                return _tables;
            }
        }

        #endregion
        #region " CREATE | DELETE "

        public ResponseFields Update(tblFRConnectionFields tblConnection)
        {
            var _record = tblConnection;
            if (_record.intConnectionID != 0)
            {
                var tblFRConnection = db.tblFRConnections.First(c => c.intConnectionID == _record.intConnectionID);

                if (tblFRConnection == null) return Request.CreateResponse(HttpStatusCode.NotFound, "Connection ID Deleted");
                if (BRL.isNameExist(tblConnection.intConnectionID, tblConnection.strConnectionName)) return Request.CreateResponse(HttpStatusCode.Conflict, "Connection Name Already Exists");

                tblFRConnection.intUserID = _record.intUserID;
                tblFRConnection.intTimeout = _record.intTimeout;
                tblFRConnection.strConnectionName = _record.strConnectionName;
                tblFRConnection.strDataType = _record.strDataType;
                tblFRConnection.strDSN = _record.strDSN;
                tblFRConnection.strAuthentication = _record.strAuthentication;
                tblFRConnection.strUserID = _record.strUserID;
                tblFRConnection.strPassword = _record.strPassword;
                tblFRConnection.strDatabase = _record.strDatabase;
                tblFRConnection.strProduct = _record.strProduct;
                tblFRConnection.strPort = _record.strPort;
                tblFRConnection.strWebServiceURI = _record.strWebServiceURI;
                tblFRConnection.ysnWebService = _record.ysnWebService;
                tblFRConnection.strCompanyName = _record.strCompanyName;

                db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, _record);
            }
            else
            {
                if (BRL.isNameExist(tblConnection.intConnectionID, tblConnection.strConnectionName)) return Request.CreateResponse(HttpStatusCode.Conflict, "Connection Name Already Exists");

                var _recordCreate = new tblFRConnection();
                _recordCreate.intUserID = _record.intUserID;
                _recordCreate.intTimeout = _record.intTimeout;
                _recordCreate.strConnectionName = _record.strConnectionName;
                _recordCreate.strDataType = _record.strDataType ?? "SQL Server";
                _recordCreate.strDSN = _record.strDSN;
                _recordCreate.strAuthentication = _record.strAuthentication ?? "SQL Authentication";
                _recordCreate.strUserID = _record.strUserID;
                _recordCreate.strPassword = _record.strPassword;
                _recordCreate.strDatabase = _record.strDatabase;
                _recordCreate.strProduct = _record.strProduct;
                _recordCreate.strPort = _record.strPort;
                _recordCreate.strWebServiceURI = _record.strWebServiceURI;
                _recordCreate.ysnWebService = _record.ysnWebService;
                _recordCreate.strCompanyName = _record.strCompanyName;

                db.tblFRConnections.Add(_recordCreate);
                db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, _recordCreate);
            }
        }
        public ResponseFields Delete(tblFRConnectionFields tblConnection)
        {
            var id = tblConnection.intConnectionID;
            if (BRL.isExist(id))
            {
                db.tblFRConnections.Delete(p => p.intConnectionID == id);
                db.SaveChanges();

                return Request.CreateResponse(HttpStatusCode.OK, id);
            }
            else
            {
                return Request.CreateResponse(HttpStatusCode.NotFound, id);
            }
        }

        #endregion
    }
}
