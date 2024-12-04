import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InvoiceAddSitePage } from './invoice-add-site.page';

describe('InvoiceAddSitePage', () => {
  let component: InvoiceAddSitePage;
  let fixture: ComponentFixture<InvoiceAddSitePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceAddSitePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InvoiceAddSitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
