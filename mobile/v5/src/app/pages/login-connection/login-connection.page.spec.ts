import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginConnectionPage } from './login-connection.page';

describe('LoginConnectionPage', () => {
  let component: LoginConnectionPage;
  let fixture: ComponentFixture<LoginConnectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginConnectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginConnectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
