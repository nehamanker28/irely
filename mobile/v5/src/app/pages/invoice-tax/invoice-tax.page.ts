import { Component, OnInit, Input } from '@angular/core';
import { ModalController  } from '@ionic/angular';
import { Configuration } from '../../framework/_common/configuration/configuration';

@Component({
  selector: 'app-invoice-tax',
  templateUrl: './invoice-tax.page.html',
  styleUrls: ['./invoice-tax.page.scss'],
})
export class InvoiceTaxPage implements OnInit {

  @Input() items: any;
  taxes = [];
  itemNo: string;
  taxGroup: string;
  price: 0.00;
  qty: 0.00;
  total: 0.00;

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    var me = this;
    console.log('Tax Modal');
    console.log(me.items);
    me.itemNo = me.items['strItemNo'];
    me.taxGroup = me.items['strTaxGroup'];
    me.price = me.items['price'];
    me.qty = me.items['quantity'];
    me.total = me.items['strItemNo'];
    me.taxes = me.items.tblOrderTaxCode;
    console.log(me.itemNo);
    console.log(me.taxes);
  }

  deleteTax() {
    var me = this;
    me.taxes = me.taxes.filter(val=>val.ysnSelected != true);
  }

  closeTax() {
    var me = this;
    me.modalController.dismiss({
      'dismissed': true,
      'taxes': me.taxes
    });
  }

}
