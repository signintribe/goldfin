import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Laf4Component } from './laf4.component';

describe('Laf4Component', () => {
  let component: Laf4Component;
  let fixture: ComponentFixture<Laf4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laf4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Laf4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
