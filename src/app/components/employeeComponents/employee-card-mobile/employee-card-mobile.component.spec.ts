import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCardMobileComponent } from './employee-card-mobile.component';

describe('EmployeeCardMobileComponent', () => {
  let component: EmployeeCardMobileComponent;
  let fixture: ComponentFixture<EmployeeCardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeCardMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
