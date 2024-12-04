import { SQLite } from '@ionic-native/sqlite';
import { Injectable } from '@angular/core';
import { CommonSQL } from '../../framework/sqlite/implementation/common-sql';
import { IPaymentBRL } from '../interface/ipayment';

@Injectable()
export class PaymentBRL extends IPaymentBRL {

    constructor(public common: CommonSQL, public db: SQLite){
        super(common, db);
    }

}