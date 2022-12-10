import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LafForm4Component } from './laf-form4.component';

describe('LafForm4Component', () => {
  let component: LafForm4Component;
  let fixture: ComponentFixture<LafForm4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafForm4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LafForm4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
