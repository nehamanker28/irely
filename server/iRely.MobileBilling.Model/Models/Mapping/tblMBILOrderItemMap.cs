using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILOrderItemMap : EntityTypeConfiguration<tblMBILOrderItem>
    {
        public tblMBILOrderItemMap()
        {
            // Primary Key
            this.HasKey(t => t.intOrderItemId);

            // Table & Column Mappings
            this.ToTable("tblMBILOrderItem");

            // Relationships
            this.HasRequired(t => t.tblMBILOrder)
                .WithMany(t => t.tblMBILOrderItems)
                .HasForeignKey(d => d.intOrderId);
        }
    }

    public class vyuMBILOrderItemMap : EntityTypeConfiguration<vyuMBILOrderItem>
    {
        public vyuMBILOrderItemMap()
        {
            // Primary Key
            this.HasKey(t => t.intOrderItemId);

            // Table & Column Mappings
            this.ToTable("vyuMBILOrderItem");
        }
    }
}