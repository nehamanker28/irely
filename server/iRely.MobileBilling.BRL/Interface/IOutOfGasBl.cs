using iRely.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using iRely.MobileBilling.Model;

namespace iRely.MobileBilling.BusinessLayer
{
    public interface IOutOfGasBl : IBusinessLayer<tblMBILOutOfGas>
    {
        Task<BusinessResult<tblMBILOutOfGas>> AddRecord(IEnumerable<tblMBILOutOfGas> records, bool continueOnConflict = false);
    }
}
