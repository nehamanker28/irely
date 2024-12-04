import { Component, OnInit, Input } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-invoice-add-contract',
  templateUrl: './invoice-add-contract.page.html',
  styleUrls: ['./invoice-add-contract.page.scss'],
})
export class InvoiceAddContractPage implements OnInit {

  @Input() items: any;
  contracts = [];
  customerName: string;
  currentSelected: any;
  previousSelected: any;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    var me = this;
    console.log('Contract Modal ==> ', me.items);
    console.log(me.items);
    me.customerName = me.items['customerName'];
    me.contracts = me.items;
  }

  closeContract() {
    var me = this;
    var _contracts = [];
    _contracts.push(me.currentSelected);
    me.modalController.dismiss({
      'dismissed': true,
      'contracts': _contracts
    });
  }

  selectContract(item: any) {
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

}
