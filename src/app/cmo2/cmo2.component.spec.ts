import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cmo2Component } from './cmo2.component';

describe('Cmo2Component', () => {
  let component: Cmo2Component;
  let fixture: ComponentFixture<Cmo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cmo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
