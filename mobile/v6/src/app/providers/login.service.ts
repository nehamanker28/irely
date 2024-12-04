import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, from, of } from "rxjs";
import { Storage } from '@ionic/storage';
import { map, tap } from 'rxjs/operators'; //import { tap, switchMap, catchError, finalize, concatMap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

import { LoginResult } from '../framework/models/loginresult';
import { Security } from '../framework/models/security';
import { Configuration } from '../framework/_common/configuration/configuration';
import { Connection } from '../framework/models/connection';
import { Credential } from '../framework/models/credential';
import { BaseService } from '../framework/_common/data/providers/base-service';
import { GetRequest, GetResponse, PostResponse, Filter } from '../framework/_common/base/api';
import { TMSiteDevice } from '../framework/models/tblTMSiteDevice';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService<TMSiteDevice> {

  constructor(public http: HttpClient, public local: Storage) {
    super(http);
  }  
  
  doSignIn(username: string, password: string): Observable<LoginResult> {
    let me = this;
    
    return me.postraw('i21/api/usersecurity/signinentity', {
      // grant_type: 'password',
      // usertype: 'Driver',
      username: btoa(username),
      password: btoa(password)
    })
    .pipe(
      tap(data => { 
        ;
          if (data.LoginMessage == 'Login Successful!') {
            console.log(data);
            Configuration.EntityId = data.EntityId;
            Configuration.FullName = data.strFullName;
            Configuration.IsAdmin = data.ysnAdmin;
            Configuration.Rank = data.intRank;
            Configuration.DefaultLocation = data.intCompanyLocationId;
          }
      }));
  }

  serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }  

  getAuthToken(username: string, password: string, company: string): Observable<Security> {
    let me = this;

    var data = me.serialize({grant_type: 'password', username: username, password: password});
    
    return me.postrawAuth('Token', data)
    .pipe(
      tap(data => { 
        ;
        Configuration.AuthToken = data.access_token;
        me.addToken(data.access_token);
      }));
  }



  loadCompany(): Observable<GetResponse<Connection>> {
    var me = this;
    console.log('LOAD COMPANY');
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 10
    });
    return me.customget<Connection>("i21/api/integration/searchcompanylist", request);
  }

  getConnection(): Observable<Connection> {
    return from(
        this.local.get('connection')
            .then((cred) => {
              console.log(cred);
              let credential = <Connection>JSON.parse(cred);
              if(!credential){
                credential = <Connection>(JSON.parse('{"strLink":"","strCompany":""}'));
              }
              return credential;
            })
        ).pipe(map(m => <Connection>m));
  }

  getCredential(): Observable<Credential> {  
    return from(
        this.local.get('credential')
            .then((cred) => {
              let credential = <Credential>JSON.parse(cred);
              return credential;
            })
        ).pipe(map(m => <Credential>m));
  }

  getToken() {  
    return this.local.get('token')
            .then((token) => {
              console.log(token);
              Configuration.AuthToken = token;
              return token;
            });
  }

  addToken(token) {
    this.local.set('token', token);
  }

  addConnection(connection: Connection) {            
    this.local.set('_servername_' + connection.strLink + '_company_' + connection.strCompany, JSON.parse('{"strLink":"' + connection.strCompany + '","strCompany":"' + connection.strLink + '"}'));    
    this.local.set('connection', JSON.stringify(connection));
  }

  addCredential(credential: Credential) {
    this.local.set('credential', JSON.stringify(credential));
  }

  deleteCredential() {
    this.local.remove('credential');
  }
}
