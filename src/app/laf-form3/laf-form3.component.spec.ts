import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LafForm3Component } from './laf-form3.component';

describe('LafForm3Component', () => {
  let component: LafForm3Component;
  let fixture: ComponentFixture<LafForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LafForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
