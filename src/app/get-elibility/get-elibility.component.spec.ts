import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetElibilityComponent } from './get-elibility.component';

describe('GetElibilityComponent', () => {
  let component: GetElibilityComponent;
  let fixture: ComponentFixture<GetElibilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetElibilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetElibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
