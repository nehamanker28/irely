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
    public class MappingsController : ApiController
    {
        private FRDEntities db = new FRDEntities();

        #region " Mappings "

        /// <summary>
        /// Main Navigator of Mappings (pagingtoolbar)
        /// </summary>
        /// <param name="limit"></param>
        /// <param name="page"></param>
        /// <param name="filter"></param>
        /// <param name="sort"></param>
        /// <returns></returns>
        public Object GetMappings(int limit, int page, string filter = "", string sort = "")
        {
            MappingBrl BRL = new MappingBrl();
            return BRL.Load(limit, page, filter, sort);
        }
        
        /// <summary>
        /// Gets all record
        /// </summary>
        /// <returns></returns>
        public IEnumerable<tblFRMappingFields> GetAllMappings()
        {
            MappingBrl BRL = new MappingBrl();
            return BRL.Load();
        }

        /// <summary>
        /// Gets record from Map ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IEnumerable<tblFRMappingFields> GetMapByID(int id)
        {
            MappingBrl BRL = new MappingBrl();
            return BRL.Load(id);
        }
       
        /// <summary>
        /// Creates and Updates records
        /// </summary>
        /// <param name="tblMapping"></param>
        /// <returns></returns>
        [AcceptVerbs("POST", "PUT")]
        [HttpPost]
        [HttpPut]
        public HttpResponseMessage PostMappings(tblFRMappingFields tblMapping)
        {
            MappingBrl BRL = new MappingBrl();
            var result = BRL.Update(tblMapping);
            return ResponseMessage(result.code, result.value);
        }

        /// <summary>
        /// Deletes record
        /// </summary>
        /// <param name="tblMapping"></param>
        /// <returns></returns>
        [AcceptVerbs("POST", "PUT")]
        [HttpPost]
        [HttpPut]
        public HttpResponseMessage DeleteMappings(tblFRMappingFields tblMapping)
        {
            MappingBrl BRL = new MappingBrl();
            var result = BRL.Delete(tblMapping);
            return ResponseMessage(result.code, result.value);
        }

        #endregion
        #region " Mappings Details "

        /// <summary>
        /// Gets all detail records
        /// </summary>
        /// <returns></returns>
        public IEnumerable<tblFRMappingDetailsFields> GetMappingDetails()
        {
            MappingBrl BRL = new MappingBrl();
            return BRL.LoadDetail();
        }

        /// <summary>
        /// Gets record from Map ID
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        public IEnumerable<tblFRMappingDetailsFields> GetMappingDetails(int id)
        {
            MappingBrl BRL = new MappingBrl();
            return BRL.LoadDetail(id);
        }

        /// <summary>
        /// Creates and Updates records
        /// </summary>
        /// <param name="tblMappingDetails"></param>
        /// <returns></returns>
        [AcceptVerbs("POST", "PUT")]
        [HttpPost]
        [HttpPut]
        public HttpResponseMessage PostMappingDetails(IEnumerable<tblFRMappingDetailsFields> tblMappingDetails)
        {
            MappingBrl BRL = new MappingBrl();
            var result = BRL.Update(tblMappingDetails);
            return ResponseMessage(result.code, result.value);
        }

        #endregion

        #region " SEARCH FORM "

        [HttpGet]
        [ActionName("SearchMappings")]
        public Object SearchMappings(int limit, int page, string filter = "", string sort = "")
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
