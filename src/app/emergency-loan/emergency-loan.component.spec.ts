import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencyLoanComponent } from './emergency-loan.component';

describe('EmergencyLoanComponent', () => {
  let component: EmergencyLoanComponent;
  let fixture: ComponentFixture<EmergencyLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmergencyLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmergencyLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
