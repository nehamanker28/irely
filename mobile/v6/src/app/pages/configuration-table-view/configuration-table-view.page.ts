import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';

import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

@Component({
  selector: 'app-configuration-table-view',
  templateUrl: './configuration-table-view.page.html',
  styleUrls: ['./configuration-table-view.page.scss'],
})
export class ConfigurationTableViewPage implements OnInit {

  data = [];
  dataTemp: any;
  table: any;  
  currentTable = "";
  lastId = 0;
  lastField = "";
  dynamicScrollHeight = "500px";
  dynamicScrollWidth = "5000px";
  dynamicColor = "green";

  constructor(public navCtrl: NavController,
              public commonSQL: CommonSQL,
              public loadingCtrl: LoadingController) {
  }

  ngOnInit() {
    var me = this;
    console.log('ConfigurationTableViewPage');
    me.getTableList();
  }

  loadData(infiniteScroll) {
    var me = this;
    if(me.currentTable == "") infiniteScroll.complete();
    setTimeout(() => {
      me.getTableData();
      infiniteScroll.complete();
    }, 500);
  }

  async getTableList() {
    var me = this;
    
    const loader = await this.loadingCtrl.create({
      message: 'Loading data...',
      duration: 0,
      spinner: 'circles',
      backdropDismiss: true
    });
    loader.present();

    me.commonSQL.getData('syncdevicedata').then(res => {
      me.table = res;
      console.log( me.table);
      loader.dismiss();
    });
  }

  setCurrentTable(item) {
    var me = this;
    me.currentTable = item;
    me.lastId = 0;
    me.lastField = '';    
    me.data = [];
    me.getTableData();
  }

  async getTableData() {
    var me = this;
    var item = me.currentTable;
    var _queryString = "";

    console.log(item);

    if(!item) return;

    if(me.lastField == "") {
      _queryString = "SELECT * FROM " + item['strTableName'] + " LIMIT 20";
    }    
    else {
      _queryString = "SELECT * FROM " + item['strTableName'] + " WHERE " + me.lastField + " > " + me.lastId + " LIMIT 20";
    }

    me.commonSQL.getDataQuery(_queryString).then(res => {
      console.log(res);

      if(res['length'] < 1) { return; };

      var _fields = Object.keys(res[0]);

      me.dataTemp = res;    
      var _AField = ['a','b','c','d','e','f','g','f','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','aa','ab','ac','ad','ae','af','ag','af','ai','aj','ak','al','am','an','ao','ap','aq','ar','as','at','au','av','aw','ax','ay','az'];
      for(var key1 in me.dataTemp){                                    
        var _item = '{';
        for(var _rec in _fields){          
          var _value = me.dataTemp[key1][_fields[_rec]];
          if(_value == undefined || _value == null) _value = "";
          _value = _value.toString().replace(/'/g,"").replace(/['"]+/g, "");
          _item = _item + '"' + _AField[_rec] + '":"' + _value + '",';
        }
        _item = _item.substr(0,_item.length-1) + '}';
        me.data.push(JSON.parse(_item.replace(/(\r\n\t|\n|\r\t)/gm,"")));
      }            

      _item = '{';
      for(var key2 in _fields){                                            
        _item = _item + '"' + _AField[key2] + '":"' + _fields[key2] + '",';        
      }      

      if(me.lastField == '') {
        _item = _item.substr(0,_item.length-1) + '}';                       
        me.data.unshift(JSON.parse(_item.replace(/(\r\n\t|\n|\r\t)/gm,"")));
      }

      console.log(me.data);

      if(me.lastField == '') {
        me.lastField = _fields[0];
        me.lastId = me.data[me.data.length-1].a;
      }
      else {
        me.lastId = me.data[me.data.length-1].a;
      }

      me.dynamicScrollHeight = ((30 * me.data.length) + 550).toString() + 'px';
      me.dynamicScrollWidth = (370 * _fields.length).toString() + 'px';

      console.log(me.data);
      console.log(me.dynamicScrollHeight);
      console.log(me.dynamicScrollWidth);

      // loader.dismiss();
    }, (error) => {
      // loader.dismiss(); 
      console.log(error);
    });
  }

}
