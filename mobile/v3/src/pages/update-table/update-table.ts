import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { MessageUtil } from '../../core/framework/message/message-util';
import { i21syncDeviceService } from '../../providers/irely/i21syncdevice-service';
import { SyncDeviceData } from '../../core/models/syncdevicedata';
import { SyncDeviceDataBRL } from '../../core/brl/implementation/syncdevicedata';
import { OrderBRL } from '../../core/brl/implementation/order';
import { GlobalInfoBRL } from '../../core/brl/implementation/globalinfo';
import { CommonSQL } from '../../core/framework/sqlite/implementation/common-sql';

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

import { OrderSite } from '../../core/models/ordersite';
import { OrderItem } from '../../core/models/orderitem';
import { OrderTaxCode } from '../../core/models/ordertaxcode';
import { GlobalInfo } from '../../core/models/globalinfo';
import { Configuration } from '../../core/framework/common/configuration';
import { ContractHeader } from '../../core/models/contractheader';
import { ContractDetail } from '../../core/models/contractdetail';

import { CompanyPreference } from '../../core/models/CompanyPreference';

@IonicPage()
@Component({
  selector: 'page-update-table',
  templateUrl: 'update-table.html',
})
export class UpdateTablePage {
  data: object = [];
  globalInfo: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public loadingCtrl: LoadingController, 
              private messageUtil: MessageUtil,
              private i21syncDeviceService: i21syncDeviceService,
              private syncDeviceDataBRL: SyncDeviceDataBRL,
              private sqliteBRL: CommonSQL,
              private orderBrl: OrderBRL,
              private globalBRL: GlobalInfoBRL,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdateTablePage');

    this.tableStatus();
    this.userGlobalInfo();
  }

  userGlobalInfo() {
    var me = this;
    me.globalBRL.getRecord(new GlobalInfo).then(res => {      
      console.log(res);
      me.globalInfo = res;
    });
  }

  tableStatus() {
    var me = this;
    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    var _record = new SyncDeviceData();
    var _default = me.syncDeviceDataBRL.defaultRecord(_record);
    console.log(_record);
    me.syncDeviceDataBRL.createTable(_record).then(res=> {
      console.log(res);
      me.syncDeviceDataBRL.get(_record).then(res => {    
        console.log(res);
        if(res.length > 1) {
          me.syncDeviceDataBRL.get(_record).then(res => {
            me.data = res;
            console.log(me.data);
            loader.dismiss();
          });          
        }
        else {
          me.syncDeviceDataBRL.addBulk(_record,_default).then(res => {    
            console.log(res);
            me.syncDeviceDataBRL.get(_record).then(res => {
              me.data = res;
              console.log(me.data);
              loader.dismiss();
            })
          });
        }        
      });
    });
  }

  updateData(item) {    
    var me = this;
    console.log(item);

    let loader = me.loadingCtrl.create({content: "Fetching data...", enableBackdropDismiss: true});
    loader.present();

    switch(item.strTableName) {
      case 'orders':
          me.i21syncDeviceService.getOrder(me.globalInfo.intDriverNumber).subscribe(res=>{
            console.log(res);   

            if(res.total == 0) { me.noData(loader); return; }

            let _rawData = res;
            let _entity = new Order();          
            me.sqliteBRL.dropTable(_entity).then(res => {
              console.log(res);                                
              return me.updateDeviceDataList(item,loader,_rawData, _entity, _rawData);         
            });
          });
          break;
        case 'orderitem':
          me.i21syncDeviceService.getOrderItem(me.globalInfo.intDriverNumber).subscribe(res=>{
            console.log(res);   

            if(res.total == 0) { me.noData(loader); return; }

            let _rawData = res;
            let _entity = new OrderItem();
            me.sqliteBRL.dropTable(_entity).then(res => {
              console.log(res);                                
              return me.updateDeviceDataList(item,loader,_rawData, _entity, _rawData);         
            });
          });
          break;
        case 'ordertaxcode':
          me.i21syncDeviceService.getOrderTaxCode(me.globalInfo.intDriverNumber).subscribe(res=>{
            console.log(res);   

            if(res.total == 0) { me.noData(loader); return; }

            let _rawData = res;
            let _entity = new OrderTaxCode();
            me.sqliteBRL.dropTable(_entity).then(res => {
              console.log(res);                                
              return me.updateDeviceDataList(item,loader,_rawData, _entity, _rawData);         
            });
          });
          break;
      case 'customer':
          me.i21syncDeviceService.getCustomer().subscribe(res=>{
            console.log(res);   

            if(res['total'] == 0) { me.noData(loader); return; }

            let _rawData = res;
            let _entity = new Customer();
            me.sqliteBRL.dropTable(_entity).then(res => {
              console.log(res);                                
              return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
            });
          });
          break;
      case 'consumptionsite':
          me.i21syncDeviceService.getConsumptionSite().subscribe(res=>{
            console.log(res);   

            if(res['total'] == 0) { me.noData(loader); return; }

            let _rawData = res;
            let _entity = new ConsumptionSite();
            me.sqliteBRL.dropTable(_entity).then(res => {
              console.log(res);                                
              return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
            });
          });
          break;            
      case 'deliveryhistory':
        me.i21syncDeviceService.getDeliveryHistory().subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new DeliveryHistory();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;  
      case 'device':
        me.i21syncDeviceService.getDevice().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new Device();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;   
      case 'item':
        me.i21syncDeviceService.getItem().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new Item();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      case 'applicabletaxcode':
        me.i21syncDeviceService.getApplicableTaxCode().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new ApplicableTaxCode();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      case 'taxcode':
        me.i21syncDeviceService.getTaxCode().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.noData(loader); return; }

          var _res = res['data'];          
          var _newRes = {data:[],success:true,total:100};
          for(var x = 0; x <= _res.length - 1; x++) {
            for(var y = 0; y <= _res[x]['tblSMTaxCodeRates'].length - 1; y++) {
              var _record = {};                          
              _record['intTaxCodeId'] = _res[x].intTaxCodeId;
              _record['strTaxCode'] = _res[x].strTaxCode;
              _record['dblRate'] = _res[x]['tblSMTaxCodeRates'][y].dblRate;
              _record['dtmEffectiveDate'] = _res[x]['tblSMTaxCodeRates'][y].dtmEffectiveDate;
              _record['strCalculationMethod'] = _res[x]['tblSMTaxCodeRates'][y].strCalculationMethod;
              _record['intTaxCodeRateId'] = _res[x]['tblSMTaxCodeRates'][y].intTaxCodeRateId;
              _newRes['data'].push(_record);
            }
          }

          _newRes['total'] = _newRes['data'].length;

          console.log(_newRes);

          let _rawData = _newRes;
          let _entity = new TaxCode();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      case 'terms':
        me.i21syncDeviceService.getTerms().subscribe(res=>{
          console.log(res);   

          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new Terms();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      case 'location':
        me.i21syncDeviceService.getLocation(me.globalInfo.ContactParentId).subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new Location();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      case 'contractheader':
        me.i21syncDeviceService.getContractHeader().subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new ContractHeader();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      case 'contractdetail':
        me.i21syncDeviceService.getContractDetail().subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new ContractDetail();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      case 'configuration':
        me.i21syncDeviceService.getConfiguration().subscribe(res=>{
          console.log(res);   
          
          if(res['total'] == 0) { me.noData(loader); return; }

          let _rawData = res;
          let _entity = new CompanyPreference();
          me.sqliteBRL.dropTable(_entity).then(res => {
            console.log(res);                                
            return me.updateDeviceDataList(item, loader, _rawData, _entity, _rawData);         
          });
        });
        break;
      default:
          console.log(item);
          loader.dismiss();
    }

        
    //contractheader
    //contractdetail
    //user
    //truck
    //meter
  }

  updateDeviceDataList(item: SyncDeviceData, loader: any, records: any, entity: any, data: any) {
    var me = this,
        _now = new Date();

    return new Promise ((resolve, reject) => {

      me.sqliteBRL.createTable(entity).then(res => {
        if(records.length < 1){
          loader.dismiss();
          resolve(res);
        }
        me.orderBrl.addBulk(entity,data).then(res => {
          item.dtmTableLastUpdated = _now.toLocaleDateString() + ' ' + _now.toLocaleTimeString();

          var record = new SyncDeviceData();
          record.dtmTableLastUpdated = item.dtmTableLastUpdated;
          record.intTableStatus = item.intTableStatus;
          record.strDisplayName = item.strDisplayName;
          record.strTableName = item.strTableName;
          record.ysnTableWithErrors = item.ysnTableWithErrors;
          record.intTotal = records.total || records.length;
          record.ysnIncludeSyncAll = item.ysnIncludeSyncAll;

          me.syncDeviceDataBRL.update(record).then(res => {
            console.log(res);
            loader.dismiss();
            resolve(res);
          });        
          
        }) ;
      });
    });
    
  }

  noData(loader: any) {
    var me = this;

    me.messageUtil.showAlertInfoMessage("No data received.");
    loader.dismiss();
  }
}
