using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILShiftMap : EntityTypeConfiguration<tblMBILShift>
    {
        public tblMBILShiftMap()
        {
            // Primary Key
            this.HasKey(t => t.intShiftId);

            // Table & Column Mappings
            this.ToTable("tblMBILShift");
        }
    }

    public class vyuMBILShiftMap : EntityTypeConfiguration<vyuMBILShift>
    {
        public vyuMBILShiftMap()
        {
            // Primary Key
            this.HasKey(t => t.intShiftId);

            // Table & Column Mappings
            this.ToTable("vyuMBILShift");
        }
    }

    public class tblSMStartingNumberMap : EntityTypeConfiguration<tblSMStartingNumber>
    {
        public tblSMStartingNumberMap()
        {
            // Primary Key
            this.HasKey(t => t.intStartingNumberId);

            // Table & Column Mappings
            this.ToTable("tblSMStartingNumber");
        }
    }
}