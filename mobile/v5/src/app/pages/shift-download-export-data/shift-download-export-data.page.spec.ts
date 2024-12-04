import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ShiftDownloadExportDataPage } from './shift-download-export-data.page';

describe('ShiftDownloadExportDataPage', () => {
  let component: ShiftDownloadExportDataPage;
  let fixture: ComponentFixture<ShiftDownloadExportDataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftDownloadExportDataPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ShiftDownloadExportDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
