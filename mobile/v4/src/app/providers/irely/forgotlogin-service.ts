import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import 'rxjs/add/operator/map';
import { BaseService } from '../../core/framework/data/providers/base-service';

@Injectable()
export class ForgotLoginService extends BaseService<any> {
  constructor(public http: Http) {
    super(http);
  }  
  
  sendEmail(email: string) : Observable<string> {
    return this.getraw(
      `i21/api/usersecurity/sendpassword?email=${email}`
    )
    .map(response => response.json());
  }
}
