import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LafvComponent } from './lafv.component';

describe('LafvComponent', () => {
  let component: LafvComponent;
  let fixture: ComponentFixture<LafvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LafvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
