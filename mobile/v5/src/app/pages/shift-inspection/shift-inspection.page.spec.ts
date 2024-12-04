import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftInspectionPage } from './shift-inspection.page';

describe('ShiftInspectionPage', () => {
  let component: ShiftInspectionPage;
  let fixture: ComponentFixture<ShiftInspectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftInspectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftInspectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
