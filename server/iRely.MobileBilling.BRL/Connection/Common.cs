using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Linq.Dynamic;
using System.Text;
using System.Net.Http;
using System.Net;
using EntityFramework.Extensions;
using System.Threading.Tasks;
using iRely.FRD.Model;
using iRely.FRD.Model.Common;

namespace iRely.FRD.BusinessLayer.Connection
{
    public class Common
    {
        private FRDEntities db = new FRDEntities();

        public bool isExist(int id)
        {
            var query = db.tblFRConnections.Where(p=>p.intConnectionID == id);
            if (query.Count() > 0) return true;

            return false;               
        }

        public bool isNameExist(int id, string connectionname)
        {
            var query = db.tblFRConnections.Where(p => p.intConnectionID != id && p.strConnectionName == connectionname);
            if (query.Count() > 0) return true;

            return false;  
        }
    }
}
