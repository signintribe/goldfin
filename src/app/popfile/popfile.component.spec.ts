import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopfileComponent } from './popfile.component';

describe('PopfileComponent', () => {
  let component: PopfileComponent;
  let fixture: ComponentFixture<PopfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
