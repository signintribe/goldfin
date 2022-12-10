import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lafv3Component } from './lafv3.component';

describe('Lafv3Component', () => {
  let component: Lafv3Component;
  let fixture: ComponentFixture<Lafv3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Lafv3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lafv3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
