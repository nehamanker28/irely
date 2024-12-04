import { Inject } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';

import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CommonMethod } from '../../configuration/common-method';
import { Configuration } from '../../configuration/configuration';
import { GetRequest, GetResponse, PostResponse, Filter } from '../../base/api';

import { IBaseService } from '../interface/ibase-service';

export class BaseService<T> implements IBaseService<T> {
  public uri: string = '';
  public idProperty: string = 'id';
  public readUri: string;
  public createUri: string;
  public updateUri: string;
  public deleteUri: string;

  constructor(@Inject(HttpClient) public httpclient: HttpClient) {}

  get(request?: GetRequest) : Observable<GetResponse<T>> {
    let me = this;
    
    request = request || new GetRequest();

    return me.httpclient.get(
      `${Configuration.BaseAddress}${me.readUri || (me.uri + '/get')}?${CommonMethod.encodeToUri(request)}`, { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<T>>result, this));
  }

  create(entity: T) : Observable<PostResponse<T>> {
    let me = this;
    return  me.httpclient.post(
      `${Configuration.BaseAddress}${me.createUri || (me.uri + '/post')}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this));
  }

  save(entity: T) : Observable<PostResponse<T>> {
    let me = this;
    return me.httpclient.put(
      `${Configuration.BaseAddress}${me.updateUri || (me.uri + '/put')}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this));
  }

  delete(entity: T) : Observable<PostResponse<T>> {
    let me = this;

    return me.httpclient.delete(
      `${Configuration.BaseAddress}${me.deleteUri || (me.uri + '/delete')}`,
       { headers: CommonMethod.getHeaders(), observe: "body" } //JSON.stringify([entity])
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

    console.log('LOAD COMPANY REQUEST');

    return me.httpclient.get(
      `${Configuration.BaseAddress}${uri}?${CommonMethod.encodeToUri(request)}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <GetResponse<Y>>result, this));
  }

  getbasic(uri: string) : Observable<any> {
    let me = this;

    return me.httpclient.get(
      `${Configuration.BaseAddress}${uri}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  custompost<Y>(uri: string, entity: Y): Observable<PostResponse<Y>> {
    let me = this;
    return me.httpclient.post(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<Y>>result, this));
  }

  getraw(uri: string, request?: GetRequest) : Observable<any> {
    let me = this;

    request = request || new GetRequest();

    return me.httpclient.get(
      `${Configuration.BaseAddress}${uri}?${CommonMethod.encodeToUri(request)}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  postraw(uri: string, data: any) : Observable<any> {
    let me = this;
    return me.httpclient.post(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify(data),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  postrawAuth(uri: string, data: any) : Observable<any> {
    let me = this;

    return me.httpclient.post(
      `${Configuration.BaseAddress}${uri}`,
      data,
      { headers: CommonMethod.getBearer() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  putraw(uri: string, data: any) : Observable<any> {
    let me = this;

    return me.httpclient.put(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify(data),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <Observable<any>>result, this));
  }

  async createAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.httpclient.post(
      `${Configuration.BaseAddress}${me.uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this)).toPromise();
  }

  async saveAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.httpclient.put(
      `${Configuration.BaseAddress}${me.uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this)).toPromise();
  }

  async deleteAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.httpclient.delete(
      `${Configuration.BaseAddress}${me.uri}`,
      { headers: CommonMethod.getHeaders() }
    ).pipe(map(result => <PostResponse<T>>result, this)).toPromise();
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}