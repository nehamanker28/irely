import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { Message } from '../../framework/_common/base/message';
import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';
import { SyncDeviceDataBRL } from '../../framework/brl/implementation/syncdevicedata';
import { OrderBRL } from '../../framework/brl/implementation/order';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { SyncDeviceData } from '../../framework/models/syncdevicedata';

@Component({
  selector: 'app-configuration-table-update',
  templateUrl: './configuration-table-update.page.html',
  styleUrls: ['./configuration-table-update.page.scss'],
})
export class ConfigurationTableUpdatePage implements OnInit {
  data: object = [];
  globalInfo: any;

  constructor(public navCtrl: NavController,
    public loadingCtrl: LoadingController, 
    private messageUtil: Message,
    private i21syncDeviceService: i21SyncDeviceService,
    private syncDeviceDataBRL: SyncDeviceDataBRL,
    private commonSQL: CommonSQL,
    private orderBrl: OrderBRL) {}

  ngOnInit() {
    console.log('ConfigurationTableUpdatePage');
    this.tableStatus();
    this.userGlobalInfo();
  }

  userGlobalInfo() {
    var me = this;
    me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {      
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
      }
    });
  }

  async tableStatus() {
    var me = this;

    const loader = await this.loadingCtrl.create({
      message: 'Loading data...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });
    loader.present();

    var _record = new SyncDeviceData();
    me.commonSQL.getData(_record.tablename).then(res => {
      me.data = res;
      console.log(me.data);
      loader.dismiss();
    }); 
  }

 async updateData(item) {    
    var me = this;
    console.log(item);

    const loader = await this.loadingCtrl.create({
      message: 'Fetching data...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });
    loader.present();

    me.i21syncDeviceService.getGenerateExport(me.globalInfo.intDriverNumber, item.strTableName, "").then(res=>{
      console.log('getGenerateExport: ' + res);   
      loader.dismiss();
    });
  }

  updateDeviceDataList(item: SyncDeviceData, loader: any, records: any, entity: any, data: any) {
    var me = this,
        _now = new Date();

    return new Promise ((resolve, reject) => {

      me.commonSQL.createTable(entity).then(res => {
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
