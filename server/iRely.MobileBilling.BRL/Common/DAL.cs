using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data;
using System.Data.SqlClient;

using IdeaBlade.Core;
using IdeaBlade.Linq;
using Newtonsoft.Json;

using iRely.Common;
using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer.SQL
{
   public class DAL
    {
       private Repository context;

       public DAL()
        {
            context = BusinessLayer.ConnectionManager.GetRepository();
        }

       public DataTable Fill(string _query)
       {
           var _connString = context.ContextManager.Database.Connection.ConnectionString;
           using (SqlConnection conn = new SqlConnection(_connString))
           {
               DataTable _Table = new DataTable();
               SqlDataAdapter adapter = new SqlDataAdapter();

               adapter.SelectCommand = new SqlCommand(_query, conn);
               conn.Open();

               adapter.Fill(_Table);
               conn.Close();
               adapter.Dispose();

               return _Table;
           }
       }

       public bool ExecNonQuery(string _query)
       {
           var _connString = context.ContextManager.Database.Connection.ConnectionString;
           using (SqlConnection conn = new SqlConnection(_connString))
           {
               using (var cmd = conn.CreateCommand())
               {
                   conn.Open();
                   cmd.CommandText = _query;
                   cmd.ExecuteNonQuery();
                   conn.Close();
               }

               return true;
           }
       }

       public void Insert(string _query)
       {
           var _connString = context.ContextManager.Database.Connection.ConnectionString;
           using (SqlConnection conn = new SqlConnection(_connString))
           {
               using (var cmd = conn.CreateCommand())
               {
                   conn.Open();
                   cmd.CommandText = _query;
                   cmd.ExecuteNonQuery();
                   conn.Close();
               }
           }
       }

    }
}
