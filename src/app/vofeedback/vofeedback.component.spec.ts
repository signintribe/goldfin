import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VofeedbackComponent } from './vofeedback.component';

describe('VofeedbackComponent', () => {
  let component: VofeedbackComponent;
  let fixture: ComponentFixture<VofeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VofeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VofeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
