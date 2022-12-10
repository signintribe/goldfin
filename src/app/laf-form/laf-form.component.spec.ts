import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LafFormComponent } from './laf-form.component';

describe('LafFormComponent', () => {
  let component: LafFormComponent;
  let fixture: ComponentFixture<LafFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LafFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
