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
    public virtual async Task<string> MBILPostPayment(string param, bool toRecap, bool toPost, int userId)
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
        command.CommandText = "uspMBILProcessPayments";

        var param_Param = command.CreateParameter();
        param_Param.DbType = DbType.String;
        param_Param.Direction = ParameterDirection.Input;
        param_Param.ParameterName = "Param";
        param_Param.Value = param;
        command.Parameters.Add(param_Param);

        var param_ysnPost = command.CreateParameter();
        param_ysnPost.DbType = DbType.Boolean;
        param_ysnPost.Direction = ParameterDirection.Input;
        param_ysnPost.ParameterName = "ysnPost";
        param_ysnPost.Value = toPost;
        command.Parameters.Add(param_ysnPost);

        var param_ysnRecap = command.CreateParameter();
        param_ysnRecap.DbType = DbType.Boolean;
        param_ysnRecap.Direction = ParameterDirection.Input;
        param_ysnRecap.ParameterName = "ysnRecap";
        param_ysnRecap.Value = toRecap;
        command.Parameters.Add(param_ysnRecap);

        var param_UserId = command.CreateParameter();
        param_UserId.DbType = DbType.Int32;
        param_UserId.Direction = ParameterDirection.Input;
        param_UserId.ParameterName = "UserId";
        param_UserId.Value = userId;
        command.Parameters.Add(param_UserId);

        var param_MSG = command.CreateParameter();
        param_MSG.DbType = DbType.String;
        param_MSG.Direction = ParameterDirection.Output;
        param_MSG.ParameterName = "ErrorMessage";
        param_MSG.Size = 4000;
        command.Parameters.Add(param_MSG);

        await command.ExecuteNonQueryAsync();

        var _result = "Payment successfully posted.";
        if(param_MSG.Value != null && param_MSG.Value.ToString() != "")
        {
          _result = param_MSG.Value.ToString();
        }

        return _result;
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
