import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaf3Component } from './new-laf3.component';

describe('NewLaf3Component', () => {
  let component: NewLaf3Component;
  let fixture: ComponentFixture<NewLaf3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLaf3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLaf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
