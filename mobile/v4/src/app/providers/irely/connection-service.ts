import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import 'rxjs/add/operator/map';

import { BaseService } from '../../core/framework/data/providers/base-service';
import { GetRequest, GetResponse } from '../../core/framework/api/api';
import { Connection } from '../../core/models/connection';

export class ConnectionService extends BaseService<Connection> {
  loadCompany(): Observable<GetResponse<Connection>> {
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 10
    });
    return this.customget<Connection>("i21/api/integration/searchcompanylist", request);
  }
}
