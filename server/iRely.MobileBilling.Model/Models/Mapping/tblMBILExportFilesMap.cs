using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace iRely.MobileBilling.Model.Mapping
{
    public class tblMBILExportFilesMap : EntityTypeConfiguration<tblMBILExportFiles>
    {
        public tblMBILExportFilesMap()
        {
            // Primary Key
            this.HasKey(t => t.intExportFilesId);
            
            // Table & Column Mappings
            this.ToTable("tblMBILExportFiles");
        }
    }
}
