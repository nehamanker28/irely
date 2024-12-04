using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using System.Data;
using System.Data.Entity;
using System.Data.SqlClient;
using System.Data.Entity.Infrastructure;
using System.Data.Entity.Core.Objects;

namespace iRely.MobileBilling.Model
{
    public partial class MBILEntities
    {
        public virtual async Task<string> MBILProcessOrders(int intDriverId)
        {
            var connection = this.Database.Connection;
            var command = connection.CreateCommand();
            command.CommandTimeout = 0;

            try
            {
                // Open a connection if it is closed
                if (connection.State == ConnectionState.Closed)
                    connection.Open();

                command.CommandTimeout = 0;
                command.CommandType = CommandType.StoredProcedure;
                command.CommandText = "uspMBILBuildOrder";

                var param_intDriverId = command.CreateParameter();
                param_intDriverId.DbType = DbType.Int32;
                param_intDriverId.Direction = ParameterDirection.Input;
                param_intDriverId.ParameterName = "intDriverId";
                param_intDriverId.Value = intDriverId;
                command.Parameters.Add(param_intDriverId);
                
                await command.ExecuteNonQueryAsync();

                return "success";
            }
            catch (Exception ex)
            {
                throw ex;
            }
            finally
            {
                // Ensure the command and connection objects are closed and disposed.
                command.Dispose();
                connection.Close();
            }
        }
    }
}