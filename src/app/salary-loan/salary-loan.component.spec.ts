import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryLoanComponent } from './salary-loan.component';

describe('SalaryLoanComponent', () => {
  let component: SalaryLoanComponent;
  let fixture: ComponentFixture<SalaryLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
