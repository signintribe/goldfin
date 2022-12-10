import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cop2Component } from './cop2.component';

describe('Cop2Component', () => {
  let component: Cop2Component;
  let fixture: ComponentFixture<Cop2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cop2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cop2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
