using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILOutOfGasMap : EntityTypeConfiguration<tblMBILOutOfGas>
    {
        public tblMBILOutOfGasMap()
        {
            // Primary Key
            this.HasKey(t => t.intOutOfGasId);

            // Table & Column Mappings
            this.ToTable("tblMBILOutOfGas");
            this.Property(p => p.dblMinutesHeld).HasPrecision(18, 6);
            this.Property(p => p.dblPressureReading).HasPrecision(18, 6);
        }
    }

    public class vyuMBILOutOfGasMap : EntityTypeConfiguration<vyuMBILOutOfGas>
    {
        public vyuMBILOutOfGasMap()
        {
            // Primary Key
            this.HasKey(t => t.intOutOfGasId);

            // Table & Column Mappings
            this.ToTable("vyuMBILOutOfGas");
            this.Property(p => p.dblMinutesHeld).HasPrecision(18, 6);
            this.Property(p => p.dblPressureReading).HasPrecision(18, 6);
        }
    }
}