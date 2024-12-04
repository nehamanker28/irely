using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILCompanyPreferenceMap : EntityTypeConfiguration<tblMBILCompanyPreference>
    {
        public tblMBILCompanyPreferenceMap()
        {
            // Primary Key
            this.HasKey(t => t.intCompanyPreferenceId);

            // Table & Column Mappings
            this.ToTable("tblMBILCompanyPreference");
        }
    }
}