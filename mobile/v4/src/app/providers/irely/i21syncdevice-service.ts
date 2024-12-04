import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from "rxjs/Rx";
import { GetRequest } from '../../core/framework/api/api';
import { Filter } from '../../core/framework/api/api';

import { Order } from '../../core/models/order';
import { Location } from '../../core/models/location';
import { ConsumptionSite } from '../../core/models/consumptionsite';
import { Customer } from '../../core/models/customer';
import { DeliveryHistory } from '../../core/models/deliveryhistory';
import { Device } from '../../core/models/device';
import { Item } from '../../core/models/item';
import { ApplicableTaxCode } from '../../core/models/applicabletaxcode';
import { TaxCode } from '../../core/models/taxcode';
import { Terms } from '../../core/models/terms';
import { Shift } from '../../core/models/shift';
import { DeviceToken } from '../../core/framework/push/models/device-token';
import { BaseService } from '../../core/framework/data/providers/base-service';
import { Storage } from '@ionic/storage';
import { OrderItem } from '../../core/models/orderitem';
import { OrderTaxCode } from '../../core/models/ordertaxcode';
import { CompanyPreference } from '../../core/models/CompanyPreference';
import { ContractHeader } from '../../core/models/contractheader';
import { ContractDetail } from '../../core/models/contractdetail';

@Injectable()
export class i21syncDeviceService extends BaseService<DeviceToken> {
  constructor(public http: Http,
              private storage: Storage) {
    super(http);
  }

  getCustomer(): Observable<Customer> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('accountsreceivable/api/report/searchcustomerinquiryreport', request)
    .map(response => <Customer>response.json())
    .do(data => { 
      console.log('customer');
      console.log(data);         
    });
  }      
  
  getConsumptionSite(): Observable<ConsumptionSite> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('tankmanagement/api/mobilebilling/searchconsumptionsites', request)
    .map(response => <ConsumptionSite>response.json())
    .do(data => { 
      console.log('consumptionsite');
      console.log(data);
    });
  }

  getDeliveryHistory(): Observable<DeliveryHistory> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('tankmanagement/api/mobilebilling/searchdeliveryhistory', request)
    .map(response => <DeliveryHistory>response.json())
    .do(data => { 
      console.log('deliveryhistory');
      console.log(data);
    });
  }

  getDevice(): Observable<Device> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('tankmanagement/api/mobilebilling/getsitedevices', request)
    .map(response => <Device>response.json())
    .do(data => { 
      console.log('device');
      console.log(data);
    });
  }
  
  getItem(): Observable<Item> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('inventory/api/item/searchitemlite', request)
    .map(response => <Item>response.json())
    .do(data => { 
      console.log('item');
      console.log(data); 
    });
  }

  getApplicableTaxCode(): Observable<ApplicableTaxCode> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('tankmanagement/api/mobilebilling/searchconsumptionsites', request)
    .map(response => <ApplicableTaxCode>response.json())
    .do(data => {       
      console.log(data);
    });
  }

  getTaxCode(): Observable<TaxCode> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('i21/api/taxcode/get', request)
    .map(response => <TaxCode>response.json())
    .do(data => {       
      console.log('taxcode (with tblSMTaxCodeRates)'); //tblSMTaxCodeRates
      console.log(data);
    });
  }

  getTerms(): Observable<Terms> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('i21/api/term/search', request)
    .map(response => <Terms>response.json())
    .do(data => {       
      console.log('terms');
      console.log(data);
    });
  }

  getLocation(id): Observable<Location> {
    let me = this;

    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999,
      filter: [{c:"intEntityId",v:id,cj:"or",g:"g0"}]
    });
    return me.getraw('i21/api/companylocation/SearchUserCompanyLocations', request)
    .map(response => <Location>response.json())
    .do(data => { 
      console.log('location');
      console.log(data);
    });
  }  

  getContractHeader(): Observable<ContractHeader> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('ContractManagement/api/contractHeader/SearchMBILContractHeader', request)
    .map(response => <ContractHeader>response.json())
    .do(data => {       
      console.log('contractheader');
      console.log(data);
    });
  }

  getContractDetail(): Observable<ContractDetail> {
    let me = this;
    
    let request = new GetRequest({
      page: 1,
      start: 0,
      limit: 99999
    });
    return me.getraw('ContractManagement/api/contractHeader/SearchMBILContractDetail', request)
    .map(response => <ContractDetail>response.json())
    .do(data => {       
      console.log('contractdetail');
      console.log(data);
    });
  }



  getOrder(driverId): Observable<any> {
    let me = this;
    
    let request = new GetRequest({      
      filter: driverId
    });
    return me.getraw('mobilebilling/api/order/getorder', request)
    .map(response => <Order>response.json())
    .do(data => {
      console.log('orders');
      console.log(data); 
    });
  }

  getOrderItem(driverId): Observable<any> {
    let me = this;
    
    let request = new GetRequest({      
      filter: driverId
    });
    return me.getraw('mobilebilling/api/order/getorderitem', request)
    .map(response => <OrderItem>response.json())
    .do(data => {
      console.log('orderitem');
      console.log(data);
    });
  }

  getOrderTaxCode(driverId): Observable<any> {
    let me = this;
    
    let request = new GetRequest({      
      filter: driverId
    });
    return me.getraw('mobilebilling/api/order/getordertaxcode', request)
    .map(response => <OrderTaxCode>response.json())
    .do(data => {
      console.log('ordertaxcode');
      console.log(data);
    });
  }

  getConfiguration(): Observable<any> {
    let me = this;
    
    let request = new GetRequest();
    return me.getraw('mobilebilling/api/companypreference/get', request)
    .map(response => <CompanyPreference>response.json())
    .do(data => {
      console.log('configuration');
      console.log(data);
    });
  }

  getShift(): Observable<any> {
    let me = this;
    
    return me.getraw('mobilebilling/api/shift/startshift')
    .map(response => <Shift>response.json())
    .do(data => {
      console.log('shift');
      console.log(data);
    });
  }

}
