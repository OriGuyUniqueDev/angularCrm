import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCardMobileComponent } from './customer-card-mobile.component';

describe('CustomerCardMobileComponent', () => {
  let component: CustomerCardMobileComponent;
  let fixture: ComponentFixture<CustomerCardMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCardMobileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerCardMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
