import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalEventsService {

  private eventSubjectLoadInventory = new Subject<any>();
  private eventSubjectSite = new Subject<any>();
  private eventSubjectItem = new Subject<any>();
  private eventSubjectTax = new Subject<any>();
  private eventSubjectComment = new Subject<any>();
  private eventSubjectCustomer = new Subject<any>();
  private eventSubjectPayment = new Subject<any>();
  private eventSubjectSignature = new Subject<any>();

  publishEventsLoadInventory(data: any) {
    this.eventSubjectLoadInventory.next(data);
  }

  getObservableLoadInventory(): Subject<any> {
      return this.eventSubjectLoadInventory;
  }

  publishEventsSite(data: any) {
      this.eventSubjectSite.next(data);
  }

  getObservableSite(): Subject<any> {
      return this.eventSubjectSite;
  }

  getObservableSiteClear(): Subject<any> {
    return this.eventSubjectSite = new Subject<any>();
}

  publishEventsItem(data: any) {
    this.eventSubjectItem.next(data);
  }

  getObservableItem(): Subject<any> {
      return this.eventSubjectItem;
  }

  getObservableItemClear(): Subject<any> {
    return this.eventSubjectItem = new Subject<any>();
  }

  publishEventsTax(data: any) {
    this.eventSubjectTax.next(data);
  }

  getObservableTax(): Subject<any> {
      return this.eventSubjectTax;
  }

  getObservableTaxClear(): Subject<any> {
    return this.eventSubjectTax = new Subject<any>();
  }

  publishEventsComment(data: any) {
    this.eventSubjectComment.next(data);
  }

  getObservableComment(): Subject<any> {
    return this.eventSubjectComment;
  }  

  publishEventsCustomer(data: any) {
    this.eventSubjectCustomer.next(data);
  }

  getObservableCustomer(): Subject<any> {
      return this.eventSubjectCustomer;
  }

  publishEventsPayment(data: any) {
    this.eventSubjectPayment.next(data);
  }

  getObservablePayment(): Subject<any> {
      return this.eventSubjectPayment;
  }

  getObservablePaymentClear(): Subject<any> {
    return this.eventSubjectPayment = new Subject<any>();
  }

  getObservableSignature(): Subject<any> {
    return this.eventSubjectSignature;
  }

  publishEventsSignature(data: any) {
    this.eventSubjectSignature.next(data);
  }  

  getObservableSignatureClear(): Subject<any> {
    return this.eventSubjectSignature = new Subject<any>();
  }

}
