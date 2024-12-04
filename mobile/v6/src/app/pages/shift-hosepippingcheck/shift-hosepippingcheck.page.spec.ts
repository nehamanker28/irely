import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftHosepippingcheckPage } from './shift-hosepippingcheck.page';

describe('ShiftHosepippingcheckPage', () => {
  let component: ShiftHosepippingcheckPage;
  let fixture: ComponentFixture<ShiftHosepippingcheckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftHosepippingcheckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftHosepippingcheckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
