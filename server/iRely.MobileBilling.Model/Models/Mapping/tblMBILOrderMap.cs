using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILOrderMap : EntityTypeConfiguration<tblMBILOrder>
    {
        public tblMBILOrderMap()
        {
            // Primary Key
            this.HasKey(t => t.intOrderId);

            // Properties
            this.Property(t => t.strOrderNumber)
                .HasMaxLength(30);

            this.Property(t => t.strOrderStatus)
                .HasMaxLength(40);
            
            this.Property(t => t.strComments)
                .HasMaxLength(400);

            // Table & Column Mappings
            this.ToTable("tblMBILOrder");
        }
    }

    public class vyuMBILOrderMap : EntityTypeConfiguration<vyuMBILOrder>
    {
        public vyuMBILOrderMap()
        {
            // Primary Key
            this.HasKey(t => t.intOrderId);

            // Table & Column Mappings
            this.ToTable("vyuMBILOrder");
        }
    }
}