import { BaseService } from '../../data/providers/base-service';
import { DeviceToken } from '../models/device-token';

export class PushService extends BaseService<DeviceToken> {
  uri: string = "globalcomponentengine/api/mobilenotification";
}
