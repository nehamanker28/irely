using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILPaymentMap : EntityTypeConfiguration<tblMBILPayment>
    {
        public tblMBILPaymentMap()
        {
            // Primary Key
            this.HasKey(t => t.intPaymentId);

            // Table & Column Mappings
            this.ToTable("tblMBILPayment");
        }
    }

    public class vyuMBILPaymentMap : EntityTypeConfiguration<vyuMBILPayment>
    {
        public vyuMBILPaymentMap()
        {
            // Primary Key
            this.HasKey(t => t.intPaymentId);

            // Table & Column Mappings
            this.ToTable("vyuMBILPayment");

            this.HasRequired(p => p.vyuMBILShift)
                .WithMany(p => p.tblMBILPayments)
                .HasForeignKey(p => p.intShiftId);
            this.HasRequired(p => p.tblMBILShift)
                .WithMany(p => p.tblMBILPayments)
                .HasForeignKey(p => p.intShiftId);
        }
    }
}