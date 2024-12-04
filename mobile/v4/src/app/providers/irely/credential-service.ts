import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Credential } from '../../core/models/credential';
import { Connection } from '../../core/models/connection';

@Injectable()
export class CredentialService {
  constructor(public local: Storage) {
    local.ready().then(() => {

    });
  }

  getConnection(): Observable<Connection> {
    return Observable
      .fromPromise(
        this.local.get('connection')
            .then((cred) => {
              let credential = <Connection>JSON.parse(cred);
              if(!credential){
                credential = <Connection>(JSON.parse('{"strLink":"","strCompany":""}'));
              }
              return credential;
            })
        )
      .map(m => <Connection>m);
  }

  getCredential(): Observable<Credential> {  
    return Observable
      .fromPromise(
        this.local.get('credential')
            .then((cred) => {
              let credential = <Credential>JSON.parse(cred);
              return credential;
            })
        )
      .map(m => <Credential>m);
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
