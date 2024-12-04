import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftTransferPage } from './shift-transfer.page';

describe('ShiftTransferPage', () => {
  let component: ShiftTransferPage;
  let fixture: ComponentFixture<ShiftTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
