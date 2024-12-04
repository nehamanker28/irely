import { Observable } from "rxjs/Rx";
import { Response } from '@angular/http';

import { GetRequest, GetResponse, PostResponse } from '../../api/api';

export interface IBaseService<T> {
    uri: string;
    readUri: string;
    createUri: string;
    updateUri: string;
    deleteUri: string;

    idProperty: string;
    
    get(request?: GetRequest) : Observable<GetResponse<T>>; 
    create(entity: T): Observable<PostResponse<T>>;
    save(entity: T): Observable<PostResponse<T>>;
    delete(entity: T): Observable<PostResponse<T>>;

    getbyid(id: number) : Observable<GetResponse<T>>; 

    customget<Y>(uri: string, request?: GetRequest) : Observable<GetResponse<Y>>; 
    custompost<Y>(uri: string, entity: Y) : Observable<PostResponse<Y>>; 

    getraw(uri: string, request?: GetRequest) : Observable<any>;
    postraw(uri: string, data: any) : Observable<any>;

    handleErrors(error: Response);
}