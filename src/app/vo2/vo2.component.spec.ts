import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Vo2Component } from './vo2.component';

describe('Vo2Component', () => {
  let component: Vo2Component;
  let fixture: ComponentFixture<Vo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Vo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Vo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
