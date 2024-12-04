using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILOrderTaxCodeMap : EntityTypeConfiguration<tblMBILOrderTaxCode>
    {
        public tblMBILOrderTaxCodeMap()
        {
            // Primary Key
            this.HasKey(t => t.intOrderTaxId);
           
            // Table & Column Mappings
            this.ToTable("tblMBILOrderTaxCode");
            
            this.HasRequired(t => t.tblMBILOrderItem)
               .WithMany(t => t.tblMBILOrderTaxCodes)
               .HasForeignKey(d => d.intOrderItemId);
        }
    }

    public class vyuMBILOrderTaxCodeMap : EntityTypeConfiguration<vyuMBILOrderTaxCode>
    {
        public vyuMBILOrderTaxCodeMap()
        {
            // Primary Key
            this.HasKey(t => t.intOrderTaxId);

            // Table & Column Mappings
            this.ToTable("vyuMBILOrderTaxCode");
        }
    }
}