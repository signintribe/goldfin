import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaf2Component } from './new-laf2.component';

describe('NewLaf2Component', () => {
  let component: NewLaf2Component;
  let fixture: ComponentFixture<NewLaf2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLaf2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLaf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
