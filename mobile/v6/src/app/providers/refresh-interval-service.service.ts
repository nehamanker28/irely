import { Injectable } from '@angular/core';
import { i21SyncDeviceService } from './i21syncdevice.service';
import { CommonSQL } from '../framework/_common/sqlite/implementation/common-sql';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})

export class RefreshIntervalServiceService {
  refreshInterval:any;
  globalInfo: any;

  constructor(
    private i21syncDeviceService: i21SyncDeviceService,
    private commonSQL: CommonSQL,
    private datePipe: DatePipe,
  ) { 
    
  }

  clearRefreshInterval () {
    var me = this;
    console.log("clearRefreeshInterval",me.refreshInterval)
    if(me.refreshInterval && me.refreshInterval != null){
      console.log("clearRefreeshInterval123",me.refreshInterval)
      window.clearInterval(me.refreshInterval)
    }
   
  }
  
  createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
      sub.next(navigator.onLine);
      sub.complete();
      }));
    }

  setRefreshInterval ()
{
  var me = this;
  me.commonSQL.getDataQuery('select * from globalinfo ').then(res => {
    console.log('global info . . .',res)
    if (res[0]) {
      me.globalInfo = res[0];
     
    }
  })
  
   me.refreshInterval = window.setInterval(function () {  
            me.i21syncDeviceService.getOrderInterval(me.globalInfo.intDriverNumber,null) }, 60000);
            
            console.log("SetRefreeshInterval",me.refreshInterval)
            this.createOnline$().subscribe(isOnline => {
                console.log("ONLINE STATUS======",isOnline)
                if(isOnline == true){
                  me.i21syncDeviceService.getTankDetail();
              }       
            });
}}
