using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using iRely.Common;

namespace iRely.MobileBilling.Model
{
  public partial class tblMBILExportFiles : BaseEntity
  {
        public int intExportFilesId { get; set; }
        public string strFileName { get; set; }
        public Nullable<System.DateTime> dtmCreatedDate { get; set; }
        public int? intUserId { get; set; }    
  }
}
