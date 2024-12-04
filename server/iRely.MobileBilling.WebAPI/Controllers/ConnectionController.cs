using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using iRely.FRD.Model;
using iRely.FRD.Model.Common;

namespace FinancialReportDesigner_WebAPI.Controllers
{
    public class ConnectionController : ApiController
    {
        #region " Connection "

        #region " LOAD "

        /// <summary>
        /// Main Navigator of Connection (pagingtoolbar)
        /// </summary>
        /// <param name="limit"></param>
        /// <param name="page"></param>
        /// <param name="filter"></param>
        /// <param name="sort"></param>
        /// <returns></returns>
        public Object GetConnection(int limit, int page, string filter = "", string sort = "")
        {
            ConnectionBrl BRL = new ConnectionBrl();
            return BRL.Load(limit, page, filter, sort);
        }
        
        /// <summary>
        /// Gets all Connection record
        /// </summary>
        /// <returns></returns>
        public IEnumerable<tblFRConnectionFields> GetAllConnection()
        {
            ConnectionBrl BRL = new ConnectionBrl();
            return BRL.Load();
        }

        /// <summary>
        /// Gets connection record from Connection ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IEnumerable<tblFRConnectionFields> GetConnectByID(int id)
        {
            ConnectionBrl BRL = new ConnectionBrl();
            return BRL.Load(id);
        }

        /// <summary>
        /// Gets connection infos
        /// </summary>
        /// <param name="info"></param>
        /// <returns></returns>
        public IEnumerable<tblFRConnectionDetailsFields> GetConnectionDetails(string info = "")
        {
            ConnectionBrl BRL = new ConnectionBrl();
            return BRL.Load(info);
        }

        #endregion

        #region " CREATE | UPDATE | DELETE "

        /// <summary>
        /// Create and Update record
        /// </summary>
        /// <param name="tblConnection"></param>
        /// <returns></returns>
        [AcceptVerbs("POST", "PUT")]
        [HttpPost]
        [HttpPut]
        public HttpResponseMessage PostConnection(tblFRConnectionFields tblConnection)
        {
            ConnectionBrl BRL = new ConnectionBrl();
            var result = BRL.Update(tblConnection);
            return ResponseMessage(result.code, result.value);
        }

        /// <summary>
        /// Deletes record
        /// </summary>
        /// <param name="tblConnection"></param>
        /// <returns></returns>
        [AcceptVerbs("POST", "PUT")]
        [HttpPost]
        [HttpPut]
        public HttpResponseMessage DeleteConnection(tblFRConnectionFields tblConnection)
        {
            ConnectionBrl BRL = new ConnectionBrl();
            var result = BRL.Delete(tblConnection);
            return ResponseMessage(result.code, result.value);
        }

        #endregion

        #endregion

        #region " SEARCH FORM "

        [HttpGet]
        [ActionName("SearchConnection")]
        public Object SearchConnection(int limit, int page, string filter = "", string sort = "")
        {
            SearchBrl BRL = new SearchBrl();
            var query = BRL.LoadSearch(limit, page, filter, sort);
            return query;
        }

        #endregion
        #region " RESPONSE MESSAGE "

        public HttpResponseMessage ResponseMessage(HttpStatusCode status, Object value)
        {
            HttpResponseMessage response = Request.CreateResponse(status, value);
            return response;
        }

        #endregion
    }
}
