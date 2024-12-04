import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { BaseService } from '../../core/framework/data/providers/base-service';

import { Profile } from '../../core/models/profile';

@Injectable()
export class ProfileService extends BaseService<Profile> {
  constructor(public http: Http) {
    super(http);

    let me = this;
    me.uri = 'entitymanagement/api/entity';
    me.idProperty = 'intEntityId';
  }
}
