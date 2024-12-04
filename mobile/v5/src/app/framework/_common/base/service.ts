import { Inject } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from "rxjs";
import { map, timeout } from 'rxjs/operators';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CommonMethod } from '../configuration/common-method';
import { Configuration } from '../configuration/configuration';
import { GetRequest, GetResponse, PostResponse, Filter } from './api';
import { HTTP } from '@ionic-native/http/ngx';

export interface IService<T> {
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

export class Service<T> implements IService<T> {
  public uri: string = '';
  public idProperty: string = 'id';
  public readUri: string;
  public createUri: string;
  public updateUri: string;
  public deleteUri: string;

  constructor(@Inject(HttpClient) public http: HttpClient, public https: HTTP) {}

  get(request?: GetRequest) : Observable<GetResponse<T>> {
    let me = this;
    
    request = request || new GetRequest();

    return me.http.get(
      `${Configuration.BaseAddress}${me.readUri || (me.uri + '/get')}?${CommonMethod.encodeToUri(request)}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<T>>result, this));
  }

  create(entity: T) : Observable<PostResponse<T>> {
    let me = this;
    return  me.http.post(
      `${Configuration.BaseAddress}${me.createUri || (me.uri + '/post')}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this));
  }

  save(entity: T) : Observable<PostResponse<T>> {
    let me = this;
    return me.http.put(
      `${Configuration.BaseAddress}${me.updateUri || (me.uri + '/put')}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this));
  }

  delete(entity: T) : Observable<PostResponse<T>> {
    let me = this;

    return me.http.delete(
      `${Configuration.BaseAddress}${me.deleteUri || (me.uri + '/delete')}`,
       { headers: CommonMethod.getHeaders(), observe: "body", }
    ).pipe(map(result => <PostResponse<T>>result, this));
  }

  getbyid(id: number) : Observable<GetResponse<T>> {
    let me = this;

    return me.get(new GetRequest({
      filter: [new Filter(
        {
          c: me.idProperty,
          v: id
        }
      )]
    }));
  }

  customget<Y>(uri: string, request?: GetRequest): Observable<GetResponse<Y>> {
    let me = this;

    request = request || new GetRequest();

    return me.http.get(
      `${Configuration.BaseAddress}${uri}?${CommonMethod.encodeToUri(request)}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<Y>>result, this));
  }

  getbasic(uri: string) : Observable<any> {
    let me = this;

    return me.http.get(
      `${Configuration.BaseAddress}${uri}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<T>>result, this));
  }

  custompost<Y>(uri: string, entity: Y): Observable<PostResponse<Y>> {
    let me = this;
    return me.http.post(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<Y>>result, this));
  }

  getrawNoRequest(uri: string, request?: GetRequest) : Observable<any> {
    let me = this;

    request = request || new GetRequest();

    return me.http.get(
      `${Configuration.BaseAddress}${uri}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<any>>result, this));
  }

  async getrawNoRequestAsync(uri: string, request?: GetRequest) : Promise<GetResponse<T>> {
    let me = this;

    request = request || new GetRequest();

    return await me.http.get(
      `${Configuration.BaseAddress}${uri}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<any>>result, this)).toPromise();
  }

  getrawNoRequestPromise(uri: string, request?: GetRequest) : Promise<any> {
    return new Promise((resolve, reject) => {
      let me = this;
      const url = `${Configuration.BaseAddress}${uri}`;
      const newURL = url.replace(/ /g, '')
      me.https.setServerTrustMode('nocheck').then(res=>{
        console.log(res);

        me.https.setRequestTimeout(3600);
        me.https.sendRequest(newURL, { 
          method: 'get',
          headers: { 'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Configuration.AuthToken,
                    'ICompany': Configuration.Company
                  }
            }).then(data => {
          console.log(data);
          resolve(data.data);
        })
        .catch(error => {
          console.log(error);
          reject(error);
        });
      });
     

    });    
    
  }

  getraw(uri: string, request?: GetRequest) : Observable<any> {
    let me = this;

    request = request || new GetRequest();

    return me.http.get(
      `${Configuration.BaseAddress}${uri}?${CommonMethod.encodeToUri(request)}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<any>>result, this));
  }

  getzip(uri: string, request?: GetRequest) {
    let me = this;

    request = request || new GetRequest();
    var _url = `${Configuration.BaseAddress}${uri}?${CommonMethod.encodeToUri(request)}`;
    console.log(_url);

    _url = _url.replace('https','http');

    return me.http.get(
      _url,
      { headers: CommonMethod.getZipHeaders(), responseType: 'blob' }
    );
    // .pipe(
    //   map((res: any) => {
    //     return new Blob([res.blob()], { type: 'application/zip, application/octet-stream' });
    //   })
      // );
      
  }

  getzipPromise(uri: string, request?: GetRequest) : Promise<any> {
    return new Promise((resolve, reject) => {
      let me = this;
      var url = `${Configuration.BaseAddress}${uri}`;

      me.https.setServerTrustMode('nocheck').then(res=>{
        console.log(res);
        me.https.setRequestTimeout(3600);
        me.https.sendRequest(url, { 
          method: 'get',
          responseType: 'blob',
          headers: { 
                    'Content-Type': 'application/zip, application/octet-stream',
                    'Authorization': `Bearer ` + Configuration.AuthToken,
                    'ICompany': Configuration.Company,
                    'timeout': `${9999000}`
                  }
            }).then(data => {
          console.log(data);
          // console.log(data.data); // data received by server
          // console.log(data.headers);
          resolve(data.data);
        })
        .catch(error => {

          console.log(error);
          // console.log(error.error); // error message as string
          // console.log(error.headers);

          reject(error);

        });
      });
     

    });    
  }

  postraw(uri: string, data: any) : Observable<any> {
    let me = this;

    console.log(data);

    return me.http.post(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify(data),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  postrawAuth(uri: string, data: any) : Observable<any> {
    let me = this;

    return me.http.post(
      `${Configuration.BaseAddress}${uri}`,
      data,
      { headers: CommonMethod.getBearer() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  putraw(uri: string, data: any) : Observable<any> {
    let me = this;

    return me.http.put(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify(data),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  async createAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.http.post(
      `${Configuration.BaseAddress}${me.uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this)).toPromise();
  }

  async saveAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.http.put(
      `${Configuration.BaseAddress}${me.uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this)).toPromise();
  }

  async deleteAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.http.delete(
      `${Configuration.BaseAddress}${me.uri}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this)).toPromise();
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}