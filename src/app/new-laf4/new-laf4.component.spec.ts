import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLaf4Component } from './new-laf4.component';

describe('NewLaf4Component', () => {
  let component: NewLaf4Component;
  let fixture: ComponentFixture<NewLaf4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLaf4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLaf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
