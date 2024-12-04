using System;

using iRely.Common;
using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
    public static class ConnectionManager
    {
        public static iRely.Common.Repository GetRepository()
        {
            return new Repository(new MBILEntities());

            //return new Repository(new FAEntities("Data Source=axel-notebook\\SQL2016;Initial Catalog=17102016;User Id=sa;Password=1234")); //AXL
        }

        public static MBILEntities GetEntity()
        {
            return new MBILEntities();

            //return new FAEntities("Data Source=axel-notebook\\SQL2016;Initial Catalog=17102016;User Id=sa;Password=1234"); //AXL
        }
    }
}
