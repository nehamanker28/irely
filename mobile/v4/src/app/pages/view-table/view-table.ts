import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { CommonSQL } from '../../core/framework/sqlite/implementation/common-sql';
import { SyncDeviceData } from '../../core/models/syncdevicedata';
import { SyncDeviceDataBRL } from '../../core/brl/implementation/syncdevicedata';

@IonicPage()
@Component({
  selector: 'page-view-table',
  templateUrl: 'view-table.html',
})
export class ViewTablePage {
  data: any;
  table: any;  
  dynamicScrollHeight = "500px";
  dynamicScrollWidth = "5000px";
  dynamicColor = "green";

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public sqliteBrl: CommonSQL,
              public loadingCtrl: LoadingController,
              private syncDeviceDataBRL: SyncDeviceDataBRL) {
  }

  ionViewDidLoad() {
    var me = this;
    console.log('ionViewDidLoad ViewTablePage');
    
    me.getTableList();
  }

  getTableList() {
    var me = this;
    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    var _record = new SyncDeviceData();
    me.syncDeviceDataBRL.get(_record).then(res => {
      me.table = res;

      var record = new SyncDeviceData();
      record.intTableStatus = 16;
      record.strDisplayName = 'Invoice';
      record.strTableName = 'invoice';
      record.ysnTableWithErrors = false;
      record.dtmTableLastUpdated = '(no data)';
      record.intTotal = 0;
      record.ysnVisible = true;
      me.table.push(record);

      record = new SyncDeviceData();
      record.intTableStatus = 17;
      record.strDisplayName = 'Invoice Items';
      record.strTableName = 'invoiceitems';
      record.ysnTableWithErrors = false;
      record.dtmTableLastUpdated = '(no data)';
      record.intTotal = 0;
      record.ysnVisible = true;
      me.table.push(record);

      record = new SyncDeviceData();
      record.intTableStatus = 18;
      record.strDisplayName = 'Invoice Tax Code';
      record.strTableName = 'invoicetaxcodes';
      record.ysnTableWithErrors = false;
      record.dtmTableLastUpdated = '(no data)';
      record.intTotal = 0;
      record.ysnVisible = true;
      me.table.push(record);

      console.log( me.table);
      loader.dismiss();
    });
  }

  async getTableData(item) {
    var me = this;

    console.log(item);

    let loader = me.loadingCtrl.create({content: "Loading data...", enableBackdropDismiss: true});
    loader.present();

    me.sqliteBrl.getDataTable(item.strTableName).then(res => {
      console.log(res);

      if(res['length'] < 1) { loader.dismiss(); return; };

      var _fields = Object.keys(res[0]);

      this.data = res;    
      var _newData = [];
      var _AField = ['a','b','c','d','e','f','g','f','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','ab','ac','ad','ae','af','ag','af','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az'];
      for(var key1 in this.data){                                    
        var _item = '{';
        for(var _rec in _fields){          
          // console.log(_fields + ' ' + _rec);
          // console.log(this.data[key1][_fields[_rec]]);

          var _value = this.data[key1][_fields[_rec]];
          if(_value == undefined || _value == null) _value = "";
          _value = _value.toString().replace(/'/g,"").replace(/['"]+/g, "");
          _item = _item + '"' + _AField[_rec] + '":"' + _value + '",';
        }
        _item = _item.substr(0,_item.length-1) + '}';
        console.log(_item);
        _newData.push(JSON.parse(_item.replace(/(\r\n\t|\n|\r\t)/gm,"")));
      }

      console.log(_newData);
      this.data = _newData;

      _item = '{';
      _newData = [];
      for(var key2 in _fields){                                            
        _item = _item + '"' + _AField[key2] + '":"' + _fields[key2] + '",';        
      }
      console.log(_item);
      _item = _item.substr(0,_item.length-1) + '}';       
                
      me.data.unshift(JSON.parse(_item.replace(/(\r\n\t|\n|\r\t)/gm,"")));

      me.dynamicScrollHeight = ((30 * me.data.length) + 550).toString() + 'px';
      //me.dynamicScrollWidth = '4500px';
      me.dynamicScrollWidth = (370 * _fields.length).toString() + 'px';

      console.log(me.dynamicScrollHeight);
      console.log(me.dynamicScrollWidth);

      loader.dismiss();
    }, (error) => {
      loader.dismiss(); 
      console.log(error);
    });
  }

}
