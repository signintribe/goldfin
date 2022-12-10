import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lafv2Component } from './lafv2.component';

describe('Lafv2Component', () => {
  let component: Lafv2Component;
  let fixture: ComponentFixture<Lafv2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lafv2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lafv2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
