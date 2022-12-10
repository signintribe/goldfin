import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldrateComponent } from './goldrate.component';

describe('GoldrateComponent', () => {
  let component: GoldrateComponent;
  let fixture: ComponentFixture<GoldrateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldrateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
