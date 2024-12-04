
import { Component, OnInit ,NgZone} from '@angular/core';
import { MenuController, ModalController, NavController, LoadingController ,AlertController} from '@ionic/angular';

import { User } from '../../framework/models/user';
import { UserBRL } from '../../framework/brl/implementation/user';
import { CommonSQL } from '../../framework/_common/sqlite/implementation/common-sql';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { LocationAccuracy } from '@ionic-native/location-accuracy/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GlobalInfoBRL } from '../../framework/brl/implementation/globalinfo';
import { Configuration } from '../../framework/_common/configuration/configuration';
import { Router } from '@angular/router';
import { i21SyncDeviceService } from '../../providers/i21syncdevice.service';
import { Platform } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { GlobalInfo } from '../../framework/models/globalinfo';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  // testArray=[
  //   { 
  //     name: 'Died Diesel', 
  //     vol: '60',  
  //   },
  
  //   { 
  //     name: 'Diesel', 
  //     vol: '36',
  //   },
  //   { 
  //     name: 'Propane', 
  //     vol: '75',  
  //   },
  
  //   { 
  //     name: 'E85', 
  //     vol: '55',
  //   }
  // ];
  locationCoords: any;
  timetest: any;
  order_status = 'pending';
  currentSort = '';
  currentFilter = '';
  currentSort2 = '';
  dataLoadInventory = [];
  previousOrders = [];
  newOrdersList = [];
  isNewOrder : boolean;
  globalInfo: any;
  data = [];
  detail = [];
  allOrders = [];
  searchValue: any;
  truck: any;
  selectedTruckNumber: any;
  selectedTruckMaxQuantity: any;
  counter: number = 0;
  min :number;
  max :number;
  time:any;
  lastTimeDiffrence:any;
  rateTimer:any;
  newOrderSubscription: Subscription
  orderDataChangedSubscription: Subscription

  constructor(private menu: MenuController,
              public userBRL: UserBRL,
              public loadingCtrl: LoadingController,
              private router: Router,
              public alertCtrl: AlertController,
              private commonSQL: CommonSQL,
              public locationAccuracy: LocationAccuracy,
              public androidPermissions:AndroidPermissions,
              private geolocation: Geolocation,
              public globalBRL: GlobalInfoBRL,
              public globalValue : GlobalInfo,
              public platform: Platform,
              private zone: NgZone,
              private i21syncDeviceService: i21SyncDeviceService,
              public sqlite: SQLite,) {
                //
                var me = this;
                 me.time=new Date();
                platform.resume.subscribe((result)=>{
                  me.lastTimeDiffrence="";
                  console.log('Platform Resume Event'+me.time);
                  console.log(this.timeDifference(new Date(),me.time));
                  var gettimediffrence=this.timeDifference(new Date(),me.time);
                  this.zone.run(() => {
                    this.lastTimeDiffrence = 'last synced '+ gettimediffrence;
                });
                  me.lastTimeDiffrence='last synced '+ gettimediffrence;
              });
    
              }
              
  ngOnInit() {
    console.log('dashboard');

    this.menu.enable(true);    

    this.locationCoords = {
      latitude: "",
      longitude: "",
      accuracy: "",
      timestamp: ""
    }
    this.timetest = Date.now();
    this.newOrderSubscription = this.i21syncDeviceService.isNewOrderSubject$.subscribe((res)=>{
      console.log("NEW ORDER LOG",res)
      this.isNewOrder = res;
     })
     this.orderDataChangedSubscription = this.i21syncDeviceService.OrderSubject$.subscribe((res)=>{
      console.log("ORDER DATA CHANGED LOG DASHBOARD",res)
      this.data = res;
     })
    //this.checkGPSPermission();

  }

  ngOnDestroy() {
    if (this.rateTimer) {
      console.log("DESTRY TIMER")
      clearInterval(this.rateTimer);
    }
  }
  ionViewDidEnter() {
    this.menu.enable(true);
    // this.sample();
    var me = this;
    me.currentFilter = ' tblMBILOrder.strOrderStatus != \'Delivered\' ';
    me.currentSort = ' order by tblMBILOrder.strRouteId, cast(tblMBILOrder.intSequence as int) asc,tblMBILOrder.dtmRequestedDate'; // order by tblMBILOrder.strRouteId, tblMBILOrder.intSequence, tblMBILOrder.dtmRequestedDate
    console.log('ionViewDidLoad OrderMainPage');
    ///cureent date ////
   
    //  me.currentSort = 'order by tblMBILOrder.strRouteId, cast(tblMBILOrder.intSequence as int) asc,Where tblMBILOrder.dtmRequestedDate = cast(now() as date)';
    //  console.log('Sorting using current date',this.currentSort);

    me.userGlobalInfo();
    me.getLoadInventoryList();
    me.menu.enable(true);
    me.order_status = 'pending';
    
  }
  timeDifference(current, previous) {
    
    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;
    
    var elapsed = current - previous;
    
    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' seconds ago';   
    }
    
    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minutes ago';   
    }
    
    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' hours ago';   
    }

    else if (elapsed < msPerMonth) {
         return 'approximately ' + Math.round(elapsed/msPerDay) + ' days ago';   
    }
    
    else if (elapsed < msPerYear) {
         return 'approximately ' + Math.round(elapsed/msPerMonth) + ' months ago';   
    }
    
    else {
         return 'approximately ' + Math.round(elapsed/msPerYear ) + ' years ago';   
    }
}
  getLoadInventoryList() {
   debugger;
    var me = this;
    me.max=0;
    me.min=0;
    me.selectedTruckMaxQuantity=0;
    me.dataLoadInventory = [];
    me.commonSQL.getDataQuery('SELECT *, (select strUnitMeasure from loadinventory where intItemNumber = tankwagon.intItemId LIMIT 1) as strUnitMeasure FROM tankwagon where intItemId IN (select intItemNumber from loadinventory) order by intItemId').then(res => {
      var _records = JSON.parse(JSON.stringify(res));

      console.log(_records);
      var _previous = {'intItemId': 0, 'strItemNo': '', 'strDescription': '', 'dblQuantity': 0, 'strUnitMeasure': 0,'dblBalance':0};
      var _inventoryMinMaxQuantity = {'maxQuantity':0,'deliveredQuantity':0};
      var inventorydetail=[];
      _records.forEach(element => {
        if(_previous.intItemId != element.intItemId) {
          me.min=0;
          console.log("DBL ==== ",element.dblBalance)
          if(_previous.intItemId != 0) {
           
            me.dataLoadInventory.push(_previous);
            _previous = element;
            
             if(element.dblBalance=='')
            {
              _previous.dblBalance=_previous.dblQuantity;
            }
          }
          else if(element.strTransactionType != 'Line Flush') {
           
            _previous = element;
            if(element.dblBalance=='')
            {
              _previous.dblBalance = element.dblQuantity;
            }
          }
        }
        else if(element.strTransactionType != 'Line Flush') {
          if(element.strTransactionReference == 'Increases Inventory of Product')
           {
            _previous.dblQuantity=(_previous.dblQuantity*1)+(element.dblQuantity*1);
            console.log("DBLQUANTITY +======",_previous.dblQuantity)
           }
           else if(element.strTransactionReference == 'Decreases Inventory of Product'){
             var minval = Math.abs(element.dblQuantity);
              me.min=me.min+minval;
             
            
           
           }
           _previous.dblBalance=_previous.dblQuantity-me.min;

        }
       // me.selectedTruckMaxQuantity=me.selectedTruckMaxQuantity + _previous.dblQuantity;
      // console.log('Max Dbl Quantity:'+me.selectedTruckMaxQuantity+','+_previous.dblQuantity);
      });
      if(_previous.intItemId != 0) {
      me.dataLoadInventory.push(_previous);
      console.log(me.dataLoadInventory);
      }
     // me.buttonStatus();

    })
    .catch(e => {
      console.log(e);
    });
  }
  async receiveOrder() {
    // console.log(record);
 
    var me = this;
    me.counter = 0;
    me.time = new Date();
    let loader = await me.loadingCtrl.create({message: "Fetching tables...", backdropDismiss: true});

    let confirm = await me.alertCtrl.create({
      message: 'Are you sure you want to continue?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            loader.present();
            // me.commonSQL.getDataQuery('SELECT strOrderNumber FROM tblMBILOrder').then((res) => {
            //   console.log(res);
            //   var _orderIds = "'";
            //   res.forEach(order => {
            //     _orderIds = _orderIds + order['strOrderNumber'] + "', '"
            //   });
            //   me.i21syncDeviceService.getGenerateExport(me.globalInfo.intDriverNumber || 0,'complete_order', _orderIds + "0'").then((data)=>{
            //     console.log(data);
            //     console.log('NEW ORDERS ==> ', data);

            //     me.commonSQL.getDataQuery('SELECT COUNT(*) as total FROM tblMBILOrder').then((res) => {
            //       var _date = new Date();
            //       console.log(res);
            //       me.commonSQL.updateDataQuery('UPDATE globalinfo SET dtmReceivedOrders = \'' + _date.toLocaleString() + '\',  strTotalOrderReceived = \'' + res[0]['total'] + '\'').then(res=>{
            //         me.getOrderList();
            //         loader.dismiss();
            //       });
            //     });
            //   });
            // });
            me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,loader)
           // loader.dismiss();
           // me.userGlobalInfo();
            me.getLoadInventoryList();
          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }
//Function to get dbQunatity 
  // truckSetup(trucknumber) {
  //   var me = this;
  
  //   me.commonSQL.getDataQuery('select * from tblSMTruck order by strTruckNumber').then(res => {
  //    // me.truck = res;
  //     console.log(' ++++ TRUCK SETUP Dashboard ',  res);
  //     for(var i=0;i<=res.length;i++)
  //     {
  //         if(res[i].strTruckNumber=trucknumber)
  //         {
  //           me.selectedTruckMaxQuantity='';
  //           me.selectedTruckMaxQuantity=res[i].dblCapacity;
  //           console.log('Max Quantity:'+me.selectedTruckMaxQuantity);
  //           me.getLoadInventoryList();
  //           break;
            
  //         }
  //     }
  //    // me.shiftSetup();
  //   });
  // }

  userGlobalInfo() {
    var me = this;
    me.isNewOrder = false;
    me.globalBRL.getByQuery('select * from globalinfo where ysnLogged = \'true\'').then(async res => {
      console.log(res);
      if(res[0]) {
        me.globalInfo = res[0];
        let loader = await me.loadingCtrl.create({message: "Loading...", backdropDismiss: true});
        console.log('truck number:'+res[0].strTruckNumber);
        (await me.i21syncDeviceService.getOrderList(me.globalInfo.intDriverNumber,this.currentFilter,this.currentSort)).subscribe((res) =>{
          //debugger;
          console.log("Response ======",res);
          me.data = res;
          if(me.data.length == 0){
            //me.getOrderList();
            me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,loader)
          }
        })

      }
    });
  }
  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
  async showOrderDetails(item) {
    var me = this;
    console.log('order details ===> ',item);
    Configuration.navParams = {orderDetail: item};
    me.router.navigateByUrl('/order-detail');
  }
  async showDeliveries() {
    var me = this;
    me.router.navigateByUrl('/order');
  }
  async getOrderList() {
    var me = this,
        _query = '';

        ;
    //debugger;
   // me.createInvoiceButton = true;
    me.detail = [];
    me.data = [];
    me.allOrders = [];
    var me = this;
    let loader = await me.loadingCtrl.create({message: "Loading data...", backdropDismiss: true});
    loader.present();
    var todayDate = new Date().toISOString().slice(0, 10);
    // await me.commonSQL.getDataQuery('SELECT intSiteNumber from tblMBILOrder ').then(res => {
    //   console.log("dtmRequestedDate=========",res);
    // })
  
    //me.currentSort2 = ' Select tblMBILOrder.dtmRequestedDate from tblMBILOrder '
    console.log("TODAY++++++++++++++",todayDate)

   
    _query = `SELECT \'order-item\' as baseClass, tblMBILOrder.*,
                     CASE WHEN tblMBILOrder.strRouteId IS NULL THEN \'XXX\' ELSE tblMBILOrder.strRouteId END as strRouteId2,
                     tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice,
                     tblMBILOrderItem.intContractDetailId, tblContractExport.strContractNumber,
                     IFNULL(tblContractExport.dblAvailableQty,0) as dblAvailableQty,
                     (SELECT IFNULL(SUM(dblQuantity),0) as dblQuantity FROM tankwagon where tankwagon.intItemId = tblMBILOrderItem.intItemId) as dblTankQuantity
              FROM tblMBILOrder
              LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId
              LEFT JOIN tblTMSite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteID
              LEFT JOIN tblARCustomer ON tblMBILOrder.intEntityId = tblARCustomer.intEntityId
              LEFT JOIN tblContractExport ON tblContractExport.intContractDetailId = tblMBILOrderItem.intContractDetailId
              Where tblMBILOrder.intDriverId = '${ me.globalInfo.intDriverNumber }' `;
    // _query = 'SELECT \'order-item\' as baseClass, tblMBILOrder.*, tblTMSite.*, tblARCustomer.*, tblMBILOrderItem.dblQuantity, tblMBILOrderItem.dblPrice, tblMBILOrderItem.intContractDetailId, tblContractExport.dblQuantity, contractheader.strContractNumber FROM orders LEFT JOIN tblMBILOrderItem ON tblMBILOrder.intOrderId = tblMBILOrderItem.intOrderId LEFT JOIN consumptionsite ON tblMBILOrderItem.intSiteId = tblTMSite.intSiteId LEFT JOIN tblARCustomer ON tblTMSite.strEntityNo = tblARCustomer.strCustomerNumber LEFT JOIN contractheader ON contractheader.intContractHeaderId = tblMBILOrderItem.intContractDetailId LEFT JOIN tblContractExport ON tblContractExport.intContractHeaderId = contractheader.intContractHeaderId ';
//and date(tblMBILOrder.dtmRequestedDate) ='${todayDate}' ///----if only ,  today's order needed
    console.log(_query);


  
    //else {
      console.log(_query + ' and ' + me.currentFilter + ' ' + me.currentSort );
      me.commonSQL.getDataQuery(_query + ' and ' + me.currentFilter + ' ' + me.currentSort)
      .then(res => {
        me.detail = [];
        me.data = [];
        me.allOrders = [];

        me.allOrders = res;
        console.log('all orders are here. . .')
        console.log(me.allOrders);
        //debugger;
        me.newOrdersList = this.allOrders.filter(({ strOrderNumber: id1 }) => !this.previousOrders.some(({ strOrderNumber: id2 }) => id2 === id1));
   
        console.log("DIfference between orders ====",me.newOrdersList);

        var _strOrder = '';
        var _strRoute = '';
        var _hasNoRoute = false;
        for(var x = 0; x <= res.length - 1; x++) {
          if(_strOrder != res[x].strOrderNumber) {
            if(res[x].dblQuantity > res[x].dblTankQuantity) {
              res[x].strOrderStatus = 'fuelnotenough';
            }
            if(res[x].strRouteId == null) {
              res[x].strRouteId2 = 'NOROUTE';
              if(_hasNoRoute == false) {
                res[x].intSequence = 1;
                _hasNoRoute = true;
              }
            }
            else if(_strRoute != res[x].strRouteId) {
              res[x].strRouteId2 = 'XXX';
            }

            console.log(res[x]);
      

            me.data.push(res[x]);
          }
          _strOrder = res[x].strOrderNumber;
          _strRoute = res[x].strRouteId;
        }

        loader.dismiss();
      },
      err => {
        console.log(err);
        loader.dismiss();
      });
   //}

  }
  checkGPSPermission() {
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION).then(
      result => {
        if (result.hasPermission) {

          //If having permission show 'Turn On GPS' dialogue
          this.askToTurnOnGPS();
        } else {

          //If not having permission ask for permission
          this.requestGPSPermission();
        }
      },
      err => {
        alert(err);
      }
    );
  }

  requestGPSPermission() {
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {
      if (canRequest) {
        console.log("4");
      } else {
        //Show 'GPS Permission Request' dialogue
        this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.ACCESS_COARSE_LOCATION)
          .then(
            () => {
              // call method to turn on GPS
              this.askToTurnOnGPS();
            },
            error => {
              //Show alert if user click on 'No Thanks'
              alert('requestPermission Error requesting location permissions ' + error)
            }
          );
      }
    });
  }

  askToTurnOnGPS() {
    this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {
        // When GPS Turned ON call method to get Accurate location coordinates
        this.getLocationCoordinates()
      },
      error => alert('Error requesting location permissions ' + JSON.stringify(error))
    );
  }

  getLocationCoordinates() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.locationCoords.latitude = resp.coords.latitude;
      this.locationCoords.longitude = resp.coords.longitude;
      this.locationCoords.accuracy = resp.coords.accuracy;
      this.locationCoords.timestamp = resp.timestamp;
    }).catch((error) => {
      alert('Error getting location' + error);
    });
  }

  sample() {
    var me = this;
    
    console.log('TESTING HERE!!');

    var _record = new User();
    _record.intUserId = 1;
    _record.strFullName = 'sample';
    _record.strUserName = 'sample';
    _record.strPassword = 'sample';
    _record.intDriverNumber = 1;
    _record.ContactParentId = 1;
    _record.CompanyName = '01';
    _record.Sample = 'sample';

    console.log(_record);

    me.userBRL.add(_record).then(result => {
      console.log('ADD SUCESS');
      console.log(result);                 
    },
    (error) => {
      console.log('ADD FAILED');
      console.log(error);
    });

  }

  // updateDatabase(): Promise<any> {
  //   var me = this;
  //   return new Promise ((resolve, reject) => {  
  //     console.log('++++++++++++++++ EXEC UPDATE SCRIPT - START ++++++++++++++++');
  //     me.commonSQL.executeQuery('ALTER TABLE user ADD COLUMN Sample string').then(result=>{
  //       console.log(result);
  //       console.log('++++++++++++++++ EXEC UPDATE SCRIPT -  END ++++++++++++++++');
  //       resolve(result);
  //     })
  //   }); 
  // }

}
