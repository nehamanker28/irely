import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TankwagonInventoryPage } from './tankwagon-inventory.page';

describe('TankwagonInventoryPage', () => {
  let component: TankwagonInventoryPage;
  let fixture: ComponentFixture<TankwagonInventoryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TankwagonInventoryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TankwagonInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
