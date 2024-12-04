import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment-receive',
  templateUrl: './payment-receive.page.html',
  styleUrls: ['./payment-receive.page.scss'],
})
export class PaymentReceivePage implements OnInit {

  searchCustomer = [];
  voidPayment = [];
  completePayment = [];
  methodChange = [];

  data = [];
  detail = [];
  currentSort = '';
  currentFilter = '';
  currentCustomer = '';
  currentPayment: any;
  customers = "";
  _isCheck = true;
  PaymentId = null;
  globalInfo: any;
  location: any[];
  currentLocation: any = '';

  constructor() { }

  ngOnInit() {
  }

}
