import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBusPageComponent } from './user-bus-page.component';

describe('UserBusPageComponent', () => {
  let component: UserBusPageComponent;
  let fixture: ComponentFixture<UserBusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBusPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
