import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftLoadinventoryPage } from './shift-loadinventory.page';

describe('ShiftLoadinventoryPage', () => {
  let component: ShiftLoadinventoryPage;
  let fixture: ComponentFixture<ShiftLoadinventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftLoadinventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftLoadinventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
