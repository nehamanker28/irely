using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILInvoiceMap : EntityTypeConfiguration<tblMBILInvoice>
    {
        public tblMBILInvoiceMap()
        {
            // Primary Key
            this.HasKey(t => t.intInvoiceId);
            
            // Table & Column Mappings
            this.ToTable("tblMBILInvoice");
            this.Property(p => p.dblTotal).HasPrecision(18, 6);
        }
    }

    public class vyuMBILInvoiceMap : EntityTypeConfiguration<vyuMBILInvoice>
    {
        public vyuMBILInvoiceMap()
        {
            // Primary Key
            this.HasKey(t => t.intInvoiceId);

            // Table & Column Mappings
            this.ToTable("vyuMBILInvoice");

            this.HasRequired(p => p.vyuMBILShift)
                .WithMany(p => p.tblMBILInvoices)
                .HasForeignKey(p => p.intShiftId);
            this.HasRequired(p=> p.tblMBILShift)
                .WithMany(p => p.tblMBILInvoices)
                .HasForeignKey(p => p.intShiftId);
        }
    }
}
