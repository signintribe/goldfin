import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Laf2Component } from './laf2.component';

describe('Laf2Component', () => {
  let component: Laf2Component;
  let fixture: ComponentFixture<Laf2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laf2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Laf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
