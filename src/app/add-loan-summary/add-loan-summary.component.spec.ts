import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLoanSummaryComponent } from './add-loan-summary.component';

describe('AddLoanSummaryComponent', () => {
  let component: AddLoanSummaryComponent;
  let fixture: ComponentFixture<AddLoanSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLoanSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLoanSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
