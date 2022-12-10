import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Bo2Component } from './bo2.component';

describe('Bo2Component', () => {
  let component: Bo2Component;
  let fixture: ComponentFixture<Bo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Bo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Bo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
