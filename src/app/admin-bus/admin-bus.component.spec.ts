import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBusComponent } from './admin-bus.component';

describe('AdminBusComponent', () => {
  let component: AdminBusComponent;
  let fixture: ComponentFixture<AdminBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminBusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
