export interface ICommonSQL {
    buildtablescript(tablename: string, fields: any);
    insert(tablename: string, record: any);
    insertbulk(tablename: string, record: any, data: any);
    update(tablename: string, record: any);
    
    getDataTable(table: string): Promise<any>;
    getData(table: string): Promise<any>;
    getRecord(table: string): Promise<any>;
    getDataQuery(query: string): Promise<any>;
    addData(tablename: string, record: any): Promise<any>;
    addBulkData(tablename: string, record: any, data: any): Promise<any>;
    updateData(tablename: string, record: any): Promise<any>;
    deleteData(tablename: string, query: string): Promise<any>;
    deleteDataQuery(query: string): Promise<any>;

    createTable(tablename: string): Promise<any>;
    dropTable(tablename: string): Promise<any>;
    executeQuery(query: string): Promise<any>;    
}