using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILInvoiceItemMap : EntityTypeConfiguration<tblMBILInvoiceItem>
    {
        public tblMBILInvoiceItemMap()
        {
            // Primary Key
            this.HasKey(t => t.intInvoiceItemId);
            
            // Table & Column Mappings
            this.ToTable("tblMBILInvoiceItem");
            this.Property(p => p.dblPrice).HasPrecision(18, 6);
            this.Property(p => p.dblPercentageFull).HasPrecision(18, 6);
            this.Property(p => p.dblQuantity).HasPrecision(18, 6);
            this.Property(p => p.dblItemTotal).HasPrecision(18, 6);
            this.Property(p => p.dblTaxTotal).HasPrecision(18, 6);


      // Relationships
      this.HasRequired(t => t.tblMBILInvoice)
                .WithMany(t => t.tblMBILInvoiceItems)
                .HasForeignKey(d => d.intInvoiceId);
        }
    }

    public class vyuMBILInvoiceItemMap : EntityTypeConfiguration<vyuMBILInvoiceItem>
    {
        public vyuMBILInvoiceItemMap()
        {
            // Primary Key
            this.HasKey(t => t.intInvoiceItemId);

            // Table & Column Mappings
            this.ToTable("vyuMBILInvoiceItem");
        }
    }
}
