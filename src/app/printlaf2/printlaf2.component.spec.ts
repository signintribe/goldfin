import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Printlaf2Component } from './printlaf2.component';

describe('Printlaf2Component', () => {
  let component: Printlaf2Component;
  let fixture: ComponentFixture<Printlaf2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Printlaf2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Printlaf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
