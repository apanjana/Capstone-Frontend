import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupModalComponent } from './login-signup-modal.component';

describe('LoginSignupModalComponent', () => {
  let component: LoginSignupModalComponent;
  let fixture: ComponentFixture<LoginSignupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSignupModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
