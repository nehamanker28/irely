import { Component, SystemJsNgModuleLoaderConfig } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';

import { CommonSQL } from '../../core/framework/sqlite/implementation/common-sql';

import { ApplicableTaxCode } from '../../core/models/applicabletaxcode';
import { ConsumptionSite } from '../../core/models/consumptionsite';
import { Customer } from '../../core/models/customer';
import { DeliveryHistory } from '../../core/models/deliveryhistory';
import { Device } from '../../core/models/device';
import { GlobalInfo } from '../../core/models/globalinfo';
import { HosepipingCheck } from '../../core/models/hosepipingcheck';
import { Invoice } from '../../core/models/invoice';
import { InvoiceItems } from '../../core/models/invoiceitems';
import { InvoiceTaxCodes } from '../../core/models/invoicetaxcodes';
import { Item } from '../../core/models/item';
import { Location } from '../../core/models/location';
import { Order } from '../../core/models/order';
import { Shift } from '../../core/models/shift';
import { SyncDeviceData } from '../../core/models/syncdevicedata';
import { TaxCode } from '../../core/models/taxcode';
import { Terms } from '../../core/models/terms';
import { Truck } from '../../core/models/truck';
import { User } from '../../core/models/user';
import { VehicleInspection } from '../../core/models/vehicleinspection';
import { OutOfGas } from '../../core/models/outofgas';
import { OrderSite } from '../../core/models/ordersite';
import { OrderItem } from '../../core/models/orderitem';
import { OrderTaxCode } from '../../core/models/ordertaxcode';
import { Payment } from '../../core/models/payment';
import { LoadInventory } from '../../core/models/loadinventory';

import { CompanyPreference } from '../../core/models/CompanyPreference';
import { CompanyPreferenceBRL } from '../../core/brl/implementation/companypreference';
import { Jsonp } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-configuration-main',
  templateUrl: 'configuration-main.html',
})
export class ConfigurationMainPage {
data:object = [];
counter: number = 0;
startDateInterval: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public commonSQL: CommonSQL,
    public loadingCtrl: LoadingController,
    public comprefBRL: CompanyPreferenceBRL,
    public alertCtrl: AlertController
      ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfigurationMainPage');

    this.loadConfig();
  }

  loadConfig() {
    var me = this;

    me.comprefBRL.getByQuery("select * from companypreference").then(res => {
      if(res.length > 0) {
        me.data = JSON.parse(JSON.stringify(res[0]));
      }
    })
  }

  openPage(menu) {
    console.log(menu);
    this.navCtrl.push(menu);
  }

  refreshTable() {
    var me = this;
    me.counter = 0;

    let loader = me.loadingCtrl.create({content: "Refreshing tables...", enableBackdropDismiss: true});
    var refresh = function() {
      if (me.counter >= 54) { //total number of tables x 2
        loader.dismiss();
        me.counter = 0;
        me.navCtrl.push("LoginMainPage");
        clearInterval(me.startDateInterval);
      }
    }    
    me.startDateInterval = setInterval(function(){ refresh() }, 500);

    let confirm = this.alertCtrl.create({
      message: 'This will require the application to restart. Do you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loader.present();

            // #1
            me.commonSQL.dropTable(new ApplicableTaxCode()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new ApplicableTaxCode()).then(res => {
                console.log(res);
                me.counter++;
              });
            });   
            
            // #2
            me.commonSQL.dropTable(new ConsumptionSite()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new ConsumptionSite()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
            
            // #3
            me.commonSQL.dropTable(new Customer()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Customer()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #4
            me.commonSQL.dropTable(new DeliveryHistory()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new DeliveryHistory()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
            
            // #5
            me.commonSQL.dropTable(new Device()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Device()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #6
            me.commonSQL.dropTable(new GlobalInfo()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new GlobalInfo()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #7
            me.commonSQL.dropTable(new HosepipingCheck()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new HosepipingCheck()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #8
            me.commonSQL.dropTable(new Invoice()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Invoice()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #9
            me.commonSQL.dropTable(new InvoiceItems()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new InvoiceItems()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #10
            me.commonSQL.dropTable(new InvoiceTaxCodes()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new InvoiceTaxCodes()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #11
            me.commonSQL.dropTable(new Item()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Item()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #12
            me.commonSQL.dropTable(new Location()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Location()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #13
            me.commonSQL.dropTable(new Order()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Order()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #14
            me.commonSQL.dropTable(new Shift()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Shift()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #15
            me.commonSQL.dropTable(new SyncDeviceData()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new SyncDeviceData()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #16
            me.commonSQL.dropTable(new TaxCode()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new TaxCode()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #17
            me.commonSQL.dropTable(new Terms()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Terms()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #18
            me.commonSQL.dropTable(new Truck()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Truck()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #19
            me.commonSQL.dropTable(new User()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new User()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #20
            me.commonSQL.dropTable(new VehicleInspection()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new VehicleInspection()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #21
            me.commonSQL.dropTable(new OutOfGas()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new OutOfGas()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #22
            me.commonSQL.dropTable(new OrderSite()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new OrderSite()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #23
            me.commonSQL.dropTable(new OrderItem()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new OrderItem()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #24
            me.commonSQL.dropTable(new OrderTaxCode()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new OrderTaxCode()).then(res => {
                console.log(res);
                me.counter++;
              });
            });
        
            // #25
            me.commonSQL.dropTable(new Payment()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new Payment()).then(res => {
                console.log(res);
                me.counter++;
              });
            });

            // #26
            me.commonSQL.dropTable(new LoadInventory()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new LoadInventory()).then(res => {
                console.log(res);
                me.counter++;
              });
            });            
        
            // #27
            me.commonSQL.dropTable(new CompanyPreference()).then(res => {
              console.log(res);
              me.counter++;
              me.commonSQL.createTable(new CompanyPreference()).then(res => {
                console.log(res);
                me.counter++;
              });
            });

          }
        },
        {
          text: 'No',
          handler: () => {}
        }
      ]
    });
    confirm.present();
  }
}
