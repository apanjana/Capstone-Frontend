import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBusBookComponent } from './user-bus-book.component';

describe('UserBusBookComponent', () => {
  let component: UserBusBookComponent;
  let fixture: ComponentFixture<UserBusBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserBusBookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserBusBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
