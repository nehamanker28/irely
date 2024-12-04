import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankwagonInventoryDetailsPage } from './tankwagon-inventory-details.page';

describe('TankwagonInventoryDetailsPage', () => {
  let component: TankwagonInventoryDetailsPage;
  let fixture: ComponentFixture<TankwagonInventoryDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankwagonInventoryDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TankwagonInventoryDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
