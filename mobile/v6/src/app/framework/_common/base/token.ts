import { BaseEntity } from '../base/base-entity';
export class Token extends BaseEntity {
    public intLoginDeviceTokenId: number;
    public intEntityId: number;
    public strDeviceToken: string;
    public strPlatform: string;
    public dtmLastLogin?: Date;
}