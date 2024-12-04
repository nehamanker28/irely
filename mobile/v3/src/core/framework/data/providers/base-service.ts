import { Inject } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';

import { CommonMethod } from '../../common/common-method';
import { Configuration } from '../../common/configuration';
import { GetRequest, GetResponse, PostResponse, Filter } from '../../api/api';

import { IBaseService } from '../interface/ibase-service';

export class BaseService<T> implements IBaseService<T> {
  public uri: string = '';
  public idProperty: string = 'id';
  public readUri: string;
  public createUri: string;
  public updateUri: string;
  public deleteUri: string;

  constructor(@Inject(Http) public http: Http) {}

  get(request?: GetRequest) : Observable<GetResponse<T>> {
    let me = this;
    
    request = request || new GetRequest();

    return me.http.get(
      `${Configuration.BaseAddress}${me.readUri || (me.uri + '/get')}?${CommonMethod.encodeToUri(request)}`,
      { headers: CommonMethod.getHeaders() }
    )
    .map(response => <GetResponse<T>>response.json())
    .catch(me.handleErrors);
  }

  create(entity: T) : Observable<PostResponse<T>> {
    let me = this;
    return  me.http.post(
      `${Configuration.BaseAddress}${me.createUri || (me.uri + '/post')}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    )
    .map(result => <PostResponse<T>>result.json())
    .catch(me.handleErrors);
  }

  save(entity: T) : Observable<PostResponse<T>> {
    let me = this;
    return me.http.put(
      `${Configuration.BaseAddress}${me.updateUri || (me.uri + '/put')}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    )
    .map(result => <PostResponse<T>>result.json())
    .catch(me.handleErrors);
  }

  delete(entity: T) : Observable<PostResponse<T>> {
    let me = this;

    return me.http.delete(
      `${Configuration.BaseAddress}${me.deleteUri || (me.uri + '/delete')}`,
       { headers: CommonMethod.getHeaders(), body: JSON.stringify([entity]), }
    )
    .map(result => <PostResponse<T>>result.json())
    .catch(me.handleErrors);
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
    )
    .map(response => <GetResponse<Y>>response.json())
    .catch(me.handleErrors);
  }

  getbasic(uri: string) : Observable<any> {
    let me = this;

    return me.http.get(
      `${Configuration.BaseAddress}${uri}`,
      { headers: CommonMethod.getHeaders() }
    )
    .catch(me.handleErrors);
  }

  custompost<Y>(uri: string, entity: Y): Observable<PostResponse<Y>> {
    let me = this;
    return me.http.post(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    )
    .map(response => <PostResponse<Y>>response.json())
    .catch(me.handleErrors);
  }

  getraw(uri: string, request?: GetRequest) : Observable<any> {
    let me = this;

    request = request || new GetRequest();

    return me.http.get(
      `${Configuration.BaseAddress}${uri}?${CommonMethod.encodeToUri(request)}`,
      { headers: CommonMethod.getHeaders() }
    )
    .catch(me.handleErrors);
  }

  postraw(uri: string, data: any) : Observable<any> {
    let me = this;

    console.log(data);

    return me.http.post(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify(data),
      { headers: CommonMethod.getHeaders() }
    )
    .catch(me.handleErrors);
  }

  postrawAuth(uri: string, data: any) : Observable<any> {
    let me = this;

    return me.http.post(
      `${Configuration.BaseAddress}${uri}`,
      data,
      { headers: CommonMethod.getBearer() }
    )
    .catch(me.handleErrors);
  }

  putraw(uri: string, data: any) : Observable<any> {
    let me = this;

    return me.http.put(
      `${Configuration.BaseAddress}${uri}`,
      JSON.stringify(data),
      { headers: CommonMethod.getHeaders() }
    )
    .catch(me.handleErrors);
  }

  async createAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.http.post(
      `${Configuration.BaseAddress}${me.uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    )
    .map(result => <PostResponse<T>>result.json())
    .catch(me.handleErrors).toPromise();
  }

  async saveAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.http.put(
      `${Configuration.BaseAddress}${me.uri}`,
      JSON.stringify([entity]),
      { headers: CommonMethod.getHeaders() }
    )
    .map(result => <PostResponse<T>>result.json())
    .catch(me.handleErrors).toPromise();
  }

  async deleteAsync(entity: T) : Promise<PostResponse<T>> {
    let me = this;
    return await me.http.delete(
      `${Configuration.BaseAddress}${me.uri}`,
      { headers: CommonMethod.getHeaders() }
    )
    .map(result => <PostResponse<T>>result.json())
    .catch(me.handleErrors).toPromise();
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }
}