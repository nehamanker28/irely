using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.Common;
using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
  public class Common
  {
    public enum StartingNumber
    {
      Shift = 138
    }

    public static string GetStartingNumber(StartingNumber transaction)
    {
      var _db = new Repository(new MobileBilling.Model.MBILEntities());
      tblSMStartingNumber startingNumber = _db.GetQuery<tblSMStartingNumber>().Where(p => p.intStartingNumberId == (int)transaction).FirstOrDefault();

      string strTransactionId = string.Concat(startingNumber.strPrefix, startingNumber.intNumber);
      startingNumber.intNumber += 1;
      _db.Save();

      return strTransactionId;
    }
  }
}
