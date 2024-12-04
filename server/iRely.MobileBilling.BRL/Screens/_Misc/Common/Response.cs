using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace iRely.FinancialDesigner.BRL.Common
{
    public class Response
    {
        public string Description { get; set; }
        public bool Success { get; set; }
        public string Category { get; set; }
        public string ID { get; set; }
        public int Count { get; set; }
    }
}