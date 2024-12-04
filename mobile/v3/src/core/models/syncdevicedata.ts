export class SyncDeviceData {
    intTableStatus: number;
    strTableName: string;
    strDisplayName: string;
    dtmTableLastUpdated: string;
    ysnTableWithErrors: boolean;
    intTotal: number;
    ysnVisible: boolean;
    ysnIncludeSyncAll: boolean;

    public mapping: Object = {
                                intTableStatus: 'pk',
                                strTableName: 'string',
                                strDisplayName: 'string',
                                dtmTableLastUpdated: 'string',
                                ysnTableWithErrors: 'boolean',
                                intTotal: 'number',
                                ysnVisible: 'boolean',
                                ysnIncludeSyncAll: 'boolean'
                            }

    public tablename:string = 'syncdevicedata';                            
}