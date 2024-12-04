using System;
using System.Text;
using System.Configuration;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Net;
using System.Web;
using System.IO;
using iRely.MobileBilling.Model.Mapping;

namespace iRely.MobileBilling.Model
{
    public partial class MBILEntities : DbContext
    {
        public static string GetConnection()
        {
            return iRely.Common.Security.GetCompanyName();
            //return "Data Source=axel-notebook\\SQL2016;Initial Catalog=1830DevSource;User Id=sa;Password=1234";
    }

        public MBILEntities()
            : base(GetConnection())
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public MBILEntities(string connectionString) : base(connectionString)
        {
            this.Configuration.ProxyCreationEnabled = false;
        }

        public DbSet<tblMBILOrder> tblMBILOrder { get; set; }
        public DbSet<tblMBILOrderItem> tblMBILOrderItem { get; set; }
        public DbSet<tblMBILOrderTaxCode> tblMBILOrderTaxCode { get; set; }

        public DbSet<tblMBILInvoice> tblMBILInvoice { get; set; }
        public DbSet<tblMBILInvoiceItem> tblMBILInvoiceItem { get; set; }
        public DbSet<tblMBILInvoiceTaxCode> tblMBILInvoiceTaxCode { get; set; }

        public DbSet<tblMBILExportFiles> tblMBILExportFiles { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Configurations.Add(new tblMBILOrderMap());
            modelBuilder.Configurations.Add(new tblMBILOrderItemMap());
            modelBuilder.Configurations.Add(new tblMBILOrderTaxCodeMap());

            modelBuilder.Configurations.Add(new vyuMBILOrderMap());
            modelBuilder.Configurations.Add(new vyuMBILOrderItemMap());
            modelBuilder.Configurations.Add(new vyuMBILOrderTaxCodeMap());

            modelBuilder.Configurations.Add(new tblMBILInvoiceMap());
            modelBuilder.Configurations.Add(new tblMBILInvoiceItemMap());
            modelBuilder.Configurations.Add(new tblMBILInvoiceTaxCodeMap());
            
            modelBuilder.Configurations.Add(new vyuMBILInvoiceMap());
            modelBuilder.Configurations.Add(new vyuMBILInvoiceItemMap());
            modelBuilder.Configurations.Add(new vyuMBILInvoiceTaxCodeMap());

            modelBuilder.Configurations.Add(new tblMBILShiftMap());
            modelBuilder.Configurations.Add(new vyuMBILShiftMap());

            modelBuilder.Configurations.Add(new tblMBILPaymentMap());
            modelBuilder.Configurations.Add(new vyuMBILPaymentMap());

            modelBuilder.Configurations.Add(new tblMBILOutOfGasMap());
            modelBuilder.Configurations.Add(new vyuMBILOutOfGasMap());

            modelBuilder.Configurations.Add(new tblMBILCompanyPreferenceMap());
            modelBuilder.Configurations.Add(new tblSMStartingNumberMap());

            modelBuilder.Configurations.Add(new tblMBILExportFilesMap());

        }

    }
}
