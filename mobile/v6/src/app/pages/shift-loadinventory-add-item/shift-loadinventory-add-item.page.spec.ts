import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftLoadinventoryAddItemPage } from './shift-loadinventory-add-item.page';

describe('ShiftLoadinventoryAddItemPage', () => {
  let component: ShiftLoadinventoryAddItemPage;
  let fixture: ComponentFixture<ShiftLoadinventoryAddItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftLoadinventoryAddItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftLoadinventoryAddItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
