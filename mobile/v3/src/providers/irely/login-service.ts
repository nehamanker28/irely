import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { LoginResult } from '../../core/models/loginresult';
import { Security } from '../../core/models/security';
import { Configuration } from '../../core/framework/common/configuration';
import { DeviceToken } from '../../core/framework/push/models/device-token';
import { BaseService } from '../../core/framework/data/providers/base-service';

@Injectable()
export class LoginService extends BaseService<DeviceToken> {
  constructor(public http: Http) {
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
    .map(response => <LoginResult>response.json())
    .do(data => { 
      if (data.LoginMessage == 'Login Successful!') {
        console.log(data);
        Configuration.EntityId = data.EntityId;
        Configuration.FullName = data.strFullName;
        Configuration.IsAdmin = data.ysnAdmin;
        Configuration.Rank = data.intRank;
        Configuration.DefaultLocation = data.intCompanyLocationId;
      }
    });
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
    .map(response => <Security>response.json())
    .do(data => { 
      Configuration.AuthToken = data.access_token;
    });
  }


}
