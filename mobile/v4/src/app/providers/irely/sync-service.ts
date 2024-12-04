import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import 'rxjs/add/operator/map';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { GetRequest, GetResponse } from '../../core/framework/api/api';
import { Location } from '../../core/models/location';

export class SyncService extends BaseService<Location> {
  loadCompany(): Observable<GetResponse<Location>> {
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 10
    });
    return this.customget<Location>("i21/api/integration/searchcompanylist", request);
  }
}
