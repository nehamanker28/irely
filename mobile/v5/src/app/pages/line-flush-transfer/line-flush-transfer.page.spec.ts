import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LineFlushTransferPage } from './line-flush-transfer.page';

describe('LineFlushTransferPage', () => {
  let component: LineFlushTransferPage;
  let fixture: ComponentFixture<LineFlushTransferPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LineFlushTransferPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LineFlushTransferPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
