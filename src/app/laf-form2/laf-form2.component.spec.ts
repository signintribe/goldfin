import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LafForm2Component } from './laf-form2.component';

describe('LafForm2Component', () => {
  let component: LafForm2Component;
  let fixture: ComponentFixture<LafForm2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafForm2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LafForm2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
