import { Observable } from "rxjs";

export interface IBase<T> {    
    get(entity: T) : Observable<any>;
    getByQuery(query: string) : Observable<any>;
    add(entity: T) : Observable<any>;
    addBulk(entity: T, data: any) : Observable<any>;
    update(entity: T) : Observable<any>;
    deleteByQuery(query: string) : Observable<any>;            
    createTable(entity: T) : Observable<any>;
    deleteTable(entity: T) : Observable<any>;
}