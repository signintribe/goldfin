import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintLaf3Component } from './print-laf3.component';

describe('PrintLaf3Component', () => {
  let component: PrintLaf3Component;
  let fixture: ComponentFixture<PrintLaf3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintLaf3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintLaf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
