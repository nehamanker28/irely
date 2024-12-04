import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { GlobalInfo } from '../../framework/models/globalinfo';
import { LoadInventory } from '../../framework/models/loadinventory';
import { Tankwagon } from '../../framework/models/tankwagon';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Message } from '../../framework/_common/base/message';

@Component({
  selector: 'app-shift-download-export-data',
  templateUrl: './shift-download-export-data.page.html',
  styleUrls: ['./shift-download-export-data.page.scss'],
})
export class ShiftDownloadExportDataPage implements OnInit {

  data = [];
  currentSelected: any;
  previousSelected: any;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private router: Router,
              private commonSQL: CommonSQL,
              private messageUtil: Message,
              private modalCtrl: ModalController,
              private file: File,
              private i21syncDeviceService: i21SyncDeviceService,
              private globalEventsService: GlobalEventsService) {
  }

  ngOnInit() {
    console.log('setObservables');
  }

  ionViewDidEnter() {
    console.log('ionViewDidLoad ShiftDownloadExportDataPage');
    var me = this;

    me.i21syncDeviceService.getExportFiles().then((data)=>{
      console.log(data);
      var _data = JSON.parse(data);
      me.data = _data.data;
    });
  }

  selectItem(item: any) {
    var me = this;
    console.log(item);
    console.log(me.currentSelected);

    if(me.currentSelected == null){
      me.currentSelected = item;
    }
    else{
      me.previousSelected = me.currentSelected;
      me.previousSelected.ysnSelected = false;
      me.currentSelected = item;
    }
  }

  async done(){
    var me = this;
    console.log(me.currentSelected);

    me.file.checkDir(me.file.dataDirectory, 'export_data').then(res => {
      me.processDownload();
    }).catch(err => {
      console.log(err);
      me.file.createDir(me.file.dataDirectory, 'i21_files', false).then(res => {
        console.log('folder created');
        me.file.createDir(me.file.dataDirectory, 'export_data', false).then(res => {
          console.log('folder created');

          me.processDownload();

        });
      });
    });

  }
  async receiveOrder() {
    console.log('processing receive order');
    var me = this;
    let counter = 0;
    // me.commonSQL.getDataQuery('SELECT strOrderNumber FROM tblMBILOrder').then((res) => {
    //   console.log(res);
    //   var _orderIds = "'";
    //   res.forEach(order => {
    //     _orderIds = _orderIds + order['strOrderNumber'] + "', '"
    //   });
      console.log('getting new orders . . .');
      me.commonSQL.getDataQuery('select * from globalinfo where ysnLogged = \'true\'').then(res=>{
        let info = res[0];
        console.log(info);
        me.i21syncDeviceService.getGenerateExport(info.intDriverNumber || 0,'complete_order',"'0'").then((data)=>{
          console.log('updating orders . . .');
          console.log(data);
          console.log('NEW ORDERS ==> ', data);

          me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
            var _date = new Date();
            console.log(res);
            me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
            });
          });
        });
      })

    // });


  }
  async processDownload() {
    var me = this;
    let loader = await me.loadingCtrl.create({ message: "Fetching data...", backdropDismiss: true });
    loader.present();

    me.i21syncDeviceService.getZipAndExtract(me.currentSelected.strFileName, 'all').then((res) => {
      console.log('IMPORTING getZipAndExtract DONE ==> ', res);
      me.receiveOrder();
      me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
        var _date = new Date();
        console.log(res);

        me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedFullData = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
          let getOrderIds = `select invoice.intOrderId,item.intItemId,item.intSiteId,sum(item.dblQuantity)dblQuantity
                             from invoice invoice
                             inner join invoiceitems item on invoice.intOrderId = item.intOrderId
                             inner join tblMBILOrderItem orderitem on item.intOrderId = orderitem.intOrderId and item.intItemId = orderitem.intItemId
                             Group by invoice.intOrderId,item.intItemId,item.intSiteId`;

          // let getOrderIds = `Select * from invoiceitems`;
        me.commonSQL.getDataQuery(getOrderIds).then(res=> {
          console.log('data from order ids ')
          // console.log(res);

          for(let item of res){
            console.log(item);
            let update_quantity = "Update tblMBILOrderItem set dblQuantity = CASE WHEN (dblQuantity - "+ item.dblQuantity +") < 0 THEN 0 else dblQuantity - "+ item.dblQuantity +" end  where intOrderId = '" +  item.intOrderId + "' and intItemId = '"+ item.intItemId +"'";
            console.log(update_quantity);
            me.commonSQL.updateDataQuery(update_quantity).then(res=>{
              //
              me.commonSQL.getDataQuery("Select * from tblMBILOrderItem where intOrderId = '" +  item.intOrderId + "'").then(result=>{
                console.log('Current value of order item');
                console.log(result);
              })
            });
          }

         console.log('data from order ids end')
        })


        loader.dismiss();

          me.messageUtil.showToastMessage("Data successfully downloaded.", function() {
            me.modalCtrl.dismiss({
              'dismissed': true
            });
          }, 3000);

          me.navCtrl.pop();

        });
      });
    },
    err => {
      console.log(err);
      loader.dismiss();
    });

  }

}
