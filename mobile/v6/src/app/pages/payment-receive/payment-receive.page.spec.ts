import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentReceivePage } from './payment-receive.page';

describe('PaymentReceivePage', () => {
  let component: PaymentReceivePage;
  let fixture: ComponentFixture<PaymentReceivePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentReceivePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentReceivePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
