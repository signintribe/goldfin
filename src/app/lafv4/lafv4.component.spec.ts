import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lafv4Component } from './lafv4.component';

describe('Lafv4Component', () => {
  let component: Lafv4Component;
  let fixture: ComponentFixture<Lafv4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lafv4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lafv4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
