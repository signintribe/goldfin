import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmofeedbackComponent } from './cmofeedback.component';

describe('CmofeedbackComponent', () => {
  let component: CmofeedbackComponent;
  let fixture: ComponentFixture<CmofeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmofeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmofeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
