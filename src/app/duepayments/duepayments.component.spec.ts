import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuepaymentsComponent } from './duepayments.component';

describe('DuepaymentsComponent', () => {
  let component: DuepaymentsComponent;
  let fixture: ComponentFixture<DuepaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuepaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuepaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
