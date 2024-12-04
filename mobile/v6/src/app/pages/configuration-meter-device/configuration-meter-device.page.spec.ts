import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConfigurationMeterDevicePage } from './configuration-meter-device.page';

describe('ConfigurationMeterDevicePage', () => {
  let component: ConfigurationMeterDevicePage;
  let fixture: ComponentFixture<ConfigurationMeterDevicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationMeterDevicePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurationMeterDevicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
