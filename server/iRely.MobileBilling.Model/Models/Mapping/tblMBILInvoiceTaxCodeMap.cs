using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILInvoiceTaxCodeMap : EntityTypeConfiguration<tblMBILInvoiceTaxCode>
    {
        public tblMBILInvoiceTaxCodeMap()
        {
            // Primary Key
            this.HasKey(t => t.intInvoiceTaxId);
           
            // Table & Column Mappings
            this.ToTable("tblMBILInvoiceTaxCode");
            this.Property(p => p.dblRate).HasPrecision(18, 6);
            this.Property(p => p.dblTax).HasPrecision(18, 6);

      this.HasRequired(t => t.tblMBILInvoiceItem)
               .WithMany(t => t.tblMBILInvoiceTaxCodes)
               .HasForeignKey(d => d.intInvoiceItemId);

        }
    }
    
    public class vyuMBILInvoiceTaxCodeMap : EntityTypeConfiguration<vyuMBILInvoiceTaxCode>
    {
        public vyuMBILInvoiceTaxCodeMap()
        {
            // Primary Key
            this.HasKey(t => t.intInvoiceTaxId);

            // Table & Column Mappings
            this.ToTable("vyuMBILInvoiceTaxCode");
        }
    }
}
