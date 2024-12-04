export class ExportFiles {
    
    intExportFilesId: number;
    strFileName: string;
    intUserId: Date;
    strUserName: string;
    dtmCreatedDate: Date;
    
    public mapping: Object = {
        intExportFilesId: 'pk',
        strFileName: 'string',
        strUserName: 'string',        
        intUserId: 'number',
        dtmCreatedDate: 'date'                             
    }
                            
    public tablename:string = 'exportfiles';
}