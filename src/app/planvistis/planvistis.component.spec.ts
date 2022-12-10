import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanvistisComponent } from './planvistis.component';

describe('PlanvistisComponent', () => {
  let component: PlanvistisComponent;
  let fixture: ComponentFixture<PlanvistisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanvistisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanvistisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
