import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController, AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { LineFlushAndTransfer } from '../../framework/models/lineflushandtransfer';
import { Tankwagon } from '../../framework/models/tankwagon';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { ReportService } from '../../providers/report.service';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';

import { GlobalEventsService } from '../../providers/global-events.service';
import { Message } from '../../framework/_common/base/message';

@Component({
  selector: 'app-line-flush-transfer',
  templateUrl: './line-flush-transfer.page.html',
  styleUrls: ['./line-flush-transfer.page.scss'],
})
export class LineFlushTransferPage implements OnInit {

  data = [];
  globalInfo: GlobalInfo;
  currentSelected: any;
  previousSelected: any;
  strLocation: string;
  ysnAdded: boolean = false;
  isLineFlash: boolean = false;

  constructor(public navCtrl: NavController,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private router: Router,
              private globalEventsService: GlobalEventsService,
              public globalBRL: GlobalInfoBRL,
              private commonSQL: CommonSQL,
              private messageUtil: Message,
              private modalCtrl: ModalController,
              private reportService: ReportService) {
  }

  ngOnInit() {
    console.log('setObservables');
    this.setObservables();
  }

  ionViewDidEnter() {
    var me = this;
    
    if(me.ysnAdded == false) {
      // this.getLoadInventoryList();
      me.userGlobalInfo();
      me.TransactionType();            
    }
  }

  async TransactionType() {
    var me = this;
    var confirm = await me.alertCtrl.create({
      header: 'Line Flush and Transfer',
      message: 'Do you want to create?',
      cssClass: 'order-msgbox',
      buttons: [
        {
          text: 'Line Flush',
          handler: () => {
            me.isLineFlash = true;
          }
        },
        {
          text: 'Transfer',
          handler: () => {
            me.isLineFlash = false;
          }
        }
      ]
    });

    confirm.present();
  }

  setObservables() {
    var me = this;
    me.globalEventsService.getObservableLoadInventory().subscribe((data) => {
      console.log('Data Received ', data);

      if(data && me.ysnAdded == false) {
        var item = new LineFlushAndTransfer;
        item.intItemId = data.intItemId;
        item.strItemNo = data.strItemNo;
        item.strDescription = data.strDescription;
        item.dblQuantity = data.dblQuantity;

        me.data.push(item);
        me.ysnAdded = true;
      }
    });
  }

  clearInputValue(elem) {
    elem.getElementRef().nativeElement.children[0].select();
  }

  async getLoadInventoryList() {
    var me = this,
        _query = '';

    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();

    me.commonSQL.getDataQuery('SELECT * FROM lineflushandtransfer').then(res => {
      me.data = JSON.parse(JSON.stringify(res));      
      console.log(me.data);

      loader.dismiss();
    })
    .catch(e => {
      loader.dismiss();
    });
  }


  userGlobalInfo() {
    var me = this;
    me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {      
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
      }
    }).catch(e => {
      console.log
      if(me.globalInfo == null || me.globalInfo == undefined) {
        me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(res => {      
          console.log(res);
          if(res[0]) {
            me.globalInfo = res[0];
          }
        });
      }
    });
  }

  removeSelection() {
    this.data = this.data.filter(val=>val.ysnSelected != true);
  }

  openAddItem() {
    var me = this;
    me.ysnAdded = false;
    Configuration.navParams = me.globalInfo;
    me.router.navigateByUrl('/shift-loadinventory-add-item');
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
      me.currentSelected.ysnSelected = true;
    }
  }


  async done() {
    var me = this;
    var _add = new LineFlushAndTransfer();

    let loader = await me.loadingCtrl.create({message: "Saving...", backdropDismiss: true});
    loader.present();

    
    // +++++ TANK WAGON INSERT +++++
    var _reference = 'No Impact';
    var _type = 'Line Flush';
    if(me.isLineFlash == false) {
      _reference = 'Decreases Inventory of Product';
      _type = 'Transfer';
    }
    var _tankwagon = [];
    var _line = new Tankwagon;
    me.data.forEach(item => {
      _line = new Tankwagon;
      _line.intItemId = item.intItemId;
      _line.strItemNo = item.strItemNo;
      _line.strDescription = item.strDescription;
      _line.dblQuantity = item.dblQuantity * -1;
      _line.strTransactionReference = _reference;
      _line.strTransactionType = _type;
      _tankwagon.push(_line);      
    });    
    me.commonSQL.addBulkData(_line.tablename, _line, _tankwagon).then(res=>{console.log('TANKWAGON UPDATED');});
    // +++++ TANK WAGON INSERT +++++


    // me.lineFlushAndTransferBRL.deleteByQuery(_add.tablename).then(res => {
      me.commonSQL.addBulkData(_add['tablename'],_add, me.data).then(res => {        
       
      });
    // });    

    loader.dismiss();
    me.messageUtil.showToastMessage("Load Inventory has been successfully saved.", function() {
      me.modalCtrl.dismiss({
        'dismissed': true
      });
    }, 2000);
  }

  
  logo() {
    return 'data:image/jpeg;base64,' + localStorage.getItem('company_logo');
  }

  createPdf() {
    var me = this;
    var irelyImage = me.logo();
    var _companyname = localStorage.getItem('company_name') || '';
    var _address = localStorage.getItem('company_address') || '';
    var _county = localStorage.getItem('company_county') || '';
    var _city = localStorage.getItem('company_city') || '';
    var _state = localStorage.getItem('company_state') || '';
    var _zip = localStorage.getItem('company_zip') || '';

    var _date = new Date();
    var _lineflushDate = ("0"+(_date.getMonth()+1)).slice(-2) + "/" + ("0" + _date.getDate()).slice(-2) + "/" + _date.getFullYear();

    var docDefinition = {
      footer: function(currentPage, pageCount) {
        return {
            columns: [
                {
                    text: [
                        {
                            text: 'Page ' + currentPage.toString() + ' of ' + pageCount,
                        }
                    ],
                    margin: [0, 0, 35, 0],
                    alignment: 'right'
                }
            ]
        };
      },
      content: [
        {
          table: {
            widths: [ 105, '*', '*' ],
            body: [
              [
                { image: irelyImage, width: 100 },
                [
                  {
                    table: {
                      body: [
                        [{ text: _companyname, bold: true }, '', ''],
                        [_address + ' ' +  _county, '', ''],
                        [_city + ', ' + _state + ' ' + _zip, '', ''],
                        ['', '', ''],
                        ['', '', '']
                      ]
                    },
                    layout: 'noBorders'
                  }
                ],
                [
                  {
                    table: {
                      widths: [ '*' ],
                      body: [
                        [{ text: 'Line Flush / Pump Around', alignment: 'right', style: 'header',  margin: [0, 0, 0, 0], }],
                        [{ text: (new Date()).toDateString(), alignment: 'right', italics: true}],
                      ]
                    },
                    layout: 'noBorders'
                  }
                ],
              ]
            ]
          },
          layout: 'noBorders'
        },
        {text: '\n'},
		{
			style: 'tableExample',
			table: {
				widths: [90, '*', 80, '*'],
				body: [
					[{text: 'Driver:', style: 'shadedbox'}, {text: me.globalInfo.strFullName, alignment: 'left'}, {text: 'Shift:', style: 'shadedbox'}, {text: me.globalInfo.intShiftCounter, alignment: 'left'}],
					[{text: 'Ticket:', style: 'shadedbox'}, {text: '009000014', alignment: 'left'}, {text: 'Time:', style: 'shadedbox'}, {text: (new Date()).getTime(), alignment: 'left'}, ]
				]
			}
		},
		{text: '\n'},
		{text: '\n'},
        {
          style: 'shadedbox',
          bold: true,
          table: {
            widths: [120, 110, 70, 180],
            body: [
              [{text: 'ITEM', alignment: 'left', style: 'tableHeader', border: [true, true, false, true]}, {text: 'Description', alignment: 'left', style: 'tableHeader', border: [false, true, false, true]}, {text: 'Quantity', alignment: 'right', style: 'tableHeader', border: [false, true, false, true]},{text: 'Comments', alignment: 'right', style: 'tableHeader', border: [false, true, true, true]}],
            ]
          },
        },
        // ++++++++++++++++++++++++++++++++++++++
        // BEGIN - DETAILS SHOULD BE DYNAMIC #1
        // ++++++++++++++++++++++++++++++++++++++
        {
          style: 'tableExample',
          table: {
            widths: [120, 110, 70, 180],
            body: [
                [{text: 'DIESEL-99', alignment: 'left', border: [false, false, false, false]}, {text: 'DIESEL CTR - 99', alignment: 'left', border: [false, false, false, false]}, {text: '52.00', alignment: 'right', border: [false, false, false, false]},{text: 'Full Tank', alignment: 'right', border: [false, false, false, false]}],
            ]
          },
        },
        // ++++++++++++++++++++++++++++++++++++++
        // END - DETAILS SHOULD BE DYNAMIC
        // ++++++++++++++++++++++++++++++++++++++
        {text: '\n'},
      ],
      styles: {
        header: {
          fontSize: 14,
          bold: true,
          alignment: 'center',
          margin: [0, 10, 0, 10],
          fontfamily: 'Wingdings'
        },
        subheader: {
          fontSize: 14,
          bold: true,
          margin: [0, 15, 0, 0]
        },
        story: {
          italic: true,
          alignment: 'center',
          width: '50%'
        },
        body: {
          fontSize: 12,
        },
        shadedbox: {
           alignment: 'left', 
           fillColor: '#cccccc',
           bold: true
        }
      },
      defaultStyle: {
          fontSize: 11.5,
      }
    };

    var _now = new Date(),
        _filename = "Line-Flush-Transfer-" +_now.getFullYear() + ("0"+(_now.getMonth()+1)).slice(-2) + ("0" + _now.getDate()).slice(-2) + ("0" + _now.getHours()+1).slice(-2) + ("0" + _now.getMinutes()).slice(-2);
    me.reportService.create(docDefinition, _filename.replace(/[/\\?%*:|"<>]/g, ''), false);

  }

}
