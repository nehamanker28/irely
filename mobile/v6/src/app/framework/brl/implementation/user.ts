import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../_common/sqlite/implementation/common-sql';
import { IUserBRL } from '../interface/iuser';
import { User } from '../../models/user';
import { GlobalInfo } from '../../models/globalinfo';

@Injectable()
export class UserBRL extends IUserBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

    loginOffline(username: string, password: string) {
        var me = this;
        try
        {            
            return me.getByQuery("SELECT * FROM user WHERE strUserName='" + username + "' and strPassword='" + password + "'");
        }
        catch (e) {
            return new Promise((resolve, reject) => {
                resolve("failed");
            });
        }
    }

    public defaultRecord(record: User){
        var _global = new GlobalInfo();
        _global.intUserMobileId = record.intUserMobileId;
        _global.intUserId = record.intUserId;
        _global.intLocation = record.intLocation;
        _global.intDriverNumber = record.intDriverNumber;
        _global.strFullName = record.strFullName;
        _global.strLocation = record.strLocation;
        _global.strPassword = record.strPassword;
        _global.strUserName = record.strUserName;

        _global.ysnShiftOnGoing = false;
        _global.intShiftCounter = null;
        _global.strTruckNumber = '';

        _global.ContactParentId = record.ContactParentId;
        _global.CompanyName = record.CompanyName;
        _global.ysnLogged = true;

        return _global;
    }

}