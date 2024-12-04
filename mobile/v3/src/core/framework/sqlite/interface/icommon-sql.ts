export interface ICommonSQL {
    buildtablescript(tablename: string, fields: any);
    insert(tablename: string, record: any);
    insertbulk(tablename: string, record: any, data: any);
    update(tablename: string, record: any);
    
    getDataTable(table: string);
    getData(table: string);
    getRecord(table: string);
    getDataQuery(query: string);
    addData(tablename: string, record: any);
    addBulkData(tablename: string, record: any, data: any);
    updateData(tablename: string, record: any);
    deleteData(tablename: string, query: string);
    deleteDataQuery(query: string);

    createTable(tablename: string);
    dropTable(tablename: string);
}