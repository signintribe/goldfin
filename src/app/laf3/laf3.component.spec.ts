import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Laf3Component } from './laf3.component';

describe('Laf3Component', () => {
  let component: Laf3Component;
  let fixture: ComponentFixture<Laf3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Laf3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Laf3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
